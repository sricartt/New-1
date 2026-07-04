document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Update Footer Year dynamically
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 1. SERVICE WORKER REGISTRATION (PWA)
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then(reg => console.log('PWA ServiceWorker registered with scope:', reg.scope))
        .catch(err => console.log('PWA ServiceWorker registration failed:', err));
    });
  }

  // 2. FADE IN ON VIEWPORT ENTER (INTERSECTION OBSERVER)
  const fadeElements = document.querySelectorAll('.fade-in-on-scroll');
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.05
  };

  const fadeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.getAttribute('data-delay') || '0';
        const y = el.getAttribute('data-y') || '30';
        const x = el.getAttribute('data-x') || '0';

        // Apply custom initial transition values based on attributes
        el.style.transitionDelay = `${delay}s`;
        el.style.setProperty('--tx', `${x}px`);
        el.style.setProperty('--ty', `${y}px`);

        el.classList.add('visible');
        observer.unobserve(el);
      }
    });
  }, observerOptions);

  fadeElements.forEach(el => {
    // Set custom CSS variables for custom x, y translations initially
    const y = el.getAttribute('data-y') || '30';
    const x = el.getAttribute('data-x') || '0';
    el.style.transform = `translate3d(${x}, ${y}, 0)`;
    fadeObserver.observe(el);
  });


  // 3. PORTRAIT MAGNETIC INTERACTION
  const magnetWrap = document.querySelector('.magnet-wrap');
  if (magnetWrap) {
    const strength = parseFloat(magnetWrap.getAttribute('data-strength')) || 3;
    const padding = parseFloat(magnetWrap.getAttribute('data-padding')) || 150;

    window.addEventListener('mousemove', (e) => {
      const rect = magnetWrap.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      // Check if mouse is in active padded bounds
      const inBounds = 
        e.clientX >= rect.left - padding &&
        e.clientX <= rect.right + padding &&
        e.clientY >= rect.top - padding &&
        e.clientY <= rect.bottom + padding;

      if (inBounds) {
        magnetWrap.style.transition = 'transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)';
        magnetWrap.style.transform = `translate3d(${distanceX / strength}px, ${distanceY / strength}px, 0)`;
      } else {
        magnetWrap.style.transition = 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
        magnetWrap.style.transform = 'translate3d(0, 0, 0)';
      }
    });
  }


  // 4. HORIZONTAL SCROLL MARQUEE OFFSET
  const marqueeSection = document.querySelector('.marquee-section');
  const row1 = document.querySelector('.marquee-row-1');
  const row2 = document.querySelector('.marquee-row-2');

  if (marqueeSection && row1 && row2) {
    window.addEventListener('scroll', () => {
      const rect = marqueeSection.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      
      // Calculate how far into/away from viewport the marquee container is
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.25;
      
      row1.style.transform = `translate3d(${offset - 250}px, 0, 0)`;
      row2.style.transform = `translate3d(${-(offset - 250)}px, 0, 0)`;
    }, { passive: true });
  }


  // 5. CHARACTER SCROLL-REVEAL (ABOUT TEXT)
  const revealTextEl = document.querySelector('.animated-reveal-text');
  if (revealTextEl) {
    const rawText = revealTextEl.textContent.trim().replace(/\s+/g, ' ');
    revealTextEl.innerHTML = ''; // clear original text

    // Split text into individual spans per character
    const charSpans = rawText.split('').map(char => {
      const span = document.createElement('span');
      span.className = 'char';
      if (char === ' ') {
        span.innerHTML = '&nbsp;';
      } else {
        span.textContent = char;
      }
      revealTextEl.appendChild(span);
      return span;
    });

    const handleRevealScroll = () => {
      const rect = revealTextEl.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Start reveal when element enters 85% of viewport, finish by 20%
      const startLine = viewportHeight * 0.85;
      const endLine = viewportHeight * 0.20;
      
      let progress = (startLine - rect.top) / (startLine - endLine);
      progress = Math.max(0, Math.min(1, progress));

      const totalChars = charSpans.length;
      charSpans.forEach((span, index) => {
        // Distribute the entry of characters across the scroll progress
        const startFraction = index / totalChars;
        const endFraction = Math.min(1, startFraction + 0.12); // subtle stagger duration overlap

        if (progress >= startFraction) {
          const charProg = (progress - startFraction) / (endFraction - startFraction);
          const opacity = 0.2 + Math.max(0, Math.min(1, charProg)) * 0.8;
          span.style.opacity = opacity;
        } else {
          span.style.opacity = 0.2;
        }
      });
    };

    window.addEventListener('scroll', handleRevealScroll, { passive: true });
    handleRevealScroll(); // trigger immediately
  }


  // 6. STACKING CARD SCALING TRANSFORM ON SCROLL
  const projectSection = document.getElementById('projects');
  const cards = document.querySelectorAll('.project-card');
  const containers = document.querySelectorAll('.project-card-container');

  if (projectSection && cards.length > 0) {
    const total = cards.length;

    window.addEventListener('scroll', () => {
      containers.forEach((container, index) => {
        const rect = container.getBoundingClientRect();
        const card = cards[index];
        if (!card) return;

        // Container scroll bounds inside sticky view
        const parentRect = projectSection.getBoundingClientRect();
        
        // Progress defines how far the *next* elements are overlapping or scrolling.
        // We calculate scale reduction the further the projectSection scrolls down.
        const scrollOffset = -parentRect.top;
        const scrollRange = parentRect.height - window.innerHeight;
        let progress = scrollOffset / scrollRange;
        progress = Math.max(0, Math.min(1, progress));

        // Scale factor: cards scale down as we scroll further
        // Max scale reduction per card is based on index
        const cardTargetScale = 1 - (total - 1 - index) * 0.04;
        
        // Determine individual progress based on container placement
        const entryPoint = index / total;
        let cardProgress = (progress - entryPoint) * total;
        cardProgress = Math.max(0, Math.min(1, cardProgress));

        const scale = 1 - (cardProgress * (1 - cardTargetScale));
        card.style.transform = `scale(${scale})`;
      });
    }, { passive: true });
  }
});
