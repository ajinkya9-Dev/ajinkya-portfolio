import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  const [selectedStageIndex, setSelectedStageIndex] = useState<number | null>(null);
  const exp = PORTFOLIO_DATA.experience;

  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32 bg-[#F5F0E6] border-b border-[#1C2420]/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#C76B3C] mb-4">
            02 // PROFESSIONAL TRAJECTORY
          </p>
          <h2 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#102F27] leading-[1.08] tracking-tight">
            FROM REQUIREMENT TO PRODUCTION.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1C2420]/75 leading-relaxed">
            Leading engineering delivery for high-scale enterprise CRM products at Inogic Tech.
            Bridging technical architecture, client workshops, and production SLA hotfixes.
          </p>
        </div>

        {/* Company & Role Header Card */}
        <div className="mb-14 p-6 sm:p-8 bg-[#102F27] text-[#F5F0E6] rounded-xl shadow-lg relative overflow-hidden">
          {/* Subtle geometric line overlay */}
          <div className="absolute top-0 right-0 w-80 h-80 pointer-events-none opacity-10">
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor">
              <circle cx="50" cy="50" r="40" strokeWidth="1" />
              <circle cx="50" cy="50" r="25" strokeWidth="1" strokeDasharray="4 2" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-[#C99A4A] font-semibold mb-2">
                <span>{exp.period}</span>
                <span>•</span>
                <span>{exp.location}</span>
              </div>
              <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {exp.role}
              </h3>
              <p className="text-sm sm:text-base text-[#F5F0E6]/80 mt-1 font-medium">
                {exp.company}
              </p>
            </div>

            <div className="lg:max-w-md bg-[#163D32] border border-[#F5F0E6]/15 rounded-lg p-4">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#C76B3C] block mb-1">
                Signature Feature Ownership
              </span>
              <p className="text-xs sm:text-sm font-medium text-white/95 leading-snug">
                &ldquo;{exp.keyHighlight}&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Visual Lifecycle Flow: Requirement → Architecture → Development → Integration → Testing → Production */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#102F27]">
              Engineering Delivery Lifecycle
            </h4>
            <span className="text-[11px] text-[#89977B] font-mono">
              Click any phase to highlight
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {exp.stages.map((stage, idx) => {
              const isSelected = selectedStageIndex === idx;
              return (
                <button
                  key={stage.name}
                  type="button"
                  onClick={() => setSelectedStageIndex(isSelected ? null : idx)}
                  className={`text-left p-4 rounded-lg border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C76B3C] ${
                    isSelected
                      ? 'bg-[#102F27] text-white border-[#102F27] shadow-md scale-[1.02]'
                      : 'bg-white/80 text-[#1C2420] border-[#1C2420]/10 hover:border-[#102F27]/30 hover:bg-white'
                  }`}
                >
                  <span
                    className={`text-[10px] font-mono block mb-1 font-bold ${
                      isSelected ? 'text-[#C99A4A]' : 'text-[#C76B3C]'
                    }`}
                  >
                    PHASE 0{idx + 1}
                  </span>
                  <p className="text-xs font-bold leading-tight mb-1">
                    {stage.name}
                  </p>
                  <p
                    className={`text-[10px] leading-tight ${
                      isSelected ? 'text-white/80' : 'text-[#1C2420]/60'
                    }`}
                  >
                    {stage.desc}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* 10 Responsibilities Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#102F27]/20 space-y-8 sm:space-y-10">
          {exp.responsibilities.map((item, idx) => (
            <div
              key={item.number}
              className="relative group transition-transform duration-200 hover:-translate-x-0.5"
            >
              {/* Timeline marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#F5F0E6] border-2 border-[#102F27] flex items-center justify-center group-hover:border-[#C76B3C] group-hover:scale-110 transition-all">
                <span className="w-1.5 h-1.5 rounded-full bg-[#102F27] group-hover:bg-[#C76B3C]" />
              </div>

              {/* Item Card */}
              <div className="bg-white/70 hover:bg-white border border-[#1C2420]/10 hover:border-[#102F27]/20 p-5 sm:p-6 rounded-xl transition-all shadow-sm hover:shadow-md">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-bold text-[#C76B3C]">
                      {item.number}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-[#89977B]">
                      {item.stage}
                    </span>
                  </div>
                  {idx === 0 && (
                    <span className="px-2.5 py-0.5 text-[10px] uppercase font-bold tracking-wider bg-[#C76B3C] text-white rounded">
                      Featured Milestone
                    </span>
                  )}
                </div>

                <h4 className="text-base sm:text-lg font-bold text-[#102F27] mb-2 font-serif-heading">
                  {item.title}
                </h4>
                <p className="text-sm text-[#1C2420]/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
