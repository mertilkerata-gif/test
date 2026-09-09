import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { products, getProduct } from '@/lib/products';
import NavBar from '@/app/components/NavBar';
import AddToCartBtn from '@/app/components/AddToCartBtn';
import QtySelector from '@/app/components/QtySelector';

export async function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const p = getProduct(params.slug);
  if (!p) return {};
  return {
    title: `${p.name} — Demleme Shop`,
    description: p.description,
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const p = getProduct(params.slug);
  if (!p) notFound();

  const related = products.filter(r => r.id !== p.id && r.category === p.category).slice(0, 3);
  const fallbackRelated = products.filter(r => r.id !== p.id).slice(0, 3);

  return (
    <>
      <NavBar />
      <main style={{minHeight:'100vh', background:'var(--cream)', paddingBottom:'80px'}}>

        {/* Breadcrumb */}
        <div style={{maxWidth:'var(--wrap)',margin:'0 auto',padding:'24px var(--pad) 0',
          display:'flex',gap:'8px',alignItems:'center',fontSize:'.85rem',color:'var(--ink-faint)'}}>
          <a href="/" style={{color:'var(--ink-faint)',textDecoration:'none'}}>Ana Sayfa</a>
          <span>/</span>
          <a href="/urunler" style={{color:'var(--ink-faint)',textDecoration:'none'}}>Mağaza</a>
          <span>/</span>
          <span style={{color:'var(--ink)'}}>{p.name}</span>
        </div>

        {/* Ana içerik */}
        <div style={{
          maxWidth:'var(--wrap)',margin:'0 auto',
          padding:'40px var(--pad)',
          display:'grid',
          gridTemplateColumns:'1fr 1fr',
          gap:'64px',
          alignItems:'start',
        }}>
          {/* Sol: görsel */}
          <div style={{
            background:'var(--cream-deep)',
            borderRadius:'24px',
            aspectRatio:'1',
            display:'flex',alignItems:'center',justifyContent:'center',
            position:'sticky',top:'24px',
          }}>
            {p.badge && (
              <span style={{
                position:'absolute',top:'24px',left:'24px',
                background:'var(--rust)',color:'#fff',
                fontSize:'.75rem',fontWeight:700,letterSpacing:'.08em',
                padding:'6px 14px',borderRadius:'20px',
              }}>{p.badge}</span>
            )}
            <span style={{color: p.color, width:'160px', height:'160px', display:'block'}}
              dangerouslySetInnerHTML={{__html: p.svgIcon}} />
          </div>

          {/* Sağ: detaylar */}
          <div style={{display:'flex',flexDirection:'column',gap:'24px'}}>
            <div>
              <p style={{fontFamily:'var(--font-mark)',fontSize:'.72rem',letterSpacing:'.16em',
                color:'var(--ink-faint)',marginBottom:'10px'}}>{p.category.toUpperCase()}</p>
              <h1 style={{fontFamily:'var(--font-display)',fontSize:'clamp(1.8rem,4vw,2.8rem)',
                margin:0,lineHeight:1.1,color:'var(--ink)'}}>{p.name}</h1>
            </div>

            <p style={{fontSize:'clamp(1.6rem,3vw,2.2rem)',fontFamily:'var(--font-display)',
              fontWeight:700,color:'var(--ink)',margin:0}}>{p.priceDisplay}</p>

            {/* Stok */}
            {p.stock < 50 && (
              <div>
                <div style={{height:'6px',background:'var(--cream-deep)',borderRadius:'3px',overflow:'hidden',marginBottom:'6px'}}>
                  <div style={{height:'100%',width:`${Math.min(p.stock*2, 100)}%`,
                    background:'var(--rust)',borderRadius:'3px',transition:'width 1s'}}/>
                </div>
                <p style={{fontSize:'.8rem',color:'var(--rust)',fontWeight:600}}>
                  ⚡ Stokta son {p.stock} adet
                </p>
              </div>
            )}

            <p style={{color:'var(--ink-soft)',lineHeight:1.7,fontSize:'1rem',margin:0}}>
              {p.description}
            </p>

            {/* Ürün detayları */}
            <ul style={{listStyle:'none',padding:0,margin:0,display:'flex',flexDirection:'column',gap:'8px'}}>
              {p.details.map((d, i) => (
                <li key={i} style={{display:'flex',alignItems:'center',gap:'10px',
                  fontSize:'.9rem',color:'var(--ink-soft)'}}>
                  <svg viewBox="0 0 16 16" width="14" height="14" fill="var(--green)">
                    <path d="M2 8l4 4 8-8" stroke="var(--green)" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  </svg>
                  {d}
                </li>
              ))}
            </ul>

            {/* Adet + Sepet */}
            <div style={{display:'flex',gap:'12px',alignItems:'center',flexWrap:'wrap'}}>
              <QtySelector product={p} />
            </div>

            {/* Kargo notu */}
            <div style={{
              background:'var(--paper)',borderRadius:'12px',padding:'16px 20px',
              display:'flex',gap:'12px',alignItems:'center',
              fontSize:'.85rem',color:'var(--ink-soft)',
            }}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="var(--green)" strokeWidth="1.8">
                <path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3"/><rect x="9" y="11" width="14" height="10" rx="2"/><circle cx="12" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              </svg>
              <span>2–4 iş günü teslimat · ₺200 üzeri kargo bedava</span>
            </div>
          </div>
        </div>

        {/* İlgili ürünler */}
        <div style={{maxWidth:'var(--wrap)',margin:'0 auto',padding:'0 var(--pad)'}}>
          <div style={{borderTop:'1px solid var(--line)',paddingTop:'48px'}}>
            <h2 style={{fontFamily:'var(--font-display)',fontSize:'1.6rem',marginBottom:'28px',color:'var(--ink)'}}>
              Bunları da beğenebilirsin
            </h2>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))',gap:'20px'}}>
              {(related.length > 0 ? related : fallbackRelated).map(r => (
                <a key={r.id} href={`/urunler/${r.slug}`} style={{
                  background:'var(--paper)',borderRadius:'14px',overflow:'hidden',
                  textDecoration:'none',color:'inherit',
                  boxShadow:'var(--shadow-sm)',display:'flex',flexDirection:'column',
                }}>
                  <div style={{background:'var(--cream-deep)',padding:'28px',
                    display:'flex',alignItems:'center',justifyContent:'center',aspectRatio:'4/3'}}>
                    <span style={{color: r.color, width:'56px',height:'56px',display:'block'}}
                      dangerouslySetInnerHTML={{__html: r.svgIcon}} />
                  </div>
                  <div style={{padding:'16px'}}>
                    <p style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:'1rem',
                      marginBottom:'4px',color:'var(--ink)'}}>{r.name}</p>
                    <p style={{color:'var(--rust)',fontWeight:700,fontSize:'.95rem'}}>{r.priceDisplay}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

      </main>
    </>
  );
}
