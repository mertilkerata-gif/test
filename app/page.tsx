import type { Metadata } from 'next';
import NavBar from '@/app/components/NavBar';

export const metadata: Metadata = {
  title: 'Demleme — Masaya Hoşgeldin',
  description: 'Demleme; sohbetin, çayın ve hikâyenin yavaş yavaş demlendiği bir masa.',
};

export default function Home() {
  return (
    <>
      <NavBar />
      <div
        dangerouslySetInnerHTML={{
        __html: `

<!-- ═══════════════════════════════════════════════════════════ -->
<!-- 1. HERO                                                      -->
<!-- ═══════════════════════════════════════════════════════════ -->
<section id="hero" style="min-height:calc(100svh - 64px);display:flex;align-items:center;padding:40px var(--pad)">
  <div style="max-width:var(--wrap);margin:0 auto;width:100%;display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center" class="hero-2col">

    <!-- SOL -->
    <div style="display:flex;flex-direction:column;gap:24px">

      <h1 style="font-family:'Bebas Neue','Arial Black',sans-serif;font-size:clamp(4rem,12vw,10rem);line-height:0.9;margin:0;letter-spacing:-.01em">
        <span style="display:block" class="hero-anim">MASAYA</span>
        <span style="display:block;color:var(--rust)" class="hero-anim hero-anim-delay1">HOŞGELDİN</span>
      </h1>

      <p class="hero-anim hero-anim-delay2" style="font-size:1rem;color:var(--ink-faint);max-width:380px;margin:0;line-height:1.65">
        Her hafta yeni bir sohbet, bir çay ve sofraya oturacak biri. Demleme'ye katıl.
      </p>

      <div class="hero-anim hero-anim-delay3" style="display:flex;gap:12px;flex-wrap:wrap;align-items:center">
        <a href="https://youtube.com/@demleme" target="_blank" rel="noopener"
          style="display:inline-flex;align-items:center;gap:10px;padding:14px 24px;background:var(--ink);color:var(--cream-fixed);border-radius:40px;font-weight:700;font-size:.9rem;text-decoration:none">
          <img src="/images/yt-kirmizi.png" width="22" height="16" alt="YT" style="object-fit:contain;flex-shrink:0">
          YouTube'da İzle
        </a>
        <a href="/urunler"
          style="display:inline-flex;align-items:center;gap:10px;padding:14px 24px;border:2px solid var(--ink);color:var(--ink);border-radius:40px;font-weight:700;font-size:.9rem;text-decoration:none">
          <img src="/images/sepet-ikonu.png" width="20" height="20" alt="Sepet" style="object-fit:contain;flex-shrink:0">
          Mağaza
        </a>
      </div>

    </div>

    <!-- SAĞ -->
    <div class="hero-right hero-anim hero-anim-delay2" style="display:flex;align-items:center;justify-content:center">
      <img src="/images/cay-animasyon.webp" alt="Çay animasyonu" style="width:100%;max-width:420px;object-fit:contain" />
    </div>

  </div>

  <div style="position:absolute;bottom:20px;left:50%;transform:translateX(-50%);opacity:.3;animation:heroArrow 2s ease-in-out infinite">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
      <path d="M12 5v14M5 12l7 7 7-7"/>
    </svg>
  </div>
</section>

<!-- ═══════════════════════════════════════════════════════════ -->
<!-- 2. İSTATİSTİKLER — tam genişlik, scroll reveal             -->
<!-- ═══════════════════════════════════════════════════════════ -->
<section id="stats" class="reveal-section" data-bg="bg-cream-deep">
  <div style="max-width:var(--wrap);margin:0 auto;width:100%" class="stats-grid">

    <div style="padding:60px 40px;display:flex;flex-direction:column;align-items:center;gap:8px;border-right:1px solid var(--line)">
      <div class="stat-count" data-target="11999" style="font-family:'Bebas Neue',var(--font-display);font-size:clamp(3.5rem,6vw,6rem);color:var(--rust);line-height:1;font-weight:400">0</div>
      <div style="font-size:.7rem;letter-spacing:.15em;color:var(--ink-faint);font-weight:700">DİNLEYEN</div>
    </div>

    <div style="padding:60px 40px;display:flex;flex-direction:column;align-items:center;gap:8px;border-right:1px solid var(--line)">
      <div class="stat-count" data-target="84" style="font-family:'Bebas Neue',var(--font-display);font-size:clamp(3.5rem,6vw,6rem);color:var(--ink);line-height:1;font-weight:400">0</div>
      <div style="font-size:.7rem;letter-spacing:.15em;color:var(--ink-faint);font-weight:700">BÖLÜM</div>
    </div>

    <div style="padding:60px 40px;display:flex;flex-direction:column;align-items:center;gap:8px">
      <div class="stat-count" data-target="199" style="font-family:'Bebas Neue',var(--font-display);font-size:clamp(3.5rem,6vw,6rem);color:var(--lav-deep);line-height:1;font-weight:400">0</div>
      <div style="font-size:.7rem;letter-spacing:.15em;color:var(--ink-faint);font-weight:700">TOPLULUK</div>
    </div>

  </div>
</section>

<!-- ═══════════════════════════════════════════════════════════ -->
<!-- 3. DEMLEYEN KİM                                             -->
<!-- ═══════════════════════════════════════════════════════════ -->
<section id="demleyen" class="reveal-section" data-bg="bg-cream">
  <div style="max-width:var(--wrap);margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center" class="two-col">

    <div class="slide-left">
      <img src="/images/garen-foto.png" alt="Garen Kösedağ"
        style="width:100%;border-radius:24px;object-fit:cover;aspect-ratio:4/5" />
    </div>

    <div style="display:flex;flex-direction:column;gap:24px">
      <p style="font-size:.7rem;letter-spacing:.2em;color:var(--rust);font-weight:800;margin:0">DEMLEYEN KİM</p>
      <h2 style="font-family:'Bebas Neue',var(--font-display);font-size:clamp(3rem,5vw,5.5rem);line-height:.9;margin:0">
        GAREN<br>KÖSEDAĞ
      </h2>
      <p style="font-size:1rem;color:var(--ink-faint);line-height:1.7;margin:0">
        İçeriği bu hafta geliyor. Garen'in hikâyesi, sofrası ve demlemesi burada olacak.
      </p>
      <a href="/ben-kimim" style="display:inline-flex;align-items:center;gap:8px;font-weight:700;color:var(--rust);text-decoration:none;font-size:.9rem">
        Daha fazla oku →
      </a>
    </div>

  </div>
</section>

<!-- ═══════════════════════════════════════════════════════════ -->
<!-- 4. DEMLEME SHOP                                             -->
<!-- ═══════════════════════════════════════════════════════════ -->
<section id="shop" class="reveal-section" data-bg="bg-cream-deep" style="padding:100px 0 80px">
  <div style="max-width:var(--wrap);margin:0 auto;padding:0 var(--pad)">
    <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:40px">
      <div>
        <p style="font-size:.65rem;letter-spacing:.22em;color:var(--rust);font-weight:800;margin:0 0 10px">DEMLEME SHOP</p>
        <h2 style="font-family:'Bebas Neue','Arial Black',sans-serif;font-size:clamp(2.8rem,6vw,5rem);margin:0;line-height:.88">SOFRADAN<br>GELİYOR</h2>
      </div>
      <a href="/urunler" style="font-weight:700;color:var(--ink);text-decoration:none;font-size:.82rem;letter-spacing:.06em;white-space:nowrap">Tümünü Gör →</a>
    </div>
  </div>

  <div class="shop-strip" style="padding-left:var(--pad);padding-right:var(--pad)">

    <a href="/urunler/demleme-kupasi" class="shop-card shop-card-cream scale-up tilt-card">
      <div class="shop-card-img"><img src="/images/demleme-kupasi.webp" alt="Demleme Kupası" style="width:100%;height:100%;object-fit:contain"></div>
      <div class="shop-card-info"><div class="shop-card-name">Demleme Kupası</div><div class="shop-card-price">₺290</div></div>
    </a>

    <a href="/urunler/sofra-tisortu" class="shop-card shop-card-lav scale-up tilt-card">
      <span class="shop-new-badge">YENİ</span>
      <div class="shop-card-img"><img src="/images/sofra-tisortu.webp" alt="Sofra Tişörtü" style="width:100%;height:100%;object-fit:contain"></div>
      <div class="shop-card-info"><div class="shop-card-name">Sofra Tişörtü</div><div class="shop-card-price">₺450</div></div>
    </a>

    <a href="/urunler/mini-cay-seti" class="shop-card shop-card-rust scale-up tilt-card">
      <div class="shop-card-img"><img src="/images/mini-cay-seti.webp" alt="Mini Çay Seti" style="width:100%;height:100%;object-fit:contain"></div>
      <div class="shop-card-info"><div class="shop-card-name">Mini Çay Seti</div><div class="shop-card-price">₺620</div></div>
    </a>

    <a href="/urunler/demleme-defteri" class="shop-card shop-card-green scale-up tilt-card">
      <div class="shop-card-img"><img src="/images/demleme-defteri.webp" alt="Demleme Defteri" style="width:100%;height:100%;object-fit:contain"></div>
      <div class="shop-card-info"><div class="shop-card-name">Demleme Defteri</div><div class="shop-card-price">₺180</div></div>
    </a>

    <a href="/urunler/kupa-altligi-seti" class="shop-card shop-card-cream">
      <div class="shop-card-img"><img src="/images/kupa-altligi.webp" alt="Kupa Altlığı" style="width:100%;height:100%;object-fit:contain"></div>
      <div class="shop-card-info"><div class="shop-card-name">Kupa Altlığı Seti</div><div class="shop-card-price">₺140</div></div>
    </a>

    <a href="/urunler/bolum-posteri" class="shop-card shop-card-lav">
      <div class="shop-card-img"><img src="/images/bolum-posteri.webp" alt="Bölüm Posteri" style="width:100%;height:100%;object-fit:contain"></div>
      <div class="shop-card-info"><div class="shop-card-name">Bölüm Posteri</div><div class="shop-card-price">₺120</div></div>
    </a>

    <a href="/urunler/hediye-karti" class="shop-card shop-card-rust">
      <div class="shop-card-img"><img src="/images/hediye-karti.webp" alt="Hediye Kartı" style="width:100%;height:100%;object-fit:contain"></div>
      <div class="shop-card-info"><div class="shop-card-name">Hediye Kartı</div><div class="shop-card-price">₺100+</div></div>
    </a>

    <a href="/urunler" class="shop-card shop-card-dark" style="min-height:260px">
      <div style="font-family:'Bebas Neue','Arial Black',sans-serif;font-size:2rem;color:var(--cream-fixed);text-align:center;line-height:1;padding:24px">TÜMÜNÜ<br>GÖR</div>
      <div style="color:rgba(243,238,225,.35);font-size:1.4rem">→</div>
    </a>

  </div>
</section>

<section id="bu-hafta" class="reveal-section" data-bg="bg-cream">
  <div style="max-width:var(--wrap);margin:0 auto">

    <div style="margin-bottom:56px">
      <p style="font-size:.7rem;letter-spacing:.2em;color:var(--rust);font-weight:800;margin:0 0 12px">BU HAFTAKİ BÖLÜM</p>
      <h2 style="font-family:'Bebas Neue',var(--font-display);font-size:clamp(2.5rem,5vw,5rem);margin:0;line-height:.9">KULAKLĞINI TAK,<br><span style="color:var(--rust)">SOFRAYA OTUR</span></h2>
    </div>

    <!-- Son bölüm — büyük kart -->
    <div style="background:var(--cream-deep);border-radius:24px;overflow:hidden;display:grid;grid-template-columns:1.2fr 1fr;margin-bottom:32px" class="episode-main">
      <div style="position:relative;aspect-ratio:16/9;background:#000">
        <iframe
          src="https://www.youtube.com/embed/aK_btqNLtE0"
          title="Yine Olsa Yine Yapardım — Bölüm 84"
          frameborder="0"
          allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
          allowfullscreen
          style="width:100%;height:100%;position:absolute;top:0;left:0">
        </iframe>
      </div>
      <div style="padding:40px;display:flex;flex-direction:column;justify-content:center;gap:16px">
        <span style="font-size:.7rem;letter-spacing:.15em;color:var(--rust);font-weight:800">SON BÖLÜM</span>
        <h3 style="font-family:'Bebas Neue',var(--font-display);font-size:clamp(2rem,3vw,3rem);margin:0;line-height:.95">YİNE OLSA<br>YİNE YAPARDIM</h3>
        <p style="color:var(--ink-faint);font-size:.9rem;margin:0;line-height:1.6">Bölüm 84 · 42 dk</p>
        <a href="https://youtube.com/@demleme" target="_blank" rel="noopener"
          style="display:inline-flex;align-items:center;gap:8px;padding:12px 20px;background:var(--ink);color:var(--cream-fixed);border-radius:40px;font-weight:700;font-size:.85rem;text-decoration:none;width:fit-content">
          YouTube'da İzle
        </a>
      </div>
    </div>

    <!-- Eski bölümler şerit -->
    <p style="font-size:.7rem;letter-spacing:.15em;color:var(--ink-faint);font-weight:700;margin:0 0 20px">ESKİ BÖLÜMLER</p>
    <div style="display:flex;gap:16px;overflow-x:auto;padding-bottom:12px;scroll-snap-type:x mandatory" class="episodes-strip">

      <div style="flex:0 0 280px;scroll-snap-align:start;background:var(--cream-deep);border-radius:16px;overflow:hidden">
        <div style="position:relative;aspect-ratio:16/9;background:#000">
          <iframe src="https://www.youtube.com/embed/R_2epNt1xi4" title="Bölüm 83" frameborder="0" allowfullscreen style="width:100%;height:100%;position:absolute;top:0;left:0"></iframe>
        </div>
        <div style="padding:14px">
          <div style="font-weight:700;font-size:.85rem;margin-bottom:4px">Hangi İlin İnsanı Nasıl?</div>
          <div style="color:var(--ink-faint);font-size:.75rem">Bölüm 83 · 38 dk</div>
        </div>
      </div>

      <div style="flex:0 0 280px;scroll-snap-align:start;background:var(--cream-deep);border-radius:16px;overflow:hidden">
        <div style="position:relative;aspect-ratio:16/9;background:#000">
          <iframe src="https://www.youtube.com/embed/dsgQ1lz4hRU" title="Bölüm 82" frameborder="0" allowfullscreen style="width:100%;height:100%;position:absolute;top:0;left:0"></iframe>
        </div>
        <div style="padding:14px">
          <div style="font-weight:700;font-size:.85rem;margin-bottom:4px">Düğün Hazırlığı Zor İş</div>
          <div style="color:var(--ink-faint);font-size:.75rem">Bölüm 82 · 51 dk</div>
        </div>
      </div>

      <div style="flex:0 0 280px;scroll-snap-align:start;background:var(--cream-deep);border-radius:16px;overflow:hidden">
        <div style="position:relative;aspect-ratio:16/9;background:#000">
          <iframe src="https://www.youtube.com/embed/VIDEO_ID_3" title="Bölüm 81" frameborder="0" allowfullscreen style="width:100%;height:100%;position:absolute;top:0;left:0"></iframe>
        </div>
        <div style="padding:14px">
          <div style="font-weight:700;font-size:.85rem;margin-bottom:4px">Bölüm Başlığı</div>
          <div style="color:var(--ink-faint);font-size:.75rem">Bölüm 81 · — dk</div>
        </div>
      </div>

      <div style="flex:0 0 280px;scroll-snap-align:start;background:var(--cream-deep);border-radius:16px;overflow:hidden">
        <div style="position:relative;aspect-ratio:16/9;background:#000">
          <iframe src="https://www.youtube.com/embed/VIDEO_ID_4" title="Bölüm 80" frameborder="0" allowfullscreen style="width:100%;height:100%;position:absolute;top:0;left:0"></iframe>
        </div>
        <div style="padding:14px">
          <div style="font-weight:700;font-size:.85rem;margin-bottom:4px">Bölüm Başlığı</div>
          <div style="color:var(--ink-faint);font-size:.75rem">Bölüm 80 · — dk</div>
        </div>
      </div>

    </div>

  </div>
</section>

<!-- ═══════════════════════════════════════════════════════════ -->
<!-- 6. KONUKLAR                                                  -->
<!-- ═══════════════════════════════════════════════════════════ -->
<section id="konuklar" class="reveal-section" data-bg="bg-ink" style="background:var(--ink)">
  <div style="max-width:var(--wrap);margin:0 auto">

    <div style="margin-bottom:56px">
      <p style="font-size:.7rem;letter-spacing:.2em;color:rgba(243,238,225,.4);font-weight:800;margin:0 0 12px">SOFRADAKI KONUKLAR</p>
      <h2 style="font-family:'Bebas Neue',var(--font-display);font-size:clamp(2.5rem,5vw,5rem);margin:0;line-height:.9;color:var(--cream-fixed)">SOFRAYA<br>HERKES DAVETLİ</h2>
    </div>

    <div style="display:flex;gap:20px;overflow-x:auto;padding-bottom:12px;scroll-snap-type:x mandatory" class="guests-strip">

      ${[1,2,3,4,5,6].map(i => `
      <div style="flex:0 0 200px;scroll-snap-align:start;display:flex;flex-direction:column;align-items:center;gap:12px">
        <div style="width:140px;height:140px;border-radius:50%;background:rgba(243,238,225,.08);border:2px solid rgba(243,238,225,.12);display:flex;align-items:center;justify-content:center">
          <svg viewBox="0 0 40 40" fill="none" width="40" height="40">
            <circle cx="20" cy="16" r="8" stroke="rgba(243,238,225,.3)" stroke-width="1.5"/>
            <path d="M6 36c0-7.7 6.3-14 14-14s14 6.3 14 14" stroke="rgba(243,238,225,.3)" stroke-width="1.5"/>
          </svg>
        </div>
        <div style="text-align:center">
          <div style="color:var(--cream-fixed);font-weight:700;font-size:.9rem">Konuk ${i}</div>
          <div style="color:rgba(243,238,225,.4);font-size:.75rem">Bölüm ${85-i}</div>
        </div>
      </div>`).join('')}

    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════════════════════ -->
<!-- 7. ANKET                                                     -->
<!-- ═══════════════════════════════════════════════════════════ -->
<section id="anket" class="reveal-section" data-bg="bg-lav">
  <div style="max-width:600px;margin:0 auto;text-align:center;display:flex;flex-direction:column;gap:32px">

    <div>
      <p style="font-size:.7rem;letter-spacing:.2em;color:var(--rust);font-weight:800;margin:0 0 12px">SOFRA ANKETİ</p>
      <h2 style="font-family:'Bebas Neue',var(--font-display);font-size:clamp(2.5rem,5vw,4.5rem);margin:0;line-height:.9">BİR SONRAKI BÖLÜM<br>NE OLSUN?</h2>
    </div>

    <div style="display:flex;flex-direction:column;gap:12px" id="pollOptions">
      <button onclick="demlemeVote(this,'Yemek kültürü')" style="padding:16px 24px;border:1.5px solid var(--line);border-radius:40px;background:transparent;cursor:pointer;font-size:.95rem;font-weight:600;font-family:var(--font-body);text-align:left;display:flex;justify-content:space-between;align-items:center;transition:all .2s">
        Yemek kültürü <span class="poll-pct">—</span>
      </button>
      <button onclick="demlemeVote(this,'Çocukluk anıları')" style="padding:16px 24px;border:1.5px solid var(--line);border-radius:40px;background:transparent;cursor:pointer;font-size:.95rem;font-weight:600;font-family:var(--font-body);text-align:left;display:flex;justify-content:space-between;align-items:center;transition:all .2s">
        Çocukluk anıları <span class="poll-pct">—</span>
      </button>
      <button onclick="demlemeVote(this,'İş hayatı')" style="padding:16px 24px;border:1.5px solid var(--line);border-radius:40px;background:transparent;cursor:pointer;font-size:.95rem;font-weight:600;font-family:var(--font-body);text-align:left;display:flex;justify-content:space-between;align-items:center;transition:all .2s">
        İş hayatı <span class="poll-pct">—</span>
      </button>
      <button onclick="demlemeVote(this,'Aşk ve ilişkiler')" style="padding:16px 24px;border:1.5px solid var(--line);border-radius:40px;background:transparent;cursor:pointer;font-size:.95rem;font-weight:600;font-family:var(--font-body);text-align:left;display:flex;justify-content:space-between;align-items:center;transition:all .2s">
        Aşk ve ilişkiler <span class="poll-pct">—</span>
      </button>
    </div>

  </div>
</section>

<!-- ═══════════════════════════════════════════════════════════ -->
<!-- FOOTER                                                       -->
<!-- ═══════════════════════════════════════════════════════════ -->
<footer>
  <div class="footer-watermark parallax" data-speed="0.06"><div class="mk mk-sofra-rust"></div></div>
  <div class="footer-grid">
    <div class="footer-brand">
      <a href="#hero" class="footer-logo"><img class="footer-logo-img" src="/images/demleme-logo.png" alt="Demleme" width="150" height="24" style="height:52px;width:auto;object-fit:contain"></a>
      <p>İyi bir sohbet, iyi bir dünyaya katkı olsun.</p>
      <div class="footer-social">
        <a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube" title="YouTube">
          <img src="/images/yt-kirmizi.png" width="28" height="20" alt="YouTube" style="object-fit:contain">
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram" title="Instagram">
          <img src="/images/ig-beyaz.png" width="22" height="22" alt="Instagram" style="object-fit:contain">
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener" aria-label="TikTok" title="TikTok">
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/></svg>
        </a>
        <a href="https://open.spotify.com" target="_blank" rel="noopener" aria-label="Spotify" title="Spotify">
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.6 14.4c-.2.3-.6.4-.9.2-2.5-1.5-5.7-1.9-9.4-1-.4.1-.7-.1-.8-.5-.1-.4.1-.7.5-.8 4.1-.9 7.6-.5 10.4 1.1.3.2.4.6.2 1zm1.2-2.8c-.2.4-.7.5-1.1.3-2.9-1.8-7.2-2.3-10.6-1.2-.4.1-.9-.1-1-.5-.1-.4.1-.9.5-1 3.8-1.2 8.6-.6 11.9 1.4.4.2.5.7.3 1zm.1-2.8C14.4 8.9 8.8 8.7 5.6 9.7c-.5.2-1-.2-1.1-.7-.2-.5.2-1 .7-1.1 3.7-1.1 9.8-.9 13.6 1.4.5.3.6.9.3 1.4-.3.4-.9.6-1.3.3z"/></svg>
        </a>
        <a href="#" target="_blank" rel="noopener" aria-label="Podcast" title="Podcast">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="18" height="18"><circle cx="12" cy="11" r="4"/><path d="M12 15v4M8 19h8"/><path d="M5 11a7 7 0 0014 0" stroke-linecap="round"/></svg>
        </a>
      </div>
    </div>
    <div class="footer-col">
      <h5>Keşfet</h5>
      <ul>
        <li><a href="#hero">Ana Sayfa</a></li>
        <li><a href="#bu-hafta">YouTube</a></li>
        <li><a href="#demleyen">Hakkımızda</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>Mağaza</h5>
      <ul>
        <li><a href="/urunler">Tüm Ürünler</a></li>
        <li><a href="/urunler">Tişört</a></li>
        <li><a href="/urunler">Kupa</a></li>
        <li><a href="/urunler">Çay Seti</a></li>
        <li><a href="/urunler">Defter</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>Yardım</h5>
      <ul>
        <li><a href="#">Kargo &amp; Teslimat</a></li>
        <li><a href="#">İade &amp; Değişim</a></li>
        <li><a href="/iletisim">İletişim</a></li>
      </ul>
    </div>
    <div class="footer-app-card">
      <h4>Demleme. Her Yerde.</h4>
      <p>Uygulamamızı indir, içeriklere kolayca ulaş.</p>
      <div class="footer-app-btns">
        <a href="#" class="footer-app-btn"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v13m0 0l-4-4m4 4l4-4"/><path d="M5 21h14"/></svg> App Store</a>
        <a href="#" class="footer-app-btn"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v13m0 0l-4-4m4 4l4-4"/><path d="M5 21h14"/></svg> Google Play</a>
      </div>
      <div class="footer-app-deco" aria-hidden="true"><span></span></div>
    </div>
  </div>
  <div class="footer-bottom">
    <p class="footer-copy">© 2026 Demleme. Tüm hakları saklıdır.</p>
    <div class="footer-legal">
      <a href="#">KVKK</a>
      <a href="#">Kullanım Şartları</a>
      <a href="#">Gizlilik Politikası</a>
    </div>
  </div>
</footer>

<script>

// ══ SCROLL ANİMASYONLARI ══
(function(){
  // Color shift
  var colorSections = document.querySelectorAll('[data-bg]');
  var bodyEl = document.body;
  var allBgs = ['bg-cream','bg-cream-deep','bg-ink','bg-lav'];

  function updateBg(){
    var mid = window.scrollY + window.innerHeight * 0.45;
    var active = '';
    colorSections.forEach(function(s){
      var top = s.getBoundingClientRect().top + window.scrollY;
      if(top <= mid) active = s.getAttribute('data-bg') || '';
    });
    allBgs.forEach(function(c){ bodyEl.classList.remove(c); });
    if(active) bodyEl.classList.add(active);
  }
  window.addEventListener('scroll', updateBg, {passive:true});
  updateBg();

  // Tilt 3D
  document.querySelectorAll('.tilt-card').forEach(function(card){
    card.addEventListener('mousemove', function(e){
      var r = card.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5;
      var y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = 'perspective(500px) rotateY('+(x*14)+'deg) rotateX('+(-y*14)+'deg) scale(1.04)';
    });
    card.addEventListener('mouseleave', function(){
      card.style.transform = '';
    });
  });

  // IntersectionObserver — tüm animasyonlar
  var targets = document.querySelectorAll('.clip-reveal,.blur-in,.slide-left,.slide-right,.scale-up,.stagger,.reveal-section');
  var obs = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(!e.isIntersecting) return;
      var el = e.target;
      el.classList.add('in');
      if(el.classList.contains('reveal-section')) el.classList.add('visible');
      // stat-count
      el.querySelectorAll('.stat-count').forEach(function(cnt){
        var tgt = parseInt(cnt.getAttribute('data-target'));
        var dur = 1600, t0 = performance.now();
        (function tick(now){
          var p = Math.min((now-t0)/dur,1), ease = 1-Math.pow(1-p,3);
          cnt.textContent = Math.round(ease*tgt).toLocaleString('tr-TR');
          if(p<1) requestAnimationFrame(tick);
        })(t0);
      });
      obs.unobserve(el);
    });
  },{threshold:0.08, rootMargin:'0px 0px -20px 0px'});
  targets.forEach(function(el){ obs.observe(el); });
})();

// Hero giriş animasyonu
(function(){
  function runHero(){
    var els = document.querySelectorAll('.hero-anim');
    els.forEach(function(el, i){
      setTimeout(function(){ el.classList.add('visible'); }, 80 + i*140);
    });
  }
  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded', function(){ setTimeout(runHero, 100); });
  } else {
    setTimeout(runHero, 100);
  }
})();

// Scroll reveal
(function(){
  function revealSection(el){
    el.classList.add('visible');
    el.querySelectorAll('.stat-count').forEach(function(counter){
      var target = parseInt(counter.getAttribute('data-target'));
      var duration = 1600;
      var start = performance.now();
      function tick(now){
        var p = Math.min((now-start)/duration,1);
        var ease = 1-Math.pow(1-p,3);
        counter.textContent = Math.round(ease*target).toLocaleString('tr-TR');
        if(p<1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }

  var sections = document.querySelectorAll('.reveal-section');

  if('IntersectionObserver' in window){
    var obs = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){ revealSection(e.target); obs.unobserve(e.target); }
      });
    },{threshold:0.05, rootMargin:'0px 0px -40px 0px'});
    sections.forEach(function(s){ obs.observe(s); });
  } else {
    // Fallback: hepsini göster
    sections.forEach(function(s){ revealSection(s); });
  }
})();

// Anket
function demlemeVote(btn, choice){
  var btns = document.querySelectorAll('#pollOptions button');
  btns.forEach(function(b){ b.disabled=true; b.style.opacity='.5'; });
  btn.style.opacity='1';
  btn.style.background='var(--ink)';
  btn.style.color='var(--cream-fixed)';
  btn.style.borderColor='var(--ink)';
  btn.querySelector('.poll-pct').textContent = '✓';
}
</script>
`
        }}
      />
    </>
  );
}


