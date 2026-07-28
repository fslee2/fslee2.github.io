const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.project-card');
const projectGrid = document.querySelector('.project-grid');
const pacCard = document.querySelector('.project-pac-act');
const oldFeatured = document.querySelector('.project-featured');
if (projectGrid && pacCard && oldFeatured && pacCard !== oldFeatured) {
  oldFeatured.classList.remove('project-featured');
  pacCard.classList.add('project-featured');
  projectGrid.prepend(pacCard);
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

cards.forEach((card, index) => {
  card.classList.add('reveal');
  card.style.setProperty('--reveal-delay', `${Math.min(index * 70, 420)}ms`);
  revealObserver.observe(card);
});

filters.forEach((button) => {
  button.addEventListener('click', () => {
    filters.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    cards.forEach((card) => {
      const visible = card.dataset.visibility !== 'hidden' && (filter === 'all' || card.dataset.category.includes(filter));
      card.style.display = visible ? '' : 'none';
      if (visible) requestAnimationFrame(() => card.classList.add('is-visible'));
    });
  });
});
