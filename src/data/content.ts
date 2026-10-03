import { GoogleProfile, HighwayPoint, ServiceItem, GoogleReview, FAQItem } from '../types';

export const PHONE_NUMBER = '+90 546 686 13 98';
export const PHONE_NUMBER_RAW = '+905466861398';
export const PHONE_DISPLAY = '0546 686 13 98';

export const WHATSAPP_BASE_URL = 'https://wa.me/905466861398';

export function getWhatsAppEmergencyUrl(locationText?: string): string {
  let message = 'Merhaba, otobanda lastiğim patladı acil lastikçi arıyorum.';
  if (locationText) {
    message += ` Konumum: ${locationText}.`;
  }
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}

export const GOOGLE_PROFILES: GoogleProfile[] = [
  {
    id: 'can-oto-lastik',
    name: 'Can Oto Lastik Yol Yardım | Mobil Lastik Tamircisi',
    category: 'Mobil Lastik Tamiri & Seyyar Lastikçi',
    shareUrl: 'https://share.google/hNqXjp1rSV01ZZ9GV',
    rating: 4.9,
    reviewCount: 118,
    addressSummary: 'Silivri, Çatalca, TEM ve Kuzey Marmara Otoyolu Seyyar Lastik Servisi',
    features: [
      'Google Doğrulanmış İşletme',
      'Yerinde Seyyar Lastik Onarımı',
      'Kuzey Marmara & TEM Hızlı Ulaşım',
      'Nakit veya Kredi Kartı ile Ödeme'
    ]
  },
  {
    id: 'kurumsal-oto-lastikci',
    name: 'Kurumsal Oto Lastikçi | Mobil Oto Lastik Hizmeti',
    category: 'Mobil Oto Lastik Hizmeti',
    shareUrl: 'https://share.google/F35Rg0jl6Ni8qXa6k',
    rating: 5.0,
    reviewCount: 76,
    addressSummary: 'Çatalca - Silivri Koridoru & Kuzey Marmara Otoyolu Gişeler Bölgesi',
    features: [
      'Binek, Kamyonet ve Tır Lastik Desteği',
      'Sıfır ve Çıkma Lastik Temini',
      '15-25 Dakika Ortalama Varış',
      'Telefonda Net Fiyat Bilgisi'
    ]
  }
];

