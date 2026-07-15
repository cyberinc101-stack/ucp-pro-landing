// === NAV SCROLL EFFECT ===
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    nav.style.borderBottomColor = 'rgba(245,166,35,0.15)';
  } else {
    nav.style.borderBottomColor = 'rgba(255,255,255,0.06)';
  }
});

// === SCROLL REVEAL ===
const revealEls = document.querySelectorAll('.feat-card, .showcase-inner, .deep-cols, .conv-chip, .cta-inner');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = `opacity 0.5s ease ${(i % 8) * 0.06}s, transform 0.5s ease ${(i % 8) * 0.06}s`;
  observer.observe(el);
});

// === TICKER PAUSE ON HOVER ===
const ticker = document.querySelector('.ticker-inner');
const tickerWrap = document.querySelector('.ticker-wrap');
if (ticker && tickerWrap) {
  tickerWrap.addEventListener('mouseenter', () => {
    ticker.style.animationPlayState = 'paused';
  });
  tickerWrap.addEventListener('mouseleave', () => {
    ticker.style.animationPlayState = 'running';
  });
}

// === SMOOTH NAV LINK SCROLL ===
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
