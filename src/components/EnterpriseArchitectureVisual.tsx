import React, { useState } from 'react';

interface NodeInfo {
  id: string;
  name: string;
  category: string;
  role: string;
  detail: string;
  x: number;
  y: number;
  highlightColor: string;
}

export const EnterpriseArchitectureVisual: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>('d365');

  const nodes: NodeInfo[] = [
    {
      id: 'd365',
      name: 'Dynamics 365 CE',
      category: 'Core Platform',
      role: 'Enterprise CRM Engine',
      detail: 'Central CRM application hosting Model-Driven apps, Business Process Flows, and custom entity models.',
      x: 250,
      y: 200,
      highlightColor: '#C76B3C',
    },
    {
      id: 'dataverse',
      name: 'Microsoft Dataverse',
      category: 'Data Layer',
      role: 'Transactional Semantic Store',
      detail: 'High-throughput relational data store, RBAC security roles, entity relationships, and audit tracking.',
      x: 250,
      y: 90,
      highlightColor: '#C99A4A',
    },
    {
      id: 'plugins',
      name: 'C# / .NET Plugins',
      category: 'Backend Pipeline',
      role: 'Pre & Post Operation Logic',
      detail: 'Transactional .NET assemblies executing with microsecond latency within Dataverse event execution pipeline.',
      x: 100,
      y: 150,
      highlightColor: '#89977B',
    },
    {
      id: 'custom-api',
      name: 'Custom APIs & OData',
      category: 'API Gateway',
      role: 'Contract-First Endpoints',
      detail: 'RESTful endpoints exposed by Dataverse for atomic multi-entity operations and external invocations.',
      x: 400,
      y: 150,
      highlightColor: '#89977B',
    },
    {
      id: 'automation',
      name: 'Power Automate',
      category: 'Orchestration',
      role: 'Event-Driven Workflows',
      detail: 'Asynchronous cloud flows orchestrating multi-system approvals, routing, and notifications.',
      x: 100,
      y: 280,
      highlightColor: '#C99A4A',
    },
    {
      id: 'azure-fn',
      name: 'Azure Functions',
      category: 'Serverless Cloud',
      role: 'Event Decoupling & Queue',
      detail: 'Serverless microservices bridging high-frequency incoming webhooks with D365 CE reliably.',
      x: 400,
      y: 280,
      highlightColor: '#C76B3C',
    },
    {
      id: 'external-gateways',
      name: 'Meta WhatsApp & Twilio',
      category: 'External Services',
      role: 'Multi-Channel Gateways',
      detail: 'Bi-directional messaging pipelines delivering customer conversations straight into CRM timeline.',
      x: 250,
      y: 340,
      highlightColor: '#C76B3C',
    },
  ];

  const activeNodeData = nodes.find((n) => n.id === activeNode) || nodes[0];

  return (
    <div className="relative w-full max-w-[540px] mx-auto bg-white/70 backdrop-blur-sm border border-[#102F27]/15 rounded-xl p-4 sm:p-6 shadow-[0_12px_40px_rgba(16,47,39,0.08)]">
      {/* Visual Header */}
      <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#1C2420]/10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C76B3C] animate-ping" />
          <span className="w-2 h-2 rounded-full bg-[#102F27]" />
          <span className="text-[11px] uppercase tracking-wider font-semibold text-[#102F27]">
            Enterprise CRM Topology
          </span>
        </div>
        <span className="text-[10px] uppercase tracking-widest text-[#89977B] font-mono">
          Interactive Diagram
        </span>
      </div>

      {/* SVG Architecture Diagram */}
      <div className="relative aspect-[500/400] w-full">
        <svg
          viewBox="0 0 500 400"
          className="w-full h-full select-none"
          role="img"
          aria-label="Enterprise CRM Architecture interactive diagram showing Dynamics 365 connected to Dataverse, Plugins, APIs, Automation, Azure Functions and External Gateways"
        >
          <defs>
            {/* Glowing filter */}
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            {/* Pattern for background grid */}
            <pattern id="archGrid" width="25" height="25" patternUnits="userSpaceOnUse">
              <path d="M 25 0 L 0 0 0 25" fill="none" stroke="#102F27" strokeWidth="0.5" strokeOpacity="0.06" />
            </pattern>
          </defs>

          {/* Grid Background */}
          <rect width="500" height="400" fill="url(#archGrid)" />

          {/* Architectural Bus Lines */}
          <g stroke="#102F27" strokeOpacity="0.2" strokeWidth="1.5">
            {/* Center to Top (Dataverse) */}
            <line x1="250" y1="200" x2="250" y2="90" />
            {/* Center to Left-Top (Plugins) */}
            <line x1="250" y1="200" x2="100" y2="150" />
            {/* Center to Right-Top (Custom APIs) */}
            <line x1="250" y1="200" x2="400" y2="150" />
            {/* Center to Left-Bottom (Power Automate) */}
            <line x1="250" y1="200" x2="100" y2="280" />
            {/* Center to Right-Bottom (Azure Functions) */}
            <line x1="250" y1="200" x2="400" y2="280" />
            {/* Center to Bottom (External Gateways) */}
            <line x1="250" y1="200" x2="250" y2="340" />
            {/* Cross-layer connections */}
            <line x1="100" y1="150" x2="250" y2="90" strokeDasharray="3 3" />
            <line x1="400" y1="150" x2="250" y2="90" strokeDasharray="3 3" />
            <line x1="400" y1="280" x2="250" y2="340" strokeDasharray="3 3" />
            <line x1="100" y1="280" x2="250" y2="340" strokeDasharray="3 3" />
          </g>

          {/* Animated Traveling Data Pulses */}
          <g stroke="#C76B3C" strokeWidth="2" strokeDasharray="4 8" className="animate-flow-dash">
            <line x1="250" y1="200" x2="250" y2="90" />
            <line x1="250" y1="200" x2="100" y2="150" />
            <line x1="400" y1="150" x2="250" y2="200" />
            <line x1="400" y1="280" x2="250" y2="200" />
            <line x1="250" y1="340" x2="400" y2="280" />
          </g>

          {/* Node Rings and Centers */}
          {nodes.map((node) => {
            const isSelected = activeNode === node.id;
            const isCore = node.id === 'd365';
            const radius = isCore ? 32 : 24;

            return (
              <g
                key={node.id}
                onClick={() => setActiveNode(node.id)}
                className="cursor-pointer group"
                transform={`translate(${node.x}, ${node.y})`}
              >
                {/* Outer interactive pulse circle */}
                <circle
                  r={radius + 8}
                  fill="none"
                  stroke={isSelected ? node.highlightColor : 'transparent'}
                  strokeWidth="1.5"
                  strokeDasharray={isSelected ? '4 2' : 'none'}
                  className={isSelected ? 'animate-spin' : ''}
                  style={{ animationDuration: '10s' }}
                />

                {/* Node Base Circle */}
                <circle
                  r={radius}
                  fill={isCore ? '#102F27' : isSelected ? '#163D32' : '#FFFFFF'}
                  stroke={isSelected ? node.highlightColor : '#102F27'}
                  strokeWidth={isSelected ? '2.5' : '1.5'}
                  filter={isSelected ? 'url(#glow)' : undefined}
                  className="transition-all duration-300 group-hover:scale-105"
                />

                {/* Icon / Glyph in Center */}
                {isCore ? (
                  <text
                    textAnchor="middle"
                    dy=".3em"
                    fill="#F5F0E6"
                    fontSize="11"
                    fontWeight="bold"
                    fontFamily="Georgia, serif"
                  >
                    D365
                  </text>
                ) : (
                  <circle
                    r={isSelected ? 6 : 4}
                    fill={isSelected ? node.highlightColor : '#102F27'}
                    className="transition-all duration-200"
                  />
                )}

                {/* Label text */}
                <text
                  y={radius + 14}
                  textAnchor="middle"
                  fill="#1C2420"
                  fontSize="9.5"
                  fontWeight={isSelected ? '700' : '500'}
                  className="tracking-tight select-none transition-all duration-200"
                >
                  {node.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Interactive Node Inspection Bar */}
      <div className="mt-3 pt-3 border-t border-[#1C2420]/10 bg-[#F5F0E6]/60 rounded-lg p-3 transition-all duration-300">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{ backgroundColor: activeNodeData.highlightColor }}
            />
            <span className="text-xs font-bold text-[#102F27]">
              {activeNodeData.name}
            </span>
          </div>
          <span className="text-[10px] uppercase tracking-wider text-[#89977B] font-semibold">
            {activeNodeData.category}
          </span>
        </div>
        <p className="text-[11px] text-[#1C2420]/80 mt-1 leading-relaxed">
          {activeNodeData.detail}
        </p>
      </div>
    </div>
  );
};
