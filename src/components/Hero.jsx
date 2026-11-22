import React, { useState, useEffect, useRef } from 'react';
import { personalInfo, metrics, typingPhrases, videoScenes } from '../data/portfolioData';

export default function Hero({ onNotify }) {
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

  // Audio Synth initialization
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
    } catch (e) {
      console.warn('Web Audio not supported', e);
    }
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

  // Toggle Sound
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

      // Background rich nebula
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

      // Subtle 3D perspective cyber grid
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

      // Sankar's banner with Ken Burns pan and zoom
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

      // Floating particles
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

      // Ambient Scene Card
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

      // Live tag
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

      // Card progress bar
      ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.fillRect(cardX + 35, cardY + cardH - 30, cardW - 70, 6);
      ctx.fillStyle = curScene.color || '#38bdf8';
      ctx.fillRect(cardX + 35, cardY + cardH - 30, (cardW - 70) * sceneProgress, 6);
      ctx.restore();

      // Top HUD Watermark
      ctx.save();
      ctx.fillStyle = 'rgba(56, 189, 248, 0.75)';
      ctx.font = '600 14px monospace';
      ctx.textAlign = 'left';
      ctx.fillText(`[AUTO-PLAYING SANKAR VIDEO INTRODUCTION • 1080P 60FPS]`, 50, 45);
      ctx.restore();

      // Bottom Audio Waveform
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
      {/* 60FPS Background Video Canvas */}
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
          {/* Left Column: Hero Text & Pitch */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Fellowship Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Aarohan AI Fellow 2026 • ITDA Pedabayalu</span>
              <span className="opacity-40">•</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Video Intro Live
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold font-heading text-slate-100 tracking-tight leading-none">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400">Sankar</span>
            </h1>

            {/* Dynamic Typing Title */}
            <div className="flex items-center gap-2 text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-200 min-h-[40px]">
              <span className="text-slate-400 font-normal">I am a</span>
              <span className="text-sky-400 font-mono underline decoration-sky-500/40 underline-offset-4">
                {typedText}
              </span>
              <span className="inline-block w-0.5 h-7 bg-sky-400 animate-pulse" />
            </div>

            {/* Summary Bio */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* CTA Buttons */}
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

              {/* Sound Toggle Button */}
              <button
                onClick={toggleSound}
                className={`inline-flex items-center gap-2 px-4 py-3 rounded-full text-sm font-semibold border transition-all ${
                  isSoundActive
                    ? 'bg-emerald-500/20 border-emerald-400 text-emerald-400 shadow-lg shadow-emerald-500/20'
                    : 'bg-slate-800/70 border-slate-700 text-slate-300 hover:text-white hover:border-slate-600'
                }`}
                title="Toggle Background Audio & Speech"
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

            {/* Social Quick Icons */}
            <div className="flex items-center gap-4 pt-3 text-slate-400 text-sm">
              <span className="font-medium text-slate-500">Connect:</span>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-colors" title="GitHub">
                GitHub ↗
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-colors" title="LinkedIn">
                LinkedIn ↗
              </a>
              <a href={personalInfo.youtube} target="_blank" rel="noreferrer" className="hover:text-red-400 transition-colors" title="AIXplore Telugu YouTube">
                YouTube ↗
              </a>
              <a href={personalInfo.instagram} target="_blank" rel="noreferrer" className="hover:text-pink-400 transition-colors" title="Mana Paderu Trails Instagram">
                Instagram ↗
              </a>
            </div>
          </div>

          {/* Right Column: Sankar Profile Holographic Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-md">
              {/* Glowing Aura */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 opacity-30 group-hover:opacity-75 blur-xl transition-all duration-700" />

              {/* Card Container */}
              <div className="relative rounded-3xl bg-slate-900/90 border border-slate-700/80 p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
                {/* Photo & Badge */}
                <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-sky-400/40 shadow-inner group">
                  <img
                    src={personalInfo.avatarPhoto}
                    alt="Sankar - Full-Stack Developer & AI Fellow"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                  {/* Corner Badge */}
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

                {/* Quick Credentials */}
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

                {/* Motto */}
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
