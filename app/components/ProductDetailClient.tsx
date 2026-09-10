'use client';
import { useState, useEffect, useRef } from 'react';
import type { Product } from '@/lib/products';
import QtySelector from './QtySelector';

const Star = ({ filled }: { filled: boolean }) => (
  <svg viewBox="0 0 16 16" width="13" height="13">
    <path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z"
      fill={filled ? '#f0a500' : 'none'} stroke="#f0a500" strokeWidth="1" />
  </svg>
);

function AnimatedIcon({ svgIcon, color }: { svgIcon: string; color: string }) {
  const [frame, setFrame] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setFrame(f => f + 1), 2000);
    return () => clearInterval(t);
  }, []);
  return (
    <div style={{
      width: '60%', height: '60%',
      color,
      filter: `drop-shadow(0 12px 40px ${color}55)`,
      transition: 'transform .6s cubic-bezier(.34,1.56,.64,1)',
      transform: frame % 2 === 0 ? 'scale(1) rotate(-2deg)' : 'scale(1.06) rotate(2deg)',
    }} dangerouslySetInnerHTML={{ __html: svgIcon }} />
  );
}

export default function ProductDetailClient({ product: p, related }: { product: Product; related: Product[] }) {
  const [activeTab, setActiveTab] = useState<'aciklama' | 'ozellikler' | 'yorumlar' | 'sss'>('aciklama');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [selectedSize, setSelectedSize] = useState('M');
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setTimeout(() => setMounted(true), 50); }, []);

  const avgRating = p.reviews.length
    ? p.reviews.reduce((s, r) => s + r.rating, 0) / p.reviews.length : 5;

  const variants = [
    { label: 'Orijinal', color: p.color },
    { label: 'Alternatif', color: p.accentColor },
  ];

  return (
    <main style={{ background: 'var(--cream)', minHeight: '100vh', paddingTop: '72px' }}>

      {/* BREADCRUMB */}
      <div style={{ background: 'var(--ink)', padding: '12px var(--pad)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '8px', alignItems: 'center', fontSize: '.75rem' }}>
          <a href="/" style={{ color: 'rgba(243,238,225,.4)', textDecoration: 'none' }}>Ana Sayfa</a>
          <span style={{ color: 'rgba(243,238,225,.2)' }}>/</span>
          <a href="/urunler" style={{ color: 'rgba(243,238,225,.4)', textDecoration: 'none' }}>Mağaza</a>
          <span style={{ color: 'rgba(243,238,225,.2)' }}>/</span>
          <span style={{ color: 'var(--cream-fixed)', fontWeight: 600 }}>{p.name}</span>
        </div>
      </div>

      {/* ANA GRID */}
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        padding: '52px var(--pad) 80px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '64px',
        alignItems: 'start',
      }} className="pd-grid">

        {/* SOL: Görsel */}
        <div style={{ position: 'sticky', top: '88px' }} className="pd-img-col">

          {/* Ana görsel */}
          <div style={{
            borderRadius: '28px',
            background: `linear-gradient(145deg, color-mix(in srgb, ${p.color} 8%, var(--cream-deep)) 0%, color-mix(in srgb, ${p.color} 20%, var(--cream)) 100%)`,
            aspectRatio: '1',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative', overflow: 'hidden',
            boxShadow: `0 32px 80px -12px ${p.color}30, 0 0 0 1px ${p.color}15`,
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'none' : 'translateY(20px)',
            transition: 'opacity .6s ease, transform .6s cubic-bezier(.16,.9,.2,1)',
          }}>
            {/* Halkalar */}
            {[75, 88].map((pct, i) => (
              <div key={i} style={{
                position: 'absolute',
                width: `${pct}%`, height: `${pct}%`,
                borderRadius: '50%',
                border: `1px solid ${p.color}${i === 0 ? '20' : '10'}`,
                animation: `spin-slow ${20 + i * 10}s linear infinite`,
              }} />
            ))}

            {/* Animasyonlu ikon */}
            <AnimatedIcon svgIcon={p.svgIcon} color={p.color} />

            {/* Badge */}
            {p.badge && (
              <div style={{
                position: 'absolute', top: '20px', left: '20px',
                background: p.color, color: '#fff',
                fontSize: '.68rem', fontWeight: 800, letterSpacing: '.12em',
                padding: '7px 16px', borderRadius: '40px',
                boxShadow: `0 4px 20px ${p.color}55`,
              }}>{p.badge.toUpperCase()}</div>
            )}

            {/* Stok uyarısı */}
            {p.stock < 30 && (
              <div style={{
                position: 'absolute', bottom: '16px', left: '16px', right: '16px',
                background: 'rgba(10,10,10,.82)',
                backdropFilter: 'blur(20px)',
                borderRadius: '14px', padding: '12px 18px',
                display: 'flex', alignItems: 'center', gap: '12px',
              }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff4a4a', flexShrink: 0, boxShadow: '0 0 10px #ff4a4a' }} />
                <div style={{ flex: 1 }}>
                  <div style={{ height: '3px', background: 'rgba(255,255,255,.12)', borderRadius: '2px', overflow: 'hidden', marginBottom: '6px' }}>
                    <div style={{ height: '100%', width: `${Math.min(p.stock * 3, 100)}%`, background: 'linear-gradient(90deg,#ff4a4a,#ff8800)', borderRadius: '2px' }} />
                  </div>
                  <span style={{ color: '#fff', fontSize: '.72rem', fontWeight: 600 }}>Stokta yalnızca {p.stock} adet kaldı</span>
                </div>
              </div>
            )}
          </div>

          {/* Sosyal kanıt */}
          <div style={{
            marginTop: '16px', padding: '16px 20px',
            background: 'var(--paper)', borderRadius: '18px',
            border: '1px solid var(--line)',
            display: 'flex', alignItems: 'center', gap: '16px',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'none' : 'translateY(10px)',
            transition: 'opacity .6s ease .15s, transform .6s cubic-bezier(.16,.9,.2,1) .15s',
          }}>
            <div style={{ display: 'flex' }}>
              {['#b5451b','#2a7a4b','#5b3a8c','#1a6e6e'].map((c, i) => (
                <div key={i} style={{
                  width: '32px', height: '32px', borderRadius: '50%',
                  background: c, border: '2.5px solid var(--cream)',
                  marginLeft: i > 0 ? '-10px' : 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontSize: '.6rem', fontWeight: 800,
                }}>
                  {['SB','EK','MY','AT'][i]}
                </div>
              ))}
            </div>
            <div>
              <div style={{ display: 'flex', gap: '2px', marginBottom: '3px' }}>
                {[1,2,3,4,5].map(i => <Star key={i} filled={i <= Math.round(avgRating)} />)}
              </div>
              <p style={{ fontSize: '.76rem', color: 'var(--ink-soft)', margin: 0 }}>
                <strong style={{ color: 'var(--ink)' }}>{47 + p.reviews.length} kişi</strong> satın aldı
              </p>
            </div>
            <div style={{ marginLeft: 'auto', textAlign: 'right' as const }}>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, fontFamily: 'var(--font-display)', color: 'var(--ink)' }}>{avgRating.toFixed(1)}</div>
              <div style={{ fontSize: '.65rem', color: 'var(--ink-faint)' }}>/ 5.0</div>
            </div>
          </div>

          {/* Güvence ikonları */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '10px', marginTop: '12px',
            opacity: mounted ? 1 : 0,
            transition: 'opacity .6s ease .25s',
          }}>
            {[
              { svg: <svg viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 5h14l-1 10H4L3 5z"/><path d="M7 5V3.5a3 3 0 016 0V5"/></svg>, t: 'Güvenli Ödeme', s: 'SSL + 3D Secure' },
              { svg: <svg viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h14M7 12l-3 5h12l-3-5"/><path d="M5 8V5a2 2 0 014 0v3M11 8V5a2 2 0 014 0v3"/></svg>, t: 'Ücretsiz Kargo', s: '₺200 üzeri' },
              { svg: <svg viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 2l2 4 4.5.7-3.2 3.2.7 4.6L10 12.5l-4 2 .7-4.6L3.5 6.7 8 6z"/></svg>, t: '14 Gün İade', s: 'Koşulsuz' },
            ].map((b, i) => (
              <div key={i} style={{
                background: 'var(--paper)', borderRadius: '14px',
                padding: '14px 10px', textAlign: 'center' as const,
                border: '1px solid var(--line)',
                color: p.color,
              }}>
                {b.svg}
                <p style={{ fontWeight: 700, fontSize: '.7rem', margin: '6px 0 2px', color: 'var(--ink)' }}>{b.t}</p>
                <p style={{ fontSize: '.65rem', color: 'var(--ink-faint)', margin: 0 }}>{b.s}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SAĞ: Bilgi */}
        <div style={{
          display: 'flex', flexDirection: 'column', gap: '24px',
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'none' : 'translateX(20px)',
          transition: 'opacity .6s ease .1s, transform .6s cubic-bezier(.16,.9,.2,1) .1s',
        }} className="pd-info-col">

          {/* Kategori + rating */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' as const }}>
            <span style={{
              background: `${p.color}15`, color: p.color,
              fontSize: '.65rem', fontWeight: 800, letterSpacing: '.14em',
              padding: '5px 14px', borderRadius: '40px',
            }}>{p.category.toUpperCase()}</span>
            {p.badge && (
              <span style={{
                background: p.color, color: '#fff',
                fontSize: '.65rem', fontWeight: 800, letterSpacing: '.1em',
                padding: '5px 14px', borderRadius: '40px',
              }}>{p.badge}</span>
            )}
            {p.reviews.length > 0 && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginLeft: 'auto' }}>
                {[1,2,3,4,5].map(i => <Star key={i} filled={i <= Math.round(avgRating)} />)}
                <span style={{ fontSize: '.76rem', color: 'var(--ink-soft)' }}>({p.reviews.length})</span>
              </div>
            )}
          </div>

          {/* İsim + açıklama */}
          <div>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              lineHeight: 1.05, margin: '0 0 14px', color: 'var(--ink)',
            }}>{p.name}</h1>
            <div style={{
              padding: '14px 18px',
              borderLeft: `3px solid ${p.color}`,
              background: `${p.color}08`,
              borderRadius: '0 12px 12px 0',
            }}>
              <p style={{ color: 'var(--ink-soft)', lineHeight: 1.75, fontSize: '.95rem', margin: 0 }}>{p.description}</p>
            </div>
          </div>

          {/* Fiyat */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '14px' }}>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 3.5vw, 2.6rem)',
              fontWeight: 800, color: 'var(--ink)',
            }}>{p.priceDisplay}</span>
            <span style={{
              fontSize: '.78rem', color: '#2a7a4b', fontWeight: 700,
              display: 'flex', alignItems: 'center', gap: '4px',
              background: '#2a7a4b15', padding: '4px 10px', borderRadius: '20px',
            }}>
              <svg viewBox="0 0 12 12" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M1 6l3.5 3.5L11 2"/></svg>
              Stokta
            </span>
          </div>

          {/* Renk seçici */}
          <div>
            <p style={{ fontSize: '.72rem', fontWeight: 800, letterSpacing: '.12em', color: 'var(--ink-faint)', margin: '0 0 12px' }}>
              RENK — <span style={{ fontWeight: 500, letterSpacing: 0, textTransform: 'none', color: 'var(--ink-soft)' }}>{variants[selectedVariant].label}</span>
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {variants.map((v, i) => (
                <button key={i} onClick={() => setSelectedVariant(i)} type="button" style={{
                  width: '36px', height: '36px', borderRadius: '50%',
                  background: v.color, border: 'none', cursor: 'pointer',
                  outline: selectedVariant === i ? `3px solid ${v.color}` : '3px solid transparent',
                  outlineOffset: '4px',
                  boxShadow: `0 3px 10px ${v.color}50`,
                  transition: 'transform .2s, outline .2s',
                  transform: selectedVariant === i ? 'scale(1.15)' : 'scale(1)',
                }} />
              ))}
            </div>
          </div>

          {/* Beden seçici */}
          {p.category === 'Giyim' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <p style={{ fontSize: '.72rem', fontWeight: 800, letterSpacing: '.12em', color: 'var(--ink-faint)', margin: 0 }}>BEDEN</p>
                <a href="#" style={{ fontSize: '.75rem', color: p.color, textDecoration: 'none', fontWeight: 600 }}>Beden tablosu →</a>
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' as const }}>
                {['XS', 'S', 'M', 'L', 'XL', '2XL'].map(s => (
                  <button key={s} onClick={() => setSelectedSize(s)} type="button" style={{
                    padding: '9px 18px', borderRadius: '10px', cursor: 'pointer',
                    fontFamily: 'var(--font-body)', fontSize: '.85rem', fontWeight: 700,
                    background: selectedSize === s ? 'var(--ink)' : 'var(--paper)',
                    color: selectedSize === s ? '#fff' : 'var(--ink)',
                    border: `1.5px solid ${selectedSize === s ? 'var(--ink)' : 'var(--line)'}`,
                    transition: 'all .15s',
                  }}>{s}</button>
                ))}
              </div>
            </div>
          )}

          {/* Adet + Sepet */}
          <QtySelector product={p} />

          {/* Kargo bilgisi */}
          <div style={{
            display: 'flex', gap: '12px', alignItems: 'center',
            padding: '14px 18px', background: 'var(--paper)',
            borderRadius: '14px', border: '1px solid var(--line)',
          }}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke={p.color} strokeWidth="1.8" style={{ flexShrink: 0 }}>
              <path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3"/>
              <rect x="9" y="11" width="14" height="10" rx="2"/>
              <circle cx="12" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
            </svg>
            <p style={{ fontSize: '.82rem', color: 'var(--ink-soft)', margin: 0, lineHeight: 1.6 }}>
              Bugün sipariş ver, <strong style={{ color: p.color }}>Çarşamba–Perşembe</strong> teslim al · 2–4 iş günü
            </p>
          </div>

          {/* TABS */}
          <div style={{ borderTop: '1px solid var(--line)', paddingTop: '28px' }}>
            <div style={{ display: 'flex', borderBottom: '1px solid var(--line)', marginBottom: '24px', overflowX: 'auto' as const }}>
              {([
                ['aciklama', 'Açıklama'],
                ['ozellikler', 'Özellikler'],
                ['yorumlar', `Yorumlar (${p.reviews.length})`],
                ['sss', 'SSS'],
              ] as const).map(([key, label]) => (
                <button key={key} onClick={() => setActiveTab(key as typeof activeTab)} type="button" style={{
                  padding: '10px 18px', background: 'none', border: 'none',
                  borderBottom: `2.5px solid ${activeTab === key ? p.color : 'transparent'}`,
                  cursor: 'pointer', fontWeight: activeTab === key ? 700 : 400,
                  color: activeTab === key ? 'var(--ink)' : 'var(--ink-faint)',
                  fontSize: '.82rem', whiteSpace: 'nowrap' as const, transition: 'all .2s',
                  fontFamily: 'var(--font-body)',
                }}>{label}</button>
              ))}
            </div>

            {activeTab === 'aciklama' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p style={{ color: 'var(--ink-soft)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>{p.longDescription}</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  {p.details.map((d, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '.84rem', color: 'var(--ink-soft)' }}>
                      <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: `${p.color}15`, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg viewBox="0 0 10 10" width="8" height="8" fill="none" stroke={p.color} strokeWidth="2.5" strokeLinecap="round"><path d="M1.5 5l2.5 2.5 5-5"/></svg>
                      </div>
                      {d}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'ozellikler' && (
              <div>
                {p.specs.map((s, i) => (
                  <div key={i} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '13px 0',
                    borderBottom: i < p.specs.length - 1 ? '1px solid var(--line)' : 'none',
                  }}>
                    <span style={{ fontSize: '.84rem', color: 'var(--ink-faint)', fontWeight: 600 }}>{s.label}</span>
                    <span style={{ fontSize: '.84rem', color: 'var(--ink)', fontWeight: 500 }}>{s.value}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'yorumlar' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {p.reviews.length === 0 && (
                  <p style={{ color: 'var(--ink-faint)', textAlign: 'center' as const, padding: '40px 0' }}>Henüz yorum yok.</p>
                )}
                {p.reviews.length > 0 && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '18px 20px', background: 'var(--paper)', borderRadius: '16px', border: '1px solid var(--line)', marginBottom: '8px' }}>
                    <div style={{ textAlign: 'center' as const }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 800, color: 'var(--ink)', lineHeight: 1 }}>{avgRating.toFixed(1)}</div>
                      <div style={{ display: 'flex', gap: '2px', justifyContent: 'center', margin: '4px 0' }}>
                        {[1,2,3,4,5].map(i => <Star key={i} filled={i <= Math.round(avgRating)} />)}
                      </div>
                      <div style={{ fontSize: '.7rem', color: 'var(--ink-faint)' }}>{p.reviews.length} yorum</div>
                    </div>
                    <div style={{ flex: 1 }}>
                      {[5,4,3,2,1].map(n => {
                        const count = p.reviews.filter(r => r.rating === n).length;
                        return (
                          <div key={n} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                            <span style={{ fontSize: '.68rem', color: 'var(--ink-faint)', width: '8px' }}>{n}</span>
                            <div style={{ flex: 1, height: '5px', background: 'var(--cream-deep)', borderRadius: '3px', overflow: 'hidden' }}>
                              <div style={{ height: '100%', width: `${p.reviews.length ? (count/p.reviews.length)*100 : 0}%`, background: p.color, borderRadius: '3px', transition: 'width 1s ease' }} />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
                {p.reviews.map((r, i) => (
                  <div key={i} style={{ padding: '18px', background: 'var(--paper)', borderRadius: '16px', border: '1px solid var(--line)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: p.color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '.85rem', flexShrink: 0 }}>{r.name[0]}</div>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '.85rem', color: 'var(--ink)' }}>{r.name}</div>
                          <div style={{ display: 'flex', gap: '2px', marginTop: '2px' }}>{[1,2,3,4,5].map(i => <Star key={i} filled={i <= r.rating} />)}</div>
                        </div>
                      </div>
                      <span style={{ fontSize: '.7rem', color: 'var(--ink-faint)' }}>{r.date}</span>
                    </div>
                    <p style={{ margin: 0, fontSize: '.88rem', color: 'var(--ink-soft)', lineHeight: 1.65 }}>{r.comment}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'sss' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {p.faq.map((f, i) => (
                  <div key={i} style={{ border: '1px solid var(--line)', borderRadius: '14px', overflow: 'hidden' }}>
                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)} type="button" style={{
                      width: '100%', padding: '14px 18px',
                      background: openFaq === i ? `${p.color}08` : 'var(--paper)',
                      border: 'none', cursor: 'pointer',
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      textAlign: 'left' as const, gap: '12px', fontFamily: 'var(--font-body)',
                    }}>
                      <span style={{ fontWeight: 600, fontSize: '.88rem', color: 'var(--ink)' }}>{f.q}</span>
                      <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke={p.color} strokeWidth="2"
                        style={{ flexShrink: 0, transform: openFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }}>
                        <path d="M3 6l5 5 5-5"/>
                      </svg>
                    </button>
                    {openFaq === i && (
                      <div style={{ padding: '0 18px 16px', background: `${p.color}05` }}>
                        <p style={{ margin: 0, fontSize: '.86rem', color: 'var(--ink-soft)', lineHeight: 1.7 }}>{f.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* İLGİLİ ÜRÜNLER */}
      <div style={{ background: 'var(--ink)', padding: '60px var(--pad)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem,3vw,1.9rem)', color: 'var(--cream-fixed)', margin: 0 }}>
              Bunları da beğenebilirsin
            </h2>
            <a href="/urunler" style={{ color: p.color, textDecoration: 'none', fontSize: '.82rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
              Tümünü gör
              <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: '14px' }}>
            {related.map(r => (
              <a key={r.id} href={`/urunler/${r.slug}`} style={{
                background: 'rgba(255,255,255,.05)',
                border: '1px solid rgba(255,255,255,.08)',
                borderRadius: '18px', overflow: 'hidden',
                textDecoration: 'none', display: 'flex', flexDirection: 'column',
                transition: 'all .25s',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,.1)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,.05)'; (e.currentTarget as HTMLElement).style.transform = ''; }}
              >
                <div style={{ background: `${r.color}20`, padding: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', aspectRatio: '1' }}>
                  <span style={{ color: r.color, width: '64px', height: '64px', display: 'block', filter: `drop-shadow(0 4px 16px ${r.color}50)` }}
                    dangerouslySetInnerHTML={{ __html: r.svgIcon }} />
                </div>
                <div style={{ padding: '14px 16px 18px' }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '.92rem', margin: '0 0 4px', color: 'var(--cream-fixed)' }}>{r.name}</p>
                  <p style={{ color: r.accentColor, fontWeight: 700, fontSize: '.88rem', margin: 0 }}>{r.priceDisplay}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media (max-width: 768px) {
          .pd-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
          .pd-img-col { position: static !important; top: auto !important; }
        }
      `}</style>
    </main>
  );
}
