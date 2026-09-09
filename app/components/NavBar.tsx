'use client';
import { useEffect, useState } from 'react';
import { getCart, cartCount } from '@/lib/cart';
import { getUser, logout } from '@/lib/auth';

export default function NavBar() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState<{ name: string } | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <>
      <nav className="site-nav" id="siteNav">
        <a href="/" className="nav-logo" style={{display:'flex',alignItems:'center',textDecoration:'none'}}>
          <img
            src="/images/demleme-logo.png"
            alt="Demleme"
            style={{height:'40px',width:'auto',display:'block',objectFit:'contain'}}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const el = e.currentTarget.nextElementSibling as HTMLElement;
              if (el) el.style.display = 'block';
            }}
          />
          <span style={{display:'none',fontFamily:"'Boogaloo',var(--font-display)",fontSize:'1.6rem',letterSpacing:'0.05em',color:'var(--ink)'}}>demleme</span>
        </a>

        <ul className="nav-links" style={{listStyle:'none',display:'flex',gap:'28px',margin:0,padding:0,alignItems:'center'}}>
          <li><a href="/" style={{textDecoration:'none',color:'var(--ink)',fontWeight:600,fontSize:'.9rem'}}>Ana Sayfa</a></li>
          <li><a href="/#videos" style={{textDecoration:'none',color:'var(--ink)',fontWeight:600,fontSize:'.9rem'}}>YouTube</a></li>
          <li><a href="/urunler" style={{textDecoration:'none',color:'var(--ink)',fontWeight:600,fontSize:'.9rem'}}>Ürünler</a></li>
          <li><a href="/#benkimim" style={{textDecoration:'none',color:'var(--ink)',fontWeight:600,fontSize:'.9rem'}}>Ben Kimim</a></li>
          <li><a href="/#iletisim" style={{textDecoration:'none',color:'var(--ink)',fontWeight:600,fontSize:'.9rem'}}>İletişim</a></li>
        </ul>

        <div className="nav-icons" style={{display:'flex',alignItems:'center',gap:'4px'}}>
          {/* Sepet - drawer açar */}
          <button
            id="cartBtn"
            className="nav-icon-btn"
            aria-label="Sepetim"
            style={{position:'relative',background:'none',border:'none',cursor:'pointer',padding:0,width:'29px',height:'29px',display:'flex',alignItems:'center',justifyContent:'center'}}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M7 8V6.5a5 5 0 0110 0V8h2.3a1 1 0 01.99.86l1.2 8.4A2 2 0 0119.52 20H4.48a2 2 0 01-1.97-2.74l1.2-8.4A1 1 0 014.7 8H7zm2 0h6V6.5a3 3 0 00-6 0V8z"/></svg>
            {count > 0 && (
              <span id="cartCount" style={{position:'absolute',top:'-6px',right:'-6px',background:'var(--rust)',color:'#fff',borderRadius:'50%',width:'17px',height:'17px',fontSize:'10px',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700}}>{count}</span>
            )}
          </button>

          {/* Favori */}
          <button id="favBtn" className="nav-icon-btn" aria-label="Favorilerim" style={{background:'none',border:'none',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',position:'relative',padding:0,width:'29px',height:'29px'}}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22"><path d="M12 20s-7-4.35-9.5-8.5C.7 8 2 4.5 5.5 4 8 3.6 10 5 12 7.5 14 5 16 3.6 18.5 4 22 4.5 23.3 8 21.5 11.5 19 15.65 12 20 12 20z"/></svg>
            <span id="favCount" hidden style={{position:'absolute',top:'-6px',right:'-6px',background:'var(--lav-deep)',color:'#fff',borderRadius:'50%',width:'17px',height:'17px',fontSize:'10px',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700}}>0</span>
          </button>

          {/* Arama */}
          <button id="searchBtn" className="nav-icon-btn" aria-label="Ara" style={{background:'none',border:'none',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',padding:0,width:'29px',height:'29px'}}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
          </button>

          {/* Dark mode */}
          <button className="theme-toggle" id="themeToggle" aria-label="Karanlık mod" type="button" style={{background:'none',border:'none',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',padding:0,width:'29px',height:'29px'}}>
            <svg className="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22"><circle cx="12" cy="12" r="4.5"/><path d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
            <svg className="moon" viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"/></svg>
          </button>

          {/* Hesap */}
          {user ? (
            <div style={{position:'relative'}}>
              <button style={{display:'flex',alignItems:'center',gap:'6px',background:'none',border:'none',cursor:'pointer',fontFamily:'var(--font-body)',fontSize:'.85rem',fontWeight:600,color:'var(--ink)',padding:'6px 10px',borderRadius:'40px'}} onClick={() => setMenuOpen(o=>!o)}>
                <span style={{width:'28px',height:'28px',borderRadius:'50%',background:'var(--rust)',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700,fontSize:'.8rem'}}>{user.name[0].toUpperCase()}</span>
              </button>
              {menuOpen && (
                <div style={{position:'absolute',right:0,top:'calc(100% + 8px)',background:'var(--paper)',borderRadius:'14px',boxShadow:'var(--shadow-md)',minWidth:'160px',zIndex:200,overflow:'hidden',border:'1px solid var(--line)'}}>
                  <a href="/hesap" style={{display:'block',padding:'12px 18px',textDecoration:'none',color:'var(--ink)',fontSize:'.88rem',fontWeight:600}} onClick={()=>setMenuOpen(false)}>Hesabım</a>
                  <a href="/hesap/siparisler" style={{display:'block',padding:'12px 18px',textDecoration:'none',color:'var(--ink)',fontSize:'.88rem'}} onClick={()=>setMenuOpen(false)}>Siparişlerim</a>
                  <div style={{borderTop:'1px solid var(--line)'}}/>
                  <button style={{display:'block',width:'100%',textAlign:'left',padding:'12px 18px',background:'none',border:'none',cursor:'pointer',color:'var(--rust)',fontSize:'.88rem',fontFamily:'var(--font-body)'}} onClick={()=>{logout();setMenuOpen(false);}}>Çıkış Yap</button>
                </div>
              )}
            </div>
          ) : (
            <a href="/giris" className="nav-icon-btn" aria-label="Giriş Yap" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
            </a>
          )}

          {/* Instagram */}
          <a className="nav-icon-btn" href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.6" r="1"/></svg>
          </a>

          {/* Hamburger */}
          <button className="nav-hamburger" aria-label="Menü" onClick={()=>{
            document.getElementById('navDrawer')?.classList.toggle('open');
            document.getElementById('navBackdrop')?.classList.toggle('open');
          }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="22" height="22"><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></svg>
          </button>
        </div>
      </nav>

      {/* Mobil drawer */}
      <div className="nav-drawer" id="navDrawer">
        <button className="nav-drawer-close" aria-label="Kapat" onClick={()=>{
          document.getElementById('navDrawer')?.classList.remove('open');
          document.getElementById('navBackdrop')?.classList.remove('open');
        }}>✕</button>
        <ul className="nav-links" style={{listStyle:'none',padding:0,margin:0}}>
          <li><a href="/">Ana Sayfa</a></li>
          <li><a href="/#videos">YouTube</a></li>
          <li><a href="/urunler">Ürünler</a></li>
          <li><a href="/#benkimim">Ben Kimim</a></li>
          <li><a href="/#iletisim">İletişim</a></li>
        </ul>
      </div>
      <div className="nav-backdrop" id="navBackdrop" onClick={()=>{
        document.getElementById('navDrawer')?.classList.remove('open');
        document.getElementById('navBackdrop')?.classList.remove('open');
      }}/>
    </>
  );
}
