import React from 'react';
import { MapPin, ExternalLink, ShieldCheck, Star, Phone } from 'lucide-react';
import { GOOGLE_PROFILES, PHONE_NUMBER_RAW, PHONE_DISPLAY } from '../data/content';

export const GoogleProfilesSection: React.FC = () => {
  return (
    <section id="google-profilleri" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="max-w-2xl mx-auto text-center mb-10 space-y-2">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
            Google Haritalar Kayıtlarımız
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 font-display">
            Doğrulanmış 2 İşletme Profilimiz
          </h2>
          <p className="text-slate-600 text-sm">
            Silivri ve Çatalca'da 2 ayrı kayıtlı noktamızla hizmetinizdeyiz. Google üzerindeki puan ve yorumlarımızı inceleyebilirsiniz.
          </p>
        </div>

        {/* 2 Clean Google Business Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GOOGLE_PROFILES.map((profile, idx) => (
            <div
              key={profile.id}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 shadow-2xs hover:border-slate-300 transition-colors text-left flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-2xs">
                    <MapPin className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-blue-700 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Google Doğrulanmış #{idx + 1}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-950 font-display mt-0.5">
                      {profile.name}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs py-2 px-3 rounded-lg bg-white border border-slate-200 w-fit">
                  <div className="flex items-center gap-1 text-amber-500 font-extrabold">
                    <Star className="w-4 h-4 fill-amber-500" />
                    <span>{profile.rating.toFixed(1)}</span>
                  </div>
                  <span className="text-slate-300">·</span>
                  <span className="text-slate-700 font-medium">
                    {profile.reviewCount}+ Google Yorumu
                  </span>
                  <span className="text-slate-300">·</span>
                  <span className="text-emerald-700 font-bold">7/24 Açık</span>
                </div>

                <p className="text-xs text-slate-600">
                  {profile.addressSummary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-2">
                <a
                  href={profile.shareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-xs font-bold text-slate-800 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-red-600" />
                  <span>Google Haritalar'da Aç</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href={`tel:${PHONE_NUMBER_RAW}`}
                  className="inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 fill-slate-950" />
                  <span>{PHONE_DISPLAY}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
