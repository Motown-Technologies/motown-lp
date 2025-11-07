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
            "Whether you need a new application or want to enhance existing systems, we create software that drives efficiency and innovation. Let us help you turn your ideas into powerful, user-friendly software.",
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
        icon: "web",
        title: "Web Design & Development",
        description:
            "We create stunning, responsive websites that not only look great but also deliver exceptional user experiences and drive conversions for your business.",
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
            "We develop mobile apps that are intuitive, engaging, and aligned with your business goals. Whether you're looking to launch a new app or improve an existing one, we've got you covered.",
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
            "We design automation solutions that reduce manual work, minimize errors, and save time. Let us help you automate repetitive tasks so you can focus on what matters most.",
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
            "Our consulting services provide insights and strategies to optimize your IT infrastructure and drive business growth. We're here to help you make informed decisions and achieve your goals.",
        bullets: [
            "Technology Strategy",
            "Digital Transformation",
            "Infrastructure Assessment",
            "Security & Compliance",
            "Project Management",
        ],
        href: "/services/it-consulting",
    },
];

export default services;
