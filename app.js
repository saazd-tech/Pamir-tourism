const LIST_KEY = 'tajikistanTourismListings';
const LANG_KEY = 'tajikistanTourismLang';
const KEYS = ['places', 'gallery', 'articles', 'map'];
const REQUIRED_KEYS = ['places', 'articles', 'map'];

const TEXT = {
  ru: {
    title: 'Админ-панель туризма Таджикистана',
    newTitle: 'Новое объявление',
    editTitle: 'Редактировать объявление',
    currentTitle: 'Текущие объявления',
    empty: 'Пока нет объявлений.',
    places: 'Туристические места',
    gallery: 'Фото и видео галерея',
    articles: 'Статьи и блог',
    map: 'Интерактивная карта',
    hintPlaces: 'Выберите место из подсказок или введите своё.',
    hintGallery: 'Введите название галереи или выберите из подсказок.',
    hintArticles: 'Выберите идею статьи или введите свой заголовок.',
    hintMap: 'Выберите маршрут или введите место на карте.',
    submit: 'Добавить объявление',
    updateListing: 'Сохранить изменения',
    newAction: '+ Новое',
    cancel: 'Отмена',
    editAction: 'Редактировать',
    deleteAction: 'Удалить',
    openSite: 'Открыть сайт о Памире',
    chooseFile: 'Выбрать файл',
    fileNotSelected: 'Файл не выбран',
    mapSelect: 'На карте',
    fileSelected: 'Выбран файл:',
    fillAll: 'Заполните все обязательные поля.',
    saving: 'Сохранение...',
    saved: 'Объявление добавлено.',
    updated: 'Объявление обновлено.',
    deleted: 'Объявление удалено.',
    savedLocal: 'Сервер недоступен: объявление сохранено только в этом браузере.',
    failed: 'Не удалось сохранить объявление.',
    deletedLocal: 'Объявление удалено только в этом браузере.',
    brandLabel: 'Админ-панель туризма',
    langLabel: 'Выбор языка',
    placesLabel: 'Поле выбора туристических мест',
    galleryLabel: 'Поле загрузки фото и видео',
    selectedFile: 'Выбранный файл',
    articlesLabel: 'Поле для статей и блога',
    mapLabel: 'Поле интерактивной карты',
    options: {
      places: ['Памирский тракт', 'Ваханская долина', 'Гарм-Чашма', 'Крепость Ямчун'],
      gallery: ['Горные пейзажи Памира', 'Фотоколлекция Ваханской долины', 'Озёра и реки Таджикистана', 'Исторические крепости'],
      articles: ['Планируем поездку по Памирскому тракту', 'Что посмотреть в Ваханской долине', 'Лучшая пора для путешествия в горы', 'Гид по озёрам Таджикистана'],
      map: ['Маршрут по Памирскому тракту', 'Душанбе — Хорог', 'Ваханская долина и крепость Ямчун', 'Гарм-Чашма — Ишкошим']
    }
  },
  en: {
    title: 'Tajikistan Tourism Admin Panel',
    newTitle: 'New listing',
    editTitle: 'Edit listing',
    currentTitle: 'Current listings',
    empty: 'No listings yet.',
    places: 'Tourist Places',
    gallery: 'Photo & Video Gallery',
    articles: 'Articles & Blog',
    map: 'Interactive Map',
    hintPlaces: 'Choose a suggested destination or type another place in Tajikistan.',
    hintGallery: 'Enter a gallery name or choose a suggested photo collection.',
    hintArticles: 'Choose an article idea or enter your own title.',
    hintMap: 'Choose a route to highlight or type a map location.',
    submit: 'Add listing',
    updateListing: 'Save changes',
    newAction: '+ New',
    cancel: 'Cancel',
    editAction: 'Edit',
    deleteAction: 'Delete',
    openSite: 'Open tourism website',
    chooseFile: 'Choose file',
    fileNotSelected: 'No file selected',
    mapSelect: 'On map',
    fileSelected: 'Selected file:',
    fillAll: 'Fill in all required fields.',
    saving: 'Saving...',
    saved: 'Listing added.',
    updated: 'Listing updated.',
    deleted: 'Listing deleted.',
    savedLocal: 'Server unavailable: the listing was saved in this browser only.',
    failed: 'Could not save the listing.',
    deletedLocal: 'The listing was deleted only in this browser.',
    brandLabel: 'Tourism admin panel',
    langLabel: 'Language selector',
    placesLabel: 'Tourist places field',
    galleryLabel: 'Photo and video upload field',
    selectedFile: 'Selected file',
    articlesLabel: 'Articles and blog field',
    mapLabel: 'Interactive map field',
    options: {
      places: ['Pamir Highway', 'Wakhan Valley', 'Garm-Chashma', 'Yamchun Fortress'],
      gallery: ['Pamir mountain landscapes', 'Wakhan Valley photo collection', 'Tajikistan lakes and rivers', 'Historic fortresses'],
      articles: ['Planning a trip along the Pamir Highway', 'What to see in the Wakhan Valley', 'Best season for a Pamir journey', 'A guide to Tajikistan’s mountain lakes'],
      map: ['Pamir Highway route', 'Dushanbe to Khorog', 'Wakhan Valley and Yamchun Fortress', 'Garm Chashma to Ishkashim']
    }
  },
  tj: {
    title: 'Панели идоракунии сайёҳии Тоҷикистон',
    newTitle: 'Эълони нав',
    editTitle: 'Таҳрири эълон',
    currentTitle: 'Эълонҳои ҷорӣ',
    empty: 'Ҳоло эълон нест.',
    places: 'Ҷойҳои сайёҳӣ',
    gallery: 'Галереяи акс ва видео',
    articles: 'Мақолаҳо ва блог',
    map: 'Харитаи интерактивӣ',
    hintPlaces: 'Ҷойро аз пешниҳодҳо интихоб кунед ё ҷойи худро ворид намоед.',
    hintGallery: 'Номи галереяро ворид кунед ё аз прапанкӣ интихоб намоед.',
    hintArticles: 'Ғояи мақоларо интихоб кунед ё сарлавҳаи худро ворид намоед.',
    hintMap: 'Масирро интихоб кунед ё ҷойро дар харита ворид намоед.',
    submit: 'Илова кардани эълон',
    updateListing: 'Сақл кардани тағйирот',
    newAction: '+ Нав',
    cancel: 'Бекор',
    editAction: 'Таҳрир',
    deleteAction: 'Нест кардан',
    openSite: 'Сайти Помирро кушоед',
    chooseFile: 'Файли интихоб',
    fileNotSelected: 'Файл интихоб нашудааст',
    mapSelect: 'Дар харита',
    fileSelected: 'Файл интихоб шуд:',
    fillAll: 'Ҳар се майдонро пур кунед.',
    saving: 'Захира карда истодааст...',
    saved: 'Эълон илова шуд.',
    updated: 'Эълон навсозӣ шуд.',
    deleted: 'Эълон нест карда шуд.',
    savedLocal: 'Сервер дастнорас аст: эълон танҳо дар ин браузер захира шуд.',
    failed: 'Эълонро захира кардан муяссар нашуд.',
    deletedLocal: 'Эълон танҳо дар ин браузер нест карда шуд.',
    brandLabel: 'Панели идоракунии сайёҳӣ',
    langLabel: 'Интихобкунандаи забон',
    placesLabel: 'Майдони ҷойҳои сайёҳӣ',
    galleryLabel: 'Майдони боргузории акс ва видео',
    selectedFile: 'Файли интихобшуда',
    articlesLabel: 'Майдони мақолаҳо ва блог',
    mapLabel: 'Майдони харитаи интерактивӣ',
    options: {
      places: ['Роҳи Помир', 'Водии Вахон', 'Гармчашма', 'Қалъаи Ямчун'],
      gallery: ['Манзараҳои кӯҳии Помир', 'Коллексияи аксҳои водии Вахон', 'Кӯлҳо ва дарёҳои Тоҷикистон', 'Қалъаҳои таърихӣ'],
      articles: ['Банақшагирии сафар бо роҳи Помир', 'Дар водии Вахон чиро дидан лозим', 'Беҳтарин мавсим барои сафар', 'Роҳнамо барои кӯлҳои Тоҷикистон'],
      map: ['Масири роҳи Помир', 'Душанбе — Хоруғ', 'Водии Вахон ва қалъаи Ямчун', 'Гармчашма — Ишкошим']
    }
  }
};

