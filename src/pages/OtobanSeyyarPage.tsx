import { WhatsAppIcon } from '../components/icons/WhatsAppIcon';
import { Link } from '../components/Link';
import React from 'react';
import { Phone, MessageSquare, Wrench, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PHONE_NUMBER_RAW, PHONE_DISPLAY, getWhatsAppEmergencyUrl } from '../data/content';
import { SeoHead } from '../components/SeoHead';
import { useRouter } from '../context/RouterContext';

export const OtobanSeyyarPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      <SeoHead
        title="Otoban Seyyar Lastikçi 7/24 | Yerinde Patlak Lastik Tamiri"
        description="Otoban seyyar lastikçi ile çekici masrafı ödemeyin. TEM ve Kuzey Marmara otoyolunda 15 dakikada yerinde seyyar lastik tamiri ve stepne değişimi: 0546 686 13 98."
        canonicalPath="/otoban-seyyar-lastikci"
      />

      <section className="bg-gradient-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200 py-8 sm:py-14 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-amber-900">
            <Wrench className="w-3.5 h-3.5 text-amber-600" />
            <span>Otoban Seyyar Müdahale Aracı</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 font-display leading-tight">
            Otoban <span className="text-amber-600">Seyyar Lastikçi</span>
          </h1>

          <p className="text-sm sm:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
            Otoban emniyet şeridinde kalan aracınıza seyyar servis aracımızla ulaşıyoruz. Fitil tamiri, hava basma, stepne montajı ve sıfır/çıkma lastik desteğiyle yola güvenle devam edin.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto">
            <a
              href={`tel:${PHONE_NUMBER_RAW}`}
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-3 px-5 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 active:scale-95 text-slate-950 font-black shadow-lg shadow-amber-500/25 transition-all text-center"
            >
              <Phone className="w-5 h-5 fill-slate-950 shrink-0 animate-bounce" />
              <div className="text-left leading-tight">
                <span className="block text-[10px] uppercase font-bold text-slate-900 tracking-wider">
                  Otoban Seyyar Lastikçi
                </span>
                <span className="text-xl sm:text-2xl font-black font-display text-slate-950">
                  {PHONE_DISPLAY}
                </span>
              </div>
            </a>

            <a
              href={getWhatsAppEmergencyUrl('Otoban seyyar lastikçi ustası rica ediyorum')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-2.5 px-5 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-bold shadow-lg shadow-emerald-600/20 transition-all text-center"
            >
              <WhatsAppIcon className="w-5 h-5 fill-white shrink-0" />
              <div className="text-left leading-tight">
                <span className="block text-[10px] uppercase font-medium text-emerald-100 tracking-wider">
                  Hızlı Konum
                </span>
                <span className="text-base sm:text-lg font-bold">
                  WhatsApp'tan Konum At
                </span>
              </div>
            </a>
          </div>

          <div className="pt-1 flex flex-wrap items-center justify-center gap-y-2 gap-x-5 text-xs text-slate-600">
            <span className="flex items-center gap-1.5 font-semibold text-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Telefonda Net Fiyat
            </span>
            <span className="flex items-center gap-1.5 font-semibold text-slate-800">
              <Clock className="w-4 h-4 text-amber-600" />
              15 Dakikada Seyyar Servis
            </span>
            <span className="flex items-center gap-1.5 font-semibold text-slate-800">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              TSE Onaylı Fitil & Yama
            </span>
          </div>
        </div>
      </section>

      <section className="py-10 max-w-4xl mx-auto px-4 sm:px-6 space-y-4 text-left">
        <h2 className="text-xl font-bold text-slate-950 font-display">Otoban Seyyar Hizmet Kapsamı</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
            <span className="text-xs font-bold text-slate-900 block">TEM Otoyolu (E-80) Seyyar Servis</span>
            <p className="text-xs text-slate-600">Kınalı, Silivri, Selimpaşa, Kumburgaz, Çatalca ve Hadımköy mevkii.</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
            <span className="text-xs font-bold text-slate-900 block">Kuzey Marmara Otoyolu (O-7) Seyyar Servis</span>
            <p className="text-xs text-slate-600">Silivri gişeler, Nakkaş dinlenme tesisleri, Çatalca viyadükleri ve Yassıören hattı.</p>
          </div>
        </div>

        <div className="pt-6 text-center">
          <Link to="/" className="text-xs font-bold text-blue-700 hover:underline cursor-pointer">
            ← Ana Sayfaya Dön
          </Link>
        </div>
      </section>
    </div>
  );
};
