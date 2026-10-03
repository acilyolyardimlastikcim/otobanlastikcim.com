import { Link } from '../../components/Link';
import React from 'react';
import { FileText, ArrowLeft } from 'lucide-react';
import { SeoHead } from '../../components/SeoHead';
import { useRouter } from '../../context/RouterContext';

export const KvkkPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen py-10">
      <SeoHead
        title="KVKK Aydınlatma Metni | Can & Kurumsal Mobil Lastikçi"
        description="6698 Sayılı Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca kişisel verilerin işlenmesine ilişkin aydınlatma metni."
        canonicalPath="/kvkk"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:underline mb-6 cursor-pointer">
          <ArrowLeft className="w-4 h-4" />
          <span>Ana Sayfaya Dön</span>
        </Link>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs space-y-6 text-left">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-slate-950 font-display">
                KVKK Aydınlatma Metni
              </h1>
              <span className="text-xs text-slate-400">6698 Sayılı Kanun Kapsamında Bilgilendirme</span>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <p>
              6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, <strong>Can & Kurumsal Mobil Lastik Hizmetleri</strong> ("Veri Sorumlusu") sıfatıyla, tarafımıza sağlanan kişisel verilerinizin işlenmesi hakkında sizleri bilgilendiriyoruz.
            </p>

            <h2 className="text-base font-bold text-slate-900 pt-2">1. İşlenen Kişisel Verileriniz</h2>
            <p>
              Yol yardım ve seyyar lastik tamiri hizmetlerimiz esnasında işlenen kişisel veriler; ad-soyad, telefon numarası, araç konumu ve fatura/ödeme bilgilerinizle sınırlıdır.
            </p>

            <h2 className="text-base font-bold text-slate-900 pt-2">2. Kişisel Verilerin İşlenme Hukuki Sebepleri</h2>
            <p>
              Kişisel verileriniz, KVKK'nın 5. maddesinde belirtilen "Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması" ve "Veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması" hukuki sebeplerine dayalı olarak toplanmakta ve işlenmektedir.
            </p>

            <h2 className="text-base font-bold text-slate-900 pt-2">3. Kişisel Verilerin Aktarımı</h2>
            <p>
              Kişisel verileriniz, kanunen yetkili kamu kurum ve kuruluşları (adli makamlar, kolluk kuvvetleri) haricinde hiçbir üçüncü tüzel veya gerçek kişiyle ticari amaçla paylaşılmaz.
            </p>

            <h2 className="text-base font-bold text-slate-900 pt-2">4. Haklarınız</h2>
            <p>
              KVKK'nın 11. maddesi kapsamında; verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, silinmesini veya düzeltilmesini talep etme haklarına sahipsiniz. Başvurularınızı <strong>0546 686 13 98</strong> nolu çağrı hattımıza iletebilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
