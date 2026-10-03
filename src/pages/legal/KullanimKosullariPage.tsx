import { Link } from '../../components/Link';
import React from 'react';
import { Scale, ArrowLeft } from 'lucide-react';
import { SeoHead } from '../../components/SeoHead';
import { useRouter } from '../../context/RouterContext';

export const KullanimKosullariPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen py-10">
      <SeoHead
        title="Kullanım Koşulları & Yasal Uyarı | Can & Kurumsal Mobil Lastikçi"
        description="Can & Kurumsal Mobil Lastikçi web sitesi kullanım koşulları ve seyyar yol yardım hizmet şartları."
        canonicalPath="/kullanim-kosullari"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:underline mb-6 cursor-pointer">
          <ArrowLeft className="w-4 h-4" />
          <span>Ana Sayfaya Dön</span>
        </Link>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs space-y-6 text-left">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-slate-950 font-display">
                Kullanım Koşulları
              </h1>
              <span className="text-xs text-slate-400">Yasal Şartlar & Bilgilendirme</span>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <p>
              Bu web sitesini kullanarak aşağıdaki kullanım koşullarını kabul etmiş sayılırsınız:
            </p>

            <h2 className="text-base font-bold text-slate-900 pt-2">1. Hizmet Kapsamı</h2>
            <p>
              Web sitemiz üzerinden verilen bilgiler Silivri, Çatalca, Kuzey Marmara Otoyolu ve TEM güzergahında sunulan seyyar lastik tamiri, stepne montajı ve lastik temini hizmetlerine yöneliktir.
            </p>

            <h2 className="text-base font-bold text-slate-900 pt-2">2. Varış Süreleri ve Otoyol Şartları</h2>
            <p>
              Sitemizde belirtilen 15-25 dakikalık tahmini varış süreleri (ETA) normal hava ve trafik şartları için geçerlidir. Ağır kış koşulları, otoyol kaza yoğunluğu veya gişe bakım çalışmaları kaynaklı gecikmelerde sürücüye telefonla anlık bilgi verilir.
            </p>

            <h2 className="text-base font-bold text-slate-900 pt-2">3. Fiyatlandırma ve Ödeme</h2>
            <p>
              Yapılacak işlem (yama, fitil, stepne veya yeni lastik) ve aracın konumuna göre telefonda onaylanan fiyat geçerlidir. Ödemeler nakit veya seyyar pos cihazı üzerinden kredi kartı/banka kartı ile tahsil edilir.
            </p>

            <h2 className="text-base font-bold text-slate-900 pt-2">4. İletişim</h2>
            <p>
              Her türlü talep ve şikayetiniz için <strong>0546 686 13 98</strong> nolu müşteri hizmetlerimizi arayabilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
