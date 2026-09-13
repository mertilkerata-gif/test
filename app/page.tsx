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
<section id="hero" style="min-height:100svh;display:flex;flex-direction:column;justify-content:center;position:relative;overflow:hidden;padding:100px var(--pad) 60px">

  <!-- Sol içerik -->
  <div style="max-width:var(--wrap);margin:0 auto;width:100%;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center" class="hero-2col">

    <div style="display:flex;flex-direction:column;gap:32px">

      <h1 style="font-family:'Bebas Neue',var(--font-display);font-size:clamp(5rem,10vw,11rem);line-height:0.88;margin:0;letter-spacing:-.01em">
        MASAYA<br><span style="color:var(--rust)">HOŞGELDİN</span>
      </h1>

      <p style="font-size:1.05rem;color:var(--ink-faint);max-width:420px;margin:0;line-height:1.6">
        Her hafta yeni bir sohbet, bir çay ve sofraya oturacak biri. Demleme'ye katıl.
      </p>

      <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center">
        <a href="https://youtube.com/@demleme" target="_blank" rel="noopener"
          style="display:inline-flex;align-items:center;gap:10px;padding:14px 24px;background:var(--ink);color:var(--cream-fixed);border-radius:40px;font-weight:700;font-size:.9rem;text-decoration:none;letter-spacing:.03em">
          <img src="/images/yt-kirmizi.png" width="22" height="16" alt="YT" style="object-fit:contain">
          YouTube'da İzle
        </a>
        <a href="/urunler"
          style="display:inline-flex;align-items:center;gap:10px;padding:14px 24px;border:2px solid var(--ink);color:var(--ink);border-radius:40px;font-weight:700;font-size:.9rem;text-decoration:none;letter-spacing:.03em">
          <img src="/images/sepet-ikonu.png" width="20" height="20" alt="Sepet" style="object-fit:contain">
          Mağaza
        </a>
      </div>

    </div>

    <!-- Sağ — animasyonlu çay -->
    <div style="display:flex;align-items:center;justify-content:center">
      <img src="/images/cay-animasyon.webp" alt="Çay animasyonu"
        style="width:100%;max-width:460px;object-fit:contain" />
    </div>

  </div>

  <!-- Aşağı kaydır ok -->
  <div style="position:absolute;bottom:32px;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:6px;opacity:.4">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
      <path d="M12 5v14M5 12l7 7 7-7"/>
    </svg>
  </div>

</section>