const form = document.getElementById('listing-form');
const submitBtn = document.getElementById('btn');
const cancelBtn = document.getElementById('btn-cancel');
const statusEl = document.getElementById('status');
const listEl = document.getElementById('listing');
const emptyEl = document.getElementById('empty');
const formTitle = document.getElementById('new-title');
const galleryInput = document.getElementById('gallery');
const galleryFileName = document.getElementById('gallery-file-name');
const fileTrigger = document.querySelector('.file-trigger');
const newButton = document.getElementById('btn-new');

const inputs = {
  places: document.getElementById('places'),
  gallery: galleryInput,
  articles: document.getElementById('articles'),
  map: document.getElementById('map')
};

let lang = 'ru';
let listings = [];
let editingId = null;

function getSavedLang() {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    return saved && ['ru', 'en', 'tj'].includes(saved) ? saved : 'ru';
  } catch {
    return 'ru';
  }
}

function persistLang(value) {
  try {
    localStorage.setItem(LANG_KEY, value);
  } catch {
    // ignore if storage is unavailable
  }
}

function setStatus(message, kind = '') {
  statusEl.textContent = message;
  statusEl.className = 'status' + (kind ? ` is-${kind}` : '');
}

function getLocalizedValue(key, rawValue) {
  if (!rawValue || typeof rawValue !== 'string') return rawValue;
  const normalized = rawValue.trim();
  const localeOptions = TEXT;

  if (key === 'gallery' && !normalized) return '';

  for (const locale of ['ru', 'tj', 'en']) {
    const values = localeOptions[locale].options?.[key] || [];
    const index = values.findIndex((value) => value === normalized);
    if (index >= 0) {
      const target = localeOptions[lang]?.options?.[key] || [];
      if (target[index]) return target[index];
    }
  }

  return normalized;
}

