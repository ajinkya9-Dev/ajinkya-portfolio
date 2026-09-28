import React, { useEffect, useRef, useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Impact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="impact"
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-[#F5F0E6] border-b border-[#1C2420]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C76B3C]">
              01 // MEASURABLE SYSTEM IMPACT
            </span>
          </div>
          <h2 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#102F27] leading-[1.08] tracking-tight">
            ENGINEERED FOR SCALE.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1C2420]/75 leading-relaxed">
            High-throughput enterprise pipelines, multi-tenant AppSource solutions, and mission-critical
            Dataverse architectures engineered for production resilience.
          </p>
        </div>

        {/* Oversized Editorial Numbers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 border-y border-[#1C2420]/15 divide-y md:divide-y-0 lg:divide-x divide-[#1C2420]/15">
          {PORTFOLIO_DATA.impactMetrics.map((item, index) => (
            <div
              key={item.label}
              className={`pt-8 pb-10 px-4 lg:px-8 flex flex-col justify-between transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div>
                <div className="flex items-baseline gap-1 text-[#102F27]">
                  <span className="font-serif-heading text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight">
                    {item.metric}
                  </span>
                  <span className="text-sm font-bold uppercase tracking-wider text-[#C76B3C]">
                    {item.unit}
                  </span>
                </div>
                <h3 className="mt-4 text-xs font-bold uppercase tracking-[0.15em] text-[#102F27]">
                  {item.label}
                </h3>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1C2420]/10">
                <p className="text-xs text-[#1C2420]/70 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Adjacency Proof Callout Banner */}
        <div className="mt-12 bg-white/60 border border-[#102F27]/10 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#89977B]">
              Key Production Metric
            </span>
            <p className="mt-1 text-sm sm:text-base font-semibold text-[#102F27]">
              Engineered lead allocation & bulk messaging processing 50,000+ records per day,
              reducing manual effort by approximately 60%.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <span className="px-3 py-1.5 text-xs font-mono uppercase bg-[#102F27] text-[#F5F0E6] rounded">
              5-Star AppSource Rated
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
