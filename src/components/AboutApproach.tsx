import React from 'react';

export const AboutApproach: React.FC = () => {
  const pillars = [
    {
      number: '01',
      title: 'Client-Facing Requirement Gathering',
      detail: 'Conducted requirement workshops and product demos for 10+ enterprise clients across sales, service, and field service.',
    },
    {
      number: '02',
      title: 'Solution Architecture & Design',
      detail: 'Architected robust Dataverse schemas, transaction boundaries, and secure REST API integrations with Meta Graph API and Twilio.',
    },
    {
      number: '03',
      title: 'ISV Product Development',
      detail: 'Contributed to 4 AppSource products holding 5-star ratings; led Meta WhatsApp integration end-to-end; Alerts4Dynamics adopted by Microsoft.',
    },
    {
      number: '04',
      title: 'Code Reviews & Standards',
      detail: 'Enforced rigorous CRM SDK patterns, concurrency guards, and security model design across multi-developer feature teams.',
    },
    {
      number: '05',
      title: 'Production Troubleshooting & SLA Hotfixes',
      detail: 'Triaged critical plugin bottlenecks and CRM query performance issues under strict SLAs with same-day hotfix delivery.',
    },
    {
      number: '06',
      title: 'Mentorship & Guidance',
      detail: 'Guided junior developers on Plugin Registration Tool, XrmToolBox, Dataverse security, and best practices for enterprise extensions.',
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 bg-[#F5F0E6] border-b border-[#1C2420]/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Manifesto */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#C76B3C] mb-4">
              08 // ENGINEERING ETHOS
            </p>
            <h2 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#102F27] leading-[1.08] tracking-tight mb-8">
              BUILT BETWEEN BUSINESS AND CODE.
            </h2>
            <p className="text-base sm:text-lg text-[#1C2420]/80 leading-relaxed mb-6">
              From requirement-gathering workshops and client demos to architecture, development
              and production support, my work sits at the intersection of business requirements
              and enterprise CRM engineering.
            </p>
            <p className="text-sm text-[#1C2420]/70 leading-relaxed mb-8">
              Enterprise CRM success isn&apos;t just writing clean C# plugins or registering
              custom steps—it is ensuring that sales reps, support agents, and business leaders
              experience zero friction, complete auditability, and predictable performance at scale.
            </p>

            {/* Quick Status Block */}
            <div className="p-6 bg-white/70 border border-[#102F27]/10 rounded-xl shadow-xs">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#89977B] block mb-1">
                Current Availability
              </span>
              <p className="text-sm font-bold text-[#102F27]">
                Open to hybrid and remote opportunities across India
              </p>
              <p className="text-xs text-[#C76B3C] font-semibold mt-1">
                Notice Period: Immediate
              </p>
            </div>
          </div>

          {/* Right Column: 6 Engineering Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="bg-white/80 border border-[#1C2420]/10 p-6 rounded-xl hover:border-[#102F27]/30 transition-all duration-200 shadow-xs hover:shadow-md"
              >
                <span className="text-xs font-mono font-bold text-[#C76B3C] block mb-2">
                  {pillar.number}
                </span>
                <h3 className="font-serif-heading text-lg font-bold text-[#102F27] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#1C2420]/75 leading-relaxed">
                  {pillar.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
