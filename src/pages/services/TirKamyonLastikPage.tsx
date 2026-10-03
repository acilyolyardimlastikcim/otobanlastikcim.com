import { Link } from '../../components/Link';
import React from 'react';
import { Phone, MessageSquare, Truck, CheckCircle2 } from 'lucide-react';
import { PHONE_NUMBER_RAW, PHONE_DISPLAY, getWhatsAppEmergencyUrl } from '../../data/content';
import { SeoHead } from '../../components/SeoHead';
import { useRouter } from '../../context/RouterContext';

export const TirKamyonLastikPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      <SeoHead
        title="Otoban Tır & Kamyon Lastikçisi 7/24 | Ağır Vasıta Seyyar Servis"
        description="Kuzey Marmara Otoyolu ve TEM'de tır, kamyon ve dorse lastik patlamalarına 12 bar kompresör ve hidrolik krikoyla yerinde müdahale. Tel: 0546 686 13 98."
        canonicalPath="/hizmetler/tir-kamyon-lastik-tamiri"
      />

      <section className="bg-gradient-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200 py-8 sm:py-14 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-bold text-purple-900">
            <Truck className="w-3.5 h-3.5 text-purple-700" />
            <span>Ağır Vasıta & Tır Lastik Servisi</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 font-display leading-tight">
            Kuzey Marmara & TEM <span className="text-purple-700">Tır Lastikçisi</span>
          </h1>

          <p className="text-sm sm:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
            Yüklü çekici, dorse, kamyon ve mikserlerin otoyol emniyet şeridinde kalan lastiklerine yüksek tonajlı hidrolik krikolar ve yüksek bar hava kompresörleriyle yerinde müdahale.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto">
            <a
              href={`tel:${PHONE_NUMBER_RAW}`}
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black shadow-md shadow-amber-500/25 transition-all text-center"
            >
              <Phone className="w-4 h-4 fill-slate-950" />
              <span>Tır Lastikçisi Çağır: {PHONE_DISPLAY}</span>
            </a>

            <a
              href={getWhatsAppEmergencyUrl('Tır / Dorse lastiği gümledi otoban için ağır vasıta lastikçi rica ediyorum')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow-md shadow-emerald-600/20 transition-all text-center"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>WhatsApp Konum Gönder</span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-10 max-w-4xl mx-auto px-4 sm:px-6 space-y-4 text-left">
        <h2 className="text-xl font-bold text-slate-950 font-display">Ağır Vasıta Donanımımız</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
            <span className="text-xs font-bold text-slate-900 block">12 Bar Vidalı Pnömatik Kompresör</span>
            <p className="text-xs text-slate-600">Ağır vasıta lastiklerinin ihtiyaç duyduğu 8-9 bar hava basıncını dakikalar içinde basar.</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
            <span className="text-xs font-bold text-slate-900 block">Yüksek Tonajlı Hidrolik Krikolar</span>
            <p className="text-xs text-slate-600">Yüklü dorseleri ve kamyonları dingilden güvenle kaldırarak teker değişimini sağlar.</p>
          </div>
        </div>

        <div className="pt-4 text-center">
          <Link to="/" className="text-xs font-bold text-blue-700 hover:underline cursor-pointer">
            ← Ana Sayfaya Dön
          </Link>
        </div>
      </section>
    </div>
  );
};
