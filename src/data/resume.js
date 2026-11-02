const resumeData = {
  heading: "Resume",

  intro:
    "Instructional designer and learning experience developer combining 11 years of music education with hands-on interactive software development.",

  identity: {
    name: "Carl Biggers-Johanson",
    location: "Saratoga Springs, Utah",
    email: "cjohanson64@gmail.com",
    phone: "352-246-2602",
    linkedin: "https://www.linkedin.com/in/carlbiggersjohanson/",
    github: "https://github.com/cjohanson64-netizen",
    portfolio: "/",
  },

  summary: [
    "Educator and curriculum designer with 11 years of experience planning instruction, creating learning materials, and assessing skill development across diverse learners.",
    "Designs interactive learning experiences that connect objectives, purposeful practice, and actionable feedback.",
    "Combines instructional expertise with React, JavaScript, TypeScript, and software development to prototype and deliver learning technology.",
  ],

  skillGroups: [
    {
      title: "Instructional Design",
      items: [
        "Curriculum planning",
        "Learning objectives",
        "Lesson & activity design",
        "Assessment design",
        "Formative feedback",
        "Differentiated instruction",
        "Learning content development",
      ],
    },
    {
      title: "Learning Experience & Delivery",
      items: [
        "Facilitation",
        "User-centered learning experiences",
        "Interactive practice",
        "Music literacy",
        "Learner support",
        "Training & onboarding",
      ],
    },
    {
      title: "Development",
      items: [
        "React",
        "JavaScript",
        "TypeScript",
        "HTML & CSS",
        "Node.js",
        "REST APIs",
        "Vite",
      ],
    },
    {
      title: "Tools & Systems",
      items: [
        "Git & GitHub",
        "SQL & Prisma",
        "Learning platform prototyping",
        "Accessible interface principles",
        "Feedback & scoring logic",
      ],
    },
  ],

  projects: [
    {
      title: "SightLine",
      role: "Interactive Music Learning & Assessment",
      github: "https://github.com/cjohanson64-netizen/SightLine",
      live: "https://sight-line-topaz.vercel.app/",
      bullets: [
        "Identified a sight-singing instruction need and designed concept-aligned independent practice for developing singers.",
        "Built a multi-stage music exercise generator informed by instructional constraints and musical skills.",
        "Developed microphone-based pitch detection, performance alignment, and scoring feedback.",
        "Connected exercise generation, learner performance, and feedback in a working interactive prototype.",
      ],
    },
    {
      title: "LMSDemo",
      role: "Learning Management System Prototype",
      github: "https://github.com/cjohanson64-netizen/LMS-Software-Demo",
      live: "",
      bullets: [
        "Designed and developed an educational platform prototype with structured content, navigation, and learning workflows.",
        "Applied classroom experience to the organization of instructional content and student-facing experiences.",
      ],
    },
    {
      title: "ScoreLens",
      role: "Music Analysis Tool (In Progress)",
      github: "https://github.com/cjohanson64-netizen/ScoreLens",
      live: "",
      bullets: [
        "Explores structured analysis and visual interpretation of musical scores through a user-facing interface.",
        "Combines music subject-matter expertise with software modeling and interaction design.",
      ],
    },
  ],

  experience: [
    {
      title: "AI Onboarding Specialist / Onboarding Manager",
      organization: "Podium",
      location: "Utah",
      dates: "2026–Present",
      bullets: [
        "Support customer onboarding to software products, translating technical workflows into clear, actionable guidance.",
        "Coordinate onboarding work and communicate with people who have different levels of technical familiarity.",
      ],
    },
    {
      title: "Music Educator, Choir Director & Curriculum Designer",
      organization: "Alpine School District",
      location: "Utah",
      dates: "2015–2026",
      bullets: [
        "Designed and delivered sequential curriculum, instructional materials, and assessments in choir and music education.",
        "Created differentiated practice activities and feedback to support varying levels of student experience.",
        "Directed an expanding music program, growing ensemble offerings from three to eight.",
        "Led classroom instruction, musical rehearsals, and performance-based assessment for a program serving more than 300 students.",
      ],
    },
  ],

  education: [
    "Master of Music Education (Choral) — Brigham Young University, 2020",
    "Bachelor of Music Education (Choral) — Brigham Young University, 2015",
  ],
};

export default resumeData;
