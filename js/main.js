/* =============================================
   SERENA — Main JS
   ============================================= */

// ---------- BAG / CART STATE ----------
const bag = {
  items: JSON.parse(localStorage.getItem('serena_bag') || '[]'),

  add(product) {
    const existing = this.items.find(i => i.id === product.id && i.size === product.size);
    if (existing) {
      existing.qty += 1;
    } else {
      this.items.push({ ...product, qty: 1 });
    }
    this.save();
    this.render();
    openDrawer(); // only called here (on explicit add), NOT on page load
    showToast(`Added ${product.name} to bag`);
  },

  remove(id, size) {
    this.items = this.items.filter(i => !(i.id === id && i.size === size));
    this.save();
    this.render();
  },

  count() {
    return this.items.reduce((sum, i) => sum + i.qty, 0);
  },

  total() {
    return this.items.reduce((sum, i) => sum + i.price * i.qty, 0);
  },

  save() {
    localStorage.setItem('serena_bag', JSON.stringify(this.items));
    updateBagCount();
  },

  render() {
    const body = document.getElementById('drawer-body');
    const foot = document.getElementById('drawer-foot');
    if (!body) return;

    if (this.items.length === 0) {
      const emptyText = (typeof t === 'function') ? t('bag_empty') : 'Your bag is softly empty.';
      const shopText  = (typeof t === 'function') ? t('bag_shop')  : 'Shop the drop';
      body.innerHTML = `
        <div class="drawer__empty">
          <p>${emptyText}</p>
          <a href="collections.html" class="btn btn--ghost" onclick="closeDrawer()">${shopText}</a>
        </div>
      `;
      if (foot) foot.style.display = 'none';
      return;
    }

    if (foot) foot.style.display = 'block';
    const sizeLabel   = (typeof t === 'function') ? t('bag_size')   : 'Size';
    const qtyLabel    = (typeof t === 'function') ? t('bag_qty')    : 'Qty';
    const removeLabel = (typeof t === 'function') ? t('bag_remove') : 'Remove';
    body.innerHTML = this.items.map(item => `
      <div class="drawer__item">
        <div class="drawer__item-img">${productSVG(item.id, '#E8DCC4')}</div>
        <div>
          <div class="drawer__item-name">${item.name}</div>
          <div class="drawer__item-meta">${sizeLabel} ${item.size} · ${qtyLabel} ${item.qty}</div>
          <button class="drawer__item-remove" onclick="bag.remove('${item.id}','${item.size}')">${removeLabel}</button>
        </div>
        <div class="drawer__item-price">$${(item.price * item.qty).toFixed(0)}</div>
      </div>
    `).join('');

    const totalEl = document.getElementById('drawer-total');
    if (totalEl) totalEl.textContent = `$${this.total().toFixed(0)}`;
  }
};

function updateBagCount() {
  const el = document.getElementById('bag-count');
  if (el) {
    const c = bag.count();
    el.textContent = c;
    el.style.display = c > 0 ? 'flex' : 'none';
  }
}

function openDrawer() {
  document.getElementById('drawer')?.classList.add('drawer--open');
  document.getElementById('drawer-overlay')?.classList.add('drawer__overlay--show');
  document.body.style.overflow = 'hidden';
}
window.openDrawer = openDrawer;
function closeDrawer() {
  document.getElementById('drawer')?.classList.remove('drawer--open');
  document.getElementById('drawer-overlay')?.classList.remove('drawer__overlay--show');
  document.body.style.overflow = '';
  document.body.style.overflow = '';
}

// Make closeDrawer globally accessible even if called before full init
window.closeDrawer = closeDrawer;

// ---------- TOAST ----------
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('toast--show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('toast--show'), 2400);
}

