// On http://localhost:3000 the API is on the same origin; otherwise talk to the server directly.
const API = location.port === '3000' ? '' : 'http://localhost:3000';
const LIST_KEY = 'tajikistanTourismListings';
const LANG_KEY = 'tajikistanTourismLang';
const KEYS = ['places', 'gallery', 'articles', 'map'];

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
        fillAll: 'Заполните все четыре поля.',
        saving: 'Сохранение...',
        saved: 'Объявление добавлено.',
        updated: 'Объявление обновлено.',
        deleted: 'Объявление удалено.',
        savedLocal: 'Сервер недоступен: объявление сохранено только в этом браузере.',
        failed: 'Не удалось сохранить объявление.',
        deletedLocal: 'Объявление удалено только в этом браузере.',
        options: {
            places: ['Памирский тракт', 'Ваханская долина', 'Гарм-Чашма', 'Крепость Ямчун'],
            gallery: ['Горные пейзажи Памира', 'Фотоколлекция Ваханской долины', 'Озёра и реки Таджикистана', 'Исторические крепости'],
            articles: ['Планируем поездку по Памирскому тракту', 'Что посмотреть в Ваханской долине', 'Лучший сезон для путешествия', 'Гид по горным озёрам Таджикистана'],
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
        fillAll: 'Fill in all four fields.',
        saving: 'Saving...',
        saved: 'Listing added.',
        updated: 'Listing updated.',
        deleted: 'Listing deleted.',
        savedLocal: 'Server unavailable: the listing was saved in this browser only.',
        failed: 'Could not save the listing.',
        deletedLocal: 'The listing was deleted only in this browser.',
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
        hintGallery: 'Номи галереяро ворид кунед ё аз пешниҳодҳо интихоб намоед.',
        hintArticles: 'Ғояи мақоларо интихоб кунед ё сарлавҳаи худро ворид намоед.',
        hintMap: 'Масирро интихоб кунед ё ҷойро дар харита ворид намоед.',
        submit: 'Илова кардани эълон',
        updateListing: 'Сақл кардани тағйирот',
        newAction: '+ Нав',
        cancel: 'Бекор',
        editAction: 'Таҳрир',
        deleteAction: 'Нест кардан',
        openSite: 'Сайти Помирро кушоед',
        fillAll: 'Ҳар чор майдонро пур кунед.',
        saving: 'Захира карда истодааст...',
        saved: 'Эълон илова шуд.',
        updated: 'Эълон навсозӣ шуд.',
        deleted: 'Эълон нест карда шуд.',
        savedLocal: 'Сервер дастнорас аст: эълон танҳо дар ин браузер захира шуд.',
        failed: 'Эълонро захира кардан муяссар нашуд.',
        deletedLocal: 'Эълон танҳо дар ин браузер нест карда шуд.',
        options: {
            places: ['Роҳи Помир', 'Водии Вахон', 'Гармчашма', 'Қалъаи Ямчун'],
            gallery: ['Манзараҳои кӯҳии Помир', 'Коллексияи аксҳои водии Вахон', 'Кӯлҳо ва дарёҳои Тоҷикистон', 'Қалъаҳои таърихӣ'],
            articles: ['Банақшагирии сафар бо роҳи Помир', 'Дар водии Вахон чиро дидан лозим', 'Беҳтарин мавсим барои сафар', 'Роҳнамо барои кӯлҳои Тоҷикистон'],
            map: ['Масири роҳи Помир', 'Душанбе — Хоруғ', 'Водии Вахон ва қалъаи Ямчун', 'Гармчашма — Ишкошим']
        }
    }
};

const form = document.getElementById('listing-form');
const button = document.getElementById('btn');
const cancelButton = document.getElementById('btn-cancel');
const statusEl = document.getElementById('status');
const listEl = document.getElementById('listing');
const emptyEl = document.getElementById('empty');
const newButton = document.getElementById('btn-new');
const formTitleEl = document.getElementById('new-title');
const inputs = Object.fromEntries(KEYS.map(key => [key, document.getElementById(key)]));

