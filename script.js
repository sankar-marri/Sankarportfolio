/**
 * SANKAR - PORTFOLIO INTERACTIVE LOGIC
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initTypingEffect();
  initCounters();
  initProjectFilter();
  initMobileMenu();
  initScrollSpy();
  initSpeedometerAnimation();
  initCardClicks();
  initHeroBackgroundVideo();
  initScrollProgress();
  initAmbientConstellation();
  initCustomCursor();
  init3DCardTilt();
  initAudioEffects();
  initDynamicHUD();
  updateCopyrightYear();
});

/* ==========================================================================
   1. Theme Management (Dark / Light Mode)
   ========================================================================== */
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('sankar_portfolio_theme') || 'dark';

  document.documentElement.setAttribute('data-theme', savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('sankar_portfolio_theme', nextTheme);
      showToast(`Switched to ${nextTheme === 'dark' ? 'Dark' : 'Light'} Mode`);
    });
  }
}

/* ==========================================================================
   2. Typing Effect in Hero
   ========================================================================== */
function initTypingEffect() {
  const typingElement = document.getElementById('typing-text');
  if (!typingElement) return;

  const roles = [
    'Aarohan AI Fellow (2026)',
    'Full-Stack Web Developer',
    'Creator @ AIXplore Telugu',
    'Tech Lead & Innovator',
    'Founder @ Mana Paderu Trails'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 110;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      // Pause at complete word
      typingSpeed = 1800;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 400;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* ==========================================================================
   3. Animated Metrics Counter
   ========================================================================== */
function initCounters() {
  const counters = document.querySelectorAll('.metric-number');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counters.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          const duration = 1600; // ms
          const stepTime = 25;
          const steps = duration / stepTime;
          const increment = target / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              counter.textContent = target;
              clearInterval(timer);
            } else {
              counter.textContent = Math.ceil(current);
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.4 });

  const metricsGrid = document.querySelector('.metrics-grid');
  if (metricsGrid) {
    observer.observe(metricsGrid);
  }
}

/* ==========================================================================
   4. Projects Filter
   ========================================================================== */
function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });
    });
  });
}

/* ==========================================================================
   5. Mobile Menu Toggle
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-item');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    // Close menu when any nav link is tapped
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }
}

/* ==========================================================================
   6. Scrollspy & Sticky Navbar
   ========================================================================== */
function initScrollSpy() {
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-item');

  window.addEventListener('scroll', () => {
    // Add shadow when scrolled
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Highlight active link
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   7. Copy to Clipboard Utility
   ========================================================================== */
function copyToClipboard(text, btnElement) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      triggerCopyFeedback(btnElement, text);
    }).catch(() => {
      fallbackCopy(text, btnElement);
    });
  } else {
    fallbackCopy(text, btnElement);
  }
}

function fallbackCopy(text, btnElement) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-999999px";
  textArea.style.top = "-999999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    triggerCopyFeedback(btnElement, text);
  } catch (err) {
    showToast("Failed to copy");
  }
  document.body.removeChild(textArea);
}

function triggerCopyFeedback(btnElement, text) {
  const originalText = btnElement ? btnElement.textContent : '';
  if (btnElement) {
    btnElement.textContent = 'Copied!';
    setTimeout(() => {
      btnElement.textContent = originalText;
    }, 2000);
  }
  showToast(`Copied to clipboard: ${text}`);
}

/* ==========================================================================
   8. Contact Form Handling
   ========================================================================== */
function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const subject = form.subject.value;
  const message = form.message.value;

  const mailtoUrl = `mailto:marrisankar24@gmail.com?subject=${encodeURIComponent(
    `[Portfolio Inquiry] ${subject} - From ${name}`
  )}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  )}`;

  // Open default mail client
  window.location.href = mailtoUrl;

  showToast('Opening your email client to send...');
  form.reset();
}

/* ==========================================================================
   9. Toast Notification System
   ========================================================================== */
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

