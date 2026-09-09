'use client';
import { useState } from 'react';
import type { Product } from '@/lib/products';
import QtySelector from './QtySelector';

const Star = ({ filled }: { filled: boolean }) => (
  <svg viewBox="0 0 16 16" width="14" height="14" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5">
    <path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z" />
  </svg>
);

const RatingStars = ({ rating }: { rating: number }) => (
  <div style={{ display: 'flex', gap: '2px', color: '#f39c12' }}>
    {[1, 2, 3, 4, 5].map(i => <Star key={i} filled={i <= rating} />)}
  </div>
);

export default function ProductDetailClient({ product: p, related }: { product: Product; related: Product[] }) {
  const [activeImg, setActiveImg] = useState(0);
  const [activeTab, setActiveTab] = useState<'aciklama' | 'ozellikler' | 'yorumlar' | 'sss'>('aciklama');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState(0);

  const avgRating = p.reviews.length ? Math.round(p.reviews.reduce((s, r) => s + r.rating, 0) / p.reviews.length) : 5;
  const colors = ['Mavi', 'Yeşil'];

  return (
    <main style={{ background: 'var(--cream)', minHeight: '100vh' }}>

      {/* ── BREADCRUMB ── */}
      <div style={{ background: 'var(--ink)', padding: '10px var(--pad)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '8px', alignItems: 'center', fontSize: '.78rem' }}>
          <a href="/" style={{ color: 'rgba(243,238,225,.5)', textDecoration: 'none' }}>Ana Sayfa</a>
          <span style={{ color: 'rgba(243,238,225,.3)' }}>/</span>
          <a href="/urunler" style={{ color: 'rgba(243,238,225,.5)', textDecoration: 'none' }}>Mağaza</a>
          <span style={{ color: 'rgba(243,238,225,.3)' }}>/</span>
          <span style={{ color: 'var(--cream-fixed)' }}>{p.name}</span>
        </div>
      </div>

      {/* ── ANA BÖLÜM ── */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px var(--pad)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}
        className="pd-grid">

        {/* ── SOL: Görsel Galerisi ── */}
        <div style={{ position: 'sticky', top: '24px' }} className="pd-img-col">

          {/* Ana Görsel */}
          <div style={{
            position: 'relative', borderRadius: '28px', overflow: 'hidden',
            background: `linear-gradient(145deg, color-mix(in srgb, ${p.color} 6%, #f5f0e8) 0%, color-mix(in srgb, ${p.color} 14%, #ede8da) 100%)`,
            aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: `0 32px 80px color-mix(in srgb, ${p.color} 20%, transparent)`,
          }}>
            {/* Dekoratif halkalar */}
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
              <div style={{ width: '75%', height: '75%', borderRadius: '50%', border: `1px solid ${p.color}20` }} />
            </div>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
              <div style={{ width: '88%', height: '88%', borderRadius: '50%', border: `1px solid ${p.color}12` }} />
            </div>

            {/* Ana ikon */}
            <div style={{ position: 'relative', zIndex: 1, color: p.color, width: '240px', height: '240px', filter: `drop-shadow(0 12px 32px ${p.color}40)` }}
              dangerouslySetInnerHTML={{ __html: p.svgIcon }} />

            {/* Badge */}
            {p.badge && (
              <div style={{ position: 'absolute', top: '20px', left: '20px', background: p.color, color: '#fff', fontSize: '.7rem', fontWeight: 800, letterSpacing: '.12em', padding: '6px 14px', borderRadius: '40px', boxShadow: '0 4px 16px rgba(0,0,0,.2)' }}>
                {p.badge.toUpperCase()}
              </div>
            )}

            {/* Stok aciliyet */}
            {p.stock < 30 && (
              <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px', background: 'rgba(0,0,0,.75)', backdropFilter: 'blur(12px)', borderRadius: '12px', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff4444', flexShrink: 0, boxShadow: '0 0 8px #ff4444' }} />
                <div style={{ flex: 1 }}>
                  <div style={{ height: '4px', background: 'rgba(255,255,255,.15)', borderRadius: '2px', overflow: 'hidden', marginBottom: '4px' }}>
                    <div style={{ height: '100%', width: `${Math.min(p.stock * 3, 100)}%`, background: 'linear-gradient(90deg, #ff4444, #ff9944)', borderRadius: '2px' }} />
                  </div>
                  <span style={{ color: '#fff', fontSize: '.72rem', fontWeight: 600 }}>Stokta yalnızca {p.stock} adet kaldı!</span>
                </div>
              </div>
            )}
          </div>

          {/* Thumbnail'ler */}
          {p.images.length > 0 && (
            <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
              {[...p.images, 'main'].map((img, i) => (
                <button key={i} onClick={() => setActiveImg(i)} style={{
                  width: '72px', height: '72px', borderRadius: '14px', overflow: 'hidden',
                  border: `2px solid ${activeImg === i ? p.color : 'var(--line)'}`,
                  background: activeImg === i ? `${p.color}18` : 'var(--cream-deep)',
                  cursor: 'pointer', padding: '8px', transition: 'border-color .2s',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {img === 'main'
                    ? <span style={{ color: p.color, width: '40px', height: '40px', display: 'block' }} dangerouslySetInnerHTML={{ __html: p.svgIcon }} />
                    : <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px', mixBlendMode: 'multiply' }} />
                  }
                </button>
              ))}
            </div>
          )}

          {/* Sosyal kanıt */}
          <div style={{ marginTop: '20px', background: 'var(--paper)', borderRadius: '16px', padding: '16px 20px', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ display: 'flex' }}>
              {['#c0392b', '#27ae60', '#6c3483', '#16a085'].map((c, i) => (
                <div key={i} style={{ width: '30px', height: '30px', borderRadius: '50%', background: c, border: '2px solid var(--cream)', marginLeft: i > 0 ? '-9px' : 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '.65rem', fontWeight: 700 }}>
                  {['SB', 'EK', 'MY', 'AT'][i]}
                </div>
              ))}
            </div>
            <div>
              <div style={{ display: 'flex', gap: '4px', marginBottom: '2px', color: '#f39c12' }}>
                {[1,2,3,4,5].map(i => <Star key={i} filled={true} />)}
              </div>
              <p style={{ fontSize: '.78rem', color: 'var(--ink-soft)', margin: 0 }}>
                <strong style={{ color: 'var(--ink)' }}>{47 + p.reviews.length} kişi</strong> satın aldı
              </p>
            </div>
          </div>
        </div>

        {/* ── SAĞ: Ürün Bilgisi ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }} className="pd-info-col">

          {/* Kategori + badge + rating */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
              <span style={{ background: `${p.color}18`, color: p.color, fontSize: '.7rem', fontWeight: 700, letterSpacing: '.12em', padding: '4px 12px', borderRadius: '40px' }}>
                {p.category.toUpperCase()}
              </span>
              {p.badge && (
                <span style={{ background: `${p.color}`, color: '#fff', fontSize: '.7rem', fontWeight: 700, letterSpacing: '.1em', padding: '4px 12px', borderRadius: '40px' }}>
                  {p.badge}
                </span>
              )}
              {p.reviews.length > 0 && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <RatingStars rating={avgRating} />
                  <span style={{ fontSize: '.78rem', color: 'var(--ink-soft)' }}>({p.reviews.length} yorum)</span>
                </div>
              )}
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.05, margin: '0 0 12px', color: 'var(--ink)' }}>
              {p.name}
            </h1>
            <p style={{ color: 'var(--ink-soft)', lineHeight: 1.7, fontSize: '1rem', margin: 0, borderLeft: `3px solid ${p.color}`, paddingLeft: '14px' }}>
              {p.description}
            </p>
          </div>

          {/* Fiyat */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 2.6rem)', fontWeight: 800, color: 'var(--ink)' }}>
              {p.priceDisplay}
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ fontSize: '.75rem', color: 'var(--green)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                <svg viewBox="0 0 12 12" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 6l3.5 3.5L11 2"/></svg>
                Stokta mevcut
              </span>
              <span style={{ fontSize: '.72rem', color: 'var(--ink-faint)' }}>KDV dahil · Ücretsiz kargo</span>
            </div>
          </div>

          {/* Renk / varyant seçici (varsa) */}
          {(p.category === 'Mutfak' || p.category === 'Giyim') && (
            <div>
              <p style={{ fontSize: '.78rem', fontWeight: 700, letterSpacing: '.1em', color: 'var(--ink-faint)', margin: '0 0 10px' }}>
                {p.category === 'Giyim' ? 'RENK' : 'RENK SEÇENEĞİ'}
                <span style={{ color: 'var(--ink)', fontWeight: 400, letterSpacing: 0, textTransform: 'none', marginLeft: '8px' }}>{colors[selectedColor]}</span>
              </p>
              <div style={{ display: 'flex', gap: '10px' }}>
                {[p.color, '#27ae60'].map((c, i) => (
                  <button key={i} onClick={() => setSelectedColor(i)} style={{
                    width: '36px', height: '36px', borderRadius: '50%', background: c,
                    border: `3px solid ${selectedColor === i ? 'var(--ink)' : 'transparent'}`,
                    outline: `2px solid ${selectedColor === i ? c : 'transparent'}`,
                    outlineOffset: '2px',
                    cursor: 'pointer', transition: 'all .2s',
                    boxShadow: '0 2px 8px rgba(0,0,0,.15)',
                  }} />
                ))}
              </div>
            </div>
          )}

          {/* Beden seçici (giyim için) */}
          {p.category === 'Giyim' && (
            <div>
              <p style={{ fontSize: '.78rem', fontWeight: 700, letterSpacing: '.1em', color: 'var(--ink-faint)', margin: '0 0 10px' }}>BEDEN</p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {['XS', 'S', 'M', 'L', 'XL', '2XL'].map(s => (
                  <button key={s} style={{
                    padding: '8px 16px', borderRadius: '8px',
                    border: '1.5px solid var(--line)', background: 'var(--paper)',
                    cursor: 'pointer', fontSize: '.85rem', fontWeight: 600,
                    color: 'var(--ink)', transition: 'all .15s',
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = p.color; (e.currentTarget as HTMLElement).style.background = `${p.color}10`; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--line)'; (e.currentTarget as HTMLElement).style.background = 'var(--paper)'; }}
                  >{s}</button>
                ))}
              </div>
              <a href="#" style={{ fontSize: '.78rem', color: p.color, textDecoration: 'underline', display: 'inline-block', marginTop: '8px' }}>Beden tablosunu gör →</a>
            </div>
          )}

          {/* Adet + Sepet */}
          <QtySelector product={p} />

          {/* Güvence kartları */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
            {[
              { icon: '🚚', title: 'Ücretsiz Kargo', sub: '₺200 üzeri' },
              { icon: '↩️', title: '14 Gün İade', sub: 'Koşulsuz' },
              { icon: '🔒', title: 'Güvenli Ödeme', sub: 'SSL + 3D' },
            ].map(b => (
              <div key={b.title} style={{ background: 'var(--paper)', borderRadius: '14px', padding: '14px 12px', textAlign: 'center', border: '1px solid var(--line)' }}>
                <div style={{ fontSize: '1.4rem', marginBottom: '4px' }}>{b.icon}</div>
                <p style={{ fontWeight: 700, fontSize: '.75rem', margin: '0 0 2px', color: 'var(--ink)' }}>{b.title}</p>
                <p style={{ fontSize: '.7rem', color: 'var(--ink-faint)', margin: 0 }}>{b.sub}</p>
              </div>
            ))}
          </div>

          {/* Teslimat tahmini */}
          <div style={{ background: 'var(--paper)', borderRadius: '14px', padding: '16px 20px', border: '1px solid var(--line)', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke={p.color} strokeWidth="1.8" style={{ flexShrink: 0, marginTop: '1px' }}>
              <path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3" />
              <rect x="9" y="11" width="14" height="10" rx="2" />
              <circle cx="12" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
            </svg>
            <div>
              <p style={{ fontWeight: 700, fontSize: '.85rem', margin: '0 0 2px', color: 'var(--ink)' }}>
                Bugün sipariş ver, <span style={{ color: p.color }}>Çarşamba-Perşembe</span> teslim al
              </p>
              <p style={{ fontSize: '.78rem', color: 'var(--ink-soft)', margin: 0 }}>2-4 iş günü · Yurtiçi kargo · Takip kodu ile</p>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ borderTop: '1px solid var(--line)', paddingTop: '28px' }}>
            <div style={{ display: 'flex', gap: '0', borderBottom: '1px solid var(--line)', marginBottom: '24px' }}>
              {(['aciklama', 'ozellikler', 'yorumlar', 'sss'] as const).map(tab => (
                <button key={tab} onClick={() => setActiveTab(tab)} style={{
                  padding: '10px 18px', background: 'none', border: 'none',
                  borderBottom: `2px solid ${activeTab === tab ? p.color : 'transparent'}`,
                  cursor: 'pointer', fontWeight: activeTab === tab ? 700 : 400,
                  color: activeTab === tab ? 'var(--ink)' : 'var(--ink-faint)',
                  fontSize: '.85rem', transition: 'all .2s', whiteSpace: 'nowrap',
                  fontFamily: 'var(--font-body)',
                }}>
                  {tab === 'aciklama' ? 'Açıklama' : tab === 'ozellikler' ? 'Özellikler' : tab === 'yorumlar' ? `Yorumlar (${p.reviews.length})` : 'SSS'}
                </button>
              ))}
            </div>

            {/* Açıklama */}
            {activeTab === 'aciklama' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p style={{ color: 'var(--ink-soft)', lineHeight: 1.8, fontSize: '.95rem', margin: 0 }}>{p.longDescription}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  {p.details.map((d, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '.85rem', color: 'var(--ink-soft)' }}>
                      <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: `${p.color}18`, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg viewBox="0 0 10 10" width="8" height="8" fill="none" stroke={p.color} strokeWidth="2.5" strokeLinecap="round"><path d="M1.5 5l2.5 2.5 5-5" /></svg>
                      </div>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Özellikler */}
            {activeTab === 'ozellikler' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {p.specs.map((s, i) => (
                  <div key={i} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '12px 0', borderBottom: i < p.specs.length - 1 ? '1px solid var(--line)' : 'none',
                  }}>
                    <span style={{ fontSize: '.85rem', color: 'var(--ink-faint)', fontWeight: 600 }}>{s.label}</span>
                    <span style={{ fontSize: '.85rem', color: 'var(--ink)', fontWeight: 500 }}>{s.value}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Yorumlar */}
            {activeTab === 'yorumlar' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {p.reviews.length === 0 && (
                  <p style={{ color: 'var(--ink-faint)', fontSize: '.9rem', textAlign: 'center', padding: '24px 0' }}>Henüz yorum yok. İlk yorumu sen bırak!</p>
                )}
                {/* Rating özeti */}
                {p.reviews.length > 0 && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '16px 20px', background: 'var(--paper)', borderRadius: '14px', border: '1px solid var(--line)', marginBottom: '8px' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 800, color: 'var(--ink)', lineHeight: 1 }}>{avgRating}.0</div>
                      <RatingStars rating={avgRating} />
                      <div style={{ fontSize: '.72rem', color: 'var(--ink-faint)', marginTop: '4px' }}>{p.reviews.length} yorum</div>
                    </div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      {[5, 4, 3, 2, 1].map(n => {
                        const count = p.reviews.filter(r => r.rating === n).length;
                        return (
                          <div key={n} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ fontSize: '.72rem', color: 'var(--ink-faint)', width: '6px' }}>{n}</span>
                            <div style={{ flex: 1, height: '5px', background: 'var(--cream-deep)', borderRadius: '3px', overflow: 'hidden' }}>
                              <div style={{ height: '100%', width: `${p.reviews.length ? (count / p.reviews.length) * 100 : 0}%`, background: p.color, borderRadius: '3px' }} />
                            </div>
                            <span style={{ fontSize: '.72rem', color: 'var(--ink-faint)', width: '16px' }}>{count}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
                {p.reviews.map((r, i) => (
                  <div key={i} style={{ padding: '16px', background: 'var(--paper)', borderRadius: '14px', border: '1px solid var(--line)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: p.color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '.8rem' }}>
                          {r.name[0]}
                        </div>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '.85rem', color: 'var(--ink)' }}>{r.name}</div>
                          <RatingStars rating={r.rating} />
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
                      width: '100%', padding: '16px 20px', background: openFaq === i ? `${p.color}08` : 'var(--paper)',
                      border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', gap: '12px',
                    }}>
                      <span style={{ fontWeight: 600, fontSize: '.88rem', color: 'var(--ink)', fontFamily: 'var(--font-body)' }}>{f.q}</span>
                      <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0, transform: openFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform .2s', color: p.color }}>
                        <path d="M3 6l5 5 5-5" />
                      </svg>
                    </button>
                    {openFaq === i && (
                      <div style={{ padding: '0 20px 16px', background: `${p.color}06` }}>
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
      <div style={{ background: 'var(--ink)', padding: '64px var(--pad)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '36px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem,3vw,2rem)', color: 'var(--cream-fixed)', margin: 0 }}>
              Bunları da beğenebilirsin
            </h2>
            <a href="/urunler" style={{ color: p.color, textDecoration: 'none', fontSize: '.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
              Tümünü gör
              <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
            </a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' }}>
            {related.map(r => (
              <a key={r.id} href={`/urunler/${r.slug}`} style={{
                background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.08)',
                borderRadius: '18px', overflow: 'hidden', textDecoration: 'none', color: 'inherit',
                display: 'flex', flexDirection: 'column', transition: 'background .2s, transform .25s',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,.1)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,.06)'; (e.currentTarget as HTMLElement).style.transform = ''; }}
              >
                <div style={{ background: `${r.color}15`, padding: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', aspectRatio: '1' }}>
                  <span style={{ color: r.color, width: '80px', height: '80px', display: 'block', filter: `drop-shadow(0 4px 12px ${r.color}40)` }} dangerouslySetInnerHTML={{ __html: r.svgIcon }} />
                </div>
                <div style={{ padding: '16px 20px 20px' }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '.95rem', margin: '0 0 4px', color: 'var(--cream-fixed)' }}>{r.name}</p>
                  <p style={{ color: r.color, fontWeight: 700, fontSize: '.95rem', margin: '0 0 8px' }}>{r.priceDisplay}</p>
                  <p style={{ fontSize: '.78rem', color: 'rgba(243,238,225,.5)', margin: 0, lineHeight: 1.5 }}>{r.description.slice(0, 60)}…</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .pd-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .pd-img-col { position: static !important; }
          .pd-info-col { padding: 0 !important; }
        }
      `}</style>
    </main>
  );
}
