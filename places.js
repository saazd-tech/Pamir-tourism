(() => {
 const T = window.I18N ? window.I18N.t : s => s;
 const places = JSON.parse(document.querySelector('#places-data').textContent).filter(p => p.id !== 'yamchun');
 const list = document.querySelector('#place-list'), detail = document.querySelector('#place-detail');
 const search = document.querySelector('#place-search'), category = document.querySelector('#place-category');
 const count = document.querySelector('#place-count'), status = document.querySelector('#map-status');
 const mapBox = document.querySelector('#pamir-map');
 const noteRu = 'Точки обозначают места и районы, а не готовый автомобильный маршрут.';
 let selected = places[0].id, map, layer, tileFailed = false;
 const markers = new Map();
 const mapsUrl = p => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(p.query);
 const tagsOf = p => p.tags.split(' · ').map(x => T(x)).join(' · ');
 function select(p, zoom = true) {
  selected = p.id;
  list.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.id === selected)));
  detail.innerHTML = `<div class="detail-photo pic-${p.id}" role="img" aria-label="${T(p.title)}"></div><div><p class="culture-eyebrow">${tagsOf(p)}</p><h3>${T(p.title)}</h3><p>${T(p.description)}</p><a class="place-map-link" href="${mapsUrl(p)}" target="_blank" rel="noopener noreferrer">${T('Открыть в Google Maps')} ↗</a></div>`;
  if (map && markers.has(p.id)) {
   if (zoom) map.setView([p.lat,p.lng], p.id === 'wakhan' || p.category === 'nature' && p.id !== 'garden' ? 10 : 13);
   markers.get(p.id).openPopup();
  }
 }
 function render(fit = true) {
  const term = search.value.trim().toLocaleLowerCase('ru');
  const visible = places.filter(p => (category.value === 'all' || p.category === category.value) &&
   (p.title+' '+p.tags+' '+T(p.title)+' '+tagsOf(p)).toLocaleLowerCase('ru').includes(term));
  list.replaceChildren();
  if (layer) layer.clearLayers();
  markers.clear();
  visible.forEach(p => {
   const b = document.createElement('button'); b.type='button'; b.dataset.id=p.id;
   b.className='place-choice'; b.setAttribute('aria-pressed', String(p.id === selected));
   const index=places.indexOf(p)+1;
   b.innerHTML=`<span class="place-index">${String(index).padStart(2,'0')}</span><span><strong>${T(p.title)}</strong><small>${tagsOf(p)}</small></span><span aria-hidden="true">↗</span>`;
   b.addEventListener('click',()=>select(p)); list.append(b);
   if (map) {
    const marker=L.marker([p.lat,p.lng],{title:T(p.title),alt:T(p.title),icon:L.divIcon({className:'pamir-pin',html:`<span>${index}</span>`,iconSize:[32,32],iconAnchor:[16,16]})}).addTo(layer).bindPopup(`<strong>${T(p.title)}</strong><br>${tagsOf(p)}`);
    marker.on('click',()=>select(p,false)); markers.set(p.id,marker);
   }
  });
  count.textContent=T('Найдено мест: {a} из {b}',{a:visible.length,b:places.length});
  if (!visible.length) { list.innerHTML='<p class="map-empty">'+T('Ничего не найдено. Измените запрос или нажмите «Показать всё».')+'</p>'; detail.innerHTML='<p class="map-empty">'+T('Выберите место из списка.')+'</p>'; }
  else { select(visible.find(p=>p.id===selected)||visible[0],false); if(map && fit) map.fitBounds(visible.map(p=>[p.lat,p.lng]),{padding:[35,35],maxZoom:12}); }
 }
 function showNotes() {
  status.textContent = tileFailed ? T('Фон карты недоступен. Список мест и ссылки Google Maps продолжают работать.') : T(noteRu);
  if (!window.L) mapBox.innerHTML='<p class="map-empty">'+T('Карта не загрузилась. Выберите место в списке и откройте его в Google Maps.')+'</p>';
 }
 if (window.L) {
  map=L.map('pamir-map',{scrollWheelZoom:false}).setView([37.8,72.3],7);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:18,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).on('tileerror',()=>{tileFailed=true;showNotes();}).addTo(map);
  layer=L.layerGroup().addTo(map);
 } else showNotes();
 search.addEventListener('input',()=>render()); category.addEventListener('change',()=>render());
 document.querySelector('#map-reset').addEventListener('click',()=>{search.value='';category.value='all';render();});
 if (window.I18N) window.I18N.onChange(() => { render(false); showNotes(); });
 render();
})();
