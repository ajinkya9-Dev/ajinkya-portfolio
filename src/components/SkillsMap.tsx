import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const SkillsMap: React.FC = () => {
  const [activeCluster, setActiveCluster] = useState<string>('crm-d365');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Connection mapping for dynamic highlights
  const relatedMap: Record<string, string[]> = {
    'Dynamics 365 CE': ['Microsoft Dataverse', 'Plugins', 'Custom APIs', 'Power Automate', 'JavaScript', 'C#'],
    'Microsoft Dataverse': ['Dynamics 365 CE', 'Plugins', 'Custom APIs', 'FetchXML', 'OData', 'CRM Security Model'],
    'Plugins': ['C#', '.NET Framework', 'Plugin Registration Tool', 'Dataverse', 'Custom APIs'],
    'Meta Graph API': ['WhatsApp Business API', 'Webhooks', 'Azure Functions', 'C#', 'Dynamics 365 CE'],
    'Twilio': ['REST APIs', 'Webhooks', 'SMS Gateways', 'C#', 'Power Automate'],
    'Azure Functions': ['REST APIs', 'Webhooks', 'Meta Graph API', 'Dynamics 365 CE'],
    'Copilot Studio': ['Power Automate', 'Power Apps', 'Dynamics 365 CE', 'Dataverse'],
    'C#': ['Plugins', 'Custom APIs', '.NET Framework', 'Visual Studio', 'Dynamics 365 CE'],
    'TypeScript': ['JavaScript', 'Form Scripting', 'HTML', 'CSS'],
    'XrmToolBox': ['Plugin Registration Tool', 'FetchXML', 'Dataverse', 'Dynamics 365 CE'],
  };

  const currentRelated = hoveredSkill && relatedMap[hoveredSkill] ? relatedMap[hoveredSkill] : [];

  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 bg-[#F5F0E6] border-b border-[#1C2420]/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#C76B3C] mb-4">
            07 // COMPETENCY MATRIX
          </p>
          <h2 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#102F27] leading-[1.08] tracking-tight">
            CAPABILITY CLUSTERS.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1C2420]/75 leading-relaxed">
            Deep specialization across Microsoft Dataverse, C# backend pipelines, enterprise
            messaging integrations, and mission-critical AppSource product development.
          </p>
        </div>

        {/* Cluster Tabs */}
        <div className="flex flex-wrap gap-2 pb-6 border-b border-[#1C2420]/10 mb-10">
          {PORTFOLIO_DATA.skillsClusters.map((cluster) => {
            const isActive = activeCluster === cluster.id;
            return (
              <button
                key={cluster.id}
                type="button"
                onClick={() => setActiveCluster(cluster.id)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C76B3C] ${
                  isActive
                    ? 'bg-[#102F27] text-white font-bold shadow-md'
                    : 'bg-white/80 text-[#1C2420]/70 hover:text-[#102F27] hover:bg-white border border-[#1C2420]/10'
                }`}
              >
                {cluster.name}
              </button>
            );
          })}
        </div>

        {/* Dynamic Connected Cluster Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Active Skills Panel */}
          <div className="lg:col-span-8 bg-white/70 border border-[#1C2420]/10 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#1C2420]/10">
              <h3 className="font-serif-heading text-xl font-bold text-[#102F27]">
                {PORTFOLIO_DATA.skillsClusters.find((c) => c.id === activeCluster)?.name}
              </h3>
              <span className="text-[11px] font-mono text-[#89977B]">
                Hover a skill to trace architectural links
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              {PORTFOLIO_DATA.skillsClusters
                .find((c) => c.id === activeCluster)
                ?.skills.map((skill) => {
                  const isHovered = hoveredSkill === skill;
                  const isConnected = currentRelated.includes(skill);

                  return (
                    <div
                      key={skill}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className={`cursor-pointer px-4 py-3 rounded-xl border transition-all duration-200 ${
                        isHovered
                          ? 'bg-[#102F27] text-white border-[#102F27] shadow-lg scale-105'
                          : isConnected
                          ? 'bg-[#C76B3C]/10 text-[#C76B3C] border-[#C76B3C] font-bold'
                          : 'bg-white text-[#1C2420] border-[#1C2420]/10 hover:border-[#102F27]/30'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            isHovered
                              ? 'bg-[#C99A4A]'
                              : isConnected
                              ? 'bg-[#C76B3C]'
                              : 'bg-[#102F27]/30'
                          }`}
                        />
                        <span className="text-xs sm:text-sm font-semibold">
                          {skill}
                        </span>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* Connected Technologies Inspector Sidebar */}
          <div className="lg:col-span-4 bg-[#102F27] text-white border border-[#102F27] rounded-2xl p-6 shadow-xl">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C99A4A] font-bold">
                Interconnection Graph
              </span>
              <span className="w-2 h-2 rounded-full bg-[#C76B3C]" />
            </div>

            {hoveredSkill ? (
              <div>
                <h4 className="font-serif-heading text-lg font-bold text-white mb-1">
                  {hoveredSkill}
                </h4>
                <p className="text-xs text-[#F5F0E6]/70 mb-4">
                  Actively coupled with the following CRM & platform subsystems:
                </p>

                <div className="space-y-2">
                  {(relatedMap[hoveredSkill] || ['Enterprise CRM Subsystem', 'Dataverse Pipeline']).map((rel) => (
                    <div
                      key={rel}
                      className="p-2.5 bg-[#163D32] rounded border border-white/10 flex items-center justify-between text-xs"
                    >
                      <span className="text-white/90 font-medium">{rel}</span>
                      <span className="text-[10px] font-mono text-[#C99A4A]">LINKED</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="py-8 text-center text-xs text-[#F5F0E6]/60">
                <p className="mb-2">Hover over any competency on the left to reveal direct architectural couplings.</p>
                <span className="text-[11px] font-mono text-[#C99A4A]">
                  E.g., Dynamics 365 CE, Meta Graph API, C#
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
