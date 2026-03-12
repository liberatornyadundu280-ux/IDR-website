/**
 * Institute of Digital Risk — main.js
 * Vanilla ES6+ JavaScript
 * Sections:
 *   1. Custom Cursor
 *   2. Navbar scroll state
 *   3. Active nav link
 *   4. Mobile hamburger menu
 *   5. Scroll Reveal
 *   6. Animated counters
 *   7. Gauge bar animations
 *   8. Hero canvas network
 *   9. Text scramble
 *  10. Form submit handler
 */

(function () {
  'use strict';

  /* ── 1. CUSTOM CURSOR ─────────────────────────────────────── */
  const cursor     = document.getElementById('cursor');
  const cursorRing = document.getElementById('cursor-ring');
  let mouseX = 0, mouseY = 0;
  let ringX  = 0, ringY  = 0;
  let cursorStarted = false;

  if (window.matchMedia('(pointer:fine)').matches) {
    document.documentElement.style.cursor = 'none';
    document.body.style.cursor = 'none';

    document.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!cursorStarted) {
        cursorStarted = true;
        ringX = mouseX;
        ringY = mouseY;
        cursor.style.opacity     = '1';
        cursorRing.style.opacity = '1';
      }

      cursor.style.left = mouseX + 'px';
      cursor.style.top  = mouseY + 'px';
    }, { passive: true });

    document.addEventListener('mouseleave', () => {
      cursor.style.opacity     = '0';
      cursorRing.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
      if (cursorStarted) {
        cursor.style.opacity     = '1';
        cursorRing.style.opacity = '1';
      }
    });

    document.addEventListener('mouseover', e => {
      if (e.target.closest('a, button')) document.body.classList.add('cursor-hover');
    });

    document.addEventListener('mouseout', e => {
      if (e.target.closest('a, button')) document.body.classList.remove('cursor-hover');
    });

    (function tickRing() {
      ringX += (mouseX - ringX) * 0.1;
      ringY += (mouseY - ringY) * 0.1;
      cursorRing.style.left = ringX + 'px';
      cursorRing.style.top  = ringY + 'px';
      requestAnimationFrame(tickRing);
    })();
  }

  /* ── 2. NAVBAR SCROLL STATE ───────────────────────────────── */
  const navbar = document.getElementById('navbar');

  function onScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── 3. ACTIVE NAV LINK ON SCROLL ─────────────────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(l => {
          l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id);
        });
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(s => sectionObserver.observe(s));

  /* ── 4. MOBILE HAMBURGER ──────────────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');

  hamburger.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  document.querySelectorAll('[data-mobile-link]').forEach(el => {
    el.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  /* ── 5. SCROLL REVEAL ─────────────────────────────────────── */
  document.body.classList.add('js-ready');

  // Fallback: show all content if observer never fires
  const revealFallback = setTimeout(() => {
    document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('is-visible'));
  }, 3000);

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const delay = (parseFloat(e.target.dataset.delay || 0)) * 100;
        e.target.style.transitionDelay = delay + 'ms';
        setTimeout(() => e.target.classList.add('is-visible'), delay);
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.05 });

  document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));

  // Clear fallback once observer fires
  const firstReveal = document.querySelector('[data-reveal]');
  if (firstReveal) {
    const clearFallback = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        clearTimeout(revealFallback);
        clearFallback.disconnect();
      }
    }, { threshold: 0.05 });
    clearFallback.observe(firstReveal);
  }

  /* ── 6. ANIMATED COUNTERS ─────────────────────────────────── */
  function animateCounter(el) {
    const target   = parseInt(el.dataset.countTo, 10);
    const suffix   = el.dataset.countSuffix || '';
    const duration = 1800;
    const start    = performance.now();

    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting && e.target.dataset.countTo) {
        animateCounter(e.target);
        counterObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-count-to]').forEach(el => counterObserver.observe(el));

  /* ── 7. GAUGE BAR ANIMATIONS ──────────────────────────────── */
  const riskCard = document.querySelector('.risk-card');
  if (riskCard) {
    const gaugeObserver = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.gauge-fill').forEach(fill => {
            fill.style.width = fill.dataset.width + '%';
          });
          gaugeObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.4 });
    gaugeObserver.observe(riskCard);
  }

  /* ── 8. HERO CANVAS NETWORK ───────────────────────────────── */
  const canvas = document.getElementById('hero-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let W, H, nodes, animId;

    function resize() {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    }

    function createNodes(count) {
      return Array.from({ length: count }, () => ({
        x:  Math.random() * W,
        y:  Math.random() * H,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r:  Math.random() * 1.5 + 0.5,
      }));
    }

    function drawNetwork() {
      ctx.clearRect(0, 0, W, H);
      const MAX_DIST = 160;

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,101,0,0.55)';
        ctx.fill();
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx   = nodes[i].x - nodes[j].x;
          const dy   = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(255,101,0,${(1 - dist / MAX_DIST) * 0.18})`;
            ctx.lineWidth   = 0.8;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(drawNetwork);
    }

    function initCanvas() {
      if (animId) cancelAnimationFrame(animId);
      resize();
      nodes = createNodes(Math.min(Math.floor((W * H) / 18000), 80));
      drawNetwork();
    }

    window.addEventListener('resize', () => {
      clearTimeout(window._canvasResizeTimer);
      window._canvasResizeTimer = setTimeout(initCanvas, 200);
    }, { passive: true });

    initCanvas();
  }

  /* ── 9. TEXT SCRAMBLE ─────────────────────────────────────── */
  const scrambleEl = document.getElementById('scramble-text');
  if (scrambleEl) {
    const chars    = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const target   = scrambleEl.textContent;
    let frame      = 0;
    let resolved   = 0;

    function scramble() {
      let output = '';
      for (let i = 0; i < target.length; i++) {
        output += i < resolved
          ? target[i]
          : chars[Math.floor(Math.random() * chars.length)];
      }
      scrambleEl.textContent = output;
      frame++;
      if (frame % 3 === 0 && resolved < target.length) resolved++;
      if (resolved < target.length + 3) requestAnimationFrame(scramble);
      else scrambleEl.textContent = target;
    }

    setTimeout(() => requestAnimationFrame(scramble), 600);
  }

  /* ── 10. FORM SUBMIT ──────────────────────────────────────── */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn  = this.querySelector('.form-submit');
      const orig = btn.innerHTML;

      btn.innerHTML         = "Sent — We'll be in touch ✓";
      btn.style.background  = '#28c840';
      btn.style.borderColor = '#28c840';
      btn.disabled          = true;

      setTimeout(() => {
        btn.innerHTML         = orig;
        btn.style.background  = '';
        btn.style.borderColor = '';
        btn.disabled          = false;
        this.reset();
      }, 5000);
    });
  }

})();
