import { Link } from '../components/Link';
import React from 'react';
import { Phone, MessageSquare, MapPin, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PHONE_NUMBER_RAW, PHONE_DISPLAY, getWhatsAppEmergencyUrl, GOOGLE_PROFILES } from '../data/content';
import { SeoHead } from '../components/SeoHead';
import { useRouter } from '../context/RouterContext';

export const OtobanLastikciLanding: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      <SeoHead
        title="Otoban Lastikçi 7/24 | Otobanda Lastiğim Patladı Acil Yol Yardım"
        description="Otobanda lastiğiniz mi patladı? Kuzey Marmara ve TEM otoyolunda 7/24 seyyar lastik tamiri. 15-20 dakikada yerinde tamir ve stepne değişimi: 0546 686 13 98."
        canonicalPath="/otoban-lastikci"
      />

      <section className="bg-gradient-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200 py-8 sm:py-14 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-amber-900">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>7/24 Otoban Acil Lastik Yol Yardım Ekibi</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 font-display leading-tight">
            Otobanda Lastiğiniz mi Patladı? <span className="text-amber-600">15 Dk'da Yanınızdayız</span>
          </h1>

          <p className="text-sm sm:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
            Kuzey Marmara Otoyolu (O-7) ve TEM (E-80) güzergahında çekici beklemeden, yüksek çekici masrafı ödemeden aracınızın başında seyyar lastik onarımı yapıyoruz.
          </p>

          {/* Primary Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto">
            <a
              href={`tel:${PHONE_NUMBER_RAW}`}
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-3 px-5 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 active:scale-95 text-slate-950 font-black shadow-lg shadow-amber-500/25 transition-all text-center"
            >
              <Phone className="w-5 h-5 fill-slate-950 shrink-0 animate-bounce" />
              <div className="text-left leading-tight">
                <span className="block text-[10px] uppercase font-bold text-slate-900 tracking-wider">
                  Otoban Nöbetçi Ustası
                </span>
                <span className="text-xl sm:text-2xl font-black font-display text-slate-950">
                  {PHONE_DISPLAY}
                </span>
              </div>
            </a>

            <a
              href={getWhatsAppEmergencyUrl('Otobanda lastiğim patladı acil lastikçi ustası rica ediyorum')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-2.5 px-5 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-bold shadow-lg shadow-emerald-600/20 transition-all text-center"
            >
              <MessageSquare className="w-5 h-5 fill-white shrink-0" />
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
              15-20 Dakikada Otoyolda Yanınızda
            </span>
            <span className="flex items-center gap-1.5 font-semibold text-slate-800">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              Nakit ve Kredi Kartı Geçerli
            </span>
          </div>

        </div>
      </section>

      {/* 3 Core Emergency Services */}
      <section className="py-10 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
            <h3 className="font-bold text-slate-950 text-base">Yerinde Fitil & Yama</h3>
            <p className="text-xs text-slate-600">
              Vidalı kompresörümüzle çivi veya vida giren lastiği araç başında sökmeden veya gerekirse söküp içten mantar yama ile onarıyoruz.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
            <h3 className="font-bold text-slate-950 text-base">Stepne Montajı</h3>
            <p className="text-xs text-slate-600">
              Sıkışmış veya kilitli bijonları profesyonel havalı bijon tabancasıyla söküp stepnenizi doğru hava basarak takıyoruz.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
            <h3 className="font-bold text-slate-950 text-base">Sıfır & Çıkma Lastik</h3>
            <p className="text-xs text-slate-600">
              Stepneniz yoksa veya lastik yarıldıysa, aracınızın ebadına uygun sıfır veya temiz çıkma lastiği yerinde getirip takıyoruz.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link to="/" className="text-xs font-bold text-blue-700 hover:underline cursor-pointer">
            ← Ana Sayfaya Dön
          </Link>
        </div>
      </section>
    </div>
  );
};