// ---------- PRODUCT SVG GENERATORS ----------
function productSVG(id, bg = '#E8DCC4') {
  const items = {
    serenity: `
      <svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <rect width="300" height="400" fill="${bg}"/>
        <g transform="translate(150,200)">
          <path d="M-60,-80 Q-70,-90 -50,-100 L50,-100 Q70,-90 60,-80 L70,80 L-70,80 Z" fill="#A8B5A0" opacity="0.9"/>
          <line x1="-25" y1="-95" x2="-25" y2="-70" stroke="#3D2F2A" stroke-width="1" opacity="0.4"/>
          <line x1="0" y1="-100" x2="0" y2="-70" stroke="#3D2F2A" stroke-width="1" opacity="0.4"/>
          <line x1="25" y1="-95" x2="25" y2="-70" stroke="#3D2F2A" stroke-width="1" opacity="0.4"/>
        </g>
        <text x="150" y="370" font-family="Cormorant Garamond, serif" font-size="14" font-style="italic" fill="#3D2F2A" text-anchor="middle" opacity="0.6">serenity</text>
      </svg>`,
    ease: `
      <svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <rect width="300" height="400" fill="${bg}"/>
        <g transform="translate(150,210)">
          <path d="M-50,-70 Q-55,-78 -35,-82 L35,-82 Q55,-78 50,-70 L55,60 L-55,60 Z" fill="#F2D6B3" opacity="0.95"/>
          <path d="M-40,60 L-55,140 L-30,140 L-15,60 Z" fill="#F2D6B3" opacity="0.9"/>
          <path d="M40,60 L55,140 L30,140 L15,60 Z" fill="#F2D6B3" opacity="0.9"/>
        </g>
        <text x="150" y="370" font-family="Cormorant Garamond, serif" font-size="14" font-style="italic" fill="#3D2F2A" text-anchor="middle" opacity="0.6">ease</text>
      </svg>`,
    relax: `
      <svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <rect width="300" height="400" fill="${bg}"/>
        <g transform="translate(150,200)">
          <path d="M-60,-80 Q-65,-90 -45,-95 L45,-95 Q65,-90 60,-80 L60,80 L-60,80 Z" fill="#E8B4A8" opacity="0.95"/>
          <path d="M-60,80 L-70,140 L-40,140 L-30,80 Z" fill="#E8B4A8" opacity="0.9"/>
          <path d="M60,80 L70,140 L40,140 L30,80 Z" fill="#E8B4A8" opacity="0.9"/>
          <line x1="-30" y1="0" x2="30" y2="0" stroke="#3D2F2A" stroke-width="1.5" opacity="0.3"/>
        </g>
        <text x="150" y="370" font-family="Cormorant Garamond, serif" font-size="14" font-style="italic" fill="#3D2F2A" text-anchor="middle" opacity="0.6">relax</text>
      </svg>`,
    embrace: `
      <svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <rect width="300" height="400" fill="${bg}"/>
        <g transform="translate(150,200)">
          <path d="M-65,-90 Q-75,-100 -55,-105 L55,-105 Q75,-100 65,-90 L75,90 L-75,90 Z" fill="#A0776A" opacity="0.9"/>
          <line x1="-30" y1="-100" x2="-30" y2="-75" stroke="#3D2F2A" stroke-width="1" opacity="0.4"/>
          <line x1="0" y1="-105" x2="0" y2="-75" stroke="#3D2F2A" stroke-width="1" opacity="0.4"/>
          <line x1="30" y1="-100" x2="30" y2="-75" stroke="#3D2F2A" stroke-width="1" opacity="0.4"/>
        </g>
        <text x="150" y="370" font-family="Cormorant Garamond, serif" font-size="14" font-style="italic" fill="#3D2F2A" text-anchor="middle" opacity="0.6">embrace</text>
      </svg>`,
    assurance: `
      <svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <rect width="300" height="400" fill="${bg}"/>
        <g transform="translate(150,200)">
          <path d="M-55,-75 Q-65,-85 -45,-90 L45,-90 Q65,-85 55,-75 L65,75 L-65,75 Z" fill="#E8E0D5" opacity="0.95"/>
          <line x1="0" y1="-85" x2="0" y2="75" stroke="#3D2F2A" stroke-width="0.5" opacity="0.2"/>
          <circle cx="0" cy="-30" r="2" fill="#3D2F2A" opacity="0.5"/>
          <circle cx="0" cy="0" r="2" fill="#3D2F2A" opacity="0.5"/>
          <circle cx="0" cy="30" r="2" fill="#3D2F2A" opacity="0.5"/>
        </g>
        <text x="150" y="370" font-family="Cormorant Garamond, serif" font-size="14" font-style="italic" fill="#3D2F2A" text-anchor="middle" opacity="0.6">assurance</text>
      </svg>`
  };
  return items[id] || items.serenity;
}

