const topics = document.querySelector('#topics');
const intro = document.querySelector('#intro');
const view = document.querySelector('#view');
const homeHero = document.querySelector('#home-hero');
const main = document.querySelector('main');
const query = document.querySelector('#query');
const clear = document.querySelector('#clear');
const status = document.querySelector('#status');

const entries = chapters.flatMap(chapter => chapter.docs.map(doc => ({ chapter, doc })));
const quickIds = ['auto-layout', 'mobile-first', 'variables', 'interactions', 'handoff'];
const entities = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => entities[character]);
}

function articleLink({ id, title }) {
  return `<a href="#${id}">${escapeHtml(title)}</a>`;
}

function showNav(active) {
  const links = chapters.map(({ title, id }) => `
    <a href="#chapitre-${id}"${id === active ? ' aria-current="true"' : ''}>
      <small>${id}</small> ${escapeHtml(title)}
    </a>
  `);
  topics.innerHTML = `
    <a href="#"${active ? '' : ' aria-current="page"'}>Vue d’ensemble</a>
    ${links.join('')}
  `;
}

function chapterTile({ title, id, summary, docs }) {
  return `
    <section class="tile">
      <span class="number">${id}</span>
      <h2>${escapeHtml(title)}</h2>
      <p>${escapeHtml(summary)}</p>
      <span class="count">${docs.length} fiches</span>
      <a href="#chapitre-${id}">Voir le chapitre <span class="hint">· ${escapeHtml(title)}</span></a>
    </section>
  `;
}

function docTile({ chapter, doc }) {
  return `
    <section class="tile">
      <span class="number">${escapeHtml(chapter.title)}</span>
      <h2>${articleLink(doc)}</h2>
      <p>${escapeHtml(doc.purpose)}</p>
    </section>
  `;
}

function home() {
  const hero = homeHero.content.cloneNode(true);
  hero.querySelector('[data-count="docs"]').textContent = `${entries.length} fiches`;
  hero.querySelector('[data-count="chapters"]').textContent = `${chapters.length} chapitres`;
  intro.replaceChildren(hero);

  const links = quickIds.map(id => articleLink(entries.find(({ doc }) => doc.id === id).doc));
  view.innerHTML = `
    <div class="grid">${chapters.map(chapterTile).join('')}</div>
    <section class="quick">
      <h2>Accès rapides</h2>
      <div>${links.join('')}</div>
    </section>
  `;
}

function chapterPage(chapter) {
  const tiles = chapter.docs.map(doc => docTile({ chapter, doc }));
  view.innerHTML = `
    <div class="section-heading">
      <a class="crumb" href="#">Vue d’ensemble</a>
      <h1>${escapeHtml(chapter.title)}</h1>
      <p>${escapeHtml(chapter.summary)}</p>
    </div>
    <div class="grid">${tiles.join('')}</div>
  `;
}

function articlePage({ chapter, doc }) {
  const { title, purpose, steps, advice, source } = doc;
  const instructions = steps.split(/(?<=\.) (?=[A-ZÀ-Ü])/)
    .map(step => `<li>${escapeHtml(step)}</li>`);
  const links = chapter.docs.filter(item => item !== doc).map(articleLink);

  view.innerHTML = `
    <article class="article">
      <a class="crumb" href="#chapitre-${chapter.id}">← ${escapeHtml(chapter.title)}</a>
      <h1>${escapeHtml(title)}</h1>
      <p>${escapeHtml(purpose)}</p>
      <h2>Dans Figma</h2>
      <ol>${instructions.join('')}</ol>
      <aside class="callout">
        <h2>Bonne pratique</h2>
        <p>${escapeHtml(advice)}</p>
      </aside>
      <h2>Documentation officielle</h2>
      <p><a href="${escapeHtml(source)}">Consulter la référence ↗</a></p>
      <h2>Dans le même chapitre</h2>
      <div class="related">${links.join('')}</div>
    </article>
  `;
}

function normalize(value) {
  return value.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');
}

function showResults(words) {
  const matches = entries.filter(({ chapter, doc }) => {
    const { title, keywords, purpose, steps, advice } = doc;
    const corpus = normalize([chapter.title, title, keywords, purpose, steps, advice].join(' '));
    return words.every(word => corpus.includes(word));
  });

  status.textContent = `${matches.length} ${matches.length === 1 ? 'fiche trouvée' : 'fiches trouvées'}`;
  view.innerHTML = matches.length
    ? `<div class="grid">${matches.map(docTile).join('')}</div>`
    : '<p class="empty">Essaie un terme comme « mobile », « prototype » ou « variables ».</p>';
}

function render() {
  const route = location.hash.slice(1);
  const entry = entries.find(({ doc }) => doc.id === route);
  const chapter = chapters.find(({ id }) => `chapitre-${id}` === route);

  showNav(entry?.chapter.id ?? chapter?.id);
  document.title = `${entry?.doc.title ?? chapter?.title ?? 'Manuel de référence'} · Lab Figma`;
  intro.replaceChildren();
  clear.hidden = !query.value;

  const words = normalize(query.value.trim()).split(/\s+/).filter(Boolean);
  if (words.length) {
    showResults(words);
    return;
  }

  status.textContent = '';
  if (entry) {
    articlePage(entry);
  } else if (chapter) {
    chapterPage(chapter);
  } else {
    home();
  }
}

query.addEventListener('input', render);
query.form.addEventListener('submit', event => event.preventDefault());
clear.addEventListener('click', () => {
  query.value = '';
  render();
  query.focus();
});

document.addEventListener('click', event => {
  const link = event.target.closest('a[href^="#"]');
  if (link && link.hash !== '#contenu' && query.value && link.hash === location.hash) {
    query.value = '';
    render();
    main.focus({ preventScroll: true });
  }
});

window.addEventListener('hashchange', () => {
  if (location.hash === '#contenu') return;

  query.value = '';
  render();
  window.scrollTo(0, 0);
  main.focus({ preventScroll: true });
});

render();
