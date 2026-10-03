import { Link } from './Link';
import React from 'react';
import { Wrench, Disc, Truck, Check, Phone, ArrowRight } from 'lucide-react';
import { PHONE_NUMBER_RAW, PHONE_DISPLAY } from '../data/content';
import { useRouter } from '../context/RouterContext';

export const ServicesBento: React.FC = () => {
  const { navigate } = useRouter();

  const servicesList = [
    {
      id: 'yerinde-lastik-tamiri',
      title: 'Yerinde Seyyar Lastik Tamiri',
      path: '/hizmetler/yerinde-lastik-tamiri',
      badge: '15-20 Dk Varış',
      icon: Wrench,
      description: 'Otobanda, emniyet şeridinde veya tesiste patlayan lastiğinizi kompresörlü mobil servis aracımızla yerinde fitil veya mantar yama ile onarıyoruz.',
      points: ['Yerinde fitil & mantar yama', '12 bar hava kompresörü ile şişirme', 'Hava kaçak ve sibop kontrolü']
    },
    {
      id: 'stepne-degisimi',
      title: 'Stepne Değişimi & Bijon Sökme',
      path: '/hizmetler/stepne-degisimi',
      badge: 'Hızlı Müdahale',
      icon: Disc,
      description: 'Bijon anahtarınız yoksa veya bijonlar sıkıştıysa, profesyonel havalı tork tabancalarımızla stepnenizi dakikalar içinde güvenle takıyoruz.',
      points: ['Sıkışmış & paslı bijonların sökümü', 'Stepne hava basıncı ayarı', 'Hidrolik kriko ile güvenli kaldırma']
    },
    {
      id: 'sifir-cikma-lastik',
      title: 'Sıfır ve Çıkma Lastik Temini',
      path: '/hizmetler/sifir-cikma-lastik',
      badge: 'Yerinde Montaj',
      icon: Disc,
      description: 'Stepneniz yoksa ve lastiğiniz yarıldıysa, aracınızın ebadına uygun sıfır veya temiz çıkma lastiği yerinde getirip janta monte ediyoruz.',
      points: ['Tüm binek & SUV ebatları hazır', 'Yerinde janta montaj & balans', 'Uygun fiyatlı temiz çıkma seçenekleri']
    },
    {
      id: 'tir-kamyon-lastik-tamiri',
      title: 'Tır & Kamyon Ağır Vasıta Servisi',
      path: '/hizmetler/tir-kamyon-lastik-tamiri',
      badge: '7/24 Filo & Ağır Vasıta',
      icon: Truck,
      description: 'Kuzey Marmara Otoyolu ve TEM koridorundaki yüklü tır, çekici ve dorse lastik patlamalarına yüksek bar kompresörle yerinde müdahale.',
      points: ['12 bar vidalı pnömatik kompresör', 'Ağır vasıta hidrolik dingil krikosu', '295/80, 315/80 ve 385/65 ebatları']
    }
  ];

  return (
    <section id="hizmetler" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        
        <div className="max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider font-mono">
            Hizmetlerimiz & Reklam Sayfaları
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 font-display">
            Seyyar Lastik Hizmetlerimiz
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Silivri, Çatalca, Kuzey Marmara Otoyolu (O-7) ve TEM (E-80) güzergahında sunduğumuz uzman lastik servisleri.
          </p>
        </div>

        {/* 4 Clean Responsive Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          {servicesList.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-3 hover:border-slate-300 transition-colors shadow-2xs"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                      {srv.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-950 font-display">
                    {srv.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {srv.description}
                  </p>

                  <div className="space-y-1 pt-1">
                    {srv.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-1.5 text-[11px] text-slate-700">
                        <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span className="truncate">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 space-y-2">
                  <Link to={srv.path} className="w-full text-center text-xs font-bold text-blue-700 hover:text-blue-900 inline-flex items-center justify-center gap-1 py-1 cursor-pointer">
                    <span>Sayfayı İncele</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={`tel:${PHONE_NUMBER_RAW}`}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 fill-slate-950" />
                    <span>Ara: {PHONE_DISPLAY}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
