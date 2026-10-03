import { Link } from '../../components/Link';
import React from 'react';
import { Shield, ArrowLeft } from 'lucide-react';
import { SeoHead } from '../../components/SeoHead';
import { useRouter } from '../../context/RouterContext';

export const GizlilikPolitikasiPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen py-10">
      <SeoHead
        title="Gizlilik Politikası | Can & Kurumsal Mobil Lastikçi"
        description="Can & Kurumsal Mobil Lastikçi gizlilik politikası, çerez kullanımı ve veri güvenliği bilgilendirmesi."
        canonicalPath="/gizlilik-politikasi"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:underline mb-6 cursor-pointer">
          <ArrowLeft className="w-4 h-4" />
          <span>Ana Sayfaya Dön</span>
        </Link>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs space-y-6 text-left">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-slate-950 font-display">
                Gizlilik Politikası
              </h1>
              <span className="text-xs text-slate-400">Son Güncelleme: 2026</span>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <p>
              <strong>Can & Kurumsal Mobil Lastik Hizmetleri</strong> ("İşletme") olarak, web sitemizi ziyaret eden kullanıcılarımızın ve seyyar lastik yol yardım hizmetimizden faydalanan sürücülerin kişisel gizliliğine ve veri güvenliğine azami önem göstermekteyiz.
            </p>

            <h2 className="text-base font-bold text-slate-900 pt-2">1. Toplanan Bilgiler ve Toplanma Amacı</h2>
            <p>
              Web sitemizi ziyaret ettiğinizde veya acil yol yardım talebinde bulunduğunuzda yalnızca hizmetin ifası için zorunlu olan bilgiler işlenir:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>İletişim Bilgileri:</strong> Telefon görüşmesi veya WhatsApp üzerinden paylaştığınız telefon numaranız ve adınız.</li>
              <li><strong>Konum Bilgileri:</strong> Otoyolda aracınızın bulunduğu emniyet şeridi, gişe veya GPS koordinatları (yalnızca nöbetçi ustanın navigasyonuna yön verilmesi amacıyla kullanılır).</li>
              <li><strong>Teknik Veriler:</strong> Google Analytics veya Google Ads dönüşüm ölçümü için anonim IP ve tarayıcı verileri.</li>
            </ul>

            <h2 className="text-base font-bold text-slate-900 pt-2">2. Bilgilerin Paylaşımı</h2>
            <p>
              Toplanan kişisel bilgileriniz ve konumunuz kesinlikle 3. şahıslara veya reklam pazarlama şirketlerine satılmaz veya devredilmez. Bilgiler yalnızca sevk edilen seyyar servis ustasıyla paylaşılır.
            </p>

            <h2 className="text-base font-bold text-slate-900 pt-2">3. Çerezler (Cookies)</h2>
            <p>
              Sitemizde kullanıcı deneyimini iyileştirmek ve Google Ads performansını ölçümlemek amacıyla çerezler (cookies) kullanılmaktadır. Tarayıcı ayarlarınız üzerinden dilediğiniz an çerezleri silebilir veya engelleyebilirsiniz.
            </p>

            <h2 className="text-base font-bold text-slate-900 pt-2">4. İletişim</h2>
            <p>
              Gizlilik politikamızla ilgili soru ve talepleriniz için <strong>0546 686 13 98</strong> numaralı çağrı merkezimiz üzerinden bizimle 7/24 iletişime geçebilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
