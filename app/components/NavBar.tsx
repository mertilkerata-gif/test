'use client';
import { useEffect, useState, useCallback } from 'react';
import { getCart, cartCount } from '@/lib/cart';
import { getUser } from '@/lib/auth';

export default function NavBar() {
  const [count, setCount] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateCart = () => setCount(cartCount(getCart()));
    updateCart();
    window.addEventListener('cart-updated', updateCart);

    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('cart-updated', updateCart);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const openCart = useCallback(() => {
    window.dispatchEvent(new Event('demleme:open-cart'));
  }, []);

  return (
    <>
      <nav style={{
        position: 'sticky', top: 0, zIndex: 300,
        background: scrolled ? 'rgba(247,243,233,0.92)' : 'var(--cream)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: '1px solid var(--line)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 20px', height: '60px', gap: '8px',
        transition: 'background .3s ease, backdrop-filter .3s ease',
      }}>
        {/* Logo */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
          <span style={{ fontFamily: "'Kodchasan',sans-serif", fontSize: '1.4rem', fontWeight: 700, letterSpacing: '0.05em', color: 'var(--ink)' }}>
            demleme
          </span>
        </a>

        {/* Desktop links */}
        <ul className="nav-links-desktop" style={{ display: 'flex', listStyle: 'none', gap: '20px', margin: 0, padding: 0, alignItems: 'center' }}>
          {[
            { href: '/', label: 'Ana Sayfa' },
            { href: '/#bu-hafta', label: 'YouTube' },
            { href: '/urunler', label: 'Ürünler' },
            { href: '/#demleyen', label: 'Ben Kimim' },
            { href: '/#anket', label: 'İletişim' },
          ].map(({ href, label }) => (
            <li key={label}>
              <a href={href} style={{ textDecoration: 'none', color: 'var(--ink)', fontWeight: 600, fontSize: '.85rem', opacity: .75, transition: 'opacity .2s' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '.75')}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Sağ ikonlar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>

          {/* Sepet — custom çizim ikonu */}
          <button onClick={openCart} type="button" aria-label="Sepet"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', transition: 'background .15s' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,0,0,.06)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'none')}>
            <img src="/images/sepet-ikonu.png" width="28" height="28" alt="Sepet" style={{ objectFit: 'contain', display: 'block' }} />
            {count > 0 && (
              <span style={{ position: 'absolute', top: '2px', right: '2px', background: 'var(--rust)', color: '#fff', borderRadius: '50%', width: '16px', height: '16px', fontSize: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>
                {count}
              </span>
            )}
          </button>

          {/* Arama — el yazısı ikonu */}
          <button onClick={() => setSearchOpen(true)} type="button" aria-label="Ara"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', transition: 'background .15s' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,0,0,.06)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'none')}>
            <svg viewBox="0 0 48 48" fill="none" width="28" height="28" stroke="var(--ink)" strokeWidth="3" strokeLinecap="round">
              <circle cx="20" cy="20" r="13" />
              <path d="M30 30 L43 43" />
            </svg>
          </button>

          {/* Instagram — custom çizim ikonu */}
          <a href="https://instagram.com/demleme" target="_blank" rel="noopener" aria-label="Instagram"
            style={{ padding: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', transition: 'background .15s' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,0,0,.06)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'none')}>
            <img src="/images/ig-siyah.png" width="28" height="28" alt="Instagram" style={{ objectFit: 'contain', display: 'block' }} />
          </a>

          {/* Hamburger — 3 çizgi, yaratıcı */}
          <button onClick={() => setDrawerOpen(true)} type="button" aria-label="Menü"
            style={{ background: 'var(--ink)', border: 'none', cursor: 'pointer', width: '44px', height: '44px', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '5px', flexShrink: 0, padding: '10px', transition: 'transform .15s' }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}>
            <span style={{ width: '20px', height: '2px', background: 'var(--cream-fixed)', borderRadius: '2px', display: 'block' }} />
            <span style={{ width: '14px', height: '2px', background: 'var(--cream-fixed)', borderRadius: '2px', display: 'block', alignSelf: 'flex-start' }} />
            <span style={{ width: '20px', height: '2px', background: 'var(--cream-fixed)', borderRadius: '2px', display: 'block' }} />
          </button>
        </div>
      </nav>

      {/* Mobil drawer */}
      {drawerOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 500, display: 'flex' }}>
          <div onClick={() => setDrawerOpen(false)} style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,.45)' }} />
          <div style={{
            position: 'absolute', right: 0, top: 0, bottom: 0,
            width: 'min(300px,85vw)', background: 'var(--cream)',
            display: 'flex', flexDirection: 'column', padding: '24px 28px',
            boxShadow: '-8px 0 40px rgba(0,0,0,.2)',
          }}>
            <button onClick={() => setDrawerOpen(false)} type="button"
              style={{ alignSelf: 'flex-end', background: 'none', border: '1.5px solid var(--line)', borderRadius: '50%', width: '36px', height: '36px', cursor: 'pointer', marginBottom: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>
              ✕
            </button>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {[
                { href: '/', label: 'Ana Sayfa' },
                { href: '/#bu-hafta', label: 'YouTube' },
                { href: '/urunler', label: 'Ürünler' },
                { href: '/#demleyen', label: 'Ben Kimim' },
                { href: '/#anket', label: 'İletişim' },
              ].map(({ href, label }) => (
                <a key={label} href={href} onClick={() => setDrawerOpen(false)}
                  style={{ display: 'block', padding: '14px 0', borderBottom: '1px solid var(--line)', textDecoration: 'none', color: 'var(--ink)', fontWeight: 700, fontSize: '1.1rem' }}>
                  {label}
                </a>
              ))}
            </nav>
            <div style={{ marginTop: 'auto', display: 'flex', gap: '16px', paddingTop: '24px' }}>
              <img src="/images/yt-footer.png" width="28" height="20" alt="YT" style={{ objectFit: 'contain', opacity: .6 }} />
              <img src="/images/ig-siyah.png" width="24" height="24" alt="IG" style={{ objectFit: 'contain', opacity: .6 }} />
            </div>
          </div>
        </div>
      )}

      {/* Search overlay */}
      {searchOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 500, background: 'rgba(26,18,8,.6)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '80px 20px' }}
          onClick={e => { if (e.target === e.currentTarget) setSearchOpen(false); }}>
          <div style={{ background: 'var(--paper)', borderRadius: '20px', width: '100%', maxWidth: '560px', padding: '28px', position: 'relative', boxShadow: '0 24px 80px rgba(0,0,0,.25)' }}>
            <button onClick={() => setSearchOpen(false)} type="button"
              style={{ position: 'absolute', top: '16px', right: '16px', background: 'var(--cream-deep)', border: 'none', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              ✕
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1.5px solid var(--line)', paddingBottom: '16px', marginBottom: '16px', marginTop: '4px' }}>
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" width="22" height="22" style={{ opacity: .4, flexShrink: 0 }}>
                <circle cx="20" cy="20" r="13" /><path d="M30 30 L43 43" />
              </svg>
              <input autoFocus type="text" placeholder="Bölüm, ürün ya da konu ara…"
                style={{ flex: 1, border: 'none', outline: 'none', fontSize: '1rem', fontFamily: 'var(--font-body)', background: 'transparent', color: 'var(--ink)' }} />
            </div>
            <p style={{ color: 'var(--ink-faint)', fontSize: '.88rem', margin: 0 }}>
              Yazmaya başla — bölümlerde ve ürünlerde arama yapılır.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
