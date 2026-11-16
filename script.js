/**
 * TRIO TREATS - Core Application Script
 * Features:
 *  - Full Menu Database with exact prices and pictures (Homemade & 100% Veg)
 *  - Includes Mini Red Velvet Cookies with Dip (₹220)
 *  - Direct Card "+ ADD" and Stepper without any popup modal
 *  - Flying item micro-animation to cart
 *  - Interactive Combo Builders:
 *      * 2 Cupcake Packs @ ₹320 (Pick any 2 out of 4 flavors)
 *      * 2 Chocolate Boxes @ ₹230 (Pick any 2 out of 4 varieties)
 *  - Swiggy / Zomato Mobile-First Experience:
 *      * Spacious, non-squashed Cart Drawer
 *      * Sticky Bottom Cart Bar (visible only when cart > 0)
 *  - WhatsApp Direct Order to Vinith (7075881265)
 *  - Instagram: @trio_treats_03
 */

// 1. MENU PRODUCTS DATABASE (EXACT PRICES & DETAILS FROM MENU)
const PRODUCTS = [
  // --- CUPCAKES (PACK OF 3) ---
  {
    id: 'chocolate-cupcakes',
    name: 'Chocolate Cupcakes',
    category: 'cupcakes',
    categoryLabel: 'Cupcakes',
    pack: 'Pack of 3',
    price: 180,
    image: 'chocolate-cupcakes.jpg',
    badge: 'Best Seller',
    description: 'Decadent moist chocolate cupcakes topped with rich cocoa swirl buttercream and chocolate chips.'
  },
  {
    id: 'vanilla-cupcakes',
    name: 'Vanilla Cupcakes',
    category: 'cupcakes',
    categoryLabel: 'Cupcakes',
    pack: 'Pack of 3',
    price: 150,
    image: 'vanilla-cupcakes.jpg',
    badge: 'Classic Favorite',
    description: 'Fluffy golden vanilla cupcakes topped with delicate swirl frosting and rainbow sprinkles.'
  },
  {
    id: 'red-velvet-cupcakes',
    name: 'Red Velvet Cupcakes',
    category: 'cupcakes',
    categoryLabel: 'Cupcakes',
    pack: 'Pack of 3',
    price: 190,
    image: 'red-velvet-cupcakes.jpg',
    badge: 'Chef Special',
    description: 'Rich velvety crimson sponge crowned with silky cream cheese swirl and cake crumb dusting.'
  },
  {
    id: 'coffee-cupcakes',
    name: 'Coffee Cupcakes',
    category: 'cupcakes',
    categoryLabel: 'Cupcakes',
    pack: 'Pack of 3',
    price: 190,
    image: 'coffee-cupcakes.jpg',
    badge: 'Aroma Delight',
    description: 'Rich espresso-infused cupcakes with mocha whipped swirl frosting and roasted coffee bean garnish.'
  },

  // --- COOKIES (PACK OF 4) ---
  {
    id: 'red-velvet-cookies',
    name: 'Red Velvet Cookies',
    category: 'cookies',
    categoryLabel: 'Cookies',
    pack: 'Pack of 4',
    price: 180,
    image: 'red-velvet-cookies.jpg',
    badge: 'Popular',
    description: 'Signature thick red velvet baked cookies loaded with melted creamy white chocolate chips.'
  },
  {
    id: 'choco-chip-cookies',
    name: 'Choco Chip Cookies',
    category: 'cookies',
    categoryLabel: 'Cookies',
    pack: 'Pack of 4',
    price: 150,
    image: 'choco-chip-cookies.jpg',
    badge: 'Crispy & Chewy',
    description: 'Freshly baked golden cookies studded generously with rich gourmet chocolate chips.'
  },
  {
    id: 'butter-cookies',
    name: 'Butter Cookies',
    category: 'cookies',
    categoryLabel: 'Cookies',
    pack: 'Pack of 4',
    price: 120,
    image: 'butter-cookies.jpg',
    badge: 'Pure Butter',
    description: 'Traditional melt-in-mouth Danish swirl butter cookies baked with pure farm-fresh butter.'
  },

  // --- MINI COOKIES (WITH CHOCOLATE DIP) ---
  {
    id: 'mini-butter-cookies',
    name: 'Mini Butter Cookies',
    category: 'mini-cookies',
    categoryLabel: 'Mini Cookies',
    pack: 'with Chocolate Dip',
    price: 179,
    image: 'mini-butter-cookies.jpg',
    badge: 'Dip & Crunch',
    description: 'Crunchy bite-sized golden mini swirl cookies served in a dessert cup with rich chocolate dip.'
  },
  {
    id: 'mini-choco-chip-cookies',
    name: 'Mini Choco Chip Cookies',
    category: 'mini-cookies',
    categoryLabel: 'Mini Cookies',
    pack: 'with Chocolate Dip',
    price: 199,
    image: 'mini-choco-chip-cookies.jpg',
    badge: 'Customer Love',
    description: 'Crispy bite-sized mini chocolate chip cookies presented in our signature tumbler with chocolate dipping cup.'
  },
  {
    id: 'mini-red-velvet-cookies',
    name: 'Mini Red Velvet Cookies',
    category: 'mini-cookies',
    categoryLabel: 'Mini Cookies',
    pack: 'with Chocolate Dip',
    price: 220,
    image: 'mini-red-velvet-cookies.jpg',
    badge: 'Chef Special',
    description: 'Crispy bite-sized crimson red velvet mini cookies loaded with white chocolate chips, served with rich chocolate dip.'
  },

  // --- CHOCOLATE BOXES (ASSORTED HANDMADE CHOCOLATES) ---
  {
    id: 'milk-chocolate-box',
    name: 'Milk Chocolate Box',
    category: 'chocolate-boxes',
    categoryLabel: 'Chocolate Box',
    pack: 'Assorted Handmade Chocolates',
    price: 119,
    image: 'milk-chocolate-box.jpg',
    badge: 'Offer @ ₹119',
    description: 'Artisanal smooth milk chocolates handcrafted in elegant floral, heart and swirl shapes.'
  },
  {
    id: 'dark-chocolate-box',
    name: 'Dark Chocolate Box',
    category: 'chocolate-boxes',
    categoryLabel: 'Chocolate Box',
    pack: 'Assorted Handmade Chocolates',
    price: 139,
    image: 'dark-chocolate-box.jpg',
    badge: 'Intense Cocoa',
    description: 'Handcrafted luxury dark chocolates with deep cocoa notes in delicate heart and rose molds.'
  },
  {
    id: 'white-chocolate-box',
    name: 'White Chocolate Box',
    category: 'chocolate-boxes',
    categoryLabel: 'Chocolate Box',
    pack: 'Assorted Handmade Chocolates',
    price: 139,
    image: 'white-chocolate-box.jpg',
    badge: 'Creamy Bliss',
    description: 'Silky smooth handcrafted white chocolates featuring fine chocolate drizzles in a gift box.'
  },
  {
    id: 'mix-chocolate-box',
    name: 'Mix Chocolate Box (Milk + White)',
    category: 'chocolate-boxes',
    categoryLabel: 'Chocolate Box',
    pack: 'Assorted Handmade Chocolates',
    price: 139,
    image: 'mix-chocolate-box.jpg',
    badge: 'Perfect Gift',
    description: 'A wonderful duo assortment of handcrafted milk and white chocolates in an elegant gift box.'
  }
];

