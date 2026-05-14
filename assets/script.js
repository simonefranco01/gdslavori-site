/* ============================================
   GDS LAVORI — Interactive Scripts
   ============================================ */

(function() {
  'use strict';

  /* ------------ Navbar scroll state ------------ */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const onScroll = () => {
      if (window.scrollY > 30) navbar.classList.add('scrolled');
      else navbar.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ------------ Mobile nav toggle ------------ */
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('open');
      document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ------------ Reveal on scroll ------------ */
  const reveals = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && reveals.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('is-visible'));
  }

  /* ------------ Counter animation ------------ */
  const counters = document.querySelectorAll('[data-counter]');
  const animateCounter = (el) => {
    const target = parseFloat(el.dataset.counter);
    const duration = 1800;
    const start = performance.now();
    const update = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;
      el.textContent = target % 1 === 0 ? Math.floor(value) : value.toFixed(1);
      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = target % 1 === 0 ? target : target.toFixed(1);
    };
    requestAnimationFrame(update);
  };
  if ('IntersectionObserver' in window && counters.length) {
    const co = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          co.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(el => co.observe(el));
  }

  /* ------------ Gallery filtering ------------ */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  if (filterBtns.length && galleryItems.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        galleryItems.forEach((item, i) => {
          const matches = filter === 'all' || item.dataset.cat === filter;
          if (matches) {
            item.style.display = '';
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            setTimeout(() => {
              item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
              item.style.opacity = '1';
              item.style.transform = 'translateY(0)';
            }, 50 + i * 40);
          } else {
            item.style.transition = 'opacity 0.3s ease';
            item.style.opacity = '0';
            setTimeout(() => { item.style.display = 'none'; }, 300);
          }
        });
      });
    });
  }

  /* ------------ Contact form (Formspree) ------------ */
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const status = form.querySelector('.form-status');
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnHTML = submitBtn.innerHTML;

      const privacy = form.querySelector('#privacy');
      if (privacy && !privacy.checked) {
        status.className = 'form-status error';
        status.textContent = '> ERRORE: Devi accettare la privacy policy per inviare il messaggio.';
        return;
      }

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>INVIO IN CORSO...</span>';
      status.className = 'form-status';
      status.textContent = '';

      const data = new FormData(form);
      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: data,
          headers: { 'Accept': 'application/json' }
        });
        if (response.ok) {
          status.className = 'form-status success';
          status.textContent = '> MESSAGGIO INVIATO. Ti ricontatteremo entro 24 ore lavorative.';
          form.reset();
        } else {
          const result = await response.json().catch(() => ({}));
          throw new Error(result.error || 'Invio fallito');
        }
      } catch (err) {
        status.className = 'form-status error';
        status.textContent = '> ERRORE: Impossibile inviare il messaggio. Contattaci telefonicamente al +39 347 9053103.';
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHTML;
      }
    });
  }

  /* ------------ Year in footer ------------ */
  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  /* ------------ Smooth scroll for internal anchors ------------ */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href === '#' || href.length < 2) return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
