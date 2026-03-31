const resumeData = {
  heading: "Resume",

  intro:
    "Software engineer focused on systems, automation, and infrastructure-minded development across frontend and backend applications.",

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
    "Full-stack software engineer with a strong focus on building reliable, maintainable systems across frontend and backend applications.",
    "Experienced in TypeScript, Node.js, and API-driven architectures, with growing specialization in system reliability, automation workflows, and scalable application design.",
    "I design structured systems that translate complex workflows into stable, user-facing products.",
    "My background in education and learning systems brings a unique strength in observability, iteration, and continuous improvement, enabling effective collaboration across teams and rapid adaptation in evolving environments.",
  ],

  skillGroups: [
    {
      title: "Languages & Frameworks",
      items: ["TypeScript", "JavaScript (ES6+)", "Node.js", "React", "Express"],
    },
    {
      title: "Systems & Infrastructure (DevOps-Aligned)",
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
        "Designed and implemented RESTful backend services using Node.js, Express, and Prisma.",
        "Structured backend using service and controller layers to improve maintainability and system reliability.",
        "Implemented role-based access control (RBAC) and secure authentication flows.",
        "Modeled relational data to support scalable querying and consistent system behavior.",
        "Debugged cross-system issues between frontend and backend to improve stability and reduce failure points.",
        "Emphasized clear system boundaries, predictable data flow, and maintainable architecture.",
      ],
    },
    {
      title: "Predictive Pantry",
      role: "Inventory & Planning App",
      github: "https://github.com/cjohanson64-netizen/PredictivePantry",
      live: "",
      bullets: [
        "Developed a TypeScript and React application with structured, scalable state management.",
        "Designed UI systems for filtering, tracking, and decision workflows.",
        "Built reusable components supporting evolving product requirements.",
        "Improved performance and usability through iterative debugging and refinement.",
        "Applied system modeling techniques to reduce complexity and improve long-term maintainability.",
        "Focused on efficient data handling and predictable state transitions.",
      ],
    },
    {
      title: "SightLine",
      role: "Interactive Music Literacy Platform",
      github: "https://github.com/cjohanson64-netizen/SightLine",
      live: "https://sight-line-topaz.vercel.app",
      bullets: [
        "Built an interactive web application translating complex domain data into structured UI workflows.",
        "Designed a modular pipeline for parsing, transforming, and projecting data into frontend systems.",
        "Developed reusable UI systems supporting real-time feedback and user interaction.",
        "Collaborated with real users to identify issues, refine workflows, and improve reliability.",
        "Focused on system clarity, performance, and iterative improvement based on real-world usage.",
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
        "Designed and built structured learning systems and interactive tools for real users.",
        "Translated complex systems into clear, repeatable workflows and user-facing processes.",
        "Iterated on systems using feedback, usage patterns, and observed performance gaps.",
        "Applied continuous improvement practices, refining systems for reliability and usability over time.",
        "Collaborated across technical and non-technical stakeholders to align systems with real-world needs.",
        "Leveraged AI-assisted workflows to accelerate development, testing, and documentation.",
      ],
    },
    {
      title: "Music Educator (Choir Director)",
      organization: "Alpine School District",
      location: "Utah",
      dates: "2015–Present",
      bullets: [
        "Managed complex, real-time systems involving coordination, timing, and performance reliability.",
        "Designed structured processes to ensure consistent outcomes across large groups and varying skill levels.",
        "Continuously monitored performance, identified issues, and implemented rapid feedback loops.",
        "Built repeatable systems that improved reliability and reduced failure points in live environments.",
        "Developed strong communication and cross-functional collaboration skills under high-pressure conditions.",
      ],
    },
  ],

  education: [
    "Master’s Degree — Music Education",
    "Bachelor’s Degree — Music Education",
  ],
};

export default resumeData;