// 2. APPLICATION STATE
let cart = [];
let currentFilter = 'all';
let searchQuery = '';

const WHATSAPP_PHONE = '917075881265';
const INSTAGRAM_HANDLE = 'trio_treats_03';
const INSTAGRAM_URL = 'https://www.instagram.com/trio_treats_03/';

// Combo Builder State
let currentComboType = 'cupcake'; // 'cupcake' | 'chocolate'
let selectedComboSlot1 = 'chocolate-cupcakes';
let selectedComboSlot2 = 'red-velvet-cupcakes';

// DOM Elements
const menuGrid = document.getElementById('menu-grid');
const cartCountBadges = document.querySelectorAll('.cart-count-badge');
const cartDrawerOverlay = document.getElementById('cart-drawer-overlay');
const cartDrawerItemsList = document.getElementById('cart-drawer-items-list');
const cartSubtotalEl = document.getElementById('cart-subtotal');
const cartTotalEl = document.getElementById('cart-total');
const cartOfferBanner = document.getElementById('cart-offer-banner');
const cartDiscountRow = document.getElementById('cart-discount-row');
const cartDiscountVal = document.getElementById('cart-discount-val');
const btnProceedAmount = document.getElementById('btn-proceed-amount');

// Swiggy Sticky Bottom Bar
const swiggyCartBar = document.getElementById('swiggy-cart-bar');
const swiggyCartItemsCount = document.getElementById('swiggy-cart-items-count');
const swiggyCartTotalPrice = document.getElementById('swiggy-cart-total-price');

