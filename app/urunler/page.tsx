import type { Metadata } from 'next';
import { products } from '@/lib/products';
import NavBar from '@/app/components/NavBar';
import ProductGrid from '@/app/components/ProductGrid';

export const metadata: Metadata = {
  title: 'Demleme Shop — Mağaza',
  description: 'Demleme\'nin el yapımı ürünleri: kupa, tişört, defter ve daha fazlası.',
};

export default function UrunlerPage() {
  return (
    <>
      <NavBar />
      <main style={{minHeight:'100vh', background:'var(--cream)', paddingTop:'72px', paddingBottom:'80px'}}>
        <div style={{
          background:'var(--ink)',color:'var(--cream-fixed)',
          padding:'60px var(--pad) 48px',
        }}>
          <p style={{fontFamily:'var(--font-mark)',fontSize:'.75rem',letterSpacing:'.18em',
            opacity:.6,marginBottom:'12px',margin:'0 0 12px'}}>DEMLEME</p>
          <h1 style={{fontFamily:'var(--font-display)',fontSize:'clamp(2rem,6vw,4rem)',
            margin:0,lineHeight:1.1}}>Sofra Mağazası</h1>
          <p style={{opacity:.7,marginTop:'16px',fontSize:'1rem',maxWidth:'480px',margin:'16px 0 0'}}>
            Sohbete değer katan, sofraya yakışan ürünler.
          </p>
        </div>
        <div style={{maxWidth:'var(--wrap)',margin:'0 auto',padding:'48px var(--pad) 0'}}>
          <ProductGrid products={products} />
        </div>
      </main>
    </>
  );
}