/* ==========================================================================
   10. Dynamic Year
   ========================================================================== */
function updateCopyrightYear() {
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

/* ==========================================================================
   11. Speedometer Needle & Arc Sweep Animation on Scroll
   ========================================================================== */
function initSpeedometerAnimation() {
  const skillsSection = document.getElementById('skills');
  if (!skillsSection) return;

  const needles = document.querySelectorAll('.speedo-needle');
  const progresses = document.querySelectorAll('.speedo-progress');

  // Store target values from style attribute
  const targets = [];
  needles.forEach((needle, idx) => {
    const progress = progresses[idx];
    const targetRotate = needle.style.transform;
    const targetOffset = progress ? progress.style.strokeDashoffset : '0';

    targets.push({
      needle,
      progress,
      targetRotate,
      targetOffset
    });

    // Reset initially to zero state
    needle.style.transform = 'rotate(-90deg)';
    if (progress) progress.style.strokeDashoffset = '163.36';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        targets.forEach((item, i) => {
          setTimeout(() => {
            if (item.needle) item.needle.style.transform = item.targetRotate;
            if (item.progress) item.progress.style.strokeDashoffset = item.targetOffset;
          }, i * 45);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  observer.observe(skillsSection);
}

/* ==========================================================================
   10. Interactive Card Click Navigation
   ========================================================================== */
function initCardClicks() {
  // Channel Cards: Click anywhere opens the official channel while respecting inner specific anchors
  document.querySelectorAll('.channel-card[data-card-link]').forEach(card => {
    card.addEventListener('click', (e) => {
      // If user clicked directly on or inside an anchor (e.g. featured video, instagram, facebook pill, or button)
      if (e.target.closest('a') || e.target.closest('button')) {
        return;
      }
      const targetUrl = card.getAttribute('data-card-link');
      if (targetUrl) {
        window.open(targetUrl, '_blank', 'noopener,noreferrer');
      }
    });
  });
}

/* ==========================================================================
   Hero Background Video Introduction Animation Engine
   Plays Sankar's Self-Introduction & Project Showcase continuously in the background
   ========================================================================== */
function initHeroBackgroundVideo() {
  const canvas = document.getElementById('hero-bg-video-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const heroSection = document.getElementById('home');
  const soundToggleBtn = document.getElementById('hero-bg-sound-toggle');
  const soundIcon = document.getElementById('hero-sound-icon');
  const soundText = document.getElementById('hero-sound-text');

  canvas.width = 1920;
  canvas.height = 1080;
  const w = 1920;
  const h = 1080;

  // Sankar's professional poster image
  const posterImg = new Image();
  let posterLoaded = false;
  posterImg.onload = () => { posterLoaded = true; };
  posterImg.src = 'images/sankar-banner.jpg';

  // 6 Continuous Video Introduction Story Scenes
  const scenes = [
    {
      title: 'AAROHAN AI FELLOW 2026',
      sub: 'ITDA Pedabayalu • Alluri Sitharama Raju District',
      name: 'SANKAR',
      tagline: 'Driving Rural Transformation Through Applied Artificial Intelligence',
      speech: 'Hi, I am Sankar, Aarohan AI Fellow 2026 at ITDA Pedabayalu, Alluri Sitharama Raju District.',
      duration: 6.5,
      color: '#38bdf8'
    },
    {
      title: 'TECHNICAL ARSENAL',
      sub: 'Modern Full-Stack Development & Applied AI',
      name: 'REACT.JS • JAVASCRIPT • PYTHON • TAILWIND',
      tagline: 'Building High-Performance, Scalable Web Systems & AI Solutions',
      speech: 'My technical arsenal spans React, modern JavaScript, Python, Tailwind CSS, and Applied AI.',
      duration: 6.0,
      color: '#818cf8'
    },
    {
      title: 'LIVE DEPLOYED PROJECTS',
      sub: '6 Real-World Applications Serving Regional Communities',
      name: 'AROGYA DRISHTI • MANA PADERU TRAILS • ALLURI WONDERS',
      tagline: 'AI Symptom Triage, Indigenous Eco-Tourism & Weather Telemetry',
      speech: 'I have developed and deployed six real-world web applications live on Netlify.',
      duration: 6.5,
      color: '#10b981'
    },
    {
      title: 'DIGITAL ADVOCACY & CREATION',
      sub: 'Educating in Telugu & Documenting Regional Heritage',
      name: 'AIXPLORE TELUGU • MANA PADERU TRAILS',
      tagline: 'Regional AI Education & Indigenous Community Empowerment',
      speech: 'Through AIXplore Telugu and Mana Paderu Trails, I educate regional youth and champion tribal heritage.',
      duration: 6.0,
      color: '#f43f5e'
    },
    {
      title: 'COLLABORATIVE LEADERSHIP',
      sub: 'Mentored by Dhinesh Sir & Somesh Sir',
      name: 'COLLABORATING FOR REGIONAL EXCELLENCE',
      tagline: 'Cross-functional teamwork with Aarohan leadership and peers',
      speech: 'Proud to collaborate with visionary leaders Dhinesh sir and Somesh sir, and fellow teammates.',
      duration: 6.0,
      color: '#38bdf8'
    },
    {
      title: 'OPEN TO OPPORTUNITIES',
      sub: 'Full-Stack Developer • Applied AI Engineer',
      name: 'READY TO BUILD, LEAD & INNOVATE',
      tagline: 'Passionate about crafting impactful software that makes a real difference',
      speech: 'I am Sankar. Ready to build, innovate, and contribute to cutting-edge tech teams.',
      duration: 6.5,
      color: '#a855f7'
    }
  ];

  let currentSceneIdx = 0;
  let sceneProgress = 0; // 0 to 1
  let totalTime = 0;
  let isSoundActive = false;
  let animId = null;
  let isInView = true;

  // Web Audio Synth for ambient background chimes
  let audioCtx = null;
  let synthGain = null;

  function initAudio() {
    if (audioCtx) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
      synthGain = audioCtx.createGain();
      synthGain.gain.setValueAtTime(0.045, audioCtx.currentTime);
      synthGain.connect(audioCtx.destination);
    } catch (e) {
      console.warn('Hero background Web Audio not available', e);
    }
  }

  function playSynthChord(freq) {
    if (!audioCtx || !isSoundActive) return;
    try {
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      const osc = audioCtx.createOscillator();
      const noteGain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      noteGain.gain.setValueAtTime(0.001, audioCtx.currentTime);
      noteGain.gain.exponentialRampToValueAtTime(0.035, audioCtx.currentTime + 0.3);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 3.0);

      osc.connect(noteGain);
      noteGain.connect(synthGain);

      osc.start();
      osc.stop(audioCtx.currentTime + 3.1);
    } catch (e) {}
  }

  const chords = [261.63, 329.63, 392.00, 523.25, 440.00, 349.23];

  function speakCurrentScene() {
    return;
  }

  // Sound toggle button click handler
  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      isSoundActive = !isSoundActive;

      if (isSoundActive) {
        initAudio();
        if (audioCtx && audioCtx.state === 'suspended') {
          audioCtx.resume();
        }
        soundToggleBtn.classList.add('active');
        if (soundIcon) soundIcon.textContent = '🔊';
        if (soundText) soundText.textContent = 'Sound: ON';
        playSynthChord(chords[currentSceneIdx % chords.length]);
        speakCurrentScene();
        showToast('Background Video Audio: ON');
      } else {
        soundToggleBtn.classList.remove('active');
        if (soundIcon) soundIcon.textContent = '🔇';
        if (soundText) soundText.textContent = 'Sound: OFF';
        if ('speechSynthesis' in window) {
          window.speechSynthesis.cancel();
        }
        showToast('Background Video Audio: Muted');
      }
    });
  }

  // Floating ambient cyber tags and particles
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

  let lastTimestamp = performance.now();

  function drawFrame(now) {
    if (!isInView) {
      animId = requestAnimationFrame(drawFrame);
      return;
    }

    const dt = Math.min((now - lastTimestamp) / 1000, 0.1);
    lastTimestamp = now;
    totalTime += dt;

    // Advance scene
    const curScene = scenes[currentSceneIdx];
    sceneProgress += dt / curScene.duration;

    if (sceneProgress >= 1) {
      sceneProgress = 0;
      currentSceneIdx = (currentSceneIdx + 1) % scenes.length;
      if (isSoundActive) {
        playSynthChord(chords[currentSceneIdx % chords.length]);
        speakCurrentScene();
      }
    }

    // Clear background with deep rich cyber nebula
    ctx.fillStyle = '#060913';
    ctx.fillRect(0, 0, w, h);

    // Dynamic glowing nebula orbs
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

    // Subtle 3D perspective cyber grid at the bottom
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

    // Sankar's portrait / banner with Ken Burns cinematic pan-and-zoom
    if (posterLoaded) {
      ctx.save();
      const zoom = 1.0 + (sceneProgress * 0.06);
      const panX = Math.sin(totalTime * 0.15) * 25;
      const panY = Math.cos(totalTime * 0.12) * 15;

      ctx.translate(w / 2 + panX, h / 2 + panY);
      ctx.scale(zoom, zoom);
      ctx.globalAlpha = 0.48; // Subtle background layer so hero text stays readable
      ctx.drawImage(posterImg, -w / 2, -h / 2, w, h);
      ctx.restore();
    }

    // Draw floating particles & tech tags
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;

      // Draw particle dot
      ctx.fillStyle = `rgba(56, 189, 248, ${p.alpha})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();

      // Draw floating code tag if present
      if (p.tag) {
        ctx.save();
        ctx.fillStyle = 'rgba(15, 23, 42, 0.55)';
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.22)';
        ctx.lineWidth = 1;
        ctx.font = '12px "Space Grotesk", monospace';
        const tagWidth = ctx.measureText(p.tag).width + 16;
        ctx.beginPath();
        ctx.roundRect(p.x - tagWidth / 2, p.y - 18, tagWidth, 22, 6);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = `rgba(186, 230, 253, ${p.alpha * 1.6})`;
        ctx.textAlign = 'center';
        ctx.fillText(p.tag, p.x, p.y - 4);
        ctx.restore();
      }
    });

    // Scene transition overlay (crossfade alpha)
    const fadeAlpha = sceneProgress < 0.15
      ? sceneProgress / 0.15
      : sceneProgress > 0.85
      ? (1 - sceneProgress) / 0.15
      : 1;

    // Cinematic Video Introduction Watermark / Scene Card in Background (Right side)
    ctx.save();
    ctx.globalAlpha = Math.min(1, fadeAlpha * 0.85);

    // Ambient floating video card on the right half of canvas
    const cardX = w * 0.58;
    const cardY = h * 0.22;
    const cardW = 680;
    const cardH = 340;

    // Card background glow & frosted glass
    ctx.fillStyle = 'rgba(10, 16, 32, 0.72)';
    ctx.strokeStyle = curScene.color ? `${curScene.color}66` : 'rgba(56, 189, 248, 0.4)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(cardX, cardY, cardW, cardH, 20);
    ctx.fill();
    ctx.stroke();

    // Live Video Tag inside card
    ctx.fillStyle = 'rgba(239, 68, 68, 0.9)';
    ctx.beginPath();
    ctx.arc(cardX + 35, cardY + 38, 6, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#f87171';
    ctx.font = 'bold 13px "Space Grotesk", sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('LIVE VIDEO INTRODUCTION REEL', cardX + 50, cardY + 43);

    // Scene indicator
    ctx.fillStyle = '#94a3b8';
    ctx.font = '600 13px "Space Grotesk", sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText(`SCENE 0${currentSceneIdx + 1}/06`, cardX + cardW - 30, cardY + 43);

    // Scene Title
    ctx.fillStyle = curScene.color || '#38bdf8';
    ctx.font = 'bold 18px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(curScene.title, cardX + 35, cardY + 95);

    // Main highlight headline
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 32px "Space Grotesk", sans-serif';
    ctx.fillText(curScene.name, cardX + 35, cardY + 145, cardW - 70);

    // Subtitle & Tagline
    ctx.fillStyle = '#cbd5e1';
    ctx.font = '500 18px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(curScene.sub, cardX + 35, cardY + 195, cardW - 70);

    ctx.fillStyle = '#94a3b8';
    ctx.font = 'italic 16px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(`"${curScene.tagline}"`, cardX + 35, cardY + 245, cardW - 70);

    // Scene progress indicator bar inside card
    ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
    ctx.fillRect(cardX + 35, cardY + cardH - 30, cardW - 70, 6);
    ctx.fillStyle = curScene.color || '#38bdf8';
    ctx.fillRect(cardX + 35, cardY + cardH - 30, (cardW - 70) * sceneProgress, 6);

    ctx.restore();

    // Top-Left Global Video HUD watermark
    ctx.save();
    ctx.fillStyle = 'rgba(56, 189, 248, 0.75)';
    ctx.font = '600 14px "Space Grotesk", monospace';
    ctx.textAlign = 'left';
    ctx.fillText(`[AUTO-PLAYING SANKAR VIDEO INTRODUCTION • 1080P 60FPS]`, 50, 45);
    ctx.restore();

    // Bottom Audio Visualizer waveform bars
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

    animId = requestAnimationFrame(drawFrame);
  }

  // Intersection Observer to pause when scrolled out of hero view
  if ('IntersectionObserver' in window && heroSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isInView = entry.isIntersecting;
        if (!isInView && isSoundActive) {
          if ('speechSynthesis' in window) {
            window.speechSynthesis.pause();
          }
        } else if (isInView && isSoundActive) {
          if ('speechSynthesis' in window && window.speechSynthesis.paused) {
            window.speechSynthesis.resume();
          }
        }
      });
    }, { threshold: 0.1 });
    observer.observe(heroSection);
  }

  // Page visibility change handler
  document.addEventListener('visibilitychange', () => {
    isInView = !document.hidden;
    if (document.hidden && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  });

  // Start the background animation loop
  animId = requestAnimationFrame(drawFrame);
}



/* ==========================================================================
   DYNAMIC INTERACTIVE ENGINE LOGIC
   ========================================================================== */

// 1. Top Scroll Progress Line
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress-line');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = `${Math.min(100, Math.max(0, scrollPercent))}%`;
  }, { passive: true });
}

// 2. Interactive Background Constellation Canvas
function initAmbientConstellation() {
  const canvas = document.getElementById('ambient-constellation-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let w = (canvas.width = window.innerWidth);
  let h = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }, { passive: true });

  const particleCount = Math.min(65, Math.floor((w * h) / 22000));
  const particles = Array.from({ length: particleCount }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5,
    r: Math.random() * 2 + 1,
    alpha: Math.random() * 0.45 + 0.2
  }));

  let mouse = { x: -1000, y: -1000 };
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }, { passive: true });

  let isPageVisible = true;
  document.addEventListener('visibilitychange', () => {
    isPageVisible = !document.hidden;
  });

  function render() {
    if (!isPageVisible) {
      requestAnimationFrame(render);
      return;
    }

    ctx.clearRect(0, 0, w, h);

    // Update & draw particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;

      // Mouse repulsion
      const dxm = p.x - mouse.x;
      const dym = p.y - mouse.y;
      const distM = Math.sqrt(dxm * dxm + dym * dym);
      if (distM < 140) {
        const force = (140 - distM) / 140;
        p.x += (dxm / distM) * force * 2.5;
        p.y += (dym / distM) * force * 2.5;
      }

      ctx.fillStyle = `rgba(56, 189, 248, ${p.alpha})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();

      // Connect nearby particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          const lineAlpha = (1 - dist / 110) * 0.22;
          ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

// 3. Interactive Cyber Cursor & Kinetic Lerp Ring
function initCustomCursor() {
  const dot = document.getElementById('cyber-cursor-dot');
  const ring = document.getElementById('cyber-cursor-ring');
  if (!dot || !ring) return;

  let mouseX = -100;
  let mouseY = -100;
  let ringX = -100;
  let ringY = -100;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  }, { passive: true });

  function lerpRing() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
    requestAnimationFrame(lerpRing);
  }
  requestAnimationFrame(lerpRing);

  // Hover expansion on interactive elements
  const hoverSelectors = 'a, button, input, textarea, .project-card, .team-card, .team-lead-card, .filter-btn, .scene-pill, .btn';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(hoverSelectors)) {
      ring.classList.add('cursor-hover');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(hoverSelectors)) {
      ring.classList.remove('cursor-hover');
    }
  });
}

