# Sankar - Professional React Portfolio Website

A modern, high-performance, responsive Single-Page Application (SPA) engineered for **Sankar** — Aarohan AI Fellow (2026 Batch, AIF26073), Full-Stack Web Developer, and Founder of **AIXplore Telugu** and **Mana Paderu Trails**.

Built with **React 18**, **Tailwind CSS**, and modern component architecture with a continuous 60FPS background video engine and interactive media tools.

---

## 🌟 Key Features & Architecture

### 1. Modern React 18 Architecture
- **Component-Driven Modular Design**:
  - `Navbar.jsx`: Glassmorphic sticky header with scroll-spy navigation, dark/light theme toggle, and mobile drawer.
  - `Hero.jsx`: Continuous 60FPS canvas background video engine, real-time sound toggle (`#hero-bg-sound-toggle`), dynamic typing effect, live metrics strip, and holographic verified fellow card.
  - `VideoIntro.jsx`: Interactive cinema video reel in React with 6 scene pills, speech synthesis narration, live audio visualizer waveform, and WebM video export.
  - `About.jsx`: Sankar's story from Pedabayalu to tech leadership, core engineering pillars, and credential specs.
  - `Fellowship.jsx`: Aarohan AI Fellowship 2026 module deep-dive with institutional partner grid (Aarohan, Wadhwani Foundation, CareerEzi, Fynity).
  - `Skills.jsx`: Interactive categorized filter tabs (All, Frontend, Backend & Systems, Applied AI & Cloud) with visual gradient level meters.
  - `Projects.jsx`: Filterable showcase of **6 live deployed projects** with verified Netlify links, category badges, and tech tags.
  - `Channels.jsx`: Regional digital advocacy cards for **AIXplore Telugu** (YouTube) and **Mana Paderu Trails** (Instagram & YouTube).
  - `Team.jsx`: **My Collaborative Team** with executive leadership cards (👑 **Dhinesh Sir [CEO]**, 👑 **Somesh Sir [HR]**, 👑 **Madhukumar [Project Lead]**) and cohort fellows (Sankar, Kavala Srinu, Koravangi MudduKrishna, Kankipati Hari Vishnu Vardhan, Pangi Aadhi Vasu, Vanthala Simhadhri).
  - `Contact.jsx`: Interactive contact form with live validation, toast feedback, and direct contact cards.
  - `Footer.jsx`: Clean footer with back-to-top button and fellowship metadata.
  - `Toast.jsx`: Smooth floating notification pills.

### 2. Dual-Execution Flexibility
- **Zero-Build In-Browser Execution**: The root `index.html` runs React 18 directly in any web browser without needing any build tools. Simply open `index.html` or upload directly to Netlify!
- **Full Vite Developer Workflow**: The `src/` directory contains standard modular JSX components, `package.json`, and `vite.config.js` ready for `npm run dev` and `npm run build`.

---

## 🚀 Quick Start & Development

### Option A: Direct In-Browser (Zero Installation)
Simply double-click or open [index.html](file:///c:/Users/pedha/Desktop/Sankar%20Portfolio/index.html) in any modern browser (Google Chrome, Microsoft Edge, Firefox, Brave, Safari).

### Option B: Local Vite Dev Server
```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build optimized production bundle
npm run build

# Preview production build
npm run preview
```

---

## 📂 Project Structure

```
Sankar Portfolio/
├── index.html                 # Main React 18 SPA (Zero-build client execution)
├── index-legacy-backup.html   # Safety backup of original vanilla HTML site
├── package.json               # Modern project configuration & dependencies
├── vite.config.js             # Vite configuration with React plugin
├── video-generator.html       # Standalone Canvas Video Generator Studio
├── README.md                  # Comprehensive documentation
├── src/
│   ├── main.jsx               # React 18 DOM mount point
│   ├── App.jsx                # Root React application component
│   ├── index.css              # Custom cyber grid, animations & styling
│   ├── react-app.jsx          # Standalone client React bundle
│   ├── data/
│   │   └── portfolioData.js   # Centralized data model for projects, skills & team
│   └── components/
│       ├── Navbar.jsx         # Navigation bar & theme switcher
│       ├── Hero.jsx           # Hero with 60FPS background video engine
│       ├── VideoIntro.jsx     # Cinema interactive player with voice & export
│       ├── About.jsx          # Narrative biography & core engineering pillars
│       ├── Fellowship.jsx     # Aarohan AI Fellowship spotlight
│       ├── Skills.jsx         # Technical arsenal with category filters
│       ├── Projects.jsx       # 6 Live deployed Netlify projects
│       ├── Channels.jsx       # AIXplore Telugu & Mana Paderu Trails
│       ├── Team.jsx           # Leadership (Dhinesh Sir, Somesh Sir, Madhu) & Cohort
│       ├── Contact.jsx        # Interactive validated contact form
│       ├── Footer.jsx         # Footer with quick links & back-to-top
│       └── Toast.jsx          # Animated interaction notifications
└── images/
    ├── sankar-banner.jpg      # Sankar cinematic banner
    ├── sankar-professional.jpg# Sankar verified portrait
    ├── sankar-github.jpg      # Sankar GitHub avatar
    ├── projects/              # Screenshots of live Netlify projects
    └── team/                  # Team avatar portraits
```

---

## 🌐 6 Verified Live Netlify Deployments
1. **Arogya Drishti**: [arogya-drishti-ai-assisted-health-car.netlify.app](https://arogya-drishti-ai-assisted-health-car.netlify.app/)
2. **Mana Paderu Trails**: [manapadtrails.netlify.app](https://manapadtrails.netlify.app/)
3. **Alluri Wonders**: [alluri-wonders143225.netlify.app/#weather](https://alluri-wonders143225.netlify.app/#weather)
4. **ASR Tourist Hub**: [asr-turist.netlify.app](https://asr-turist.netlify.app/)
5. **Nature Glass**: [nature-glass.netlify.app](https://nature-glass.netlify.app/)
6. **Thunderous Sprite**: [thunderous-sprite-7a49ec.netlify.app](https://thunderous-sprite-7a49ec.netlify.app/)

---

© 2026 Sankar. All rights reserved.
