(() => {
  const STORE = 'tajikistanTourismLang';
  const TEXT = {
    ru: {
      documentTitle: 'Объявления — Путешествия по Памиру', home: 'Главная', admin: 'Админ-панель',
      eyebrow: 'ПУБЛИКАЦИИ', title: 'Объявления', intro: 'Новые места, маршруты и истории, опубликованные командой Памира.',
      sectionEyebrow: 'ОТКРОЙТЕ ДЛЯ СЕБЯ ПАМИР', sectionTitle: 'Последние объявления', footer: 'Путешествуйте по Памиру',
      empty: 'Пока нет опубликованных объявлений.', listing: 'Объявление', fields: { places: 'Место', gallery: 'Галерея', articles: 'Статья', map: 'Маршрут' }
    },
    en: {
      documentTitle: 'Announcements — Travel the Pamirs', home: 'Home', admin: 'Admin panel',
      eyebrow: 'PUBLICATIONS', title: 'Announcements', intro: 'New places, routes and stories published by the Pamir team.',
      sectionEyebrow: 'DISCOVER THE PAMIRS', sectionTitle: 'Latest announcements', footer: 'Travel the Pamirs',
      empty: 'There are no published announcements yet.', listing: 'Announcement', fields: { places: 'Place', gallery: 'Gallery', articles: 'Article', map: 'Route' }
    },
    tj: {
      documentTitle: 'Эълонҳо — Сафар ба Помир', home: 'Асосӣ', admin: 'Панели идоракунӣ',
      eyebrow: 'ЭЪЛОНҲО', title: 'Эълонҳо', intro: 'Ҷойҳо, масирҳо ва қиссаҳои нав, ки аз ҷониби гурӯҳи Помир нашр шудаанд.',
      sectionEyebrow: 'ПОМИРРО КАШФ КУНЕД', sectionTitle: 'Эълонҳои охирин', footer: 'Ба Помир сафар кунед',
      empty: 'Ҳоло эълони нашршуда нест.', listing: 'Эълон', fields: { places: 'Ҷой', gallery: 'Галерея', articles: 'Мақола', map: 'Масир' }
    }
  };
  let lang = 'ru';
  try {
    const saved = localStorage.getItem(STORE);
    if (TEXT[saved]) lang = saved;
  } catch { /* browser storage may be unavailable */ }

  const list = document.getElementById('announcements-list');
  const empty = document.getElementById('announcements-empty');
  let announcements = [];

  function render() {
    if (!list || !empty) return;
    list.replaceChildren();
    const text = TEXT[lang];
    announcements.slice().reverse().forEach((item, index) => {
      const card = document.createElement('article');
      card.className = 'announcement-card';
      const title = document.createElement('h3');
      title.textContent = `${text.listing} ${announcements.length - index}`;
      card.appendChild(title);
      let hasContent = false;
      Object.entries(text.fields).forEach(([key, label]) => {
        const value = typeof item?.[key] === 'string' ? item[key].trim() : '';
        if (!value) return;
        hasContent = true;
        const field = document.createElement('div');
        field.className = 'announcement-field';
        const fieldTitle = document.createElement('strong');
        fieldTitle.textContent = label;
        const fieldValue = document.createElement('p');
        fieldValue.textContent = value;
        field.append(fieldTitle, fieldValue);
        card.appendChild(field);
      });
      if (hasContent) list.appendChild(card);
    });
    empty.hidden = list.childElementCount > 0;
    empty.textContent = text.empty;
  }

  function applyLanguage() {
    const text = TEXT[lang];
    document.documentElement.lang = lang === 'tj' ? 'tg' : lang;
    document.title = text.documentTitle;
    document.querySelectorAll('[data-i18n-label]').forEach(element => {
      const key = element.dataset.i18nLabel;
      if (text[key]) element.textContent = text[key];
    });
    document.querySelectorAll('[data-lang]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.lang === lang));
    });
    render();
  }

  document.querySelectorAll('[data-lang]').forEach(button => {
    button.addEventListener('click', () => {
      if (!TEXT[button.dataset.lang]) return;
      lang = button.dataset.lang;
      try { localStorage.setItem(STORE, lang); } catch { /* ignore */ }
      applyLanguage();
    });
  });

  async function loadAnnouncements() {
    try {
      const response = await fetch('/listings');
      if (!response.ok) throw new Error('Could not fetch announcements');
      const data = await response.json();
      if (!Array.isArray(data)) throw new Error('Invalid announcements data');
      announcements = data;
    } catch {
      try {
        const local = JSON.parse(localStorage.getItem('tajikistanTourismListings') || '[]');
        announcements = Array.isArray(local) ? local : [];
      } catch {
        announcements = [];
      }
    }
    render();
  }

  applyLanguage();
  loadAnnouncements();
})();
