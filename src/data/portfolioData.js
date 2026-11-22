/**
 * Sankar Portfolio - Central Data Source
 * Persona: Sankar | Aarohan AI Fellow 2026 (AIF26073) | Pedabayalu, ASR District
 */

export const personalInfo = {
  name: "Sankar",
  fullName: "Sankar",
  tagline: "Dream Big... Code Better... Grow Stronger...",
  role: "Full-Stack Developer & Applied AI Engineer",
  fellowship: "Aarohan AI Fellow 2026",
  fellowId: "AIF26073",
  cohort: "YTC Pedabayalu • ITDA Paderu",
  district: "Alluri Sitharama Raju (ASR) District, AP",
  email: "marrisankar24@gmail.com",
  phone: "+91 9390656724",
  location: "Pedabayalu, ASR District, Andhra Pradesh, India",
  github: "https://github.com/sankar-marri",
  linkedin: "https://www.linkedin.com/in/sankar-marri-927698444",
  youtube: "https://youtube.com/@aixploreteluguofficial?si=aV_yyI-WDrSwnXCt",
  instagram: "https://www.instagram.com/manapaderutrails?cnvx=MXM1OG45ZW9hNHp1bw==",
  avatarPhoto: "images/sankar-professional.jpg",
  bannerPhoto: "images/sankar-banner.jpg",
  githubAvatar: "images/sankar-github.jpg",
  bio: "Passionate technologist driving high-impact innovation through modern full-stack web applications, applied Artificial Intelligence, and community tech advocacy in Alluri Sitharama Raju (ASR) District.",
  detailedBio: "I am Sankar, an aspiring technologist and full-stack software developer from Pedabayalu in the Eastern Ghats of Alluri Sitharama Raju (ASR) District. Selected for the prestigious Aarohan AI Fellowship 2026 at YTC Pedabayalu (ITDA Paderu), I specialize in building responsive, scalable web applications and exploring applied AI diagnostics to solve pressing challenges in rural and tribal communities. Beyond code, I run AIXplore Telugu to democratize AI knowledge in regional languages and curate Mana Paderu Trails to champion indigenous eco-tourism."
};

export const metrics = [
  { value: "6+", label: "Live Deployed Projects", sub: "100% on Netlify Cloud" },
  { value: "100%", label: "Deployment Success", sub: "CI/CD & Live Telemetry" },
  { value: "2+", label: "Digital Communities", sub: "AIXplore Telugu & Trails" },
  { value: "2026", label: "Aarohan AI Fellow", sub: "ID: AIF26073 • ITDA Paderu" }
];

export const typingPhrases = [
  "Full-Stack Web Developer",
  "Applied AI Innovator",
  "Aarohan AI Fellow 2026",
  "Creator of AIXplore Telugu",
  "Advocate for ASR District"
];

export const skillsData = {
  categories: [
    { id: "all", name: "All Technologies" },
    { id: "frontend", name: "Frontend Development" },
    { id: "backend", name: "Backend & Systems" },
    { id: "ai", name: "Applied AI & Cloud" }
  ],
  skills: [
    { name: "React.js", category: "frontend", level: 90, icon: "atom", desc: "Component architecture, hooks, state management, and modern SPA lifecycle." },
    { name: "JavaScript (ES6+)", category: "frontend", level: 92, icon: "code", desc: "Modern syntax, asynchronous APIs, Canvas 2D engine, and DOM manipulation." },
    { name: "HTML5 & CSS3", category: "frontend", level: 95, icon: "layout", desc: "Semantic structure, responsive layouts, flexbox, CSS grid, and glassmorphism." },
    { name: "Tailwind CSS", category: "frontend", level: 88, icon: "palette", desc: "Utility-first design systems, responsive utilities, and dark mode theming." },
    { name: "Python", category: "backend", level: 86, icon: "terminal", desc: "Data processing, script automation, backend integrations, and AI workflows." },
    { name: "Node.js & Express", category: "backend", level: 82, icon: "server", desc: "RESTful API development, server logic, and npm packaging." },
    { name: "Applied AI & LLMs", category: "ai", level: 88, icon: "brain", desc: "Prompt engineering, symptom triage pipelines, and AI-assisted tooling." },
    { name: "Netlify Cloud CI/CD", category: "ai", level: 92, icon: "cloud", desc: "Continuous deployment, domain routing, edge hosting, and serverless functions." },
    { name: "Git & GitHub", category: "backend", level: 90, icon: "git-branch", desc: "Version control, collaborative workflows, and open-source documentation." }
  ]
};

