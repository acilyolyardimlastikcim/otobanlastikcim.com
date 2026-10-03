import { WhatsAppIcon } from '../components/icons/WhatsAppIcon';
import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { PHONE_NUMBER_RAW, PHONE_DISPLAY, getWhatsAppEmergencyUrl } from '../data/content';
import { useRouter } from '../context/RouterContext';
import { Link } from './Link';

export const Header: React.FC = () => {
  const { navigate, currentPath } = useRouter();

  return (
    <header className="sticky top-0 z-40 bg-white/98 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="relative max-w-6xl mx-auto px-3 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-2">
        
        {/* Brand Logo & Name - Centered on mobile, left on desktop */}
        <Link
          to="/"
          className="flex items-center justify-center sm:justify-start w-full sm:w-auto shrink-0 cursor-pointer focus:outline-none"
          aria-label="Anasayfa"
        >
          <img 
            src="/logo_cropped.webp" 
            alt="Otoban Lastikcim" 
            className="h-20 sm:h-20 lg:h-28 w-auto max-w-full object-contain mix-blend-multiply" 
          />
        </Link>

        {/* Desktop Quick Nav Links - Absolutely Centered */}
        <nav className="hidden lg:flex items-center gap-5 text-sm font-bold text-slate-700 absolute left-1/2 -translate-x-1/2">
          <Link
            to="/"
            className={`hover:text-blue-700 transition-colors cursor-pointer ${
              currentPath === '/' ? 'text-blue-700' : ''
            }`}
          >
            Anasayfa
          </Link>
          <Link
            to="/kuzey-marmara-lastikci"
            className={`hover:text-blue-700 transition-colors cursor-pointer ${
              currentPath === '/kuzey-marmara-lastikci' ? 'text-blue-700' : ''
            }`}
          >
            Kuzey Marmara
          </Link>
          <Link
            to="/otoban-lastikci"
            className={`hover:text-blue-700 transition-colors cursor-pointer ${
              currentPath === '/otoban-lastikci' ? 'text-blue-700' : ''
            }`}
          >
            TEM & Otoban
          </Link>
          <Link
            to="/hizmetler"
            className={`hover:text-blue-700 transition-colors cursor-pointer ${
              currentPath.startsWith('/hizmetler') ? 'text-blue-700' : ''
            }`}
          >
            Hizmetlerimiz
          </Link>
        </nav>

        {/* Quick Contact Header Buttons - HIDDEN ON MOBILE, VISIBLE ON DESKTOP */}
        <div className="hidden sm:flex items-center justify-end w-full sm:w-auto gap-2 shrink-0">
          <a
            href={getWhatsAppEmergencyUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors shadow-2xs"
            aria-label="WhatsApp üzerinden mesaj gönderin"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white" />
            <span>WhatsApp</span>
          </a>

          <a
            href={`tel:${PHONE_NUMBER_RAW}`}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 active:scale-95 text-slate-950 font-black text-sm shadow-xs transition-all whitespace-nowrap"
            title="Hemen Ara"
            aria-label="Hemen telefonla arayın"
          >
            <Phone className="w-4 h-4 fill-slate-950 shrink-0" />
            <span className="font-extrabold tracking-wide">{PHONE_DISPLAY}</span>
          </a>
        </div>

      </div>
    </header>
  );
};
