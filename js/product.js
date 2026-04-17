// ============================================================
// QUARTZ MØLLE — PRODUCT PAGE
// ============================================================

const STRIPE_PK = 'pk_test_51TNBeEDEjiYcRspTfToJp5KoMo5n2FCVWW5oxezIxZirAzCJJvdBeyewtVWk24rx2VeNpjzIx2bfFydzMWkgPxeW000oPQVwco';
let stripe;
try { stripe = Stripe(STRIPE_PK); } catch(e) { console.warn('Stripe not loaded'); }

let selectedWeightIndex = 0;
let currentProduct = null;

// Only Bestseller badge is shown — "Den gode gamle" is intentionally removed.
function getBadgeHTML(badge) {
  if (badge === 'bestseller') return `<span class="product-page-badge badge-bestseller">⭐ Bestseller</span>`;
  return '';
}

function renderProduct(product) {
  currentProduct = product;
  const inner = document.getElementById('productInner');
  const w = product.weights[selectedWeightIndex];
  document.title = `${product.name} – ${product.type} | Quartz Mølle`;

  const certsHTML = product.certifications.map(c =>
    `<span class="cert-tag">${c}</span>`
  ).join('');

  const weightBtns = product.weights.map((wt, i) => `
    <button class="weight-btn ${i === selectedWeightIndex ? 'active' : ''}"
            onclick="selectWeight(${i})">
      ${wt.label}
    </button>
  `).join('');

  inner.innerHTML = `
    <div>
      <a href="shop.html" class="btn-back">← Tilbage til shop</a>
      <img src="${w.image}" alt="${product.name} ${w.label}"
           class="product-page-img" id="productImg" />
    </div>
    <div class="product-page-info">
      ${getBadgeHTML(product.badge)}
      <h1 class="product-page-name">${product.name}</h1>
      <p class="product-page-type">${product.type}</p>
      <p class="product-page-desc">${product.description}</p>

      <div class="weight-selector">
        <h3>Vælg størrelse</h3>
        <div class="weight-options">${weightBtns}</div>
      </div>

      <div class="product-price-display" id="priceDisplay">
        ${w.price},00 kr.
      </div>

      <button class="btn-buy" id="buyBtn" onclick="handleBuy()">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
        Køb nu
      </button>

      <div class="certifications">${certsHTML}</div>

      <p style="font-size:0.82rem;color:#999;line-height:1.6;margin-top:0.5rem">
        ${product.origin}<br>
        Fragt beregnes ved checkout &middot; Sikker betaling via Stripe
      </p>
    </div>
  `;
}

function selectWeight(index) {
  if (!currentProduct) return;
  selectedWeightIndex = index;
  const w = currentProduct.weights[index];

  const img = document.getElementById('productImg');
  if (img) {
    img.style.transition = 'opacity 0.25s';
    img.style.opacity = '0';
    setTimeout(() => {
      img.src = w.image;
      img.alt = `${currentProduct.name} ${currentProduct.type} ${w.label}`;
      img.style.opacity = '1';
    }, 200);
  }

  const price = document.getElementById('priceDisplay');
  if (price) price.textContent = `${w.price},00 kr.`;

  document.querySelectorAll('.weight-btn').forEach((btn, i) => {
    btn.classList.toggle('active', i === index);
  });
}

async function handleBuy() {
  if (!currentProduct) return;
  const w = currentProduct.weights[selectedWeightIndex];
  const btn = document.getElementById('buyBtn');

  btn.disabled = true;
  btn.textContent = 'Forbereder checkout…';

  try {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        productId: currentProduct.id,
        productName: currentProduct.name,
        productType: currentProduct.type,
        weightLabel: w.label,
        price: w.price,
      })
    });

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url;
    } else {
      throw new Error(data.error || 'Checkout fejlede');
    }
  } catch (err) {
    console.error(err);
    showToast('Noget gik galt. Prøv igen eller kontakt os.', 'error');
    btn.disabled = false;
    btn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
      </svg>
      Køb nu
    `;
  }
}

function loadProduct() {
  const id = new URLSearchParams(window.location.search).get('id');
  if (!id) { window.location.href = 'shop.html'; return; }
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) { window.location.href = 'shop.html'; return; }
  renderProduct(product);
}

document.addEventListener('DOMContentLoaded', loadProduct);
