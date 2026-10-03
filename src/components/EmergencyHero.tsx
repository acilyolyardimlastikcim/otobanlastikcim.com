import React, { useState } from 'react';
import { Phone, MessageSquare, Navigation, MapPin, CheckCircle2, Loader2, Clock, ShieldCheck } from 'lucide-react';
import { PHONE_NUMBER_RAW, PHONE_DISPLAY, getWhatsAppEmergencyUrl } from '../data/content';

export const EmergencyHero: React.FC = () => {
  const [gpsLoading, setGpsLoading] = useState<boolean>(false);
  const [gpsSuccess, setGpsSuccess] = useState<string | null>(null);
  const [gpsError, setGpsError] = useState<string | null>(null);

  const handleShareGps = () => {
    if (!navigator.geolocation) {
      setGpsError('Tarayıcınız konum servisini desteklemiyor. Lütfen WhatsApp butonuna basınız.');
      return;
    }

    setGpsLoading(true);
    setGpsError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setGpsLoading(false);
        const lat = position.coords.latitude.toFixed(6);
        const lng = position.coords.longitude.toFixed(6);
        const mapsLink = `https://maps.google.com/?q=${lat},${lng}`;
        setGpsSuccess(`Konumunuz tespit edildi (${lat}, ${lng})`);
        
        window.open(getWhatsAppEmergencyUrl(mapsLink), '_blank');
      },
      (error) => {
        setGpsLoading(false);
        setGpsError('Konum izni alınamadı. WhatsApp üzerinden mesajla konum gönderebilirsiniz.');
        window.open(getWhatsAppEmergencyUrl('Otoban üzerindeyim, canlı konumumu atıyorum'), '_blank');
      },
      { timeout: 10000, enableHighAccuracy: true }
    );
  };

  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-slate-100/70 border-b border-slate-200 py-6 sm:py-12 lg:py-14 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4 sm:space-y-6">
        
        {/* High-Intent SEO Main Headline */}
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 font-display leading-tight text-balance">
            Kuzey Marmara & TEM Otoyolu <span className="text-blue-700">7/24 Mobil Lastikçi</span>
          </h1>
          <p className="text-sm sm:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
            Silivri ve Çatalca otobanlarında lastiğiniz mi patladı? <strong className="text-slate-950 font-bold">15-20 dakikada yanınızdayız.</strong> Yerinde lastik tamiri, stepne montajı ve sıfır/çıkma lastik temini.
          </p>
        </div>

        {/* Primary Call & WhatsApp Action Buttons (Fluid Responsive) */}
        <div className="pt-1 flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center max-w-lg mx-auto">
          {/* Main Phone Call Button */}
          <a
            href={`tel:${PHONE_NUMBER_RAW}`}
            className="w-full sm:flex-1 inline-flex items-center justify-center gap-3 px-5 py-3.5 sm:py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 active:scale-95 text-slate-950 font-black shadow-md shadow-amber-500/25 transition-all cursor-pointer"
          >
            <Phone className="w-5 h-5 fill-slate-950 shrink-0 animate-bounce" />
            <div className="text-left leading-tight">
              <span className="block text-[10px] uppercase font-bold text-slate-900 tracking-wider">
                15 Dk Varış · Hemen Ara
              </span>
              <span className="text-lg sm:text-2xl font-black font-display text-slate-950">
                {PHONE_DISPLAY}
              </span>
            </div>
          </a>

          {/* WhatsApp Button */}
          <a
            href={getWhatsAppEmergencyUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1 inline-flex items-center justify-center gap-3 px-5 py-3.5 sm:py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-bold shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
          >
            <MessageSquare className="w-5 h-5 fill-white shrink-0" />
            <div className="text-left leading-tight">
              <span className="block text-[10px] uppercase font-medium text-emerald-100 tracking-wider">
                Hızlı Konum
              </span>
              <span className="text-base sm:text-lg font-bold">
                WhatsApp Konum Gönder
              </span>
            </div>
          </a>
        </div>

        {/* 1-Click Instant GPS Location Helper */}
        <div className="max-w-md mx-auto p-3 sm:p-4 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-2 text-center">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-left min-w-0">
              <MapPin className="w-4 h-4 text-red-600 shrink-0" />
              <span className="text-xs font-semibold text-slate-800 truncate">
                Otoyolda kilometre tabelasını bilmiyor musunuz?
              </span>
            </div>

            <button
              type="button"
              onClick={handleShareGps}
              disabled={gpsLoading}
              className="w-full sm:w-auto px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shrink-0 cursor-pointer shadow-xs"
            >
              {gpsLoading ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Alınıyor...</span>
                </>
              ) : (
                <>
                  <Navigation className="w-3.5 h-3.5 text-amber-400" />
                  <span>Canlı Konumumu Paylaş</span>
                </>
              )}
            </button>
          </div>

          {gpsSuccess && (
            <p className="text-xs text-emerald-700 font-medium">
              {gpsSuccess} - WhatsApp konuşması açıldı.
            </p>
          )}
          {gpsError && (
            <p className="text-xs text-amber-700 font-medium">
              {gpsError}
            </p>
          )}
        </div>

        {/* 3 Simple Trust Signals */}
        <div className="pt-1 flex flex-wrap items-center justify-center gap-y-2 gap-x-5 text-xs sm:text-sm text-slate-600">
          <span className="flex items-center gap-1.5 font-semibold text-slate-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            Telefonda Net Fiyat
          </span>
          <span className="flex items-center gap-1.5 font-semibold text-slate-800">
            <Clock className="w-4 h-4 text-amber-600 shrink-0" />
            15-20 Dakikada Yanınızda
          </span>
          <span className="flex items-center gap-1.5 font-semibold text-slate-800">
            <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
            Google Doğrulanmış Profil
          </span>
        </div>

      </div>
    </section>
  );
};
