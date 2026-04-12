const resumeData = {
  heading: "Resume",

  intro:
    "Frontend-leaning full-stack engineer building polished, user-facing applications with strong system design, clear data flow, and reliable end-to-end functionality.",

  identity: {
    name: "Carl Biggers-Johanson",
    location: "Saratoga Springs, Utah",
    email: "cjohanson64@gmail.com",
    phone: "352-246-2602",
    linkedin: "https://www.linkedin.com/in/carlbiggersjohanson/",
    github: "https://github.com/cjohanson64-netizen",
    portfolio: "/",
  },

  download: {
    label: "Download Resume PDF",
    href: "/resume.pdf",
  },

  summary: [
    "Frontend-leaning full-stack engineer focused on building polished, user-facing products backed by reliable systems and clear architecture.",
    "Experienced in React, TypeScript, Node.js, and API-driven development, delivering end-to-end features from UI to backend services.",
    "Skilled at translating complex workflows into intuitive, maintainable applications with strong data flow and predictable behavior.",
    "Background in education and learning systems brings strengths in clarity, iteration, and designing software that works for real users.",
  ],

  skillGroups: [
    {
      title: "Languages & Frameworks",
      items: ["TypeScript", "JavaScript (ES6+)", "Node.js", "React", "Express"],
    },
    {
      title: "Systems & Reliability",
      items: [
        "CI/CD concepts",
        "Deployment workflows",
        "Environment configuration",
        "System reliability principles",
        "Performance debugging",
        "Logging strategies",
      ],
    },
    {
      title: "Backend & APIs",
      items: [
        "REST API design",
        "Service-layer architecture",
        "Middleware patterns",
        "JWT authentication",
        "API performance optimization",
      ],
    },
    {
      title: "Frontend Engineering",
      items: [
        "Component-based architecture",
        "State-driven UI",
        "SPA architecture",
        "Responsive design",
        "React Router",
        "Vite",
      ],
    },
    {
      title: "Databases & Data",
      items: [
        "SQL (SQLite)",
        "Prisma ORM",
        "Relational modeling",
        "Transaction handling",
      ],
    },
    {
      title: "Tools",
      items: ["Git", "GitHub", "ESLint", "VS Code"],
    },
    {
      title: "Additional Exposure",
      items: [
        "Python",
        "Redis concepts",
        "Containerization concepts (Docker)",
        "AI-assisted development workflows",
      ],
    },
  ],

  projects: [
    {
      title: "LMS Software Demo",
      role: "Full-Stack Learning Platform",
      github: "https://github.com/cjohanson64-netizen/lms-software-demo",
      live: "",
      bullets: [
        "Built a full-stack application modeling real-world academic workflows, including enrollment, permissions, and reporting.",
        "Developed RESTful backend services using Node.js, Express, and Prisma.",
        "Implemented role-based access control (RBAC) and secure authentication flows.",
        "Structured backend using service and controller layers to improve maintainability and reliability.",
        "Designed relational data models to support scalable querying and consistent system behavior.",
        "Debugged cross-system issues between frontend and backend to improve stability and user experience.",
      ],
    },
    {
      title: "Predictive Pantry",
      role: "Inventory & Planning App",
      github: "https://github.com/cjohanson64-netizen/PredictivePantry",
      live: "",
      bullets: [
        "Built a React and TypeScript application for managing inventory and planning workflows.",
        "Designed UI systems for filtering, tracking, and decision-making processes.",
        "Developed reusable components to support evolving product requirements.",
        "Improved performance and usability through iterative debugging and refinement.",
        "Structured state and data flow for predictable behavior and maintainability.",
      ],
    },
    {
      title: "SightLine",
      role: "Interactive Music Literacy Platform",
      github: "https://github.com/cjohanson64-netizen/SightLine",
      live: "https://sight-line-topaz.vercel.app",
      bullets: [
        "Built an interactive music learning application combining melody generation, performance capture, and real-time feedback.",
        "Designed a multi-stage pipeline for generating structured sight-singing exercises aligned to musical concepts.",
        "Implemented microphone-based pitch detection and alignment between performed and target melodies.",
        "Developed scoring and feedback systems to evaluate accuracy and guide user improvement.",
        "Created modular frontend systems supporting real-time interaction and dynamic feedback.",
      ],
    },
  ],

  experience: [
    {
      title: "Curriculum & Learning Systems Designer",
      organization: "Independent / Project-Based",
      location: "Saratoga Springs, UT",
      dates: "2021–Present",
      bullets: [
        "Designed and built interactive tools and structured systems for real users.",
        "Translated complex workflows into clear, repeatable user-facing processes.",
        "Iterated on systems using feedback, usage patterns, and observed performance gaps.",
        "Improved reliability and usability through continuous refinement and testing.",
        "Collaborated with technical and non-technical stakeholders to align systems with real-world needs.",
        "Used AI-assisted workflows to accelerate development, testing, and iteration.",
      ],
    },
    {
      title: "Music Educator (Choir Director)",
      organization: "Alpine School District",
      location: "Utah",
      dates: "2015–Present",
      bullets: [
        "Designed and managed complex, real-time systems involving coordination, timing, and performance reliability.",
        "Built structured processes to ensure consistent outcomes across large groups and varying skill levels.",
        "Used continuous feedback loops to identify issues and improve system performance.",
        "Developed repeatable systems that improved reliability in high-pressure environments.",
        "Strengthened communication and collaboration skills across diverse groups.",
      ],
    },
  ],

  education: [
    "Master’s Degree — Music Education",
    "Bachelor’s Degree — Music Education",
  ],
};

export default resumeData;