(() => {
  const fine = matchMedia('(any-hover: hover) and (any-pointer: fine)');
  const cap = document.createElement('img');
  cap.className = 'pamir-cursor';
  cap.alt = '';
  cap.setAttribute('aria-hidden', 'true');
  cap.draggable = false;
  cap.src = './assets/pamir-cap.svg?v=3';
  let ready = false;
  const hide = () => {
    document.documentElement.classList.remove('pamir-cursor-active');
    cap.classList.remove('is-visible', 'is-pressed');
  };
  cap.addEventListener('load', () => { ready = true; });
  cap.addEventListener('error', () => { ready = false; hide(); });
  document.body.append(cap);
  const move = (event) => {
    if (!ready || !fine.matches || event.pointerType !== 'mouse') { hide(); return; }
    cap.style.left = event.clientX + 'px';
    cap.style.top = event.clientY + 'px';
    cap.classList.add('is-visible');
    document.documentElement.classList.add('pamir-cursor-active');
  };
  document.addEventListener('pointermove', move, { passive: true });
  document.addEventListener('pointerdown', event => {
    move(event);
    if (cap.classList.contains('is-visible')) cap.classList.add('is-pressed');
  }, { passive: true });
  const release = () => cap.classList.remove('is-pressed');
  window.addEventListener('pointerup', release, { passive: true });
  window.addEventListener('pointercancel', hide);
  window.addEventListener('blur', hide);
  document.documentElement.addEventListener('pointerleave', hide);
  document.addEventListener('visibilitychange', () => { if (document.hidden) hide(); });
  fine.addEventListener('change', hide);

  // Add a localized link to the dedicated announcements page.
  const nav = document.querySelector('.journey-links');
  if (!nav) return;

  const announcementsLink = document.createElement('a');
  announcementsLink.href = './announcements.html';
  const labels = { ru: 'Объявления', en: 'Announcements', tj: 'Эълонҳо' };
  const updateLabel = () => {
    let lang = window.I18N?.lang;
    if (!lang) {
      try { lang = localStorage.getItem('tajikistanTourismLang'); } catch { /* storage unavailable */ }
    }
    announcementsLink.textContent = labels[lang] || labels.ru;
  };
  updateLabel();
  window.I18N?.onChange(updateLabel);

  const adminLink = [...nav.querySelectorAll('a')].find(link => link.href.endsWith('/main.html'));
  nav.insertBefore(announcementsLink, adminLink || null);
})();