<!-- ═══════════════════════════════════════════════════════════ -->
<!-- 2. İSTATİSTİKLER — tam genişlik, scroll reveal             -->
<!-- ═══════════════════════════════════════════════════════════ -->
<section id="stats" class="reveal-section" style="width:100%;border-top:1px solid var(--line);border-bottom:1px solid var(--line);opacity:0;transform:translateY(30px);transition:opacity .8s ease,transform .8s ease">
  <div style="max-width:var(--wrap);margin:0 auto;display:grid;grid-template-columns:1fr 1fr 1fr;width:100%">

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
<section id="demleyen" class="reveal-section" style="padding:120px var(--pad);opacity:0;transform:translateY(30px);transition:opacity .8s ease,transform .8s ease">
  <div style="max-width:var(--wrap);margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center" class="two-col">

    <div>
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
<section id="shop" class="reveal-section" style="padding:120px var(--pad);background:var(--cream-deep);opacity:0;transform:translateY(30px);transition:opacity .8s ease,transform .8s ease">
  <div style="max-width:var(--wrap);margin:0 auto">

    <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:56px" class="sec-head">
      <div>
        <p style="font-size:.7rem;letter-spacing:.2em;color:var(--rust);font-weight:800;margin:0 0 12px">DEMLEME SHOP</p>
        <h2 style="font-family:'Bebas Neue',var(--font-display);font-size:clamp(2.5rem,4vw,4.5rem);margin:0;line-height:.9">SOFRADAN<br>GELİYOR</h2>
      </div>
      <a href="/urunler" style="font-weight:700;color:var(--ink);text-decoration:none;font-size:.85rem;letter-spacing:.05em">Tümünü Gör →</a>
    </div>

    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:20px" class="shop-grid">

      <!-- Ürün 1 -->
      <a href="/urunler/demleme-kupasi" style="text-decoration:none;color:inherit;background:var(--paper);border-radius:20px;overflow:hidden;display:flex;flex-direction:column">
        <div style="aspect-ratio:1;background:var(--cream);display:flex;align-items:center;justify-content:center;padding:24px">
          <img src="/images/demleme-kupasi.webp" alt="Demleme Kupası" style="width:100%;height:100%;object-fit:contain">
        </div>
        <div style="padding:16px">
          <div style="font-weight:700;font-size:.9rem;margin-bottom:4px">Demleme Kupası</div>
          <div style="color:var(--rust);font-weight:800;font-size:.95rem">₺290</div>
        </div>
      </a>

      <!-- Ürün 2 -->
      <a href="/urunler/sofra-tisortu" style="text-decoration:none;color:inherit;background:var(--paper);border-radius:20px;overflow:hidden;display:flex;flex-direction:column">
        <div style="aspect-ratio:1;background:var(--cream);display:flex;align-items:center;justify-content:center;padding:24px">
          <img src="/images/sofra-tisortu.webp" alt="Sofra Tişörtü" style="width:100%;height:100%;object-fit:contain">
        </div>
        <div style="padding:16px">
          <div style="font-weight:700;font-size:.9rem;margin-bottom:4px">Sofra Tişörtü</div>
          <div style="color:var(--rust);font-weight:800;font-size:.95rem">₺450</div>
        </div>
      </a>

      <!-- Ürün 3 -->
      <a href="/urunler/demleme-defteri" style="text-decoration:none;color:inherit;background:var(--paper);border-radius:20px;overflow:hidden;display:flex;flex-direction:column">
        <div style="aspect-ratio:1;background:var(--cream);display:flex;align-items:center;justify-content:center;padding:24px">
          <img src="/images/demleme-defteri.webp" alt="Demleme Defteri" style="width:100%;height:100%;object-fit:contain">
        </div>
        <div style="padding:16px">
          <div style="font-weight:700;font-size:.9rem;margin-bottom:4px">Demleme Defteri</div>
          <div style="color:var(--rust);font-weight:800;font-size:.95rem">₺180</div>
        </div>
      </a>

      <!-- Ürün 4 -->
      <a href="/urunler/mini-cay-seti" style="text-decoration:none;color:inherit;background:var(--paper);border-radius:20px;overflow:hidden;display:flex;flex-direction:column">
        <div style="aspect-ratio:1;background:var(--cream);display:flex;align-items:center;justify-content:center;padding:24px">
          <img src="/images/mini-cay-seti.webp" alt="Mini Çay Seti" style="width:100%;height:100%;object-fit:contain">
        </div>
        <div style="padding:16px">
          <div style="font-weight:700;font-size:.9rem;margin-bottom:4px">Mini Çay Seti</div>
          <div style="color:var(--rust);font-weight:800;font-size:.95rem">₺620</div>
        </div>
      </a>

      <!-- Ürün 5 -->
      <a href="/urunler/kupa-altligi-seti" style="text-decoration:none;color:inherit;background:var(--paper);border-radius:20px;overflow:hidden;display:flex;flex-direction:column">
        <div style="aspect-ratio:1;background:var(--cream);display:flex;align-items:center;justify-content:center;padding:24px">
          <img src="/images/kupa-altligi.webp" alt="Kupa Altlığı Seti" style="width:100%;height:100%;object-fit:contain">
        </div>
        <div style="padding:16px">
          <div style="font-weight:700;font-size:.9rem;margin-bottom:4px">Kupa Altlığı Seti</div>
          <div style="color:var(--rust);font-weight:800;font-size:.95rem">₺140</div>
        </div>
      </a>

      <!-- Ürün 6 -->
      <a href="/urunler/hediye-karti" style="text-decoration:none;color:inherit;background:var(--paper);border-radius:20px;overflow:hidden;display:flex;flex-direction:column">
        <div style="aspect-ratio:1;background:var(--cream);display:flex;align-items:center;justify-content:center;padding:24px">
          <img src="/images/hediye-karti.webp" alt="Hediye Kartı" style="width:100%;height:100%;object-fit:contain">
        </div>
        <div style="padding:16px">
          <div style="font-weight:700;font-size:.9rem;margin-bottom:4px">Hediye Kartı</div>
          <div style="color:var(--rust);font-weight:800;font-size:.95rem">₺100+</div>
        </div>
      </a>

      <!-- Ürün 7 -->
      <a href="/urunler/bolum-posteri" style="text-decoration:none;color:inherit;background:var(--paper);border-radius:20px;overflow:hidden;display:flex;flex-direction:column">
        <div style="aspect-ratio:1;background:var(--cream);display:flex;align-items:center;justify-content:center;padding:24px">
          <img src="/images/bolum-posteri.webp" alt="Bölüm Posteri" style="width:100%;height:100%;object-fit:contain">
        </div>
        <div style="padding:16px">
          <div style="font-weight:700;font-size:.9rem;margin-bottom:4px">Bölüm Posteri</div>
          <div style="color:var(--rust);font-weight:800;font-size:.95rem">₺120</div>
        </div>
      </a>

      <!-- Ürün 8 placeholder -->
      <a href="/urunler" style="text-decoration:none;color:inherit;background:var(--ink);border-radius:20px;overflow:hidden;display:flex;flex-direction:column;align-items:center;justify-content:center;aspect-ratio:auto;min-height:200px">
        <div style="color:var(--cream-fixed);font-family:'Bebas Neue',var(--font-display);font-size:1.8rem;text-align:center;padding:24px;line-height:1.1">TÜMÜNÜ<br>GÖR</div>
        <div style="color:rgba(243,238,225,.5);font-size:.8rem">→</div>
      </a>

    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════════════════════ -->