// Combo Builder Elements
const comboBuilderOverlay = document.getElementById('combo-builder-overlay');
const comboModalIcon = document.getElementById('combo-modal-icon');
const comboModalTitle = document.getElementById('combo-modal-title');
const comboModalSubtitle = document.getElementById('combo-modal-subtitle');
const comboStep1Title = document.getElementById('combo-step1-title');
const comboStep2Title = document.getElementById('combo-step2-title');
const comboOptionsSlot1 = document.getElementById('combo-options-slot1');
const comboOptionsSlot2 = document.getElementById('combo-options-slot2');
const comboPriceDisplay = document.getElementById('combo-price-display');
const comboOriginalPrice = document.getElementById('combo-original-price');

// Welcome Splash
const welcomeSplash = document.getElementById('welcome-splash');
const enterShopBtn = document.getElementById('enter-shop-btn');

// 3. INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  loadCartFromStorage();
  renderProducts();
  setupEventListeners();
  initWelcomeSplash();
});

// Welcome Intro Animation Controller
function initWelcomeSplash() {
  if (!welcomeSplash) return;
  const splashTimer = setTimeout(() => {
    closeWelcomeSplash();
  }, 3000);

  if (enterShopBtn) {
    enterShopBtn.addEventListener('click', () => {
      clearTimeout(splashTimer);
      closeWelcomeSplash();
    });
  }
}

function closeWelcomeSplash() {
  if (!welcomeSplash) return;
  welcomeSplash.classList.add('fade-out');
  setTimeout(() => {
    welcomeSplash.style.display = 'none';
  }, 700);
}

function showWelcomeSplash() {
  if (!welcomeSplash) return;
  welcomeSplash.style.display = 'flex';
  welcomeSplash.classList.remove('fade-out');
  setTimeout(() => {
    closeWelcomeSplash();
  }, 3000);
}

