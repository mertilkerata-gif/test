import { notFound } from 'next/navigation';
import { products, getProduct } from '@/lib/products';
import NavBar from '@/app/components/NavBar';
import QtySelector from '@/app/components/QtySelector';

export async function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return { title: `${p.name} — Demleme Shop`, description: p.description };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  const related = products.filter(r => r.id !== p.id).slice(0, 4);

  return (
    <>
      <NavBar />
      <main style={{ background: 'var(--cream)', minHeight: '100vh' }}>

        {/* ── HERO BAND ── */}
        <div style={{
          background: 'var(--ink)', color: 'var(--cream-fixed)',
          padding: '12px var(--pad)', display: 'flex', gap: '8px',
          alignItems: 'center', fontSize: '.78rem', flexWrap: 'wrap'
        }}>
          <a href="/" style={{ color: 'rgba(243,238,225,.5)', textDecoration: 'none' }}>Ana Sayfa</a>
          <span style={{ opacity: .4 }}>/</span>
          <a href="/urunler" style={{ color: 'rgba(243,238,225,.5)', textDecoration: 'none' }}>Mağaza</a>
          <span style={{ opacity: .4 }}>/</span>
          <span style={{ color: 'var(--cream-fixed)' }}>{p.name}</span>
        </div>

        {/* ── ANA BÖLÜM ── */}
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          padding: '0 var(--pad)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '0',
          minHeight: '80vh',
        }} className="pd-grid">

          {/* SOL: Görsel paneli */}
          <div style={{
            position: 'sticky', top: '0',
            height: '100vh',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            padding: '48px 48px 48px 0',
            gap: '16px',
          }} className="pd-img-col">

            {/* Ana görsel kutu */}
            <div style={{
              width: '100%', aspectRatio: '1',
              background: `linear-gradient(135deg, var(--cream-deep) 0%, color-mix(in srgb, ${p.color} 8%, var(--cream-deep)) 100%)`,
              borderRadius: '28px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 24px 80px rgba(0,0,0,.12)',
            }}>
              {/* Dekoratif daire */}
              <div style={{
                position: 'absolute', width: '70%', height: '70%',
                borderRadius: '50%',
                border: `1.5px solid ${p.color}22`,
              }} />
              <div style={{
                position: 'absolute', width: '85%', height: '85%',
                borderRadius: '50%',
                border: `1px solid ${p.color}11`,
              }} />

              {/* İkon */}
              <span style={{
                color: p.color, width: '220px', height: '220px',
                display: 'block', position: 'relative', zIndex: 1,
                filter: 'drop-shadow(0 8px 24px rgba(0,0,0,.12))',
              }} dangerouslySetInnerHTML={{ __html: p.svgIcon }} />

              {/* Badge */}
              {p.badge && (
                <div style={{
                  position: 'absolute', top: '20px', left: '20px',
                  background: 'var(--rust)', color: '#fff',
                  fontSize: '.72rem', fontWeight: 700, letterSpacing: '.1em',
                  padding: '6px 14px', borderRadius: '40px',
                  boxShadow: '0 4px 12px rgba(0,0,0,.2)',
                }}>{p.badge}</div>
              )}

              {/* Stok uyarısı - düşükse */}
              {p.stock < 30 && (
                <div style={{
                  position: 'absolute', bottom: '20px', right: '20px',
                  background: 'rgba(0,0,0,.7)', backdropFilter: 'blur(8px)',
                  color: '#fff', fontSize: '.72rem', fontWeight: 600,
                  padding: '6px 12px', borderRadius: '40px',
                  display: 'flex', alignItems: 'center', gap: '6px',
                }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ff4444', display: 'block', animation: 'pulse 1s infinite' }} />
                  Son {p.stock} adet
                </div>
              )}
            </div>

            {/* Alt küçük thumbnail'ler (renk varyantı simülasyonu) */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {['var(--cream-deep)', 'var(--ink)', 'var(--lav)'].map((bg, i) => (
                <div key={i} style={{
                  width: '60px', height: '60px', borderRadius: '12px',
                  background: bg, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: i === 0 ? `2px solid ${p.color}` : '2px solid transparent',
                  transition: 'border-color .2s',
                }}>
                  <span style={{ color: i === 1 ? 'var(--cream)' : p.color, width: '32px', height: '32px', display: 'block', opacity: .7 }}
                    dangerouslySetInnerHTML={{ __html: p.svgIcon }} />
                </div>
              ))}
            </div>
          </div>

          {/* SAĞ: Ürün detay */}
          <div style={{
            padding: '60px 0 80px 64px',
            display: 'flex', flexDirection: 'column', gap: '32px',
          }} className="pd-info-col">

            {/* Kategori + İsim */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <span style={{
                  fontSize: '.7rem', fontWeight: 700, letterSpacing: '.16em',
                  color: p.color, background: `${p.color}18`,
                  padding: '4px 12px', borderRadius: '40px',
                }}>{p.category.toUpperCase()}</span>
                {p.badge && (
                  <span style={{
                    fontSize: '.7rem', fontWeight: 700, letterSpacing: '.1em',
                    color: 'var(--rust)', background: 'rgba(180,60,30,.1)',
                    padding: '4px 12px', borderRadius: '40px',
                  }}>{p.badge}</span>
                )}
              </div>
              <h1 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                lineHeight: 1.05, margin: 0, color: 'var(--ink)',
              }}>{p.name}</h1>
            </div>

            {/* Fiyat */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                fontWeight: 800, color: 'var(--ink)',
              }}>{p.priceDisplay}</span>
              <span style={{ fontSize: '.85rem', color: 'var(--green)', fontWeight: 600 }}>
                ✓ Stokta mevcut
              </span>
            </div>

            {/* Stok bar */}
            {p.stock < 50 && (
              <div style={{
                background: 'var(--paper)', borderRadius: '14px',
                padding: '16px 20px',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '.8rem', fontWeight: 600, color: 'var(--ink)' }}>Stok durumu</span>
                  <span style={{ fontSize: '.8rem', color: 'var(--rust)', fontWeight: 700 }}>Son {p.stock} adet</span>
                </div>
                <div style={{ height: '6px', background: 'var(--cream-deep)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{
                    height: '100%', borderRadius: '3px',
                    width: `${Math.min(p.stock * 2, 100)}%`,
                    background: 'linear-gradient(90deg, var(--rust), var(--butter))',
                    transition: 'width 1s ease',
                  }} />
                </div>
              </div>
            )}

            {/* Açıklama */}
            <p style={{
              color: 'var(--ink-soft)', lineHeight: 1.8,
              fontSize: '1.05rem', margin: 0,
              borderLeft: `3px solid ${p.color}`,
              paddingLeft: '16px',
            }}>{p.description}</p>

            {/* Özellikler */}
            <div style={{
              background: 'var(--paper)', borderRadius: '16px', padding: '20px 24px',
            }}>
              <p style={{ fontSize: '.8rem', fontWeight: 700, letterSpacing: '.1em', color: 'var(--ink-faint)', margin: '0 0 14px' }}>ÜRÜN ÖZELLİKLERİ</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {p.details.map((d, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    fontSize: '.88rem', color: 'var(--ink-soft)',
                  }}>
                    <div style={{
                      width: '20px', height: '20px', borderRadius: '50%',
                      background: `${p.color}18`, flexShrink: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <svg viewBox="0 0 12 12" width="10" height="10" fill="none" stroke={p.color} strokeWidth="2" strokeLinecap="round">
                        <path d="M1.5 6l3 3 6-6" />
                      </svg>
                    </div>
                    {d}
                  </div>
                ))}
              </div>
            </div>

            {/* Adet + Sepet */}
            <QtySelector product={p} />

            {/* Güvence bandı */}
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
              gap: '12px',
            }}>
              {[
                { icon: '🚚', title: 'Hızlı Teslimat', sub: '2–4 iş günü' },
                { icon: '↩️', title: '14 Gün İade', sub: 'Koşulsuz iade' },
                { icon: '🔒', title: 'Güvenli Ödeme', sub: 'SSL korumalı' },
              ].map(b => (
                <div key={b.title} style={{
                  background: 'var(--paper)', borderRadius: '14px',
                  padding: '14px', textAlign: 'center',
                  boxShadow: 'var(--shadow-sm)',
                }}>
                  <div style={{ fontSize: '1.4rem', marginBottom: '4px' }}>{b.icon}</div>
                  <p style={{ fontWeight: 700, fontSize: '.78rem', margin: '0 0 2px', color: 'var(--ink)' }}>{b.title}</p>
                  <p style={{ fontSize: '.72rem', color: 'var(--ink-faint)', margin: 0 }}>{b.sub}</p>
                </div>
              ))}
            </div>

            {/* Sosyal kanıt */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              padding: '14px 18px', background: 'var(--paper)',
              borderRadius: '14px', border: '1px solid var(--line)',
            }}>
              <div style={{ display: 'flex' }}>
                {['SB', 'EK', 'MY'].map((a, i) => (
                  <div key={i} style={{
                    width: '28px', height: '28px', borderRadius: '50%', border: '2px solid var(--cream)',
                    marginLeft: i > 0 ? '-8px' : 0,
                    background: ['var(--rust)', 'var(--green)', 'var(--lav-deep)'][i],
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '.65rem', fontWeight: 700, color: '#fff',
                  }}>{a}</div>
                ))}
              </div>
              <p style={{ fontSize: '.82rem', color: 'var(--ink-soft)', margin: 0 }}>
                <strong style={{ color: 'var(--ink)' }}>47 kişi</strong> bu ürünü sepetine ekledi
              </p>
            </div>
          </div>
        </div>

        {/* ── İLGİLİ ÜRÜNLER ── */}
        <div style={{
          background: 'var(--ink)', padding: '64px var(--pad)',
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '36px' }}>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.4rem,3vw,2rem)',
                color: 'var(--cream-fixed)', margin: 0,
              }}>Bunları da beğenebilirsin</h2>
              <a href="/urunler" style={{
                color: 'var(--rust)', textDecoration: 'none',
                fontSize: '.85rem', fontWeight: 600,
                display: 'flex', alignItems: 'center', gap: '4px',
              }}>
                Tümünü gör
                <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
              </a>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: '16px',
            }}>
              {related.map(r => (
                <a key={r.id} href={`/urunler/${r.slug}`} style={{
                  background: 'rgba(255,255,255,.06)',
                  border: '1px solid rgba(255,255,255,.08)',
                  borderRadius: '16px', overflow: 'hidden',
                  textDecoration: 'none', color: 'inherit',
                  display: 'flex', flexDirection: 'column',
                  transition: 'background .2s, transform .2s',
                }}>
                  <div style={{
                    background: 'rgba(255,255,255,.04)',
                    padding: '32px', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    aspectRatio: '1',
                  }}>
                    <span style={{ color: r.color, width: '72px', height: '72px', display: 'block', opacity: .9 }}
                      dangerouslySetInnerHTML={{ __html: r.svgIcon }} />
                  </div>
                  <div style={{ padding: '16px 20px 20px' }}>
                    <p style={{
                      fontFamily: 'var(--font-display)', fontWeight: 700,
                      fontSize: '1rem', margin: '0 0 6px',
                      color: 'var(--cream-fixed)',
                    }}>{r.name}</p>
                    <p style={{ color: r.color, fontWeight: 700, fontSize: '1rem', margin: 0 }}>{r.priceDisplay}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

      </main>

      <style>{`
        @media (max-width: 768px) {
          .pd-grid { grid-template-columns: 1fr !important; }
          .pd-img-col { position: static !important; height: auto !important; padding: 24px var(--pad) 0 !important; }
          .pd-info-col { padding: 24px var(--pad) 60px !important; }
        }
      `}</style>
    </>
  );
}
