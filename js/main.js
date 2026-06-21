// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const mobileNav = document.querySelector('.nav-mobile');
if (toggle && mobileNav) {
  toggle.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  mobileNav.querySelectorAll('a').forEach(link =>
    link.addEventListener('click', () => mobileNav.classList.remove('open'))
  );
}

// Quote form: submit to Formspree via fetch so we can show an inline confirmation
const form = document.getElementById('quoteForm');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Sending...';

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) throw new Error('Submission failed');

      btn.textContent = 'Request Sent!';
      btn.style.background = '#2a7a2a';
      btn.style.borderColor = '#2a7a2a';
      setTimeout(() => {
        btn.textContent = original;
        btn.disabled = false;
        btn.style.background = '';
        btn.style.borderColor = '';
        form.reset();
      }, 4000);
    } catch (err) {
      btn.textContent = 'Something went wrong — try again';
      btn.style.background = '#a33';
      btn.style.borderColor = '#a33';
      setTimeout(() => {
        btn.textContent = original;
        btn.disabled = false;
        btn.style.background = '';
        btn.style.borderColor = '';
      }, 4000);
    }
  });
}

document.getElementById('year').textContent = new Date().getFullYear();

// Portfolio lightbox with arrow navigation
const lightbox = document.getElementById('lightbox');
if (lightbox) {
  const images = Array.from(document.querySelectorAll('.lightbox-trigger'));
  const lightboxImg = lightbox.querySelector('.lightbox-img');
  let currentIndex = 0;

  const show = (index) => {
    currentIndex = (index + images.length) % images.length;
    const target = images[currentIndex];
    lightboxImg.src = target.src;
    lightboxImg.alt = target.alt;
  };

  const open = (index) => {
    show(index);
    lightbox.classList.add('open');
  };

  const close = () => lightbox.classList.remove('open');

  images.forEach((img, index) =>
    img.addEventListener('click', () => open(index))
  );

  lightbox.querySelector('.lightbox-prev').addEventListener('click', () => show(currentIndex - 1));
  lightbox.querySelector('.lightbox-next').addEventListener('click', () => show(currentIndex + 1));
  lightbox.querySelector('.lightbox-close').addEventListener('click', close);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) close();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(currentIndex - 1);
    if (e.key === 'ArrowRight') show(currentIndex + 1);
  });
}
