import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const { profile } = PORTFOLIO_DATA;

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="relative py-28 sm:py-36 bg-[#102F27] text-[#F5F0E6] overflow-hidden"
    >
      {/* Decorative linework */}
      <div className="absolute inset-0 bg-grain-dark opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-[#C76B3C]" />
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#C99A4A]">
              10 // INITIATE DIALOGUE
            </p>
          </div>

          {/* Large Headline */}
          <h2 className="font-serif-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.02] tracking-tight mb-8">
            LET&apos;S BUILD<br />
            <span className="text-[#C76B3C]">SOMETHING</span> USEFUL.
          </h2>

          <p className="text-lg sm:text-xl text-[#F5F0E6]/85 leading-relaxed max-w-2xl mb-12">
            Open to hybrid and remote opportunities across India. Ready to architect high-scale
            Dynamics 365 CE extensions, Dataverse integrations, and AppSource products.
          </p>

          {/* Primary & Secondary Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-16">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-3 px-8 py-4 text-xs font-bold tracking-widest uppercase bg-[#C76B3C] hover:bg-[#C76B3C]/90 text-white rounded transition-all duration-200 shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A4A]"
            >
              <span>EMAIL AJINKYA</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold tracking-widest uppercase bg-transparent hover:bg-white/10 text-white border border-white/30 rounded transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A4A]"
            >
              <span>LINKEDIN</span>
              <span className="text-sm">↗</span>
            </a>
          </div>

          {/* Direct Coordinate Cards with Copy Affordance */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-[#F5F0E6]/15">
            {/* Email */}
            <div className="bg-[#163D32] border border-[#F5F0E6]/10 p-6 rounded-xl relative group">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#C99A4A] block mb-2">
                Electronic Mail
              </span>
              <p className="text-sm font-semibold text-white break-all mb-4">
                {profile.email}
              </p>
              <button
                type="button"
                onClick={() => copyToClipboard(profile.email, 'email')}
                className="text-[11px] font-mono text-[#F5F0E6]/70 hover:text-white uppercase tracking-wider flex items-center gap-1.5 focus:outline-none"
              >
                <span>{copiedType === 'email' ? '✓ Copied to Clipboard' : 'Copy Email Address'}</span>
              </button>
            </div>

            {/* Phone */}
            <div className="bg-[#163D32] border border-[#F5F0E6]/10 p-6 rounded-xl relative group">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#C99A4A] block mb-2">
                Direct Telephony
              </span>
              <p className="text-sm font-semibold text-white mb-4">
                {profile.phone}
              </p>
              <button
                type="button"
                onClick={() => copyToClipboard(profile.phone, 'phone')}
                className="text-[11px] font-mono text-[#F5F0E6]/70 hover:text-white uppercase tracking-wider flex items-center gap-1.5 focus:outline-none"
              >
                <span>{copiedType === 'phone' ? '✓ Copied to Clipboard' : 'Copy Phone Number'}</span>
              </button>
            </div>

            {/* Location & Notice */}
            <div className="bg-[#163D32] border border-[#F5F0E6]/10 p-6 rounded-xl">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#C99A4A] block mb-2">
                Location & Status
              </span>
              <p className="text-sm font-semibold text-white mb-1">
                {profile.location}
              </p>
              <p className="text-xs text-[#C76B3C] font-mono uppercase font-bold">
                Notice: {profile.noticePeriod}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
