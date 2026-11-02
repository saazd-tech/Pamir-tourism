/* Language switcher for the tourism site: RU (original text in the HTML), EN, TJ.
   The chosen language is shared with main.html through localStorage. */
(() => {
  const STORE = 'tajikistanTourismLang';
  const LANGS = ['ru', 'en', 'tj'];
  const HTML_LANG = { ru: 'ru', en: 'en', tj: 'tg' };
  const DICT = {
 "Главная навигация": [
  "Main navigation",
  "Навигатсияи асосӣ"
 ],
 "Памир — главная": [
  "Pamir — home",
  "Помир — саҳифаи асосӣ"
 ],
 "Направления": [
  "Destinations",
  "Самтҳо"
 ],
 "Где остановиться": [
  "Where to stay",
  "Ҷои иқомат"
 ],
 "Маршруты": [
  "Routes",
  "Масирҳо"
 ],
 "Культура": [
  "Culture",
  "Фарҳанг"
 ],
 "FAQ": [
  "FAQ",
  "Саволу ҷавоб"
 ],
 "Исследовать <span aria-hidden=\"true\">↗</span>": [
  "Explore <span aria-hidden=\"true\">↗</span>",
  "Кашф кунед <span aria-hidden=\"true\">↗</span>"
 ],
 "<span></span> ПАМИР / ГОРЫ / ВАША ИСТОРИЯ": [
  "<span></span> PAMIR / MOUNTAINS / YOUR STORY",
  "<span></span> ПОМИР / КӮҲҲО / ҚИССАИ ШУМО"
 ],
 "Ближе<br>к <em>небу.</em>": [
  "Closer<br>to the <em>sky.</em>",
  "Наздиктар<br>ба <em>осмон.</em>"
 ],
 "Дальше от привычного. По дорогам Памира —<br class=\"journey-break\"> к древним крепостям, горным долинам<br class=\"journey-break\"> и встречам, которые остаются с вами.": [
  "Further from the ordinary. Along the roads of the Pamirs —<br class=\"journey-break\"> to ancient fortresses, mountain valleys<br class=\"journey-break\"> and encounters that stay with you.",
  "Дуртар аз одатӣ. Бо роҳҳои Помир —<br class=\"journey-break\"> ба қалъаҳои қадим, водиҳои кӯҳӣ<br class=\"journey-break\"> ва мулоқотҳое, ки бо шумо мемонанд."
 ],
 "Открыть направления <span aria-hidden=\"true\">↗</span>": [
  "Open destinations <span aria-hidden=\"true\">↗</span>",
  "Самтҳоро кушоед <span aria-hidden=\"true\">↗</span>"
 ],
 "Почувствовать Памир <span aria-hidden=\"true\">↓</span>": [
  "Feel the Pamirs <span aria-hidden=\"true\">↓</span>",
  "Помирро ҳис кунед <span aria-hidden=\"true\">↓</span>"
 ],
 "✦ &nbsp; НЕИЗВЕДАННОЕ БЛИЖЕ, ЧЕМ КАЖЕТСЯ": [
  "✦ &nbsp; THE UNEXPLORED IS CLOSER THAN IT SEEMS",
  "✦ &nbsp; НОАЗМУДА НАЗДИКТАР АЗ ОНЧӢ МЕНАМОЯД"
 ],
 "ВАШЕ ПУТЕШЕСТВИЕ НАЧИНАЕТСЯ ЗДЕСЬ <span aria-hidden=\"true\">↓</span>": [
  "YOUR JOURNEY STARTS HERE <span aria-hidden=\"true\">↓</span>",
  "САЙЁҲАТИ ШУМО АЗ ИНҶО ОҒОЗ МЕШАВАД <span aria-hidden=\"true\">↓</span>"
 ],
 "Памир и горные маршруты": [
  "The Pamirs and mountain routes",
  "Помир ва масирҳои кӯҳӣ"
 ],
 "Ваханская долина, Гарм-Чашма и дорога на Калай-Хумб": [
  "Wakhan Valley, Garm Chashma and the road to Kalai-Khumb",
  "Водии Вахон, Гармчашма ва роҳ ба Қалъаи Хумб"
 ],
 "Смотреть все &gt;": [
  "View all &gt;",
  "Ҳамаро дидан &gt;"
 ],
 "Дорога на Памир": [
  "The road to the Pamirs",
  "Роҳ ба Помир"
 ],
 "Горный маршрут через Калай-Хумб": [
  "Mountain route via Kalai-Khumb",
  "Масири кӯҳӣ тавассути Қалъаи Хумб"
 ],
 "Гарм-Чашма": [
  "Garm Chashma",
  "Гармчашма"
 ],
 "Горячие источники в ГБАО": [
  "Hot springs in GBAO",
  "Чашмаҳои гарм дар ВМКБ"
 ],
 "Крепость Ямчун": [
  "Yamchun Fortress",
  "Қалъаи Ямчун"
 ],
 "Историческая крепость в Ваханской долине": [
  "A historic fortress in the Wakhan Valley",
  "Қалъаи таърихӣ дар водии Вахон"
 ],
 "Ботанический сад Хорога": [
  "Khorog Botanical Garden",
  "Боғи ботаникии Хоруғ"
 ],
 "Добавьте прогулку по саду в свой маршрут по Хорогу": [
  "Add a walk through the garden to your Khorog itinerary",
  "Сайри боғро ба масири худ дар Хоруғ илова кунед"
 ],
 "ВАШ ПАМИР · ТОЧКА ЗА ТОЧКОЙ": [
  "YOUR PAMIRS · POINT BY POINT",
  "ПОМИРИ ШУМО · НУҚТА БА НУҚТА"
 ],
 "Места для путешествий": [
  "Places to visit",
  "Ҷойҳо барои сафар"
 ],
 "Выберите место в списке или нажмите на точку.<br>Приближайте карту, чтобы увидеть соседние места.": [
  "Choose a place from the list or tap a point.<br>Zoom the map to see nearby places.",
  "Ҷойро аз рӯйхат интихоб кунед ё ба нуқта пахш намоед.<br>Харитаро наздик кунед, то ҷойҳои ҳамсояро бинед."
 ],
 "Поиск места": [
  "Search for a place",
  "Ҷустуҷӯи ҷой"
 ],
 "Например, Яшилькуль": [
  "For example, Yashilkul",
  "Масалан, Ёшилкӯл"
 ],
 "Что интересно": [
  "What interests you",
  "Чӣ шавқовар аст"
 ],
 "Все места": [
  "All places",
  "Ҳамаи ҷойҳо"
 ],
 "Города": [
  "Cities",
  "Шаҳрҳо"
 ],
 "Природа": [
  "Nature",
  "Табиат"
 ],
 "Источники": [
  "Springs",
  "Чашмаҳо"
 ],
 "История": [
  "History",
  "Таърих"
 ],
 "Показать всё ↗": [
  "Show all ↗",
  "Ҳамаро нишон диҳед ↗"
 ],
 "Места Памира": [
  "Places of the Pamirs",
  "Ҷойҳои Помир"
 ],
 "Интерактивная карта мест Памира": [
  "Interactive map of Pamir places",
  "Харитаи интерактивии ҷойҳои Помир"
 ],
 "Точки обозначают места и районы, а не готовый автомобильный маршрут.": [
  "Points mark places and areas, not a ready-made driving route.",
  "Нуқтаҳо ҷойҳо ва ноҳияҳоро нишон медиҳанд, на масири омодаи автомобилӣ."
 ],
 "ЛЮДИ · ВКУСЫ · ТРАДИЦИИ": [
  "PEOPLE · FLAVOURS · TRADITIONS",
  "МАРДУМ · ТАЪМҲО · РАСМУ ОИН"
 ],
 "Душа Памира": [
  "The Soul of the Pamirs",
  "Рӯҳи Помир"
 ],
 "Культура, которую хочется узнать ближе.": [
  "A culture you will want to get to know better.",
  "Фарҳанге, ки мехоҳед беҳтар бишносед."
 ],
 "Памирский дом: Посмотреть дом (новая вкладка)": [
  "Pamiri house: View the house (new tab)",
  "Хонаи помирӣ: Хонаро бинед (ҷадвали нав)"
 ],
 "Памирский дом": [
  "The Pamiri house",
  "Хонаи помирӣ"
 ],
 "Чид — традиционный дом, где архитектура связана с семейными и духовными традициями. Пять опорных столбов и потолок чорхона — его узнаваемые черты.": [
  "The chid is a traditional home whose architecture is tied to family and spiritual traditions. Five supporting pillars and the ceiling of the chorkhona are its recognisable features.",
  "Чид — хонаи анъанавӣ аст, ки меъмории он бо расму оини оилавӣ ва маънавӣ алоқаманд аст. Панҷ сутуни асосӣ ва шифти чорхона аз хусусиятҳои шиносои он мебошанд."
 ],
 "Посмотреть дом ↗": [
  "View the house ↗",
  "Хонаро бинед ↗"
 ],
 "Национальная одежда: Смотреть видео (новая вкладка)": [
  "National clothing: Watch the video (new tab)",
  "Либоси миллӣ: Видеоро тамошо кунед (ҷадвали нав)"
 ],
 "Национальная одежда": [
  "National clothing",
  "Либоси миллӣ"
 ],
 "Вышитые тюбетейки, яркие ткани и орнаменты рассказывают о местных традициях. Познакомьтесь с праздничными нарядами жителей Памира.": [
  "Embroidered skullcaps, bright fabrics and ornaments tell of local traditions. Get to know the festive attire of the people of the Pamirs.",
  "Тақияҳои гулдӯзӣ, матоҳои рангоранг ва нақшҳо дар бораи анъанаҳои маҳаллӣ нақл мекунанд. Бо либосҳои идонаи мардуми Помир шинос шавед."
 ],
 "Смотреть видео ↗": [
  "Watch the video ↗",
  "Видеоро тамошо кунед ↗"
 ],
 "Вкус Памира: Найти рецепты на YouTube (новая вкладка)": [
  "Taste of the Pamirs: Find recipes on YouTube (new tab)",
  "Таъми Помир: Дар YouTube рецептҳо ёбед (ҷадвали нав)"
 ],
 "Вкус Памира": [
  "Taste of the Pamirs",
  "Таъми Помир"
 ],
 "Ширчой — горячий чай с молоком, солью и сливочным маслом. Откройте рецепты и узнайте, как приготовить его дома.": [
  "Shirchoy is hot tea with milk, salt and butter. Browse recipes and learn how to make it at home.",
  "Шерчой — чойи гарм бо шир, намак ва равғани маска. Рецептҳоро кушоед ва биомӯзед, ки онро дар хона чӣ гуна тайёр кунед."
 ],
 "Найти рецепты на YouTube ↗": [
  "Find recipes on YouTube ↗",
  "Дар YouTube рецептҳо ёбед ↗"
 ],
 "Музыка Памира: Найти музыку на YouTube (новая вкладка)": [
  "Music of the Pamirs: Find music on YouTube (new tab)",
  "Мусиқии Помир: Дар YouTube мусиқӣ ёбед (ҷадвали нав)"
 ],
 "Музыка Памира": [
  "Music of the Pamirs",
  "Мусиқии Помир"
 ],
 "Струнный рубаб и ритмы дафа сопровождают песни и музыкальные традиции региона. Послушайте звучание памирских инструментов.": [
  "The stringed rubab and the rhythms of the daf accompany the region’s songs and musical traditions. Listen to the sound of Pamiri instruments.",
  "Рубоби торӣ ва зарбҳои даф суруду анъанаҳои мусиқии минтақаро ҳамроҳӣ мекунанд. Садои асбобҳои мусиқии помириро бишнавед."
 ],
 "Найти музыку на YouTube ↗": [
  "Find music on YouTube ↗",
  "Дар YouTube мусиқӣ ёбед ↗"
 ],
 "Подробнее о традициях: источники": [
  "More about the traditions: sources",
  "Бештар дар бораи анъанаҳо: манбаъҳо"
 ],
 "Памирская культура": [
  "Pamiri culture",
  "Фарҳанги помирӣ"
 ],
 "Состав и приготовление ширчоя": [
  "Ingredients and preparation of shirchoy",
  "Таркиб ва тарзи тайёр кардани шерчой"
 ],
 "ОТДОХНУТЬ И ПРОДОЛЖИТЬ ПУТЬ": [
  "REST AND CARRY ON",
  "ИСТИРОҲАТ ВА ИДОМАИ РОҲ"
 ],
 "Выберите точку на маршруте.<br>Найдите жильё и свяжитесь с хозяевами напрямую.": [
  "Pick a stop on your route.<br>Find accommodation and contact the hosts directly.",
  "Нуқтаеро дар масир интихоб кунед.<br>Манзил ёбед ва бевосита бо соҳибхонаҳо тамос гиред."
 ],
 "Выбор района проживания": [
  "Choose where to stay",
  "Интихоби ноҳияи иқомат"
 ],
 "Хорог": [
  "Khorog",
  "Хоруғ"
 ],
 "Ваханская долина": [
  "Wakhan Valley",
  "Водии Вахон"
 ],
 "Мургаб": [
  "Murghab",
  "Мурғоб"
 ],
 "Гостевой дом": [
  "Guesthouse",
  "Хонаи меҳмон"
 ],
 "Для остановки в Хороге": [
  "For a stop in Khorog",
  "Барои истодан дар Хоруғ"
 ],
 "Семейный гостевой дом: вариант для знакомства с городом перед продолжением маршрута.": [
  "A family guesthouse: a good way to get to know the city before continuing your route.",
  "Хонаи меҳмони оилавӣ: имконияти шиносоӣ бо шаҳр пеш аз идомаи масир."
 ],
 "Найти на карте <span aria-hidden=\"true\">↗</span>": [
  "Find on the map <span aria-hidden=\"true\">↗</span>",
  "Дар харита ёбед <span aria-hidden=\"true\">↗</span>"
 ],
 "Сайт гостевого дома ↗": [
  "Guesthouse website ↗",
  "Сайти хонаи меҳмон ↗"
 ],
 "Проживание в семье": [
  "Homestay",
  "Иқомат дар оила"
 ],
 "Гостевые дома Лангара": [
  "Langar guesthouses",
  "Хонаҳои меҳмони Лангар"
 ],
 "Для маршрута по Вахану": [
  "For a route through Wakhan",
  "Барои масир дар Вахон"
 ],
 "В Лангаре можно остановиться в семейном доме. Выберите вариант на карте и свяжитесь с хозяевами.": [
  "In Langar you can stay in a family home. Choose an option on the map and contact the hosts.",
  "Дар Лангар метавон дар хонаи оилавӣ истод. Варианти дилхоҳро дар харита интихоб кунед ва бо соҳибхонаҳо тамос гиред."
 ],
 "Об условиях проживания ↗": [
  "About accommodation conditions ↗",
  "Дар бораи шароити иқомат ↗"
 ],
 "Отель": [
  "Hotel",
  "Меҳмонхона"
 ],
 "Для остановки на Памирском тракте": [
  "For a stop on the Pamir Highway",
  "Барои истодан дар роҳи Помир"
 ],
 "Посмотрите варианты размещения и контакты на сайте отеля, затем уточните условия на ваши даты.": [
  "See room options and contacts on the hotel’s website, then confirm the terms for your dates.",
  "Вариантҳои ҷойгиркунӣ ва тамосҳоро дар сайти меҳмонхона бинед, сипас шартҳоро барои санаҳои худ равшан кунед."
 ],
 "Сайт отеля ↗": [
  "Hotel website ↗",
  "Сайти меҳмонхона ↗"
 ],
 "Перед бронированием": [
  "Before you book",
  "Пеш аз пешфармоиш"
 ],
 "Цены и наличие мест уточняйте у хозяев на ваши даты. Ссылки открываются в новой вкладке.": [
  "Confirm prices and availability with the hosts for your dates. Links open in a new tab.",
  "Нарх ва мавҷудияти ҷойҳоро бо соҳибхонаҳо барои санаҳои худ равшан кунед. Истинодҳо дар ҷадвали нав кушода мешаванд."
 ],
 "Что уточнить у хозяев?": [
  "What to ask the hosts?",
  "Аз соҳибхонаҳо чиро бояд пурсид?"
 ],
 "Стоимость за ночь и включено ли питание.": [
  "Price per night and whether meals are included.",
  "Нархи як шаб ва ё хӯрок дохил аст ё не."
 ],
 "Отдельная ли комната, где находятся душ и туалет.": [
  "Whether the room is private and where the shower and toilet are.",
  "Ҳуҷра алоҳида аст ё не ва душу ҳоҷатхона дар куҷо ҷойгир аст."
 ],
 "Есть ли горячая вода, отопление и электричество.": [
  "Whether there is hot water, heating and electricity.",
  "Оби гарм, гармкунӣ ва барқ ҳаст ё не."
 ],
 "Как добраться, во сколько заезд и как оплатить.": [
  "How to get there, check-in time and how to pay.",
  "Чӣ тавр расидан, вақти воридшавӣ ва тарзи пардохт."
 ],
 "Путешествие по Памиру": [
  "Travelling through the Pamirs",
  "Сафар ба Помир"
 ],
 "Памирский тракт, Ваханская долина и высокогорные ландшафты. Перед поездкой проверьте сезон, состояние дорог и местные требования.": [
  "The Pamir Highway, the Wakhan Valley and high-mountain landscapes. Before you go, check the season, road conditions and local requirements.",
  "Роҳи Помир, водии Вахон ва манзараҳои баландкӯҳ. Пеш аз сафар мавсим, ҳолати роҳҳо ва талаботи маҳаллиро санҷед."
 ],
 "Национальный парк Таджикистана в списке ЮНЕСКО": [
  "Tajik National Park on the UNESCO list",
  "Боғи миллии Тоҷикистон дар рӯйхати ЮНЕСКО"
 ],
 "Ваханская долина и Ямчун": [
  "Wakhan Valley and Yamchun",
  "Водии Вахон ва Ямчун"
 ],
 "Памирский тракт": [
  "Pamir Highway",
  "Роҳи Помир"
 ],
 "Калай-Хумб": [
  "Kalai-Khumb",
  "Қалъаи Хумб"
 ],
 "Хорог и окрестности": [
  "Khorog and surroundings",
  "Хоруғ ва атроф"
 ],
 "Горная дорога в сторону Калай-Хумба": [
  "A mountain road towards Kalai-Khumb",
  "Роҳи кӯҳӣ ба сӯи Қалъаи Хумб"
 ],
 "НЕ ПРОСТО ПОЕЗДКА": [
  "MORE THAN A TRIP",
  "НА ТАНҲО САФАР"
 ],
 "5 впечатлений, ради которых стоит посетить Памир": [
  "5 experiences that make the Pamirs worth visiting",
  "5 таассурот, ки барои онҳо Помирро бояд дид"
 ],
 "Выберите то, что откликается вам. Начните с одного — и соберите свою историю.": [
  "Choose what speaks to you. Start with one — and build your own story.",
  "Он чизеро интихоб кунед, ки ба шумо наздик аст. Аз як чиз оғоз кунед ва қиссаи худро созед."
 ],
 "Проехать по Памирскому тракту <span aria-hidden=\"true\">↗</span>": [
  "Drive the Pamir Highway <span aria-hidden=\"true\">↗</span>",
  "Бо роҳи Помир гузаштан <span aria-hidden=\"true\">↗</span>"
 ],
 "Проехать по Памирскому тракту": [
  "Drive the Pamir Highway",
  "Бо роҳи Помир гузаштан"
 ],
 "Маршрут": [
  "Route",
  "Масир"
 ],
 "Дорога, где каждый поворот — новый пейзаж.": [
  "A road where every bend reveals a new landscape.",
  "Роҳе, ки дар ҳар гардиши он манзараи нав аст."
 ],
 "Увидеть звёздное небо <span aria-hidden=\"true\">↗</span>": [
  "See the starry sky <span aria-hidden=\"true\">↗</span>",
  "Осмони пурситораро дидан <span aria-hidden=\"true\">↗</span>"
 ],
 "Увидеть звёздное небо": [
  "See the starry sky",
  "Осмони пурситораро дидан"
 ],
 "Тишина": [
  "Silence",
  "Оромӣ"
 ],
 "Остаться на вечер вдали от городских огней.": [
  "Spend an evening far from the city lights.",
  "Як шомро дур аз равшании шаҳр гузаронед."
 ],
 "Открыть Ваханскую долину <span aria-hidden=\"true\">↗</span>": [
  "Discover the Wakhan Valley <span aria-hidden=\"true\">↗</span>",
  "Водии Вахонро кашф кардан <span aria-hidden=\"true\">↗</span>"
 ],
 "Открыть Ваханскую долину": [
  "Discover the Wakhan Valley",
  "Водии Вахонро кашф кардан"
 ],
 "Открытия": [
  "Discoveries",
  "Кашфиётҳо"
 ],
 "Поселения, горные реки и широкие панорамы.": [
  "Villages, mountain rivers and wide panoramas.",
  "Деҳаҳо, дарёҳои кӯҳӣ ва манзараҳои васеъ."
 ],
 "Отдохнуть у горячих источников <span aria-hidden=\"true\">↗</span>": [
  "Relax at the hot springs <span aria-hidden=\"true\">↗</span>",
  "Дар назди чашмаҳои гарм истироҳат кардан <span aria-hidden=\"true\">↗</span>"
 ],
 "Отдохнуть у горячих источников": [
  "Relax at the hot springs",
  "Дар назди чашмаҳои гарм истироҳат кардан"
 ],
 "Добавить тёплую остановку в горный маршрут.": [
  "Add a warm stop to your mountain route.",
  "Ба масири кӯҳӣ истгоҳи гарм илова кунед."
 ],
 "Почувствовать гостеприимство <span aria-hidden=\"true\">↗</span>": [
  "Feel the hospitality <span aria-hidden=\"true\">↗</span>",
  "Меҳмоннавозиро эҳсос кардан <span aria-hidden=\"true\">↗</span>"
 ],
 "Почувствовать гостеприимство": [
  "Feel the hospitality",
  "Меҳмоннавозиро эҳсос кардан"
 ],
 "Традиции": [
  "Traditions",
  "Анъанаҳо"
 ],
 "Зайти в памирский дом и познакомиться с ширчоем.": [
  "Step into a Pamiri house and try shirchoy.",
  "Ба хонаи помирӣ дароед ва бо шерчой шинос шавед."
 ],
 "Идеи для путешествий по Памиру": [
  "Travel ideas for the Pamirs",
  "Ғояҳо барои сафар ба Помир"
 ],
 "Истории о горах, долинах и культуре Памира": [
  "Stories about the mountains, valleys and culture of the Pamirs",
  "Достонҳо дар бораи кӯҳҳо, водиҳо ва фарҳанги Помир"
 ],
 "Дорога через горы в сторону Калай-Хумба": [
  "A road through the mountains towards Kalai-Khumb",
  "Роҳ аз байни кӯҳҳо ба сӯи Қалъаи Хумб"
 ],
 "В путь через горы: дорога в сторону Калай-Хумба": [
  "On the road through the mountains: towards Kalai-Khumb",
  "Ба роҳ аз байни кӯҳҳо: ба сӯи Қалъаи Хумб"
 ],
 "Смотреть маршрут": [
  "View the route",
  "Масирро дидан"
 ],
 "Крепость Ямчун: история Ваханской долины": [
  "Yamchun Fortress: the story of the Wakhan Valley",
  "Қалъаи Ямчун: таърихи водии Вахон"
 ],
 "Смотреть места": [
  "View places",
  "Ҷойҳоро дидан"
 ],
 "Вопросы о поездке на Памир": [
  "Questions about travelling to the Pamirs",
  "Саволҳо дар бораи сафар ба Помир"
 ],
 "Когда лучше ехать в горы?": [
  "When is the best time to go to the mountains?",
  "Кай беҳтар аст ба кӯҳҳо рафт?"
 ],
 "Для большинства горных маршрутов удобнее планировать поездку на тёплый сезон. Погода и доступность дорог зависят от высоты и конкретного региона, поэтому проверяйте условия перед выездом.": [
  "For most mountain routes it is best to plan your trip for the warm season. Weather and road access depend on altitude and the specific region, so check conditions before you set off.",
  "Барои аксари масирҳои кӯҳӣ сафарро беҳтар аст дар мавсими гарм ба нақша гирифт. Обу ҳаво ва дастрасии роҳҳо аз баландӣ ва минтақаи мушаххас вобаста аст, бинобар ин пеш аз баромадан шароитро санҷед."
 ],
 "Нужен ли гид для поездки по Памиру?": [
  "Do you need a guide for a trip to the Pamirs?",
  "Оё барои сафар ба Помир роҳбалад лозим аст?"
 ],
 "Для дальних горных маршрутов местный гид поможет спланировать путь и учесть дорожные условия. Перед поездкой уточните актуальные требования для выбранного района.": [
  "For long mountain routes a local guide will help you plan the way and account for road conditions. Before you go, check the current requirements for your chosen area.",
  "Барои масирҳои дури кӯҳӣ роҳбалади маҳаллӣ дар банақшагирии роҳ ва ба инобат гирифтани шароити роҳ кӯмак мекунад. Пеш аз сафар талаботи ҳозираи ноҳияи интихобкардаатонро равшан кунед."
 ],
 "Что взять с собой в горное путешествие?": [
  "What should you take on a mountain trip?",
  "Дар сафари кӯҳӣ чиро бояд бо худ бурд?"
 ],
 "Возьмите удобную обувь, тёплую одежду слоями, воду и защиту от солнца. В горах погода может быстро меняться.": [
  "Bring comfortable footwear, warm layered clothing, water and sun protection. Mountain weather can change quickly.",
  "Пойафзоли қулай, либоси гарми қабатӣ, об ва муҳофизат аз офтобро бо худ бигиред. Обу ҳавои кӯҳҳо метавонад зуд тағйир ёбад."
 ],
 "Откройте для себя Памир": [
  "Discover the Pamirs",
  "Помирро кашф кунед"
 ],
 "Выберите маршрут по Памирскому тракту, загляните в Ваханскую долину и познакомьтесь с горными селениями.": [
  "Pick a route along the Pamir Highway, look into the Wakhan Valley and get to know the mountain villages.",
  "Масирро дар роҳи Помир интихоб кунед, ба водии Вахон нигаред ва бо деҳаҳои кӯҳӣ шинос шавед."
 ],
 "Популярные направления": [
  "Popular destinations",
  "Самтҳои машҳур"
 ],
 "Выбрать маршрут": [
  "Choose a route",
  "Масирро интихоб кунед"
 ],
 "Уточняйте погоду, состояние дорог и правила посещения перед поездкой.": [
  "Check the weather, road conditions and visiting rules before you travel.",
  "Пеш аз сафар обу ҳаво, ҳолати роҳҳо ва қоидаҳои боздидро санҷед."
 ],
 "Памир, в начало страницы": [
  "Pamir, back to top",
  "Помир, ба боло"
 ],
 "Горный пейзаж Памира": [
  "Mountain landscape of the Pamirs",
  "Манзараи кӯҳии Помир"
 ],
 "Откройте Памир: горные долины, древние крепости и живые традиции. Выбирайте направление и планируйте поездку.": [
  "Discover the Pamirs: mountain valleys, ancient fortresses and living traditions. Choose a destination and plan your trip.",
  "Помирро кашф кунед: водиҳои кӯҳӣ, қалъаҳои қадим ва анъанаҳои зинда. Самтро интихоб кунед ва сафарро ба нақша гиред."
 ],
 "О Памире": [
  "About the Pamirs",
  "Дар бораи Помир"
 ],
 "Культура Памира": [
  "Culture of the Pamirs",
  "Фарҳанги Помир"
 ],
 "Рекомендуемые места": [
  "Recommended places",
  "Ҷойҳои тавсияшаванда"
 ],
 "Статьи о путешествиях": [
  "Travel articles",
  "Мақолаҳо дар бораи сафар"
 ],
 "Путешественникам": [
  "For travellers",
  "Барои сайёҳон"
 ],
 "Впечатления Памира": [
  "Impressions of the Pamirs",
  "Таассуроти Помир"
 ],
 "Частые вопросы": [
  "FAQ",
  "Саволҳои маъмул"
 ],
 "Новости и предложения": [
  "News and offers",
  "Хабарҳо ва пешниҳодҳо"
 ],
 "Разделы сайта": [
  "Site sections",
  "Бахшҳои сайт"
 ],
 "В начало страницы": [
  "Back to top",
  "Ба аввали саҳифа"
 ],
 "Блог": [
  "Blog",
  "Блог"
 ],
 "Помощь туристам": [
  "Help for tourists",
  "Кӯмак ба сайёҳон"
 ],
 "Админ-панель": [
  "Admin panel",
  "Панели идоракунӣ"
 ],
 "Путешествия по Памиру": [
  "Travel the Pamirs",
  "Сафар ба Помир"
 ],
 "Памирский ботанический сад": [
  "Pamir Botanical Garden",
  "Боғи ботаникии Помир"
 ],
 "Источники Биби Фотима": [
  "Bibi Fatima springs",
  "Чашмаҳои Бибии Фотима"
 ],
 "Озеро Яшилькуль": [
  "Lake Yashilkul",
  "Кӯли Ёшилкӯл"
 ],
 "Озеро Каракуль": [
  "Lake Karakul",
  "Кӯли Қарокӯл"
 ],
 "Город": [
  "City",
  "Шаҳр"
 ],
 "прогулки": [
  "walks",
  "сайр"
 ],
 "культура": [
  "culture",
  "фарҳанг"
 ],
 "отдых": [
  "relaxation",
  "истироҳат"
 ],
 "Долина": [
  "Valley",
  "Водӣ"
 ],
 "пейзажи": [
  "landscapes",
  "манзараҳо"
 ],
 "архитектура": [
  "architecture",
  "меъморӣ"
 ],
 "традиции": [
  "traditions",
  "анъанаҳо"
 ],
 "Озеро": [
  "Lake",
  "Кӯл"
 ],
 "фотографии": [
  "photography",
  "аксбардорӣ"
 ],
 "горные ландшафты": [
  "mountain landscapes",
  "манзараҳои кӯҳӣ"
 ],
 "маршрут": [
  "route",
  "масир"
 ],
 "Город среди гор и отправная точка для знакомства с Памиром.": [
  "A city among the mountains and a starting point for getting to know the Pamirs.",
  "Шаҳре дар миёни кӯҳҳо ва нуқтаи оғози шиносоӣ бо Помир."
 ],
 "Сад рядом с Хорогом: прогулка среди растений и виды на горную долину.": [
  "A garden near Khorog: a walk among plants with views of the mountain valley.",
  "Боғ дар назди Хоруғ: сайр дар миёни растаниҳо ва манзараи водии кӯҳӣ."
 ],
 "Горячие минеральные источники и необычные природные натёчные образования.": [
  "Hot mineral springs and unusual natural travertine formations.",
  "Чашмаҳои гарми маъданӣ ва ҳосилаҳои табиии ғайриоддии оҳакӣ."
 ],
 "Горные пейзажи, поселения и крепости. Точка на карте обозначает район Лангара в долине.": [
  "Mountain scenery, villages and fortresses. The point on the map marks the Langar area of the valley.",
  "Манзараҳои кӯҳӣ, деҳаҳо ва қалъаҳо. Нуқтаи харита ноҳияи Лангарро дар водӣ нишон медиҳад."
 ],
 "Крепость на склоне над Ваханской долиной с панорамным видом на горы.": [
  "A fortress on a slope above the Wakhan Valley with a panoramic view of the mountains.",
  "Қалъае дар нишеби болои водии Вахон бо манзараи панорамии кӯҳҳо."
 ],
 "Горячие источники неподалёку от крепости Ямчун. Можно совместить посещение двух мест.": [
  "Hot springs close to Yamchun Fortress. You can combine a visit to both places.",
  "Чашмаҳои гарм дар наздикии қалъаи Ямчун. Боздид аз ду ҷойро метавон муттаҳид кард."
 ],
 "Высокогорное озеро Восточного Памира, окружённое суровыми горными ландшафтами.": [
  "A high-mountain lake in the Eastern Pamirs surrounded by rugged mountain landscapes.",
  "Кӯли баландкӯҳ дар Помири Шарқӣ, ки манзараҳои сахти кӯҳӣ иҳота кардаанд."
 ],
 "Высокогорный городок и остановка для знакомства с Восточным Памиром.": [
  "A high-altitude town and a stop for getting to know the Eastern Pamirs.",
  "Шаҳрчаи баландкӯҳ ва истгоҳ барои шиносоӣ бо Помири Шарқӣ."
 ],
 "Большое высокогорное озеро Восточного Памира с открытыми панорамами.": [
  "A large high-mountain lake in the Eastern Pamirs with open panoramas.",
  "Кӯли калони баландкӯҳ дар Помири Шарқӣ бо манзараҳои кушод."
 ],
 "Остановка на дороге к Памиру, откуда можно продолжить путешествие к Хорогу.": [
  "A stop on the road to the Pamirs, from where you can continue your journey to Khorog.",
  "Истгоҳ дар роҳ ба Помир, ки аз он сафарро ба сӯи Хоруғ идома додан мумкин аст."
 ],
 "Открыть в Google Maps ↗": [
  "Open in Google Maps ↗",
  "Дар Google Maps кушоед ↗"
 ],
 "Найдено мест: {a} из {b}": [
  "Places found: {a} of {b}",
  "Ҷойҳо ёфт шуд: {a} аз {b}"
 ],
 "Ничего не найдено. Измените запрос или нажмите «Показать всё».": [
  "Nothing found. Change your search or press “Show all”.",
  "Чизе ёфт нашуд. Дархостро тағйир диҳед ё «Ҳамаро нишон диҳед»-ро пахш кунед."
 ],
 "Выберите другое название или категорию.": [
  "Choose a different name or category.",
  "Номи дигар ё категорияи дигарро интихоб кунед."
 ],
 "Фон карты недоступен. Список мест и ссылки Google Maps продолжают работать.": [
  "The map background is unavailable. The list of places and Google Maps links still work.",
  "Заминаи харита дастнорас аст. Рӯйхати ҷойҳо ва истинодҳои Google Maps кор карданро идома медиҳанд."
 ],
 "Карта не загрузилась. Выберите место в списке и откройте его в Google Maps.": [
  "The map failed to load. Choose a place from the list and open it in Google Maps.",
  "Харита бор нашуд. Ҷойро аз рӯйхат интихоб кунед ва онро дар Google Maps кушоед."
 ],
 "Показано вариантов: {n}": [
  "Options shown: {n}",
  "Вариантҳо нишон дода шуданд: {n}"
 ]
};

  const INLINE = new Set(['BR', 'EM', 'SPAN', 'STRONG', 'B', 'I']);
  const SKIP = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'SVG']);
  const ATTRS = ['aria-label', 'alt', 'placeholder', 'title'];
  const norm = s => s.replace(/\s+/g, ' ').trim();
  const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const box = document.createElement('textarea');
  const decode = html => { box.innerHTML = html; return box.value; };

  let lang = 'ru';
  try { const saved = localStorage.getItem(STORE); if (LANGS.includes(saved)) lang = saved; } catch { /* storage blocked */ }

  const listeners = [];
  const units = [];
  const pick = (key, l) => { const row = DICT[key]; return row ? row[l === 'en' ? 0 : 1] : null; };

  /* t(): translate a Russian string for scripts (places.js, stays.js). Returns plain text. */
  function t(ru, vars) {
    let out = lang === 'ru' ? ru : decode(pick(ru, lang) ?? esc(ru));
    if (vars) for (const k in vars) out = out.replace('{' + k + '}', vars[k]);
    return out;
  }

  /* ---- find translatable pieces once, on the original Russian markup ---- */
  const inlineOnly = el => [...el.children].every(c => INLINE.has(c.tagName) && inlineOnly(c));
  const hasOwnText = el => [...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim());

  function scan(el) {
    if (SKIP.has(el.tagName.toUpperCase())) return;
    for (const attr of ATTRS) {
      const v = el.getAttribute(attr);
      if (v && DICT[norm(esc(v))]) units.push({ kind: 'attr', el, attr, ru: v, key: norm(esc(v)) });
    }
    if (hasOwnText(el) && inlineOnly(el)) {
      const key = norm(el.innerHTML);
      if (DICT[key]) units.push({ kind: 'html', el, ru: el.innerHTML, key });
      return;
    }
    el.childNodes.forEach(n => {
      if (n.nodeType === 3) {
        const key = norm(esc(n.textContent));
        if (key && DICT[key]) units.push({ kind: 'text', node: n, ru: n.textContent, key });
      } else if (n.nodeType === 1) scan(n);
    });
  }
  scan(document.body);
  const titleKey = norm(esc(document.title));
  const ruTitle = document.title;

  function apply() {
    document.documentElement.lang = HTML_LANG[lang];
    units.forEach(u => {
      const tr = lang === 'ru' ? null : pick(u.key, lang);
      if (u.kind === 'html') u.el.innerHTML = tr ?? u.ru;
      else if (u.kind === 'attr') u.el.setAttribute(u.attr, tr === null ? u.ru : decode(tr));
      else {
        const lead = u.ru.match(/^\s*/)[0], trail = u.ru.match(/\s*$/)[0];
        u.node.textContent = tr === null ? u.ru : lead + decode(tr) + trail;
      }
    });
    document.title = lang === 'ru' ? ruTitle : decode(pick(titleKey, lang) ?? esc(ruTitle));
    document.querySelectorAll('[data-lang]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  }

  function setLang(next) {
    if (!LANGS.includes(next) || next === lang) return;
    lang = next;
    try { localStorage.setItem(STORE, lang); } catch { /* ignore */ }
    apply();
    listeners.forEach(fn => fn(lang));
  }

  document.querySelectorAll('[data-lang]').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));
  apply();

  window.I18N = { t, setLang, onChange: fn => listeners.push(fn), get lang() { return lang; } };
})();
