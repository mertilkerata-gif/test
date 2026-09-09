import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demleme — İyi Bir Sohbet, Zamanla Demlenir.',
  description: 'Demleme; sohbetin, çayın ve hikâyenin yavaş yavaş demlendiği bir masa.',
};

export default function Home() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div id="introLoader" aria-hidden="true">
  <div class="intro-mark">Demleme</div>
  <div class="intro-counter" id="introCounter">0</div>
  <div class="intro-glass"><i></i></div>
  <p class="intro-caption">demleniyor…</p>
</div>
<nav class="site-nav" id="siteNav">
  <a href="#hero" class="nav-logo"><span class="nav-logo-text">demleme</span></a>
  <ul class="nav-links" id="navLinks">
    <li><a href="#hero" data-nav="hero" class="active">Ana Sayfa</a></li>
    <li><a href="#videos" data-nav="videos">YouTube</a></li>
    <li><a href="#shop" data-nav="shop">Ürünler</a></li>
    <li><a href="#benkimim" data-nav="benkimim">Ben Kimim</a></li>
    <li><a href="#iletisim" data-nav="iletisim">İletişim</a></li>
  </ul>
  <div class="nav-icons">
    <button class="theme-toggle" id="themeToggle" aria-label="Karanlık mod" type="button">
      <svg class="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="4.5"/><path d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
      <svg class="moon" viewBox="0 0 24 24" fill="currentColor"><path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"/></svg>
    </button>
    <button class="nav-icon-btn" id="favBtn" aria-label="Favorilerim" type="button">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 20s-7-4.35-9.5-8.5C.7 8 2 4.5 5.5 4 8 3.6 10 5 12 7.5 14 5 16 3.6 18.5 4 22 4.5 23.3 8 21.5 11.5 19 15.65 12 20 12 20z"/></svg>
      <span id="favCount" hidden>0</span>
    </button>
    <button class="nav-icon-btn" id="cartBtn" aria-label="Sepetim" type="button">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 8V6.5a5 5 0 0110 0V8h2.3a1 1 0 01.99.86l1.2 8.4A2 2 0 0119.52 20H4.48a2 2 0 01-1.97-2.74l1.2-8.4A1 1 0 014.7 8H7zm2 0h6V6.5a3 3 0 00-6 0V8z"/></svg>
      <span id="cartCount" hidden>0</span>
    </button>
    <button class="nav-icon-btn" id="searchBtn" aria-label="Ara" type="button">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
    </button>
    <a class="nav-icon-btn" href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.6" r="1"/></svg>
    </a>
    <button class="nav-hamburger" id="hamburgerBtn" aria-label="Menü">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></svg>
    </button>
  </div>
</nav>
<div class="nav-drawer" id="navDrawer">
  <button class="nav-drawer-close" id="navDrawerClose" aria-label="Menüyü kapat" type="button">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/></svg>
  </button>
  <ul class="nav-links" id="navDrawerLinks">
    <li><a href="#hero" data-nav="hero">Ana Sayfa</a></li>
    <li><a href="#videos" data-nav="videos">YouTube</a></li>
    <li><a href="#shop" data-nav="shop">Ürünler</a></li>
    <li><a href="#benkimim" data-nav="benkimim">Ben Kimim</a></li>
    <li><a href="#iletisim" data-nav="iletisim">İletişim</a></li>
  </ul>
  <div class="nav-drawer-foot"><span>afiyet olsun</span></div>
</div>
<div class="nav-backdrop" id="navBackdrop"></div>
<div class="ticker-bar" aria-hidden="true">
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
  <div class="section-blob parallax" data-speed="0.09" style="width:480px;height:480px;top:-180px;right:-140px;background:radial-gradient(circle,var(--butter) 0%,transparent 72%)" aria-hidden="true"></div>
  <div class="section-blob parallax" data-speed="-0.06" style="width:360px;height:360px;bottom:-160px;left:-120px;background:radial-gradient(circle,var(--lav) 0%,transparent 72%);opacity:.3" aria-hidden="true"></div>

  <!-- HERO 3 KOLON -->
  <div className="hero-3col" style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:32px;align-items:center;max-width:var(--wrap);margin:0 auto;padding:60px var(--pad) 48px;min-height:80vh">

    <!-- SOL: İstatistikler + Başlık + CTA -->
    <div class="hero-head reveal" data-intro-linked style="display:flex;flex-direction:column;gap:20px">
      <span class="hero-live-badge" style="align-self:flex-start"><span class="hero-live-dot" aria-hidden="true"></span>Yeni Bölüm Bugün Yayında</span>

      <!-- Logo PNG -->
      <a href="/" style="display:block;margin-bottom:8px">
        <img src="/images/demleme-logo.png" alt="Demleme" style="height:36px;width:auto;filter:var(--logo-filter,none)" />
      </a>

      <p class="eyebrow" style="font-family:'Kodchasan',sans-serif;font-size:.75rem;letter-spacing:.18em;color:var(--rust);margin:0">HAFTALIK SOHBET SOFRASI</p>

      <h1 class="hero-cycle-head" style="font-family:'Boogaloo',var(--font-display);font-size:clamp(2.8rem,5vw,5rem);line-height:1.05;margin:0">
        <span class="hcl-line">İyi bir
          <span class="hero-cycle-slot" data-slot="a" aria-hidden="true">
            <span class="hcs-icon is-active" data-i="0" style="color:var(--lav-deep)"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><ellipse cx="16" cy="20" rx="11" ry="4.2"/><circle cx="6" cy="11" r="2.6"/><circle cx="16" cy="8" r="2.6"/><circle cx="26" cy="11" r="2.6"/><path d="M9 20c1.5-6 5-8 7-8M16 10.6c2 0 5.5 2 7 7.4"/></svg></span>
            <span class="hcs-icon" data-i="1" style="color:var(--green-deep)"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="7" r="4"/><path d="M7 24c0-6 2-10 6-10M13.5 15c2 .5 3 2 3.5 4.3M5 24h13"/><ellipse cx="18" cy="24" rx="6.5" ry="2.4"/></svg></span>
            <span class="hcs-icon" data-i="2" style="color:var(--ink-fixed)"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 22c0-3 2-5 5-5h14c3 0 5 2 5 5"/><path d="M9 17l2-5c.5-1.2 1.6-2 3-2h6c1 0 1.8.6 2 1.6l1 5.4"/><circle cx="9.5" cy="23.5" r="2.6"/><circle cx="23" cy="23.5" r="2.6"/></svg></span>
            <span class="hcs-icon" data-i="3" style="color:var(--rust-deep)"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="13" cy="9" r="4.4"/><path d="M8 27c0-6.5 2.5-11 8-11"/></svg></span>
          </span>
          sohbet,
        </span>
        <span class="hcl-line"><span class="script" style="font-family:'Caveat',cursive;color:var(--lav-deep)">zamanla</span>
          <span class="hero-cycle-slot" data-slot="b" aria-hidden="true">
            <span class="hcs-icon is-active" data-i="0" style="color:var(--lav-deep)"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><ellipse cx="16" cy="20" rx="11" ry="4.2"/><circle cx="6" cy="11" r="2.6"/><circle cx="16" cy="8" r="2.6"/><circle cx="26" cy="11" r="2.6"/></svg></span>
            <span class="hcs-icon" data-i="1" style="color:var(--green-deep)"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="7" r="4"/><path d="M7 24c0-6 2-10 6-10M5 24h13"/></svg></span>
            <span class="hcs-icon" data-i="2" style="color:var(--ink-fixed)"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 22c0-3 2-5 5-5h14c3 0 5 2 5 5"/></svg></span>
            <span class="hcs-icon" data-i="3" style="color:var(--rust-deep)"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="13" cy="9" r="4.4"/></svg></span>
          </span>
          demlenir.
        </span>
      </h1>

      <!-- İstatistikler -->
      <div style="display:flex;flex-direction:column;gap:12px;margin:8px 0">
        <div style="display:flex;align-items:baseline;gap:8px">
          <span class="count-up" data-target="12000" style="font-family:'Boogaloo',var(--font-display);font-size:2.4rem;color:var(--ink);line-height:1">12.000</span>
          <span style="font-family:'Kodchasan',sans-serif;font-size:.85rem;color:var(--ink-soft)">dinleyen</span>
        </div>
        <div style="display:flex;align-items:baseline;gap:8px">
          <span class="count-up" data-target="84" style="font-family:'Boogaloo',var(--font-display);font-size:2.4rem;color:var(--rust);line-height:1">84</span>
          <span style="font-family:'Kodchasan',sans-serif;font-size:.85rem;color:var(--ink-soft)">bölüm yayında</span>
        </div>
        <div style="display:flex;align-items:baseline;gap:8px">
          <span class="count-up" data-target="200" style="font-family:'Boogaloo',var(--font-display);font-size:2.4rem;color:var(--green);line-height:1">200+</span>
          <span style="font-family:'Kodchasan',sans-serif;font-size:.85rem;color:var(--ink-soft)">topluluk üyesi</span>
        </div>
      </div>

      <!-- CTAs -->
      <div class="hero-ctas" style="display:flex;gap:12px;flex-wrap:wrap">
        <a href="#videos" class="btn btn-ink" style="font-family:'Kodchasan',sans-serif;font-weight:600">
          <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M8 5v14l11-7z"/></svg>
          Son Bölümü İzle
        </a>
        <a href="/urunler" class="btn btn-outline" style="font-family:'Kodchasan',sans-serif;font-weight:600">Mağazayı Gez</a>
      </div>

      <!-- Follow row -->
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

    <!-- ORTA: Grafiker çay figürü -->
    <div style="display:flex;align-items:center;justify-content:center;position:relative">
      <div style="background:var(--cream-deep);border-radius:50%;width:340px;height:340px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,.08)">
        <img src="/images/cay-icon-blue.jpeg" alt="Çay ve mikrofon" style="width:65%;height:65%;object-fit:contain;mix-blend-mode:multiply" />
      </div>
      <!-- floating çay ikonu -->
      <div style="position:absolute;top:-20px;right:-10px;background:var(--butter);border-radius:50%;width:72px;height:72px;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(0,0,0,.1);animation:float 3s ease-in-out infinite">
        <img src="/images/cay-icon-green.jpeg" alt="Yeşil çay" style="width:60%;height:60%;object-fit:contain;mix-blend-mode:multiply" />
      </div>
    </div>

    <!-- SAĞ: Çay demlenme figürü -->
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:24px">
      <div style="position:relative;display:flex;flex-direction:column;align-items:center">
        <img src="/images/cay-icen-figur.png" alt="Çay içen figür" style="width:280px;height:280px;object-fit:contain" />
        <!-- demlenme animasyonu -->
        <div style="margin-top:16px;width:120px;height:120px;position:relative">
          <svg viewBox="0 0 120 120" style="width:100%;height:100%">
            <defs>
              <clipPath id="teaClip">
                <rect x="30" y="20" width="60" height="80" rx="8"/>
              </clipPath>
              <linearGradient id="teaGrad" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stop-color="#c0392b"/>
                <stop offset="100%" stop-color="#e74c3c" stop-opacity="0.6"/>
              </linearGradient>
            </defs>
            <!-- Bardak dış -->
            <path d="M35 25 Q30 60 33 95 L87 95 Q90 60 85 25 Z" fill="none" stroke="var(--ink)" stroke-width="2.5" stroke-linecap="round"/>
            <!-- Tabak -->
            <ellipse cx="60" cy="96" rx="32" ry="6" fill="none" stroke="var(--ink)" stroke-width="2"/>
            <!-- Demlenme fill animasyonu -->
            <rect x="33" y="40" width="54" height="56" fill="url(#teaGrad)" clip-path="url(#teaClip)" style="transform-origin:bottom;animation:teaFill 3s ease-in-out infinite alternate">
              <animate attributeName="y" values="90;40" dur="3s" repeatCount="indefinite"/>
              <animate attributeName="height" values="6;56" dur="3s" repeatCount="indefinite"/>
            </rect>
            <!-- Buhar -->
            <path d="M48 22 Q50 16 52 22 Q54 28 56 22" fill="none" stroke="var(--ink)" stroke-width="1.5" stroke-linecap="round" opacity="0.5">
              <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite"/>
            </path>
            <path d="M60 18 Q62 12 64 18 Q66 24 68 18" fill="none" stroke="var(--ink)" stroke-width="1.5" stroke-linecap="round" opacity="0.4">
              <animate attributeName="opacity" values="0.4;0;0.4" dur="2.5s" repeatCount="indefinite"/>
            </path>
          </svg>
        </div>
        <p style="font-family:'Kodchasan',sans-serif;font-size:.85rem;color:var(--ink-soft);text-align:center;margin:0">demleniyor...</p>
      </div>

      <!-- Sofra ikonu -->
      <div style="background:var(--lav);border-radius:20px;padding:20px;display:flex;align-items:center;justify-content:center">
        <img src="/images/sofra-blue.png" alt="Sofra" style="width:120px;height:auto;object-fit:contain;mix-blend-mode:multiply" />
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
    <div class="highlights-photo parallax" data-speed="0.32" src="" aria-hidden="true"></div>
    <div class="highlights-nav-btns">
      <button class="btn-circle" id="highlightsPrev" aria-label="Önceki"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 6l-6 6 6 6"/></svg></button>
      <button class="btn-circle" id="highlightsNext" aria-label="Sonraki"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6l6 6-6 6"/></svg></button>
    </div>
  </div>
  <div class="highlights-track-wrap">
    <div class="highlights-track" id="highlightsTrack">
      <div class="highlight-card video" data-yt="aK_btqNLtE0">
        <div class="highlight-thumb" src="">
