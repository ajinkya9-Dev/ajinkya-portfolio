import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const TechStack: React.FC = () => {
  const [expandedLayer, setExpandedLayer] = useState<string>('LAYER 01');

  return (
    <section
      id="architecture"
      className="relative py-24 sm:py-32 bg-[#F5F0E6] border-b border-[#1C2420]/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#C76B3C] mb-4">
            06 // SYSTEM TOPOLOGY
          </p>
          <h2 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#102F27] leading-[1.08] tracking-tight">
            THE STACK BEHIND THE WORK.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1C2420]/75 leading-relaxed">
            A cohesive 5-tier architecture balancing transactional integrity in Dataverse,
            high-performance C# backend pipelines, event-driven cloud integrations, and modern AI automation.
          </p>
        </div>

        {/* Layered Architecture Cards */}
        <div className="space-y-4">
          {PORTFOLIO_DATA.architectureLayers.map((layer) => {
            const isExpanded = expandedLayer === layer.layerNumber;

            return (
              <div
                key={layer.layerNumber}
                onClick={() => setExpandedLayer(isExpanded ? '' : layer.layerNumber)}
                className={`cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-[#102F27] text-[#F5F0E6] border-[#102F27] shadow-xl'
                    : 'bg-white/80 text-[#1C2420] border-[#1C2420]/10 hover:border-[#102F27]/30 hover:bg-white'
                }`}
              >
                <div className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  {/* Layer Number & Title */}
                  <div className="flex items-center gap-6">
                    <span
                      className={`text-xs font-mono font-bold tracking-widest px-3 py-1 rounded ${
                        isExpanded
                          ? 'bg-[#C76B3C] text-white'
                          : 'bg-[#102F27]/10 text-[#102F27]'
                      }`}
                    >
                      {layer.layerNumber}
                    </span>
                    <div>
                      <h3
                        className={`font-serif-heading text-xl sm:text-2xl font-bold tracking-tight ${
                          isExpanded ? 'text-white' : 'text-[#102F27]'
                        }`}
                      >
                        {layer.title}
                      </h3>
                      <p
                        className={`text-xs font-medium ${
                          isExpanded ? 'text-[#C99A4A]' : 'text-[#89977B]'
                        }`}
                      >
                        {layer.role}
                      </p>
                    </div>
                  </div>

                  {/* Summary Tech Pills or Expand Indicator */}
                  <div className="flex items-center gap-4">
                    <div className="hidden sm:flex flex-wrap gap-1.5 max-w-md justify-end">
                      {layer.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className={`text-[11px] font-mono px-2.5 py-0.5 rounded ${
                            isExpanded
                              ? 'bg-[#163D32] text-[#F5F0E6]/90 border border-white/10'
                              : 'bg-[#F5F0E6] text-[#1C2420]/80'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200 ${
                        isExpanded
                          ? 'rotate-180 bg-[#C76B3C] text-white'
                          : 'bg-[#1C2420]/5 text-[#1C2420]'
                      }`}
                    >
                      ↓
                    </div>
                  </div>
                </div>

                {/* Expanded Details Pane */}
                {isExpanded && (
                  <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-6 animate-in slide-in-from-top-2 duration-200">
                    <div className="lg:col-span-8">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-[#C99A4A] mb-2 font-bold">
                        Architectural Role & Pipeline Position
                      </h4>
                      <p className="text-sm text-[#F5F0E6]/85 leading-relaxed">
                        {layer.description}
                      </p>
                    </div>

                    <div className="lg:col-span-4">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-white/70 mb-2 font-bold">
                        Integrated Components
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {layer.technologies.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 text-xs font-mono bg-[#163D32] text-white rounded border border-white/10"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
