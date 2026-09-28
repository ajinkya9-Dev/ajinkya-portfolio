import React from 'react';
import { EnterpriseArchitectureVisual } from './EnterpriseArchitectureVisual';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-32 pb-20 sm:pt-40 sm:pb-28 flex items-center bg-[#F5F0E6] bg-grain overflow-hidden border-b border-[#1C2420]/10"
    >
      {/* Decorative Editorial Background Linework */}
      <div className="absolute inset-0 pointer-events-none opacity-30 select-none">
        <div className="absolute left-[10%] top-0 bottom-0 w-[1px] bg-[#102F27]/10" />
        <div className="absolute right-[10%] top-0 bottom-0 w-[1px] bg-[#102F27]/10" />
        <div className="absolute left-0 right-0 top-[28%] h-[1px] bg-[#102F27]/10" />
        <div className="absolute left-0 right-0 bottom-[18%] h-[1px] bg-[#102F27]/10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-[#C76B3C]" />
              <p className="text-[11px] sm:text-xs tracking-[0.25em] uppercase font-semibold text-[#89977B]">
                Dynamics 365 CE • Power Platform • Integrations
              </p>
            </div>

            {/* Oversized Serif Headline */}
            <h1 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold text-[#102F27] leading-[1.08] tracking-tight mb-8">
              I BUILD THE{' '}
              <span className="relative inline-block text-[#C76B3C]">
                SYSTEMS
                <svg
                  className="absolute left-0 -bottom-2 w-full h-2.5 text-[#C99A4A]/50"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,8 Q50,0 100,8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                </svg>
              </span>{' '}
              BEHIND MODERN CRM EXPERIENCES.
            </h1>

            {/* Supporting Prose */}
            <p className="text-base sm:text-lg text-[#1C2420]/80 leading-relaxed max-w-xl mb-10">
              Dynamics 365 CE Developer specialising in CRM customisation, enterprise
              integrations, automation and Microsoft AppSource product development at Inogic Tech.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <button
                type="button"
                onClick={() => scrollTo('products')}
                className="group inline-flex items-center gap-3 px-6 py-3.5 text-xs font-bold tracking-widest uppercase text-white bg-[#102F27] hover:bg-[#163D32] rounded transition-all duration-200 shadow-md hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C76B3C]"
              >
                <span>EXPLORE MY WORK</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center px-6 py-3.5 text-xs font-bold tracking-widest uppercase text-[#102F27] hover:text-[#C76B3C] border border-[#102F27]/30 hover:border-[#C76B3C] rounded transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C76B3C]"
              >
                LET&apos;S CONNECT
              </button>
            </div>

            {/* Micro Editorial Metadata bar */}
            <div className="mt-14 pt-6 border-t border-[#1C2420]/10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#1C2420]/70 font-medium">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#102F27]" />
                <span>Inogic Tech India Pvt Ltd</span>
              </div>
              <span className="text-[#1C2420]/30 hidden sm:inline">/</span>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C76B3C]" />
                <span>Meta WhatsApp API Owner</span>
              </div>
              <span className="text-[#1C2420]/30 hidden sm:inline">/</span>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C99A4A]" />
                <span>Notice: Immediate</span>
              </div>
            </div>
          </div>

          {/* Right Column: Abstract Enterprise Topology Visual */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <EnterpriseArchitectureVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
