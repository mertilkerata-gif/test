export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  priceDisplay: string;
  category: string;
  stock: number;
  limited: boolean;
  description: string;
  details: string[];
  badge?: string;
  svgIcon: string;
  color: string;
}

export const products: Product[] = [
  {
    id: 'p1',
    slug: 'demleme-kupasi',
    name: 'Demleme Kupası',
    price: 290,
    priceDisplay: '₺290',
    category: 'Mutfak',
    stock: 27,
    limited: true,
    description: 'Sofranın vazgeçilmezi. El yapımı, Demleme logolu seramik kupa. Her çayı daha anlamlı kılar.',
    details: ['300ml kapasite', 'El yapımı seramik', 'Bulaşık makinesine uygun', 'Kutulu teslimat'],
    badge: 'Sınırlı Üretim',
    svgIcon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 22h30v18a10 10 0 01-10 10H24a10 10 0 01-10-10V22z"/><path d="M44 26h4a6 6 0 010 12h-4"/><path d="M20 14c1-3 3-3 4-6M30 14c1-3 3-3 4-6"/></svg>`,
    color: 'var(--rust)',
  },
  {
    id: 'p2',
    slug: 'sofra-tisörtu',
    name: 'Sofra Tişörtü',
    price: 450,
    priceDisplay: '₺450',
    category: 'Giyim',
    stock: 48,
    limited: false,
    description: '"Sofraya herkes davetli" yazılı oversize tişört. %100 organik pamuk, unisex kalıp.',
    details: ['%100 organik pamuk', 'Oversize unisex kalıp', 'XS–2XL beden', 'Krem & siyah seçenekler'],
    svgIcon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8l20 0M18 8c-5 2-10 6-12 12l8 4V52h28V24l8-4c-2-6-7-10-12-12"/><circle cx="28" cy="18" r="4"/></svg>`,
    color: 'var(--lav-deep)',
  },
  {
    id: 'p3',
    slug: 'demleme-defteri',
    name: 'Demleme Defteri',
    price: 180,
    priceDisplay: '₺180',
    category: 'Kırtasiye',
    stock: 62,
    limited: false,
    description: 'Sofrada çıkan fikirleri, tarifleri, anları yazmak için. Noktalı iç sayfa, sert kapak.',
    details: ['A5 format', 'Noktalı iç sayfa', 'Sert kapak', '160 sayfa', 'El yapımı deri şerit'],
    svgIcon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><rect x="12" y="8" width="36" height="48" rx="3"/><line x1="20" y1="20" x2="44" y2="20"/><line x1="20" y1="28" x2="44" y2="28"/><line x1="20" y1="36" x2="36" y2="36"/><line x1="10" y1="8" x2="10" y2="56" stroke-width="4"/></svg>`,
    color: 'var(--green)',
  },
  {
    id: 'p4',
    slug: 'mini-cay-seti',
    name: 'Mini Çay Seti',
    price: 620,
    priceDisplay: '₺620',
    category: 'Mutfak',
    stock: 15,
    limited: true,
    description: 'Sofranın tam ortasına layık. İki kişilik seramik çay seti; demlik ve iki fincanla gelir.',
    details: ['2 kişilik set', 'El yapımı seramik', '600ml demlik', 'Hediyelik kutu'],
    badge: 'Çok Satan',
    svgIcon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 24h26v14a12 12 0 01-12 12H28a12 12 0 01-12-12V24z"/><path d="M42 28h5a7 7 0 010 14h-5"/><ellipse cx="29" cy="16" rx="10" ry="4"/></svg>`,
    color: 'var(--butter-deep)',
  },
  {
    id: 'p5',
    slug: 'bolum-posteri',
    name: 'Bölüm Posteri',
    price: 220,
    priceDisplay: '₺220',
    category: 'Dekor',
    stock: 33,
    limited: false,
    description: 'En sevdiğin bölümün kapak tasarımı. 30×40cm baskı, mat kuşe kağıt.',
    details: ['30×40cm format', 'Mat kuşe kağıt', 'Çerçevesiz', 'Tüm bölümler mevcut', 'Siparişe özel baskı'],
    svgIcon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><rect x="10" y="8" width="44" height="48" rx="2"/><rect x="16" y="14" width="32" height="20" rx="1"/><line x1="16" y1="40" x2="48" y2="40"/><line x1="16" y1="48" x2="36" y2="48"/></svg>`,
    color: 'var(--teal)',
  },
  {
    id: 'p6',
    slug: 'kupa-altligi-seti',
    name: 'Kupa Altlığı Seti',
    price: 140,
    priceDisplay: '₺140',
    category: 'Mutfak',
    stock: 80,
    limited: false,
    description: '4\'lü ahşap kupa altlığı seti. Lazerle işlenmiş Demleme logosu.',
    details: ['4\'lü set', 'Doğal ahşap', 'Lazer baskı logo', '10×10cm'],
    svgIcon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><circle cx="32" cy="32" r="20"/><circle cx="32" cy="32" r="12"/><circle cx="32" cy="32" r="4"/></svg>`,
    color: 'var(--green-deep)',
  },
  {
    id: 'p7',
    slug: 'hediye-karti',
    name: 'Hediye Kartı',
    price: 200,
    priceDisplay: '₺200 – ₺1000',
    category: 'Diğer',
    stock: 999,
    limited: false,
    description: 'Sevdiklerine Demleme\'den bir şey almak ister misin? Hediye kartı tam sana göre.',
    details: ['₺200 – ₺1000 arası', 'Dijital teslimat', '1 yıl geçerli', 'Tüm ürünlerde kullanılabilir'],
    svgIcon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><rect x="8" y="18" width="48" height="28" rx="4"/><line x1="8" y1="30" x2="56" y2="30"/><line x1="20" y1="40" x2="36" y2="40"/></svg>`,
    color: 'var(--lav)',
  },
];

export function getProduct(slug: string) {
  return products.find(p => p.slug === slug);
}

export function getProductById(id: string) {
  return products.find(p => p.id === id);
}
