import { Link } from '../../components/Link';
import React from 'react';
import { Phone, MessageSquare, Wrench, CheckCircle2, Clock } from 'lucide-react';
import { PHONE_NUMBER_RAW, PHONE_DISPLAY, getWhatsAppEmergencyUrl } from '../../data/content';
import { SeoHead } from '../../components/SeoHead';
import { useRouter } from '../../context/RouterContext';

export const YerindeTamirPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      <SeoHead
        title="Yerinde Seyyar Lastik Tamiri 7/24 | Fitil & Mantar Yama Servisi"
        description="Otobanda patlayan lastiğiniz için seyyar mobil lastik tamiri. 15 dakikada yerinde fitil ve mantar yama onarımı. 7/24 Ara: 0546 686 13 98."
        canonicalPath="/hizmetler/yerinde-lastik-tamiri"
      />

      <section className="bg-gradient-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200 py-8 sm:py-14 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-800">
            <Wrench className="w-3.5 h-3.5 text-blue-700" />
            <span>Seyyar Lastik Tamir Servisi</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 font-display leading-tight">
            Yerinde Seyyar Lastik Tamiri <span className="text-blue-700">(Fitil & Mantar Yama)</span>
          </h1>

          <p className="text-sm sm:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
            Kuzey Marmara Otoyolu, TEM ve Silivri-Çatalca hattında çivi batması veya hava kaçırma durumlarında, seyyar kompresörlü araçlarımızla 15 dakikada yanınızdayız.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto">
            <a
              href={`tel:${PHONE_NUMBER_RAW}`}
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black shadow-md shadow-amber-500/25 transition-all text-center"
            >
              <Phone className="w-4 h-4 fill-slate-950" />
              <span>Hemen Ara: {PHONE_DISPLAY}</span>
            </a>

            <a
              href={getWhatsAppEmergencyUrl('Lastiğim patladı yerinde seyyar lastik tamiri istiyorum')}
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
        <h2 className="text-xl font-bold text-slate-950 font-display">Nasıl Çalışıyoruz?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
            <span className="text-xs font-mono font-bold text-blue-700">01. Konum Bildirimi</span>
            <p className="text-xs text-slate-600">WhatsApp veya telefon ile bulunduğunuz güzergahı iletirsiniz.</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
            <span className="text-xs font-mono font-bold text-blue-700">02. 15 Dk İntikal</span>
            <p className="text-xs text-slate-600">Nöbetçi seyyar servis aracımız duba güvenliğiyle aracınızın yanına gelir.</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
            <span className="text-xs font-mono font-bold text-blue-700">03. Yerinde Onarım</span>
            <p className="text-xs text-slate-600">Fitil veya mantar yama uygulanıp doğru basınca şişirilir.</p>
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