function getSuggestionOptions(key) {
  const current = Array.isArray(TEXT[lang]?.options?.[key]) ? TEXT[lang].options[key] : [];
  if (current.length) return [...new Set(current)];
  const fallback = Array.isArray(TEXT.ru.options?.[key]) ? TEXT.ru.options[key] : [];
  return [...new Set(fallback)];
}

function renderDatalists() {
  KEYS.forEach((key) => {
    const datalist = document.getElementById(`${key}-options`);
    if (!datalist) return;
    datalist.innerHTML = '';
    getSuggestionOptions(key).forEach((value) => {
      const option = document.createElement('option');
      option.value = value;
      datalist.appendChild(option);
    });
  });
}

function setFormMode() {
  const t = TEXT[lang];
  formTitle.textContent = editingId ? t.editTitle : t.newTitle;
  submitBtn.textContent = editingId ? t.updateListing : t.submit;
  cancelBtn.textContent = t.cancel;
  cancelBtn.classList.toggle('hidden', !editingId);
  if (fileTrigger) fileTrigger.textContent = t.chooseFile;
  document.querySelectorAll('[data-map-value]').forEach((btn) => {
    btn.textContent = t.mapSelect;
  });
  if (galleryFileName) {
    galleryFileName.placeholder = t.fileNotSelected;
  }
}

function updateGalleryField() {
  if (!galleryFileName) return;
  const file = galleryInput.files && galleryInput.files[0];
  galleryFileName.value = file ? file.name : '';
  galleryFileName.placeholder = TEXT[lang].fileNotSelected;
}