<span class="highlight-tag">Video</span>
          <a class="highlight-yt-btn" href="#" target="_blank" rel="noopener" aria-label="YouTube’da izle" onclick="event.stopPropagation()"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31 31 0 000 12a31 31 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31 31 0 0024 12a31 31 0 00-.5-5.8zM9.6 15.5V8.5L15.8 12z"/></svg></a>
          <div class="highlight-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div>
          <span class="highlight-dur">42:17</span>
        </div>
        <div class="highlight-meta"><b>Biz Ne İş Yapıyoruz</b><span>Bölüm 24</span></div>
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
        <div class="highlight-thumb" src="">
<span class="highlight-tag">Video</span>
          <a class="highlight-yt-btn" href="#" target="_blank" rel="noopener" aria-label="YouTube’da izle" onclick="event.stopPropagation()"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31 31 0 000 12a31 31 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31 31 0 0024 12a31 31 0 00-.5-5.8zM9.6 15.5V8.5L15.8 12z"/></svg></a>
          <div class="highlight-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div>
          <span class="highlight-dur">38:05</span>
        </div>
        <div class="highlight-meta"><b>Hangi İlin İnsanı Nasıl?</b><span>Bölüm 23</span></div>
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
        <div class="highlight-thumb" src="">
<span class="highlight-tag">Video</span>
          <a class="highlight-yt-btn" href="#" target="_blank" rel="noopener" aria-label="YouTube’da izle" onclick="event.stopPropagation()"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31 31 0 000 12a31 31 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31 31 0 0024 12a31 31 0 00-.5-5.8zM9.6 15.5V8.5L15.8 12z"/></svg></a>
          <div class="highlight-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div>
          <span class="highlight-dur">51:33</span>
        </div>
        <div class="highlight-meta"><b>Düğün Hazırlığı Zor İş</b><span>Bölüm 22</span></div>
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
      <div class="product-card reveal">
        <button class="fav-btn" data-fav-id="p1" aria-label="Favorilere ekle" type="button"><svg viewBox="0 0 24 24"><path d="M12 20s-7-4.35-9.5-8.5C.7 8 2 4.5 5.5 4 8 3.6 10 5 12 7.5 14 5 16 3.6 18.5 4 22 4.5 23.3 8 21.5 11.5 19 15.65 12 20 12 20z"/></svg></button>
        <div class="product-photo zoomable" style="background:var(--cream-deep)">
          <span class="limited-badge">Sınırlı Üretim</span>
          <svg viewBox="0 0 64 64" fill="none" stroke="var(--ink)" stroke-width="2"><path d="M14 22h30v18a10 10 0 01-10 10H24a10 10 0 01-10-10V22z"/><path d="M44 26h4a6 6 0 010 12h-4"/><path d="M20 14c1-3 3-3 4-6M30 14c1-3 3-3 4-6"/></svg>
        </div>
        <p class="product-name">Demleme Kupası</p>
        <p class="product-price">₺290</p>
        <div class="stock-bar-wrap">
          <div class="stock-bar"><i style="width:27%"></i></div>
          <span class="stock-note">Stokta son 27 adet</span>
        </div>
      </div>
      <div class="product-card reveal">
        <button class="fav-btn" data-fav-id="p2" aria-label="Favorilere ekle" type="button"><svg viewBox="0 0 24 24"><path d="M12 20s-7-4.35-9.5-8.5C.7 8 2 4.5 5.5 4 8 3.6 10 5 12 7.5 14 5 16 3.6 18.5 4 22 4.5 23.3 8 21.5 11.5 19 15.65 12 20 12 20z"/></svg></button>
        <div class="product-photo zoomable" style="background:var(--cream-deep)">
          <svg viewBox="0 0 64 64" fill="none" stroke="var(--ink)" stroke-width="2"><path d="M20 10h24l6 12-18 34-18-34z"/><path d="M26 10l6 12 6-12M20 22h24"/></svg>
        </div>
        <p class="product-name">Sofra Tişörtü</p>
        <p class="product-price">₺450</p>
      </div>
      <div class="product-card reveal">
        <button class="fav-btn" data-fav-id="p3" aria-label="Favorilere ekle" type="button"><svg viewBox="0 0 24 24"><path d="M12 20s-7-4.35-9.5-8.5C.7 8 2 4.5 5.5 4 8 3.6 10 5 12 7.5 14 5 16 3.6 18.5 4 22 4.5 23.3 8 21.5 11.5 19 15.65 12 20 12 20z"/></svg></button>
        <div class="product-photo zoomable" style="background:var(--cream-deep)">
          <span class="product-tag">Yeni</span>
          <svg viewBox="0 0 64 64" fill="none" stroke="var(--ink)" stroke-width="2"><rect x="14" y="8" width="36" height="48" rx="4"/><path d="M22 20h20M22 28h20M22 36h12"/></svg>
        </div>
        <p class="product-name">Demleme Defteri</p>
        <p class="product-price">₺180</p>
      </div>
      <div class="product-card reveal">
        <button class="fav-btn" data-fav-id="p4" aria-label="Favorilere ekle" type="button"><svg viewBox="0 0 24 24"><path d="M12 20s-7-4.35-9.5-8.5C.7 8 2 4.5 5.5 4 8 3.6 10 5 12 7.5 14 5 16 3.6 18.5 4 22 4.5 23.3 8 21.5 11.5 19 15.65 12 20 12 20z"/></svg></button>
        <div class="product-photo zoomable" style="background:var(--cream-deep)">
          <svg viewBox="0 0 64 64" fill="none" stroke="var(--ink)" stroke-width="2"><rect x="16" y="24" width="32" height="24" rx="3"/><path d="M48 30h4a5 5 0 010 10h-4M22 24V16a10 10 0 0120 0v8"/></svg>
        </div>
        <p class="product-name">Mini Çay Seti</p>
        <p class="product-price">₺620</p>
      </div>
      <div class="product-card reveal">
        <button class="fav-btn" data-fav-id="p5" aria-label="Favorilere ekle" type="button"><svg viewBox="0 0 24 24"><path d="M12 20s-7-4.35-9.5-8.5C.7 8 2 4.5 5.5 4 8 3.6 10 5 12 7.5 14 5 16 3.6 18.5 4 22 4.5 23.3 8 21.5 11.5 19 15.65 12 20 12 20z"/></svg></button>
        <div class="product-photo zoomable" style="background:var(--cream-deep)">
          <svg viewBox="0 0 64 64" fill="none" stroke="var(--ink)" stroke-width="2"><rect x="12" y="10" width="40" height="44" rx="2"/><path d="M20 24h24M20 32h24M20 40h14"/></svg>
        </div>
        <p class="product-name">Bölüm Posteri</p>
        <p class="product-price">₺220</p>
      </div>
      <div class="product-card reveal">
        <button class="fav-btn" data-fav-id="p6" aria-label="Favorilere ekle" type="button"><svg viewBox="0 0 24 24"><path d="M12 20s-7-4.35-9.5-8.5C.7 8 2 4.5 5.5 4 8 3.6 10 5 12 7.5 14 5 16 3.6 18.5 4 22 4.5 23.3 8 21.5 11.5 19 15.65 12 20 12 20z"/></svg></button>
        <div class="product-photo zoomable" style="background:var(--cream-deep)">
          <svg viewBox="0 0 64 64" fill="none" stroke="var(--ink)" stroke-width="2"><circle cx="32" cy="32" r="18"/><path d="M32 20v12l8 6"/></svg>
        </div>
        <p class="product-name">Kupa Altlığı Seti</p>
        <p class="product-price">₺140</p>
      </div>
      <div class="product-card reveal">
        <button class="fav-btn" data-fav-id="p7" aria-label="Favorilere ekle" type="button"><svg viewBox="0 0 24 24"><path d="M12 20s-7-4.35-9.5-8.5C.7 8 2 4.5 5.5 4 8 3.6 10 5 12 7.5 14 5 16 3.6 18.5 4 22 4.5 23.3 8 21.5 11.5 19 15.65 12 20 12 20z"/></svg></button>
        <div class="product-photo zoomable" style="background:var(--cream-deep)">
          <svg viewBox="0 0 64 64" fill="none" stroke="var(--ink)" stroke-width="2"><rect x="8" y="18" width="48" height="30" rx="4"/><circle cx="32" cy="33" r="8"/><path d="M14 24h4M46 42h4"/></svg>
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
      <a href="#hero" class="footer-logo"><img class="footer-logo-img" src="" alt="Demleme" width="150" height="24"></a>
      <p>İyi bir sohbet, iyi bir dünyaya katkı olsun.</p>
      <div class="footer-social">
        <a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></a>
        <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.6" r="1"/></svg></a>
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
  <div class="modal-box" role="dialog" aria-modal="true" aria-label="Ürün detayı">
    <button class="modal-close" data-close="productModal" aria-label="Kapat">&times;</button>
    <div class="modal-product">
      <div class="modal-product-photo" id="productModalPhoto"></div>
      <div class="modal-product-meta">
        <p class="modal-eyebrow">Demleme Shop</p>
        <h3 id="productModalName">Demleme Kupası</h3>
        <p class="modal-product-price" id="productModalPrice">₺290</p>
        <div class="modal-qty">
          <button type="button" id="productQtyMinus" aria-label="Azalt">–</button>
          <span id="productQtyVal">1</span>
          <button type="button" id="productQtyPlus" aria-label="Arttır">+</button>
        </div>
        <button type="button" class="btn btn-ink modal-add-btn" id="productAddBtn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 6h15l-1.5 9h-12z"/><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/></svg>
          Sepete Ekle
        </button>
        <p class="modal-add-msg" id="productAddMsg" hidden>Sepete eklendi ✓</p>
      </div>
    </div>
  </div>
