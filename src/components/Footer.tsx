import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0C241E] text-[#F5F0E6] py-14 border-t border-[#F5F0E6]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-[#F5F0E6]/10">
          <div>
            <span className="font-serif-heading text-xl font-bold text-white tracking-tight">
              AJINKYA NIKAM
            </span>
            <p className="text-xs text-[#89977B] mt-1 font-medium">
              Dynamics 365 CE Developer • Power Platform • CRM • Integrations
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs uppercase font-mono tracking-wider">
            <a
              href={`mailto:${profile.email}`}
              className="text-[#F5F0E6]/80 hover:text-[#C76B3C] transition-colors"
            >
              Email
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F5F0E6]/80 hover:text-[#C76B3C] transition-colors"
            >
              LinkedIn
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="text-[#C99A4A] hover:text-white transition-colors flex items-center gap-1 focus:outline-none"
            >
              <span>Back to Top</span>
              <span>↑</span>
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#F5F0E6]/60 font-mono">
          <p>© 2026 Ajinkya Rameshwar Nikam. All rights reserved.</p>
          <p>Engineered for Microsoft Dynamics 365 CE & Power Platform.</p>
        </div>
      </div>
    </footer>
  );
};
