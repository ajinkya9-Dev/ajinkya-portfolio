export interface ProjectItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  badge?: string;
  rating: string;
  ratingContext: string;
  technologies: string[];
  features: string[];
  architecturePoints: string[];
  impactStatement: string;
}

export interface ArchitectureLayer {
  layerNumber: string;
  title: string;
  role: string;
  technologies: string[];
  description: string;
}

export interface SkillNode {
  id: string;
  name: string;
  category: 'crm' | 'backend' | 'integrations' | 'frontend' | 'tools';
  connections: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Ajinkya Rameshwar Nikam",
    title: "Dynamics 365 CE Developer | Power Platform | CRM Consultant | C# / .NET",
    roleSubtitle: "CRM & Power Platform Systems Engineer",
    location: "Dombivli (W), Mumbai",
    email: "ajinkya.nikam.it@gmail.com",
    phone: "+91 84335 58082",
    linkedin: "https://linkedin.com/in/ajinkya-nikam-481299251",
    linkedinDisplay: "linkedin.com/in/ajinkya-nikam-481299251",
    currentStatus: "Open to hybrid and remote opportunities across India",
    noticePeriod: "Immediate",
    summary:
      "Dynamics 365 CE Developer with 3+ years of ISV product experience at Inogic Tech, specialising in CRM customisation, Power Platform automation, Microsoft Dataverse, and enterprise API integrations. Took ownership of feature delivery across multiple modules, including leading the Meta (WhatsApp Business) API integration end-to-end. Contributed to 4 Microsoft AppSource products, all holding 5-star ratings. Alerts4Dynamics was adopted and used by Microsoft.",
  },

  impactMetrics: [
    {
      metric: "3+",
      unit: "Years",
      label: "ISV Product Engineering",
      detail: "Focused on D365 CE, Dataverse & enterprise integrations at Inogic Tech",
    },
    {
      metric: "4",
      unit: "Products",
      label: "AppSource Solutions",
      detail: "All holding 5-star ratings on Microsoft AppSource",
    },
    {
      metric: "50K+",
      unit: "Records / Day",
      label: "Pipelines Engineered",
      detail: "Round-robin assignment & bulk messaging throughput",
    },
    {
      metric: "10+",
      unit: "Enterprises",
      label: "Client Deployments",
      detail: "Delivered custom plugins, APIs and client workshops across sales & service",
    },
  ],

  experience: {
    role: "Dynamics 365 CRM Developer",
    company: "Inogic Tech India Pvt Ltd",
    location: "Mumbai, Maharashtra",
    period: "January 2023 – Present",
    keyHighlight: "Took end-to-end ownership of the Meta WhatsApp Business API integration within WhatsApp4Dynamics.",
    responsibilities: [
      {
        number: "01",
        stage: "Integration Ownership",
        title: "Meta WhatsApp Business API Integration",
        description: "Took end-to-end ownership of the Meta WhatsApp Business API integration within WhatsApp4Dynamics, including architecture decisions, code reviews, and delivery.",
      },
      {
        number: "02",
        stage: "High-Volume Pipelines",
        title: "Round-Robin & Bulk Messaging Engine",
        description: "Engineered round-robin assignment and bulk-messaging pipelines processing 50,000+ CRM records per day, reducing manual lead allocation effort by approximately 60%.",
      },
      {
        number: "03",
        stage: "Enterprise Delivery",
        title: "D365 CE Plugins & Custom APIs",
        description: "Delivered D365 CE plugins, Custom APIs, and Dataverse configurations for 10+ enterprise clients across sales, service, and field service.",
      },
      {
        number: "04",
        stage: "Secure Integrations",
        title: "REST APIs & Gateway Connectivity",
        description: "Designed and implemented secure REST API integrations including Meta Graph API, Twilio, and SMS gateways.",
      },
      {
        number: "05",
        stage: "Real-Time Tracking",
        title: "Webhook Event Ingestion",
        description: "Implemented webhook-based real-time delivery status tracking.",
      },
      {
        number: "06",
        stage: "Performance SLA",
        title: "Plugin Optimization & Hotfix Triage",
        description: "Maintained production SLA compliance, triaging critical plugin execution bottlenecks and CRM query performance issues with same-day hotfix delivery.",
      },
      {
        number: "07",
        stage: "Serverless Architecture",
        title: "Azure Functions Event-Driven Flow",
        description: "Applied Azure Functions patterns for serverless integration scenarios connecting D365 CE with external services through event-driven architecture.",
      },
      {
        number: "08",
        stage: "AI & Automation",
        title: "Copilot Studio Exploration",
        description: "Explored Copilot Studio to prototype AI-assisted CRM automation flows and integration with Dataverse and Power Platform.",
      },
      {
        number: "09",
        stage: "Team Mentorship",
        title: "Guidance on CRM SDK & Security",
        description: "Guided junior team members on CRM SDK, plugin registration, and security model design.",
      },
      {
        number: "10",
        stage: "Client Consultation",
        title: "Workshops & Solution Demos",
        description: "Conducted client-facing requirement-gathering workshops and product demos for 10+ enterprise clients.",
      },
    ],
    stages: [
      { name: "Requirement Analysis", desc: "Workshops & business logic extraction" },
      { name: "Architecture & Design", desc: "Dataverse schema, API contracts & plugin pipelines" },
      { name: "Development", desc: "C#, .NET plugins, Custom APIs & form scripting" },
      { name: "Integration", desc: "Meta Graph API, Twilio, Webhooks & Azure Functions" },
      { name: "Testing & SLA", desc: "Concurrency testing, query tuning & performance profiling" },
      { name: "Production & Hotfix", desc: "Deployment to AppSource & same-day issue triage" },
    ]
  },

  products: [
    {
      id: "whatsapp4dynamics",
      name: "WHATSAPP4DYNAMICS",
      subtitle: "Enterprise WhatsApp integration for Dynamics 365 CE",
      badge: "FEATURE OWNER — META INTEGRATION",
      rating: "5 Stars",
      ratingContext: "Microsoft AppSource",
      technologies: ["C#", "D365 CE Plugins", "Custom APIs", "Dataverse", "Meta Graph API", "Webhooks", "Azure Functions", "JavaScript"],
      features: [
        "Bi-directional messaging between D365 CE and WhatsApp",
        "Rich media handling (documents, images, audio)",
        "Automated round-robin agent assignment",
        "Automated workflow triggers on incoming/outgoing events",
        "Concurrency-safe routing engine",
        "Centralized CRM conversation history & contact tracking",
      ],
      architecturePoints: [
        "Meta Graph API inbound webhooks ingested with signature verification",
        "Azure Functions for serverless event queuing and decoupling",
        "Custom APIs in Dataverse executing pre/post-operation validation",
        "Automated thread resolution matching phone numbers to D365 Lead / Contact records",
      ],
      impactStatement: "End-to-end feature ownership from API handshake to production deployment on Microsoft AppSource.",
      description: "A flagship ISV product bridging enterprise CRM sales & support teams with WhatsApp Business API, ensuring instant client engagement without leaving Dynamics 365.",
    },
    {
      id: "textsms4dynamics",
      name: "TEXTSMS4DYNAMICS",
      subtitle: "SMS communication platform for D365 CE",
      badge: "5 STARS ON APPSOURCE",
      rating: "5 Stars",
      ratingContext: "Microsoft AppSource",
      technologies: ["C#", "Dynamics 365 CE", "Twilio API", "REST APIs", "Power Automate"],
      features: [
        "Automated SMS triggers on CRM lifecycle events",
        "Twilio webhook delivery tracking and receipt updates",
        "High-volume bulk SMS processing pipelines",
        "Unified activity logging under Lead, Account, and Opportunity records",
      ],
      architecturePoints: [
        "Event-driven Power Automate and plugin triggers firing on stage transition",
        "Twilio REST API client handling throttling and retry policies",
        "Asynchronous webhook receivers logging delivery receipts back into CRM",
      ],
      impactStatement: "Enables multi-channel SMS automation directly inside D365 with complete delivery audit trails.",
      description: "Comprehensive SMS communication suite built natively for Dynamics 365 CE, orchestrating customer alerts, reminders, and bulk outreach.",
    },
    {
      id: "lead-assignment",
      name: "LEAD ASSIGNMENT & DISTRIBUTION",
      subtitle: "Rule-based and round-robin lead allocation engine",
      badge: "50,000+ DAILY RECORDS",
      rating: "5 Stars",
      ratingContext: "Microsoft AppSource",
      technologies: ["C#", "Dynamics 365 CE", "Custom Workflows", "Dataverse", "FetchXML", "OData"],
      features: [
        "Rule-based and round-robin lead allocation algorithms",
        "Workload balancing across sales teams and territories",
        "Real-time assignment visibility and queue monitoring",
        "50,000+ records processed daily with strict concurrency safety",
      ],
      architecturePoints: [
        "FetchXML and OData optimized queries preventing table lock contention",
        "Round-robin state persistence in Dataverse to balance agent queue depth",
        "Bulk allocation pipelines operating across sales, service, and custom entities",
      ],
      impactStatement: "Reduced manual lead allocation effort by approximately 60% for enterprise deployment.",
      description: "High-throughput workload distribution engine for Dynamics 365 CE that automatically channels incoming leads, cases, and tasks to the right representatives.",
    },
    {
      id: "alerts4dynamics",
      name: "ALERTS4DYNAMICS",
      subtitle: "Configurable real-time alert engine for D365 CE",
      badge: "ADOPTED BY MICROSOFT",
      rating: "5 Stars",
      ratingContext: "Microsoft AppSource",
      technologies: ["C#", "D365 CE Plugins", "Dataverse", "Power Automate", "Copilot Studio", "JavaScript"],
      features: [
        "Event-based triggers on record creation, update, or field change",
        "Entity-level alert rules with multi-condition evaluations",
        "Workflow-driven notifications and popup banners inside CRM forms",
        "Multi-channel notifications for high-priority operational milestones",
        "Enterprise-scale automation across diverse CRM modules",
      ],
      architecturePoints: [
        "Synchronous and asynchronous plugin steps with configurable severity levels",
        "JavaScript form injection for contextual dismissible banner notifications",
        "Power Automate and Copilot Studio integration prototypes for automated resolution flows",
      ],
      impactStatement: "Officially adopted and used internally by Microsoft, validating exceptional engineering rigor.",
      description: "Enterprise notification framework providing in-app dismissible alerts, announcement bars, and critical reminders directly inside Dynamics 365 CE.",
    },
  ],

  architectureLayers: [
    {
      layerNumber: "LAYER 01",
      title: "CRM & DATAVERSE",
      role: "System of Record & Semantic Model",
      technologies: ["Dynamics 365 CE", "Microsoft Dataverse", "Sales", "Customer Insights - Journeys", "Customer Insights - Data"],
      description: "Underlying relational relational store, entity relationships, security roles, business unit hierarchies, and Model-Driven Apps.",
    },
    {
      layerNumber: "LAYER 02",
      title: "AUTOMATION & WORKFLOWS",
      role: "Orchestration & Business Logic",
      technologies: ["Power Automate", "Custom Workflows", "Business Process Flows", "Copilot Studio"],
      description: "Automated business processes, approval pipelines, multi-stage sales lifecycles, and prototype Copilot AI flows.",
    },
    {
      layerNumber: "LAYER 03",
      title: "BACKEND & PLUGINS",
      role: "High-Performance Execution Engine",
      technologies: ["C#", ".NET Framework", "D365 CE Plugins", "Custom APIs"],
      description: "Transactional business logic executing synchronously/asynchronously inside Dataverse pipeline (pre/post-operation, validation).",
    },
    {
      layerNumber: "LAYER 04",
      title: "INTEGRATION & PROTOCOLS",
      role: "Enterprise External Gateway",
      technologies: ["REST APIs", "Webhooks", "OData", "FetchXML", "Meta Graph API", "Twilio API", "SMS Gateways"],
      description: "Bi-directional communication protocols, rate limiting, HMAC payload validation, and reliable bulk dispatch.",
    },
    {
      layerNumber: "LAYER 05",
      title: "CLOUD & SERVERLESS",
      role: "Scalable Event Decoupling",
      technologies: ["Azure Functions", "Event-Driven Triggers", "Concurrency Queues"],
      description: "Serverless microservices connecting external messaging webhooks with D365 Dataverse endpoints reliably.",
    },
  ],

  skillsClusters: [
    {
      id: "crm-d365",
      name: "CRM & Power Platform",
      category: "crm" as const,
      skills: [
        "Dynamics 365 CE",
        "Microsoft Dataverse",
        "Plugins",
        "Custom Workflows",
        "Custom APIs",
        "Business Process Flows",
        "Model-Driven Apps",
        "Power Automate",
        "Power Apps",
        "CRM Security Model",
        "Form Scripting",
        "Copilot Studio",
        "AppSource ISV Development",
      ],
      connections: ["csharp-net", "rest-apis", "webhooks", "azure-functions"],
    },
    {
      id: "d365-modules",
      name: "D365 Core Modules",
      category: "crm" as const,
      skills: [
        "Sales",
        "Customer Insights - Journeys",
        "Customer Insights - Data",
      ],
      connections: ["crm-d365", "fetchxml"],
    },
    {
      id: "backend-cloud",
      name: "Backend & Cloud",
      category: "backend" as const,
      skills: [
        "C#",
        ".NET Framework",
        "REST APIs",
        "Webhooks",
        "OData",
        "FetchXML",
        "Azure Functions",
      ],
      connections: ["crm-d365", "meta-api", "twilio"],
    },
    {
      id: "integrations",
      name: "Integrations & Gateways",
      category: "integrations" as const,
      skills: [
        "Meta Graph API",
        "WhatsApp Business API",
        "Twilio",
        "SMS Gateways",
        "Bulk Messaging Pipelines",
        "Concurrency Handling",
      ],
      connections: ["backend-cloud", "crm-d365", "azure-functions"],
    },
    {
      id: "frontend-scripting",
      name: "Client-Side & Scripting",
      category: "frontend" as const,
      skills: [
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Form Scripting",
      ],
      connections: ["crm-d365"],
    },
    {
      id: "tools-methods",
      name: "Tools & Solution Engineering",
      category: "tools" as const,
      skills: [
        "Plugin Registration Tool",
        "XrmToolBox",
        "Visual Studio",
        "Postman",
        "Requirement Analysis",
        "Solution Design",
      ],
      connections: ["crm-d365", "backend-cloud"],
    },
  ],

  education: {
    degree: "BSc Information Technology",
    institution: "University of Mumbai",
    graduationYear: "2022",
    grade: "CGPA: 8.68 / 10",
    languages: [
      { name: "English", level: "Professional" },
      { name: "Marathi", level: "Native" },
      { name: "Hindi", level: "Fluent" },
    ],
  },
};
