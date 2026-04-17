// ============================================================
// QUARTZ MØLLE — MAIN JS
// ============================================================

// ── NAV SCROLL ──
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

// ── MOBILE MENU ──
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
if (burger && mobileMenu) {
  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

// ── VIDEO CROSSFADE ON SCROLL ──
function initVideoFade() {
  const sections = document.querySelectorAll('.video-section');
  if (!sections.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const vid = entry.target.querySelector('.video-bg');
      if (!vid) return;
      if (entry.isIntersecting) {
        vid.play().catch(() => {});
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(s => observer.observe(s));

  // Crossfade effect using scroll position
  window.addEventListener('scroll', () => {
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;

      const distFromCenter = Math.abs(rect.top + rect.height / 2 - vh / 2);
      const maxDist = vh;
      const opacity = Math.max(0, 1 - (distFromCenter / maxDist) * 0.6);

      section.style.opacity = opacity;
    });
  }, { passive: true });
}

// ── HOMEPAGE HIGHLIGHTS GRID ──
// Only shows Bestseller badge. "Den gode gamle" badge is removed.
function renderHighlights() {
  const grid = document.getElementById('highlightsGrid');
  if (!grid || typeof BESTSELLERS === 'undefined') return;

  grid.innerHTML = BESTSELLERS.map(p => {
    const img = p.weights[0].image;
    const price = p.weights[0].price;
    const badgeHTML = p.badge === 'bestseller'
      ? `<span class="product-card-badge badge-bestseller">Bestseller</span>`
      : '';

    return `
      <a href="product.html?id=${p.id}" class="product-card">
        <img src="${img}" alt="${p.name} ${p.type}" class="product-card-img" loading="lazy" />
        <div class="product-card-body">
          ${badgeHTML}
          <div class="product-card-name">${p.name}</div>
          <div class="product-card-sub">${p.type}</div>
          <div class="product-card-price">Fra ${price},00 kr.</div>
        </div>
      </a>
    `;
  }).join('');
}

// ── TOAST NOTIFICATION ──
function showToast(msg, type = 'success') {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.className = `toast ${type}`;
  requestAnimationFrame(() => {
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3500);
  });
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  initVideoFade();
  renderHighlights();
});
