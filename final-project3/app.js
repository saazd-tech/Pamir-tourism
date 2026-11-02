// On http://localhost:3000 the API is on the same origin; otherwise talk to the server directly.
const API = location.port === '3000' ? '' : 'http://localhost:3000';
const LIST_KEY = 'tajikistanTourismListings';
const LANG_KEY = 'tajikistanTourismLang';
const KEYS = ['places', 'gallery', 'articles', 'map'];

const TEXT = {
    ru: {
        title: 'Админ-панель туризма Таджикистана',
        newTitle: 'Новое объявление',
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
        submit: 'Обновить объявление',
        openSite: 'Открыть сайт о Памире',
        fillAll: 'Заполните все четыре поля.',
        saving: 'Сохранение...',
        saved: 'Объявление обновлено.',
        savedLocal: 'Сервер недоступен: объявление сохранено только в этом браузере.',
        failed: 'Не удалось сохранить объявление.',
        options: {
            places: ['Памирский тракт', 'Ваханская долина'],
            gallery: ['Горные пейзажи Памира', 'Фотоколлекция Ваханской долины', 'Озёра и реки Таджикистана', 'Исторические места и крепости'],
            articles: ['Планируем поездку по Памирскому тракту', 'Что посмотреть в Ваханской долине', 'Лучший сезон для поездки на Памир', 'Путеводитель по горным озёрам Таджикистана'],
            map: ['Маршрут по Памирскому тракту', 'Душанбе — Хорог', 'Ваханская долина и крепость Ямчун', 'Гарм-Чашма — Ишкашим']
        }
    },
    en: {
        title: 'Tajikistan Tourism Admin Panel',
        newTitle: 'New listing',
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
        submit: 'Update listing',
        openSite: 'Open tourism website',
        fillAll: 'Fill in all four fields.',
        saving: 'Saving...',
        saved: 'Listing updated.',
        savedLocal: 'Server unavailable: the listing was saved in this browser only.',
        failed: 'Could not save the listing.',
        options: {
            places: ['Pamir Highway', 'Wakhan Valley'],
            gallery: ['Pamir mountain landscapes', 'Wakhan Valley photo collection', 'Tajikistan lakes and rivers', 'Historic sites and fortresses'],
            articles: ['Planning a trip along the Pamir Highway', 'What to see in the Wakhan Valley', 'Best season for a Pamir journey', "A guide to Tajikistan's mountain lakes"],
            map: ['Pamir Highway route', 'Dushanbe to Khorog', 'Wakhan Valley and Yamchun Fortress', 'Garm Chashma to Ishkashim']
        }
    },
    tj: {
        title: 'Панели идоракунии сайёҳии Тоҷикистон',
        newTitle: 'Эълони нав',
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
        submit: 'Эълонро навсозӣ кунед',
        openSite: 'Сайти Помирро кушоед',
        fillAll: 'Ҳар чор майдонро пур кунед.',
        saving: 'Захира карда истодааст...',
        saved: 'Эълон навсозӣ шуд.',
        savedLocal: 'Сервер дастнорас аст: эълон танҳо дар ин браузер захира шуд.',
        failed: 'Эълонро захира кардан муяссар нашуд.',
        options: {
            places: ['Роҳи Помир', 'Водии Вахон'],
            gallery: ['Манзараҳои кӯҳии Помир', 'Коллексияи аксҳои водии Вахон', 'Кӯлҳо ва дарёҳои Тоҷикистон', 'Ҷойҳои таърихӣ ва қалъаҳо'],
            articles: ['Банақшагирии сафар бо роҳи Помир', 'Дар водии Вахон чиро дидан лозим', 'Беҳтарин мавсим барои сафар ба Помир', 'Роҳнамои кӯлҳои кӯҳии Тоҷикистон'],
            map: ['Масири роҳи Помир', 'Душанбе — Хоруғ', 'Водии Вахон ва қалъаи Ямчун', 'Гармчашма — Ишкошим']
        }
    }
};

const form = document.getElementById('listing-form');
const button = document.getElementById('btn');
const statusEl = document.getElementById('status');
const listEl = document.getElementById('listing');
const emptyEl = document.getElementById('empty');
const inputs = Object.fromEntries(KEYS.map(key => [key, document.getElementById(key)]));

let lang = 'ru';
let listings = [];

try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === 'ru' || saved === 'en' || saved === 'tj') lang = saved;
} catch { /* storage blocked: keep default */ }

function setStatus(message, kind = '') {
    statusEl.textContent = message;
    statusEl.className = 'status' + (kind ? ' is-' + kind : '');
}

function renderListings() {
    const t = TEXT[lang];
    listEl.replaceChildren();
    emptyEl.hidden = listings.length > 0;

    [...listings].reverse().forEach(item => {
        const li = document.createElement('li');
        const dl = document.createElement('dl');
        KEYS.forEach(key => {
            const dt = document.createElement('dt');
            dt.textContent = t[key];
            const dd = document.createElement('dd');
            dd.textContent = item[key];
            dl.append(dt, dd);
        });
        li.append(dl);
        listEl.append(li);
    });
}

function applyLanguage() {
    const t = TEXT[lang];
    document.documentElement.lang = lang === 'tj' ? 'tg' : lang;
    document.title = t.title;

    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t[el.dataset.i18n]; });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = t[el.dataset.i18nPlaceholder]; });
    document.querySelectorAll('[data-lang]').forEach(btn => btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang)));

    KEYS.forEach(key => {
        const datalist = document.getElementById(key + '-options');
        datalist.replaceChildren(...t.options[key].map(value => {
            const option = document.createElement('option');
            option.value = value;
            return option;
        }));
    });

    renderListings();
    setStatus('');
}

/* ---- storage: server first, this browser as a fallback ---- */

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

async function saveListing(values) {
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

/* ---- events ---- */

document.querySelectorAll('[data-lang]').forEach(btn => btn.addEventListener('click', () => {
    lang = btn.dataset.lang;
    try { localStorage.setItem(LANG_KEY, lang); } catch { /* ignore */ }
    applyLanguage();
}));

KEYS.forEach(key => inputs[key].addEventListener('input', () => inputs[key].removeAttribute('aria-invalid')));

form.addEventListener('submit', async event => {
    event.preventDefault();
    const t = TEXT[lang];
    const values = {};
    let firstInvalid = null;

    KEYS.forEach(key => {
        values[key] = inputs[key].value.trim();
        if (!values[key]) {
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
    const result = await saveListing(values);
    button.disabled = false;

    if (result.error) {
        setStatus(result.error, 'error');
        return;
    }

    form.reset();
    inputs.places.focus();
    await loadListings();
    setStatus(result.local ? t.savedLocal : t.saved, 'ok');
});

applyLanguage();
loadListings();
