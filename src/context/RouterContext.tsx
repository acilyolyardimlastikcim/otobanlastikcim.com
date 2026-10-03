import React, { createContext, useContext, useState, useEffect } from 'react';

export type PageRoute =
  | '/'
  | '/kuzey-marmara-lastikci'
  | '/kuzey-marmara-seyyar-lastikci'
  | '/kuzey-marmara-mobil-lastikci'
  | '/otoban-lastikci'
  | '/otoban-seyyar-lastikci'
  | '/otoban-mobil-lastikci'
  | '/hizmetler/yerinde-lastik-tamiri'
  | '/hizmetler/stepne-degisimi'
  | '/hizmetler/sifir-cikma-lastik'
  | '/hizmetler/tir-kamyon-lastik-tamiri'
  | '/gizlilik-politikasi'
  | '/kvkk'
  | '/kullanim-kosullari';

interface RouterContextType {
  currentPath: string;
  navigate: (path: string) => void;
}

const RouterContext = createContext<RouterContextType>({
  currentPath: '/',
  navigate: () => {}
});

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (path.startsWith('#')) {
      // Anchor link on the current page
      const el = document.querySelector(path);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => useContext(RouterContext);
