const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.project-card');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const projectCount = document.querySelector('[data-filter="all"] span');

if (projectCount) {
  projectCount.textContent = [...cards].filter((card) => card.dataset.visibility !== 'hidden').length;
}

function applyFilter(filter) {
  cards.forEach((card) => {
    const categories = (card.dataset.category || '').split(' ');
    const visible = card.dataset.visibility !== 'hidden'
      && (filter === 'all' || categories.includes(filter));
    card.hidden = !visible;
    if (visible) requestAnimationFrame(() => card.classList.add('is-visible'));
  });
}

filters.forEach((button) => {
  button.setAttribute('aria-pressed', String(button.classList.contains('active')));
  button.addEventListener('click', () => {
    filters.forEach((item) => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    applyFilter(button.dataset.filter);
  });
});

if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  cards.forEach((card, index) => {
    card.classList.add('reveal');
    card.style.setProperty('--reveal-delay', `${Math.min(index * 50, 250)}ms`);
    observer.observe(card);
  });
}

const heroPreview = document.getElementById('hero-preview');
if (heroPreview) {
  const respectMotionPreference = () => {
    if (reducedMotion.matches) {
      heroPreview.pause();
      heroPreview.removeAttribute('autoplay');
    }
  };
  respectMotionPreference();
  reducedMotion.addEventListener('change', respectMotionPreference);
}
