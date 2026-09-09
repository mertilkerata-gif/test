'use client';
import { useState } from 'react';
import type { Product } from '@/lib/products';
import QtySelector from './QtySelector';

const Star = ({ filled, half }: { filled: boolean; half?: boolean }) => (
  <svg viewBox="0 0 16 16" width="14" height="14">
    <defs>
      <linearGradient id="half-grad">
        <stop offset="50%" stopColor="#f39c12" />
        <stop offset="50%" stopColor="none" />
      </linearGradient>
    </defs>
    <path
      d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z"
      fill={filled ? '#f39c12' : half ? 'url(#half-grad)' : 'none'}
      stroke="#f39c12" strokeWidth="1"
    />
  </svg>
);

export default function ProductDetailClient({ product: p, related }: { product: Product; related: Product[] }) {
  const [activeTab, setActiveTab] = useState<'aciklama' | 'ozellikler' | 'yorumlar' | 'sss'>('aciklama');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [selectedSize, setSelectedSize] = useState('M');

  const avgRating = p.reviews.length
    ? p.reviews.reduce((s, r) => s + r.rating, 0) / p.reviews.length
    : 5;

  const variants = [
    { label: 'Mavi', color: p.color },
    { label: 'Yeşil', color: '#27ae60' },
  ];

  return (
    <main style={{ background: 'var(--cream)', minHeight: '100vh', paddingTop: '72px' }}>

      {/* ── BREADCRUMB ── */}
      <div style={{ background: 'var(--ink)', padding: '12px var(--pad)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '8px', alignItems: 'center', fontSize: '.78rem' }}>
          <a href="/" style={{ color: 'rgba(243,238,225,.5)', textDecoration: 'none' }}>Ana Sayfa</a>
          <span style={{ color: 'rgba(243,238,225,.25)' }}>/</span>
          <a href="/urunler" style={{ color: 'rgba(243,238,225,.5)', textDecoration: 'none' }}>Mağaza</a>
          <span style={{ color: 'rgba(243,238,225,.25)' }}>/</span>
          <span style={{ color: 'var(--cream-fixed)', fontWeight: 600 }}>{p.name}</span>
        </div>
      </div>

      {/* ── ANA GRID ── */}
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        padding: '48px var(--pad) 80px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '72px',
        alignItems: 'start',
      }} className="pd-grid">

        {/* ─── SOL: Görsel ─── */}
        <div style={{ position: 'sticky', top: '88px' }} className="pd-img-col">

          {/* Ana görsel */}
          <div style={{
            borderRadius: '24px',
            background: `linear-gradient(135deg, color-mix(in srgb, ${p.color} 8%, var(--cream-deep)) 0%, color-mix(in srgb, ${p.color} 18%, var(--cream)) 100%)`,
            aspectRatio: '1',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative', overflow: 'hidden',
            boxShadow: `0 24px 60px -8px color-mix(in srgb, ${p.color} 25%, transparent)`,
          }}>
            {/* Dekoratif halkalar */}
            {[72, 85].map((pct, i) => (
              <div key={i} style={{
                position: 'absolute',
                width: `${pct}%`, height: `${pct}%`,
                borderRadius: '50%',
                border: `1px solid ${p.color}${i === 0 ? '22' : '12'}`,
              }} />
            ))}

            {/* İkon */}
            <div style={{
              width: '52%', height: '52%',
              color: p.color,
              filter: `drop-shadow(0 8px 24px ${p.color}50)`,
              position: 'relative', zIndex: 1,
            }} dangerouslySetInnerHTML={{ __html: p.svgIcon }} />

            {/* Badge */}
            {p.badge && (
              <div style={{
                position: 'absolute', top: '20px', left: '20px',
                background: p.color, color: '#fff',
                fontSize: '.68rem', fontWeight: 800, letterSpacing: '.12em',
                padding: '6px 14px', borderRadius: '40px',
                boxShadow: `0 4px 16px ${p.color}60`,
              }}>{p.badge.toUpperCase()}</div>
            )}

            {/* Stok uyarısı */}
            {p.stock < 30 && (
              <div style={{
                position: 'absolute', bottom: '16px', left: '16px', right: '16px',
                background: 'rgba(0,0,0,.78)',
                backdropFilter: 'blur(16px)',
                borderRadius: '12px', padding: '10px 16px',
                display: 'flex', alignItems: 'center', gap: '10px',
              }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff4444', flexShrink: 0, boxShadow: '0 0 8px #ff4444' }} />
                <div style={{ flex: 1 }}>
                  <div style={{ height: '3px', background: 'rgba(255,255,255,.15)', borderRadius: '2px', overflow: 'hidden', marginBottom: '5px' }}>
                    <div style={{ height: '100%', width: `${Math.min(p.stock * 3, 100)}%`, background: 'linear-gradient(90deg,#ff4444,#ff8800)', borderRadius: '2px' }} />
                  </div>
                  <span style={{ color: '#fff', fontSize: '.72rem', fontWeight: 600 }}>Stokta yalnızca {p.stock} adet kaldı!</span>
                </div>
              </div>
            )}
          </div>

          {/* Sosyal kanıt */}
          <div style={{
            marginTop: '20px', padding: '16px 20px',
            background: 'var(--paper)', borderRadius: '16px',
            border: '1px solid var(--line)',
            display: 'flex', alignItems: 'center', gap: '14px',
          }}>
            <div style={{ display: 'flex' }}>
              {[p.color, '#27ae60', '#6c3483', '#16a085'].map((c, i) => (
                <div key={i} style={{
                  width: '30px', height: '30px', borderRadius: '50%',
                  background: c, border: '2px solid var(--cream)',
                  marginLeft: i > 0 ? '-9px' : 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontSize: '.62rem', fontWeight: 700,
                }}>
                  {['SB', 'EK', 'MY', 'AT'][i]}
                </div>
              ))}
            </div>
            <div>
              <div style={{ display: 'flex', gap: '2px', marginBottom: '2px' }}>
                {[1,2,3,4,5].map(i => <Star key={i} filled={i <= Math.round(avgRating)} />)}
              </div>
              <p style={{ fontSize: '.78rem', color: 'var(--ink-soft)', margin: 0 }}>
                <strong style={{ color: 'var(--ink)' }}>{47 + p.reviews.length} kişi</strong> satın aldı
              </p>
            </div>
          </div>
        </div>

        {/* ─── SAĞ: Bilgi ─── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }} className="pd-info-col">

          {/* Badges + rating */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{
              background: `${p.color}18`, color: p.color,
              fontSize: '.68rem', fontWeight: 700, letterSpacing: '.12em',
              padding: '4px 12px', borderRadius: '40px',
            }}>{p.category.toUpperCase()}</span>
            {p.badge && (
              <span style={{
                background: p.color, color: '#fff',
                fontSize: '.68rem', fontWeight: 700, letterSpacing: '.1em',
                padding: '4px 12px', borderRadius: '40px',
              }}>{p.badge}</span>
            )}
            {p.reviews.length > 0 && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginLeft: 'auto' }}>
                <div style={{ display: 'flex', gap: '1px' }}>
                  {[1,2,3,4,5].map(i => <Star key={i} filled={i <= Math.round(avgRating)} />)}
                </div>
                <span style={{ fontSize: '.78rem', color: 'var(--ink-soft)' }}>({p.reviews.length})</span>
              </div>
            )}
          </div>

          {/* İsim */}
          <div>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              lineHeight: 1.05, margin: '0 0 10px', color: 'var(--ink)',
            }}>{p.name}</h1>
            <p style={{
              color: 'var(--ink-soft)', lineHeight: 1.7, fontSize: '1rem', margin: 0,
              paddingLeft: '14px',
              borderLeft: `3px solid ${p.color}`,
            }}>{p.description}</p>
          </div>

          {/* Fiyat */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
              fontWeight: 800, color: 'var(--ink)',
            }}>{p.priceDisplay}</span>
            <span style={{ fontSize: '.78rem', color: 'var(--green)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '3px' }}>
              <svg viewBox="0 0 12 12" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M1 6l3.5 3.5L11 2"/></svg>
              Stokta
            </span>
          </div>

          {/* Renk seçici */}
          <div>
            <p style={{ fontSize: '.75rem', fontWeight: 700, letterSpacing: '.1em', color: 'var(--ink-faint)', margin: '0 0 10px' }}>
              RENK — <span style={{ fontWeight: 400, letterSpacing: 0, textTransform: 'none' }}>{variants[selectedVariant].label}</span>
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              {variants.map((v, i) => (
                <button key={i} onClick={() => setSelectedVariant(i)} style={{
                  width: '32px', height: '32px', borderRadius: '50%',
                  background: v.color, border: 'none', cursor: 'pointer',
                  outline: selectedVariant === i ? `3px solid ${v.color}` : '3px solid transparent',
                  outlineOffset: '3px',
                  boxShadow: '0 2px 8px rgba(0,0,0,.15)',
                  transition: 'outline .2s, transform .2s',
                  transform: selectedVariant === i ? 'scale(1.1)' : 'scale(1)',
                }} />
              ))}
            </div>
          </div>

          {/* Beden seçici (giyim) */}
          {p.category === 'Giyim' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <p style={{ fontSize: '.75rem', fontWeight: 700, letterSpacing: '.1em', color: 'var(--ink-faint)', margin: 0 }}>BEDEN</p>
                <a href="#" style={{ fontSize: '.75rem', color: p.color, textDecoration: 'none' }}>Beden tablosu →</a>
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {['XS', 'S', 'M', 'L', 'XL', '2XL'].map(s => (
                  <button key={s} onClick={() => setSelectedSize(s)} style={{
                    padding: '9px 16px', borderRadius: '10px', cursor: 'pointer',
                    fontFamily: 'var(--font-body)', fontSize: '.85rem', fontWeight: 600,
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

          {/* Güvence */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '10px' }}>
            {[
              { icon: '🚚', t: 'Ücretsiz Kargo', s: '₺200 üzeri' },
              { icon: '↩️', t: '14 Gün İade', s: 'Koşulsuz' },
              { icon: '🔒', t: 'Güvenli Ödeme', s: 'SSL + 3D' },
            ].map(b => (
              <div key={b.t} style={{
                background: 'var(--paper)', borderRadius: '14px',
                padding: '14px 10px', textAlign: 'center',
                border: '1px solid var(--line)',
              }}>
                <div style={{ fontSize: '1.3rem', marginBottom: '4px' }}>{b.icon}</div>
                <p style={{ fontWeight: 700, fontSize: '.72rem', margin: '0 0 2px', color: 'var(--ink)' }}>{b.t}</p>
                <p style={{ fontSize: '.68rem', color: 'var(--ink-faint)', margin: 0 }}>{b.s}</p>
              </div>
            ))}
          </div>

          {/* Kargo tahmini */}
          <div style={{
            display: 'flex', gap: '12px', alignItems: 'flex-start',
            padding: '14px 18px', background: 'var(--paper)',
            borderRadius: '14px', border: '1px solid var(--line)',
          }}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke={p.color} strokeWidth="1.8" style={{ flexShrink: 0, marginTop: '1px' }}>
              <path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3"/><rect x="9" y="11" width="14" height="10" rx="2"/>
              <circle cx="12" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
            </svg>
            <p style={{ fontSize: '.82rem', color: 'var(--ink-soft)', margin: 0, lineHeight: 1.6 }}>
              Bugün sipariş ver, <strong style={{ color: p.color }}>Çarşamba–Perşembe</strong> teslim al · 2–4 iş günü
            </p>
          </div>

          {/* ── TABS ── */}
          <div style={{ borderTop: '1px solid var(--line)', paddingTop: '28px' }}>
            {/* Tab başlıkları */}
            <div style={{ display: 'flex', gap: 0, borderBottom: '1px solid var(--line)', marginBottom: '24px', overflowX: 'auto' }}>
              {([
                ['aciklama', 'Açıklama'],
                ['ozellikler', 'Özellikler'],
                ['yorumlar', `Yorumlar (${p.reviews.length})`],
                ['sss', 'SSS'],
              ] as const).map(([key, label]) => (
                <button key={key} onClick={() => setActiveTab(key as typeof activeTab)} style={{
                  padding: '10px 16px', background: 'none', border: 'none',
                  borderBottom: `2px solid ${activeTab === key ? p.color : 'transparent'}`,
                  cursor: 'pointer', fontWeight: activeTab === key ? 700 : 400,
                  color: activeTab === key ? 'var(--ink)' : 'var(--ink-faint)',
                  fontSize: '.82rem', whiteSpace: 'nowrap', transition: 'all .2s',
                  fontFamily: 'var(--font-body)',
                }}>{label}</button>
              ))}
            </div>

            {/* Açıklama */}
            {activeTab === 'aciklama' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p style={{ color: 'var(--ink-soft)', lineHeight: 1.8, fontSize: '.95rem', margin: 0 }}>{p.longDescription}</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  {p.details.map((d, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '.85rem', color: 'var(--ink-soft)' }}>
                      <div style={{
                        width: '18px', height: '18px', borderRadius: '50%',
                        background: `${p.color}18`, flexShrink: 0,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <svg viewBox="0 0 10 10" width="8" height="8" fill="none" stroke={p.color} strokeWidth="2.5" strokeLinecap="round"><path d="M1.5 5l2.5 2.5 5-5"/></svg>
                      </div>
                      {d}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Özellikler */}
            {activeTab === 'ozellikler' && (
              <div>
                {p.specs.map((s, i) => (
                  <div key={i} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '12px 0',
                    borderBottom: i < p.specs.length - 1 ? '1px solid var(--line)' : 'none',
                  }}>
                    <span style={{ fontSize: '.85rem', color: 'var(--ink-faint)', fontWeight: 600 }}>{s.label}</span>
                    <span style={{ fontSize: '.85rem', color: 'var(--ink)' }}>{s.value}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Yorumlar */}
            {activeTab === 'yorumlar' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {p.reviews.length === 0 && (
                  <p style={{ color: 'var(--ink-faint)', textAlign: 'center', padding: '32px 0' }}>
                    Henüz yorum yok.
                  </p>
                )}
                {p.reviews.length > 0 && (
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '20px',
                    padding: '16px 20px', background: 'var(--paper)',
                    borderRadius: '14px', border: '1px solid var(--line)', marginBottom: '8px',
                  }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.8rem', fontWeight: 800, color: 'var(--ink)', lineHeight: 1 }}>
                        {avgRating.toFixed(1)}
                      </div>
                      <div style={{ display: 'flex', gap: '2px', justifyContent: 'center', margin: '4px 0' }}>
                        {[1,2,3,4,5].map(i => <Star key={i} filled={i <= Math.round(avgRating)} />)}
                      </div>
                      <div style={{ fontSize: '.72rem', color: 'var(--ink-faint)' }}>{p.reviews.length} yorum</div>
                    </div>
                    <div style={{ flex: 1 }}>
                      {[5,4,3,2,1].map(n => {
                        const count = p.reviews.filter(r => r.rating === n).length;
                        return (
                          <div key={n} style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px' }}>
                            <span style={{ fontSize: '.7rem', color: 'var(--ink-faint)', width: '8px' }}>{n}</span>
                            <div style={{ flex: 1, height: '4px', background: 'var(--cream-deep)', borderRadius: '2px', overflow: 'hidden' }}>
                              <div style={{ height: '100%', width: `${p.reviews.length ? (count/p.reviews.length)*100 : 0}%`, background: p.color, borderRadius: '2px' }} />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
                {p.reviews.map((r, i) => (
                  <div key={i} style={{ padding: '16px', background: 'var(--paper)', borderRadius: '14px', border: '1px solid var(--line)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{
                          width: '34px', height: '34px', borderRadius: '50%',
                          background: p.color, color: '#fff',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontWeight: 700, fontSize: '.85rem', flexShrink: 0,
                        }}>{r.name[0]}</div>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '.85rem', color: 'var(--ink)' }}>{r.name}</div>
                          <div style={{ display: 'flex', gap: '2px' }}>
                            {[1,2,3,4,5].map(i => <Star key={i} filled={i <= r.rating} />)}
                          </div>
                        </div>
                      </div>
                      <span style={{ fontSize: '.72rem', color: 'var(--ink-faint)' }}>{r.date}</span>
                    </div>
                    <p style={{ margin: 0, fontSize: '.88rem', color: 'var(--ink-soft)', lineHeight: 1.6 }}>{r.comment}</p>
                  </div>
                ))}
              </div>
            )}

            {/* SSS */}
            {activeTab === 'sss' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {p.faq.map((f, i) => (
                  <div key={i} style={{ border: '1px solid var(--line)', borderRadius: '14px', overflow: 'hidden' }}>
                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{
                      width: '100%', padding: '14px 18px',
                      background: openFaq === i ? `${p.color}08` : 'var(--paper)',
                      border: 'none', cursor: 'pointer',
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      textAlign: 'left', gap: '12px', fontFamily: 'var(--font-body)',
                    }}>
                      <span style={{ fontWeight: 600, fontSize: '.88rem', color: 'var(--ink)' }}>{f.q}</span>
                      <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke={p.color} strokeWidth="2"
                        style={{ flexShrink: 0, transform: openFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }}>
                        <path d="M3 6l5 5 5-5"/>
                      </svg>
                    </button>
                    {openFaq === i && (
                      <div style={{ padding: '0 18px 14px', background: `${p.color}06` }}>
                        <p style={{ margin: 0, fontSize: '.85rem', color: 'var(--ink-soft)', lineHeight: 1.7 }}>{f.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── İLGİLİ ÜRÜNLER ── */}
      <div style={{ background: 'var(--ink)', padding: '56px var(--pad)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem,3vw,1.8rem)', color: 'var(--cream-fixed)', margin: 0 }}>
              Bunları da beğenebilirsin
            </h2>
            <a href="/urunler" style={{ color: p.color, textDecoration: 'none', fontSize: '.82rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
              Tümü
              <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: '14px' }}>
            {related.map(r => (
              <a key={r.id} href={`/urunler/${r.slug}`} style={{
                background: 'rgba(255,255,255,.06)',
                border: '1px solid rgba(255,255,255,.08)',
                borderRadius: '16px', overflow: 'hidden',
                textDecoration: 'none', display: 'flex', flexDirection: 'column',
                transition: 'background .2s, transform .25s',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,.1)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,.06)'; (e.currentTarget as HTMLElement).style.transform = ''; }}
              >
                <div style={{ background: `${r.color}15`, padding: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', aspectRatio: '1' }}>
                  <span style={{ color: r.color, width: '64px', height: '64px', display: 'block', filter: `drop-shadow(0 4px 12px ${r.color}40)` }}
                    dangerouslySetInnerHTML={{ __html: r.svgIcon }} />
                </div>
                <div style={{ padding: '14px 16px 18px' }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '.9rem', margin: '0 0 4px', color: 'var(--cream-fixed)' }}>{r.name}</p>
                  <p style={{ color: r.color, fontWeight: 700, fontSize: '.88rem', margin: 0 }}>{r.priceDisplay}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .pd-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
          .pd-img-col { position: static !important; top: auto !important; }
        }
      `}</style>
    </main>
  );
}
