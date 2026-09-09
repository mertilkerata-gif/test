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
        <a href="/" className="nav-logo" style={{display:'flex',alignItems:'center'}}>
          <img src="/images/demleme-logo.png" alt="Demleme" style={{height:'24px',width:'auto',display:'block'}} />
        </a>
        <ul className="nav-links" style={{listStyle:'none',display:'flex',gap:'28px',margin:0,padding:0,alignItems:'center'}}>
          <li><a href="/" style={{textDecoration:'none',color:'var(--ink)',fontWeight:600,fontSize:'.9rem'}}>Ana Sayfa</a></li>
          <li><a href="/#videos" style={{textDecoration:'none',color:'var(--ink)',fontWeight:600,fontSize:'.9rem'}}>YouTube</a></li>
          <li><a href="/urunler" style={{textDecoration:'none',color:'var(--ink)',fontWeight:600,fontSize:'.9rem'}}>Ürünler</a></li>
          <li><a href="/#benkimim" style={{textDecoration:'none',color:'var(--ink)',fontWeight:600,fontSize:'.9rem'}}>Ben Kimim</a></li>
          <li><a href="/#iletisim" style={{textDecoration:'none',color:'var(--ink)',fontWeight:600,fontSize:'.9rem'}}>İletişim</a></li>
        </ul>
        <div className="nav-icons" style={{display:'flex',alignItems:'center',gap:'4px'}}>
          <a className="nav-icon-btn" href="/sepet" aria-label="Sepetim" style={{position:'relative'}}>
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 8V6.5a5 5 0 0110 0V8h2.3a1 1 0 01.99.86l1.2 8.4A2 2 0 0119.52 20H4.48a2 2 0 01-1.97-2.74l1.2-8.4A1 1 0 014.7 8H7zm2 0h6V6.5a3 3 0 00-6 0V8z"/></svg>
            {count > 0 && <span style={{position:'absolute',top:'-6px',right:'-6px',background:'var(--rust)',color:'#fff',borderRadius:'50%',width:'17px',height:'17px',fontSize:'10px',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700}}>{count}</span>}
          </a>
          {user ? (
            <div style={{position:'relative'}}>
              <button style={{display:'flex',alignItems:'center',gap:'6px',background:'none',border:'none',cursor:'pointer',fontFamily:'var(--font-body)',fontSize:'.85rem',fontWeight:600,color:'var(--ink)',padding:'6px 10px',borderRadius:'40px'}} onClick={() => setMenuOpen(o=>!o)}>
                <span style={{width:'28px',height:'28px',borderRadius:'50%',background:'var(--rust)',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700,fontSize:'.8rem'}}>{user.name[0].toUpperCase()}</span>
                <span style={{maxWidth:'80px',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{user.name.split(' ')[0]}</span>
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
            <a href="/giris" className="nav-icon-btn" aria-label="Giriş Yap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
            </a>
          )}
          <a className="nav-icon-btn" href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.6" r="1"/></svg>
          </a>
          <button className="nav-hamburger" aria-label="Menü" onClick={()=>{document.getElementById('navDrawer')?.classList.toggle('open');document.getElementById('navBackdrop')?.classList.toggle('open');}}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></svg>
          </button>
        </div>
      </nav>
      <div className="nav-drawer" id="navDrawer">
        <button className="nav-drawer-close" aria-label="Kapat" onClick={()=>{document.getElementById('navDrawer')?.classList.remove('open');document.getElementById('navBackdrop')?.classList.remove('open');}}>✕</button>
        <ul className="nav-links" style={{listStyle:'none',padding:0,margin:0}}>
          <li><a href="/">Ana Sayfa</a></li>
          <li><a href="/#videos">YouTube</a></li>
          <li><a href="/urunler">Ürünler</a></li>
          <li><a href="/#benkimim">Ben Kimim</a></li>
          <li><a href="/#iletisim">İletişim</a></li>
          <li><a href="/sepet">Sepetim {count > 0 && `(${count})`}</a></li>
          <li><a href={user ? '/hesap' : '/giris'}>{user ? `Hesabım` : 'Giriş Yap'}</a></li>
        </ul>
      </div>
      <div className="nav-backdrop" id="navBackdrop" onClick={()=>{document.getElementById('navDrawer')?.classList.remove('open');document.getElementById('navBackdrop')?.classList.remove('open');}}/>
    </>
  );
}