</div>

<!-- ============================================================ -->
<!-- CART DRAWER -->
<div class="modal-backdrop cart-modal" id="cartDrawer" aria-hidden="true">
  <div class="cart-panel" role="dialog" aria-modal="true" aria-label="Sepetim">
    <button class="modal-close" data-close="cartDrawer" aria-label="Kapat">&times;</button>
    <div class="cart-head">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 6h15l-1.5 9h-12z"/><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/></svg>
      <h3>Sepetim</h3>
    </div>
    <div class="cart-list" id="cartList">
      <p class="cart-empty" id="cartEmptyMsg">Sepetin boş — <a href="#shop" data-close="cartDrawer">ürünlere göz at</a>.</p>
    </div>
    <div class="cart-foot" id="cartFoot" hidden>
      <div class="cart-subtotal-row"><span>Ara Toplam</span><b id="cartSubtotal">₺0</b></div>
      <button type="button" class="btn btn-ink cart-checkout-btn" id="cartCheckoutBtn">Sepeti Onayla</button>
      <p class="cart-checkout-msg" id="cartCheckoutMsg" hidden>Siparişin alındı, afiyet olsun! ✓</p>
    </div>
  </div>
</div>

<!-- ============================================================ -->
<!-- SEARCH OVERLAY -->
<div class="search-overlay" id="searchOverlay" aria-hidden="true">
  <div class="search-inner" role="dialog" aria-modal="true" aria-label="Site içinde ara">
    <button class="modal-close search-close" data-close="searchOverlay" aria-label="Kapat">&times;</button>
    <div class="search-input-wrap">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
      <input type="text" id="searchInput" placeholder="Bölüm, ürün ya da konuk ara…" autocomplete="off">
    </div>
    <div class="search-results" id="searchResults">
      <p class="search-empty">Bölümlerde, ürünlerde ve konuklarda aramak için yazmaya başla.</p>
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

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.15.0/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.15.0/ScrollTrigger.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lenis@1.3.26/dist/lenis.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/split-type@0.3.4/umd/index.min.js"></script>
<script>
(function(){
  "use strict";

  /* ---------- premium layer: GSAP + ScrollTrigger + Lenis smooth scroll ---------- */
  var premiumReduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined'){
    gsap.registerPlugin(ScrollTrigger);
  }
  if(!premiumReduce && typeof window.Lenis !== 'undefined'){
    try{
      var lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1 });
      if(typeof window.gsap !== 'undefined'){
        lenis.on('scroll', function(){ if(window.ScrollTrigger) ScrollTrigger.update(); });
        gsap.ticker.add(function(time){ lenis.raf(time * 1000); });
        gsap.ticker.lagSmoothing(0);
      } else {
        (function lenisRaf(time){ lenis.raf(time); requestAnimationFrame(lenisRaf); })();
      }
    }catch(e){}
  }

  /* ---------- nav scroll shadow ---------- */
  var nav = document.getElementById('siteNav');
  function onScroll(){
    if(window.scrollY > 12){ nav.classList.add('scrolled'); } else { nav.classList.remove('scrolled'); }
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  /* ---------- mobile side nav drawer ---------- */
  var hamburger = document.getElementById('hamburgerBtn');
  var navDrawer = document.getElementById('navDrawer');
  var navLinks = document.getElementById('navLinks');
  var navBackdrop = document.getElementById('navBackdrop');
  var navDrawerClose = document.getElementById('navDrawerClose');
  function openDrawer(){
    if(!navDrawer) return;
    navDrawer.classList.add('open');
    if(navBackdrop) navBackdrop.classList.add('open');
    document.documentElement.classList.add('nav-open');
  }
  function closeDrawer(){
    if(!navDrawer) return;
    navDrawer.classList.remove('open');
    if(navBackdrop) navBackdrop.classList.remove('open');
    document.documentElement.classList.remove('nav-open');
  }
  if(hamburger && navDrawer){
    hamburger.addEventListener('click', function(){
      navDrawer.classList.contains('open') ? closeDrawer() : openDrawer();
    });
    if(navDrawerClose) navDrawerClose.addEventListener('click', closeDrawer);
    if(navBackdrop) navBackdrop.addEventListener('click', closeDrawer);
    document.addEventListener('keydown', function(e){ if(e.key === 'Escape') closeDrawer(); });
    if(navLinks) navLinks.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', closeDrawer);
    });
  }

  /* ---------- scroll-spy ---------- */
  var sections = ['hero','videos','shop','benkimim','iletisim'].map(function(id){
    return document.getElementById(id);
  }).filter(Boolean);
  var navMap = {};
  document.querySelectorAll('.nav-links a[data-nav]').forEach(function(a){
    navMap[a.getAttribute('data-nav')] = a;
  });
  if('IntersectionObserver' in window && sections.length){
    var spy = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          var id = entry.target.id;
          Object.keys(navMap).forEach(function(k){ navMap[k].classList.toggle('active', k === id); });
        }
      });
    }, {rootMargin:'-40% 0px -55% 0px', threshold:0});
    sections.forEach(function(s){ spy.observe(s); });
  }

  /* ---------- reveal on scroll ----------
     Elements carrying [data-intro-linked] (the hero's own headline/brew/stats/figure) are
     deliberately excluded here: they're sequenced by the continuous preloader timeline below
     instead of this generic observer, so the loader-dissolve and the hero wake-up read as one
     motion instead of two disconnected animations. */
  var revealEls = document.querySelectorAll('.reveal:not([data-intro-linked]), .reveal-scale:not([data-intro-linked])');
  if('IntersectionObserver' in window && revealEls.length){
    var ro = new IntersectionObserver(function(entries, obs){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('in');
          obs.unobserve(entry.target);
        }
      });
    }, {threshold:0.01, rootMargin:'0px 0px 250px 0px'});
    revealEls.forEach(function(el){ ro.observe(el); });
    /* safety net: above-the-fold elements should never be stuck invisible if the
       observer's first callback misses them (font swap / layout shift race, etc.) */
    setTimeout(function(){
      revealEls.forEach(function(el){
        if(!el.classList.contains('in') && el.getBoundingClientRect().top < window.innerHeight){
          el.classList.add('in');
        }
      });
    }, 900);
  } else {
    revealEls.forEach(function(el){ el.classList.add('in'); });
  }

  /* ---------- continuous preloader -> hero reveal ----------
     Design purpose: the brief's core complaint about "standard" sites is a loader that plays,
     then vanishes, then a *separate* fade-in kicks off underneath -- two disconnected beats.
     Here the numeric counter, the loader's dissolve and the hero's wake-up all live on one
     GSAP timeline, so the hero visibly wakes up AS the loader lifts, not after.
     Interaction logic: a stepped counter (not a smooth tween) reads as a real progress readout;
     the loader's autoAlpha fade-out and the hero's staggered \`.in\` reveals are scheduled from
     the same timeline position so they're perceived as one gesture.
     Performance: only opacity/transform are touched (via the existing .reveal/.reveal-scale
     CSS transitions, driven purely by toggling the \`.in\` class) -- no layout
     properties are animated, and the whole sequence is skipped entirely under reduced-motion
     or on repeat visits (sessionStorage gate in body.html already hides the loader instantly). */
  (function(){
    var loader = document.getElementById('introLoader');
    var introEls = document.querySelectorAll('[data-intro-linked]');
    function wakeHero(){ introEls.forEach(function(el){ el.classList.add('in'); }); }

    if(!loader || getComputedStyle(loader).display === 'none' || premiumReduce){
      wakeHero();
    } else if(typeof window.gsap === 'undefined'){
      wakeHero();
      loader.style.transition = 'opacity .3s ease';
      loader.style.opacity = '0';
      setTimeout(function(){ loader.style.display = 'none'; }, 320);
    } else {
      try{
        var counter = document.getElementById('introCounter');
        var steps = [0, 12, 28, 47, 73, 100];
        var tl = gsap.timeline({ defaults: { ease: 'none' } });
        steps.forEach(function(val, i){
          tl.call(function(){ if(counter) counter.textContent = val; }, null, i * 0.135);
        });
        tl.to(loader, { autoAlpha: 0, scale: 1.05, duration: .55, ease: 'power2.inOut' }, '+=0.08')
          .set(loader, { display: 'none' })
          .call(function(){
            var head = document.querySelector('.hero-head[data-intro-linked]');
            if(head) head.classList.add('in');
          }, null, '<');
      }catch(e){
        wakeHero();
        loader.style.display = 'none';
      }
    }

    /* absolute safety net: whatever else happens, the loader must never block the page */
    setTimeout(function(){
      if(loader && getComputedStyle(loader).display !== 'none'){
        wakeHero();
        loader.style.display = 'none';
      }
    }, 3000);
  })();

  /* ---------- carousels (video / shop) ---------- */
  function wireCarousel(trackId, prevId, nextId){
    var track = document.getElementById(trackId);
    var prev = document.getElementById(prevId);
    var next = document.getElementById(nextId);
    if(!track) return;
    function step(){
      var card = track.querySelector(':scope > *');
      return card ? card.getBoundingClientRect().width + 24 : 300;
    }
    if(prev) prev.addEventListener('click', function(){ track.scrollBy({left:-step(), behavior:'smooth'}); });
    if(next) next.addEventListener('click', function(){ track.scrollBy({left:step(), behavior:'smooth'}); });
  }
  wireCarousel('shopTrack','shopPrev','shopNext');
  wireCarousel('highlightsTrack','highlightsPrev','highlightsNext');

  /* ---------- hero cycling icons: "İyi bir [x] sohbet, zamanla [x] demlenir." ----------
     Two named slots ('a' in line 1, 'b' in line 2) each hold the same 4 hand-drawn inline-SVG
     vignettes; a single advancing index drives both, offset by two, so the pair showing at
     once is always different -- a light, continuous "who's at the table today" flourish. */
  (function(){
    var slotA = document.querySelector('.hero-cycle-slot[data-slot="a"]');
    var slotB = document.querySelector('.hero-cycle-slot[data-slot="b"]');
    if(!slotA || !slotB) return;
    var iconsA = slotA.querySelectorAll('.hcs-icon');
    var iconsB = slotB.querySelectorAll('.hcs-icon');
    var n = iconsA.length;
    if(!n || iconsB.length !== n) return;
    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(reduceMotion) return;
    var i = 0;
    setInterval(function(){
      i = (i + 1) % n;
      var j = (i + 2) % n;
      iconsA.forEach(function(el, idx){ el.classList.toggle('is-active', idx === i); });
      iconsB.forEach(function(el, idx){ el.classList.toggle('is-active', idx === j); });
    }, 2600);
  })();

  /* ---------- ticker bar: live clock + a decorative countdown to daily 17:00 "çay saati" ---------- */
  (function(){
    var clockEls = document.querySelectorAll('.ticker-clock');
    var cdEls = document.querySelectorAll('.ticker-countdown');
    if(!clockEls.length && !cdEls.length) return;
    function pad(n){ return n < 10 ? '0' + n : '' + n; }
    function tick(){
      var now = new Date();
      var label = 'SAAT ' + pad(now.getHours()) + ':' + pad(now.getMinutes());
      clockEls.forEach(function(el){ el.textContent = label; });
      var target = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 17, 0, 0, 0);
      if(now >= target) target.setDate(target.getDate() + 1);
      var diffMin = Math.max(0, Math.round((target - now) / 60000));
      var dh = Math.floor(diffMin / 60), dm = diffMin % 60;
      var cdLabel = 'ÇAY SAATİNE ' + (dh > 0 ? (dh + ' SAAT ' + dm + ' DAKİKA VAR') : (dm + ' DAKİKA VAR'));
      cdEls.forEach(function(el){ el.textContent = cdLabel; });
    }
    tick();
    setInterval(tick, 15000);
  })();

  /* ---------- signup form ---------- */
  var form = document.getElementById('signupForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      if(form.classList.contains('sent')) return;
      form.classList.add('sent');
      var msg = document.createElement('span');
      msg.className = 'signup-form-msg';
      msg.textContent = 'Katıldın! Sofrada görüşürüz ☺';
      form.appendChild(msg);
    });
  }

  /* ---------- email gate (first visit only) ---------- */
  (function(){
    var gate = document.getElementById('emailGate');
    if(!gate) return;
    var GATE_KEY = 'demleme-gate-seen';
    var alreadySeen = true;
    try{ alreadySeen = localStorage.getItem(GATE_KEY) === '1'; }catch(e){ alreadySeen = false; }
    if(alreadySeen) return;

    var skipBtn = document.getElementById('emailGateSkip');
    var gateForm = document.getElementById('emailGateForm');

    function markSeen(){ try{ localStorage.setItem(GATE_KEY, '1'); }catch(e){} }
    function closeGate(){
      gate.classList.remove('show');
      gate.setAttribute('aria-hidden', 'true');
      markSeen();
    }
    function openGate(){
      gate.classList.add('show');
      gate.removeAttribute('aria-hidden');
      var input = gateForm && gateForm.querySelector('input');
      if(input) setTimeout(function(){ input.focus(); }, 300);
    }

    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setTimeout(openGate, reduceMotion ? 200 : 1500);

    if(skipBtn) skipBtn.addEventListener('click', closeGate);
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape' && gate.classList.contains('show')) closeGate();
    });
    if(gateForm){
      gateForm.addEventListener('submit', function(e){
        e.preventDefault();
        if(gateForm.classList.contains('sent')) return;
        gateForm.classList.add('sent');
        var msg = document.createElement('p');
        msg.className = 'email-gate-msg';
        msg.textContent = 'Katıldın! Sofrada görüşürüz ☕';
        gateForm.insertAdjacentElement('afterend', msg);
        setTimeout(closeGate, 1100);
      });
    }
  })();

  /* ---------- staggered grid reveal ---------- */
  function assignStagger(selector){
    document.querySelectorAll(selector).forEach(function(el, i){
      el.style.setProperty('--stagger', i);
    });
  }
  assignStagger('.highlights-track .highlight-card');
  assignStagger('.shop-track .product-card');
  assignStagger('.guests-row .guest-chip');

  /* ---------- premium micro-interactions: magnetic buttons + card tilt ---------- */
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!reduceMotion && window.matchMedia && window.matchMedia('(hover:hover)').matches){
    /* Magnetic pull with spring easing: the button chases the cursor's target offset via
       rAF-driven lerp (not an instant 1:1 snap) so the motion carries physical weight, and it
       eases back through the same loop on mouseleave instead of resetting instantly. transform
       is the only property touched, so this stays cheap even with several buttons active. */
    var magnets = document.querySelectorAll('.btn, .btn-circle');
    magnets.forEach(function(el){
      var m = { tx: 0, ty: 0, cx: 0, cy: 0, raf: null };
      function settle(){
        m.cx += (m.tx - m.cx) * 0.2;
        m.cy += (m.ty - m.cy) * 0.2;
        el.style.transform = 'translate(' + m.cx.toFixed(2) + 'px,' + m.cy.toFixed(2) + 'px)';
        if(Math.abs(m.tx - m.cx) > 0.05 || Math.abs(m.ty - m.cy) > 0.05){
          m.raf = requestAnimationFrame(settle);
        } else {
          m.raf = null;
        }
      }
      function wake(){ if(!m.raf) m.raf = requestAnimationFrame(settle); }
      el.addEventListener('mousemove', function(e){
        var r = el.getBoundingClientRect();
        m.tx = (e.clientX - r.left - r.width / 2) * 0.32;
        m.ty = (e.clientY - r.top - r.height / 2) * 0.4;
        wake();
      });
      el.addEventListener('mouseleave', function(){ m.tx = 0; m.ty = 0; wake(); });
    });

    var tiltCards = document.querySelectorAll('.product-card, .highlight-card');
    tiltCards.forEach(function(el){
      el.style.willChange = 'transform';
      el.addEventListener('mousemove', function(e){
        /* a playing inline video holds a cross-origin YouTube iframe -- keeping this element
           under a live 3D transform forces the browser to keep re-syncing that iframe's
           out-of-process compositor layer on every mousemove, which is what read as the page
           "freezing" once a video was clicked while the cursor stayed over the card. Skip the
           tilt (and flatten it) while a video is playing. */
        if(el.querySelector('.highlight-thumb.playing, .video-thumb.playing')){
          if(el.style.transform) el.style.transform = '';
          return;
        }
        var r = el.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5;
        var py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = 'perspective(700px) rotateX(' + (py*-6) + 'deg) rotateY(' + (px*8) + 'deg) translateY(-3px)';
      });
      el.addEventListener('mouseleave', function(){ el.style.transform = ''; });
    });

    /* ---------- cursor-follow spotlight on dark sections ---------- */
    document.querySelectorAll('.spot-target').forEach(function(el){
      el.addEventListener('mousemove', function(e){
        var r = el.getBoundingClientRect();
        el.style.setProperty('--sx', ((e.clientX - r.left) / r.width * 100) + '%');
        el.style.setProperty('--sy', ((e.clientY - r.top) / r.height * 100) + '%');
      });
    });

    /* ---------- context-aware cursor tag ----------
       Design purpose: a small companion badge that names what a hover will do (İzle/Gör/Keşfet)
       instead of a full custom-cursor replacement -- the OS pointer stays visible everywhere,
       so this adds a hint without any of the usual custom-cursor accessibility/usability risk.
       Interaction logic: the badge trails the real cursor via rAF lerp and only shows (a spring
       scale-in) while hovering a bound zone; leaving the zone eases it back to zero.
       Performance: one rAF loop, transform + opacity only, gated out entirely on touch/coarse
       pointers and reduced-motion via the CSS media query above and the guard this whole block
       already sits behind. */
    var cursorTag = document.getElementById('cursorTag');
    if(cursorTag){
      var ctLabel = cursorTag.querySelector('span');
      var ctPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
      var ctCur = { x: ctPos.x, y: ctPos.y };
      var ctScale = 0, ctTargetScale = 0;
      document.addEventListener('mousemove', function(e){ ctPos.x = e.clientX; ctPos.y = e.clientY; });
      (function ctLoop(){
        ctCur.x += (ctPos.x - ctCur.x) * 0.22;
        ctCur.y += (ctPos.y - ctCur.y) * 0.22;
        ctScale += (ctTargetScale - ctScale) * 0.22;
        cursorTag.style.transform = 'translate3d(' + ctCur.x.toFixed(1) + 'px,' + ctCur.y.toFixed(1) + 'px,0) scale(' + ctScale.toFixed(3) + ')';
        requestAnimationFrame(ctLoop);
      })();
      function bindCursorTag(selector, text){
        document.querySelectorAll(selector).forEach(function(el){
          el.addEventListener('mouseenter', function(){
            if(ctLabel) ctLabel.textContent = text;
            cursorTag.classList.add('show');
            ctTargetScale = 1;
          });
          el.addEventListener('mouseleave', function(){
            cursorTag.classList.remove('show');
            ctTargetScale = 0;
          });
        });
      }
      bindCursorTag('.highlight-card.video', 'İzle');
      bindCursorTag('.product-card, .highlight-card.product', 'Gör');
      bindCursorTag('.guest-chip', 'Keşfet');
      bindCursorTag('.highlights-track-wrap', 'Kaydır');
    }
  }

  /* ---------- modal system (video + product) ---------- */
  function openModal(id){
    var m = document.getElementById(id);
    if(!m) return;
    m.classList.add('open');
    m.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeModal(m){
    if(!m) return;
    m.classList.remove('open');
    m.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if(m.id === 'videoModal') stopVideoModal();
  }

  /* ---------- real YouTube playback ----------
     Real episodes play inline: clicking a card opens the video modal and drops a genuine
     youtube-nocookie.com iframe (autoplay) into the thumbnail slot, so the visit stays on this
     page and still counts as a real YouTube view. Note for wherever this file ends up hosted:
     a page published straight through Claude's own Artifact preview runs under a strict CSP
     that has no allowance for third-party iframes, so the embed will not render there -- that
     is a limitation of that one preview surface, not of this file. Once this index.html is
     deployed on its own domain (or opened directly) there is no such restriction and the
     embed plays normally. The modal's "YouTube'da Aç" link still opens the real watch page in
     a new tab as a fallback for visitors on a host that blocks the iframe. */
  function stopVideoModal(){
    var modalThumb = document.getElementById('videoModalThumb');
    if(!modalThumb) return;
    var iframe = modalThumb.querySelector('iframe');
    if(iframe) iframe.remove();
    modalThumb.classList.remove('playing');
  }

  /* ---------- shared-element (FLIP) transition: card photo -> modal photo ----------
     Design purpose: the brief explicitly asks that an element physically become part of the
     next scene instead of the old content fading out while the new content fades in separately.
     Opening a video/product modal is the one moment on this page where a small thumbnail
     legitimately becomes a large hero image, so it's the natural place for this technique.
     Interaction logic: capture the clicked card's photo rect (First), let the modal populate
     and lay out normally (Last), then play the inverted delta back to identity so the image
     visibly grows from the card into the modal slot instead of just appearing there.
     Technology: classic FLIP via GSAP fromTo on transform only (translate + scale) -- no
     layout properties touch, so it stays on the animate-transform/opacity performance rule.
     Falls back to the plain instant modal open under reduced-motion or without GSAP. */
  function flipIntoModal(sourceEl, modalId, targetSelector){
    if(!sourceEl || premiumReduce || typeof window.gsap === 'undefined'){ openModal(modalId); return; }
    var first = sourceEl.getBoundingClientRect();
    if(!first.width || !first.height){ openModal(modalId); return; }
    openModal(modalId);
    requestAnimationFrame(function(){
      var target = document.querySelector('#' + modalId + ' ' + targetSelector);
      if(!target){ return; }
      var last = target.getBoundingClientRect();
      if(!last.width || !last.height) return;
      var scaleX = first.width / last.width;
      var scaleY = first.height / last.height;
      var dx = (first.left + first.width / 2) - (last.left + last.width / 2);
      var dy = (first.top + first.height / 2) - (last.top + last.height / 2);
      gsap.fromTo(target,
        { x: dx, y: dy, scaleX: scaleX, scaleY: scaleY, transformOrigin: '50% 50%' },
        { x: 0, y: 0, scaleX: 1, scaleY: 1, duration: .65, ease: 'power3.out', clearProps: 'transform' }
      );
    });
  }
  document.querySelectorAll('[data-close]').forEach(function(btn){
    btn.addEventListener('click', function(){
      closeModal(document.getElementById(btn.getAttribute('data-close')));
    });
  });
  document.querySelectorAll('.modal-backdrop, .search-overlay, .archive-overlay').forEach(function(ov){
    ov.addEventListener('click', function(e){
      if(e.target === ov) closeModal(ov);
    });
  });
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
      document.querySelectorAll('.modal-backdrop.open, .search-overlay.open, .archive-overlay.open').forEach(closeModal);
    }
  });

  function wireVideoCards(selector){
    /* Videos play inline, right inside the card -- no separate modal/screen.
       The small YouTube badge (top-right of each thumb) is the only way out to
       youtube.com, and it stops propagation so it never triggers inline play. */
    document.querySelectorAll(selector).forEach(function(card){
      var ytId = card.getAttribute('data-yt') || '';
      var ytBtn = card.querySelector('.highlight-yt-btn');
      if(ytBtn && ytId){ ytBtn.href = 'https://www.youtube.com/watch?v=' + ytId; }
      card.addEventListener('click', function(){
        var thumbEl = card.querySelector('.video-thumb, .highlight-thumb');
        var titleEl = card.querySelector('.video-title, .highlight-meta b');
        if(!ytId || !thumbEl || thumbEl.classList.contains('playing')) return;
        /* only one inline video may play at a time -- leaving old iframes running in the
           background (each decoding video + running its own JS) is what made the page
           bog down/"freeze" once a visitor had clicked a few of them. */
        document.querySelectorAll('.highlight-thumb.playing').forEach(function(other){
          var oldIframe = other.querySelector('.inline-yt-iframe');
          if(oldIframe) oldIframe.remove();
          other.classList.remove('playing');
        });
        var iframe = document.createElement('iframe');
        iframe.className = 'inline-yt-iframe';
        iframe.src = 'https://www.youtube-nocookie.com/embed/' + ytId + '?autoplay=1&rel=0&modestbranding=1';
        iframe.title = titleEl ? titleEl.textContent : 'Demleme bölümü';
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
        iframe.setAttribute('allowfullscreen', '');
        thumbEl.appendChild(iframe);
        thumbEl.classList.add('playing');
        card.style.transform = '';
      });
    });
  }
  wireVideoCards('.highlight-card.video');

  var productQty = 1;
  var currentProductId = null;
  function wireProductCards(selector){
    document.querySelectorAll(selector).forEach(function(card){
      card.addEventListener('click', function(){
        var photoEl = card.querySelector('.product-photo, .highlight-thumb');
        var nameEl = card.querySelector('.product-name, .highlight-meta b');
        var priceEl = card.querySelector('.product-price, .highlight-meta span');
        var modalPhoto = document.getElementById('productModalPhoto');
        if(modalPhoto && photoEl){
          modalPhoto.style.background = getComputedStyle(photoEl).backgroundColor;
          modalPhoto.innerHTML = '';
          var svg = photoEl.querySelector('svg');
          if(svg) modalPhoto.appendChild(svg.cloneNode(true));
        }
        var nameTarget = document.getElementById('productModalName');
        var priceTarget = document.getElementById('productModalPrice');
        if(nameTarget) nameTarget.textContent = nameEl ? nameEl.textContent : 'Ürün';
        if(priceTarget) priceTarget.textContent = priceEl ? priceEl.textContent : '';
        var favBtnEl = card.querySelector('.fav-btn');
        currentProductId = favBtnEl ? favBtnEl.getAttribute('data-fav-id') : (nameEl ? nameEl.textContent : 'urun');
        productQty = 1;
        var qtyVal = document.getElementById('productQtyVal');
        if(qtyVal) qtyVal.textContent = productQty;
        var addMsg = document.getElementById('productAddMsg');
        if(addMsg) addMsg.hidden = true;
        flipIntoModal(photoEl, 'productModal', '#productModalPhoto');
      });
    });
  }
  wireProductCards('.product-card');
  wireProductCards('.highlight-card.product');

  var qtyMinus = document.getElementById('productQtyMinus');
  var qtyPlus = document.getElementById('productQtyPlus');
  var qtyValEl = document.getElementById('productQtyVal');
  if(qtyMinus && qtyPlus && qtyValEl){
    qtyMinus.addEventListener('click', function(){
      productQty = Math.max(1, productQty - 1);
      qtyValEl.textContent = productQty;
    });
    qtyPlus.addEventListener('click', function(){
      productQty = Math.min(9, productQty + 1);
      qtyValEl.textContent = productQty;
    });
  }
  var addBtn = document.getElementById('productAddBtn');
  if(addBtn){
    addBtn.addEventListener('click', function(){
      var msg = document.getElementById('productAddMsg');
      if(msg) msg.hidden = false;
      var nameTarget = document.getElementById('productModalName');
      var priceTarget = document.getElementById('productModalPrice');
      addToCart({
        id: currentProductId || (nameTarget ? nameTarget.textContent : 'urun'),
        name: nameTarget ? nameTarget.textContent : 'Ürün',
        price: priceTarget ? priceTarget.textContent : '',
        qty: productQty
      });
    });
  }

  /* ---------- FAQ accordion (single-open, accessible) ---------- */
  (function(){
    var faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(function(item, i){
      var btn = item.querySelector('.faq-q');
      var panel = item.querySelector('.faq-a');
      if(!btn || !panel) return;
      var pid = 'faqPanel' + i;
      panel.id = pid;
      btn.setAttribute('aria-controls', pid);
      var isOpen = i === 0;
      item.classList.toggle('open', isOpen);
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      btn.addEventListener('click', function(){
        var willOpen = !item.classList.contains('open');
        faqItems.forEach(function(other){
          if(other !== item){
            other.classList.remove('open');
            var ob = other.querySelector('.faq-q');
            if(ob) ob.setAttribute('aria-expanded', 'false');
          }
        });
        item.classList.toggle('open', willOpen);
        btn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
      });
    });
  })();

  /* ---------- search overlay ---------- */
  var searchBtn = document.getElementById('searchBtn');
  var searchOverlay = document.getElementById('searchOverlay');
  var searchInput = document.getElementById('searchInput');
  var searchResults = document.getElementById('searchResults');
  var searchIndex = null;

  function buildSearchIndex(){
    var items = [];
    document.querySelectorAll('#highlightsTrack .highlight-card.video').forEach(function(card){
      var title = card.querySelector('.highlight-meta b');
      var sub = card.querySelector('.highlight-meta span');
      if(title) items.push({type:'Bölüm', title:title.textContent, sub: sub ? sub.textContent : '', target: card});
    });
    document.querySelectorAll('#shopTrack .product-card').forEach(function(card){
      var name = card.querySelector('.product-name');
      var price = card.querySelector('.product-price');
      if(name) items.push({type:'Ürün', title:name.textContent, sub: price ? price.textContent : '', target: card});
    });
    document.querySelectorAll('.guest-chip').forEach(function(chip){
      var name = chip.querySelector('.guest-chip-name');
      var role = chip.querySelector('.guest-chip-role');
      if(name) items.push({type:'Konuk', title:name.textContent, sub: role ? role.textContent : '', target: chip});
    });
    document.querySelectorAll('.faq-item').forEach(function(item){
      var q = item.querySelector('.faq-q');
      if(q){
        var qText = q.childNodes[0] ? q.childNodes[0].textContent.trim() : q.textContent.trim();
        items.push({type:'SSS', title: qText, sub:'', target:item});
      }
    });
    return items;
  }

  function renderSearchResults(query){
    if(!searchIndex) searchIndex = buildSearchIndex();
    if(!searchResults) return;
    searchResults.innerHTML = '';
    var q = query.trim().toLocaleLowerCase('tr');
    var matches = q ? searchIndex.filter(function(it){
      return it.title.toLocaleLowerCase('tr').indexOf(q) !== -1;
    }) : searchIndex.slice(0, 6);
    if(!matches.length){
      var p = document.createElement('p');
      p.className = 'search-empty';
      p.textContent = 'Sonuç bulunamadı.';
      searchResults.appendChild(p);
      return;
    }
    matches.forEach(function(it){
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'search-result-item';
      var typeSpan = document.createElement('span');
      typeSpan.className = 'search-result-type';
      typeSpan.textContent = it.type;
      var titleSpan = document.createElement('span');
      titleSpan.className = 'search-result-title';
      titleSpan.textContent = it.title;
      var subSpan = document.createElement('span');
      subSpan.className = 'search-result-sub';
      subSpan.textContent = it.sub;
      btn.appendChild(typeSpan); btn.appendChild(titleSpan); btn.appendChild(subSpan);
      btn.addEventListener('click', function(){
        closeModal(searchOverlay);
        if(it.target && it.target.scrollIntoView){
          it.target.scrollIntoView({behavior:'smooth', block:'center'});
          var prevShadow = it.target.style.boxShadow;
          it.target.style.transition = (it.target.style.transition ? it.target.style.transition + ', ' : '') + 'box-shadow .3s';
          it.target.style.boxShadow = '0 0 0 3px var(--rust)';
          setTimeout(function(){ it.target.style.boxShadow = prevShadow; }, 1200);
        }
      });
      searchResults.appendChild(btn);
    });
  }

  if(searchBtn && searchOverlay){
    searchBtn.addEventListener('click', function(){
      openModal('searchOverlay');
      renderSearchResults('');
      setTimeout(function(){ if(searchInput) searchInput.focus(); }, 60);
    });
    if(searchInput){
      searchInput.addEventListener('input', function(){ renderSearchResults(searchInput.value); });
    }
    document.addEventListener('keydown', function(e){
      if((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k'){
        e.preventDefault();
        openModal('searchOverlay');
        renderSearchResults('');
        setTimeout(function(){ if(searchInput) searchInput.focus(); }, 60);
      }
    });
  }

  /* ---------- dark mode toggle ---------- */
  var themeToggle = document.getElementById('themeToggle');
  try{
    if(localStorage.getItem('demleme-theme') === 'dark'){ document.documentElement.classList.add('dark-mode'); }
  }catch(e){}
  if(themeToggle){
    themeToggle.addEventListener('click', function(){
      document.documentElement.classList.toggle('dark-mode');
      try{ localStorage.setItem('demleme-theme', document.documentElement.classList.contains('dark-mode') ? 'dark' : 'light'); }catch(e){}
    });
  }

  /* ---------- parallax (whole-site depth layer) ----------
     Drives the independent CSS \`translate\` property (not \`transform\`)
     so a parallax offset composes cleanly with any element that
     already runs its own transform-based CSS keyframe animation
     (orb breathing, floating marks, hover states, etc.) instead of
     fighting it for the same property every frame. GSAP ScrollTrigger
     drives it when available (smoother scrub tied to Lenis), with a
     rAF-throttled scroll-listener fallback otherwise. data-speed on
     each .parallax element sets its depth: positive drifts opposite
     to scroll, negative drifts with it — mixing signs across a
     section is what reads as depth rather than everything sliding
     together. */
  var parallaxReduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var parallaxEls = document.querySelectorAll('.parallax');
  var parallaxHasGSAP = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';
  if(!parallaxReduce && parallaxEls.length){
    if(parallaxHasGSAP){
      parallaxEls.forEach(function(el){
        var speed = parseFloat(el.getAttribute('data-speed')) || 0.1;
        var range = -speed * 220;
        ScrollTrigger.create({
          trigger: el, start: 'top bottom', end: 'bottom top', scrub: 0.6,
          onUpdate: function(self){
            el.style.translate = '0px ' + (range * self.progress).toFixed(2) + 'px';
          }
        });
      });
    } else {
      var parallaxTicking = false;
      var updateParallax = function(){
        var vh = window.innerHeight;
        parallaxEls.forEach(function(el){
          var speed = parseFloat(el.getAttribute('data-speed')) || 0.1;
          var range = -speed * 220;
          var rect = el.getBoundingClientRect();
          // same 'top bottom' -> 'bottom top' 0..1 progress the GSAP/ScrollTrigger
          // branch above uses, so a fallback (no CDN, offline, blocked script)
          // moves elements exactly as far as the primary path -- never further,
          // which matters once data-speed gets large enough (real photo layers)
          // that an unbounded, position-proportional drift could pull the layer
          // past the oversized buffer it was cropped to.
          var progress = (vh - rect.top) / (vh + rect.height);
          if(progress < 0) progress = 0; else if(progress > 1) progress = 1;
          el.style.translate = '0px ' + (range * progress).toFixed(2) + 'px';
        });
        parallaxTicking = false;
      };
      window.addEventListener('scroll', function(){
        if(!parallaxTicking){ parallaxTicking = true; requestAnimationFrame(updateParallax); }
      }, {passive:true});
      updateParallax();
    }
  }

  /* ---------- hero exit: removed ----------
     This used to run a scroll-scrubbed fade/scale (and, before that, a pinned circular-mask
     wipe) as the hero left view. Both versions turned out fragile against real-world layout
     timing -- the pinned version could freeze mid-wipe as a stray disc on the seam with
     "Öne Çıkanlar", and the non-pinned scrub version could read as partial progress even
     near the very top of the page (any small scroll/layout offset shifted the trigger's
     start), leaving the headline and CTAs looking washed-out at rest instead of only while
     actually scrolling past. Two confirmed visible bugs from one effect is the signal to
     cut it, not iterate on it blindly without a way to test the real GSAP timing live.
     The hero still reads as "alive" via the ambient CSS rotation wash (.hero::after) and the
     amplified .reveal/.reveal-scale entrance -- both are guaranteed-safe, non-scroll-jacking
     effects that can't get stuck or fade content at rest. */

  /* ---------- highlights cards: staggered pop-in ----------
     Design purpose: "Öne Çıkanlar" cards previously had zero entrance animation of their own --
     they just appeared fully formed. This gives them one when GSAP + ScrollTrigger are
     available: a discrete (non-scrubbed, non-pinned) batch reveal with a slight 3D rotate-in
     and a small overshoot, staggered per card.
     "Discrete" matters here -- after two earlier scroll-*scrubbed* effects on this page caused
     visible bugs (a stuck mask, a fade that never fully finished), this deliberately avoids
     scrub/pin entirely: each card plays once when it enters view, so there's no continuous
     scroll-position math to desync from real layout and freeze mid-state.
     Safety: the hidden starting state (autoAlpha:0) is only ever set here, inside the same
     guarded block that already confirmed GSAP loaded -- so if GSAP/ScrollTrigger fail to load,
     this whole IIFE bails before touching the cards at all and they simply render at their
     plain, fully-visible default (no .reveal class in the HTML for them), never stuck hidden. */
  (function(){
    if(premiumReduce) return;
    if(typeof window.gsap === 'undefined' || typeof window.ScrollTrigger === 'undefined') return;
    var cards = document.querySelectorAll('.highlights-track .highlight-card');
    if(!cards.length) return;
    try{
      gsap.set(cards, { autoAlpha: 0, y: 34, scale: .9, rotateX: -12, transformPerspective: 700 });
      ScrollTrigger.batch(cards, {
        start: 'top 92%',
        once: true,
        onEnter: function(batch){
          gsap.to(batch, { autoAlpha: 1, y: 0, scale: 1, rotateX: 0, duration: .7, ease: 'back.out(1.6)', stagger: 0.08 });
        }
      });
      /* absolute safety net matching the pattern used by the preloader above: whatever else
         happens, these cards must never stay invisible forever */
      setTimeout(function(){ gsap.set(cards, { clearProps: 'all' }); }, 15000);
    }catch(e){}
  })();

  /* ---------- highlights: true scroll-linked horizontal panels ----------
     Design purpose: the brief explicitly asks for at least one section where vertical scroll
     becomes horizontal movement of large panels, continuous and scroll-linked, and explicitly
     NOT a classic carousel. "Öne Çıkanlar" already mixes editorial video/product panels in a
     single strip, making it the natural candidate rather than inventing a new section.
     Interaction logic: the section pins for exactly the track's own horizontal overflow
     distance; scroll progress maps 1:1 to translateX, so scrolling and "dragging" the strip feel
     like the same gesture instead of buttons stepping through pages.
     Technology: one ScrollTrigger (scrub + pin) writing transform directly in onUpdate --
     cheaper than a GSAP tween per frame and avoids fighting the track's own native scroll,
     which is switched off (via the [data-hscroll] flag below) only once this takes over.
     Responsive: desktop-only (ScrollTrigger.matchMedia, >900px). Below that breakpoint -- and
     under reduced-motion, where this IIFE returns before ever running -- the section keeps its
     original behavior untouched: native horizontal swipe/scroll with snap and the prev/next
     buttons, which is the right mobile interaction for a strip like this, not a shrunk pin. */
  (function(){
    if(premiumReduce) return;
    if(typeof window.gsap === 'undefined' || typeof window.ScrollTrigger === 'undefined') return;
    var sec = document.querySelector('.highlights-sec');
    var track = document.getElementById('highlightsTrack');
    if(!sec || !track) return;
    try{
      ScrollTrigger.matchMedia({
        '(min-width: 901px)': function(){
          sec.setAttribute('data-hscroll', '');
          function distance(){ return Math.max(0, track.scrollWidth - track.clientWidth); }
          var st = ScrollTrigger.create({
            trigger: sec, start: 'top top',
            end: function(){ return '+=' + (distance() + 260); },
            scrub: 0.5, pin: true, pinSpacing: true, invalidateOnRefresh: true,
            onUpdate: function(self){
              track.style.transform = 'translate3d(' + (-distance() * self.progress).toFixed(1) + 'px,0,0)';
            }
          });
          return function(){
            sec.removeAttribute('data-hscroll');
            track.style.transform = '';
            st.kill();
          };
        }
      });
    }catch(e){ sec.removeAttribute('data-hscroll'); }
  })();

  /* ---------- product zoom / magnifier ---------- */
  document.querySelectorAll('.product-photo.zoomable').forEach(function(photo){
    var svg = photo.querySelector('svg');
    if(!svg) return;
    photo.addEventListener('mousemove', function(e){
      var r = photo.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width * 100;
      var py = (e.clientY - r.top) / r.height * 100;
      svg.style.transformOrigin = px + '% ' + py + '%';
      svg.style.transform = 'scale(1.6)';
    });
    photo.addEventListener('mouseleave', function(){ svg.style.transform = ''; });
  });

  /* ---------- favorites (localStorage) ---------- */
  var FAV_KEY = 'demleme-favs';
  function getFavs(){ try{ return JSON.parse(localStorage.getItem(FAV_KEY) || '[]'); }catch(e){ return []; } }
  function setFavs(arr){ try{ localStorage.setItem(FAV_KEY, JSON.stringify(arr)); }catch(e){} }
  function updateFavCount(){
    var favs = getFavs();
    var favCountEl = document.getElementById('favCount');
    if(favCountEl){ favCountEl.textContent = favs.length; favCountEl.hidden = favs.length === 0; }
  }
  document.querySelectorAll('.fav-btn').forEach(function(btn){
    var id = btn.getAttribute('data-fav-id');
    if(getFavs().indexOf(id) !== -1) btn.classList.add('active');
    btn.addEventListener('click', function(e){
      e.stopPropagation();
      var favs = getFavs();
      var idx = favs.indexOf(id);
      if(idx === -1){ favs.push(id); btn.classList.add('active'); }
      else { favs.splice(idx, 1); btn.classList.remove('active'); }
      setFavs(favs);
      updateFavCount();
    });
  });
  updateFavCount();

  function renderFavoritesList(){
    if(!searchResults) return;
    var favs = getFavs();
    searchResults.innerHTML = '';
    if(!favs.length){
      var p = document.createElement('p');
      p.className = 'search-empty';
      p.textContent = 'Henüz favori eklemedin — kartlardaki kalp ikonuna tıkla.';
      searchResults.appendChild(p);
      return;
    }
    favs.forEach(function(id){
      var card = document.querySelector('[data-fav-id="' + id + '"]');
      if(!card) return;
      var wrap = card.closest('.video-card, .product-card');
      if(!wrap) return;
      var titleEl = wrap.querySelector('.video-title, .product-name');
      var subEl = wrap.querySelector('.video-num, .product-price');
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'search-result-item';
      var typeSpan = document.createElement('span');
      typeSpan.className = 'search-result-type';
      typeSpan.textContent = id.charAt(0) === 'v' ? 'Bölüm' : 'Ürün';
      var titleSpan = document.createElement('span');
      titleSpan.className = 'search-result-title';
      titleSpan.textContent = titleEl ? titleEl.textContent : '';
      var subSpan = document.createElement('span');
      subSpan.className = 'search-result-sub';
      subSpan.textContent = subEl ? subEl.textContent : '';
      btn.appendChild(typeSpan); btn.appendChild(titleSpan); btn.appendChild(subSpan);
      btn.addEventListener('click', function(){
        closeModal(searchOverlay);
        wrap.scrollIntoView({behavior:'smooth', block:'center'});
      });
      searchResults.appendChild(btn);
    });
  }
  var favBtn = document.getElementById('favBtn');
  if(favBtn && searchOverlay){
    favBtn.addEventListener('click', function(){
      openModal('searchOverlay');
      if(searchInput) searchInput.value = '';
      renderFavoritesList();
    });
  }

  /* ---------- cart (localStorage) ----------
     Same pattern as favorites above: a plain array persisted to localStorage, no backend.
     This is a single static HTML file with no server, so "checkout" can only ever be a
     client-side mock -- it never asks for payment details and never claims to charge
     anything; it just clears the cart with a friendly confirmation, same spirit as the
     existing "Sepete eklendi" message. */
  var CART_KEY = 'demleme-cart';
  function getCart(){ try{ return JSON.parse(localStorage.getItem(CART_KEY) || '[]'); }catch(e){ return []; } }
  function setCart(arr){ try{ localStorage.setItem(CART_KEY, JSON.stringify(arr)); }catch(e){} }
  function parsePrice(str){
    if(!str) return 0;
    var m = String(str).replace(/\./g,'').match(/\d+/);
    return m ? parseInt(m[0], 10) : 0;
  }
  function updateCartCount(){
    var cart = getCart();
    var total = cart.reduce(function(sum, it){ return sum + (it.qty || 1); }, 0);
    var el = document.getElementById('cartCount');
    if(el){ el.textContent = total; el.hidden = total === 0; }
  }
  function addToCart(item){
    var cart = getCart();
    var existing = cart.filter(function(it){ return it.id === item.id; })[0];
    if(existing){ existing.qty += item.qty || 1; }
    else { cart.push({ id: item.id, name: item.name, price: item.price, qty: item.qty || 1 }); }
    setCart(cart);
    updateCartCount();
    renderCartDrawer();
  }
  function renderCartDrawer(){
    var list = document.getElementById('cartList');
    var foot = document.getElementById('cartFoot');
    var subtotalEl = document.getElementById('cartSubtotal');
    if(!list) return;
    var cart = getCart();
    if(!cart.length){
      list.innerHTML = '<p class="cart-empty" id="cartEmptyMsg">Sepetin boş — <a href="#shop" data-close="cartDrawer">ürünlere göz at</a>.</p>';
      var emptyLink = list.querySelector('a[data-close]');
      if(emptyLink) emptyLink.addEventListener('click', function(){ closeModal(document.getElementById('cartDrawer')); });
      if(foot) foot.hidden = true;
      return;
    }
    if(foot) foot.hidden = false;
    list.innerHTML = '';
    var subtotal = 0;
    cart.forEach(function(item){
      subtotal += parsePrice(item.price) * item.qty;
      var row = document.createElement('div');
      row.className = 'cart-item';
      row.setAttribute('data-id', item.id);
      row.innerHTML =
        '<div class="cart-item-info"><b></b><span></span></div>' +
        '<div class="cart-item-qty"><button type="button" class="cart-qty-minus" aria-label="Azalt">–</button><span></span><button type="button" class="cart-qty-plus" aria-label="Arttır">+</button></div>' +
        '<button type="button" class="cart-item-remove" aria-label="Kaldır">&times;</button>';
      row.querySelector('.cart-item-info b').textContent = item.name;
      row.querySelector('.cart-item-info span').textContent = item.price;
      row.querySelector('.cart-item-qty span').textContent = item.qty;
      list.appendChild(row);
    });
    if(subtotalEl) subtotalEl.textContent = '₺' + formatTr(subtotal);
  }
  document.getElementById('cartList') && document.getElementById('cartList').addEventListener('click', function(e){
    var row = e.target.closest ? e.target.closest('.cart-item') : null;
    if(!row) return;
    var id = row.getAttribute('data-id');
    var cart = getCart();
    var item = cart.filter(function(it){ return it.id === id; })[0];
    if(!item) return;
    if(e.target.classList.contains('cart-qty-plus')){
      item.qty = Math.min(9, item.qty + 1);
    } else if(e.target.classList.contains('cart-qty-minus')){
      item.qty -= 1;
      if(item.qty <= 0) cart = cart.filter(function(it){ return it.id !== id; });
    } else if(e.target.classList.contains('cart-item-remove')){
      cart = cart.filter(function(it){ return it.id !== id; });
    } else {
      return;
    }
    setCart(cart);
    updateCartCount();
    renderCartDrawer();
  });
  var cartBtn = document.getElementById('cartBtn');
  if(cartBtn){
    cartBtn.addEventListener('click', function(){
      renderCartDrawer();
      openModal('cartDrawer');
    });
  }
  var cartCheckoutBtn = document.getElementById('cartCheckoutBtn');
  if(cartCheckoutBtn){
    cartCheckoutBtn.addEventListener('click', function(){
      var cart = getCart();
      if(!cart.length) return;
      setCart([]);
      updateCartCount();
      /* clear the item list but keep the foot (with its checkout button) visible so the
         confirmation message has somewhere to show -- renderCartDrawer() itself hides the
         whole foot once the cart is empty, which would hide the message along with it */
      var list = document.getElementById('cartList');
      if(list) list.innerHTML = '';
      cartCheckoutBtn.disabled = true;
      var msg = document.getElementById('cartCheckoutMsg');
      if(msg){
        msg.hidden = false;
        setTimeout(function(){
          msg.hidden = true;
          cartCheckoutBtn.disabled = false;
          renderCartDrawer();
        }, 1600);
      } else {
        renderCartDrawer();
      }
    });
  }
  updateCartCount();

  /* ---------- guest bio modal ---------- */
  document.querySelectorAll('.guest-chip').forEach(function(chip){
    chip.style.cursor = 'pointer';
    chip.addEventListener('click', function(){
      var name = chip.querySelector('.guest-chip-name');
      var role = chip.querySelector('.guest-chip-role');
      var avatar = chip.querySelector('.guest-chip-avatar');
      var bio = chip.getAttribute('data-bio');
      var mName = document.getElementById('guestModalName');
      var mRole = document.getElementById('guestModalRole');
      var mBio = document.getElementById('guestModalBio');
      var mAvatar = document.getElementById('guestModalAvatar');
      if(mName) mName.textContent = name ? name.textContent : '';
      if(mRole) mRole.textContent = role ? role.textContent : '';
      if(mBio) mBio.textContent = bio || '';
      if(mAvatar && avatar){ mAvatar.textContent = avatar.textContent; mAvatar.style.background = avatar.style.background; }
      openModal('guestModal');
    });
  });

  /* ---------- episode archive overlay ---------- */
  var archiveBtn = document.getElementById('archiveBtn');
  var archiveOverlay = document.getElementById('archiveOverlay');
  if(archiveBtn && archiveOverlay){
    archiveBtn.addEventListener('click', function(){ openModal('archiveOverlay'); });
  }
  document.querySelectorAll('.archive-filter').forEach(function(btn){
    btn.addEventListener('click', function(){
      document.querySelectorAll('.archive-filter').forEach(function(b){ b.classList.remove('active'); });
      btn.classList.add('active');
      var tag = btn.getAttribute('data-tag');
      document.querySelectorAll('.archive-row').forEach(function(row){
        row.hidden = !(tag === 'hepsi' || row.getAttribute('data-tag') === tag);
      });
    });
  });
  document.querySelectorAll('.archive-row').forEach(function(row){
    row.addEventListener('click', function(){ closeModal(archiveOverlay); });
  });


  /* ---------- QR code ---------- */
  var qrTarget = document.getElementById('qrCanvas');
  if(qrTarget){
    if(window.QRCode){
      try{ new QRCode(qrTarget, {text:'https://youtube.com', width:64, height:64, colorDark:'#16130E', colorLight:'#ffffff'}); }
      catch(e){ qrTarget.textContent = ''; }
    } else {
      qrTarget.innerHTML = '<div style="width:64px;height:64px;border-radius:8px;background:var(--cream);"></div>';
    }
  }

  /* ---------- poll widget ---------- */
  var POLL_KEY = 'demleme-poll-vote';
  var pollOpts = document.querySelectorAll('.poll-opt');
  var pollCounts = {a:42, b:35, c:23};
  var pollReduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function countUpPct(el, from, to){
    if(pollReduceMotion || !el){ if(el) el.textContent = to + '%'; return; }
    var dur = 600, start = null;
    function step(ts){
      if(!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(from + (to - from) * eased) + '%';
      if(p < 1) requestAnimationFrame(step);
      else el.textContent = to + '%';
    }
    requestAnimationFrame(step);
  }
  function renderPoll(){
    var total = pollCounts.a + pollCounts.b + pollCounts.c;
    pollOpts.forEach(function(opt){
      var key = opt.getAttribute('data-poll');
      var pct = total ? Math.round(pollCounts[key] / total * 100) : 0;
      var fill = opt.querySelector('.poll-opt-fill');
      var pctEl = opt.querySelector('.poll-pct');
      if(fill) fill.style.width = pct + '%';
      if(pctEl){
        var from = parseInt(pctEl.textContent, 10) || 0;
        countUpPct(pctEl, from, pct);
      }
    });
  }
  if(pollOpts.length){
    var votedKey = null;
    try{ votedKey = localStorage.getItem(POLL_KEY); }catch(e){}
    if(votedKey && pollCounts.hasOwnProperty(votedKey)){
      pollCounts[votedKey] += 1;
      pollOpts.forEach(function(o){
        var isVoted = o.getAttribute('data-poll') === votedKey;
        o.classList.toggle('voted', isVoted);
        o.setAttribute('aria-checked', isVoted ? 'true' : 'false');
      });
      var pn = document.getElementById('pollNote');
      if(pn) pn.textContent = 'Oyun kaydedildi, teşekkürler!';
    }
    renderPoll();
    pollOpts.forEach(function(opt){
      opt.addEventListener('click', function(){
        if(votedKey) return;
        var key = opt.getAttribute('data-poll');
        pollCounts[key] = (pollCounts[key] || 0) + 1;
        votedKey = key;
        try{ localStorage.setItem(POLL_KEY, key); }catch(e){}
        pollOpts.forEach(function(o){ o.setAttribute('aria-checked', o === opt ? 'true' : 'false'); });
        opt.classList.add('voted');
        var note = document.getElementById('pollNote');
        if(note) note.textContent = 'Oyun kaydedildi, teşekkürler!';
        renderPoll();
      });
    });
  }

  /* ---------- mini quiz ---------- */
  var quizAnswers = {};
  var quizStepIndex = 0;
  var quizSteps = document.querySelectorAll('.quiz-step');
  var quizProgressDots = document.querySelectorAll('#quizProgress i');
  function showQuizStep(i){
    quizSteps.forEach(function(s){ s.classList.toggle('active', parseInt(s.getAttribute('data-step'), 10) === i); });
    quizProgressDots.forEach(function(d, idx){ d.classList.toggle('done', idx <= i); });
  }
  document.querySelectorAll('.quiz-opt').forEach(function(opt){
    opt.addEventListener('click', function(){
      var q = opt.getAttribute('data-q');
      var v = opt.getAttribute('data-v');
      quizAnswers[q] = v;
      var nextStep = parseInt(q, 10) + 1;
      if(nextStep < quizSteps.length){
        quizStepIndex = nextStep;
        showQuizStep(quizStepIndex);
      } else {
        var tally = {a:0, b:0, c:0};
        Object.keys(quizAnswers).forEach(function(k){ tally[quizAnswers[k]] = (tally[quizAnswers[k]] || 0) + 1; });
        var winner = 'b', max = -1;
        ['a','b','c'].forEach(function(k){ if(tally[k] > max){ max = tally[k]; winner = k; } });
        var results = {
          a: {title:'Herkesi Kandırabilirsin Ama Kendini Asla', desc:'Sana en yakın bölüm bu — mutfağın sıcaklığı ve iyi bir tarif kadar keyifli.'},
          b: {title:'Biz Ne İş Yapıyoruz', desc:'Sana en yakın bölüm bu — sıcak, samimi ve anılarla dolu.'},
          c: {title:'Düğün Hazırlığı Zor İş', desc:'Sana en yakın bölüm bu — yaratıcılık ve ilhamla dolu bir sohbet.'}
        };
        var r = results[winner];
        var titleEl = document.getElementById('quizResultTitle');
        var descEl = document.getElementById('quizResultDesc');
        if(titleEl) titleEl.textContent = r.title;
        if(descEl) descEl.textContent = r.desc;
        var qBody = document.getElementById('quizBody');
        var qResult = document.getElementById('quizResult');
        if(qBody) qBody.style.display = 'none';
        if(qResult) qResult.classList.add('show');
      }
    });
  });
  var quizRestart = document.getElementById('quizRestart');
  if(quizRestart){
    quizRestart.addEventListener('click', function(e){
      e.preventDefault();
      quizAnswers = {};
      quizStepIndex = 0;
      showQuizStep(0);
      var qBody = document.getElementById('quizBody');
      var qResult = document.getElementById('quizResult');
      if(qBody) qBody.style.display = '';
      if(qResult) qResult.classList.remove('show');
    });
  }

  /* ---------- tab title trick + logo easter egg ---------- */
  var originalTitle = document.title;
  document.addEventListener('visibilitychange', function(){
    document.title = document.hidden ? 'Sofraya dön ☕' : originalTitle;
  });
  var logoClicks = 0, logoClickTimer = null;
  document.querySelectorAll('.nav-logo').forEach(function(logo){
    logo.addEventListener('click', function(e){
      logoClicks++;
      clearTimeout(logoClickTimer);
      logoClickTimer = setTimeout(function(){ logoClicks = 0; }, 1200);
      if(logoClicks >= 5){
        logoClicks = 0;
        e.preventDefault();
        logo.style.transition = 'transform .6s cubic-bezier(.3,1.6,.4,1)';
        logo.style.transform = 'rotate(360deg) scale(1.2)';
        setTimeout(function(){ logo.style.transform = ''; }, 650);
      }
    });
  });

  /* ---------- split-heading: char-by-char scroll reveal on major titles ---------- */
  (function(){
    if(premiumReduce) return;
    if(typeof window.SplitType === 'undefined' || typeof window.gsap === 'undefined' || typeof window.ScrollTrigger === 'undefined') return;
    try{
      var headings = document.querySelectorAll('.split-heading');
      var allChars = [];
      headings.forEach(function(h){
        var split = new SplitType(h, { types: 'words, chars' });
        if(!split.chars || !split.chars.length) return;
        gsap.set(split.chars, { opacity: 0, y: '0.55em', rotateX: -35, transformOrigin: '50% 100% -18px' });
        split.chars.forEach(function(c){ allChars.push(c); });
        ScrollTrigger.create({
          trigger: h,
          start: 'top 88%',
          once: true,
          onEnter: function(){
            gsap.to(split.chars, { opacity: 1, y: '0em', rotateX: 0, duration: .75, ease: 'back.out(1.5)', stagger: 0.016 });
          }
        });
      });
      /* safety net: if a trigger never fires (e.g. very fast scroll past), reveal after a delay */
      if(allChars.length){
        setTimeout(function(){
          allChars.forEach(function(c){
            if(getComputedStyle(c).opacity === '0'){ gsap.to(c, { opacity: 1, y: '0em', rotateX: 0, duration: .4 }); }
          });
        }, 4500);
      }
    }catch(e){}
  })();

})();
</script>`
      }}
    />
  );
}
