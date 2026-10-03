import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { GOOGLE_REVIEWS } from '../data/content';

export const GoogleReviewsGrid: React.FC = () => {
  return (
    <section id="musteri-yorumlari" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="max-w-2xl mx-auto text-center mb-10 space-y-2">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
            Müşteri Yorumları
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 font-display">
            Sürücü Değerlendirmeleri
          </h2>
          <p className="text-slate-600 text-sm">
            Kuzey Marmara Otoyolu ve TEM'de hizmet verdiğimiz sürücülerin Google yorumları.
          </p>
        </div>

        {/* 3 Simple Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
          {GOOGLE_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-amber-500">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400">{review.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <strong className="text-slate-900 block font-semibold">{review.author}</strong>
                  <span className="text-[11px] text-slate-500">{review.vehicle}</span>
                </div>
                <span className="text-[11px] text-blue-700 font-medium">
                  {review.profileSource}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
