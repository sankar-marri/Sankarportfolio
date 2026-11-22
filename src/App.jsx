import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoIntro from './components/VideoIntro';
import About from './components/About';
import Fellowship from './components/Fellowship';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Channels from './components/Channels';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('sankar_theme') || 'dark';
  });

  const [activeSection, setActiveSection] = useState('home');
  const [toast, setToast] = useState({ message: '', visible: false });

  // Theme Sync
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

  // Scroll Spy
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