let lang = 'ru';
let listings = [];
let editingId = null;

try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === 'ru' || saved === 'en' || saved === 'tj') lang = saved;
} catch { /* storage blocked: keep default */ }

function setStatus(message, kind = '') {
    statusEl.textContent = message;
    statusEl.className = 'status' + (kind ? ' is-' + kind : '');
}

function setFormMode() {
    const t = TEXT[lang];
    formTitleEl.textContent = editingId ? t.editTitle : t.newTitle;
    button.textContent = editingId ? t.updateListing : t.submit;
    cancelButton.textContent = t.cancel;
    cancelButton.classList.toggle('hidden', !editingId);
}

function resetForm() {
    form.reset();
    editingId = null;
    setFormMode();
    inputs.places.focus();
    setStatus('');
}

function renderListings() {
    const t = TEXT[lang];
    listEl.replaceChildren();
    emptyEl.hidden = listings.length > 0;

    [...listings].reverse().forEach(item => {
        const li = document.createElement('li');
        li.className = 'listing-item' + (editingId === item.id ? ' is-active' : '');

        const header = document.createElement('div');
        header.className = 'listing-header';

        const title = document.createElement('strong');
        title.textContent = `#${item.id}`;
        header.appendChild(title);

        const actions = document.createElement('div');
        actions.className = 'listing-actions';

        const editBtn = document.createElement('button');
        editBtn.type = 'button';
        editBtn.className = 'mini-btn mini-btn-edit';
        editBtn.textContent = t.editAction;
        editBtn.addEventListener('click', () => {
            editingId = item.id;
            KEYS.forEach(key => {
                inputs[key].value = item[key] ?? '';
            });
            setFormMode();
            setStatus('');
            inputs.places.focus();
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.type = 'button';
        deleteBtn.className = 'mini-btn mini-btn-delete';
        deleteBtn.textContent = t.deleteAction;
        deleteBtn.addEventListener('click', async () => {
            const ok = window.confirm(t.deleteAction + '?');
            if (!ok) return;
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
        header.appendChild(actions);

        const meta = document.createElement('div');
        meta.className = 'listing-meta';

        KEYS.forEach(key => {
            const row = document.createElement('p');
            row.className = 'listing-row';
            const label = document.createElement('span');
            label.textContent = t[key] + ':';
            const value = document.createElement('strong');
            value.textContent = item[key] || '—';
            row.append(label, value);
            meta.appendChild(row);
        });

        li.append(header, meta);
        listEl.append(li);
    });
}

function applyLanguage() {
    const t = TEXT[lang];
    document.documentElement.lang = lang === 'tj' ? 'tg' : lang;
    document.title = t.title;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (key && t[key] !== undefined) el.textContent = t[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (key && t[key] !== undefined) el.placeholder = t[key];
    });
    document.querySelectorAll('[data-lang]').forEach(btn => btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang)));

    KEYS.forEach(key => {
        const datalist = document.getElementById(key + '-options');
        datalist.replaceChildren(...t.options[key].map(value => {
            const option = document.createElement('option');
            option.value = value;
            return option;
        }));
    });

    setFormMode();
    renderListings();
    setStatus('');
}

function readLocal() {
    try {
        const data = JSON.parse(localStorage.getItem(LIST_KEY));
        return Array.isArray(data) ? data : [];
    } catch {
        return [];
    }
}

async function fetchJSON(path, options) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 3000);
    try {
        const response = await fetch(API + path, { ...options, signal: controller.signal });
        const data = await response.json();
        return { ok: response.ok, data };
    } finally {
        clearTimeout(timer);
    }
}

async function loadListings() {
    try {
        const { ok, data } = await fetchJSON('/listings');
        if (!ok || !Array.isArray(data)) throw new Error('bad response');
        listings = data;
    } catch {
        listings = readLocal();
    }
    renderListings();
}

function validateListingValues(values) {
    for (const key of KEYS) {
        const value = String(values[key] ?? '').trim();
        if (!value) return { error: TEXT[lang].fillAll };
        if (value.length > 300) return { error: 'Each field must be 300 characters or less' };
        values[key] = value;
    }
    return { ok: true };
}

