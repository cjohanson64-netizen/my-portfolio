const projects = [
  {
    id: "sightline",
    portfolioPriority: 1,
    caseStudyUrl: "/projects/sightline",
    title: "SightLine",
    slug: "sightline",
    category: "Learning Experience Design",
    featured: true,
    status: "In Progress",
    year: "2026",

    tagline:
      "Concept-aligned sight-singing practice and assessment, designed by a music educator.",

    shortDescription:
      "Designed around a classroom learning need, SightLine generates concept-focused sight-singing practice, captures performances through microphone input, and provides pitch-based assessment feedback. The working prototype brings curriculum design, guided practice, and technology together in one learning experience.",

    techStack: ["React", "Vite", "JavaScript", "CSS", "Supabase"],

    highlights: [
      "Built a multi-pass melody generation engine that produces structured exercises aligned to musical concepts.",
      "Implemented microphone-based pitch detection and performance alignment for real-time assessment.",
      "Designed a feedback and scoring system to evaluate accuracy and guide student improvement.",
      "Bridges generation, performance capture, and evaluation into a single learning loop.",
    ],

    githubUrl: "https://github.com/cjohanson64-netizen/SightLine",
    liveUrl: "https://sight-line-topaz.vercel.app/",
    image: "/images/projects/sightline.png",
    alt: "SightLine interface showing generated sight-singing practice material with interactive feedback.",
  },
  {
    id: "tryangletree-dsl",
    title: "TryAngleTree DSL",
    slug: "tryangletree-dsl",
    category: "AI / Structured Systems",
    featured: false,
    status: "In Progress",
    year: "2026",
    tagline:
      "A custom graph-based language for structuring application logic before it reaches the UI.",
    shortDescription:
      "TryAngleTree DSL is a custom language and runtime for modeling nodes, relationships, state, and projections so application behavior can be defined through explicit structure rather than scattered logic.",
    techStack: [
      "JavaScript",
      "DSL Design",
      "Runtime Architecture",
      "Graph Modeling",
      "React",
    ],
    highlights: [
      "Separates application semantics from rendering to make logic more explicit and maintainable.",
      "Supports graph mutation, projection, and contextual relationships within a structured runtime.",
      "Acts as an architectural layer between data modeling, application behavior, and UI output.",
    ],
    githubUrl: "https://github.com/cjohanson64-netizen/TryAngleTree-DSL",
    liveUrl: "",
    image: "/images/projects/tryangletree.svg",
    alt: "Diagram or interface representing the TryAngleTree DSL graph structure.",
  },
  {
    id: "predictive-pantry",
    title: "PredictivePantry",
    slug: "predictive-pantry",
    category: "AI / Structured Systems",
    featured: false,
    status: "Prototype",
    year: "2026",
    tagline:
      "An inventory and planning app that models household usage, timing, and decision flow.",
    shortDescription:
      "PredictivePantry is a React-based inventory application that explores how household supplies can be tracked as a structured system over time, helping users organize items, anticipate needs, and make more informed planning decisions.",
    techStack: ["React", "JavaScript", "CSS", "Data Modeling", "TAT"],
    highlights: [
      "Models inventory as a structured system rather than a flat list of items.",
      "Explores time, usage, and decision-making within a practical household workflow.",
      "Serves as a proving ground for semantic modeling concepts in a real user-facing context.",
    ],
    githubUrl: "https://github.com/cjohanson64-netizen/PredictivePantry",
    liveUrl: "https://predictive-pantry.vercel.app/",
    image: "/images/projects/predictivepantry.png",
    alt: "PredictivePantry interface showing structured inventory and planning concepts.",
  },
  {
    id: "familyroutes",
    title: "FamilyRoutes",
    slug: "familyroutes",
    category: "Frontend / Full Stack",
    featured: false,
    status: "Prototype",
    year: "2026",
    tagline:
      "A route planning and coordination tool built to simplify everyday logistics.",
    shortDescription:
      "FamilyRoutes is a practical planning application designed to help users organize routes, coordinate recurring travel needs, and reduce friction in day-to-day logistical decision-making.",
    techStack: ["React", "JavaScript", "CSS", "Routing Logic"],
    highlights: [
      "Built around a real-world coordination problem with practical user value.",
      "Focused on usability, clarity, and workflow organization.",
      "Demonstrates applied interface design for everyday planning needs.",
    ],
    githubUrl: "https://github.com/cjohanson64-netizen/FamilyRoutes",
    liveUrl: "https://family-routes.vercel.app/",
    image: "/images/projects/familyroutes.png",
    alt: "FamilyRoutes interface showing route organization and planning.",
  },
  {
    id: "lms-demo",
    portfolioPriority: 2,
    title: "LMSDemo",
    slug: "lms-demo",
    category: "Learning Experience Design",
    featured: true,
    status: "Prototype",
    year: "2026",
    tagline:
      "A lightweight learning management system focused on structured content and clear user flow.",
    shortDescription:
      "A learning management system prototype exploring how content organization, student-facing navigation, and clear learning pathways shape the experience of using an educational platform.",
    techStack: ["React", "JavaScript", "CSS", "Educational UX"],
    highlights: [
      "Built from direct experience with classroom instruction and learning platforms.",
      "Explores content organization, navigation, and student-facing workflow design.",
      "Shows how domain expertise in education can inform product and interface decisions.",
    ],
    githubUrl: "https://github.com/cjohanson64-netizen/LMS-Software-Demo",
    liveUrl: "",
    image: "/images/projects/lmsdemo.png",
    alt: "LMSDemo interface showing course content and learning workflow.",
  },
  {
    id: "scorelens",
    portfolioPriority: 3,
    title: "ScoreLens",
    slug: "scorelens",
    category: "Educational Technology",
    featured: true,
    status: "In Progress",
    year: "2026",
    tagline:
      "A music analysis application built around structured interpretation and deterministic AI workflows.",
    shortDescription:
      "An in-progress music analysis tool exploring how structured interpretations of musical scores can make complex musical information easier to inspect and understand.",
    techStack: ["React", "JavaScript", "MusicXML", "TAT", "CSS"],
    highlights: [
      "Explores deterministic AI behavior instead of relying solely on generative output.",
      "Uses structured graph logic to model musical meaning, analysis, and interaction.",
      "Extends classroom-informed music tooling into deeper technical and analytical workflows.",
    ],
    githubUrl: "https://github.com/cjohanson64-netizen/ScoreLens",
    liveUrl:
      "https://score-lens-git-main-cjohanson64-3345s-projects.vercel.app/",
    image: "/images/projects/scorelens.png",
    alt: "ScoreLens interface showing music score analysis panels and overlays.",
  },
];

export default projects;