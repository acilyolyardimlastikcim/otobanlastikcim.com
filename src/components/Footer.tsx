import { Link } from './Link';
import React from 'react';
import { Phone } from 'lucide-react';
import { PHONE_NUMBER_RAW, PHONE_DISPLAY, GOOGLE_PROFILES } from '../data/content';
import { useRouter } from '../context/RouterContext';

export const Footer: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <footer className="bg-slate-950 text-slate-400 py-10 pb-24 lg:pb-10 border-t border-slate-900 text-xs text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Col 1: Brand & Contact */}
          <div className="space-y-2">
            <span className="text-base font-black text-white font-display block">
              Otoban Lastikçim
            </span>
            <p className="text-slate-400 leading-relaxed text-xs">
              Silivri, Çatalca, Kuzey Marmara Otoyolu ve TEM güzergahında 7/24 seyyar lastik tamiri, stepne montajı ve lastik temini.
            </p>
            <div className="pt-2">
              <a
                href={`tel:${PHONE_NUMBER_RAW}`}
                className="text-amber-400 font-black text-base hover:underline"
              >
                {PHONE_DISPLAY}
              </a>
              <span className="block text-[11px] text-slate-500 mt-0.5">
                7/24 Acil Nöbetçi Seyyar Servis
              </span>
            </div>
          </div>

          {/* Col 2: SEO Highway & Seyyar / Mobil Pages */}
          <div className="space-y-2">
            <span className="font-bold text-white block">
              Otoyol Seyyar & Mobil Sayfaları
            </span>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <Link to="/kuzey-marmara-lastikci" className="hover:text-white transition-colors cursor-pointer text-left">
                  Kuzey Marmara Otoyolu Lastikçi
                </Link>
              </li>
              <li>
                <Link to="/kuzey-marmara-seyyar-lastikci" className="hover:text-white transition-colors cursor-pointer text-left">
                  Kuzey Marmara Seyyar Lastikçi
                </Link>
              </li>
              <li>
                <Link to="/kuzey-marmara-mobil-lastikci" className="hover:text-white transition-colors cursor-pointer text-left">
                  Kuzey Marmara Mobil Lastikçi
                </Link>
              </li>
              <li>
                <Link to="/otoban-lastikci" className="hover:text-white transition-colors cursor-pointer text-left">
                  Otoban Lastikçi (TEM & E-80)
                </Link>
              </li>
              <li>
                <Link to="/otoban-seyyar-lastikci" className="hover:text-white transition-colors cursor-pointer text-left">
                  Otoban Seyyar Lastikçi
                </Link>
              </li>
              <li>
                <Link to="/otoban-mobil-lastikci" className="hover:text-white transition-colors cursor-pointer text-left">
                  Otoban Mobil Lastikçi
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Ads Pages */}
          <div className="space-y-2">
            <span className="font-bold text-white block">
              Seyyar Hizmet Reklam Sayfaları
            </span>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <Link to="/hizmetler/yerinde-lastik-tamiri" className="hover:text-white transition-colors cursor-pointer text-left">
                  Yerinde Seyyar Lastik Tamiri
                </Link>
              </li>
              <li>
                <Link to="/hizmetler/stepne-degisimi" className="hover:text-white transition-colors cursor-pointer text-left">
                  Stepne Değişimi & Bijon Sökme
                </Link>
              </li>
              <li>
                <Link to="/hizmetler/sifir-cikma-lastik" className="hover:text-white transition-colors cursor-pointer text-left">
                  Sıfır ve Çıkma Lastik Temini
                </Link>
              </li>
              <li>
                <Link to="/hizmetler/tir-kamyon-lastik-tamiri" className="hover:text-white transition-colors cursor-pointer text-left">
                  Tır & Kamyon Ağır Vasıta Lastikçisi
                </Link>
              </li>
            </ul>
            <div className="pt-2">
              <span className="font-bold text-white block mb-1">Doğrulanmış İşletmeler</span>
              {GOOGLE_PROFILES.map((p) => (
                <a
                  key={p.id}
                  href={p.shareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-slate-400 hover:text-white transition-colors truncate"
                >
                  <span className="font-semibold">{p.name.split('|')[0]}</span>
                  <span className="text-amber-400 ml-1">★ {p.rating.toFixed(1)}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Col 4: Legal & Privacy */}
          <div className="space-y-2">
            <span className="font-bold text-white block">
              Yasal & Gizlilik
            </span>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <Link to="/gizlilik-politikasi" className="hover:text-white transition-colors cursor-pointer text-left">
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link to="/kvkk" className="hover:text-white transition-colors cursor-pointer text-left">
                  KVKK Aydınlatma Metni
                </Link>
              </li>
              <li>
                <Link to="/kullanim-kosullari" className="hover:text-white transition-colors cursor-pointer text-left">
                  Kullanım Koşulları
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500">
          <div>
            © {new Date().getFullYear()} Otoban Lastikçim. Silivri, Çatalca, Kuzey Marmara & TEM 7/24 Seyyar Lastik Servisi.
          </div>
          <div className="flex items-center gap-4 text-xs">
            <Link to="/gizlilik-politikasi" className="hover:text-slate-300 cursor-pointer">
              Gizlilik
            </Link>
            <span>·</span>
            <Link to="/kvkk" className="hover:text-slate-300 cursor-pointer">
              KVKK
            </Link>
            <span>·</span>
            <Link to="/kullanim-kosullari" className="hover:text-slate-300 cursor-pointer">
              Şartlar
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
