// ── Current year ─────────────────────────────────────────────
document.querySelectorAll('.year').forEach(e => e.textContent = new Date().getFullYear());

// ── Navbar scroll shadow ─────────────────────────────────────
const nav = document.getElementById('siteNav');
if (nav) {
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 20));
}

// ── Active nav link ──────────────────────────────────────────
const path = window.location.pathname.toLowerCase();
if (path === '/' || path.endsWith('/') || path.includes('index')) document.getElementById('nav-home')?.classList.add('active');
if (path.includes('about'))      document.getElementById('nav-about')?.classList.add('active');
if (path.includes('experience')) document.getElementById('nav-experience')?.classList.add('active');
if (path.includes('projects'))   document.getElementById('nav-projects')?.classList.add('active');

// ── Language toggle (EN / FR, persisted) ─────────────────────
function setLang(lang) {
  document.body.classList.toggle('lang-fr', lang === 'fr');
  document.getElementById('html-root')?.setAttribute('lang', lang);
  document.getElementById('btn-en')?.classList.toggle('active', lang === 'en');
  document.getElementById('btn-fr')?.classList.toggle('active', lang === 'fr');
  try { localStorage.setItem('lang', lang); } catch (e) {}
}
try {
  const saved = localStorage.getItem('lang');
  if (saved === 'fr') setLang('fr');
} catch (e) {}

// ── Scroll reveal ─────────────────────────────────────────────
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── Project filter (Projects page) ───────────────────────────
const filterBtns = document.querySelectorAll('.filter-btn');
if (filterBtns.length) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      document.querySelectorAll('[data-cat]').forEach(card => {
        card.style.display = (cat === 'all' || card.dataset.cat === cat) ? '' : 'none';
      });
    });
  });
}

// ── Contact form → prefilled Gmail compose (About page) ──────
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  const toAddress = 'srinid0412@gmail.com';
  const buildBody = () => {
    const name = document.getElementById('cf-name')?.value || '';
    const email = document.getElementById('cf-email')?.value || '';
    const subject = document.getElementById('cf-subject')?.value || 'Job Opportunity';
    const message = document.getElementById('cf-message')?.value || '';
    const body = `${message}\n\n—\n${name}\n${email}`;
    return { subject, body };
  };
  document.getElementById('cf-gmail')?.addEventListener('click', (ev) => {
    ev.preventDefault();
    const { subject, body } = buildBody();
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(toAddress)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(url, '_blank');
  });
  document.getElementById('cf-mailto')?.addEventListener('click', (ev) => {
    ev.preventDefault();
    const { subject, body } = buildBody();
    window.location.href = `mailto:${toAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

// ── Copy email address buttons ────────────────────────────────
document.querySelectorAll('[data-copy]').forEach(btn => {
  btn.addEventListener('click', async () => {
    const text = btn.getAttribute('data-copy');
    try {
      await navigator.clipboard.writeText(text);
      const original = btn.textContent;
      btn.textContent = 'Copied ✓';
      setTimeout(() => { btn.textContent = original; }, 1600);
    } catch (e) {}
  });
});
