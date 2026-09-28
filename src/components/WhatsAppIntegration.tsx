import React, { useState, useEffect } from 'react';

interface SimulationLog {
  id: string;
  time: string;
  stage: string;
  detail: string;
  system: string;
}

export const WhatsAppIntegration: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simulationLogs, setSimulationLogs] = useState<SimulationLog[]>([
    {
      id: 'init-1',
      time: '10:04:12',
      stage: 'Webhook Ingestion',
      detail: 'Inbound message received via Meta Graph API v19.0 with valid SHA256 signature.',
      system: 'Meta Webhook Receiver',
    },
    {
      id: 'init-2',
      time: '10:04:13',
      stage: 'Serverless Queue',
      detail: 'Decoupled in Azure Functions queue for concurrency safety under spike traffic.',
      system: 'Azure Functions',
    },
    {
      id: 'init-3',
      time: '10:04:13',
      stage: 'Dataverse Custom API',
      detail: 'Custom API executes within transaction boundary; matches incoming mobile number to Lead/Contact.',
      system: 'Microsoft Dataverse',
    },
    {
      id: 'init-4',
      time: '10:04:14',
      stage: 'Round-Robin Assignment',
      detail: 'Workload-balancing algorithm assigns conversation to available CRM Sales Representative.',
      system: 'C# Assignment Plugin',
    },
    {
      id: 'init-5',
      time: '10:04:14',
      stage: 'CRM Timeline Linked',
      detail: 'Conversation thread updated in real-time; notification banner triggered via Form Scripting.',
      system: 'Dynamics 365 CE',
    },
  ]);

  const pipelineSteps = [
    {
      id: 'step-meta',
      name: 'Meta WhatsApp API',
      desc: 'Inbound user message & media delivery',
      tag: 'Meta Graph API',
      color: '#C76B3C',
      x: 70,
      y: 130,
    },
    {
      id: 'step-webhook',
      name: 'Webhook & Signature',
      desc: 'HMAC verification & Azure Function trigger',
      tag: 'Serverless Ingestion',
      color: '#C99A4A',
      x: 230,
      y: 70,
    },
    {
      id: 'step-d365',
      name: 'Dynamics 365 & Dataverse',
      desc: 'Central CRM semantic model & transaction',
      tag: 'Core Platform',
      color: '#102F27',
      x: 400,
      y: 130,
    },
    {
      id: 'step-plugin',
      name: 'C# Plugin & Custom API',
      desc: 'Contact matching & business rules execution',
      tag: 'Backend Logic',
      color: '#163D32',
      x: 570,
      y: 70,
    },
    {
      id: 'step-assignment',
      name: 'Round-Robin Assignment',
      desc: 'Concurrency-safe rep allocation',
      tag: 'Routing Engine',
      color: '#89977B',
      x: 720,
      y: 130,
    },
    {
      id: 'step-conversation',
      name: 'CRM Conversation',
      desc: 'Thread persistence & bidirectional chat',
      tag: 'Unified Timeline',
      color: '#C76B3C',
      x: 400,
      y: 260,
    },
  ];

  const runSimulation = (mode: 'inbound' | 'outbound' | 'concurrency') => {
    if (isSimulating) return;
    setIsSimulating(true);
    setActiveStep(0);

    const now = new Date();
    const timeStr = now.toTimeString().split(' ')[0];

    let newLogs: SimulationLog[] = [];
    if (mode === 'inbound') {
      newLogs = [
        {
          id: String(Date.now()),
          time: timeStr,
          stage: '1. Inbound Webhook',
          detail: 'WhatsApp message received: "Inquiring about enterprise license". Verified HMAC-SHA256.',
          system: 'Meta Graph API',
        },
        {
          id: String(Date.now() + 1),
          time: timeStr,
          stage: '2. Azure Function',
          detail: 'Event validated & forwarded to Dataverse Custom API endpoint with Bearer auth.',
          system: 'Azure Functions',
        },
        {
          id: String(Date.now() + 2),
          time: timeStr,
          stage: '3. Dataverse Lookup',
          detail: 'FetchXML query identifies existing Lead #LD-8821 by phone number.',
          system: 'Microsoft Dataverse',
        },
        {
          id: String(Date.now() + 3),
          time: timeStr,
          stage: '4. Plugin Execution',
          detail: 'Round-robin algorithm assigns Lead to Sales Agent #3 based on workload capacity.',
          system: 'C# Plugin Pipeline',
        },
        {
          id: String(Date.now() + 4),
          time: timeStr,
          stage: '5. Conversation Saved',
          detail: 'Real-time record created in WhatsApp Message entity; agent notified via D365 in-app alert.',
          system: 'Dynamics 365 CE',
        },
      ];
    } else if (mode === 'outbound') {
      newLogs = [
        {
          id: String(Date.now()),
          time: timeStr,
          stage: '1. D365 Form Action',
          detail: 'Agent clicks "Send WhatsApp Template" on Lead form.',
          system: 'Dynamics 365 CE',
        },
        {
          id: String(Date.now() + 1),
          time: timeStr,
          stage: '2. Custom API Call',
          detail: 'Dataverse Custom API validates approved template and parameters.',
          system: 'Custom API',
        },
        {
          id: String(Date.now() + 2),
          time: timeStr,
          stage: '3. Graph API Dispatch',
          detail: 'POST request sent to Meta Graph API endpoint with token encryption.',
          system: 'Meta Graph API',
        },
        {
          id: String(Date.now() + 3),
          time: timeStr,
          stage: '4. Webhook Status Ack',
          detail: 'Meta returns 200 OK + message ID; delivery receipt logged asynchronously in D365.',
          system: 'Twilio / Meta Webhook',
        },
      ];
    } else {
      newLogs = [
        {
          id: String(Date.now()),
          time: timeStr,
          stage: 'Concurrency Guard',
          detail: 'Simulated 100 concurrent webhook bursts across distributed endpoints.',
          system: 'Azure Functions',
        },
        {
          id: String(Date.now() + 1),
          time: timeStr,
          stage: 'Queue Throttling',
          detail: 'Requests serialized using optimistic concurrency control in Dataverse.',
          system: 'Microsoft Dataverse',
        },
        {
          id: String(Date.now() + 2),
          time: timeStr,
          stage: 'Zero Record Collision',
          detail: '100% messages processed with 0 duplicate assignment or record lock exceptions.',
          system: 'C# .NET Plugins',
        },
      ];
    }

    setSimulationLogs(newLogs);

    // Sequence steps
    let stepCount = 0;
    const interval = setInterval(() => {
      stepCount++;
      if (stepCount >= pipelineSteps.length) {
        clearInterval(interval);
        setIsSimulating(false);
      } else {
        setActiveStep(stepCount);
      }
    }, 450);
  };

  return (
    <section
      id="whatsapp"
      className="relative py-24 sm:py-32 bg-[#102F27] text-[#F5F0E6] overflow-hidden border-b border-[#F5F0E6]/10"
    >
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 bg-grain-dark pointer-events-none opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C76B3C] animate-ping" />
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#C99A4A]">
              SIGNATURE ARCHITECTURE // 04
            </p>
          </div>
          <h2 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight">
            ONE INTEGRATION. MULTIPLE SYSTEMS.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#F5F0E6]/80 leading-relaxed font-medium">
            End-to-end ownership of the Meta WhatsApp Business API integration within WhatsApp4Dynamics.
            From protocol handshake and webhook throttling to Dataverse transactional pipelines.
          </p>
        </div>

        {/* Interactive Simulator Bar */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 bg-[#163D32] border border-[#F5F0E6]/15 p-4 rounded-xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase text-[#C99A4A] font-bold">
              Simulation Controls:
            </span>
            <span className="text-xs text-[#F5F0E6]/70 hidden sm:inline">
              Trigger real-time architectural event flow
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              disabled={isSimulating}
              onClick={() => runSimulation('inbound')}
              className="px-3.5 py-1.5 text-xs font-mono uppercase bg-[#C76B3C] hover:bg-[#C76B3C]/90 text-white rounded transition-all disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A4A]"
            >
              Inbound Customer Flow →
            </button>
            <button
              type="button"
              disabled={isSimulating}
              onClick={() => runSimulation('outbound')}
              className="px-3.5 py-1.5 text-xs font-mono uppercase bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded transition-all disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A4A]"
            >
              Outbound D365 Dispatch
            </button>
            <button
              type="button"
              disabled={isSimulating}
              onClick={() => runSimulation('concurrency')}
              className="px-3.5 py-1.5 text-xs font-mono uppercase bg-white/10 hover:bg-white/20 text-[#C99A4A] border border-[#C99A4A]/40 rounded transition-all disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A4A]"
            >
              Concurrency Test
            </button>
          </div>
        </div>

        {/* Big Animated Architecture Diagram (SVG Canvas) */}
        <div className="relative w-full bg-[#163D32]/80 border border-[#F5F0E6]/15 rounded-2xl p-6 sm:p-10 shadow-2xl overflow-hidden mb-12">
          <div className="aspect-[800/360] w-full min-h-[300px]">
            <svg
              viewBox="0 0 800 360"
              className="w-full h-full select-none"
              role="img"
              aria-label="Meta WhatsApp Business API Integration Architecture Diagram"
            >
              <defs>
                {/* Gradient for lines */}
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#C76B3C" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#C99A4A" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#89977B" stopOpacity="0.8" />
                </linearGradient>

                <filter id="packetGlow">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Connecting Bus Lines */}
              <g stroke="rgba(245, 240, 230, 0.2)" strokeWidth="2" fill="none">
                {/* Meta -> Webhook */}
                <path d="M 70 130 C 130 130, 170 70, 230 70" />
                {/* Webhook -> D365 */}
                <path d="M 230 70 C 300 70, 330 130, 400 130" />
                {/* D365 -> Plugin */}
                <path d="M 400 130 C 470 130, 500 70, 570 70" />
                {/* Plugin -> Assignment */}
                <path d="M 570 70 C 640 70, 670 130, 720 130" />
                {/* D365 <-> Conversation */}
                <line x1="400" y1="130" x2="400" y2="260" />
                {/* Assignment -> Conversation */}
                <path d="M 720 130 C 720 220, 550 260, 400 260" strokeDasharray="3 3" />
                {/* Conversation back to Meta */}
                <path d="M 400 260 C 250 260, 70 220, 70 130" strokeDasharray="4 4" />
              </g>

              {/* Animated Dashed Flow Packet */}
              <g stroke="url(#lineGrad)" strokeWidth="2.5" fill="none" strokeDasharray="6 8" className="animate-flow-dash">
                <path d="M 70 130 C 130 130, 170 70, 230 70" />
                <path d="M 230 70 C 300 70, 330 130, 400 130" />
                <path d="M 400 130 C 470 130, 500 70, 570 70" />
                <path d="M 570 70 C 640 70, 670 130, 720 130" />
                <path d="M 720 130 C 720 220, 550 260, 400 260" />
              </g>

              {/* Dynamic Traveling Data Packet Dots */}
              <circle r="5" fill="#C76B3C" filter="url(#packetGlow)">
                <animateMotion
                  path="M 70 130 C 130 130, 170 70, 230 70 C 300 70, 330 130, 400 130 C 470 130, 500 70, 570 70 C 640 70, 670 130, 720 130 C 720 220, 550 260, 400 260"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </circle>

              <circle r="4" fill="#C99A4A" filter="url(#packetGlow)">
                <animateMotion
                  path="M 70 130 C 130 130, 170 70, 230 70 C 300 70, 330 130, 400 130 C 470 130, 500 70, 570 70 C 640 70, 670 130, 720 130 C 720 220, 550 260, 400 260"
                  dur="4s"
                  begin="2s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Pipeline Nodes */}
              {pipelineSteps.map((step, idx) => {
                const isCurrent = activeStep === idx;
                const isCenter = step.id === 'step-d365';
                const radius = isCenter ? 36 : 26;

                return (
                  <g
                    key={step.id}
                    onClick={() => setActiveStep(idx)}
                    className="cursor-pointer group"
                    transform={`translate(${step.x}, ${step.y})`}
                  >
                    {/* Pulsing ring */}
                    <circle
                      r={radius + 8}
                      fill="none"
                      stroke={isCurrent ? '#C76B3C' : 'transparent'}
                      strokeWidth="1.5"
                      strokeDasharray="4 2"
                      className={isCurrent ? 'animate-spin' : ''}
                      style={{ animationDuration: '8s' }}
                    />

                    {/* Node circle */}
                    <circle
                      r={radius}
                      fill={isCenter ? '#102F27' : '#163D32'}
                      stroke={isCurrent ? '#C76B3C' : 'rgba(245, 240, 230, 0.4)'}
                      strokeWidth={isCurrent ? '2.5' : '1.5'}
                      className="transition-all duration-300 group-hover:scale-105"
                    />

                    {/* Step Glyph */}
                    <text
                      textAnchor="middle"
                      dy=".35em"
                      fill="#F5F0E6"
                      fontSize={isCenter ? '10' : '9'}
                      fontWeight="bold"
                      fontFamily="ui-monospace, monospace"
                    >
                      0{idx + 1}
                    </text>

                    {/* Node Name */}
                    <text
                      y={radius + 14}
                      textAnchor="middle"
                      fill="#FFFFFF"
                      fontSize="9.5"
                      fontWeight="bold"
                    >
                      {step.name}
                    </text>

                    {/* Node Tag */}
                    <text
                      y={radius + 25}
                      textAnchor="middle"
                      fill="#C99A4A"
                      fontSize="8"
                      fontFamily="ui-monospace, monospace"
                    >
                      {step.tag}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="mt-4 pt-4 border-t border-[#F5F0E6]/10 flex flex-wrap items-center justify-between gap-4 text-xs">
            <span className="text-[#C99A4A] font-mono">
              ACTIVE NODE: {pipelineSteps[activeStep]?.name} — {pipelineSteps[activeStep]?.desc}
            </span>
            <span className="text-[#F5F0E6]/60 font-mono text-[11px]">
              Protocol: HTTPS / Webhook HMAC-SHA256 • Dataverse OData v4.0
            </span>
          </div>
        </div>

        {/* Live Execution Trace Log */}
        <div className="bg-[#163D32]/90 border border-[#F5F0E6]/15 rounded-xl p-6">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#F5F0E6]/10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
                Pipeline Execution Trace
              </h4>
            </div>
            <span className="text-[11px] font-mono text-[#C99A4A]">
              Real-time Ingestion Audit
            </span>
          </div>

          <div className="space-y-3 font-mono text-xs">
            {simulationLogs.map((log) => (
              <div
                key={log.id}
                className="p-3 bg-[#102F27]/80 rounded border border-[#F5F0E6]/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[#89977B] text-[10px]">{log.time}</span>
                  <span className="px-2 py-0.5 text-[9px] uppercase font-bold bg-[#C76B3C]/30 text-[#C76B3C] rounded">
                    {log.stage}
                  </span>
                  <span className="text-white/90">{log.detail}</span>
                </div>
                <span className="text-[#C99A4A] text-[10px] shrink-0">
                  [{log.system}]
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