function resetForm() {
  form.reset();
  editingId = null;
  if (galleryFileName) {
    galleryFileName.value = '';
    galleryFileName.placeholder = TEXT[lang].fileNotSelected;
  }
  setFormMode();
  setStatus('');
  inputs.places.focus();
}

function renderListings() {
  const t = TEXT[lang];
  listEl.innerHTML = '';
  emptyEl.hidden = listings.length > 0;

  [...listings].reverse().forEach((item) => {
    const li = document.createElement('li');
    li.className = `listing-item ${editingId === item.id ? 'is-active' : ''}`;

    const header = document.createElement('div');
    header.className = 'listing-header';

    const title = document.createElement('strong');
    title.textContent = `#${item.id}`;

    const actions = document.createElement('div');
    actions.className = 'listing-actions';

    const editBtn = document.createElement('button');
    editBtn.type = 'button';
    editBtn.className = 'mini-btn mini-btn-edit';
    editBtn.textContent = t.editAction;
    editBtn.addEventListener('click', () => {
      editingId = item.id;
      KEYS.forEach((key) => {
        const value = getLocalizedValue(key, item[key]);
        inputs[key].value = value || '';
      });
      updateGalleryField();
      setFormMode();
      setStatus('');
      inputs.places.focus();
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.className = 'mini-btn mini-btn-delete';
    deleteBtn.textContent = t.deleteAction;
    deleteBtn.addEventListener('click', async () => {
      const confirmed = window.confirm(`${t.deleteAction}?`);
      if (!confirmed) return;
      const result = await deleteListing(item.id);
      if (result.error) {
        setStatus(result.error, 'error');
        return;
      }
      if (editingId === item.id) resetForm();
      await loadListings();
      setStatus(result.local ? t.deletedLocal : t.deleted, 'ok');
    });

    actions.append(editBtn, deleteBtn);
    header.append(title, actions);

    const meta = document.createElement('div');
    meta.className = 'listing-meta';

    KEYS.forEach((key) => {
      const row = document.createElement('div');
      row.className = 'listing-row';
      const label = document.createElement('span');
      label.textContent = t[key] + ':';
      const value = document.createElement('strong');
      const displayValue = getLocalizedValue(key, item[key]);
      value.textContent = displayValue || '—';
      row.append(label, value);
      meta.appendChild(row);
    });

    li.append(header, meta);
    listEl.appendChild(li);
  });
}

function applyLanguage() {
  const t = TEXT[lang];
  document.documentElement.lang = lang === 'tj' ? 'tg' : lang;
  document.title = t.title;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  document.querySelectorAll('[data-i18n-file]').forEach((el) => {
    const key = el.dataset.i18nFile;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.dataset.i18nAria;
    if (t[key] !== undefined) el.setAttribute('aria-label', t[key]);
  });

  document.querySelectorAll('[data-lang]').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
  });

  renderDatalists();
  setFormMode();
  renderListings();
  setStatus('');
}

function validateValues(values) {
  for (const key of REQUIRED_KEYS) {
    const value = String(values[key] ?? '').trim();
    if (!value) return { error: TEXT[lang].fillAll };
    values[key] = value;
  }
  if (values.gallery !== undefined && values.gallery !== null) {
    values.gallery = String(values.gallery).trim();
  }
  return { ok: true };
}

