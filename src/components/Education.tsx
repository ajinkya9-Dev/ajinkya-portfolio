import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  const edu = PORTFOLIO_DATA.education;

  return (
    <section
      id="education"
      className="relative py-24 sm:py-28 bg-[#F5F0E6] border-b border-[#1C2420]/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#C76B3C] mb-4">
            09 // FOUNDATIONAL RIGOR
          </p>
          <h2 className="font-serif-heading text-4xl sm:text-5xl font-bold text-[#102F27] leading-[1.08] tracking-tight">
            EDUCATION & BACKGROUND.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Degree Card */}
          <div className="lg:col-span-7 bg-white/70 border border-[#1C2420]/10 rounded-2xl p-6 sm:p-8 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <span className="text-xs font-mono font-bold text-[#89977B] uppercase tracking-wider">
                Graduated {edu.graduationYear}
              </span>
              <span className="px-3 py-1 text-xs font-mono font-bold bg-[#102F27] text-[#C99A4A] rounded">
                {edu.grade}
              </span>
            </div>

            <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#102F27] mb-2">
              {edu.degree}
            </h3>
            <p className="text-base text-[#1C2420]/80 font-medium mb-4">
              {edu.institution}
            </p>
            <p className="text-xs sm:text-sm text-[#1C2420]/70 leading-relaxed">
              Curriculum focused on software engineering principles, database architecture, distributed systems,
              networking protocols, and object-oriented programming with high academic distinction.
            </p>
          </div>

          {/* Languages Card */}
          <div className="lg:col-span-5 bg-white/70 border border-[#1C2420]/10 rounded-2xl p-6 sm:p-8 shadow-xs">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#102F27] font-bold pb-3 mb-4 border-b border-[#1C2420]/10">
              Spoken & Professional Languages
            </h4>
            <div className="space-y-4">
              {edu.languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center justify-between p-3 bg-[#F5F0E6]/60 rounded-lg border border-[#1C2420]/5"
                >
                  <span className="text-sm font-bold text-[#102F27]">
                    {lang.name}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#C76B3C] font-semibold">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
