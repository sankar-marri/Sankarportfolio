import React, { useState, useEffect, useRef } from 'react';
import { videoScenes, personalInfo } from '../data/portfolioData';

export default function VideoIntro({ onNotify }) {
  const [activeSceneIdx, setActiveSceneIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(true);
  const [progress, setProgress] = useState(0); // 0 to 1
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

  // Playback Timer
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

  // Canvas Drawing Loop
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

      // Dark futuristic background
      ctx.fillStyle = '#060a14';
      ctx.fillRect(0, 0, w, h);

      // Glowing radial backdrop
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

      // Sankar Poster Layer with zoom
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

      // HUD Header
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

      // Center Visual Content
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

      // Badge
      ctx.fillStyle = currentScene.color || '#38bdf8';
      ctx.font = 'bold 18px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(currentScene.badge.toUpperCase(), w / 2, cardY + 60);

      // Big Title
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 44px sans-serif';
      ctx.fillText(currentScene.title, w / 2, cardY + 130);

      // Subtitle
      ctx.fillStyle = '#cbd5e1';
      ctx.font = '22px sans-serif';
      ctx.fillText(currentScene.subtitle, w / 2, cardY + 190);

      // Subtitle Speech Box
      ctx.fillStyle = 'rgba(2, 6, 23, 0.7)';
      ctx.beginPath();
      ctx.roundRect(cardX + 40, cardY + cardH - 120, cardW - 80, 80, 14);
      ctx.fill();

      ctx.fillStyle = '#38bdf8';
      ctx.font = 'italic 18px sans-serif';
      ctx.fillText(`"${currentScene.speech}"`, w / 2, cardY + cardH - 72);
      ctx.restore();

      // Audio visualizer bars at the bottom
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

      // Scrubber line on canvas
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

  // Export video
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
        {/* Section Header */}
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

        {/* Video Player Card */}
        <div className="rounded-3xl bg-slate-900/90 border border-slate-700/80 shadow-2xl overflow-hidden backdrop-blur-xl max-w-5xl mx-auto">
          {/* Top Title Bar */}
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

          {/* Canvas Viewport */}
          <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
            <canvas ref={canvasRef} className="w-full h-full object-contain" />
          </div>

          {/* Scene Scrubber Pills */}
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

          {/* Controls Bar */}
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
