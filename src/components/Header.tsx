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
      <div className="relative max-w-6xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-2">
        
        {/* Brand Logo & Name */}
        <Link
          to="/"
          className="flex items-center gap-2 text-left min-w-0 shrink cursor-pointer focus:outline-none"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-slate-950 text-amber-400 flex items-center justify-center font-bold shrink-0 shadow-2xs">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="4" fill="currentColor" />
              <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
            </svg>
          </div>
          <div className="min-w-0">
            <span className="text-sm sm:text-lg font-black tracking-tight font-display block leading-none truncate">
              <span className="text-red-600">OTOBAN</span><span className="text-slate-950">LASTİKCİM</span>
            </span>
            <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium block truncate mt-0.5">
              7/24 Mobil Lastik Servisi
            </span>
          </div>
        </Link>

        {/* Desktop Quick Nav Links - Absolutely Centered */}
        <nav className="hidden lg:flex items-center gap-4 text-xs font-bold text-slate-700 absolute left-1/2 -translate-x-1/2">
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

        {/* Quick Contact Header Buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <a
            href={getWhatsAppEmergencyUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-2xs"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
            <span>WhatsApp</span>
          </a>

          <a
            href={`tel:${PHONE_NUMBER_RAW}`}
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 active:scale-95 text-slate-950 font-black text-xs sm:text-sm shadow-xs transition-all whitespace-nowrap"
            title="Hemen Ara"
          >
            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-slate-950 shrink-0" />
            <span className="font-extrabold">{PHONE_DISPLAY}</span>
          </a>
        </div>

      </div>
    </header>
  );
};
