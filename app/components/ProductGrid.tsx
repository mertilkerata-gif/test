'use client';
import { useState, useEffect, useRef } from 'react';
import type { Product } from '@/lib/products';
import AddToCartBtn from './AddToCartBtn';

const CATEGORIES = ['Tümü', 'Mutfak', 'Giyim', 'Kırtasiye', 'Dekor', 'Diğer'];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function ProductCard({ p, index }: { p: Product; index: number }) {
  const { ref, visible } = useInView();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transition: `opacity .55s cubic-bezier(.16,.9,.2,1) ${index * 0.07}s, transform .55s cubic-bezier(.16,.9,.2,1) ${index * 0.07}s, box-shadow .3s`,
        background: 'var(--paper)',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: hovered ? '0 20px 60px -8px rgba(0,0,0,.15), 0 4px 16px -2px rgba(0,0,0,.08)' : '0 2px 12px rgba(0,0,0,.06)',
        transform: visible ? (hovered ? 'translateY(-6px)' : 'translateY(0)') : 'translateY(40px)',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column' as const,
        border: '1px solid var(--line)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => { window.location.href = `/urunler/${p.slug}`; }}
    >
      {/* Görsel alan */}
      <div style={{
        background: `linear-gradient(145deg, color-mix(in srgb, ${p.color} 6%, var(--cream-deep)) 0%, color-mix(in srgb, ${p.color} 14%, var(--cream)) 100%)`,
        aspectRatio: '4/3',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Dekoratif daire */}
        <div style={{
          position: 'absolute',
          width: '180px', height: '180px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${p.color}18 0%, transparent 70%)`,
          transition: 'transform .4s ease',
          transform: hovered ? 'scale(1.3)' : 'scale(1)',
        }} />

        {/* İkon */}
        <div style={{
          width: '100px', height: '100px',
          color: p.color,
          position: 'relative', zIndex: 1,
          filter: `drop-shadow(0 6px 20px ${p.color}45)`,
          transition: 'transform .4s cubic-bezier(.34,1.56,.64,1)',
          transform: hovered ? 'scale(1.12) translateY(-4px)' : 'scale(1)',
        }} dangerouslySetInnerHTML={{ __html: p.svgIcon }} />

        {/* Badge */}
        {p.badge && (
          <div style={{
            position: 'absolute', top: '14px', left: '14px',
            background: p.color, color: '#fff',
            fontSize: '.65rem', fontWeight: 800, letterSpacing: '.1em',
            padding: '5px 12px', borderRadius: '40px',
            boxShadow: `0 4px 12px ${p.color}55`,
          }}>{p.badge.toUpperCase()}</div>
        )}

        {/* Kategori chip */}
        <div style={{
          position: 'absolute', top: '14px', right: '14px',
          background: 'rgba(255,255,255,.82)',
          backdropFilter: 'blur(8px)',
          fontSize: '.62rem', fontWeight: 700, letterSpacing: '.1em',
          padding: '4px 10px', borderRadius: '40px',
          color: p.color,
        }}>{p.category.toUpperCase()}</div>

        {/* Stok bar — sadece düşükse */}
        {p.stock < 50 && (
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            height: '3px',
            background: 'rgba(0,0,0,.08)',
          }}>
            <div style={{
              height: '100%',
              width: `${Math.min(p.stock * 2, 100)}%`,
              background: `linear-gradient(90deg, ${p.color}, ${p.accentColor})`,
              borderRadius: '2px',
              transition: 'width 1s ease',
            }} />
          </div>
        )}
      </div>

      {/* İçerik */}
      <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.1rem',
          color: 'var(--ink)',
          margin: 0,
          lineHeight: 1.2,
        }}>{p.name}</h3>

        <p style={{
          fontSize: '.85rem',
          color: 'var(--ink-soft)',
          lineHeight: 1.6,
          margin: 0,
          flex: 1,
        }}>{p.description.slice(0, 75)}…</p>

        {p.stock < 30 && (
          <p style={{ fontSize: '.72rem', color: p.color, fontWeight: 700, margin: 0 }}>
            Son {p.stock} adet
          </p>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '4px' }}
          onClick={e => e.stopPropagation()}>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.25rem',
            fontWeight: 800,
            color: 'var(--ink)',
            flex: 1,
          }}>{p.priceDisplay}</span>
          <AddToCartBtn product={p} small />
        </div>
      </div>
    </div>
  );
}

export default function ProductGrid({ products }: { products: Product[] }) {
  const [activeFilter, setActiveFilter] = useState('Tümü');
  const [sortBy, setSortBy] = useState<'varsayilan' | 'fiyat-artan' | 'fiyat-azalan'>('varsayilan');

  const filtered = products
    .filter(p => activeFilter === 'Tümü' || p.category === activeFilter)
    .sort((a, b) => {
      if (sortBy === 'fiyat-artan') return a.price - b.price;
      if (sortBy === 'fiyat-azalan') return b.price - a.price;
      return 0;
    });

  return (
    <div>
      {/* Filtre + sıralama */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '40px',
        flexWrap: 'wrap' as const,
      }}>
        {/* Kategori filtreleri */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' as const, flex: 1 }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                padding: '8px 18px',
                borderRadius: '40px',
                border: `1.5px solid ${activeFilter === cat ? 'var(--ink)' : 'var(--line)'}`,
                background: activeFilter === cat ? 'var(--ink)' : 'var(--paper)',
                color: activeFilter === cat ? '#fff' : 'var(--ink-soft)',
                fontSize: '.82rem',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                transition: 'all .2s',
                whiteSpace: 'nowrap' as const,
              }}
            >{cat}</button>
          ))}
        </div>

        {/* Sıralama */}
        <select
          value={sortBy}
          onChange={e => setSortBy(e.target.value as typeof sortBy)}
          style={{
            padding: '8px 16px',
            borderRadius: '12px',
            border: '1.5px solid var(--line)',
            background: 'var(--paper)',
            color: 'var(--ink)',
            fontSize: '.82rem',
            fontWeight: 600,
            cursor: 'pointer',
            fontFamily: 'var(--font-body)',
            outline: 'none',
          }}
        >
          <option value="varsayilan">Önerilen</option>
          <option value="fiyat-artan">Fiyat: Düşük → Yüksek</option>
          <option value="fiyat-azalan">Fiyat: Yüksek → Düşük</option>
        </select>
      </div>

      {/* Ürün sayısı */}
      <p style={{ fontSize: '.8rem', color: 'var(--ink-faint)', marginBottom: '24px', fontWeight: 600 }}>
        {filtered.length} ürün
      </p>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '24px',
      }}>
        {filtered.map((p, i) => (
          <ProductCard key={p.id} p={p} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--ink-faint)' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>🫖</div>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem' }}>Bu kategoride ürün yok.</p>
        </div>
      )}
    </div>
  );
}
