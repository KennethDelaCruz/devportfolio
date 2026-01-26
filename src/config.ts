export const siteConfig = {
  name: "Kenneth Dela Cruz",
  title: "Software Engineer",
  description: "Portfolio website of Kenneth Dela Cruz",
  accentColor: "#266146",
  profilePicture: "/me.jpg", // Add your profile picture to the public folder
  social: {
    email: "kennethbdelacruz@gmail.com",
    linkedin: "https://www.linkedin.com/in/kenneth-dela-cruz/",
    twitter: "",
    github: "https://github.com/KennethDelaCruz",
  },
  aboutMe2: {
    intro: "I’m a full-stack software engineer building frontend-heavy, production systems. My work centers on React and TypeScript, with experience across the stack—building backend services with Node.js, integrating REST APIs, and shipping data-driven products. At Wildfire Systems, I’ve owned analytics dashboards and browser extension features used across 20+ partner deployments, with a focus on performance, scalability, and clear data visualization.",
    background: "My path into engineering started outside of traditional computer science. I come from an economics background, where my initial goal was to learn Python for data aggregation and analysis—work that eventually led me to fall in love with software development as a whole. That foundation continues to shape how I approach engineering problems, pushing me to think beyond isolated implementations and focus on the broader system.",
    today: "Today, I prioritize clarity, reliability, and scalability in the code I write. I focus on building systems that are easy to reason about, safe to change, and able to grow as product and user needs evolve. I care deeply about making thoughtful tradeoffs that balance long-term maintainability with short-term velocity, while keeping both user experience and developer experience front and center. I strive to be the kind of engineer who can take ownership of ambiguous problems and deliver solutions that scale—technically and organizationally—over time."
  },
  aboutMe:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quos asperiores nihil consequatur tempore cupiditate architecto natus commodi corrupti quas quasi facere est, dignissimos odit nam veniam sapiente ut, vitae eligendi ipsum dolor, nostrum ullam impedit! Corrupti ratione mollitia temporibus necessitatibus, consectetur reiciendis recusandae id, dolorum quaerat, vero pariatur. Ratione!",
  skills : {
    "languages": ["TypeScript", "JavaScript (ES6+)", "Python"],
    "frontend": ["React", "React Native", "Redux", "Tailwind CSS" ],
    "backend": ["Node.js", "Express.js", "FastAPI", "PostgreSQL"],
    "tools": ["Git", "GitHub", "GitHub Actions", "Monorepos"],
    "design": ["Figma", "Notion"]
  },
  projects: [
    {
      name: "Support Ticket Triage AI",
      description:
        "Automatically analyze and triage support tickets with AI-powered intent detection, urgency assessment, and recommended next steps.",
      link: "https://ai-support-triage-project.vercel.app/",
      skills: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Python", "FastAPI", "AI/ML (Hugging Face Inference API)"],
    },
  ],
  experience: [
    {
      company: "Wildfire Systems, Inc.",
      title: "Software Engineer - Product Team",
      dateRange: "Jan 2025 - Dec 2025",
      bullets: [
        "Built scalable, configuration-driven, white-label Chrome extension interfaces using theming and YAML-based configuration, allowing rapid partner onboarding with minimal custom code.",
        "Developed end-to-end product features for matching, price comparison, and targeted advertising that directly supported core revenue workflows.",
        "Designed and implemented a service-worker–based decision engine leveraging tokenization, fuzzy matching, and probabilistic scoring to intelligently trigger or suppress ads.",
        "Introduced feature-flag–driven rollouts and A/B experimentation, improving release safety and enabling data-backed product decisions.",
      ],
    },
    {
      company: "Wildfire Systems, Inc.",
      title: "Software Engineer - Internal/Partner Tools Team",
      dateRange: "Jan 2023 - Dec 2024",
      bullets: [
        "Owned development of internal and partner-facing analytics dashboards supporting 20+ production Chrome extensions, tracking commissions, sales, clicks, installs, and uninstalls.",
        "Led a migration from legacy Redux patterns to Redux Toolkit, improving code consistency, maintainability, and development velocity.",
        "Expanded automated test coverage (unit, integration, and E2E) to reduce production regressions and improve release confidence.",
        "Mentored junior engineers through code reviews, onboarding, and technical guidance.",
      ]
    },
    {
      company: "Dray Alliance",
      title: "Full-Stack Software Engineer II",
      dateRange: "Sep 2022 - Dec 2022 ",
      bullets: [
        "Owned end-to-end development of customer-facing web and mobile features for a freight marketplace using TypeScript, React, and React Native.",
        "Designed and implemented RESTful APIs and contributed to production reliability through testing, monitoring, and observability with DataDog.",
      ],
    },
    {
      company: "Dray Alliance",
      title: "Full-Stack Software Engineer",
      dateRange: "Aug 2021 - Sep 2022",
      bullets: [
        "Developed web and mobile features supporting marketplace workflows, including job discovery and operational improvements.",
        "Collaborated closely with backend services, participated in code reviews, and supported production systems.",
      ],
    },
    {
      company: "LearningFuze",
      title: "Teaching Assistant",
      dateRange: "May 2021 - Jul 2021",
      bullets: [
        "Mentored 40+ students in JavaScript, HTML, CSS, React, and Node.js through after-hours support, code reviews, and one-on-one debugging sessions.",
        "Provided technical guidance via Slack and Zoom, reinforcing best practices and core programming fundamentals.",
        "Helped foster a rigorous but supportive learning environment to accelerate student growth.",
      ],
    },
  ],
  education: [ {
    school: "LearningFuze",
    degree: "Accelerated Web Development Program",
    dateRange: "Jan 2021 - Apr 2021",
    achievements: [],
  },
  {
    school: "California State University, Long Beach",
    degree: "Bachelor of Arts in Economics",
    dateRange: "2016 - 2018",
    achievements: [],
  },
],
};