function readLocalListings() {
  try {
    const parsed = JSON.parse(localStorage.getItem(LIST_KEY));
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function fetchJSON(path, options = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 3000);
  try {
    const response = await fetch(path, { ...options, signal: controller.signal });
    const data = await response.json();
    return { ok: response.ok, data };
  } catch {
    return { ok: false, data: { message: TEXT[lang].failed } };
  } finally {
    clearTimeout(timeout);
  }
}

async function loadListings() {
  try {
    const { ok, data } = await fetchJSON('/listings');
    if (ok && Array.isArray(data)) {
      listings = data;
      renderListings();
      return;
    }
  } catch {}

  listings = readLocalListings();
  renderListings();
}

async function saveListing(values) {
  const valid = validateValues(values);
  if (!valid.ok) return { error: valid.error };

  try {
    const { ok, data } = await fetchJSON('/listings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    });
    if (ok) return { item: data, local: false };
    throw new Error(data.message || TEXT[lang].failed);
  } catch {
    const localItem = { id: Date.now(), ...values };
    const list = readLocalListings();
    list.push(localItem);
    localStorage.setItem(LIST_KEY, JSON.stringify(list));
    return { item: localItem, local: true };
  }
}

async function updateListing(id, values) {
  const valid = validateValues(values);
  if (!valid.ok) return { error: valid.error };

  try {
    const { ok, data } = await fetchJSON(`/listings/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    });
    if (ok) return { item: data, local: false };
    throw new Error(data.message || TEXT[lang].failed);
  } catch {
    const list = readLocalListings();
    const index = list.findIndex((item) => item.id === id);
    if (index === -1) return { error: TEXT[lang].failed };
    list[index] = { ...list[index], ...values };
    localStorage.setItem(LIST_KEY, JSON.stringify(list));
    return { item: list[index], local: true };
  }
}

async function deleteListing(id) {
  try {
    const { ok, data } = await fetchJSON(`/listings/${id}`, {
      method: 'DELETE'
    });
    if (ok) return { local: false };
    throw new Error(data.message || TEXT[lang].failed);
  } catch {
    const list = readLocalListings().filter((item) => item.id !== id);
    localStorage.setItem(LIST_KEY, JSON.stringify(list));
    return { local: true };
  }
}

if (newButton) {
  newButton.addEventListener('click', resetForm);
}

if (cancelBtn) {
  cancelBtn.addEventListener('click', resetForm);
}

document.querySelectorAll('[data-lang]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const nextLang = btn.dataset.lang;
    if (nextLang && ['ru', 'en', 'tj'].includes(nextLang)) {
      lang = nextLang;
      persistLang(lang);
      applyLanguage();
    }
  });
});

if (galleryInput) {
  galleryInput.addEventListener('change', updateGalleryField);
}

KEYS.forEach((key) => {
  if (inputs[key]) {
    inputs[key].addEventListener('input', () => {
      inputs[key].removeAttribute('aria-invalid');
    });
  }
});

if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const values = {};
    let firstInvalid = null;

    KEYS.forEach((key) => {
      const sourceValue = key === 'gallery' && galleryInput && galleryInput.files && galleryInput.files[0]
        ? galleryInput.files[0].name
        : (inputs[key]?.value || '').trim();
      values[key] = sourceValue;
      if (REQUIRED_KEYS.includes(key) && !sourceValue) {
        inputs[key]?.setAttribute('aria-invalid', 'true');
        if (!firstInvalid) firstInvalid = inputs[key];
      }
    });

    if (firstInvalid) {
      setStatus(TEXT[lang].fillAll, 'error');
      firstInvalid.focus();
      return;
    }

    submitBtn.disabled = true;
    setStatus(TEXT[lang].saving);

    let result;
    if (editingId) {
      result = await updateListing(editingId, values);
    } else {
      result = await saveListing(values);
    }

    submitBtn.disabled = false;

    if (result.error) {
      setStatus(result.error, 'error');
      return;
    }

    const wasEditing = Boolean(editingId);
    editingId = null;
    form.reset();
    if (galleryFileName) {
      galleryFileName.value = '';
      galleryFileName.placeholder = TEXT[lang].fileNotSelected;
    }
    setFormMode();
    await loadListings();
    setStatus(wasEditing ? TEXT[lang].updated : (result.local ? TEXT[lang].savedLocal : TEXT[lang].saved), 'ok');
    inputs.places.focus();
  });
}

document.querySelectorAll('[data-map-value]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const value = btn.dataset.mapValue;
    if (value) {
      inputs.places.value = value;
      inputs.map.value = value;
      inputs.places.focus();
    }
  });
});

lang = getSavedLang();
persistLang(lang);
applyLanguage();
loadListings();
