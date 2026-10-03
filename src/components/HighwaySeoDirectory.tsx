import React from 'react';
import { MapPin, Navigation, Phone, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { PHONE_NUMBER_RAW, PHONE_DISPLAY, getWhatsAppEmergencyUrl } from '../data/content';

export const HighwaySeoDirectory: React.FC = () => {
  const seoCorridors = [
    {
      title: 'Kuzey Marmara Otoyolu (O-7) Lastikçi Noktaları',
      badge: 'O-7 Koridoru',
      description: 'Kuzey Marmara Otoyolu Silivri, Çatalca, Nakkaş, Yassıören ve Havalimanı yönünde 7/24 seyyar lastikçi ve yerinde patlak lastik tamiri hizmeti.',
      exits: [
        'Kuzey Marmara Silivri Gişeler & Bağlantı Yolu',
        'KMO Çatalca Gişeler & Nakkaş Dinlenme Tesisleri',
        'Kuzey Marmara Yassıören Çıkışı & Benzinlikler',
        'Tayakadın & İstanbul Havalimanı Bağlantı Hattı',
        'KMO İhsaniye & Akalan Viyadükleri Emniyet Şeridi'
      ],
      keywords: 'kuzey marmara otoyolu lastikçi, kmo lastik tamiri, nakkaş lastikçi, yassıören oto lastik'
    },
    {
      title: 'TEM Avrupa Otoyolu (E-80) Lastik Yol Yardım',
      badge: 'E-80 Koridoru',
      description: 'TEM Otoyolu Kınalı ayrımından Silivri, Selimpaşa, Kumburgaz ve Çatalca gişelerine kadar 15 dakikada yerinde mobil lastik tamiri ve stepne değişimi.',
      exits: [
        'TEM Otoyolu Silivri Gişeler & Dinlenme Tesisleri',
        'TEM Selimpaşa Rampası & Benzin İstasyonları',
        'TEM Kumburgaz Gişeler & Emniyet Şeridi',
        'TEM Çatalca Gişeler & Muratbey Ayrımı',
        'Hadımköy Gişeler & Kınalı Tekirdağ Sınırı Bağlantısı'
      ],
      keywords: 'tem otoyolu lastikçi, otoban seyyar lastikçi, silivri otoban lastik tamiri, selimpaşa lastikçi'
    },
    {
      title: 'Silivri & D-100 (E-5) Seyyar Lastik Servisi',
      badge: 'D-100 Koridoru',
      description: 'Silivri merkez, sahil kordonu, sanayi bölgesi, Kınalı kavşağı ve E-5 karayolu üzerinde 7 gün 24 saat seyyar lastik onarımı ve sıfır/çıkma lastik temini.',
      exits: [
        'D-100 Silivri Merkez, Otogar & Sahil Hattı',
        'Silivri Sanayi Sitesi & Maxicenter Çevresi',
        'Gümüşyaka, Çanta & Değirmenköy Yol Ayrımı',
        'Kınalı Kavşağı & Çorlu / Tekirdağ İl Sınırı',
        'Semizkumlar & Selimpaşa Sahil Karayolu'
      ],
      keywords: 'silivri mobil lastikçi, silivri acil lastik tamiri, silivri 7/24 lastikçi, kınalı oto lastik'
    },
    {
      title: 'Çatalca Merkez & Köy Yolları Lastik Tamiri',
      badge: 'Çatalca Bölgesi',
      description: 'Çatalca ilçe merkezi ve çevre köy bağlantı yollarında traktör, binek, SUV ve kamyonet araçlarına yerinde gezici mobil lastik servisi.',
      exits: [
        'Çatalca İlçe Merkezi, Kaleiçi & Ferhatpaşa',
        'Subaşı, İhsaniye, Binkılıç & Karacaköy Yolu',
        'Akalan, Kestanelik, Oklalı & Dağyenice Hattı',
        'Çakıl, Elbasan & Muratbey Bağlantı Yolları',
        'Çatalca Serbest Bölge & Lojistik Depolar Bölgesi'
      ],
      keywords: 'çatalca mobil lastikçi, çatalca seyyar lastik tamiri, subaşı lastikçi, ihsaniye oto lastik'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* SEO Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 space-y-2">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider font-mono">
            Otoyol SEO Kapsama Rehberi
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 font-display">
            Kuzey Marmara & TEM Otoyolu Acil Lastikçi Güzergahları
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Silivri, Çatalca, Kuzey Marmara Otoyolu (O-7) ve TEM (E-80) üzerindeki tüm gişelerde, dinlenme tesislerinde ve emniyet şeritlerinde 15-20 dakikada nöbetçi seyyar lastikçi hizmeti.
          </p>
        </div>

        {/* 4 SEO Highway Hub Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
          {seoCorridors.map((corridor, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-4 shadow-2xs hover:border-slate-300 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono font-bold text-blue-800 bg-blue-100/70 px-2.5 py-0.5 rounded-md">
                    {corridor.badge}
                  </span>
                  <span className="text-xs text-emerald-700 font-bold flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    ~15 Dk Varış
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-black text-slate-950 font-display leading-snug">
                  {corridor.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {corridor.description}
                </p>

                {/* Exits Checklist */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider block">
                    Kapsanan Çıkış & Tesisler:
                  </span>
                  {corridor.exits.map((exit, eIdx) => (
                    <div key={eIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <MapPin className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                      <span>{exit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action buttons inside each corridor */}
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between gap-2">
                <a
                  href={`tel:${PHONE_NUMBER_RAW}`}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 fill-slate-950" />
                  <span>Bu Yola Lastikçi Çağır</span>
                </a>

                <a
                  href={getWhatsAppEmergencyUrl(corridor.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                >
                  <span>Konum At</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* SEO Editorial Text Block for Google Crawler Authority */}
        <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs text-left space-y-3">
          <h3 className="text-sm sm:text-base font-black text-slate-950 font-display">
            Otobanda Seyyar Lastik Tamiri Hakkında Bilinmesi Gerekenler
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Kuzey Marmara Otoyolu ve TEM gibi yüksek hız limitine sahip yollarda lastik patlaması, inmesi veya yarılması durumunda emniyet şeridinde beklemek büyük risk taşır. Seyyar mobil lastikçi aracımız, profesyonel ikaz flaşörleri ve trafik konileri ile güvenlik çemberi oluşturarak <strong>binek, SUV, hafif ticari ve ağır vasıta tır lastiklerini</strong> aracın bulunduğu noktada onarır. Stepnesi olmayan sürücüler için her ebatta <strong>sıfır ve temiz çıkma lastik</strong> araç başında janta monte edilip balans ayarı yapılır.
          </p>
          <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] text-slate-500 font-mono">
            <span className="font-bold text-slate-700">Popüler Aramalar:</span>
            <span>#kuzeymarmaralastikci</span>
            <span>#otobanlastikci</span>
            <span>#silivrimobillastik</span>
            <span>#catalcaseyyarlastik</span>
            <span>#temotoyolulastik</span>
            <span>#tirlastiktamiri</span>
          </div>
        </div>

      </div>
    </section>
  );
};
