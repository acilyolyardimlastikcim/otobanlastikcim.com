const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Replace <button onClick={() => navigate('/...')}> with <Link to="/...">
  // We need to match <button ... onClick={() => navigate('/some/path')} ... > Text </button>
  // This can be complex with regex. Let's use a simple regex for the common case.
  const regex = /<button\s+([^>]*?)onClick=\{\(\)\s*=>\s*navigate\('([^']+)'\)\}([^>]*)>([\s\S]*?)<\/button>/g;
  
  if (regex.test(content)) {
    content = content.replace(regex, (match, before, url, after, inner) => {
      return `<Link to="${url}" ${before.trim()} ${after.trim()}>${inner}</Link>`.replace(/\s+>/g, '>');
    });
    
    // Add import if not present
    if (!content.includes('import { Link }')) {
      // Find where to inject import
      // count directories up for the import path
      const depth = file.split(path.sep).length - 2; // src/components/File.tsx -> depth 1
      const importPath = depth === 1 ? './Link' : depth === 2 ? '../components/Link' : '../../components/Link';
      
      const importStatement = `import { Link } from '${importPath}';\n`;
      // Insert after the first import
      content = content.replace(/^(import.*?;?\n)(?!import)/m, `$1${importStatement}`);
    }
    changed = true;
  }
  
  // also handle onClick={() => navigate(srv.path)} specifically in ServicesBento.tsx
  if (file.includes('ServicesBento.tsx')) {
      const regexBento = /<button\s+([^>]*?)onClick=\{\(\)\s*=>\s*navigate\(([^)]+)\)\}([^>]*)>([\s\S]*?)<\/button>/g;
      if (regexBento.test(content)) {
        content = content.replace(regexBento, (match, before, urlVariable, after, inner) => {
          return `<Link to={${urlVariable}} ${before.trim()} ${after.trim()}>${inner}</Link>`.replace(/\s+>/g, '>');
        });
        if (!content.includes('import { Link }')) {
           content = `import { Link } from './Link';\n` + content;
        }
        changed = true;
      }
  }

  if (changed) {
    // clean up empty spaces in tags
    content = content.replace(/<Link to="([^"]+)"\s+>/g, '<Link to="$1">');
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
