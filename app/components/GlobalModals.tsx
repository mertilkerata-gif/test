'use client';
import { useEffect } from 'react';
import { getCart } from '@/lib/cart';

function closeDrawer(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.remove('open');
  el.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function renderCart() {
  const list = document.getElementById('cartList');
  const foot = document.getElementById('cartFoot');
  const sub = document.getElementById('cartSubtotal');
  if (!list) return;
  const cart = getCart();
  if (!cart.length) {
    list.innerHTML = '<p class="cart-empty">Sepetin boş — <a href="/urunler">ürünlere göz at</a>.</p>';
    if (foot) (foot as HTMLElement).hidden = true;
    return;
  }
  list.innerHTML = '';
  let total = 0;
  cart.forEach((item: any) => {
    const price = typeof item.price === 'number' ? item.price : parseInt(String(item.price).replace(/\D/g,'')) || 0;
    total += price * (item.qty || 1);
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.setAttribute('data-id', item.id);
    div.innerHTML = `
      <div class="cart-item-info">
        <b>${item.name}</b>
        <span>₺${price} × ${item.qty || 1}</span>
      </div>
      <b style="font-size:.95rem;flex-shrink:0;font-family:var(--font-display)">₺${price * (item.qty || 1)}</b>
    `;
    list.appendChild(div);
  });
  if (sub) sub.textContent = '₺' + total.toLocaleString('tr-TR');
  if (foot) (foot as HTMLElement).hidden = false;
}

export default function GlobalModals() {
  useEffect(() => {
    // demleme:open-cart event'ini dinle
    const onOpenCart = () => {
      renderCart();
      // main.js de dinleyebilir, biz sadece render yapıyoruz
    };
    window.addEventListener('demleme:open-cart', onOpenCart);
    window.addEventListener('cart-updated', () => {
      // drawer açıksa yenile
      const drawer = document.getElementById('cartDrawer');
      if (drawer?.classList.contains('open')) renderCart();
    });
    // backdrop tıklaması
    const handleBackdropClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.id === 'cartDrawer') closeDrawer('cartDrawer');
      if (target.id === 'searchOverlay') closeDrawer('searchOverlay');
    };
    document.addEventListener('click', handleBackdropClick);
    return () => {
      window.removeEventListener('demleme:open-cart', onOpenCart);
      document.removeEventListener('click', handleBackdropClick);
    };
  }, []);

  return (
    <>
      {/* CART DRAWER */}
      <div className="modal-backdrop cart-modal" id="cartDrawer" aria-hidden="true">
        <div className="cart-panel" role="dialog" aria-modal="true" aria-label="Sepetim">
          <button className="modal-close" aria-label="Kapat" type="button"
            onClick={() => closeDrawer('cartDrawer')}>&times;</button>
          <div className="cart-head">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{width:22,height:22,color:'var(--rust)',flexShrink:0}}><path d="M6 6h15l-1.5 9h-12z"/><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/></svg>
            <h3>Sepetim</h3>
          </div>
          <div className="cart-list" id="cartList">
            <p className="cart-empty">Sepetin boş — <a href="/urunler">ürünlere göz at</a>.</p>
          </div>
          <div className="cart-foot" id="cartFoot" hidden>
            <div className="cart-subtotal-row"><span>Ara Toplam</span><b id="cartSubtotal">₺0</b></div>
            <button type="button" className="btn btn-ink cart-checkout-btn" id="cartCheckoutBtn">Sepeti Onayla</button>
          </div>
        </div>
      </div>

      {/* SEARCH OVERLAY */}
      <div className="search-overlay" id="searchOverlay" aria-hidden="true">
        <div className="search-inner" role="dialog" aria-modal="true" aria-label="Site içinde ara">
          <button className="modal-close search-close" aria-label="Kapat" type="button"
            onClick={() => closeDrawer('searchOverlay')}>&times;</button>
          <div className="search-input-wrap">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
            <input type="text" id="searchInput" placeholder="Bölüm, ürün ya da konuk ara…" autoComplete="off" />
          </div>
          <div className="search-results" id="searchResults">
            <p className="search-empty">Bölümlerde, ürünlerde ve konuklarda aramak için yazmaya başla.</p>
          </div>
        </div>
      </div>
    </>
  );
}
