import React from 'react';
import { Clock, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { HIGHWAY_POINTS, PHONE_NUMBER_RAW, PHONE_DISPLAY } from '../data/content';

export const HighwayCoverageMap: React.FC = () => {
  return (
    <section id="guzergahlar" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="max-w-2xl mx-auto text-center mb-10 space-y-2">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
            Hizmet Güzergahlarımız
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 font-display">
            Silivri, Çatalca ve Otobanlar
          </h2>
          <p className="text-slate-600 text-sm">
            Nöbetçi mobil lastikçi araçlarımız aşağıdaki tüm güzergahlara 15-25 dakikada ulaşmaktadır.
          </p>
        </div>

        {/* Clean Grid of Locations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          {HIGHWAY_POINTS.map((pt) => (
            <div
              key={pt.id}
              className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="text-[10px] font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    {pt.highway}
                  </span>
                  <span className="text-[11px] font-mono font-bold text-emerald-700 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    ~{pt.avgEtaMinutes} dk
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-950">
                  {pt.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  {pt.description}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400">Durum:</span>
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                  Nöbetçi Hazır
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call Banner */}
        <div className="mt-8 p-5 rounded-2xl bg-white border border-slate-200 max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left shadow-xs">
          <div className="flex items-center gap-2.5">
            <MapPin className="w-5 h-5 text-red-600 shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-slate-800">
              Bulunduğunuz noktaya en yakın nöbetçi lastikçiyi hemen çağırın.
            </span>
          </div>

          <a
            href={`tel:${PHONE_NUMBER_RAW}`}
            className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shrink-0 whitespace-nowrap transition-colors"
          >
            Hemen Ara: {PHONE_DISPLAY}
          </a>
        </div>

      </div>
    </section>
  );
};
