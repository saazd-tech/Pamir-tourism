(() => {
 const section = document.querySelector('#stays');
 if (!section) return;
 const T = window.I18N ? window.I18N.t : s => s;
 const filters = section.querySelector('.stay-filters');
 const buttons = [...filters.querySelectorAll('button')];
 const cards = [...section.querySelectorAll('.stay-card')];
 const counter = section.querySelector('.stay-count');
 let shown = cards.filter(card => !card.hidden).length;
 const showCount = () => { counter.textContent = T('Показано вариантов: {n}', { n: shown }); };
 filters.hidden = false;
 buttons.forEach(button => button.addEventListener('click', () => {
  const chosen = button.dataset.stayFilter;
  buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  shown = 0;
  cards.forEach(card => {
   card.hidden = chosen !== 'all' && card.dataset.stayRegion !== chosen;
   if (!card.hidden) shown++;
  });
  showCount();
 }));
 if (window.I18N) window.I18N.onChange(showCount);
 showCount();
})();