<!-- 5. BU HAFTAKİ BÖLÜM                                         -->
<!-- ═══════════════════════════════════════════════════════════ -->
<section id="bu-hafta" class="reveal-section" style="padding:120px var(--pad);opacity:0;transform:translateY(30px);transition:opacity .8s ease,transform .8s ease">
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
<section id="konuklar" class="reveal-section" style="padding:120px var(--pad);background:var(--ink);opacity:0;transform:translateY(30px);transition:opacity .8s ease,transform .8s ease">
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
<section id="anket" class="reveal-section" style="padding:120px var(--pad);opacity:0;transform:translateY(30px);transition:opacity .8s ease,transform .8s ease">
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
<footer style="padding:60px var(--pad);border-top:1px solid var(--line)">
  <div style="max-width:var(--wrap);margin:0 auto;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:24px">

    <div style="font-family:'Bebas Neue',var(--font-display);font-size:2rem;letter-spacing:.02em">DEMLEME</div>

    <div style="display:flex;gap:20px;align-items:center">
      <a href="https://youtube.com/@demleme" target="_blank" rel="noopener" aria-label="YouTube">
        <img src="/images/yt-kirmizi.png" width="28" height="20" alt="YouTube" style="object-fit:contain;opacity:.7">
      </a>
      <a href="https://instagram.com/demleme" target="_blank" rel="noopener" aria-label="Instagram">
        <img src="/images/ig-siyah.png" width="22" height="22" alt="Instagram" style="object-fit:contain;opacity:.7">
      </a>
      <a href="mailto:merhaba@demleme.com" aria-label="E-posta">
        <img src="/images/mail-ikonu.png" width="24" height="20" alt="Mail" style="object-fit:contain;opacity:.7">
      </a>
    </div>

    <div style="font-size:.8rem;color:var(--ink-faint)">© 2025 Demleme</div>

  </div>
</footer>

<script>
// Scroll reveal
(function(){
  var sections = document.querySelectorAll('.reveal-section');
  var obs = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){
        e.target.style.opacity='1';
        e.target.style.transform='translateY(0)';
        // Sayaç animasyonu
        e.target.querySelectorAll('.stat-count').forEach(function(el){
          var target = parseInt(el.getAttribute('data-target'));
          var duration = 1600;
          var start = performance.now();
          function tick(now){
            var p = Math.min((now-start)/duration,1);
            var ease = 1-Math.pow(1-p,3);
            el.textContent = Math.round(ease*target).toLocaleString('tr-TR');
            if(p<1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        });
        obs.unobserve(e.target);
      }
    });
  },{threshold:0.15});
  sections.forEach(function(s){ obs.observe(s); });
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
