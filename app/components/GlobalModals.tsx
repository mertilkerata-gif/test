'use client';

export default function GlobalModals() {
  return (
    <>
      {/* CART DRAWER */}
      <div className="modal-backdrop cart-modal" id="cartDrawer" aria-hidden="true">
        <div className="cart-panel" role="dialog" aria-modal="true" aria-label="Sepetim">
          <button className="modal-close" data-close="cartDrawer" aria-label="Kapat"
            onClick={() => {
              const el = document.getElementById('cartDrawer');
              if (el) { el.classList.remove('open'); el.setAttribute('aria-hidden','true'); document.body.style.overflow=''; }
            }}>&times;</button>
          <div className="cart-head">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 6h15l-1.5 9h-12z"/><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/></svg>
            <h3>Sepetim</h3>
          </div>
          <div className="cart-list" id="cartList">
            <p className="cart-empty" id="cartEmptyMsg">Sepetin boş — <a href="/#shop">ürünlere göz at</a>.</p>
          </div>
          <div className="cart-foot" id="cartFoot" hidden>
            <div className="cart-subtotal-row"><span>Ara Toplam</span><b id="cartSubtotal">₺0</b></div>
            <button type="button" className="btn btn-ink cart-checkout-btn" id="cartCheckoutBtn">Sepeti Onayla</button>
            <p className="cart-checkout-msg" id="cartCheckoutMsg" hidden>Siparişin alındı, afiyet olsun! ✓</p>
          </div>
        </div>
      </div>

      {/* SEARCH OVERLAY */}
      <div className="search-overlay" id="searchOverlay" aria-hidden="true">
        <div className="search-inner" role="dialog" aria-modal="true" aria-label="Site içinde ara">
          <button className="modal-close search-close" data-close="searchOverlay" aria-label="Kapat"
            onClick={() => {
              const el = document.getElementById('searchOverlay');
              if (el) { el.classList.remove('open'); el.setAttribute('aria-hidden','true'); document.body.style.overflow=''; }
            }}>&times;</button>
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
