'use client';
import { useEffect, useState, useCallback } from 'react';
import { getCart, cartCount } from '@/lib/cart';
import { getUser, logout } from '@/lib/auth';

export default function NavBar() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState<{ name: string } | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const updateCart = () => setCount(cartCount(getCart()));
    const updateAuth = () => setUser(getUser());
    updateCart(); updateAuth();
    window.addEventListener('cart-updated', updateCart);
    window.addEventListener('auth-updated', updateAuth);
    return () => {
      window.removeEventListener('cart-updated', updateCart);
      window.removeEventListener('auth-updated', updateAuth);
    };
  }, []);

  const openCart = useCallback(() => {
    window.dispatchEvent(new Event('demleme:open-cart'));
  }, []);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <nav style={{
        position:'sticky', top:0, zIndex:300,
        background:'var(--cream)', borderBottom:'1px solid var(--line)',
        display:'flex', alignItems:'center', justifyContent:'space-between',
        padding:'0 20px', height:'60px', gap:'12px',
      }}>
        {/* Logo */}
        <a href="/" style={{display:'flex',alignItems:'center',textDecoration:'none',flexShrink:0}}>
          <span style={{fontFamily:"'Kodchasan',sans-serif",fontSize:'1.4rem',fontWeight:700,letterSpacing:'0.05em',color:'var(--ink)'}}>demleme</span>
        </a>

        {/* Desktop links */}
        <ul style={{display:'flex',listStyle:'none',gap:'20px',margin:0,padding:0,alignItems:'center'}} className="nav-links-desktop">
          <li><a href="/" style={{textDecoration:'none',color:'var(--ink)',fontWeight:600,fontSize:'.85rem',opacity:.75}}>Ana Sayfa</a></li>
          <li><a href="/#bu-hafta" style={{textDecoration:'none',color:'var(--ink)',fontWeight:600,fontSize:'.85rem',opacity:.75}}>YouTube</a></li>
          <li><a href="/urunler" style={{textDecoration:'none',color:'var(--ink)',fontWeight:600,fontSize:'.85rem',opacity:.75}}>Ürünler</a></li>
          <li><a href="/#demleyen" style={{textDecoration:'none',color:'var(--ink)',fontWeight:600,fontSize:'.85rem',opacity:.75}}>Ben Kimim</a></li>
          <li><a href="/#anket" style={{textDecoration:'none',color:'var(--ink)',fontWeight:600,fontSize:'.85rem',opacity:.75}}>İletişim</a></li>
        </ul>

        {/* Sağ ikonlar */}
        <div style={{display:'flex',alignItems:'center',gap:'6px',flexShrink:0}}>

          {/* Sepet */}
          <button onClick={openCart} type="button" aria-label="Sepet"
            style={{background:'none',border:'none',cursor:'pointer',width:'36px',height:'36px',display:'flex',alignItems:'center',justifyContent:'center',position:'relative',flexShrink:0}}>
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="1.8" width="20" height="20">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            {count > 0 && (
              <span style={{position:'absolute',top:'2px',right:'2px',background:'var(--rust)',color:'#fff',borderRadius:'50%',width:'16px',height:'16px',fontSize:'9px',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700}}>
                {count}
              </span>
            )}
          </button>

          {/* Arama */}
          <button onClick={() => setSearchOpen(true)} type="button" aria-label="Ara"
            style={{background:'none',border:'none',cursor:'pointer',width:'36px',height:'36px',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="1.8" width="20" height="20">
              <circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>
            </svg>
          </button>

          {/* Instagram */}
          <a href="https://instagram.com/demleme" target="_blank" rel="noopener" aria-label="Instagram"
            style={{display:'flex',alignItems:'center',justifyContent:'center',width:'36px',height:'36px',flexShrink:0}}>
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="1.8" width="20" height="20">
              <rect x="2" y="2" width="20" height="20" rx="5"/>
              <circle cx="12" cy="12" r="5"/>
              <circle cx="17.5" cy="6.5" r="1" fill="var(--ink)" stroke="none"/>
            </svg>
          </a>

          {/* Hamburger */}
          <button onClick={() => setDrawerOpen(true)} type="button" aria-label="Menü"
            style={{background:'var(--ink)',border:'none',cursor:'pointer',width:'40px',height:'40px',borderRadius:'10px',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--cream-fixed)" strokeWidth="2.2" strokeLinecap="round" width="20" height="20">
              <line x1="3" y1="7" x2="21" y2="7"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="17" x2="21" y2="17"/>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobil drawer */}
      {drawerOpen && (
        <div style={{position:'fixed',inset:0,zIndex:500,display:'flex'}}>
          {/* Backdrop */}
          <div onClick={closeDrawer} style={{position:'absolute',inset:0,background:'rgba(0,0,0,.45)'}} />

          {/* Panel */}
          <div style={{
            position:'absolute', right:0, top:0, bottom:0,
            width:'min(300px,85vw)', background:'var(--cream)',
            display:'flex', flexDirection:'column', padding:'24px 28px',
            boxShadow:'-8px 0 40px rgba(0,0,0,.2)',
          }}>
            <button onClick={closeDrawer} type="button" aria-label="Kapat"
              style={{alignSelf:'flex-end',background:'none',border:'1.5px solid var(--line)',borderRadius:'50%',width:'36px',height:'36px',cursor:'pointer',fontSize:'1.1rem',marginBottom:'32px',display:'flex',alignItems:'center',justifyContent:'center'}}>
              ✕
            </button>

            <nav style={{display:'flex',flexDirection:'column',gap:'4px'}}>
              {[
                {href:'/',label:'Ana Sayfa'},
                {href:'/#bu-hafta',label:'YouTube'},
                {href:'/urunler',label:'Ürünler'},
                {href:'/#demleyen',label:'Ben Kimim'},
                {href:'/#anket',label:'İletişim'},
              ].map(({href,label}) => (
                <a key={label} href={href} onClick={closeDrawer}
                  style={{display:'block',padding:'14px 0',borderBottom:'1px solid var(--line)',textDecoration:'none',color:'var(--ink)',fontWeight:700,fontSize:'1.1rem'}}>
                  {label}
                </a>
              ))}
            </nav>

            <div style={{marginTop:'auto',display:'flex',gap:'16px',paddingTop:'24px'}}>
              <a href="https://youtube.com/@demleme" target="_blank" rel="noopener"
                style={{display:'flex',alignItems:'center',gap:'8px',color:'var(--ink)',textDecoration:'none',fontSize:'.85rem',fontWeight:600}}>
                <svg viewBox="0 0 24 24" fill="var(--ink)" width="18" height="18"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31 31 0 000 12a31 31 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31 31 0 0024 12a31 31 0 00-.5-5.8zM9.6 15.5V8.5L15.8 12z"/></svg>
                YouTube
              </a>
              <a href="https://instagram.com/demleme" target="_blank" rel="noopener"
                style={{display:'flex',alignItems:'center',gap:'8px',color:'var(--ink)',textDecoration:'none',fontSize:'.85rem',fontWeight:600}}>
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="1.8" width="18" height="18"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/></svg>
                Instagram
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Search overlay */}
      {searchOpen && (
        <div style={{position:'fixed',inset:0,zIndex:500,background:'rgba(26,18,8,.55)',backdropFilter:'blur(6px)',display:'flex',alignItems:'flex-start',justifyContent:'center',padding:'80px 20px 20px'}}
          onClick={(e) => { if(e.target === e.currentTarget) setSearchOpen(false); }}>
          <div style={{background:'var(--paper)',borderRadius:'20px',width:'100%',maxWidth:'560px',padding:'28px',position:'relative',boxShadow:'0 24px 80px rgba(0,0,0,.25)'}}>
            <button onClick={() => setSearchOpen(false)} type="button"
              style={{position:'absolute',top:'16px',right:'16px',background:'var(--cream-deep)',border:'none',borderRadius:'50%',width:'32px',height:'32px',cursor:'pointer',fontSize:'1rem',fontWeight:700,display:'flex',alignItems:'center',justifyContent:'center'}}>
              ✕
            </button>
            <div style={{display:'flex',alignItems:'center',gap:'12px',borderBottom:'1.5px solid var(--line)',paddingBottom:'16px',marginBottom:'16px',marginTop:'4px'}}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20" style={{opacity:.4,flexShrink:0}}>
                <circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>
              </svg>
              <input autoFocus type="text" placeholder="Bölüm, ürün ya da konu ara…"
                style={{flex:1,border:'none',outline:'none',fontSize:'1rem',fontFamily:'var(--font-body)',background:'transparent',color:'var(--ink)'}} />
            </div>
            <p style={{color:'var(--ink-faint)',fontSize:'.88rem',margin:0}}>Yazmaya başla — bölümlerde ve ürünlerde arama yapılır.</p>
          </div>
        </div>
      )}
    </>
  );
}
