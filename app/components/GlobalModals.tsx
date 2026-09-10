'use client';
import { useEffect } from 'react';

function closeDrawer(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.remove('open');
  el.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

export default function GlobalModals() {
  useEffect(() => {
    const handleBackdropClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.id === 'searchOverlay') closeDrawer('searchOverlay');
    };
    document.addEventListener('click', handleBackdropClick);
    return () => document.removeEventListener('click', handleBackdropClick);
  }, []);

  return (
    <>
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
