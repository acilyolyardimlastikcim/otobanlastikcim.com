import { Link } from '../components/Link';
import React from 'react';
import { Phone, MessageSquare, Truck, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PHONE_NUMBER_RAW, PHONE_DISPLAY, getWhatsAppEmergencyUrl } from '../data/content';
import { SeoHead } from '../components/SeoHead';
import { useRouter } from '../context/RouterContext';

export const KuzeyMarmaraMobilPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      <SeoHead
        title="Kuzey Marmara Mobil Lastikçi 7/24 | KMO Mobil Yol Yardım"
        description="Kuzey Marmara Otoyolu'nda 7/24 mobil lastikçi servisi. Silivri, Çatalca, Nakkaş ve Yassıören'de 15 dakikada yerinde mobil lastik tamiri: 0546 686 13 98."
        canonicalPath="/kuzey-marmara-mobil-lastikci"
      />

      <section className="bg-gradient-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200 py-8 sm:py-14 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Kuzey Marmara Mobil Servis Aracı</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 font-display leading-tight">
            Kuzey Marmara <span className="text-emerald-700">Mobil Lastikçi</span>
          </h1>

          <p className="text-sm sm:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
            Kuzey Marmara Otoyolu boyunca nöbetteki mobil seyyar araçlarımızla 15 dakikada yanınızdayız. Binek, SUV ve ticari araçlar için yerinde tamir ve sıfır/çıkma lastik servisi.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto">
            <a
              href={`tel:${PHONE_NUMBER_RAW}`}
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-3 px-5 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 active:scale-95 text-slate-950 font-black shadow-lg shadow-amber-500/25 transition-all text-center"
            >
              <Phone className="w-5 h-5 fill-slate-950 shrink-0 animate-bounce" />
              <div className="text-left leading-tight">
                <span className="block text-[10px] uppercase font-bold text-slate-900 tracking-wider">
                  Mobil Lastikçiyi Ara
                </span>
                <span className="text-xl sm:text-2xl font-black font-display text-slate-950">
                  {PHONE_DISPLAY}
                </span>
              </div>
            </a>

            <a
              href={getWhatsAppEmergencyUrl('Kuzey Marmara mobil lastikçi desteği rica ediyorum')}
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
              15-20 Dakika Varış
            </span>
            <span className="flex items-center gap-1.5 font-semibold text-slate-800">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              7/24 Kesintisiz Nöbet
            </span>
          </div>
        </div>
      </section>

      <section className="py-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <h2 className="text-xl font-bold text-slate-950 font-display">Mobil Servis Araç Donanımımız</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
            <h3 className="font-bold text-slate-950 text-xs">Vidalı Hava Kompresörü</h3>
            <p className="text-xs text-slate-600">Jeneratör destekli bağımsız pnömatik hava gücü ile hızlı şişirme.</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
            <h3 className="font-bold text-slate-950 text-xs">Havalı Bijon Tabancası</h3>
            <p className="text-xs text-slate-600">En zorlu paslanmış bijonları bile saniyeler içinde sökebilen yüksek tork.</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
            <h3 className="font-bold text-slate-950 text-xs">Sıfır & Çıkma Lastik Stoku</h3>
            <p className="text-xs text-slate-600">En yaygın binek ve SUV lastik ebatları nöbetçi araçlarımızda hazır.</p>
          </div>
        </div>

        <div className="pt-6">
          <Link to="/" className="text-xs font-bold text-blue-700 hover:underline cursor-pointer">
            ← Ana Sayfaya Dön
          </Link>
        </div>
      </section>
    </div>
  );
};
