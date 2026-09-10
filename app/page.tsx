import type { Metadata } from 'next';
import NavBar from '@/app/components/NavBar';

export const metadata: Metadata = {
  title: 'Demleme — İyi Bir Sohbet, Zamanla Demlenir.',
  description: 'Demleme; sohbetin, çayın ve hikâyenin yavaş yavaş demlendiği bir masa.',
};

export default function Home() {
  return (
    <>
      <NavBar />
      <div
        dangerouslySetInnerHTML={{
        __html: `<div class="ticker-bar" aria-hidden="true">
  <div class="ticker-track">
    <span class="ticker-item">DEMLEME</span>
    <span class="ticker-item">YENİ BÖLÜM HER HAFTA</span>
    <span class="ticker-item">SOFRAYA HERKES DAVETLİ</span>
    <span class="ticker-item ticker-clock">SAAT --:--</span>
    <span class="ticker-item ticker-countdown">ÇAY SAATİ HESAPLANIYOR…</span>
    <span class="ticker-item">DEMLEME</span>
    <span class="ticker-item">YENİ BÖLÜM HER HAFTA</span>
    <span class="ticker-item">SOFRAYA HERKES DAVETLİ</span>
    <span class="ticker-item ticker-clock">SAAT --:--</span>
    <span class="ticker-item ticker-countdown">ÇAY SAATİ HESAPLANIYOR…</span>
  </div>
</div>

<!-- ============================================================ -->
<section class="hero" id="hero">
  <!-- Parallax blobs -->
  <div class="section-blob" style="width:480px;height:480px;top:-180px;right:-140px;background:radial-gradient(circle,var(--butter) 0%,transparent 72%);position:absolute;pointer-events:none" aria-hidden="true"></div>
  <div class="section-blob" style="width:360px;height:360px;bottom:-160px;left:-120px;background:radial-gradient(circle,var(--lav) 0%,transparent 72%);opacity:.3;position:absolute;pointer-events:none" aria-hidden="true"></div>

  <div>

    <!-- ÜSTTE LIVE BADGE -->
    <div class="hero-anim-badge" style="margin-bottom:24px">
      <span class="hero-live-badge"><span class="hero-live-dot"></span>Yeni Bölüm Bugün Yayında</span>
    </div>

    <!-- 3 KOLON GRID -->
    <div class="hero-new-grid">

      <!-- SOL: Başlık + İstatistikler + CTA -->
      <div class="hero-head reveal" data-intro-linked style="display:flex;flex-direction:column;gap:20px">
        <a href="/" class="hero-anim-logo" style="display:block;text-decoration:none;margin-bottom:4px">
          <img src="/images/demleme-logo.png" alt="Demleme" style="height:36px;width:auto" />
        </a>
        <p class="hero-anim-eyebrow" style="font-size:.72rem;letter-spacing:.18em;color:var(--rust);margin:0;font-weight:700">HAFTALIK SOHBET SOFRASI</p>

        <h1 class="hero-cycle-head hero-anim-h1" style="font-family:var(--font-display);font-size:clamp(3rem,5vw,5.5rem);line-height:1.1;margin:0" aria-label="İyi bir çay zamanla demlenir.">
          <span class="typewriter-line" id="tw-line1" style="display:block;min-height:1.1em"></span>
          <span class="typewriter-line" id="tw-line2" style="display:block;color:var(--lav-deep);font-family:'Caveat',cursive;font-size:clamp(3.5rem,6vw,6rem);min-height:1.1em"></span>
          <span class="typewriter-line" id="tw-line3" style="display:block;min-height:1.1em"></span>
        </h1>

        <!-- İstatistikler -->
        <div class="hero-anim-stats" style="display:flex;flex-direction:column;gap:10px;padding:20px;background:var(--paper);border-radius:16px;box-shadow:var(--shadow-sm)">
          <div style="display:flex;align-items:center;gap:12px">
            <span style="font-family:var(--font-display);font-size:2rem;font-weight:700;color:var(--rust);line-height:1">12.000+</span>
            <span style="font-size:.85rem;color:var(--ink-soft)">dinleyen</span>
          </div>
          <div style="height:1px;background:var(--line)"></div>
          <div style="display:flex;align-items:center;gap:12px">
            <span style="font-family:var(--font-display);font-size:2rem;font-weight:700;color:var(--green);line-height:1">84</span>
            <span style="font-size:.85rem;color:var(--ink-soft)">bölüm yayında</span>
          </div>
          <div style="height:1px;background:var(--line)"></div>
          <div style="display:flex;align-items:center;gap:12px">
            <span style="font-family:var(--font-display);font-size:2rem;font-weight:700;color:var(--lav-deep);line-height:1">200+</span>
            <span style="font-size:.85rem;color:var(--ink-soft)">topluluk üyesi</span>
          </div>
        </div>


        <!-- Demlenme animasyonu - sol kolonda, mobilde de görünür -->
        <div style="display:flex;align-items:center;gap:14px;padding:12px 16px;background:var(--cream-deep);border-radius:16px;">
          <svg viewBox="0 0 80 100" width="56" height="70" style="flex-shrink:0">
            <defs>
              <linearGradient id="tg2" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stop-color="#c0392b"/>
                <stop offset="100%" stop-color="#e74c3c" stop-opacity="0.5"/>
              </linearGradient>
            </defs>
            <path d="M28 12 Q30 6 32 12 Q34 18 36 12" fill="none" stroke="var(--ink)" stroke-width="1.5" stroke-linecap="round" opacity="0.4">
              <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite"/>
            </path>
            <path d="M42 8 Q44 2 46 8 Q48 14 50 8" fill="none" stroke="var(--ink)" stroke-width="1.5" stroke-linecap="round" opacity="0.3">
              <animate attributeName="opacity" values="0.3;0;0.3" dur="2.5s" repeatCount="indefinite"/>
            </path>
            <path d="M18 18 Q15 55 17 82 L63 82 Q65 55 62 18 Z" fill="white" stroke="var(--ink)" stroke-width="2" stroke-linecap="round"/>
            <clipPath id="cup2"><path d="M18 18 Q15 55 17 82 L63 82 Q65 55 62 18 Z"/></clipPath>
            <rect x="16" y="18" width="48" height="65" fill="url(#tg2)" clip-path="url(#cup2)">
              <animate attributeName="y" values="80;40" dur="3s" repeatCount="indefinite"/>
              <animate attributeName="height" values="4;44" dur="3s" repeatCount="indefinite"/>
            </rect>
            <ellipse cx="40" cy="84" rx="28" ry="5" fill="none" stroke="var(--ink)" stroke-width="2"/>
          </svg>
          <div>
            <p style="margin:0;font-size:.72rem;color:var(--rust);font-weight:700;letter-spacing:.06em">ŞU AN</p>
            <p style="margin:0;font-size:.9rem;font-weight:600;color:var(--ink)">demleniyor...</p>
          </div>
        </div>

        <!-- CTAs -->
        <div style="display:flex;gap:12px;flex-wrap:wrap">
          <a href="#videos" class="btn btn-ink" style="display:inline-flex;align-items:center;gap:8px">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M8 5v14l11-7z"/></svg>
            Son Bölümü İzle
          </a>
          <a href="/urunler" class="btn btn-outline">Mağazayı Gez</a>
        </div>

        <!-- Follow -->
        <div class="hero-follow">
          <div class="hero-follow-avatars">
            <div class="avatar" style="background:var(--rust)">SB</div>
            <div class="avatar" style="background:var(--green)">EK</div>
            <div class="avatar" style="background:var(--lav-deep)">MY</div>
            <div class="avatar" style="background:var(--teal)">+</div>
          </div>
          <div class="hero-follow-text">12.000+ dinleyen<span>topluluğa katıl</span></div>
        </div>
      </div>

      <!-- ORTA: Çay figürü (daire) -->
      <div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding-top:20px">
        <div style="width:260px;height:260px;border-radius:50%;background:var(--cream-deep);display:flex;align-items:center;justify-content:center;position:relative;box-shadow:0 8px 40px rgba(0,0,0,.08);flex-shrink:0">
          <img src="/images/cay-icon-blue.jpeg" alt="Çay figürü" style="width:60%;height:60%;object-fit:contain;mix-blend-mode:multiply" />
          <!-- Floating yeşil ikon -->
          <div style="position:absolute;top:-12px;right:-12px;width:60px;height:60px;border-radius:50%;background:var(--butter);display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(0,0,0,.12)">
            <img src="/images/cay-icon-green.jpeg" alt="" style="width:55%;height:55%;object-fit:contain;mix-blend-mode:multiply" />
          </div>
        </div>
      </div>

      <!-- SAĞ: Çay içen figür + demlenme animasyonu + sofra -->
      <div style="display:flex;flex-direction:column;align-items:center;gap:20px;padding-top:20px">
        <img src="/images/cay-icen-figur.png" alt="Çay içen figür" style="width:200px;height:200px;object-fit:contain" />
        <!-- Demlenme bardağı SVG -->
        <div style="display:flex;flex-direction:column;align-items:center;gap:8px">
          <svg viewBox="0 0 80 100" width="80" height="100">
            <defs>
              <linearGradient id="tg" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stop-color="#c0392b"/>
                <stop offset="100%" stop-color="#e74c3c" stop-opacity="0.5"/>
              </linearGradient>
            </defs>
            <!-- buhar -->
            <path d="M28 12 Q30 6 32 12 Q34 18 36 12" fill="none" stroke="var(--ink)" stroke-width="1.5" stroke-linecap="round" opacity="0.4">
              <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite"/>
            </path>
            <path d="M42 8 Q44 2 46 8 Q48 14 50 8" fill="none" stroke="var(--ink)" stroke-width="1.5" stroke-linecap="round" opacity="0.3">
              <animate attributeName="opacity" values="0.3;0;0.3" dur="2.5s" repeatCount="indefinite"/>
            </path>
            <!-- bardak -->
            <path d="M18 18 Q15 55 17 82 L63 82 Q65 55 62 18 Z" fill="white" stroke="var(--ink)" stroke-width="2" stroke-linecap="round"/>
            <!-- çay dolumu -->
            <clipPath id="cup"><path d="M18 18 Q15 55 17 82 L63 82 Q65 55 62 18 Z"/></clipPath>
            <rect x="16" y="18" width="48" height="65" fill="url(#tg)" clip-path="url(#cup)">
              <animate attributeName="y" values="80;40" dur="3s" repeatCount="indefinite"/>
              <animate attributeName="height" values="4;44" dur="3s" repeatCount="indefinite"/>
            </rect>
            <!-- tabak -->
            <ellipse cx="40" cy="84" rx="28" ry="5" fill="none" stroke="var(--ink)" stroke-width="2"/>
          </svg>
          <p style="font-size:.78rem;color:var(--ink-soft);margin:0">demleniyor...</p>
        </div>
        <!-- Sofra ikonu -->
        <div style="background:var(--lav);border-radius:16px;padding:14px;display:flex;align-items:center;justify-content:center">
          <img src="/images/sofra-blue.png" alt="Sofra" style="width:100px;height:auto;mix-blend-mode:multiply" />
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============================================================ -->
<!-- AUTO-ROTATING HIGHLIGHTS (videos + shop, otomatik dönen şerit) -->
<section class="highlights-sec" id="videos">
  <div class="highlights-head reveal">
    <span class="sec-num" aria-hidden="true">01</span>
    <div class="highlights-head-text">
      <p class="eyebrow">Öne Çıkanlar</p>
      <h2 class="split-heading">Videolar ve ürünler bir arada</h2>
    </div>
    <button type="button" class="sec-link" id="archiveBtn">Tümünü Gör
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
    </button>
    <div class="highlights-photo parallax" data-speed="0.32" style="background-image:url(/images/sofra-green.png);background-size:contain;background-repeat:no-repeat;background-position:center" aria-hidden="true"></div>
    <div class="highlights-nav-btns">
      <button class="btn-circle" id="highlightsPrev" aria-label="Önceki"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 6l-6 6 6 6"/></svg></button>
      <button class="btn-circle" id="highlightsNext" aria-label="Sonraki"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6l6 6-6 6"/></svg></button>
    </div>
  </div>
  <div class="highlights-track-wrap">
    <div class="highlights-track" id="highlightsTrack">
      <div class="highlight-card video" data-yt="aK_btqNLtE0">
        <div class="highlight-thumb" style="background-image:url(/images/ep2.png);background-size:cover;background-position:center">
<span class="highlight-tag">Video</span>
          <a class="highlight-yt-btn" href="#" target="_blank" rel="noopener" aria-label="YouTube’da izle" onclick="event.stopPropagation()"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31 31 0 000 12a31 31 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31 31 0 0024 12a31 31 0 00-.5-5.8zM9.6 15.5V8.5L15.8 12z"/></svg></a>
          <div class="highlight-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div>
          <span class="highlight-dur">42:17</span>
        </div>
        <div class="highlight-meta"><b>Yine Olsa Yine Yapardım</b><span>Bölüm 84</span></div>
      </div>
      <div class="highlight-card product">
        <div class="highlight-thumb" style="background:var(--cream-deep)">
          <svg class="highlight-scene" viewBox="0 0 300 225" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <rect width="300" height="225" fill="var(--cream-deep)"/>
            <ellipse cx="150" cy="205" rx="210" ry="65" fill="var(--butter)" opacity=".16"/>
            <ellipse cx="150" cy="178" rx="150" ry="48" fill="var(--paper)" opacity=".6"/>
            <ellipse cx="150" cy="178" rx="124" ry="38" fill="none" stroke="var(--rust)" stroke-width="1.4" stroke-dasharray="2 7" opacity=".35"/>
            <ellipse cx="150" cy="184" rx="42" ry="8" fill="var(--ink-fixed)" opacity=".15"/>
            <path d="M114 104h64v44a18 18 0 01-18 18h-28a18 18 0 01-18-18v-44z" fill="var(--rust)"/>
            <path d="M114 104h64v10h-64z" fill="var(--rust-deep)"/>
            <path d="M178 114h9a12 12 0 010 24h-9" fill="none" stroke="var(--rust)" stroke-width="6"/>
            <path d="M128 96c-4-6 4-10 0-16" fill="none" stroke="var(--ink-faint)" stroke-width="2.2" stroke-linecap="round" opacity=".5"/>
            <path d="M148 96c-4-6 4-10 0-16" fill="none" stroke="var(--ink-faint)" stroke-width="2" stroke-linecap="round" opacity=".4"/>
          </svg>
          <span class="highlight-tag alt">Ürün</span>
        </div>
        <div class="highlight-meta"><b>Demleme Kupası</b><span>₺290</span></div>
      </div>
      <div class="highlight-card video" data-yt="R_2epNt1xi4">
        <div class="highlight-thumb" style="background-image:url(/images/ep4.png);background-size:cover;background-position:center">
<span class="highlight-tag">Video</span>
          <a class="highlight-yt-btn" href="#" target="_blank" rel="noopener" aria-label="YouTube’da izle" onclick="event.stopPropagation()"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31 31 0 000 12a31 31 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31 31 0 0024 12a31 31 0 00-.5-5.8zM9.6 15.5V8.5L15.8 12z"/></svg></a>
          <div class="highlight-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div>
          <span class="highlight-dur">38:05</span>
        </div>
        <div class="highlight-meta"><b>Hangi İlin İnsanı Nasıl?</b><span>Bölüm 83</span></div>
      </div>
      <div class="highlight-card product">
        <div class="highlight-thumb" style="background:var(--cream-deep)">
          <svg class="highlight-scene" viewBox="0 0 300 225" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <rect width="300" height="225" fill="var(--cream-deep)"/>
            <ellipse cx="150" cy="205" rx="210" ry="65" fill="var(--lav)" opacity=".2"/>
            <ellipse cx="150" cy="178" rx="150" ry="48" fill="var(--paper)" opacity=".6"/>
            <ellipse cx="150" cy="178" rx="124" ry="38" fill="none" stroke="var(--lav-deep)" stroke-width="1.4" stroke-dasharray="2 7" opacity=".35"/>
            <ellipse cx="150" cy="184" rx="46" ry="9" fill="var(--ink-fixed)" opacity=".15"/>
            <path d="M118 96l20-10h24l20 10 16 20-14 12-8-6v56a6 6 0 01-6 6h-40a6 6 0 01-6-6v-56l-8 6-14-12z" fill="var(--lav-deep)"/>
            <circle cx="150" cy="140" r="14" fill="var(--cream-fixed)" opacity=".9"/>
            <path d="M144 136h12v8a6 6 0 01-6 6 6 6 0 01-6-6z" fill="var(--rust)"/>
          </svg>
          <span class="highlight-tag alt">Ürün</span>
        </div>
        <div class="highlight-meta"><b>Sofra Tişörtü</b><span>₺450</span></div>
      </div>
      <div class="highlight-card video" data-yt="dsgQ1lz4hRU">
        <div class="highlight-thumb" style="background-image:url(/images/ep1.png);background-size:cover;background-position:center">
<span class="highlight-tag">Video</span>
          <a class="highlight-yt-btn" href="#" target="_blank" rel="noopener" aria-label="YouTube’da izle" onclick="event.stopPropagation()"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31 31 0 000 12a31 31 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31 31 0 0024 12a31 31 0 00-.5-5.8zM9.6 15.5V8.5L15.8 12z"/></svg></a>
          <div class="highlight-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div>
          <span class="highlight-dur">51:33</span>
        </div>
        <div class="highlight-meta"><b>Düğün Hazırlığı Zor İş</b><span>Bölüm 82</span></div>
      </div>
      <div class="highlight-card product">
        <div class="highlight-thumb" style="background:var(--cream-deep)">
          <svg class="highlight-scene" viewBox="0 0 300 225" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <rect width="300" height="225" fill="var(--cream-deep)"/>
            <ellipse cx="150" cy="205" rx="210" ry="65" fill="var(--green)" opacity=".16"/>
            <ellipse cx="150" cy="178" rx="150" ry="48" fill="var(--paper)" opacity=".6"/>
            <ellipse cx="150" cy="178" rx="124" ry="38" fill="none" stroke="var(--green-deep)" stroke-width="1.4" stroke-dasharray="2 7" opacity=".35"/>
            <ellipse cx="126" cy="184" rx="40" ry="8" fill="var(--ink-fixed)" opacity=".15"/>
            <path d="M100 130a26 20 0 0152 0v14a20 16 0 01-52 0z" fill="var(--green-deep)"/>
            <path d="M96 138 L74 130" fill="none" stroke="var(--green-deep)" stroke-width="6" stroke-linecap="round"/>
            <path d="M150 136h14a10 10 0 010 20h-14" fill="none" stroke="var(--green-deep)" stroke-width="6"/>
            <ellipse cx="126" cy="120" rx="22" ry="6" fill="var(--butter)"/>
            <ellipse cx="206" cy="188" rx="24" ry="6" fill="var(--ink-fixed)" opacity=".14"/>
            <path d="M194 160h24v14a12 12 0 01-12 12 12 12 0 01-12-12z" fill="var(--rust)"/>
          </svg>
          <span class="highlight-tag alt">Ürün</span>
        </div>
        <div class="highlight-meta"><b>Mini Çay Seti</b><span>₺620</span></div>
      </div>
    </div>
  </div>
</section>



<!-- ============================================================ -->
<section class="shop-sec" id="shop">
  <div class="section-blob parallax" data-speed="0.08" style="width:420px;height:420px;bottom:-140px;left:-110px;background:radial-gradient(circle,var(--butter) 0%,transparent 72%);opacity:.16" aria-hidden="true"></div>
  <div class="sec-head reveal">
    <span class="sec-num" aria-hidden="true">06</span>
    <div>
      <p class="eyebrow">Mağaza</p>
      <h2 class="split-heading">Demleme Shop</h2>
    </div>
    <a href="#" class="sec-link">Hepsini Gör
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
    </a>
  </div>
  <div class="shop-row-wrap">
    <div class="shop-track" id="shopTrack">
      <div class="product-card reveal" data-slug="demleme-kupasi" style="cursor:pointer">
        <button class="fav-btn" data-fav-id="p1" aria-label="Favorilere ekle" type="button"><svg viewBox="0 0 24 24"><path d="M12 20s-7-4.35-9.5-8.5C.7 8 2 4.5 5.5 4 8 3.6 10 5 12 7.5 14 5 16 3.6 18.5 4 22 4.5 23.3 8 21.5 11.5 19 15.65 12 20 12 20z"/></svg></button>
        <div class="product-photo zoomable" style="background:var(--cream-deep)">
          <span class="limited-badge">Sınırlı Üretim</span>
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:72px;height:72px">
  <path d="M22 30 Q20 54 22 66 L58 66 Q60 54 58 30 Z" fill="#b5451b" opacity="0.15" stroke="#b5451b" stroke-width="2" stroke-linejoin="round"/>
  <path d="M58 38 L64 38 Q72 38 72 48 Q72 58 64 58 L58 58" stroke="#b5451b" stroke-width="2" stroke-linecap="round"/>
  <path d="M22 30 L58 30" stroke="#b5451b" stroke-width="2" stroke-linecap="round"/>
  <path d="M30 20 Q31 14 34 18 Q37 22 38 16" stroke="#b5451b" stroke-width="1.8" stroke-linecap="round" fill="none" opacity="0.5"/>
  <path d="M42 18 Q43 12 46 16 Q49 20 50 14" stroke="#b5451b" stroke-width="1.8" stroke-linecap="round" fill="none" opacity="0.5"/>
</svg>
        </div>
        <p class="product-name">Demleme Kupası</p>
        <p class="product-price">₺290</p>
        <div class="stock-bar-wrap">
          <div class="stock-bar"><i style="width:27%"></i></div>
          <span class="stock-note">Stokta son 27 adet</span>
        </div>
      </div>
      <div class="product-card reveal" data-slug="sofra-tisortu" style="cursor:pointer">
        <button class="fav-btn" data-fav-id="p2" aria-label="Favorilere ekle" type="button"><svg viewBox="0 0 24 24"><path d="M12 20s-7-4.35-9.5-8.5C.7 8 2 4.5 5.5 4 8 3.6 10 5 12 7.5 14 5 16 3.6 18.5 4 22 4.5 23.3 8 21.5 11.5 19 15.65 12 20 12 20z"/></svg></button>
        <div class="product-photo zoomable" style="background:var(--cream-deep)">
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:72px;height:72px">
  <path d="M28 14 L52 14 C56 14 62 18 65 24 L72 28 L64 38 L58 34 L58 66 L22 66 L22 34 L16 38 L8 28 L15 24 C18 18 24 14 28 14 Z" fill="#5b3a8c" opacity="0.12" stroke="#5b3a8c" stroke-width="2" stroke-linejoin="round"/>
  <path d="M28 14 Q30 22 40 22 Q50 22 52 14" stroke="#5b3a8c" stroke-width="1.8" fill="none" stroke-linecap="round"/>
</svg>
        </div>
        <p class="product-name">Sofra Tişörtü</p>
        <p class="product-price">₺450</p>
      </div>
      <div class="product-card reveal" data-slug="demleme-defteri" style="cursor:pointer">
        <button class="fav-btn" data-fav-id="p3" aria-label="Favorilere ekle" type="button"><svg viewBox="0 0 24 24"><path d="M12 20s-7-4.35-9.5-8.5C.7 8 2 4.5 5.5 4 8 3.6 10 5 12 7.5 14 5 16 3.6 18.5 4 22 4.5 23.3 8 21.5 11.5 19 15.65 12 20 12 20z"/></svg></button>
        <div class="product-photo zoomable" style="background:var(--cream-deep)">
          <span class="product-tag">Yeni</span>
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:72px;height:72px">
  <rect x="18" y="10" width="44" height="58" rx="4" fill="#2a7a4b" opacity="0.1" stroke="#2a7a4b" stroke-width="2"/>
  <rect x="14" y="10" width="8" height="58" rx="3" fill="#2a7a4b" opacity="0.25" stroke="#2a7a4b" stroke-width="1.5"/>
  <line x1="28" y1="24" x2="54" y2="24" stroke="#2a7a4b" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>
  <line x1="28" y1="32" x2="54" y2="32" stroke="#2a7a4b" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>
  <line x1="28" y1="40" x2="44" y2="40" stroke="#2a7a4b" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>
  <path d="M52 58 L62 48 L66 52 L56 62 Z" fill="#2a7a4b" opacity="0.5"/>
</svg>
        </div>
        <p class="product-name">Demleme Defteri</p>
        <p class="product-price">₺180</p>
      </div>
      <div class="product-card reveal" data-slug="mini-cay-seti" style="cursor:pointer">
        <button class="fav-btn" data-fav-id="p4" aria-label="Favorilere ekle" type="button"><svg viewBox="0 0 24 24"><path d="M12 20s-7-4.35-9.5-8.5C.7 8 2 4.5 5.5 4 8 3.6 10 5 12 7.5 14 5 16 3.6 18.5 4 22 4.5 23.3 8 21.5 11.5 19 15.65 12 20 12 20z"/></svg></button>
        <div class="product-photo zoomable" style="background:var(--cream-deep)">
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:72px;height:72px">
  <path d="M20 28 Q18 50 20 62 L52 62 Q54 50 52 28 Z" fill="#9a6f1a" opacity="0.12" stroke="#9a6f1a" stroke-width="2" stroke-linejoin="round"/>
  <path d="M52 36 L58 35 Q67 34 67 45 Q67 56 58 55 L52 54" stroke="#9a6f1a" stroke-width="2" stroke-linecap="round"/>
  <ellipse cx="36" cy="28" rx="12" ry="3.5" fill="#9a6f1a" opacity="0.2" stroke="#9a6f1a" stroke-width="1.5"/>
  <path d="M30 16 Q31 11 33 14 Q35 18 37 13" stroke="#9a6f1a" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.45"/>
  <circle cx="61" cy="68" r="6" fill="#9a6f1a" opacity="0.12" stroke="#9a6f1a" stroke-width="1.5"/>
  <circle cx="72" cy="68" r="6" fill="#9a6f1a" opacity="0.12" stroke="#9a6f1a" stroke-width="1.5"/>
</svg>
        </div>
        <p class="product-name">Mini Çay Seti</p>
        <p class="product-price">₺620</p>
      </div>
      <div class="product-card reveal" data-slug="bolum-posteri" style="cursor:pointer">
        <button class="fav-btn" data-fav-id="p5" aria-label="Favorilere ekle" type="button"><svg viewBox="0 0 24 24"><path d="M12 20s-7-4.35-9.5-8.5C.7 8 2 4.5 5.5 4 8 3.6 10 5 12 7.5 14 5 16 3.6 18.5 4 22 4.5 23.3 8 21.5 11.5 19 15.65 12 20 12 20z"/></svg></button>
        <div class="product-photo zoomable" style="background:var(--cream-deep)">
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:72px;height:72px">
  <rect x="14" y="8" width="52" height="64" rx="3" fill="#1a6e6e" opacity="0.1" stroke="#1a6e6e" stroke-width="2"/>
  <rect x="20" y="14" width="40" height="26" rx="2" fill="#1a6e6e" opacity="0.18" stroke="#1a6e6e" stroke-width="1.5"/>
  <circle cx="30" cy="24" r="5" fill="#1a6e6e" opacity="0.3"/>
  <path d="M26 36 L36 24 L44 32 L50 26 L60 36 Z" fill="#1a6e6e" opacity="0.25"/>
  <line x1="20" y1="48" x2="60" y2="48" stroke="#1a6e6e" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
  <line x1="20" y1="56" x2="48" y2="56" stroke="#1a6e6e" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
</svg>
        </div>
        <p class="product-name">Bölüm Posteri</p>
        <p class="product-price">₺220</p>
      </div>
      <div class="product-card reveal" data-slug="kupa-altligi-seti" style="cursor:pointer">
        <button class="fav-btn" data-fav-id="p6" aria-label="Favorilere ekle" type="button"><svg viewBox="0 0 24 24"><path d="M12 20s-7-4.35-9.5-8.5C.7 8 2 4.5 5.5 4 8 3.6 10 5 12 7.5 14 5 16 3.6 18.5 4 22 4.5 23.3 8 21.5 11.5 19 15.65 12 20 12 20z"/></svg></button>
        <div class="product-photo zoomable" style="background:var(--cream-deep)">
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:72px;height:72px">
  <rect x="10" y="10" width="26" height="26" rx="5" fill="#1c4f7a" opacity="0.15" stroke="#1c4f7a" stroke-width="1.8"/>
  <rect x="44" y="10" width="26" height="26" rx="5" fill="#1c4f7a" opacity="0.15" stroke="#1c4f7a" stroke-width="1.8"/>
  <rect x="10" y="44" width="26" height="26" rx="5" fill="#1c4f7a" opacity="0.15" stroke="#1c4f7a" stroke-width="1.8"/>
  <rect x="44" y="44" width="26" height="26" rx="5" fill="#1c4f7a" opacity="0.15" stroke="#1c4f7a" stroke-width="1.8"/>
  <circle cx="23" cy="23" r="5" fill="#1c4f7a" opacity="0.35"/>
  <circle cx="57" cy="23" r="5" fill="#1c4f7a" opacity="0.35"/>
  <circle cx="23" cy="57" r="5" fill="#1c4f7a" opacity="0.35"/>
  <circle cx="57" cy="57" r="5" fill="#1c4f7a" opacity="0.35"/>
</svg>
        </div>
        <p class="product-name">Kupa Altlığı Seti</p>
        <p class="product-price">₺140</p>
      </div>
      <div class="product-card reveal" data-slug="hediye-karti" style="cursor:pointer">
        <button class="fav-btn" data-fav-id="p7" aria-label="Favorilere ekle" type="button"><svg viewBox="0 0 24 24"><path d="M12 20s-7-4.35-9.5-8.5C.7 8 2 4.5 5.5 4 8 3.6 10 5 12 7.5 14 5 16 3.6 18.5 4 22 4.5 23.3 8 21.5 11.5 19 15.65 12 20 12 20z"/></svg></button>
        <div class="product-photo zoomable" style="background:var(--cream-deep)">
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:72px;height:72px">
  <rect x="8" y="22" width="64" height="40" rx="6" fill="#6b3080" opacity="0.1" stroke="#6b3080" stroke-width="2"/>
  <line x1="8" y1="36" x2="72" y2="36" stroke="#6b3080" stroke-width="1.8" opacity="0.4"/>
  <path d="M40 22 L40 16 Q40 10 34 10 Q28 10 28 16 Q28 22 34 22 Z" fill="#6b3080" opacity="0.2" stroke="#6b3080" stroke-width="1.5"/>
  <path d="M40 22 L40 16 Q40 10 46 10 Q52 10 52 16 Q52 22 46 22 Z" fill="#6b3080" opacity="0.2" stroke="#6b3080" stroke-width="1.5"/>
  <rect x="18" y="47" width="20" height="6" rx="3" fill="#6b3080" opacity="0.25"/>
  <rect x="18" y="56" width="32" height="4" rx="2" fill="#6b3080" opacity="0.15"/>
</svg>
        </div>
        <p class="product-name">Hediye Kartı</p>
        <p class="product-price">₺200 – ₺1000</p>
      </div>
    </div>
    <div class="shop-nav-btns">
      <button class="btn-circle" id="shopPrev" aria-label="Önceki"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 6l-6 6 6 6"/></svg></button>
      <button class="btn-circle" id="shopNext" aria-label="Sonraki"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6l6 6-6 6"/></svg></button>
    </div>
  </div>
</section>

<!-- ============================================================ -->
<section class="benkimim-sec" id="benkimim">
  <div class="benkimim-grid">
    <div class="benkimim-photo-wrap reveal-scale">
      <div class="mk mk-icon-green benkimim-mark-float f1 parallax" data-speed="0.11"></div>
      <div class="benkimim-photo"><img src="/images/garen-foto.png" alt="Garen — Demleme" style="width:100%;height:100%;object-fit:cover;object-position:top"></div>
      <div class="mk mk-sofra-teal benkimim-mark-float f2 parallax" data-speed="-0.13"></div>
    </div>
    <div class="benkimim-copy reveal">
      <span class="sec-num" aria-hidden="true">05</span>
      <p class="eyebrow">Demleyen Kim?</p>
      <h3>Merhaba, ben Garen.</h3>
      <p>Bu sofrayı yıllar önce, komşularla oturduğumuz sıradan bir çay saatinden çıkardım. Amacım hep aynıydı: <span class="accent">insanları gerçek bir sohbete oturtmak.</span> Kamera olmasa da aynı içtenlikle konuşacağımız hikâyeler arıyorum.</p>
      <p>Bugün Demleme; her hafta bir konuğun sofraya oturduğu, dinleyenlerin de yorumlarla masaya katıldığı bir topluluğa dönüştü. Kayıt bitince de çay bitmiyor.</p>
      <p class="benkimim-signature">Garen</p>
    </div>
  </div>
  <div class="guests-panel reveal">
    <div class="guests-panel-head">
      <p class="guests-label">Demlemedeki Konuklar</p>
      <span class="guests-count">19 konuk ağırlandı</span>
    </div>
    <div class="guests-row-wrap">
      <div class="guests-row">
        <div class="guest-chip reveal" data-bio="Kısa öykü yazarı. Bölüm 24'te 'aile sofrasında büyümek' üzerine konuştu, yazma alışkanlıklarını ve çocukluk anılarını paylaştı.">
          <div class="guest-chip-avatar" style="background:var(--rust)">SB</div><div><span class="guest-chip-name">Selin B.</span><span class="guest-chip-role">Yazar</span></div>
        </div>
        <div class="guest-chip reveal" data-bio="Restoran şefi. Sofra kültürü, yemek yaparken anlatılan hikâyeler ve ailesinin tariflerinden bahsettiği bölümüyle biliniyor.">
          <div class="guest-chip-avatar" style="background:var(--green)">EK</div><div><span class="guest-chip-name">Emre K.</span><span class="guest-chip-role">Şef</span></div>
        </div>
        <div class="guest-chip reveal" data-bio="Müzisyen ve söz yazarı. Müzikle demlenen sohbetler bölümünde sahne öncesi ritüellerini ve ilham kaynaklarını anlattı.">
          <div class="guest-chip-avatar" style="background:var(--lav-deep)">MY</div><div><span class="guest-chip-name">Mert Y.</span><span class="guest-chip-role">Müzisyen</span></div>
        </div>
        <div class="guest-chip reveal" data-bio="Gazeteci. Şehirden köye taşınma sürecini ve yavaş yaşamla ilgili gözlemlerini paylaştığı bölümüyle dinleyenlerin favorisi oldu.">
          <div class="guest-chip-avatar" style="background:var(--teal)">AD</div><div><span class="guest-chip-name">Aslı D.</span><span class="guest-chip-role">Gazeteci</span></div>
        </div>
        <div class="guest-chip reveal" data-bio="Ressam. Atölyesinde geçirdiği sessiz saatleri ve bir tabloyu bitirmenin verdiği huzuru anlattığı sıcak bir sohbete konuk oldu.">
          <div class="guest-chip-avatar" style="background:var(--rust-deep)">CT</div><div><span class="guest-chip-name">Can T.</span><span class="guest-chip-role">Ressam</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============================================================ -->
<div class="zag-divider zag--wave" style="background:#ECE6E7"></div>
<section class="quiz-sec">
  <div class="section-blob parallax" data-speed="0.09" style="width:380px;height:380px;top:-110px;left:-100px;background:radial-gradient(circle,var(--paper) 0%,transparent 72%);opacity:.3" aria-hidden="true"></div>
  <div class="quiz-card reveal-scale">
    <p class="eyebrow">Küçük Bir Test</p>
    <h2>Hangi Demleme bölümü sana göre?</h2>
    <div class="quiz-progress" id="quizProgress"><i class="done"></i><i></i><i></i></div>
    <div class="quiz-body" id="quizBody">
      <div class="quiz-step active" data-step="0">
        <p style="margin-bottom:16px;font-weight:700">Bir Cuma akşamı sana en çok neyle iyi gelir?</p>
        <button type="button" class="quiz-opt" data-q="0" data-v="a">Sessiz bir mutfakta yemek hazırlamak</button>
        <button type="button" class="quiz-opt" data-q="0" data-v="b">Sevdiklerimle uzun bir sohbete dalmak</button>
        <button type="button" class="quiz-opt" data-q="0" data-v="c">Müzik açıp kendimle kalmak</button>
      </div>
      <div class="quiz-step" data-step="1">
        <p style="margin-bottom:16px;font-weight:700">Hangisi sana daha yakın?</p>
        <button type="button" class="quiz-opt" data-q="1" data-v="a">Basit malzemeyle güzel bir yemek çıkarmak</button>
        <button type="button" class="quiz-opt" data-q="1" data-v="b">Eski bir anıyı yeniden anlatmak</button>
        <button type="button" class="quiz-opt" data-q="1" data-v="c">Yeni bir şarkı keşfetmek</button>
      </div>
      <div class="quiz-step" data-step="2">
        <p style="margin-bottom:16px;font-weight:700">Bir hikâye dinlerken en çok neye değer verirsin?</p>
        <button type="button" class="quiz-opt" data-q="2" data-v="a">Sıcak, ev yapımı bir samimiyete</button>
        <button type="button" class="quiz-opt" data-q="2" data-v="b">Aile ve büyümeyle ilgili anlara</button>
        <button type="button" class="quiz-opt" data-q="2" data-v="c">Yaratıcılık ve ilhama</button>
      </div>
    </div>
    <div class="quiz-result" id="quizResult">
      <div class="quiz-result-badge" id="quizBadge"><svg viewBox="0 0 24 24" fill="none" stroke="var(--ink)" stroke-width="1.8"><path d="M8 5v14l11-7z"/></svg></div>
      <h3 id="quizResultTitle">Biz Ne İş Yapıyoruz</h3>
      <p id="quizResultDesc">Sana en yakın bölüm bu — sıcak, samimi ve anılarla dolu.</p>
      <a href="#videos" class="btn btn-ink" id="quizResultBtn">Bölümü Aç</a>
      <br><a href="#" class="quiz-restart" id="quizRestart">Tekrar dene</a>
    </div>
  </div>
</section>

<!-- ============================================================ -->
<section class="faq-sec" id="sss">
  <div class="section-blob parallax" data-speed="-0.05" style="width:340px;height:340px;bottom:-120px;right:-90px;background:radial-gradient(circle,var(--rust) 0%,transparent 72%);opacity:.1" aria-hidden="true"></div>
  <div class="faq-head reveal">
    <p class="eyebrow">Merak Edilenler</p>
    <h2 class="split-heading">Sıkça sorulan sorular</h2>
  </div>
  <div class="faq-list">
    <div class="faq-item reveal">
      <button class="faq-q" type="button">
        Demleme'nin yeni bölümleri ne zaman yayınlanıyor?
        <span class="faq-q-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg></span>
      </button>
      <div class="faq-a"><div class="faq-a-inner"><p>Yeni bölümler her hafta Cuma akşamı YouTube'da yayınlanıyor. Kaçırmamak için topluluk WhatsApp grubuna katılabilir ya da bölümler bölümündeki listeyi takip edebilirsin.</p></div></div>
    </div>
    <div class="faq-item reveal">
      <button class="faq-q" type="button">
        Demleme Shop ürünleri nereden ve nasıl sipariş edilir?
        <span class="faq-q-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg></span>
      </button>
      <div class="faq-a"><div class="faq-a-inner"><p>Ürünlere Mağaza bölümünden göz atabilir, bir ürüne tıklayarak detaylarını ve fiyatını görebilirsin. Sipariş ve kargo süreci için mağaza sayfamız yakında tam entegrasyonla açılıyor.</p></div></div>
    </div>
    <div class="faq-item reveal">
      <button class="faq-q" type="button">
        Programa konuk olmak ya da iş birliği yapmak istiyorum, nasıl ulaşırım?
        <span class="faq-q-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg></span>
      </button>
      <div class="faq-a"><div class="faq-a-inner"><p>merhaba@demleme.com adresine yazabilir ya da aşağıdaki bültene katılıp iletişim formunu kullanabilirsin. Konuk önerilerini ve iş birliği taleplerini buradan değerlendiriyoruz.</p></div></div>
    </div>
    <div class="faq-item reveal">
      <button class="faq-q" type="button">
        E-posta bültenine katılırsam neler gönderiyorsunuz?
        <span class="faq-q-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg></span>
      </button>
      <div class="faq-a"><div class="faq-a-inner"><p>Yeni bölüm duyuruları, konuk açıklamaları ve mağazadaki yeni ürünleri haber veriyoruz. Spam yok — haftada en fazla bir e-posta.</p></div></div>
    </div>
  </div>
</section>

<!-- ============================================================ -->
<div class="zag-divider zag--scallop" style="background:#EFE6EC"></div>
<section class="signup-sec" id="iletisim">
  <div class="section-blob parallax" data-speed="0.07" style="width:360px;height:360px;top:-120px;right:-100px;background:radial-gradient(circle,var(--paper) 0%,transparent 72%);opacity:.25" aria-hidden="true"></div>
  <div class="signup-inner">
    <svg class="signup-envelope" viewBox="0 0 80 80" fill="none" stroke="var(--ink)" stroke-width="2"><rect x="8" y="18" width="64" height="46" rx="6"/><path d="M10 22l30 24 30-24"/></svg>
    <div class="signup-copy reveal">
      <h3>Sofraya davetlisin.</h3>
      <p>Yeni bölümler, konuk duyuruları ve mağaza yenilikleri e-postana gelsin.</p>
    </div>
    <form class="signup-form" id="signupForm">
      <input type="email" placeholder="e-posta adresin" required aria-label="E-posta adresi">
      <button type="submit">Katıl
        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </button>
    </form>
  </div>
</section>

<!-- ============================================================ -->
(poll) -->
<div class="zag-divider zag--wave" style="background:var(--cream)"></div>
<section class="topluluk-sec" style="padding-top:70px; padding-bottom:70px; background:var(--cream)">
  <div class="section-blob parallax" data-speed="0.06" style="width:320px;height:320px;top:-90px;right:-80px;background:radial-gradient(circle,var(--lav) 0%,transparent 72%);opacity:.2" aria-hidden="true"></div>
  <div class="poll-card reveal">
    <p class="eyebrow">Sıradaki Bölüm</p>
    <h4 id="pollQuestion">Bir sonraki bölümün konusu ne olsun?</h4>
    <div role="radiogroup" aria-labelledby="pollQuestion">
      <button type="button" class="poll-opt" role="radio" aria-checked="false" data-poll="a"><span class="poll-opt-fill"></span><span class="poll-opt-label"><span>Şehir hayatında yavaşlamak</span><b class="poll-pct">0%</b></span></button>
      <button type="button" class="poll-opt" role="radio" aria-checked="false" data-poll="b"><span class="poll-opt-fill"></span><span class="poll-opt-label"><span>Aile tarifleri ve mutfak anıları</span><b class="poll-pct">0%</b></span></button>
      <button type="button" class="poll-opt" role="radio" aria-checked="false" data-poll="c"><span class="poll-opt-fill"></span><span class="poll-opt-label"><span>Müzik ve yaratıcılık üzerine</span><b class="poll-pct">0%</b></span></button>
    </div>
    <p class="poll-note" id="pollNote">Oy ver, sonucu hemen gör.</p>
  </div>
</section>

<!-- ============================================================ -->
<div class="zag-divider zag--zigzag" style="background:var(--ink-fixed)"></div>
<footer>
  <div class="footer-watermark parallax" data-speed="0.06"><div class="mk mk-sofra-rust"></div></div>
  <div class="footer-grid">
    <div class="footer-brand">
      <a href="#hero" class="footer-logo"><img class="footer-logo-img" src="/images/demleme-logo.png" alt="Demleme" width="150" height="24" style="height:52px;width:auto;object-fit:contain"></a>
      <p>İyi bir sohbet, iyi bir dünyaya katkı olsun.</p>
      <div class="footer-social">
        <a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube" title="YouTube">
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M23 7s-.3-2-1.2-2.8c-1.1-1.2-2.4-1.2-3-1.3C16.2 2.8 12 2.8 12 2.8s-4.2 0-6.8.2c-.6.1-1.9.1-3 1.3C1.3 5 1 7 1 7S.7 9.1.7 11.2v2c0 2.1.3 4.2.3 4.2S1.3 19.4 2.2 20c1.1 1.2 2.6 1.1 3.3 1.2C7.6 21.4 12 21.4 12 21.4s4.2 0 6.8-.2c.6-.1 1.9-.1 3-1.3.9-.8 1.2-2.8 1.2-2.8s.3-2.1.3-4.2v-2C23.3 9.1 23 7 23 7zM9.7 15.5V8.4l8.1 3.6-8.1 3.5z"/></svg>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram" title="Instagram">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="18" height="18"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor"/></svg>
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
        <li><a href="#videos">YouTube</a></li>
        <li><a href="#benkimim">Hakkımızda</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>Mağaza</h5>
      <ul>
        <li><a href="#shop">Tüm Ürünler</a></li>
        <li><a href="#shop">Hoodie</a></li>
        <li><a href="#shop">Tişört</a></li>
        <li><a href="#shop">Kupa</a></li>
        <li><a href="#shop">Çanta</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>Yardım</h5>
      <ul>
        <li><a href="#sss">Sıkça Sorulan Sorular</a></li>
        <li><a href="#">Kargo &amp; Teslimat</a></li>
        <li><a href="#">İade &amp; Değişim</a></li>
        <li><a href="#iletisim">İletişim</a></li>
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

<!-- ============================================================ -->
<div class="modal-backdrop" id="videoModal" aria-hidden="true">
  <div class="modal-box modal-video" role="dialog" aria-modal="true" aria-label="Bölüm önizleme">
    <button class="modal-close" data-close="videoModal" aria-label="Kapat">&times;</button>
    <div class="modal-video-thumb" id="videoModalThumb">
      <div class="modal-video-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div>
    </div>
    <div class="modal-video-meta">
      <p class="modal-eyebrow" id="videoModalNum">Bölüm 24</p>
      <h3 id="videoModalTitle">Biz Ne İş Yapıyoruz</h3>
      <p id="videoModalSub">42:17 · 3 gün önce</p>
      <a href="#videos" class="btn btn-ink" id="videoModalCta" data-close="videoModal">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        YouTube'da İzle
      </a>
      <div class="modal-related">
        <p class="modal-related-label">Bunu izleyenler bunu da izledi</p>
        <div class="modal-related-row" id="videoModalRelated"></div>
      </div>
    </div>
  </div>
</div>

<!-- ============================================================ -->
<!-- PRODUCT MODAL -->
<div class="modal-backdrop" id="productModal" aria-hidden="true">
  <div class="modal-box pm-box" role="dialog" aria-modal="true" aria-label="Ürün detayı">
    <button class="modal-close pm-close" data-close="productModal" aria-label="Kapat">
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
    </button>

    <div class="pm-inner">
      <!-- Sol: Görsel -->
      <div class="pm-photo-col">
        <div class="pm-photo-wrap" id="productModalPhoto">
          <!-- JS tarafından doldurulur -->
        </div>
        <!-- Renk noktaları (dekoratif) -->
        <div class="pm-color-dots" id="productModalColors"></div>
        <!-- Güvence ikonları -->
        <div class="pm-trust">
          <div class="pm-trust-item">
            <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M10 2l2 4h4l-3 3 1 4-4-3-4 3 1-4-3-3h4z" opacity=".4"/><circle cx="10" cy="10" r="8"/><path d="M7 10l2 2 4-4"/></svg>
            <span>Orijinal ürün</span>
          </div>
          <div class="pm-trust-item">
            <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 7h14v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"/><path d="M1 7h18M8 7V4a2 2 0 014 0v3"/></svg>
            <span>Ücretsiz kargo</span>
          </div>
          <div class="pm-trust-item">
            <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M10 2a8 8 0 100 16A8 8 0 0010 2zm0 4v4l3 3"/></svg>
            <span>14 gün iade</span>
          </div>
        </div>
      </div>

      <!-- Sağ: Bilgi -->
      <div class="pm-info-col">
        <div class="pm-badges" id="productModalBadges"></div>

        <h2 class="pm-name" id="productModalName">Demleme Kupası</h2>
        <p class="pm-desc" id="productModalDesc"></p>

        <!-- Rating -->
        <div class="pm-rating">
          <div class="pm-stars">
            <svg viewBox="0 0 12 12" width="12" height="12" fill="#f39c12"><path d="M6 1l1.2 2.6H10L7.8 5.2l.8 2.8L6 6.4 3.4 8l.8-2.8L2 3.6h2.8z"/></svg>
            <svg viewBox="0 0 12 12" width="12" height="12" fill="#f39c12"><path d="M6 1l1.2 2.6H10L7.8 5.2l.8 2.8L6 6.4 3.4 8l.8-2.8L2 3.6h2.8z"/></svg>
            <svg viewBox="0 0 12 12" width="12" height="12" fill="#f39c12"><path d="M6 1l1.2 2.6H10L7.8 5.2l.8 2.8L6 6.4 3.4 8l.8-2.8L2 3.6h2.8z"/></svg>
            <svg viewBox="0 0 12 12" width="12" height="12" fill="#f39c12"><path d="M6 1l1.2 2.6H10L7.8 5.2l.8 2.8L6 6.4 3.4 8l.8-2.8L2 3.6h2.8z"/></svg>
            <svg viewBox="0 0 12 12" width="12" height="12" fill="#f39c12"><path d="M6 1l1.2 2.6H10L7.8 5.2l.8 2.8L6 6.4 3.4 8l.8-2.8L2 3.6h2.8z"/></svg>
          </div>
          <span class="pm-rating-text">4.9 · <span id="productModalReviews">47</span> değerlendirme</span>
        </div>

        <!-- Fiyat -->
        <div class="pm-price-row">
          <span class="pm-price" id="productModalPrice">₺290</span>
          <span class="pm-stock-badge" id="productModalStock"></span>
        </div>

        <!-- Stok barı -->
        <div class="pm-stock-bar" id="productModalStockBar" style="display:none">
          <div class="pm-stock-fill" id="productModalStockFill"></div>
        </div>
        <p class="pm-stock-text" id="productModalStockText"></p>

        <!-- Adet -->
        <div class="pm-qty-row">
          <div class="pm-qty">
            <button type="button" class="pm-qty-btn" id="productQtyMinus" aria-label="Azalt">
              <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M3 8h10"/></svg>
            </button>
            <span class="pm-qty-val" id="productQtyVal">1</span>
            <button type="button" class="pm-qty-btn" id="productQtyPlus" aria-label="Arttır">
              <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M8 3v10M3 8h10"/></svg>
            </button>
          </div>
          <span class="pm-total" id="productModalTotal">₺290</span>
        </div>

        <!-- Butonlar -->
        <div class="pm-actions">
          <button type="button" class="pm-add-btn" id="productAddBtn">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6h15l-1.5 9h-12z"/><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/></svg>
            <span id="productAddBtnText">Sepete Ekle</span>
          </button>
          <a class="pm-detail-btn" id="productModalDetailLink" href="#">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            Ürün Detayı
          </a>
        </div>

        <p class="modal-add-msg" id="productAddMsg" hidden>✓ Sepete eklendi!</p>

        <!-- Kargo notu -->
        <div class="pm-shipping">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3"/><rect x="9" y="11" width="14" height="10" rx="2"/><circle cx="12" cy="21" r="1"/><circle cx="20" cy="21" r="1"/></svg>
          <span>2–4 iş günü teslimat · ₺200 üzeri <strong>ücretsiz kargo</strong></span>
        </div>
      </div>
    </div>
  </div>
</div>



<!-- ============================================================ -->
<!-- GUEST BIO MODAL -->
<div class="modal-backdrop" id="guestModal" aria-hidden="true">
  <div class="modal-box" role="dialog" aria-modal="true" aria-label="Konuk profili">
    <button class="modal-close" data-close="guestModal" aria-label="Kapat">&times;</button>
    <div class="modal-guest">
      <div class="modal-guest-avatar" id="guestModalAvatar">SB</div>
      <div class="modal-guest-meta">
        <p class="modal-eyebrow">Demlemedeki Konuklar</p>
        <h3 id="guestModalName">Selin B.</h3>
        <p style="font-size:.78rem;color:var(--ink-faint);margin-bottom:10px" id="guestModalRole">Yazar</p>
        <p class="modal-guest-bio" id="guestModalBio">—</p>
      </div>
    </div>
  </div>
</div>

<!-- ============================================================ -->
<!-- EPISODE ARCHIVE OVERLAY -->
<div class="archive-overlay" id="archiveOverlay" aria-hidden="true">
  <div class="archive-inner" role="dialog" aria-modal="true" aria-label="Tüm bölümler">
    <div class="archive-head">
      <h3>Tüm Bölümler</h3>
      <button class="modal-close" data-close="archiveOverlay" aria-label="Kapat" type="button">&times;</button>
    </div>
    <div class="archive-filters" id="archiveFilters">
      <button type="button" class="archive-filter active" data-tag="hepsi">Hepsi</button>
      <button type="button" class="archive-filter" data-tag="aile">Aile & Anılar</button>
      <button type="button" class="archive-filter" data-tag="sanat">Sanat & Müzik</button>
      <button type="button" class="archive-filter" data-tag="yasam">Yaşam & Yavaşlık</button>
    </div>
    <div class="archive-list" id="archiveList">
      <div class="archive-row" data-tag="aile" style="background-color:var(--cream)"><div class="archive-row-thumb" style="background:linear-gradient(135deg,var(--ink-fixed),#2A241C)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div><div class="archive-row-meta"><b>Biz Ne İş Yapıyoruz</b><span>Bölüm 24 · 42:17</span></div></div>
      <div class="archive-row" data-tag="yasam"><div class="archive-row-thumb" style="background:linear-gradient(135deg,var(--ink-fixed),#2A241C)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div><div class="archive-row-meta"><b>Hangi İlin İnsanı Nasıl?</b><span>Bölüm 23 · 38:05</span></div></div>
      <div class="archive-row" data-tag="sanat"><div class="archive-row-thumb" style="background:linear-gradient(135deg,var(--ink-fixed),#2A241C)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div><div class="archive-row-meta"><b>Düğün Hazırlığı Zor İş</b><span>Bölüm 22 · 51:33</span></div></div>
      <div class="archive-row" data-tag="yasam"><div class="archive-row-thumb" style="background:linear-gradient(135deg,var(--ink-fixed),#2A241C)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div><div class="archive-row-meta"><b>Yine Olsa Yine Yapardım</b><span>Bölüm 21 · 29:48</span></div></div>
      <div class="archive-row" data-tag="aile"><div class="archive-row-thumb" style="background:linear-gradient(135deg,var(--ink-fixed),#2A241C)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div><div class="archive-row-meta"><b>Herkesi Kandırabilirsin Ama Kendini Asla</b><span>Bölüm 20 · 44:52</span></div></div>
      <div class="archive-row" data-tag="sanat"><div class="archive-row-thumb" style="background:linear-gradient(135deg,var(--ink-fixed),#2A241C)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div><div class="archive-row-meta"><b>Bir Tabloyu Bitirmek</b><span>Bölüm 19 · 36:10</span></div></div>
      <div class="archive-row" data-tag="yasam"><div class="archive-row-thumb" style="background:linear-gradient(135deg,var(--ink-fixed),#2A241C)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div><div class="archive-row-meta"><b>Az Eşyayla Yaşamak</b><span>Bölüm 18 · 33:40</span></div></div>
      <div class="archive-row" data-tag="aile"><div class="archive-row-thumb" style="background:linear-gradient(135deg,var(--ink-fixed),#2A241C)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div><div class="archive-row-meta"><b>Büyükannemin Mutfağı</b><span>Bölüm 17 · 40:22</span></div></div>
      <div class="archive-row" data-tag="sanat"><div class="archive-row-thumb" style="background:linear-gradient(135deg,var(--ink-fixed),#2A241C)"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div><div class="archive-row-meta"><b>Bir Şarkının Doğuşu</b><span>Bölüm 16 · 47:05</span></div></div>
    </div>
  </div>
</div>

`
      }}
    />
    </>
  );
}
