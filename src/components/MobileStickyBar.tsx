import { WhatsAppIcon } from '../components/icons/WhatsAppIcon';
import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { PHONE_NUMBER_RAW, PHONE_DISPLAY, getWhatsAppEmergencyUrl } from '../data/content';

export const MobileStickyBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-2 sm:p-3 bg-white/95 backdrop-blur-md border-t border-slate-200 lg:hidden shadow-2xl pb-safe">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2 h-12">
        {/* WhatsApp Button */}
        <a
          href={getWhatsAppEmergencyUrl('Otobanda lastiğim patladı, acil seyyar lastikçi rica ediyorum')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 px-2 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white text-xs sm:text-sm font-bold transition-all shadow-md shadow-emerald-600/20 whitespace-nowrap cursor-pointer"
          title="WhatsApp ile Konum Bildir"
          aria-label="WhatsApp üzerinden konum gönderin"
        >
          <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />
          <span className="truncate">Konum Gönder</span>
        </a>

        {/* Immediate Call Button */}
        <a
          href={`tel:${PHONE_NUMBER_RAW}`}
          className="flex items-center justify-center gap-1.5 px-2 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 active:scale-95 text-slate-950 text-xs sm:text-sm font-black transition-all shadow-md shadow-amber-500/25 whitespace-nowrap cursor-pointer"
          title="Acil Lastikçiyi Ara"
          aria-label="Acil olarak telefonla arayın"
        >
          <Phone className="w-4 h-4 fill-slate-950 shrink-0 animate-bounce" />
          <span className="truncate">{PHONE_DISPLAY} ARA</span>
        </a>
      </div>
    </div>
  );
};
