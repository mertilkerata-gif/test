import type { Metadata } from 'next';
import { products } from '@/lib/products';
import NavBar from '@/app/components/NavBar';
import ProductGrid from '@/app/components/ProductGrid';

export const metadata: Metadata = {
  title: 'Demleme Shop — Sofra Mağazası',
  description: 'Demleme\'nin el yapımı ürünleri: kupa, tişört, defter ve daha fazlası.',
};

export default function UrunlerPage() {
  return (
    <>
      <NavBar />
      <main style={{ minHeight: '100vh', background: 'var(--cream)', paddingTop: '72px', paddingBottom: '80px' }}>

        {/* Hero banner */}
        <div style={{
          background: 'var(--ink)',
          padding: '56px var(--pad) 52px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Dekoratif arka plan */}
          <div style={{
            position: 'absolute', inset: 0, opacity: .04,
            backgroundImage: 'radial-gradient(circle at 20% 50%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #fff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }} />
          <div style={{ maxWidth: 'var(--wrap)', margin: '0 auto', position: 'relative' }}>
            <p style={{ fontFamily: 'var(--font-mark)', fontSize: '.72rem', letterSpacing: '.2em', opacity: .45, margin: '0 0 14px', color: 'var(--cream-fixed)' }}>
              DEMLEME SHOP
            </p>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 6vw, 4.5rem)',
              margin: '0 0 16px',
              lineHeight: 1.05,
              color: 'var(--cream-fixed)',
            }}>
              Sofra <span style={{ color: '#e07048' }}>Mağazası</span>
            </h1>
            <p style={{ opacity: .6, fontSize: '1rem', maxWidth: '440px', margin: 0, color: 'var(--cream-fixed)', lineHeight: 1.7 }}>
              Sohbete değer katan, sofraya yakışan — el yapımı, özenle seçilmiş ürünler.
            </p>

            {/* Küçük istatistikler */}
            <div style={{ display: 'flex', gap: '32px', marginTop: '32px', flexWrap: 'wrap' as const }}>
              {[
                { n: '7', l: 'özgün ürün' },
                { n: '200+', l: 'mutlu alışveriş' },
                { n: '4.9', l: 'ortalama puan' },
              ].map(s => (
                <div key={s.l}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: '#e07048' }}>{s.n}</div>
                  <div style={{ fontSize: '.72rem', color: 'rgba(243,238,225,.5)', fontWeight: 600, letterSpacing: '.06em' }}>{s.l.toUpperCase()}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ürün grid */}
        <div style={{ maxWidth: 'var(--wrap)', margin: '0 auto', padding: '48px var(--pad) 0' }}>
          <ProductGrid products={products} />
        </div>
      </main>
    </>
  );
}
