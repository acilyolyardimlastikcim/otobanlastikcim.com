import { Link } from '../components/Link';
import React from 'react';
import { Phone, MessageSquare, MapPin, Clock, ShieldCheck, CheckCircle2, Navigation, ArrowRight } from 'lucide-react';
import { PHONE_NUMBER_RAW, PHONE_DISPLAY, getWhatsAppEmergencyUrl, GOOGLE_PROFILES } from '../data/content';
import { SeoHead } from '../components/SeoHead';
import { useRouter } from '../context/RouterContext';

export const KuzeyMarmaraLanding: React.FC = () => {
  const { navigate } = useRouter();

  const kmoPoints = [
    { name: 'Silivri Gişeler & Kınalı Bağlantısı', eta: '15 dk', desc: 'Silivri KMO çıkışı, Kınalı kavşağı ve çevresi emniyet şeritleri.' },
    { name: 'Çatalca Gişeler & Nakkaş Tesisleri', eta: '12 dk', desc: 'Nakkaş dinlenme tesisi, Çatalca viyadükleri ve gişe bağlantısı.' },
    { name: 'Yassıören & Havalimanı Yönü', eta: '18 dk', desc: 'Yassıören çıkışı, Tayakadın bağlantısı ve İstanbul Havalimanı istikameti.' },
    { name: 'İhsaniye, Subaşı & Akalan Köprüleri', eta: '16 dk', desc: 'Kuzey Marmara Çatalca kırsal geçişi ve viyadük altları.' }
  ];

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      <SeoHead
        title="Kuzey Marmara Otoyolu Lastikçi 7/24 | KMO Seyyar Lastik Tamiri"
        description="Kuzey Marmara Otoyolu (O-7) Silivri, Çatalca, Nakkaş ve Yassıören'de 7/24 seyyar mobil lastik tamiri. 15 dakikada yerinde tamir ve stepne montajı: 0546 686 13 98."
        canonicalPath="/kuzey-marmara-lastikci"
      />

      {/* Ad Hero */}
      <section className="bg-gradient-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200 py-8 sm:py-14 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-800">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Kuzey Marmara Otoyolu (O-7) Acil Müdahale Hattı</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 font-display leading-tight">
            Kuzey Marmara Otoyolu <span className="text-blue-700">7/24 Mobil Lastikçi</span>
          </h1>

          <p className="text-sm sm:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
            Kuzey Marmara Otoyolu'nda emniyet şeridinde veya gişelerde lastiğiniz mi patladı? <strong className="text-slate-950 font-bold">15-20 dakikada yanınızdayız.</strong> Çekiciye gerek kalmadan aracınızın başında onarıyoruz.
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
                  15 Dk Varış · Hemen Ara
                </span>
                <span className="text-xl sm:text-2xl font-black font-display text-slate-950">
                  {PHONE_DISPLAY}
                </span>
              </div>
            </a>

            <a
              href={getWhatsAppEmergencyUrl('Kuzey Marmara Otoyolu üzerindeyim, acil lastikçi rica ediyorum')}
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
              TSE Onaylı Fitil & Yama
            </span>
          </div>

        </div>
      </section>

      {/* KMO Exits Coverage */}
      <section className="py-10 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl font-black text-slate-950 font-display">
            Kuzey Marmara Otoyolu Nöbet Noktalarımız
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Tam donanımlı kompresörlü araçlarımızla aşağıdaki noktalara anında intikal ediyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
          {kmoPoints.map((pt, i) => (
            <div key={i} className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900">{pt.name}</span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  ~{pt.eta}
                </span>
              </div>
              <p className="text-xs text-slate-500">{pt.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Google Profiles & Direct Call CTA */}
      <section className="py-10 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h2 className="text-xl sm:text-2xl font-black text-slate-950 font-display">
            Google Doğrulanmış Nöbetçi Lastik Servisleri
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {GOOGLE_PROFILES.map((p) => (
              <div key={p.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-sm">{p.name}</span>
                  <span className="text-amber-500 font-extrabold text-xs">★ {p.rating.toFixed(1)}</span>
                </div>
                <p className="text-xs text-slate-500">{p.addressSummary}</p>
                <a
                  href={`tel:${PHONE_NUMBER_RAW}`}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 fill-slate-950" />
                  <span>Hemen Ara: {PHONE_DISPLAY}</span>
                </a>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <Link to="/" className="text-xs font-bold text-blue-700 hover:underline inline-flex items-center gap-1 cursor-pointer">
              <span>← Tüm Hizmetler ve Ana Sayfaya Dön</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