// 4. RENDER PRODUCT GRID (DIRECT SWIGGY/ZOMATO CARDS - NO POPUP)
function renderProducts() {
  if (!menuGrid) return;
  
  const filtered = PRODUCTS.filter(item => {
    const matchesFilter = currentFilter === 'all' || item.category === currentFilter;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.pack.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    menuGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem; color: var(--color-text-muted);">
        <p style="font-size: 2.5rem; margin-bottom: 0.5rem;">🧁</p>
        <h3 style="font-family: var(--font-heading); font-size: 1.3rem; color: var(--color-primary); margin-bottom: 0.4rem;">No treats found matching "${escapeHtml(searchQuery)}"</h3>
        <p style="font-size: 0.88rem;">Try searching for cupcakes, cookies, or chocolate boxes!</p>
        <button onclick="clearSearch()" style="margin-top: 1rem; padding: 0.55rem 1.4rem; border-radius: var(--radius-full); background: var(--color-accent-rose); color: #fff; font-weight: 700; border: none; cursor: pointer;">Show All Treats</button>
      </div>
    `;
    return;
  }

  menuGrid.innerHTML = filtered.map(product => {
    const inCartQty = getCartItemQty(product.id);
    const inCartClass = inCartQty > 0 ? 'is-in-cart' : '';
    return `
      <article class="product-card ${inCartClass}" data-id="${product.id}">
        <div class="product-image-container">
          <img class="product-img" src="${product.image}" alt="${product.name}" loading="lazy">
          
          ${inCartQty > 0 ? `
            <div class="product-in-cart-banner">✓ In Cart: ${inCartQty} (₹${product.price * inCartQty})</div>
          ` : ''}

          <div class="product-overlay-badge-top">
            <span class="veg-icon-square">
              <span class="veg-icon-circle"></span>
            </span>
            <span>100% Veg</span>
          </div>
          <span class="product-pack-tag">${product.pack}</span>
        </div>

        <div class="product-details">
          <span class="product-category">${product.categoryLabel}</span>
          <h3 class="product-name">${product.name}</h3>
          <p class="product-description">${product.description}</p>
          
          <div class="product-footer">
            <div class="product-price-block">
              <span class="product-price-label">Price</span>
              <span class="product-price">₹${product.price}</span>
            </div>

            <div class="card-action-container">
              ${inCartQty > 0 ? `
                <div class="card-stepper-box">
                  <button class="btn-card-stepper" onclick="updateCartItemQty('${product.id}', -1)" aria-label="Decrease quantity">−</button>
                  <span class="card-stepper-val">${inCartQty}</span>
                  <button class="btn-card-stepper" onclick="updateCartItemQty('${product.id}', 1)" aria-label="Increase quantity">+</button>
                </div>
              ` : `
                <button class="btn-add-to-cart" onclick="triggerAddToCart('${product.id}', this)" aria-label="Add ${product.name} to cart">
                  <span>+ ADD</span>
                </button>
              `}
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// 5. DIRECT ADD TO CART (WITH MICRO-ANIMATION - NO POPUP MODAL)
function triggerAddToCart(productId, buttonElement) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  // Flying micro-interaction to cart icon / bottom bar
  createFlyingClone(buttonElement, product.image);

  // Directly increment in cart
  addToCart(productId, 1);
}

// Flying item micro-animation
function createFlyingClone(sourceEl, imgSrc) {
  if (!sourceEl) return;
  const rect = sourceEl.getBoundingClientRect();
  const targetBtn = (swiggyCartBar && swiggyCartBar.style.display !== 'none') ? swiggyCartBar : document.getElementById('btn-header-cart');
  if (!targetBtn) return;
  const targetRect = targetBtn.getBoundingClientRect();

  const clone = document.createElement('img');
  clone.src = imgSrc;
  clone.className = 'flying-cart-clone';
  clone.style.top = `${rect.top}px`;
  clone.style.left = `${rect.left}px`;
  document.body.appendChild(clone);

  requestAnimationFrame(() => {
    clone.style.top = `${targetRect.top + targetRect.height / 2 - 25}px`;
    clone.style.left = `${targetRect.left + targetRect.width / 2 - 25}px`;
    clone.style.transform = 'scale(0.2)';
    clone.style.opacity = '0.4';
  });

  setTimeout(() => {
    clone.remove();
  }, 700);
}

// 6. CART STATE MANAGEMENT
function addToCart(productId, quantity = 1) {
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    const product = PRODUCTS.find(p => p.id === productId);
    if (product) {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        pack: product.pack,
        image: product.image,
        category: product.category,
        quantity: quantity,
        isCombo: false
      });
    }
  }

  saveCartToStorage();
  updateCartUI();
  renderProducts();
}

function updateCartItemQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }

  saveCartToStorage();
  updateCartUI();
  renderProducts();
}

function removeCartItem(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCartToStorage();
  updateCartUI();
  renderProducts();
}

function getCartItemQty(productId) {
  const item = cart.find(i => i.id === productId);
  return item ? item.quantity : 0;
}

function saveCartToStorage() {
  try {
    localStorage.setItem('trio_treats_cart', JSON.stringify(cart));
  } catch (e) {
    console.warn('Storage unavailable', e);
  }
}

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem('trio_treats_cart');
    if (saved) {
      cart = JSON.parse(saved);
      updateCartUI();
    }
  } catch (e) {
    cart = [];
  }
}

