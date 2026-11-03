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

  // Show admin-panel listings on the public tourism page.
  const nav = document.querySelector('.journey-links');
  if (!nav) return;

  const announcementsLink = document.createElement('a');
  announcementsLink.href = '#admin-announcements';
  announcementsLink.textContent = 'Объявления';
  const adminLink = [...nav.querySelectorAll('a')].find(link => link.href.endsWith('/main.html'));
  nav.insertBefore(announcementsLink, adminLink || null);

  const section = document.createElement('section');
  section.id = 'admin-announcements';
  section.className = 'explore-section';
  section.setAttribute('aria-labelledby', 'admin-announcements-title');
  section.innerHTML = '<div class="explore-heading"><div><p class="culture-eyebrow">ПУБЛИКАЦИИ</p><h2 id="admin-announcements-title">Объявления</h2></div></div><div class="pictures" id="admin-announcements-list"></div>';
  const blog = document.getElementById('blog');
  (blog?.closest('.moments-section') || document.querySelector('.bg_parent3[id="experiences"]'))?.before(section);

  const list = section.querySelector('#admin-announcements-list');
  const fields = [
    ['places', 'Место'],
    ['gallery', 'Галерея'],
    ['articles', 'Статья'],
    ['map', 'Маршрут']
  ];
  const render = items => {
    list.replaceChildren();
    items.forEach(item => {
      const card = document.createElement('article');
      card.className = 'card-1';
      fields.forEach(([key, label]) => {
        if (!item[key]) return;
        const heading = document.createElement('h4');
        heading.textContent = label;
        const value = document.createElement('p');
        value.className = 'paragraph';
        value.textContent = item[key];
        card.append(heading, value);
      });
      if (card.childElementCount) list.appendChild(card);
    });
  };
  const loadAnnouncements = async () => {
    try {
      const response = await fetch('/listings');
      if (!response.ok) throw new Error('Unable to load listings');
      const items = await response.json();
      if (Array.isArray(items)) {
        render(items);
        return;
      }
    } catch { /* use browser-saved listings when the API is unavailable */ }

    try {
      const items = JSON.parse(localStorage.getItem('tajikistanTourismListings') || '[]');
      render(Array.isArray(items) ? items : []);
    } catch {
      render([]);
    }
  };
  loadAnnouncements();
})();