export const projectsData = [
  {
    id: "arogya-drishti",
    title: "Arogya Drishti",
    subtitle: "AI-Assisted Healthcare Diagnostics",
    category: "ai-health",
    categoryLabel: "AI & Healthcare",
    image: "images/projects/arogya-drishti.png",
    liveUrl: "https://arogya-drishti-ai-assisted-health-car.netlify.app/",
    desc: "An intelligent healthcare triage web application exploring AI-assisted preliminary medical assessment designed to support rural health workers in underserved agency valleys.",
    tech: ["AI Diagnostics", "JavaScript", "Responsive UI", "Netlify Cloud"],
    featured: true,
    highlights: ["Symptom Triage Workflow", "Multilingual Support", "Low-bandwidth Optimization"]
  },
  {
    id: "mana-paderu-trails",
    title: "Mana Paderu Trails",
    subtitle: "Agency Eco-Tourism & Trekking Guide",
    category: "tourism",
    categoryLabel: "Tourism & Culture",
    image: "images/projects/manapadtrails.png",
    liveUrl: "https://manapadtrails.netlify.app/",
    desc: "The premier digital portal spotlighting hidden waterfalls, indigenous trekking paths, high-altitude coffee plantations, and sustainable tourism across Paderu.",
    tech: ["Eco-Tourism", "Interactive Maps", "Visual Media", "Netlify Cloud"],
    featured: true,
    highlights: ["Trek Route Maps", "Tribal Homestays Guide", "Preservation Ethics"]
  },
  {
    id: "alluri-wonders",
    title: "Alluri Wonders",
    subtitle: "Regional Wonders with Dynamic Weather Updates",
    category: "tourism",
    categoryLabel: "Tourism & Weather",
    image: "images/projects/alluri-wonders.png",
    liveUrl: "https://alluri-wonders143225.netlify.app/#weather",
    desc: "An interactive destination guide highlighting celebrated viewpoints across Alluri Sitharama Raju District paired with live weather telemetry forecasts.",
    tech: ["Weather API", "Tourist Sights", "JavaScript", "Netlify Cloud"],
    featured: true,
    highlights: ["Live Weather Telemetry", "Destination Directory", "Mobile-First Design"]
  },
  {
    id: "asr-tourist-hub",
    title: "ASR Tourist Hub",
    subtitle: "Alluri District Traveler Companion",
    category: "tourism",
    categoryLabel: "Tourism Portal",
    image: "images/projects/asr-turist.png",
    liveUrl: "https://asr-turist.netlify.app/",
    desc: "A comprehensive travel directory celebrating the culture, heritage, ghat road viewpoints, and tribal artisan handicrafts of the Eastern Ghats.",
    tech: ["Travel Guide", "Flexbox Grid", "Mobile UI", "Netlify Cloud"],
    featured: false,
    highlights: ["Cultural Insights", "Road Route Planner", "Artisan Spotlights"]
  },
  {
    id: "nature-glass",
    title: "Nature Glass",
    subtitle: "Eco-Aesthetic Glassmorphism UI Exploration",
    category: "web-apps",
    categoryLabel: "UI & Concept",
    image: "images/projects/nature-glass.png",
    liveUrl: "https://nature-glass.netlify.app/",
    desc: "A modern design system showcasing translucent blur dynamics, multi-layered frosted glass effects, and sleek responsive micro-interactions.",
    tech: ["Glassmorphism", "CSS Backdrop", "Interactive State", "Netlify Cloud"],
    featured: false,
    highlights: ["Backdrop Blur Filters", "Organic Color Schemes", "Fluid Components"]
  },
  {
    id: "thunderous-sprite",
    title: "Thunderous Sprite",
    subtitle: "High-Performance Dynamic Web Experience",
    category: "web-apps",
    categoryLabel: "Web Experience",
    image: "images/projects/thunderous-sprite.png",
    liveUrl: "https://thunderous-sprite-7a49ec.netlify.app/",
    desc: "A fast-loading interactive web application featuring animated layout transitions, rapid render speeds, and seamless client-side state handling.",
    tech: ["JavaScript ES6+", "Canvas FX", "Responsive", "Netlify Cloud"],
    featured: false,
    highlights: ["60FPS Transitions", "Minimal Bundle Size", "Accessible DOM"]
  }
];