// 7. CART DRAWER & SWIGGY BOTTOM BAR PRICING LOGIC
function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  // Calculate Subtotal & Automated Combo Pair Discounts
  // Offer 1: Any 2 Cupcake Packs @ ₹320 (for regular individual packs)
  // Offer 2: Any 2 Chocolate Boxes @ ₹230 (for regular individual boxes)
  let subtotal = 0;
  let regularCupcakePrices = [];
  let regularChocBoxPrices = [];

  cart.forEach(item => {
    subtotal += item.price * item.quantity;
    if (!item.isCombo) {
      if (item.category === 'cupcakes') {
        for (let i = 0; i < item.quantity; i++) regularCupcakePrices.push(item.price);
      } else if (item.category === 'chocolate-boxes') {
        for (let i = 0; i < item.quantity; i++) regularChocBoxPrices.push(item.price);
      }
    }
  });

  let cupcakeComboSavings = 0;
  if (regularCupcakePrices.length >= 2) {
    regularCupcakePrices.sort((a, b) => b - a);
    const pairs = Math.floor(regularCupcakePrices.length / 2);
    for (let p = 0; p < pairs; p++) {
      const normalTotal = regularCupcakePrices[p * 2] + regularCupcakePrices[p * 2 + 1];
      if (normalTotal > 320) {
        cupcakeComboSavings += (normalTotal - 320);
      }
    }
  }

  let chocComboSavings = 0;
  if (regularChocBoxPrices.length >= 2) {
    regularChocBoxPrices.sort((a, b) => b - a);
    const pairs = Math.floor(regularChocBoxPrices.length / 2);
    for (let p = 0; p < pairs; p++) {
      const normalTotal = regularChocBoxPrices[p * 2] + regularChocBoxPrices[p * 2 + 1];
      if (normalTotal > 230) {
        chocComboSavings += (normalTotal - 230);
      }
    }
  }

  const totalComboSavings = cupcakeComboSavings + chocComboSavings;
  const grandTotal = Math.max(0, subtotal - totalComboSavings);

  // Update Header Badges
  cartCountBadges.forEach(badge => {
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? 'inline-flex' : 'none';
  });

  // Update Drawer Item Count Badge
  const cartItemsBadgeCount = document.getElementById('cart-items-badge-count');
  if (cartItemsBadgeCount) {
    cartItemsBadgeCount.textContent = `${totalItems} ${totalItems === 1 ? 'Item' : 'Items'}`;
  }

  // Update Header Cart Button Text
  const btnHeaderCart = document.getElementById('btn-header-cart');
  if (btnHeaderCart) {
    if (totalItems > 0) {
      btnHeaderCart.innerHTML = `<span>🛒</span> <span>Cart (${totalItems} • ₹${grandTotal})</span>`;
    } else {
      btnHeaderCart.innerHTML = `<span>🛒</span> <span>Cart</span>`;
    }
  }

  // Update Swiggy/Zomato Sticky Bottom Bar (Visible ONLY when items > 0)
  if (swiggyCartBar) {
    if (totalItems > 0) {
      swiggyCartBar.style.display = 'flex';
      requestAnimationFrame(() => swiggyCartBar.classList.add('active'));
      if (swiggyCartItemsCount) swiggyCartItemsCount.textContent = `${totalItems} ${totalItems === 1 ? 'ITEM' : 'ITEMS'}`;
      if (swiggyCartTotalPrice) swiggyCartTotalPrice.textContent = `₹${grandTotal}`;
    } else {
      swiggyCartBar.classList.remove('active');
      swiggyCartBar.style.display = 'none';
    }
  }

  // Update Drawer Subtotals
  if (cartSubtotalEl) {
    cartSubtotalEl.textContent = `₹${subtotal}`;
  }
  if (cartTotalEl) {
    cartTotalEl.textContent = `₹${grandTotal}`;
  }
  if (btnProceedAmount) {
    btnProceedAmount.textContent = `₹${grandTotal} ➔`;
  }

  // Discount Row in Bill
  if (cartDiscountRow) {
    if (totalComboSavings > 0) {
      cartDiscountRow.style.display = 'flex';
      if (cartDiscountVal) cartDiscountVal.textContent = `-₹${totalComboSavings}`;
    } else {
      cartDiscountRow.style.display = 'none';
    }
  }

  // Offer alert banner in cart
  if (cartOfferBanner) {
    if (totalComboSavings > 0) {
      cartOfferBanner.style.display = 'flex';
      cartOfferBanner.innerHTML = `🎁 <strong>Combo Offer Applied!</strong> You saved ₹${totalComboSavings} with special bundle pricing!`;
    } else if (regularCupcakePrices.length === 1) {
      cartOfferBanner.style.display = 'flex';
      cartOfferBanner.innerHTML = `💡 <strong>Sweet Tip:</strong> Add 1 more Cupcake Pack to get any 2 for just ₹320!`;
    } else if (regularChocBoxPrices.length === 1) {
      cartOfferBanner.style.display = 'flex';
      cartOfferBanner.innerHTML = `💡 <strong>Sweet Tip:</strong> Add 1 more Chocolate Box to get any 2 for just ₹230!`;
    } else {
      cartOfferBanner.style.display = 'none';
    }
  }

  renderCartDrawerItems();
}

