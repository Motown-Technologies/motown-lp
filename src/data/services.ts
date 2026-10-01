export type Service = {
    icon: string;
    title: string;
    description: string;
    bullets: string[];
    href?: string;
};

const services: Service[] = [
    {
        icon: "software",
        title: "Software Development",
        description:
            "We build new applications and improve the systems you already run, from web apps and enterprise software to APIs and cloud-native platforms.",
        bullets: [
            "Custom Web Applications",
            "Enterprise Software Solutions",
            "API Development & Integration",
            "Legacy System Modernization",
            "Cloud-Native Applications",
        ],
        href: "/services/software-development",
    },
    {
        icon: "ai",
        title: "AI Development",
        description:
            "We design custom AI models, fine-tune frontier LLMs to your data, and build production-grade AI systems for specific business problems, including private deployments, retrieval systems, and agents.",
        bullets: [
            "Custom AI Model Development",
            "LLM Fine-Tuning & Evaluation",
            "Retrieval-Augmented Generation (RAG)",
            "AI Agents & Workflow Automation",
            "MLOps, Guardrails & Monitoring",
        ],
        href: "/services/ai-development",
    },
    // {
    //     icon: "marketing",
    //     title: "Digital Marketing",
    //     description:
    //         "Strategic campaigns that increase visibility, drive traffic, and convert leads.",
    //     bullets: [
    //         "Search Engine Optimization (SEO)",
    //         "Social Media Marketing",
    //         "Content Strategy & Creation",
    //         "Pay-Per-Click Advertising",
    //         "Analytics & Reporting",
    //     ],
    //     href: "/services/digital-marketing",
    // },
    {
        icon: "web",
        title: "Web Design & Development",
        description:
            "We design and build responsive websites that are easy to use and built to convert, then keep them fast and maintained after launch.",
        bullets: [
            "Responsive Web Design",
            "E-commerce Solutions",
            "CMS Implementation",
            "Website Maintenance",
            "Performance Optimization",
        ],
        href: "/services/web-design",
    },
    // {
    //     icon: "marketing",
    //     title: "Digital Marketing",
    //     description:
    //         "Our digital marketing strategies are designed to increase visibility, drive traffic, and convert leads. From SEO to social media, we're here to help you build a strong online presence.",
    //     bullets: [
    //         "Search Engine Optimization (SEO)",
    //         "Social Media Marketing",
    //         "Content Strategy & Creation",
    //         "Pay-Per-Click Advertising",
    //         "Analytics & Reporting",
    //     ],
    //     href: "/services/digital-marketing",
    // },
    // {
    //     icon: "ai",
    //     title: "AI Integrations & Custom Models",
    //     description:
    //         "We design AI copilots, tune frontier models, and automate workflows so your teams can make smarter decisions, faster.",
    //     bullets: [
    //         "Private LLM deployment & guardrails",
    //         "Fine-tuning domain models",
    //         "Agentic automation workflows",
    //         "Data pipeline readiness & labeling",
    //         "MLOps monitoring & governance",
    //     ],
    //     href: "/services/ai-integrations",
    // },
    {
        icon: "mobile",
        title: "Mobile Development",
        description:
            "We build iOS and Android apps, whether you're launching a new one or improving one you already have.",
        bullets: [
            "iOS & Android Development",
            "Cross-Platform Solutions",
            // "App Store Optimization",
            "Mobile UI/UX Design",
            "App Maintenance & Support",
        ],
        href: "/services/mobile-development",
    },
    {
        icon: "automation",
        title: "Automation",
        description:
            "We automate repetitive work, which cuts errors and gives your team its time back.",
        bullets: [
            "Workflow Automation",
            "Business Process Optimization",
            "Data Integration & ETL",
            // "Robotic Process Automation (RPA)",
            "Custom Automation Tools",
        ],
        href: "/services/automation",
    },
    {
        icon: "consulting",
        title: "Consulting",
        description:
            "We help you plan your technology: where to invest, what to replace, and how to keep it secure.",
        bullets: [
            "Technology Strategy",
            "Digital Transformation",
            "Infrastructure Assessment",
            "Security & Compliance",
            "Project Management",
        ],
        href: "/services/consulting",
    },
];

export default services;