export const HIGHWAY_POINTS: HighwayPoint[] = [
  {
    id: 'kmo-silivri',
    highway: 'KMO (O-7)',
    name: 'Kuzey Marmara Silivri Gişeler & Çıkışı',
    avgEtaMinutes: 15,
    description: 'KMO Silivri çıkışı ve Kınalı bağlantı yönü mobil servis noktası.'
  },
  {
    id: 'kmo-catalca',
    highway: 'KMO (O-7)',
    name: 'Kuzey Marmara Çatalca & Nakkaş Gişeleri',
    avgEtaMinutes: 12,
    description: 'Nakkaş, Çatalca KMO gişeleri ve çevresi emniyet şeritleri.'
  },
  {
    id: 'kmo-yassiorena',
    highway: 'KMO (O-7)',
    name: 'Kuzey Marmara Yassıören / Havalimanı Yönü',
    avgEtaMinutes: 18,
    description: 'KMO Yassıören ve Tayakadın bağlantıları mobil servis.'
  },
  {
    id: 'tem-silivri',
    highway: 'TEM (E-80)',
    name: 'TEM Otoyolu Silivri Gişeler & Dinlenme Tesisleri',
    avgEtaMinutes: 14,
    description: 'TEM Otoyolu Silivri çıkışı ve dinlenme tesisleri mevkii.'
  },
  {
    id: 'tem-selimpasa',
    highway: 'TEM (E-80)',
    name: 'TEM Selimpaşa & Kumburgaz Arası',
    avgEtaMinutes: 16,
    description: 'Selimpaşa rampası, Kumburgaz gişeler ve emniyet şeridi.'
  },
  {
    id: 'tem-catalca',
    highway: 'TEM (E-80)',
    name: 'TEM Çatalca Gişeler & Hadımköy Ayrımı',
    avgEtaMinutes: 15,
    description: 'TEM Çatalca köprüsü, Hadımköy gişeler ve bağlantı kavşağı.'
  },
  {
    id: 'd100-silivri',
    highway: 'D-100 (E-5)',
    name: 'D-100 Silivri Merkez & Sahil Hattı',
    avgEtaMinutes: 12,
    description: 'E-5 karayolu Silivri merkez, otogar ve Kınalı kavşağı.'
  },
  {
    id: 'catalca-merkez',
    highway: 'Çatalca Bölgesi',
    name: 'Çatalca Merkez, Subaşı & İhsaniye Yolu',
    avgEtaMinutes: 17,
    description: 'Çatalca ilçe merkezi, Subaşı ve Akalan köy yolları.'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'mobil-lastik-tamiri',
    title: 'Yerinde Seyyar Lastik Tamiri',
    badge: '15-20 Dk Varış',
    description: 'Otobanda, emniyet şeridinde veya tesiste patlayan lastiğinizi kompresörlü mobil servis aracımızla yerinde fitil veya yama ile onarıyoruz.',
    keyPoints: [
      'Yerinde fitil ve mantar yama tamiri',
      'Hava kompresörü ile doğru basınca şişirme',
      'Sibop değişimi ve hava kaçak kontrolü'
    ],
    vehicleTypes: ['Otomobil', 'SUV', 'Kamyonet', 'Kamyon & Tır']
  },
  {
    id: 'stepne-degisimi',
    title: 'Stepne (Yedek Lastik) Değişimi',
    badge: 'Hızlı Müdahale',
    description: 'Yarılan lastiğiniz için stepnenizi güçlü havalı tabanca ve hidrolik krikoyla araç başında dakikalar içinde takıyoruz.',
    keyPoints: [
      'Sıkışmış, paslı veya kilitli bijonların sökülmesi',
      'Doğru tork ile güvenli bijon sıkma',
      'Stepne hava basıncının ayarlanması'
    ],
    vehicleTypes: ['Tüm Araç Tipleri']
  },
  {
    id: 'sifir-cikma-lastik',
    title: 'Sıfır ve Çıkma Lastik Temini',
    badge: 'Yerinde Montaj',
    description: 'Lastiğiniz yarıldıysa ve stepneniz yoksa, aracınızın ebadına uygun sıfır veya temiz çıkma lastiği yerinde getirip janta takıyoruz.',
    keyPoints: [
      'Popüler tüm ebatlar hazır stokta',
      'Binek, SUV ve ticari araç lastikleri',
      'Yerinde janta montaj ve balans'
    ],
    vehicleTypes: ['Binek', 'SUV', 'Hafif Ticari', 'Ağır Vasıta']
  }
];

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: 'rev-1',
    author: 'Murat K.',
    vehicle: 'Volkswagen Passat',
    location: 'Kuzey Marmara Otoyolu Çatalca Çıkışı',
    rating: 5,
    date: 'Geçen hafta',
    comment: 'Gece saat 02:30 civarında KMO Çatalca yakınlarında lastiğim yarıldı. Aradıktan 18 dakika sonra geldiler. Ebadıma uygun lastik getirip 10 dakikada taktılar. Telefonda ne fiyat söyledilerse aynısını aldılar, teşekkürler.',
    profileSource: 'Can Oto Lastik'
  },
  {
    id: 'rev-2',
    author: 'Serkan Öztürk',
    vehicle: 'Ford Transit Kamyonet',
    location: 'TEM Silivri Gişeler Mevkii',
    rating: 5,
    date: '2 hafta önce',
    comment: 'Arka lastik patladı, yüküm vardı. 20 dakikada geldiler, araçları çok donanımlı. Yerinde fitil attılar ve hava bastılar. Hızlı ve dürüst esnaf.',
    profileSource: 'Kurumsal Oto Lastikçi'
  },
  {
    id: 'rev-3',
    author: 'Ceyda B.',
    vehicle: 'Renault Megane',
    location: 'Silivri - Selimpaşa E-80',
    rating: 5,
    date: 'Geçen ay',
    comment: 'Otobanda tek başıma kaldım, lastik patladı ve bijonları sökemedim. WhatsApp’tan konum attım, 15 dakikada geldiler. Stepnemi takıp yola devam etmemi sağladılar.',
    profileSource: 'Can Oto Lastik'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Ne kadar sürede gelirsiniz?',
    answer: 'Silivri, Çatalca, Kuzey Marmara Otoyolu ve TEM güzergahında nöbetteki seyyar lastikçi araçlarımızla ortalama 15 ile 25 dakika içerisinde yanınızda oluyoruz.'
  },
  {
    question: 'Otobanda yerinde lastik tamiri mümkün mü?',
    answer: 'Evet. Mobil araçlarımızda jeneratör, hava kompresörü, havalı bijon tabancası ve krikolar bulunmaktadır. Lastiği aracınızın başında emniyetli şekilde tamir ediyoruz.'
  },
  {
    question: 'Stepnem yok, sıfır veya çıkma lastik getiriyor musunuz?',
    answer: 'Evet. Bizi aradığınızda lastik ebadınızı (örneğin 205/55 R16) belirtmeniz yeterlidir. Aracınıza uygun lastiği yanımızda getirip yerinde montaj yapıyoruz.'
  },
  {
    question: 'Fiyat nasıl belirleniyor, sürpriz ücret çıkar mı?',
    answer: 'Kesinlikle sürpriz ücret yoktur. Bizi aradığınızda bulunduğunuz yer ve yapılacak işleme göre telefonda net fiyat verilir ve onayınızla yola çıkılır.'
  }
];
