'use client';
import type { Product } from '@/lib/products';
import AddToCartBtn from './AddToCartBtn';

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
      gap: '28px',
    }}>
      {products.map(p => (
        <div key={p.id} style={{
          background: 'var(--paper)', borderRadius: '16px', overflow: 'hidden',
          boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column',
          transition: 'transform .3s, box-shadow .3s', cursor: 'pointer',
        }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
            (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-md)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.transform = '';
            (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-sm)';
          }}
          onClick={() => { window.location.href = `/urunler/${p.slug}`; }}
        >
          {/* Görsel */}
          <div style={{
            background: 'var(--cream-deep)', padding: '36px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative', aspectRatio: '4/3',
          }}>
            {p.badge && (
              <span style={{
                position: 'absolute', top: '12px', left: '12px',
                background: 'var(--rust)', color: '#fff',
                fontSize: '.7rem', fontWeight: 700, letterSpacing: '.08em',
                padding: '4px 10px', borderRadius: '20px',
              }}>{p.badge}</span>
            )}
            <span style={{ color: p.color, width: '80px', height: '80px', display: 'block' }}
              dangerouslySetInnerHTML={{ __html: p.svgIcon }} />
          </div>

          {/* Meta */}
          <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <p style={{ fontSize: '.72rem', color: 'var(--ink-faint)', fontFamily: 'var(--font-mark)', letterSpacing: '.1em', margin: 0 }}>
              {p.category}
            </p>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', color: 'var(--ink)', fontWeight: 700, margin: 0 }}>
              {p.name}
            </p>
            <p style={{ fontSize: '.9rem', color: 'var(--ink-soft)', lineHeight: 1.5, flex: 1, margin: 0 }}>
              {p.description.slice(0, 80)}…
            </p>

            {p.stock < 50 && (
              <div>
                <div style={{ height: '4px', background: 'var(--cream-deep)', borderRadius: '2px', overflow: 'hidden', marginBottom: '4px' }}>
                  <div style={{ height: '100%', width: `${Math.min(p.stock * 2, 100)}%`, background: 'var(--rust)', borderRadius: '2px' }} />
                </div>
                <p style={{ fontSize: '.72rem', color: 'var(--rust)', fontWeight: 600, margin: 0 }}>Son {p.stock} adet</p>
              </div>
            )}

            <div style={{ display: 'flex', gap: '10px', marginTop: '8px', alignItems: 'center' }}
              onClick={e => e.stopPropagation()}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--ink)', flex: 1 }}>
                {p.priceDisplay}
              </span>
              <AddToCartBtn product={p} small />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