async function saveListing(values) {
    const valid = validateListingValues(values);
    if (!valid.ok) {
        return { error: valid.error };
    }

    try {
        const { ok, data } = await fetchJSON('/listings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        });
        if (!ok) return { error: data.message };
        return { item: data, local: false };
    } catch {
        const item = { id: Date.now(), ...values };
        try {
            localStorage.setItem(LIST_KEY, JSON.stringify([...readLocal(), item]));
        } catch {
            return { error: TEXT[lang].failed };
        }
        return { item, local: true };
    }
}

async function updateListing(id, values) {
    const valid = validateListingValues(values);
    if (!valid.ok) {
        return { error: valid.error };
    }

    try {
        const { ok, data } = await fetchJSON(`/listings/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        });
        if (!ok) return { error: data.message };
        return { item: data, local: false };
    } catch {
        const list = readLocal();
        const index = list.findIndex(item => item.id === id);
        if (index === -1) return { error: TEXT[lang].failed };

        const updated = { ...list[index], ...values };
        list[index] = updated;
        try {
            localStorage.setItem(LIST_KEY, JSON.stringify(list));
        } catch {
            return { error: TEXT[lang].failed };
        }
        return { item: updated, local: true };
    }
}

async function deleteListing(id) {
    try {
        const { ok, data } = await fetchJSON(`/listings/${id}`, {
            method: 'DELETE'
        });
        if (!ok) return { error: data.message };
        return { local: false };
    } catch {
        const list = readLocal().filter(item => item.id !== id);
        try {
            localStorage.setItem(LIST_KEY, JSON.stringify(list));
        } catch {
            return { error: TEXT[lang].failed };
        }
        return { local: true };
    }
}

// map selection event
const mapValueButtons = document.querySelectorAll('[data-map-value]');
mapValueButtons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.mapValue;
        if (value) {
            inputs.places.value = value;
            inputs.map.value = value;
            inputs.places.focus();
        }
    });
});

// file selection visual behaviour
if (inputs.gallery) {
    inputs.gallery.addEventListener('change', () => {
        const fileName = inputs.gallery.files && inputs.gallery.files.length ? inputs.gallery.files[0].name : 'No file chosen';
        inputs.gallery.title = fileName;
    });
}

document.querySelectorAll('[data-lang]').forEach(btn => btn.addEventListener('click', () => {
    lang = btn.dataset.lang;
    try { localStorage.setItem(LANG_KEY, lang); } catch { /* ignore */ }
    applyLanguage();
}));

newButton.addEventListener('click', () => {
    resetForm();
});

cancelButton.addEventListener('click', () => {
    resetForm();
});

KEYS.forEach(key => inputs[key].addEventListener('input', () => inputs[key].removeAttribute('aria-invalid')));

form.addEventListener('submit', async event => {
    event.preventDefault();
    const t = TEXT[lang];
    const values = {};
    let firstInvalid = null;

    KEYS.forEach(key => {
        const value = key === 'gallery' && inputs[key].files && inputs[key].files.length ? inputs[key].files[0].name : inputs[key].value.trim();
        values[key] = value;
        if (!value) {
            inputs[key].setAttribute('aria-invalid', 'true');
            firstInvalid = firstInvalid || inputs[key];
        }
    });

    if (firstInvalid) {
        setStatus(t.fillAll, 'error');
        firstInvalid.focus();
        return;
    }

    button.disabled = true;
    setStatus(t.saving);

    let result;
    if (editingId) {
        result = await updateListing(editingId, values);
    } else {
        result = await saveListing(values);
    }

    button.disabled = false;

    if (result.error) {
        setStatus(result.error, 'error');
        return;
    }

    form.reset();
    const wasEditing = Boolean(editingId);
    editingId = null;
    setFormMode();
    await loadListings();
    setStatus(wasEditing ? t.updated : (result.local ? t.savedLocal : t.saved), 'ok');
    inputs.places.focus();
});

applyLanguage();
loadListings();