export const teamData = {
  leadership: [
    {
      name: "Dhinesh Sir",
      role: "Executive Leadership",
      title: "Chief Executive Officer (CEO)",
      badge: "CEO",
      crownColor: "#f59e0b",
      avatarText: "DS",
      motto: "Strategic direction, executive vision, and institutional leadership.",
      phone: "+91 93919 95165"
    },
    {
      name: "Madhukumar",
      role: "Project Leadership & Tech Architecture",
      title: "Project Lead",
      badge: "Project Lead",
      crownColor: "#38bdf8",
      avatarImg: "images/team/madhukumar-avatar.jpg",
      motto: "Same Dreams... Bigger Impact... Guiding AI innovation & systems.",
      phone: "+91 93919 95165"
    },
    {
      name: "Somesh Sir",
      role: "Human Resources & Talent Management",
      title: "Head of Human Resources (HR)",
      badge: "HR",
      crownColor: "#10b981",
      avatarText: "SS",
      motto: "Talent acquisition, cohort culture, welfare, and organizational development.",
      phone: "+91 93919 95165"
    }
  ],
  cohort: [
    {
      name: "Sankar",
      role: "AI Fellow & Full-Stack Lead",
      spec: "Full-Stack Development, Applied AI & Regional Advocacy",
      avatar: "images/sankar-professional.jpg",
      fellowId: "AIF26073",
      github: "https://github.com/sankar-marri",
      linkedin: "https://www.linkedin.com/in/sankar-marri-927698444",
      highlight: true
    },
    {
      name: "Kavala Srinu",
      role: "Forward Deployed Engineer",
      spec: "Full-Stack Development, React & Field Implementation",
      avatar: "images/team/kavala-srinu-avatar.jpg"
    },
    {
      name: "Koravangi MudduKrishna",
      role: "Web Developer",
      spec: "Web Development, React, Next.js & UI Architecture",
      avatar: "images/team/koravangi-muddukrishna-avatar.jpg"
    },
    {
      name: "Kankipati Hari Vishnu Vardhan",
      role: "UI/UX & Frontend Designer",
      spec: "UI/UX Design, Visual Styling & Front-End UI",
      avatar: "images/team/kankipati-hari-vishnu-vardhan-avatar.jpg"
    },
    {
      name: "Pangi Aadhi Vasu",
      role: "QA & Deployment Engineer",
      spec: "QA Testing, Deployment Review & Performance Optimization",
      avatar: "images/team/pangi-aadhi-vasu-avatar.jpg"
    },
    {
      name: "Vanthala Simhadhri",
      role: "Operations & Project Coordinator",
      spec: "Operations, Project Coordination & Field Execution",
      avatar: "images/team/vanthala-simhadhri-avatar.jpg"
    }
  ]
};

export const channelsData = [
  {
    name: "AIXplore Telugu",
    platform: "YouTube",
    badge: "Official Channel",
    color: "#ff0033",
    icon: "youtube",
    headline: "Demystifying Artificial Intelligence in Telugu",
    desc: "A dedicated regional education initiative translating cutting-edge AI concepts, machine learning models, and coding skills into clear, accessible Telugu for regional learners.",
    link: "https://youtube.com/@aixploreteluguofficial?si=aV_yyI-WDrSwnXCt",
    videoSample: "https://www.youtube.com/watch?v=wS3nFjKtrSc",
    stats: "Regional AI Education • Telugu Tutorials"
  },
  {
    name: "Mana Paderu Trails",
    platform: "Community & Instagram",
    badge: "Regional Community",
    color: "#e1306c",
    icon: "instagram",
    headline: "Celebrating Eastern Ghats Eco-Tourism & Culture",
    desc: "A community movement documenting waterfalls, pristine tribal trekking trails, local coffee farming traditions, and responsible eco-tourism across Alluri District.",
    link: "https://www.instagram.com/manapaderutrails?cnvx=MXM1OG45ZW9hNHp1bw==",
    videoSample: "https://www.youtube.com/watch?v=0Bmuoq5y43E",
    stats: "Eco-Trails • Tribal Culture • Community Hub"
  }
];

export const videoScenes = [
  {
    id: 1,
    title: "SANKAR • INTRODUCTION",
    badge: "Aarohan AI Fellow 2026",
    subtitle: "From Pedabayalu, ASR District • Building with Purpose",
    speech: "Hi, I am Sankar, Aarohan AI Fellow 2026 at ITDA Pedabayalu, Alluri Sitharama Raju District.",
    duration: 6.5,
    color: "#38bdf8"
  },
  {
    id: 2,
    title: "TECHNICAL ARSENAL",
    badge: "Full-Stack & Applied AI",
    subtitle: "React.js • Modern JavaScript • Python • Tailwind CSS • Cloud",
    speech: "My technical arsenal spans React, modern JavaScript, Python, Tailwind CSS, and Applied AI.",
    duration: 6.0,
    color: "#818cf8"
  },
  {
    id: 3,
    title: "6 LIVE NETLIFY PROJECTS",
    badge: "Real-World Impact",
    subtitle: "Arogya Drishti • Mana Paderu Trails • Alluri Wonders & More",
    speech: "I have developed and deployed six real-world web applications live on Netlify.",
    duration: 6.5,
    color: "#10b981"
  },
  {
    id: 4,
    title: "DIGITAL ADVOCACY & CREATION",
    badge: "Community Educator",
    subtitle: "AIXplore Telugu YouTube & Mana Paderu Trails Movement",
    speech: "Through AIXplore Telugu and Mana Paderu Trails, I educate regional youth and champion tribal heritage.",
    duration: 6.0,
    color: "#f43f5e"
  },
  {
    id: 5,
    title: "COLLABORATIVE LEADERSHIP",
    badge: "Mentorship & Teamwork",
    subtitle: "Guided by Dhinesh Sir, Somesh Sir & Madhukumar with Fellow Cohort",
    speech: "Proud to collaborate with visionary leaders Dhinesh sir and Somesh sir, and fellow teammates.",
    duration: 6.0,
    color: "#38bdf8"
  },
  {
    id: 6,
    title: "OPEN TO OPPORTUNITIES",
    badge: "Let's Build Together",
    subtitle: "Ready for Full-Stack Developer & Applied AI Engineering Roles",
    speech: "I am Sankar. Ready to build, innovate, and contribute to cutting-edge tech teams.",
    duration: 6.5,
    color: "#a855f7"
  }
];
