(() => {
  const button = document.querySelector('[data-map-picker]');
  const mapInput = document.getElementById('map');
  let mapWindow = null;

  if (!button || !mapInput) return;

  const language = () => {
    try { return localStorage.getItem('tajikistanTourismLang') || 'ru'; }
    catch { return 'ru'; }
  };

  const text = {
    ru: { choose: 'Использовать это место', blocked: 'Разрешите всплывающее окно, чтобы открыть карту.' },
    en: { choose: 'Use this place', blocked: 'Allow the map popup to open the map.' },
    tj: { choose: 'Ин ҷойро интихоб кунед', blocked: 'Барои кушодани харита равзанаи поп-апро иҷозат диҳед.' }
  };

  function sendSelectedPlace(title) {
    if (!title || !mapWindow || mapWindow.closed) return;
    mapWindow.postMessage({ type: 'pamir-place-selected', title }, window.location.origin);
    mapWindow.close();
  }

  function connectMapPicker(child) {
    const childDoc = child.document;
    const placeData = childDoc.getElementById('places-data');
    const placeList = childDoc.getElementById('place-list');
    const detail = childDoc.getElementById('place-detail');
    if (!placeData || !placeList || !detail) return;

    let places;
    try { places = JSON.parse(placeData.textContent); }
    catch { return; }

    placeList.addEventListener('click', event => {
      const choice = event.target.closest('.place-choice[data-id]');
      if (!choice) return;
      const place = places.find(item => item.id === choice.dataset.id);
      if (place) sendSelectedPlace(place.title);
    });

    const addConfirmButton = () => {
      if (detail.querySelector('[data-admin-place-confirm]')) return;
      const heading = detail.querySelector('h3');
      if (!heading) return;
      const confirm = childDoc.createElement('button');
      confirm.type = 'button';
      confirm.dataset.adminPlaceConfirm = 'true';
      confirm.textContent = text[language()]?.choose || text.ru.choose;
      confirm.style.cssText = 'margin-top:14px;padding:10px 15px;border:0;border-radius:8px;background:#1b7f84;color:#fff;font:inherit;font-weight:700;cursor:pointer';
      confirm.addEventListener('click', () => {
        const place = places.find(item => item.title === heading.textContent.trim());
        if (place) sendSelectedPlace(place.title);
      });
      detail.appendChild(confirm);
    };

    new child.MutationObserver(addConfirmButton).observe(detail, { childList: true, subtree: true });
    addConfirmButton();
  }

  button.addEventListener('click', () => {
    mapWindow = window.open('./new.html#hotels', 'pamir-place-picker');
    if (!mapWindow) {
      const status = document.getElementById('status');
      if (status) status.textContent = text[language()]?.blocked || text.ru.blocked;
      return;
    }

    const poll = window.setInterval(() => {
      if (mapWindow.closed) {
        window.clearInterval(poll);
        return;
      }
      try {
        if (mapWindow.document.readyState === 'complete' && mapWindow.document.getElementById('place-list')) {
          window.clearInterval(poll);
          connectMapPicker(mapWindow);
        }
      } catch {
        window.clearInterval(poll);
      }
    }, 150);
  });

  window.addEventListener('message', event => {
    if (event.origin !== window.location.origin || event.source !== mapWindow) return;
    if (event.data?.type !== 'pamir-place-selected' || typeof event.data.title !== 'string') return;
    mapInput.value = event.data.title;
    mapInput.dispatchEvent(new Event('input', { bubbles: true }));
    mapInput.focus();
  });
})();
