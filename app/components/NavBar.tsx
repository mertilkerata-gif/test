'use client';
import { useEffect, useState } from 'react';
import { getCart, cartCount } from '@/lib/cart';

export default function NavBar() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const update = () => setCount(cartCount(getCart()));
    update();
    window.addEventListener('cart-updated', update);
    return () => window.removeEventListener('cart-updated', update);
  }, []);

  return (
    <>
      <nav className="site-nav" id="siteNav">
        <a href="/" className="nav-logo">
          <span className="nav-logo-text">demleme</span>
        </a>

        <ul className="nav-links" style={{listStyle:'none',display:'flex',gap:'34px',margin:0,padding:0}}>
          <li><a href="/" data-nav="hero">Ana Sayfa</a></li>
          <li><a href="/#videos" data-nav="videos">YouTube</a></li>
          <li><a href="/urunler" data-nav="shop">Ürünler</a></li>
          <li><a href="/#benkimim" data-nav="benkimim">Ben Kimim</a></li>
          <li><a href="/#iletisim" data-nav="iletisim">İletişim</a></li>
        </ul>

        <div className="nav-icons">
          <a className="nav-icon-btn" href="/sepet" aria-label="Sepetim" style={{position:'relative'}}>
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 8V6.5a5 5 0 0110 0V8h2.3a1 1 0 01.99.86l1.2 8.4A2 2 0 0119.52 20H4.48a2 2 0 01-1.97-2.74l1.2-8.4A1 1 0 014.7 8H7zm2 0h6V6.5a3 3 0 00-6 0V8z"/></svg>
            {count > 0 && (
              <span style={{
                position:'absolute',top:'-6px',right:'-6px',
                background:'var(--rust)',color:'#fff',
                borderRadius:'50%',width:'18px',height:'18px',
                fontSize:'11px',display:'flex',alignItems:'center',justifyContent:'center',
                fontWeight:700,lineHeight:1
              }}>{count}</span>
            )}
          </a>
          <a className="nav-icon-btn" href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.6" r="1"/></svg>
          </a>
          <button className="nav-hamburger" id="hamburgerBtn" aria-label="Menü" onClick={() => {
            document.getElementById('navDrawer')?.classList.toggle('open');
            document.getElementById('navBackdrop')?.classList.toggle('open');
          }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></svg>
          </button>
        </div>
      </nav>

      <div className="nav-drawer" id="navDrawer">
        <button className="nav-drawer-close" aria-label="Kapat" onClick={() => {
          document.getElementById('navDrawer')?.classList.remove('open');
          document.getElementById('navBackdrop')?.classList.remove('open');
        }}>✕</button>
        <ul className="nav-links" style={{listStyle:'none',padding:0,margin:0}}>
          <li><a href="/">Ana Sayfa</a></li>
          <li><a href="/#videos">YouTube</a></li>
          <li><a href="/urunler">Ürünler</a></li>
          <li><a href="/#benkimim">Ben Kimim</a></li>
          <li><a href="/#iletisim">İletişim</a></li>
          <li><a href="/sepet">Sepetim {count > 0 && `(${count})`}</a></li>
        </ul>
      </div>
      <div className="nav-backdrop" id="navBackdrop" onClick={() => {
        document.getElementById('navDrawer')?.classList.remove('open');
        document.getElementById('navBackdrop')?.classList.remove('open');
      }}></div>
    </>
  );
}
