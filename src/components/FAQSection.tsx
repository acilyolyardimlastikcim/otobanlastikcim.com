import React, { useState } from 'react';
import { ChevronDown, Phone } from 'lucide-react';
import { FAQS, PHONE_NUMBER_RAW, PHONE_DISPLAY } from '../data/content';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="sss" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-8 space-y-2">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
            Merak Edilenler
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 font-display">
            Sıkça Sorulan Sorular
          </h2>
        </div>

        <div className="space-y-3 text-left">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full py-3.5 px-4 text-left flex items-center justify-between gap-3 text-sm font-bold text-slate-900 hover:text-blue-700 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 text-blue-700' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-2.5 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Help Box */}
        <div className="mt-8 p-5 rounded-2xl bg-slate-900 text-white text-center space-y-3">
          <p className="text-xs sm:text-sm text-slate-300">
            Lastiğinizle ilgili hemen yardım almak için 7/24 arayabilirsiniz:
          </p>
          <a
            href={`tel:${PHONE_NUMBER_RAW}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm transition-colors"
          >
            <Phone className="w-4 h-4 fill-slate-950" />
            <span>{PHONE_DISPLAY}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
