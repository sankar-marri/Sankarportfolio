/**
 * Sankar Portfolio - Complete React 18 Single-Page Application
 * Persona: Sankar | Aarohan AI Fellow 2026 (AIF26073) | Pedabayalu, ASR District
 */

const { useState, useEffect, useRef } = React;

// 1. DATA SOURCE
const personalInfo = {
  name: "Sankar",
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

const metrics = [
  { value: "6+", label: "Live Deployed Projects", sub: "100% on Netlify Cloud" },
  { value: "100%", label: "Deployment Success", sub: "CI/CD & Live Telemetry" },
  { value: "2+", label: "Digital Communities", sub: "AIXplore Telugu & Trails" },
  { value: "2026", label: "Aarohan AI Fellow", sub: "ID: AIF26073 • ITDA Paderu" }
];

const typingPhrases = [
  "Full-Stack Web Developer",
  "Applied AI Innovator",
  "Aarohan AI Fellow 2026",
  "Creator of AIXplore Telugu",
  "Advocate for ASR District"
];

const skillsData = {
  categories: [
    { id: "all", name: "All Technologies" },
    { id: "frontend", name: "Frontend Development" },
    { id: "backend", name: "Backend & Systems" },
    { id: "ai", name: "Applied AI & Cloud" }
  ],
  skills: [
    { name: "React.js", category: "frontend", level: 90, desc: "Component architecture, hooks, state management, and modern SPA lifecycle." },
    { name: "JavaScript (ES6+)", category: "frontend", level: 92, desc: "Modern syntax, asynchronous APIs, Canvas 2D engine, and DOM manipulation." },
    { name: "HTML5 & CSS3", category: "frontend", level: 95, desc: "Semantic structure, responsive layouts, flexbox, CSS grid, and glassmorphism." },
    { name: "Tailwind CSS", category: "frontend", level: 88, desc: "Utility-first design systems, responsive utilities, and dark mode theming." },
    { name: "Python", category: "backend", level: 86, desc: "Data processing, script automation, backend integrations, and AI workflows." },
    { name: "Node.js & Express", category: "backend", level: 82, desc: "RESTful API development, server logic, and npm packaging." },
    { name: "Applied AI & LLMs", category: "ai", level: 88, desc: "Prompt engineering, symptom triage pipelines, and AI-assisted tooling." },
    { name: "Netlify Cloud CI/CD", category: "ai", level: 92, desc: "Continuous deployment, domain routing, edge hosting, and serverless functions." },
    { name: "Git & GitHub", category: "backend", level: 90, desc: "Version control, collaborative workflows, and open-source documentation." }
  ]
};

const projectsData = [
  {
    id: "arogya-drishti",
    title: "Arogya Drishti",
    subtitle: "AI-Assisted Healthcare Diagnostics",
    category: "ai-health",
    categoryLabel: "AI & Healthcare",
    image: "images/projects/arogya-drishti.png",
    liveUrl: "https://arogya-drishti-ai-assisted-health-car.netlify.app/",
    desc: "An intelligent healthcare triage web application exploring AI-assisted preliminary medical assessment designed to support rural health workers in underserved agency valleys.",
    tech: ["AI Diagnostics", "JavaScript", "Responsive UI", "Netlify Cloud"]
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
    tech: ["Eco-Tourism", "Interactive Maps", "Visual Media", "Netlify Cloud"]
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
    tech: ["Weather API", "Tourist Sights", "JavaScript", "Netlify Cloud"]
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
    tech: ["Travel Guide", "Flexbox Grid", "Mobile UI", "Netlify Cloud"]
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
    tech: ["Glassmorphism", "CSS Backdrop", "Interactive State", "Netlify Cloud"]
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
    tech: ["JavaScript ES6+", "Canvas FX", "Responsive", "Netlify Cloud"]
  }
];

const teamData = {
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

const channelsData = [
  {
    name: "AIXplore Telugu",
    platform: "YouTube",
    badge: "Official Channel",
    color: "#ff0033",
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
    headline: "Celebrating Eastern Ghats Eco-Tourism & Culture",
    desc: "A community movement documenting waterfalls, pristine tribal trekking trails, local coffee farming traditions, and responsible eco-tourism across Alluri District.",
    link: "https://www.instagram.com/manapaderutrails?cnvx=MXM1OG45ZW9hNHp1bw==",
    videoSample: "https://www.youtube.com/watch?v=0Bmuoq5y43E",
    stats: "Eco-Trails • Tribal Culture • Community Hub"
  }
];

const videoScenes = [
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

// 2. TOAST COMPONENT
function Toast({ message, visible }) {
  if (!visible || !message) return null;
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-slate-900/95 border border-sky-400/40 text-slate-100 px-5 py-3 rounded-full shadow-2xl backdrop-blur-md animate-fade-in-up">
      <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-ping" />
      <span className="text-sm font-medium tracking-wide">{message}</span>
    </div>
  );
}

// 3. NAVBAR COMPONENT
function Navbar({ theme, onToggleTheme, activeSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#video-intro', label: 'Video Intro' },
    { href: '#about', label: 'About' },
    { href: '#fellowship', label: 'Fellowship' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#channels', label: 'Channels' },
    { href: '#team', label: 'Team' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="text-xl sm:text-2xl font-bold font-heading text-slate-100 group-hover:text-sky-400 transition-colors">
            <span className="text-sky-400">&lt;</span>Sankar<span className="text-sky-400">/&gt;</span>
          </span>
          <span className="hidden sm:inline-block px-2 py-0.5 text-xs font-semibold uppercase tracking-wider rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
            AIF '26
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeSection === link.href.slice(1)
                  ? 'text-sky-400 bg-sky-500/10 font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onToggleTheme}
            className="p-2 sm:px-3 sm:py-1.5 rounded-full bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 text-slate-200 hover:text-white text-sm font-medium flex items-center gap-1.5 transition-all"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            <span>{theme === 'dark' ? '🌙' : '☀️'}</span>
            <span className="hidden md:inline text-xs capitalize">{theme}</span>
          </button>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-medium text-sm shadow-md shadow-sky-500/20 hover:shadow-sky-500/40 transition-all transform hover:-translate-y-0.5"
          >
            <span>Let's Connect</span>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-800/70 border border-slate-700/60 text-slate-300 hover:text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-slate-800 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                activeSection === link.href.slice(1)
                  ? 'bg-sky-500/15 text-sky-400 font-semibold'
                  : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-sky-500/20"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

// 4. HERO COMPONENT
function Hero({ onNotify }) {
  const [typingIndex, setTypingIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSoundActive, setIsSoundActive] = useState(false);

  const canvasRef = useRef(null);
  const audioCtxRef = useRef(null);
  const synthGainRef = useRef(null);

  // Typing Effect
  useEffect(() => {
    const currentPhrase = typingPhrases[typingIndex];
    let typingSpeed = isDeleting ? 45 : 95;

    if (!isDeleting && typedText === currentPhrase) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setTypingIndex((prev) => (prev + 1) % typingPhrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setTypedText(
        isDeleting
          ? currentPhrase.substring(0, typedText.length - 1)
          : currentPhrase.substring(0, typedText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, typingIndex]);

  // Audio Synth
  const initAudio = () => {
    if (audioCtxRef.current) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioCtx();
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.045, ctx.currentTime);
      gain.connect(ctx.destination);
      audioCtxRef.current = ctx;
      synthGainRef.current = gain;
    } catch (e) {}
  };

  const playChord = (freq) => {
    if (!audioCtxRef.current || !synthGainRef.current) return;
    try {
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') ctx.resume();
      const osc = ctx.createOscillator();
      const noteGain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      noteGain.gain.setValueAtTime(0.001, ctx.currentTime);
      noteGain.gain.exponentialRampToValueAtTime(0.035, ctx.currentTime + 0.3);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 3.0);
      osc.connect(noteGain);
      noteGain.connect(synthGainRef.current);
      osc.start();
      osc.stop(ctx.currentTime + 3.1);
    } catch (e) {}
  };

  const speakScene = (speechText) => {
    if (!('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(speechText);
      u.rate = 1.0;
      u.pitch = 1.0;
      u.lang = 'en-US';
      window.speechSynthesis.speak(u);
    } catch (e) {}
  };

  const toggleSound = () => {
    const nextState = !isSoundActive;
    setIsSoundActive(nextState);

    if (nextState) {
      initAudio();
      if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
      playChord(261.63);
      speakScene("Hi, I am Sankar, Aarohan AI Fellow 2026 at ITDA Pedabayalu.");
      if (onNotify) onNotify("Background Video Audio: ON 🔊");
    } else {
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
      if (onNotify) onNotify("Background Video Audio: Muted 🔇");
    }
  };

  // Background 60FPS Video Canvas Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = 1920;
    canvas.height = 1080;
    const w = 1920;
    const h = 1080;

    const poster = new Image();
    let posterLoaded = false;
    poster.onload = () => { posterLoaded = true; };
    poster.src = personalInfo.bannerPhoto;

    const floatingTags = [
      '<React.js />', 'const sankar = new Dev()', 'Netlify Live ↗',
      'AIXplore Telugu', 'Arogya Drishti', 'Aarohan AI 2026',
      'HTML5 • CSS3', 'JavaScript ES6+', 'Python AI',
      'ITDA Pedabayalu', 'ASR District', 'Impact Driven'
    ];

    const particles = Array.from({ length: 42 }, (_, i) => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.45,
      vy: -Math.random() * 0.4 - 0.2,
      r: Math.random() * 2.5 + 1.2,
      alpha: Math.random() * 0.45 + 0.2,
      tag: i < floatingTags.length ? floatingTags[i] : null
    }));

    let currentSceneIdx = 0;
    let sceneProgress = 0;
    let totalTime = 0;
    let lastTime = performance.now();
    let animId = null;
    let isVisible = true;

    const chords = [261.63, 329.63, 392.00, 523.25, 440.00, 349.23];

    const render = (now) => {
      if (!isVisible) {
        animId = requestAnimationFrame(render);
        return;
      }
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;
      totalTime += dt;

      const curScene = videoScenes[currentSceneIdx];
      sceneProgress += dt / curScene.duration;

      if (sceneProgress >= 1) {
        sceneProgress = 0;
        currentSceneIdx = (currentSceneIdx + 1) % videoScenes.length;
        if (isSoundActive) {
          playChord(chords[currentSceneIdx % chords.length]);
          speakScene(videoScenes[currentSceneIdx].speech);
        }
      }

      ctx.fillStyle = '#060913';
      ctx.fillRect(0, 0, w, h);

      const grad1 = ctx.createRadialGradient(
        w * 0.72 + Math.sin(totalTime * 0.5) * 120,
        h * 0.42 + Math.cos(totalTime * 0.4) * 80, 20,
        w * 0.72, h * 0.42, 600
      );
      grad1.addColorStop(0, 'rgba(56, 189, 248, 0.22)');
      grad1.addColorStop(0.5, 'rgba(139, 92, 246, 0.12)');
      grad1.addColorStop(1, 'rgba(6, 9, 19, 0)');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, w, h);

      // Cyber Grid
      ctx.save();
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.07)';
      ctx.lineWidth = 1;
      const gridY = h * 0.78;
      for (let i = 0; i < 14; i++) {
        const y = gridY + i * 20 + ((totalTime * 18) % 20);
        if (y < h) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(w, y);
          ctx.stroke();
        }
      }
      const vpX = w / 2;
      for (let x = -w * 0.5; x <= w * 1.5; x += 120) {
        ctx.beginPath();
        ctx.moveTo(vpX, gridY);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      ctx.restore();

      // Poster with Ken Burns Zoom & Pan
      if (posterLoaded) {
        ctx.save();
        const zoom = 1.0 + (sceneProgress * 0.06);
        const panX = Math.sin(totalTime * 0.15) * 25;
        const panY = Math.cos(totalTime * 0.12) * 15;
        ctx.translate(w / 2 + panX, h / 2 + panY);
        ctx.scale(zoom, zoom);
        ctx.globalAlpha = 0.48;
        ctx.drawImage(poster, -w / 2, -h / 2, w, h);
        ctx.restore();
      }

      // Floating Particles & Tags
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.fillStyle = `rgba(56, 189, 248, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        if (p.tag) {
          ctx.save();
          ctx.fillStyle = 'rgba(15, 23, 42, 0.55)';
          ctx.strokeStyle = 'rgba(56, 189, 248, 0.22)';
          ctx.lineWidth = 1;
          ctx.font = '12px monospace';
          const tw = ctx.measureText(p.tag).width + 16;
          ctx.beginPath();
          ctx.roundRect(p.x - tw / 2, p.y - 18, tw, 22, 6);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = `rgba(186, 230, 253, ${p.alpha * 1.6})`;
          ctx.textAlign = 'center';
          ctx.fillText(p.tag, p.x, p.y - 4);
          ctx.restore();
        }
      });

      // Scene Card
      const fadeAlpha = sceneProgress < 0.15
        ? sceneProgress / 0.15
        : sceneProgress > 0.85
        ? (1 - sceneProgress) / 0.15
        : 1;

      ctx.save();
      ctx.globalAlpha = Math.min(1, fadeAlpha * 0.85);
      const cardX = w * 0.58;
      const cardY = h * 0.22;
      const cardW = 680;
      const cardH = 340;

      ctx.fillStyle = 'rgba(10, 16, 32, 0.72)';
      ctx.strokeStyle = curScene.color ? `${curScene.color}66` : 'rgba(56, 189, 248, 0.4)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(cardX, cardY, cardW, cardH, 20);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = 'rgba(239, 68, 68, 0.9)';
      ctx.beginPath();
      ctx.arc(cardX + 35, cardY + 38, 6, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#f87171';
      ctx.font = 'bold 13px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText('LIVE VIDEO INTRODUCTION REEL', cardX + 50, cardY + 43);

      ctx.fillStyle = '#94a3b8';
      ctx.font = '600 13px sans-serif';
      ctx.textAlign = 'right';
      ctx.fillText(`SCENE 0${currentSceneIdx + 1}/06`, cardX + cardW - 30, cardY + 43);

      ctx.fillStyle = curScene.color || '#38bdf8';
      ctx.font = 'bold 18px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(curScene.badge.toUpperCase(), cardX + 35, cardY + 95);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 32px sans-serif';
      ctx.fillText(curScene.title, cardX + 35, cardY + 145, cardW - 70);

      ctx.fillStyle = '#cbd5e1';
      ctx.font = '500 18px sans-serif';
      ctx.fillText(curScene.subtitle, cardX + 35, cardY + 195, cardW - 70);

      ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.fillRect(cardX + 35, cardY + cardH - 30, cardW - 70, 6);
      ctx.fillStyle = curScene.color || '#38bdf8';
      ctx.fillRect(cardX + 35, cardY + cardH - 30, (cardW - 70) * sceneProgress, 6);
      ctx.restore();

      // Audio Waveform
      ctx.save();
      const barCount = 48;
      const barW = 12;
      const gap = 8;
      const startX = (w - (barCount * (barW + gap))) / 2;
      const visualizerY = h - 25;

      for (let b = 0; b < barCount; b++) {
        const freq = Math.sin(totalTime * 5 + b * 0.35) * 0.5 + 0.5;
        const barH = isSoundActive ? freq * 36 + 10 : Math.sin(totalTime * 2.5 + b * 0.2) * 12 + 6;
        const gradBar = ctx.createLinearGradient(0, visualizerY - barH, 0, visualizerY);
        gradBar.addColorStop(0, '#38bdf8');
        gradBar.addColorStop(1, 'rgba(56, 189, 248, 0.1)');
        ctx.fillStyle = gradBar;
        ctx.fillRect(startX + b * (barW + gap), visualizerY - barH, barW, barH);
      }
      ctx.restore();

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    const handleVisibility = () => {
      isVisible = !document.hidden;
      if (document.hidden && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener('visibilitychange', handleVisibility);
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    };
  }, [isSoundActive]);

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden" id="home">
      <div className="absolute inset-0 pointer-events-none z-0">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover opacity-35 dark:opacity-40 transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-radial-vignette" />
        <div className="absolute inset-0 bg-cyber-grid opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Aarohan AI Fellow 2026 • ITDA Pedabayalu</span>
              <span className="opacity-40">•</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Video Intro Live
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold font-heading text-slate-100 tracking-tight leading-none">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400">Sankar</span>
            </h1>

            <div className="flex items-center gap-2 text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-200 min-h-[40px]">
              <span className="text-slate-400 font-normal">I am a</span>
              <span className="text-sky-400 font-mono underline decoration-sky-500/40 underline-offset-4">
                {typedText}
              </span>
              <span className="inline-block w-0.5 h-7 bg-sky-400 animate-pulse" />
            </div>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {personalInfo.bio}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-sky-500/25 hover:shadow-sky-500/45 transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore My Work</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="#video-intro"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 hover:text-white font-semibold text-sm sm:text-base transition-all transform hover:-translate-y-0.5"
              >
                <span className="text-sky-400">▶</span>
                <span>Watch Video Intro</span>
              </a>

              <button
                onClick={toggleSound}
                className={`inline-flex items-center gap-2 px-4 py-3 rounded-full text-sm font-semibold border transition-all ${
                  isSoundActive
                    ? 'bg-emerald-500/20 border-emerald-400 text-emerald-400 shadow-lg shadow-emerald-500/20'
                    : 'bg-slate-800/70 border-slate-700 text-slate-300 hover:text-white hover:border-slate-600'
                }`}
              >
                <span>{isSoundActive ? '🔊' : '🔇'}</span>
                <span>Sound: {isSoundActive ? 'ON' : 'OFF'}</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-transparent hover:bg-slate-800/40 border border-slate-700/80 text-slate-300 hover:text-white font-medium text-sm sm:text-base transition-all"
              >
                Contact
              </a>
            </div>

            <div className="flex items-center gap-4 pt-3 text-slate-400 text-sm">
              <span className="font-medium text-slate-500">Connect:</span>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-colors">
                GitHub ↗
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-colors">
                LinkedIn ↗
              </a>
              <a href={personalInfo.youtube} target="_blank" rel="noreferrer" className="hover:text-red-400 transition-colors">
                YouTube ↗
              </a>
              <a href={personalInfo.instagram} target="_blank" rel="noreferrer" className="hover:text-pink-400 transition-colors">
                Instagram ↗
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-md">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 opacity-30 group-hover:opacity-75 blur-xl transition-all duration-700" />
              <div className="relative rounded-3xl bg-slate-900/90 border border-slate-700/80 p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
                <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-sky-400/40 shadow-inner group">
                  <img
                    src={personalInfo.avatarPhoto}
                    alt="Sankar - Full-Stack Developer & AI Fellow"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white font-heading">{personalInfo.name}</h3>
                      <p className="text-xs font-medium text-sky-300">Aarohan AI Fellow 2026</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 backdrop-blur-md">
                      ● Active
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
                    <span className="text-slate-400 block">Cohort Center</span>
                    <span className="font-semibold text-slate-100 mt-0.5 block">YTC Pedabayalu</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
                    <span className="text-slate-400 block">ITDA Region</span>
                    <span className="font-semibold text-slate-100 mt-0.5 block">Paderu (ASR Dist.)</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-purple-500/10 border border-sky-500/20 text-center">
                  <p className="text-xs sm:text-sm font-semibold italic text-sky-200">
                    ✨ "{personalInfo.tagline}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-md hover:border-sky-500/40 transition-all transform hover:-translate-y-1 shadow-lg"
            >
              <span className="text-3xl sm:text-4xl font-extrabold font-heading text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
                {m.value}
              </span>
              <h4 className="text-sm sm:text-base font-bold text-slate-100 mt-1">{m.label}</h4>
              <p className="text-xs text-slate-400 mt-0.5">{m.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 5. VIDEO INTRO COMPONENT
function VideoIntro({ onNotify }) {
  const [activeSceneIdx, setActiveSceneIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isExporting, setIsExporting] = useState(false);

  const canvasRef = useRef(null);
  const timerRef = useRef(null);
  const animFrameRef = useRef(null);
  const elapsedRef = useRef(0);

  const currentScene = videoScenes[activeSceneIdx];

  const speakText = (text) => {
    if (!isVoiceEnabled || !('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.rate = 1.0;
      u.pitch = 1.0;
      u.lang = 'en-US';
      window.speechSynthesis.speak(u);
    } catch (e) {}
  };

  const handleSelectScene = (idx) => {
    setActiveSceneIdx(idx);
    elapsedRef.current = 0;
    setProgress(0);
    if (isPlaying) {
      speakText(videoScenes[idx].speech);
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      clearInterval(timerRef.current);
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    } else {
      setIsPlaying(true);
      speakText(currentScene.speech);
    }
  };

  useEffect(() => {
    if (!isPlaying) return;

    timerRef.current = setInterval(() => {
      elapsedRef.current += 0.2;
      const curDur = videoScenes[activeSceneIdx].duration;
      const curRatio = Math.min(1, elapsedRef.current / curDur);
      setProgress(curRatio);

      if (elapsedRef.current >= curDur) {
        if (activeSceneIdx < videoScenes.length - 1) {
          const nextIdx = activeSceneIdx + 1;
          setActiveSceneIdx(nextIdx);
          elapsedRef.current = 0;
          setProgress(0);
          speakText(videoScenes[nextIdx].speech);
        } else {
          setIsPlaying(false);
          elapsedRef.current = 0;
          setProgress(0);
          if (onNotify) onNotify("Completed video reel! Click Replay to watch again. 🎬");
        }
      }
    }, 200);

    return () => clearInterval(timerRef.current);
  }, [isPlaying, activeSceneIdx]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = 1280;
    canvas.height = 720;
    const w = 1280;
    const h = 720;

    const poster = new Image();
    let posterLoaded = false;
    poster.onload = () => { posterLoaded = true; };
    poster.src = personalInfo.bannerPhoto;

    let time = 0;

    const render = () => {
      time += 0.03;

      ctx.fillStyle = '#060a14';
      ctx.fillRect(0, 0, w, h);

      const grad = ctx.createRadialGradient(
        w / 2 + Math.sin(time) * 80,
        h / 2 + Math.cos(time * 0.8) * 50,
        20,
        w / 2,
        h / 2,
        600
      );
      grad.addColorStop(0, 'rgba(56, 189, 248, 0.2)');
      grad.addColorStop(0.5, 'rgba(129, 140, 248, 0.12)');
      grad.addColorStop(1, 'rgba(6, 10, 20, 1)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      if (posterLoaded && activeSceneIdx === 0) {
        ctx.save();
        const zoom = 1.0 + progress * 0.05;
        ctx.translate(w / 2, h / 2);
        ctx.scale(zoom, zoom);
        ctx.globalAlpha = 0.85;
        ctx.drawImage(poster, -w / 2, -h / 2, w, h);
        ctx.restore();

        ctx.fillStyle = 'rgba(6, 10, 20, 0.65)';
        ctx.fillRect(0, 0, w, h);
      }

      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc(45, 40, 6, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 14px monospace';
      ctx.textAlign = 'left';
      ctx.fillText('REC [1080P • 60FPS]', 60, 45);

      ctx.fillStyle = '#94a3b8';
      ctx.font = 'bold 14px monospace';
      ctx.textAlign = 'right';
      ctx.fillText(`SCENE 0${activeSceneIdx + 1}/06 • ${currentScene.title}`, w - 45, 45);

      ctx.save();
      const cardX = 140;
      const cardY = 120;
      const cardW = w - 280;
      const cardH = h - 240;

      ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
      ctx.strokeStyle = currentScene.color ? `${currentScene.color}88` : 'rgba(56, 189, 248, 0.4)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(cardX, cardY, cardW, cardH, 20);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = currentScene.color || '#38bdf8';
      ctx.font = 'bold 18px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(currentScene.badge.toUpperCase(), w / 2, cardY + 60);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 44px sans-serif';
      ctx.fillText(currentScene.title, w / 2, cardY + 130);

      ctx.fillStyle = '#cbd5e1';
      ctx.font = '22px sans-serif';
      ctx.fillText(currentScene.subtitle, w / 2, cardY + 190);

      ctx.fillStyle = 'rgba(2, 6, 23, 0.7)';
      ctx.beginPath();
      ctx.roundRect(cardX + 40, cardY + cardH - 120, cardW - 80, 80, 14);
      ctx.fill();

      ctx.fillStyle = '#38bdf8';
      ctx.font = 'italic 18px sans-serif';
      ctx.fillText(`"${currentScene.speech}"`, w / 2, cardY + cardH - 72);
      ctx.restore();

      ctx.save();
      const barCount = 36;
      const barW = 10;
      const gap = 8;
      const startX = (w - (barCount * (barW + gap))) / 2;
      const visualizerY = h - 30;

      for (let b = 0; b < barCount; b++) {
        const freq = Math.sin(time * 6 + b * 0.4) * 0.5 + 0.5;
        const barH = isPlaying ? freq * 34 + 8 : 6;
        ctx.fillStyle = '#38bdf8';
        ctx.fillRect(startX + b * (barW + gap), visualizerY - barH, barW, barH);
      }
      ctx.restore();

      ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.fillRect(0, h - 8, w, 8);
      ctx.fillStyle = '#38bdf8';
      ctx.fillRect(0, h - 8, w * progress, 8);

      if (isPlaying) {
        animFrameRef.current = requestAnimationFrame(render);
      }
    };

    render();
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [isPlaying, activeSceneIdx, progress]);

  const exportVideo = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    setIsExporting(true);
    if (onNotify) onNotify("Starting WebM Video Export... Please wait. 🎬");

    try {
      const stream = canvas.captureStream(30);
      let mimeType = 'video/webm;codecs=vp9';
      if (!MediaRecorder.isTypeSupported(mimeType)) mimeType = 'video/webm';

      const recorder = new MediaRecorder(stream, { mimeType, videoBitsPerSecond: 4000000 });
      const chunks = [];

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunks.push(e.data);
      };

      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `sankar-self-introduction.webm`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        setIsExporting(false);
        if (onNotify) onNotify("Video downloaded successfully! 🚀");
      };

      recorder.start();
      setTimeout(() => {
        recorder.stop();
      }, 7000);
    } catch (e) {
      setIsExporting(false);
      if (onNotify) onNotify("Export failed on this browser. Try Chrome/Edge.");
    }
  };

  return (
    <section className="py-24 bg-slate-950/70 border-y border-slate-800/80 relative" id="video-intro">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-sky-500/10 text-sky-400 border border-sky-500/20">
            Interactive Video Showcase
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            Video Introduction & Pitch
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Watch Sankar introduce his background, engineering arsenal, live projects, and vision in a seamless 60FPS video reel.
          </p>
        </div>

        <div className="rounded-3xl bg-slate-900/90 border border-slate-700/80 shadow-2xl overflow-hidden backdrop-blur-xl max-w-5xl mx-auto">
          <div className="px-6 py-4 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 font-mono text-xs sm:text-sm text-slate-300">
                Sankar — Self Introduction & Project Reel (Interactive)
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-500/15 text-sky-400 border border-sky-500/30">
                1080p • 60fps
              </span>
              <a
                href="video-generator.html"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 border border-indigo-500/40 transition-colors"
              >
                🎬 Video Studio ↗
              </a>
            </div>
          </div>

          <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
            <canvas ref={canvasRef} className="w-full h-full object-contain" />
          </div>

          <div className="px-6 py-4 bg-slate-950/60 border-t border-slate-800 overflow-x-auto flex items-center gap-2">
            {videoScenes.map((scene, idx) => (
              <button
                key={scene.id}
                onClick={() => handleSelectScene(idx)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeSceneIdx === idx
                    ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25'
                    : 'bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-white'
                }`}
              >
                <span>0{scene.id}. </span>
                <span>{scene.badge}</span>
              </button>
            ))}
          </div>

          <div className="p-6 bg-slate-900 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-bold text-sm shadow-md shadow-sky-500/25 flex items-center gap-2 transition-all transform hover:scale-105"
              >
                <span>{isPlaying ? '⏸ Pause' : '▶ Play Reel'}</span>
              </button>

              <button
                onClick={() => setIsVoiceEnabled(!isVoiceEnabled)}
                className={`px-4 py-2 rounded-full border text-xs sm:text-sm font-medium transition-colors ${
                  isVoiceEnabled
                    ? 'bg-slate-800 border-sky-400/50 text-sky-400'
                    : 'bg-slate-800/50 border-slate-700 text-slate-400'
                }`}
              >
                <span>{isVoiceEnabled ? '🔊 Voice: ON' : '🔇 Voice: OFF'}</span>
              </button>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={exportVideo}
                disabled={isExporting}
                className="px-4 py-2 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 hover:text-white text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-colors disabled:opacity-50"
              >
                <span>📥</span>
                <span>{isExporting ? 'Exporting...' : 'Download WebM'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 6. ABOUT COMPONENT
function About() {
  const pillars = [
    {
      icon: '💻',
      title: 'Full-Stack Web Engineering',
      desc: 'Developing resilient, high-speed, and accessible web systems using React, JavaScript, and Tailwind CSS with automated Netlify deployment pipelines.'
    },
    {
      icon: '🧠',
      title: 'Applied AI & Diagnostics',
      desc: 'Investigating real-world machine learning solutions, healthcare triage pipelines, and AI workflows tailored to underserved rural and semi-urban communities.'
    },
    {
      icon: '🌱',
      title: 'Regional Empowerment & Tech Voice',
      desc: 'Spearheading AIXplore Telugu to bring AI literacy in native Telugu and championing indigenous eco-tourism through the Mana Paderu Trails initiative.'
    }
  ];

  return (
    <section className="py-24 relative" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-sky-500/10 text-sky-400 border border-sky-500/20">
            About Sankar
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            Driven by Purpose, Powered by Code
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A developer's journey from the tribal valleys of Pedabayalu to high-impact applied AI software engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-md">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-emerald-400 opacity-30 group-hover:opacity-70 blur-xl transition-all duration-700" />
              <div className="relative rounded-3xl overflow-hidden border border-slate-700 bg-slate-900 shadow-2xl">
                <img
                  src={personalInfo.avatarPhoto}
                  alt="Sankar Professional Portrait"
                  className="w-full h-auto object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="p-6 bg-slate-900/95 border-t border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-white font-heading">{personalInfo.name}</span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-sky-500/15 text-sky-400">
                      Fellow ID: {personalInfo.fellowId}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    📍 {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-100">
              Transforming Challenges into High-Performance Digital Solutions
            </h3>

            <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
              {personalInfo.detailedBio}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {pillars.map((p, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-sky-500/40 transition-all hover:-translate-y-1 shadow-md space-y-2"
                >
                  <span className="text-3xl block">{p.icon}</span>
                  <h4 className="text-base font-bold text-white">{p.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div>
                <span className="text-slate-500 block">Current Focus</span>
                <span className="text-slate-200 font-semibold mt-0.5 block">React & Applied AI</span>
              </div>
              <div>
                <span className="text-slate-500 block">Languages</span>
                <span className="text-slate-200 font-semibold mt-0.5 block">Telugu & English</span>
              </div>
              <div>
                <span className="text-slate-500 block">Fellowship</span>
                <span className="text-sky-400 font-semibold mt-0.5 block">Aarohan AI '26</span>
              </div>
              <div>
                <span className="text-slate-500 block">Deployments</span>
                <span className="text-emerald-400 font-semibold mt-0.5 block">6 Netlify Live</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 7. FELLOWSHIP COMPONENT
function Fellowship() {
  const modules = [
    {
      title: 'Applied Generative AI & LLM Systems',
      desc: 'Developing domain-specific AI workflows, prompt engineering frameworks, and diagnostic healthcare triage prototypes for rural adoption.',
      status: 'Advanced Mastery',
      tag: 'AI Engineering'
    },
    {
      title: 'Modern Full-Stack Architecture',
      desc: 'Mastering component-driven development with React, asynchronous JavaScript APIs, responsive styling, and automated Netlify CI/CD pipelines.',
      status: 'Production Grade',
      tag: 'Web Engineering'
    },
    {
      title: 'Community Field Deployment & QA',
      desc: 'Designing user-friendly interfaces adapted for low-bandwidth rural devices, local language accessibility, and field performance validation.',
      status: 'Active Impact',
      tag: 'Field Operations'
    }
  ];

  const partners = [
    { name: 'Aarohan AI Fellowship', role: 'Flagship Fellowship Program', logo: 'images/logo-aarohan.jpg' },
    { name: 'Wadhwani Foundation', role: 'Knowledge & Skill Partner', logo: 'images/logo-wadhwani.jpg' },
    { name: 'CareerEzi', role: 'Career & Professional Readiness', logo: 'images/logo-careerezi.jpg' },
    { name: 'Fynity', role: 'Innovation Partner', logo: 'images/logo-fynity.jpg' }
  ];

  return (
    <section className="py-24 bg-slate-950/60 border-y border-slate-800/80 relative" id="fellowship">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-sky-500/10 text-sky-400 border border-sky-500/20">
            Aarohan AI Fellowship 2026
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            Nurturing Elite AI & Tech Leadership
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Selected for the prestigious fellowship at Youth Training Centre (YTC) Pedabayalu under ITDA Paderu to build next-generation regional technologists.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {modules.map((m, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/40 transition-all hover:-translate-y-1 shadow-lg space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-sky-500/15 text-sky-400">
                  {m.tag}
                </span>
                <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {m.status}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white font-heading">{m.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/50 border border-slate-800 text-center space-y-6">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">
            Fellowship Ecosystem & Institutional Partners
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
            {partners.map((p, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col items-center justify-center space-y-2 group"
              >
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-800 flex items-center justify-center p-1">
                  <img src={p.logo} alt={p.name} className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
                </div>
                <h4 className="text-sm font-semibold text-slate-200 group-hover:text-sky-400 transition-colors">{p.name}</h4>
                <p className="text-xs text-slate-500">{p.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// 8. SKILLS COMPONENT
function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skillsData.skills
    : skillsData.skills.filter(s => s.category === activeCategory);

  return (
    <section className="py-24 relative" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-sky-500/10 text-sky-400 border border-sky-500/20">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            Technical Arsenal & Capabilities
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Engineering modern web applications and applied AI pipelines with industry-standard frameworks and cloud platforms.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {skillsData.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/25 scale-105'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((s, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-sky-500/40 transition-all hover:-translate-y-1 shadow-lg space-y-4 group"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors">
                  {s.name}
                </h3>
                <span className="font-mono text-sm font-bold text-sky-400">
                  {s.level}%
                </span>
              </div>

              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 transition-all duration-1000"
                  style={{ width: `${s.level}%` }}
                />
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 9. PROJECTS COMPONENT
function Projects() {
  const [filter, setFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Projects (6)' },
    { id: 'ai-health', label: 'AI & Healthcare' },
    { id: 'tourism', label: 'Tourism & Regional' },
    { id: 'web-apps', label: 'Web Platforms' }
  ];

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  return (
    <section className="py-24 bg-slate-950/60 border-y border-slate-800/80 relative" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-sky-500/10 text-sky-400 border border-sky-500/20">
            Portfolio Showcase
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            Live Deployed Web Projects
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Real-world applications architected, developed, and deployed live on Netlify Cloud infrastructure.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  filter === tab.id
                    ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/25 scale-105'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="group rounded-3xl bg-slate-900/90 border border-slate-800/90 hover:border-sky-500/50 shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    onError={(e) => {
                      e.target.src = 'images/sankar-banner.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-slate-900/80 text-sky-400 border border-slate-700/80 backdrop-blur-md">
                      {p.categoryLabel}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 backdrop-blur-md flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      Live on Netlify
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white font-heading group-hover:text-sky-400 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs font-medium text-sky-300/80 mt-0.5">
                      {p.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {p.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {p.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-sky-500/20 hover:shadow-sky-500/40 transition-all"
                >
                  <span>Launch Live App</span>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 10. CHANNELS COMPONENT
function Channels() {
  return (
    <section className="py-24 relative" id="channels">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-sky-500/10 text-sky-400 border border-sky-500/20">
            Digital Impact & Advocacy
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            Creator Channels & Regional Advocacy
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Empowering regional youth through AI education in Telugu and championing the tribal heritage of Alluri District.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {channelsData.map((c, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800/90 hover:border-sky-500/50 shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span
                    className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white"
                    style={{ backgroundColor: `${c.color}25`, border: `1px solid ${c.color}60` }}
                  >
                    {c.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {c.stats}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  {c.name}
                </h3>

                <h4 className="text-base font-semibold text-sky-300">
                  {c.headline}
                </h4>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {c.desc}
                </p>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full text-white font-bold text-sm shadow-lg transition-all transform hover:scale-105"
                  style={{ backgroundColor: c.color }}
                >
                  <span>Visit {c.platform} ↗</span>
                </a>

                {c.videoSample && (
                  <a
                    href={c.videoSample}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold border border-slate-700 transition-colors"
                  >
                    <span>Watch Featured Content ↗</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 11. TEAM COMPONENT
function Team() {
  return (
    <section className="py-24 bg-slate-950/60 border-y border-slate-800/80 relative" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-sky-500/10 text-sky-400 border border-sky-500/20">
            Collaborative Ecosystem
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            My Collaborative Team
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Empowered by visionary mentorship from executive leadership and driving impact alongside talented cohort peers.
          </p>
        </div>

        {/* Leadership Tier */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xl">👑</span>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-100">
              Executive & Project Leadership
            </h3>
            <div className="flex-1 h-px bg-slate-800" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamData.leadership.map((lead, idx) => (
              <div
                key={idx}
                className="relative p-7 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xl space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5"
                    style={{ backgroundColor: `${lead.crownColor}20`, color: lead.crownColor, border: `1px solid ${lead.crownColor}50` }}
                  >
                    <span>👑</span>
                    <span>{lead.badge}</span>
                  </span>
                  <span className="text-xs text-slate-500 font-medium">Leadership Tier</span>
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden bg-slate-800 border-2 border-slate-700 flex items-center justify-center shrink-0">
                    {lead.avatarImg ? (
                      <img src={lead.avatarImg} alt={lead.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-xl font-bold text-slate-200">{lead.avatarText}</span>
                    )}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white font-heading">{lead.name}</h4>
                    <p className="text-xs font-semibold" style={{ color: lead.crownColor }}>
                      {lead.title}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed pt-1">
                  {lead.motto}
                </p>

                {lead.phone && (
                  <div className="pt-2 border-t border-slate-800/80">
                    <a
                      href={`tel:${lead.phone}`}
                      className="text-xs text-sky-400 hover:text-sky-300 font-mono flex items-center gap-1.5"
                    >
                      <span>📞</span>
                      <span>{lead.phone}</span>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Cohort Fellows */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xl">🚀</span>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-100">
              Aarohan Cohort Fellows & Engineers
            </h3>
            <div className="flex-1 h-px bg-slate-800" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamData.cohort.map((member, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl bg-slate-900/80 border transition-all duration-300 hover:-translate-y-1 shadow-lg flex items-center gap-4 ${
                  member.highlight
                    ? 'border-sky-500/60 bg-sky-500/5'
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="w-14 h-14 rounded-xl overflow-hidden bg-slate-800 border border-slate-700 shrink-0">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => { e.target.src = 'images/sankar-github.jpg'; }}
                  />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="text-base font-bold text-white truncate font-heading">{member.name}</h4>
                    {member.highlight && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-sky-500 text-white">
                        You
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-semibold text-sky-400 truncate">{member.role}</p>
                  <p className="text-[11px] text-slate-400 truncate">{member.spec}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// 12. CONTACT COMPONENT
function Contact({ onNotify }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      if (onNotify) onNotify("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      if (onNotify) onNotify("Message sent successfully! Sankar will respond shortly. ✉️");
    }, 1200);
  };

  return (
    <section className="py-24 relative" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-sky-500/10 text-sky-400 border border-sky-500/20">
            Let's Collaborate
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            Get in Touch with Sankar
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Whether you have an applied AI project, a full-stack opportunity, or want to discuss regional tech initiatives, let's connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white font-heading">
                Direct Contact Channels
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-sky-500/50 flex items-center gap-4 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform">
                    ✉️
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Email Address</span>
                    <span className="text-sm font-semibold text-slate-200 group-hover:text-sky-400 transition-colors">
                      {personalInfo.email}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-sky-500/50 flex items-center gap-4 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform">
                    📞
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Phone / WhatsApp</span>
                    <span className="text-sm font-semibold text-slate-200 group-hover:text-emerald-400 transition-colors">
                      {personalInfo.phone}
                    </span>
                  </div>
                </a>

                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center text-xl shrink-0">
                    📍
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Location</span>
                    <span className="text-sm font-semibold text-slate-200">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-3">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  Professional Networks
                </span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors"
                  >
                    GitHub ↗
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors"
                  >
                    LinkedIn ↗
                  </a>
                  <a
                    href={personalInfo.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-red-300 text-xs font-semibold border border-red-500/30 transition-colors"
                  >
                    AIXplore Telugu ↗
                  </a>
                  <a
                    href={personalInfo.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-pink-500/20 hover:bg-pink-500/30 text-pink-300 text-xs font-semibold border border-pink-500/30 transition-colors"
                  >
                    Mana Paderu Trails ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-6"
            >
              <h3 className="text-2xl font-bold text-white font-heading">
                Send a Direct Message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Opportunity, Collaboration, or Project Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell Sankar about your project or inquiry..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-bold text-base shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                <span>{isSubmitting ? 'Sending Message...' : 'Send Message to Sankar'}</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// 13. FOOTER COMPONENT
function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-900 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <span className="text-xl font-bold font-heading text-slate-100">
            <span className="text-sky-400">&lt;</span>Sankar<span className="text-sky-400">/&gt;</span>
          </span>
          <span className="hidden sm:inline-block text-slate-600">•</span>
          <span className="text-xs text-slate-400">
            Aarohan AI Fellow 2026 ({personalInfo.fellowId}) • ITDA Pedabayalu
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium">
          <a href="#home" className="hover:text-sky-400 transition-colors">Home</a>
          <a href="#video-intro" className="hover:text-sky-400 transition-colors">Video Intro</a>
          <a href="#about" className="hover:text-sky-400 transition-colors">About</a>
          <a href="#skills" className="hover:text-sky-400 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-sky-400 transition-colors">Projects</a>
          <a href="#team" className="hover:text-sky-400 transition-colors">Team</a>
          <a href="#contact" className="hover:text-sky-400 transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs text-slate-500">
            © {new Date().getFullYear()} Sankar. All rights reserved.
          </span>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
            title="Back to Top"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}

// 14. MAIN ROOT APP COMPONENT
function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('sankar_theme') || 'dark';
  });

  const [activeSection, setActiveSection] = useState('home');
  const [toast, setToast] = useState({ message: '', visible: false });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('sankar_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    notify(`Switched to ${next === 'dark' ? 'Dark' : 'Light'} Mode 🌓`);
  };

  const notify = (msg) => {
    setToast({ message: msg, visible: true });
    setTimeout(() => {
      setToast({ message: '', visible: false });
    }, 3500);
  };

  useEffect(() => {
    const sectionIds = ['home', 'video-intro', 'about', 'fellowship', 'skills', 'projects', 'channels', 'team', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sectionIds[i]);
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-sky-500 selection:text-white transition-colors duration-300">
      <Navbar theme={theme} onToggleTheme={toggleTheme} activeSection={activeSection} />
      <main>
        <Hero onNotify={notify} />
        <VideoIntro onNotify={notify} />
        <About />
        <Fellowship />
        <Skills />
        <Projects />
        <Channels />
        <Team />
        <Contact onNotify={notify} />
      </main>
      <Footer />
      <Toast message={toast.message} visible={toast.visible} />
    </div>
  );
}

// Mount into DOM
const rootEl = document.getElementById('root');
if (rootEl) {
  ReactDOM.createRoot(rootEl).render(<App />);
}
