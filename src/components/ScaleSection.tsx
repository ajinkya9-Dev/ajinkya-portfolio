import React, { useState } from 'react';

export const ScaleSection: React.FC = () => {
  const [pipelineMode, setPipelineMode] = useState<'round-robin' | 'bulk-messaging' | 'workload-balance'>('round-robin');

  return (
    <section
      id="scale"
      className="relative py-24 sm:py-32 bg-[#163D32] text-[#F5F0E6] overflow-hidden border-b border-[#F5F0E6]/10"
    >
      {/* Background Decorative Tech Lines */}
      <div className="absolute inset-0 bg-grain-dark opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Big Editorial Headline & Metrics */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C99A4A] mb-4">
              05 // HIGH-THROUGHPUT ENGINE
            </span>

            <h2 className="font-serif-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.02] tracking-tight mb-8">
              50,000+<br />
              <span className="text-[#C76B3C]">RECORDS.</span><br />
              EVERY DAY.
            </h2>

            <p className="text-base sm:text-lg text-[#F5F0E6]/85 leading-relaxed mb-10 max-w-lg">
              Engineered round-robin assignment and bulk-messaging pipelines processing more than
              50,000 CRM records per day, eliminating manual distribution bottlenecks.
            </p>

            {/* Impact Metric Banner */}
            <div className="p-6 bg-[#102F27] border border-[#F5F0E6]/15 rounded-xl flex items-center gap-6">
              <div className="text-4xl sm:text-5xl font-serif-heading font-bold text-[#C99A4A] shrink-0">
                ~60%
              </div>
              <div className="border-l border-[#F5F0E6]/15 pl-6">
                <span className="text-xs uppercase font-mono tracking-wider text-[#C76B3C] font-bold block mb-1">
                  EFFICIENCY GAIN
                </span>
                <p className="text-xs sm:text-sm text-white/90 font-medium">
                  Reduction in manual lead allocation effort across enterprise sales teams.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Animated Data Stream Pipeline */}
          <div className="lg:col-span-6">
            <div className="bg-[#102F27] border border-[#F5F0E6]/15 rounded-2xl p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#F5F0E6]/15">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono uppercase text-white font-bold tracking-wider">
                    Pipeline Stream Visualizer
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#C99A4A]">
                  50,000+ Records/24h
                </span>
              </div>

              {/* Mode Toggle */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                {[
                  { id: 'round-robin', label: 'Round-Robin' },
                  { id: 'bulk-messaging', label: 'Bulk Messaging' },
                  { id: 'workload-balance', label: 'Workload Balance' },
                ].map((mode) => (
                  <button
                    key={mode.id}
                    type="button"
                    onClick={() => setPipelineMode(mode.id as typeof pipelineMode)}
                    className={`py-2 px-1 text-center text-[11px] font-mono uppercase tracking-wider rounded transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C99A4A] ${
                      pipelineMode === mode.id
                        ? 'bg-[#C76B3C] text-white font-bold'
                        : 'bg-[#163D32] text-[#F5F0E6]/70 hover:text-white'
                    }`}
                  >
                    {mode.label}
                  </button>
                ))}
              </div>

              {/* Pipeline Flow Stages */}
              <div className="relative space-y-4 py-4">
                {[
                  { stage: 'CRM RECORDS', count: '50,000+ Ingested', detail: 'Leads, Cases, SMS Payloads, Custom Entities' },
                  { stage: 'PROCESSING', count: 'Batch Size 250', detail: 'FetchXML validation & concurrency checks' },
                  { stage: 'ROUTING', count: '<15ms Evaluation', detail: 'Workload capacity & territory logic rules' },
                  { stage: 'ASSIGNMENT', count: '100% SLA Met', detail: 'Thread assignment & notification dispatch' },
                ].map((step, idx) => (
                  <div
                    key={step.stage}
                    className="relative bg-[#163D32] border border-[#F5F0E6]/10 p-4 rounded-xl overflow-hidden"
                  >
                    {/* Animated Stream Bar */}
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C76B3C]/20 to-transparent pointer-events-none animate-stream-move"
                      style={{ animationDuration: `${2 + idx * 0.4}s` }}
                    />

                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#102F27] border border-[#F5F0E6]/20 flex items-center justify-center font-mono text-[10px] text-[#C99A4A] font-bold">
                          {idx + 1}
                        </span>
                        <div>
                          <h4 className="text-xs font-mono font-bold text-white tracking-wider">
                            {step.stage}
                          </h4>
                          <p className="text-[11px] text-[#F5F0E6]/60">
                            {step.detail}
                          </p>
                        </div>
                      </div>

                      <span className="text-[11px] font-mono text-[#C99A4A] bg-[#102F27] px-2.5 py-1 rounded border border-[#F5F0E6]/10 shrink-0">
                        {step.count}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Data Flow Dot Stream Visualization (SVG Particles) */}
              <div className="mt-4 pt-4 border-t border-[#F5F0E6]/15">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#89977B] block mb-2">
                  Live Concurrency Flow Stream
                </span>
                <div className="h-6 w-full bg-[#163D32] rounded flex items-center px-3 overflow-hidden relative">
                  <div className="flex gap-4 w-full">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <span
                        key={i}
                        className="w-2 h-2 rounded-full bg-[#C76B3C] shrink-0 animate-pulse"
                        style={{
                          animationDelay: `${i * 120}ms`,
                          opacity: (i % 3 === 0) ? 1 : 0.6,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
