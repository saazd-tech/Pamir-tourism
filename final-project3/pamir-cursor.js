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
})();
