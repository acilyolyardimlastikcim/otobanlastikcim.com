import { WhatsAppIcon } from '../../components/icons/WhatsAppIcon';
import { Link } from '../../components/Link';
import React from 'react';
import { Phone, MessageSquare, Disc, CheckCircle2 } from 'lucide-react';
import { PHONE_NUMBER_RAW, PHONE_DISPLAY, getWhatsAppEmergencyUrl } from '../../data/content';
import { SeoHead } from '../../components/SeoHead';
import { useRouter } from '../../context/RouterContext';

export const SifirCikmaLastikPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      <SeoHead
        title="Otoban Sıfır ve Çıkma Lastik Temini 7/24 | Yerinde Janta Montaj"
        description="Stepneniz yok mu veya lastiğiniz mi yarıldı? Kuzey Marmara ve TEM'de her ebatta sıfır ve temiz çıkma lastik aracınızın yanına getirilir. Tel: 0546 686 13 98."
        canonicalPath="/hizmetler/sifir-cikma-lastik"
      />

      <section className="bg-gradient-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200 py-8 sm:py-14 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800">
            <Disc className="w-3.5 h-3.5 text-emerald-600" />
            <span>Sıfır & Çıkma Lastik Temini</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 font-display leading-tight">
            Otobanda Sıfır & Çıkma Lastik <span className="text-emerald-700">Araç Başında Montaj</span>
          </h1>

          <p className="text-sm sm:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
            Lastiğiniz yarıldıysa ve aracınızda stepne yoksa panik yapmayın. Ebadınızı telefonda belirtin; sıfır veya yüksek dişli temiz çıkma lastiği yerinde getirip jantınıza monte edelim.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto">
            <a
              href={`tel:${PHONE_NUMBER_RAW}`}
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black shadow-md shadow-amber-500/25 transition-all text-center"
            >
              <Phone className="w-4 h-4 fill-slate-950" />
              <span>Ebat Sor & Fiyat Al: {PHONE_DISPLAY}</span>
            </a>

            <a
              href={getWhatsAppEmergencyUrl('Lastiğim yarıldı, sıfır veya çıkma lastik temini için ebat soruyorum')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow-md shadow-emerald-600/20 transition-all text-center"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>WhatsApp Ebat Bildir</span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-10 max-w-4xl mx-auto px-4 sm:px-6 space-y-4 text-left">
        <h2 className="text-xl font-bold text-slate-950 font-display">Stoktaki Popüler Ebatlar</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
          <div className="p-3 rounded-lg bg-white border border-slate-200 font-mono font-bold text-slate-800 text-center">205/55 R16</div>
          <div className="p-3 rounded-lg bg-white border border-slate-200 font-mono font-bold text-slate-800 text-center">225/45 R17</div>
          <div className="p-3 rounded-lg bg-white border border-slate-200 font-mono font-bold text-slate-800 text-center">225/40 R18</div>
          <div className="p-3 rounded-lg bg-white border border-slate-200 font-mono font-bold text-slate-800 text-center">195/65 R15</div>
          <div className="p-3 rounded-lg bg-white border border-slate-200 font-mono font-bold text-slate-800 text-center">215/65 R16 (SUV)</div>
          <div className="p-3 rounded-lg bg-white border border-slate-200 font-mono font-bold text-slate-800 text-center">235/55 R18 (SUV)</div>
          <div className="p-3 rounded-lg bg-white border border-slate-200 font-mono font-bold text-slate-800 text-center">215/75 R16C (Ticari)</div>
          <div className="p-3 rounded-lg bg-white border border-slate-200 font-mono font-bold text-slate-800 text-center">315/80 R22.5 (Tır)</div>
        </div>

        <div className="pt-4 text-center">
          <Link to="/" className="text-xs font-bold text-blue-700 hover:underline cursor-pointer">
            ← Ana Sayfaya Dön
          </Link>
        </div>
      </section>
    </div>
  );
};