// ---------- PRODUCT DATA ----------
const MAIN_PRODUCTS = {
  serenity: { id: 'serenity', name: 'Serenity Long-Sleeve Set', mood: 'Calm, sleep-ready.', price: 78, collection: 'long' },
  ease: { id: 'ease', name: 'Ease Short Set', mood: 'Lazy Sunday morning.', price: 58, collection: 'short' },
  relax: { id: 'relax', name: 'Relax Robe + Slip', mood: 'Unwinding after work.', price: 95, collection: 'robe' },
  embrace: { id: 'embrace', name: 'Embrace Long-Sleeve Set', mood: 'Hug-in-fabric feel.', price: 88, collection: 'long' },
  assurance: { id: 'assurance', name: 'Assurance Silk-Touch Set', mood: 'Quietly luxurious.', price: 135, collection: 'long' }
};

// ---------- INTERSECTION OBSERVER (fade-up) ----------
function initFadeUp() {
  const els = document.querySelectorAll('.fade-up');
  if (!('IntersectionObserver' in window)) {
    els.forEach(e => e.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  els.forEach(e => io.observe(e));
}

// ---------- PRODUCT PAGE SIZE ----------
function initProductPage() {
  const sizes = document.querySelectorAll('.pd__size');
  sizes.forEach(s => {
    s.addEventListener('click', () => {
      sizes.forEach(x => x.classList.remove('pd__size--active'));
      s.classList.add('pd__size--active');
    });
  });

  const thumbs = document.querySelectorAll('.pd__thumb');
  thumbs.forEach(t => {
    t.addEventListener('click', () => {
      thumbs.forEach(x => x.classList.remove('pd__thumb--active'));
      t.classList.add('pd__thumb--active');
    });
  });
}

// ---------- FILTER ----------
function initFilters() {
  const btns = document.querySelectorAll('.filter-btn');
  btns.forEach(b => {
    b.addEventListener('click', () => {
      btns.forEach(x => x.classList.remove('filter-btn--active'));
      b.classList.add('filter-btn--active');
      const filter = b.dataset.filter;
      document.querySelectorAll('.product').forEach(p => {
        const cat = p.dataset.category;
        p.style.display = (filter === 'all' || cat === filter) ? '' : 'none';
      });
    });
  });
}

// ---------- ADD TO BAG ----------
function addToBag(id) {
const product = MAIN_PRODUCTS[id];
  if (!product) return;
  const size = document.querySelector('.pd__size--active')?.textContent || 'M';
  bag.add({ ...product, size });
}

// ---------- INIT ----------
document.addEventListener('DOMContentLoaded', () => {
  bag.render();
  updateBagCount();
  initFadeUp();
  initProductPage();
  initFilters();

  // Drawer handlers
  document.getElementById('drawer-overlay')?.addEventListener('click', closeDrawer);
  document.getElementById('drawer-close')?.addEventListener('click', closeDrawer);
  document.querySelectorAll('[data-open-bag]').forEach(el => {
    el.addEventListener('click', e => { e.preventDefault(); openDrawer(); });
  });

  // Newsletter
  document.querySelectorAll('.newsletter__form').forEach(f => {
    f.addEventListener('submit', e => {
      e.preventDefault();
      const input = f.querySelector('.newsletter__input');
      if (input?.value) {
        showToast((typeof t === 'function') ? t('news_toast') : 'Welcome to the soft place 🌙');
        input.value = '';
      }
    });
  });
});