const CATEGORIES  = ['Consoles','Mangas','Jogos','Arcade','Em alta','Assinaturas','Softwares'];
let activeCategory = 'Em alta';
let activeSlide    = 0;
const TOTAL_SLIDES = 3;
const TOTAL_CARDS  = 5;

/* ── Submenu de categorias ── */
function buildCatMenu() {
  const container = document.getElementById('cat-menu');
  container.innerHTML = '';
  CATEGORIES.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'cat-btn' + (cat === activeCategory ? ' active' : '');
    btn.textContent = cat;
    btn.addEventListener('click', () => {
      activeCategory = cat;
      document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.mobile-cat-list button').forEach(b => {
        b.classList.toggle('active', b.textContent === cat);
      });
    });
    container.appendChild(btn);
  });
}

/* ── Menu Mobile ── */
function buildMobileMenu() {
  const list = document.getElementById('mobile-cat-list');
  list.innerHTML = '';
  CATEGORIES.forEach(cat => {
    const btn = document.createElement('button');
    btn.textContent = cat;
    if (cat === activeCategory) btn.classList.add('active');
    btn.addEventListener('click', () => {
      activeCategory = cat;
      document.querySelectorAll('.mobile-cat-list button, .cat-btn').forEach(b => {
        b.classList.toggle('active', b.textContent === cat);
      });
      closeOverlay();
    });
    list.appendChild(btn);
  });
}

function openOverlay()  { document.getElementById('mobile-overlay').classList.add('open');    document.body.style.overflow = 'hidden'; }
function closeOverlay() { document.getElementById('mobile-overlay').classList.remove('open'); document.body.style.overflow = '';       }

document.getElementById('hamburger-btn').addEventListener('click', openOverlay);
document.getElementById('mobile-close').addEventListener('click', closeOverlay);

/* ── Pontinhos do carrossel - dots slider ── */
function buildDots() {
  const container = document.getElementById('hero-dots');
  container.innerHTML = '';
  for (let i = 0; i < TOTAL_SLIDES; i++) {
    const btn = document.createElement('button');
    btn.className = 'hero-dot' + (i === activeSlide ? ' active' : '');
    btn.setAttribute('aria-label', 'Slide ' + (i + 1));
    btn.addEventListener('click', function() {
      activeSlide = i;
      document.querySelectorAll('.hero-dot').forEach(function(d, j) {
        d.classList.toggle('active', j === i);
      });
    });
    container.appendChild(btn);
  }
}

setInterval(function() {
  activeSlide = (activeSlide + 1) % TOTAL_SLIDES;
  document.querySelectorAll('.hero-dot').forEach(function(d, j) {
    d.classList.toggle('active', j === activeSlide);
  });
}, 4000);

/* ── Esqueleto dos cards ── */
function buildCards() {
  const grid = document.getElementById('product-grid');
  grid.innerText = "Carregando produtos...";
  grid.innerHTML = ''; 
  grid.style.backgroundColor = "black";
  for (let i = 0; i < TOTAL_CARDS; i++) {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.animation = 'slide-in .5s ease ' + (i * 0.08) + 's both';
    card.innerHTML =
      '<div class="card-img"></div>' +
      '<div class="card-body">' +
        '<div class="card-line" style="height:13px;width:80%"></div>' +
        '<div class="card-line" style="height:11px;width:55%"></div>' +
        '<div class="card-line" style="height:18px;width:42%"></div>' +
      '</div>';
    grid.appendChild(card);
  }
}

/* ── Init - inicialização ── */
buildCatMenu();
buildMobileMenu();
buildDots();
buildCards();