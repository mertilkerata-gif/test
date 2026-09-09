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
  longDescription: string;
  details: string[];
  specs: { label: string; value: string }[];
  badge?: string;
  color: string;
  accentColor: string;
  images: string[]; // placeholder paths
  reviews: { name: string; rating: number; comment: string; date: string }[];
  faq: { q: string; a: string }[];
  svgIcon: string;
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
    badge: 'Sınırlı Üretim',
    color: '#c0392b',
    accentColor: '#e74c3c',
    description: 'Her çayı ritüele dönüştüren, el yapımı seramik kupa. Demleme logolu, sıcak dokunuşlu.',
    longDescription: 'Sofranın vazgeçilmezi olacak bu kupa, Türkiye\'nin en iyi seramik ustalarından biriyle iş birliği yapılarak tasarlandı. Klasik Türk çay bardağı formundan ilham alıp modern bir yoruma kavuşturuldu. Her kupa tek tek elle şekillendirilip, yüksek ısıda fırınlanıyor — bu yüzden her birinde küçük, benzersiz dokunuşlar bulabilirsiniz. Demleme logosu ise kabartma tekniğiyle işleniyor.',
    details: ['El yapımı seramik', '300ml kapasite', 'Bulaşık makinesine uygun', 'Kutulu özel teslimat', 'Kabartma logo detayı', 'Kurşunsuz sır'],
    specs: [
      { label: 'Malzeme', value: 'El yapımı seramik' },
      { label: 'Kapasite', value: '300ml' },
      { label: 'Ağırlık', value: '~280g' },
      { label: 'Boyut', value: '9cm × 11cm' },
      { label: 'Renk', value: 'Mat krem / Terracotta' },
      { label: 'Bakım', value: 'Bulaşık makinesine uygun' },
    ],
    reviews: [
      { name: 'Selin A.', rating: 5, comment: 'Hediye aldım, çok beğendiler. Kalitesi gerçekten üst düzey.', date: '2 hafta önce' },
      { name: 'Mert K.', rating: 5, comment: 'Her sabah çayımı bu kupadan içiyorum. Elinize sağlık!', date: '1 ay önce' },
      { name: 'Ayşe D.', rating: 4, comment: 'Çok şık, biraz küçük geldi bana ama tasarım harika.', date: '6 hafta önce' },
    ],
    faq: [
      { q: 'Kargo ne zaman çıkar?', a: 'Siparişler 1-2 iş günü içinde kargoya verilir, toplam 2-4 iş günü teslimat beklenir.' },
      { q: 'İade koşulları nedir?', a: '14 gün içinde koşulsuz iade. Hasarlı veya yanlış ürünlerde kargo bedeli bize aittir.' },
      { q: 'Hediye paketi mevcut mu?', a: 'Evet, sipariş notuna "hediye paketi" yazarsanız özel kutuda gönderilir.' },
    ],
    images: ['/images/cay-icon-blue.jpeg'],
    svgIcon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 22h30v18a10 10 0 01-10 10H24a10 10 0 01-10-10V22z"/><path d="M44 26h4a6 6 0 010 12h-4"/><path d="M20 14c1-3 3-3 4-6M30 14c1-3 3-3 4-6"/></svg>`,
  },
  {
    id: 'p2',
    slug: 'sofra-tisortu',
    name: 'Sofra Tişörtü',
    price: 450,
    priceDisplay: '₺450',
    category: 'Giyim',
    stock: 48,
    limited: false,
    color: '#6c3483',
    accentColor: '#9b59b6',
    description: '"Sofraya herkes davetli" yazılı oversize tişört. %100 organik pamuk, unisex kalıp.',
    longDescription: 'Demleme\'nin ruhunu taşıyan bu tişört, masaya oturmanın davetini veriyor. 280g/m² ağır organik pamuktan üretilen oversize kalıbı, hem rahat hem de şık. Baskılar su bazlı boyalarla yapılıyor — çevre dostu ve uzun ömürlü. Her yıkamada biraz daha yumuşayan bir kumaş hissi var.',
    details: ['%100 organik pamuk, 280g/m²', 'Oversize unisex kalıp', 'XS – 2XL beden seçeneği', 'Su bazlı çevre dostu baskı', 'Krem & siyah renk seçeneği', 'GOTS sertifikalı'],
    specs: [
      { label: 'Materyal', value: '%100 Organik pamuk' },
      { label: 'Gramaj', value: '280g/m²' },
      { label: 'Kalıp', value: 'Oversize, unisex' },
      { label: 'Bedenler', value: 'XS / S / M / L / XL / 2XL' },
      { label: 'Renkler', value: 'Krem, Siyah' },
      { label: 'Yıkama', value: '30°C, ters çevirerek' },
    ],
    reviews: [
      { name: 'Zeynep T.', rating: 5, comment: 'Kalitesi mükemmel, bedeni tam. Herkese öneriyorum.', date: '1 hafta önce' },
      { name: 'Can B.', rating: 5, comment: 'Kumaşı çok kaliteli, baskı da solmadı.', date: '3 hafta önce' },
      { name: 'Elif M.', rating: 4, comment: 'Güzel ama kargo biraz geç geldi.', date: '2 ay önce' },
    ],
    faq: [
      { q: 'Beden nasıl seçmeliyim?', a: 'Oversize kalıp olduğu için bir beden küçük almanızı öneririz. Beden tablosu ürün fotoğraflarında mevcut.' },
      { q: 'Yıkamada solar mı?', a: 'Su bazlı baskılar düşük ısıda ve ters çevrilerek yıkandığında uzun yıllar dayanır.' },
    ],
    images: [],
    svgIcon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 8l20 0M18 8c-5 2-10 6-12 12l8 4V52h28V24l8-4c-2-6-7-10-12-12"/><circle cx="28" cy="18" r="4"/></svg>`,
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
    color: '#27ae60',
    accentColor: '#2ecc71',
    description: 'Sofrada doğan fikirleri, tarifleri, anları yazmak için. Noktalı iç sayfa, sert kapak.',
    longDescription: 'Demleme\'nin her bölümünde olduğu gibi, iyi fikirler iyi ortamlarda doğar. Bu defter, sohbet sırasında aklına gelen o muhteşem fikri ya da masanın tarifini kayıt altına almak için tasarlandı. 90g noktalı iç kağıt, ince çizgi ve grafik çizimler için ideal. El işi deri şerit yer tutucusu her zaman sayfanı bulmanı sağlar.',
    details: ['A5 format (14.8 × 21cm)', '160 sayfa noktalı iç kağıt, 90g', 'Sert kapak, yuvarlak köşe', 'El işi deri yer tutucu şerit', 'İç cep sayfası', 'Lay-flat spiral bağlama'],
    specs: [
      { label: 'Format', value: 'A5 (14.8 × 21cm)' },
      { label: 'Sayfa', value: '160 sayfa' },
      { label: 'Kağıt', value: '90g noktalı' },
      { label: 'Kapak', value: 'Sert, mat laminasyon' },
      { label: 'Bağlama', value: 'Lay-flat spiral' },
      { label: 'Ekstralar', value: 'Deri şerit, iç cep' },
    ],
    reviews: [
      { name: 'Berk Y.', rating: 5, comment: 'Kağıt kalitesi harika, mürekkep geçirmiyor.', date: '5 gün önce' },
      { name: 'Nisan Ö.', rating: 5, comment: 'Hediye olarak aldım, çok beğenildi.', date: '2 hafta önce' },
    ],
    faq: [
      { q: 'Dolma kalem uyumlu mu?', a: 'Evet, 90g kağıt dolma kalem için uygundur, geçirme yapmaz.' },
    ],
    images: [],
    svgIcon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="12" y="8" width="36" height="48" rx="3"/><line x1="20" y1="20" x2="44" y2="20"/><line x1="20" y1="28" x2="44" y2="28"/><line x1="20" y1="36" x2="36" y2="36"/><line x1="10" y1="8" x2="10" y2="56" stroke-width="4"/></svg>`,
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
    badge: 'Çok Satan',
    color: '#d4a017',
    accentColor: '#f39c12',
    description: 'Sofranın tam ortasına layık. İki kişilik seramik çay seti; demlik ve iki fincanla.',
    longDescription: 'İki kişilik bu sohbet için tasarlandı. Küçük ama kaliteli demlik, ısıyı uzun süre tutar; eşleşen iki fincan ise tam kucak boyu. Tümü el yapımı, Türkiye\'de üretilmiş. Bir kutuda geliyor — ister kendin kullan, ister hediye et. Mavi ve Yeşil renk seçenekleri mevcut.',
    details: ['El yapımı seramik, Türkiye üretimi', '600ml demlik', '2 × 150ml fincan', 'Hediyelik ahşap kutu', 'Isı koruyucu çift cidar demlik', 'Kurşunsuz, gıdaya uygun sır'],
    specs: [
      { label: 'İçerik', value: '1 demlik + 2 fincan' },
      { label: 'Demlik', value: '600ml, çift cidarlı' },
      { label: 'Fincan', value: '150ml her biri' },
      { label: 'Malzeme', value: 'El yapımı seramik' },
      { label: 'Renk', value: 'Mavi, Yeşil' },
      { label: 'Kutu', value: 'Ahşap hediyelik kutu' },
    ],
    reviews: [
      { name: 'Hande S.', rating: 5, comment: 'Anneme aldım, çok memnun kaldı. Hem güzel hem kaliteli.', date: '3 gün önce' },
      { name: 'Tolga R.', rating: 5, comment: 'Demlik gerçekten ısıyı tutuyor, fincanlar da sağlam.', date: '1 hafta önce' },
      { name: 'Dilara K.', rating: 5, comment: 'Hediyelik kutusuyla beraber çok şık geldi.', date: '3 hafta önce' },
      { name: 'Emre A.', rating: 4, comment: 'Güzel ürün, fiyatına değer.', date: '1 ay önce' },
    ],
    faq: [
      { q: 'Renk seçimi nasıl yapılır?', a: 'Sipariş notuna "mavi" veya "yeşil" yazmanız yeterli. Belirtilmezse mavi gönderilir.' },
      { q: 'Demlik ocağa konur mu?', a: 'Hayır, sadece demlenmiş çay için kullanılır, doğrudan ısıya koymayın.' },
      { q: 'Garanti var mı?', a: 'Üretim hatası durumunda 30 gün içinde ücretsiz değiştirme yapıyoruz.' },
    ],
    images: ['/images/cay-icon-blue.jpeg', '/images/cay-icon-green.jpeg'],
    svgIcon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M16 24h26v14a12 12 0 01-12 12H28a12 12 0 01-12-12V24z"/><path d="M42 28h5a7 7 0 010 14h-5"/><ellipse cx="29" cy="16" rx="10" ry="4"/></svg>`,
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
    color: '#16a085',
    accentColor: '#1abc9c',
    description: 'En sevdiğin bölümün kapak tasarımı. 30×40cm baskı, mat kuşe kağıt.',
    longDescription: 'Demleme\'nin en çok izlenen bölümlerinin özel tasarım posterleri. Mat kuşe kağıda baskı, asılmaya hazır. Her bölümün kendine özgü renk paleti ve tipografisi var. Sipariş sırasında hangi bölümü istediğini belirt — biz de özel baskı yapıp göndeririz.',
    details: ['30×40cm format', '200g mat kuşe kağıt', 'Siparişe özel bölüm baskısı', 'Çerçevesiz gönderim', 'Sert karton tüp ile koruma', 'Tüm bölümler mevcut'],
    specs: [
      { label: 'Boyut', value: '30 × 40cm' },
      { label: 'Kağıt', value: '200g mat kuşe' },
      { label: 'Baskı', value: 'Dijital offset, UV' },
      { label: 'Gönderim', value: 'Sert karton tüp' },
      { label: 'Süre', value: '3-5 iş günü (baskı + kargo)' },
    ],
    reviews: [
      { name: 'Yasemin B.', rating: 5, comment: 'Duvarımın en güzel köşesi oldu. Renkleri canlı.', date: '1 hafta önce' },
      { name: 'Serhan G.', rating: 5, comment: 'Sevgilime aldım, çok mutlu oldu.', date: '1 ay önce' },
    ],
    faq: [
      { q: 'Hangi bölümü seçebilirim?', a: 'Tüm yayınlanmış bölümler mevcut. Sipariş notuna bölüm adı veya numarasını yazın.' },
      { q: 'Kaç günde gelir?', a: 'Baskı + kargo toplam 3-5 iş günü.' },
    ],
    images: [],
    svgIcon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="10" y="8" width="44" height="48" rx="2"/><rect x="16" y="14" width="32" height="20" rx="1"/><line x1="16" y1="40" x2="48" y2="40"/><line x1="16" y1="48" x2="36" y2="48"/></svg>`,
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
    color: '#1a5276',
    accentColor: '#2980b9',
    description: '4\'lü ahşap kupa altlığı seti. Lazerle işlenmiş Demleme logosu.',
    longDescription: 'Masanı tamamlayan bu 4\'lü set, doğal ahşaptan lazer kesim ve baskı ile üretiliyor. Her altlık 10×10cm boyutunda, 8mm kalınlığında kayın ağacından. Altında kaydırmaz kauçuk taban var. Demleme logolu — sofranın sessiz bir parçası.',
    details: ['4\'lü set', 'Doğal kayın ağacı, 8mm', '10×10cm boyut', 'Lazer baskı logo', 'Kaydırmaz kauçuk taban', 'Hediye kutusunda'],
    specs: [
      { label: 'Malzeme', value: 'Doğal kayın ağacı' },
      { label: 'Kalınlık', value: '8mm' },
      { label: 'Boyut', value: '10 × 10cm' },
      { label: 'Adet', value: '4\'lü set' },
      { label: 'Taban', value: 'Kaydırmaz kauçuk' },
    ],
    reviews: [
      { name: 'Kerem Y.', rating: 5, comment: 'Ahşap kalitesi çok iyi, lazer baskı da çok net.', date: '2 hafta önce' },
    ],
    faq: [
      { q: 'Islak silinebilir mi?', a: 'Evet, nemli bez ile silebilirsiniz. Uzun süre ıslatmayın.' },
    ],
    images: [],
    svgIcon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="32" cy="32" r="20"/><circle cx="32" cy="32" r="12"/><circle cx="32" cy="32" r="4"/></svg>`,
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
    color: '#7d3c98',
    accentColor: '#9b59b6',
    description: 'Sevdiklerine Demleme\'den bir şey almak istiyorsan, hediye kartı tam sana göre.',
    longDescription: 'Ne alacağını bilemiyorsan, seçimi onlara bırak. ₺200\'den ₺1000\'e kadar istediğin tutarda dijital hediye kartı. Anında e-posta ile iletilir, 1 yıl geçerlidir, tüm ürünlerde kullanılabilir.',
    details: ['₺200 – ₺1000 arası tutar', 'Anında dijital teslimat', '1 yıl geçerlilik süresi', 'Tüm ürünlerde kullanılabilir', 'Kişiselleştirilmiş mesaj eklenebilir'],
    specs: [
      { label: 'Teslimat', value: 'Dijital (e-posta)' },
      { label: 'Geçerlilik', value: '1 yıl' },
      { label: 'Minimum', value: '₺200' },
      { label: 'Maksimum', value: '₺1000' },
    ],
    reviews: [],
    faq: [
      { q: 'Ne zaman teslim edilir?', a: 'Satın alma sonrası anında e-posta ile gönderilir.' },
      { q: 'Bakiye kalırsa ne olur?', a: 'Kalan bakiye bir sonraki alışverişte kullanılabilir.' },
    ],
    images: [],
    svgIcon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="8" y="18" width="48" height="28" rx="4"/><line x1="8" y1="30" x2="56" y2="30"/><line x1="20" y1="40" x2="36" y2="40"/></svg>`,
  },
];

export function getProduct(slug: string) {
  return products.find(p => p.slug === slug);
}
export function getProductById(id: string) {
  return products.find(p => p.id === id);
}