// 8. RENDER CART DRAWER ITEMS (BIG, ROOMY & CLEAR)
function renderCartDrawerItems() {
  if (!cartDrawerItemsList) return;

  if (cart.length === 0) {
    cartDrawerItemsList.innerHTML = `
      <div class="cart-empty-state">
        <span class="cart-empty-icon">🧁</span>
        <h4>Your Bag is Empty</h4>
        <p>Explore our menu and add your favorite cupcakes, cookies, and chocolates!</p>
        <button class="splash-enter-btn" onclick="closeCartDrawer()" style="padding: 0.75rem 1.6rem; font-size: 0.95rem; border: none; cursor: pointer;">
          Browse Menu
        </button>
      </div>
    `;
    return;
  }

  cartDrawerItemsList.innerHTML = cart.map(item => `
    <div class="cart-drawer-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-thumb">
      
      <div class="cart-item-info">
        <div class="cart-item-header-row">
          <div style="display: flex; align-items: center; gap: 0.4rem;">
            <span class="veg-icon-square" style="width: 14px; height: 14px;">
              <span class="veg-icon-circle" style="width: 6px; height: 6px;"></span>
            </span>
            <h4 class="cart-item-name">${escapeHtml(item.name)}</h4>
          </div>
          <button class="btn-remove-item" onclick="removeCartItem('${item.id}')" title="Remove item" aria-label="Remove ${escapeHtml(item.name)}">
            ✕
          </button>
        </div>

        <div>
          <span class="cart-item-pack-badge">${escapeHtml(item.pack)} • ₹${item.price} each</span>
        </div>

        <div class="cart-item-bottom-row">
          <!-- Big Finger-Friendly Stepper -->
          <div class="cart-drawer-item-stepper">
            <button class="btn-drawer-qty" onclick="updateCartItemQty('${item.id}', -1)" aria-label="Decrease quantity">−</button>
            <span class="drawer-qty-val">${item.quantity}</span>
            <button class="btn-drawer-qty" onclick="updateCartItemQty('${item.id}', 1)" aria-label="Increase quantity">+</button>
          </div>

          <!-- Total for item -->
          <span class="cart-item-subtotal">₹${item.price * item.quantity}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function openCartDrawer() {
  if (cartDrawerOverlay) {
    cartDrawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeCartDrawer() {
  if (cartDrawerOverlay) {
    cartDrawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// 9. COMBO BUILDER CONTROLLER (CHOOSE 2 CUPCAKES @ ₹320 / 2 CHOCOLATES @ ₹230)
function openCupcakeComboModal() {
  currentComboType = 'cupcake';
  selectedComboSlot1 = 'chocolate-cupcakes';
  selectedComboSlot2 = 'red-velvet-cupcakes';

  if (comboModalIcon) comboModalIcon.textContent = '🧁';
  if (comboModalTitle) comboModalTitle.textContent = 'Cupcake Duo (2 Packs)';
  if (comboModalSubtitle) comboModalSubtitle.textContent = 'Pick any 2 of our 4 gourmet flavors • Special Deal @ ₹320';
  if (comboStep1Title) comboStep1Title.textContent = 'Choose First Cupcake Pack (Pack of 3):';
  if (comboStep2Title) comboStep2Title.textContent = 'Choose Second Cupcake Pack (Pack of 3):';
  if (comboPriceDisplay) comboPriceDisplay.textContent = '₹320';
  if (comboOriginalPrice) comboOriginalPrice.textContent = '₹380';

  renderComboOptions();
  showComboModal();
}

function openChocolateComboModal() {
  currentComboType = 'chocolate';
  selectedComboSlot1 = 'milk-chocolate-box';
  selectedComboSlot2 = 'dark-chocolate-box';

  if (comboModalIcon) comboModalIcon.textContent = '🍫';
  if (comboModalTitle) comboModalTitle.textContent = 'Chocolate Box Duo (2 Boxes)';
  if (comboModalSubtitle) comboModalSubtitle.textContent = 'Pick any 2 of our 4 handmade chocolate boxes • Special Deal @ ₹230';
  if (comboStep1Title) comboStep1Title.textContent = 'Choose First Chocolate Box:';
  if (comboStep2Title) comboStep2Title.textContent = 'Choose Second Chocolate Box:';
  if (comboPriceDisplay) comboPriceDisplay.textContent = '₹230';
  if (comboOriginalPrice) comboOriginalPrice.textContent = '₹278';

  renderComboOptions();
  showComboModal();
}

function showComboModal() {
  if (!comboBuilderOverlay) return;
  comboBuilderOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeComboModal() {
  if (!comboBuilderOverlay) return;
  comboBuilderOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

function renderComboOptions() {
  const options = currentComboType === 'cupcake' 
    ? PRODUCTS.filter(p => p.category === 'cupcakes')
    : PRODUCTS.filter(p => p.category === 'chocolate-boxes');

  // Slot 1
  if (comboOptionsSlot1) {
    comboOptionsSlot1.innerHTML = options.map(item => {
      const isSelected = item.id === selectedComboSlot1;
      return `
        <div class="combo-option-card ${isSelected ? 'selected' : ''}" onclick="selectComboSlotItem(1, '${item.id}')">
          <img src="${item.image}" alt="${item.name}" class="combo-option-thumb">
          <div style="flex: 1; min-width: 0;">
            <div class="combo-option-name">${item.name}</div>
            <span style="font-size: 0.72rem; color: var(--color-veg); font-weight: 700;">100% Pure Veg</span>
          </div>
          <span style="font-size: 1.1rem; color: ${isSelected ? 'var(--color-accent-rose)' : '#ccc'};">${isSelected ? '●' : '○'}</span>
        </div>
      `;
    }).join('');
  }

  // Slot 2
  if (comboOptionsSlot2) {
    comboOptionsSlot2.innerHTML = options.map(item => {
      const isSelected = item.id === selectedComboSlot2;
      return `
        <div class="combo-option-card ${isSelected ? 'selected' : ''}" onclick="selectComboSlotItem(2, '${item.id}')">
          <img src="${item.image}" alt="${item.name}" class="combo-option-thumb">
          <div style="flex: 1; min-width: 0;">
            <div class="combo-option-name">${item.name}</div>
            <span style="font-size: 0.72rem; color: var(--color-veg); font-weight: 700;">100% Pure Veg</span>
          </div>
          <span style="font-size: 1.1rem; color: ${isSelected ? 'var(--color-accent-rose)' : '#ccc'};">${isSelected ? '●' : '○'}</span>
        </div>
      `;
    }).join('');
  }
}

function selectComboSlotItem(slotNum, itemId) {
  if (slotNum === 1) {
    selectedComboSlot1 = itemId;
  } else {
    selectedComboSlot2 = itemId;
  }
  renderComboOptions();
}

function confirmComboToCart() {
  const p1 = PRODUCTS.find(p => p.id === selectedComboSlot1);
  const p2 = PRODUCTS.find(p => p.id === selectedComboSlot2);
  if (!p1 || !p2) return;

  const isCupcake = currentComboType === 'cupcake';
  const comboPrice = isCupcake ? 320 : 230;
  const comboId = `combo-${currentComboType}-${selectedComboSlot1}-${selectedComboSlot2}`;
  
  const short1 = p1.name.replace(' Cupcakes', '').replace(' Chocolate Box', '').replace(' Box', '');
  const short2 = p2.name.replace(' Cupcakes', '').replace(' Chocolate Box', '').replace(' Box', '');

  const comboName = isCupcake 
    ? `Cupcake Duo Combo (${short1} + ${short2})`
    : `Chocolate Duo Box (${short1} + ${short2})`;

  const comboPack = isCupcake ? '2 Packs (6 Cupcakes Total)' : '2 Assorted Chocolate Boxes';

  const existing = cart.find(item => item.id === comboId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: comboId,
      name: comboName,
      price: comboPrice,
      pack: comboPack,
      image: p1.image,
      category: isCupcake ? 'cupcakes' : 'chocolate-boxes',
      quantity: 1,
      isCombo: true
    });
  }

  saveCartToStorage();
  updateCartUI();
  renderProducts();
  closeComboModal();
  openCartDrawer();
}

// 10. PROCEED TO WHATSAPP ORDER (VINITH: 7075881265)
function proceedToWhatsApp() {
  if (cart.length === 0) {
    alert('Your cart is empty! Please add treats from our menu first.');
    return;
  }

  const nameInput = document.getElementById('checkout-name');
  const addressInput = document.getElementById('checkout-address');
  const notesInput = document.getElementById('checkout-notes');

  const customerName = nameInput ? nameInput.value.trim() : '';
  const deliveryAddress = addressInput ? addressInput.value.trim() : '';
  const specialNotes = notesInput ? notesInput.value.trim() : '';

  // Calculate Subtotal & Automated Combo Pair Discounts
  let subtotal = 0;
  let regularCupcakePrices = [];
  let regularChocBoxPrices = [];

  cart.forEach(item => {
    subtotal += item.price * item.quantity;
    if (!item.isCombo) {
      if (item.category === 'cupcakes') {
        for (let i = 0; i < item.quantity; i++) regularCupcakePrices.push(item.price);
      } else if (item.category === 'chocolate-boxes') {
        for (let i = 0; i < item.quantity; i++) regularChocBoxPrices.push(item.price);
      }
    }
  });

  let cupcakeComboSavings = 0;
  if (regularCupcakePrices.length >= 2) {
    regularCupcakePrices.sort((a, b) => b - a);
    const pairs = Math.floor(regularCupcakePrices.length / 2);
    for (let p = 0; p < pairs; p++) {
      const normalTotal = regularCupcakePrices[p * 2] + regularCupcakePrices[p * 2 + 1];
      if (normalTotal > 320) cupcakeComboSavings += (normalTotal - 320);
    }
  }

  let chocComboSavings = 0;
  if (regularChocBoxPrices.length >= 2) {
    regularChocBoxPrices.sort((a, b) => b - a);
    const pairs = Math.floor(regularChocBoxPrices.length / 2);
    for (let p = 0; p < pairs; p++) {
      const normalTotal = regularChocBoxPrices[p * 2] + regularChocBoxPrices[p * 2 + 1];
      if (normalTotal > 230) chocComboSavings += (normalTotal - 230);
    }
  }

  const totalComboSavings = cupcakeComboSavings + chocComboSavings;
  const grandTotal = Math.max(0, subtotal - totalComboSavings);

  // Construct WhatsApp order slip
  let msg = `✨ *NEW ORDER - TRIO TREATS* ✨\n`;
  msg += `_A Little Bite of Happiness_\n`;
  msg += `─────────────────────────\n`;
  
  if (customerName) {
    msg += `👤 *Customer:* ${customerName}\n`;
  }
  if (deliveryAddress) {
    msg += `📍 *Delivery Address:* ${deliveryAddress}\n`;
  }
  if (specialNotes) {
    msg += `📝 *Notes/Occasion:* ${specialNotes}\n`;
  }
  
  msg += `─────────────────────────\n`;
  msg += `🧁 *ITEMS ORDERED:*\n`;
  
  cart.forEach((item, index) => {
    msg += `${index + 1}. *${item.name}* (${item.pack})\n   • Qty: ${item.quantity} × ₹${item.price} = ₹${item.price * item.quantity}\n`;
  });

  msg += `─────────────────────────\n`;
  msg += `💵 *Subtotal:* ₹${subtotal}\n`;
  if (totalComboSavings > 0) {
    msg += `🎁 *Special Combo Discount:* -₹${totalComboSavings}\n`;
  }
  msg += `💰 *TOTAL PAYABLE: ₹${grandTotal}*\n`;
  msg += `─────────────────────────\n`;
  msg += `🌱 *100% Pure Veg • Freshly Homemade*\n`;
  msg += `🎀 *Contact:* Vinith (7075881265)\n`;
  msg += `📸 *Instagram:* @${INSTAGRAM_HANDLE}\n`;
  msg += `\nPlease confirm my order and share delivery details. Thank you!`;

  const encodedUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
  window.open(encodedUrl, '_blank');
}

// 11. FILTER AND SEARCH EVENT LISTENERS
function setupEventListeners() {
  // Category Filter Pills
  const filterPills = document.querySelectorAll('.filter-pill');
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentFilter = pill.getAttribute('data-category');
      renderProducts();
    });
  });

  // Search Input
  const searchInput = document.getElementById('menu-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      renderProducts();
    });
  }

  // Keyboard escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeComboModal();
      closeCartDrawer();
    }
  });
}

function clearSearch() {
  const searchInput = document.getElementById('menu-search-input');
  if (searchInput) {
    searchInput.value = '';
    searchQuery = '';
    currentFilter = 'all';
    document.querySelectorAll('.filter-pill').forEach((p, idx) => {
      if (idx === 0) p.classList.add('active');
      else p.classList.remove('active');
    });
    renderProducts();
  }
}

// Helper: Escape HTML strings
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