// 4. Interactive 3D Card Tilt Physics with Specular Glare
function init3DCardTilt() {
  const tiltCards = document.querySelectorAll(
    '.project-card, .team-card, .team-lead-card, .pillar-card, .hero-visual, .metric-card'
  );

  tiltCards.forEach((card) => {
    let glare = card.querySelector('.card-specular-glare');
    if (!glare) {
      glare = document.createElement('div');
      glare.className = 'card-specular-glare';
      card.style.position = 'relative';
      card.appendChild(glare);
    }

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const normX = x / rect.width;
      const normY = y / rect.height;

      const rotX = (normY - 0.5) * -14;
      const rotY = (normX - 0.5) * 14;

      card.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale3d(1.025, 1.025, 1.025)`;

      glare.style.opacity = '1';
      glare.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(56, 189, 248, 0.2) 0%, transparent 65%)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      glare.style.opacity = '0';
    });
  });
}

// 5. Futuristic Web Audio Sound FX Engine
let soundFxEnabled = true;
let sfxAudioCtx = null;

function playSfx(type) {
  if (!soundFxEnabled) return;
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!sfxAudioCtx) sfxAudioCtx = new AudioCtx();
    if (sfxAudioCtx.state === 'suspended') sfxAudioCtx.resume();

    const now = sfxAudioCtx.currentTime;
    const osc = sfxAudioCtx.createOscillator();
    const gain = sfxAudioCtx.createGain();

    if (type === 'hover') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, now);
      gain.gain.setValueAtTime(0.015, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);
      osc.connect(gain);
      gain.connect(sfxAudioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.045);
    } else if (type === 'click') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(587.33, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);
      osc.connect(gain);
      gain.connect(sfxAudioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.13);
    }
  } catch (e) {}
}

function initAudioEffects() {
  document.querySelectorAll('a, button, .filter-btn, .scene-pill').forEach((el) => {
    el.addEventListener('mouseenter', () => playSfx('hover'));
    el.addEventListener('click', () => playSfx('click'));
  });
}

// 6. Live Dynamic System HUD
function initDynamicHUD() {
  const hud = document.getElementById('dynamic-system-hud');
  const target = document.getElementById('hud-section-tracker');
  if (!hud) return;

  hud.addEventListener('click', () => {
    soundFxEnabled = !soundFxEnabled;
    showToast(soundFxEnabled ? 'Dynamic Sound Effects: ACTIVE 🔊' : 'Dynamic Sound Effects: MUTED 🔇');
  });

  const sections = ['home', 'about', 'fellowship', 'skills', 'projects', 'channels', 'team', 'contact'];
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 250;
    for (let i = sections.length - 1; i >= 0; i--) {
      const sec = document.getElementById(sections[i]);
      if (sec && sec.offsetTop <= scrollPos) {
        if (target) target.textContent = sections[i].toUpperCase().replace('-', ' ');
        break;
      }
    }
  }, { passive: true });
}
