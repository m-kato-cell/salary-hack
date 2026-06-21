// salary-hack.com — 共通コンポーネント

function getDepth() {
  return window.location.pathname.includes('/pages/') ? '../' : '';
}

function renderHeader(activePage) {
  const nav = [
    { href: 'index.html', label: 'HOME', root: true },
    { href: 'pages/invest.html', label: '副業・投資' },
    { href: 'pages/tools.html', label: '仕事効率化' },
    { href: 'pages/money.html', label: '節約・お金' },
    { href: 'pages/about.html', label: '運営者情報' },
  ];
  const depth = activePage.startsWith('pages/') || getDepth() === '../' ? '../' : '';
  const navHtml = nav.map(p => {
    const href = depth + (p.root ? 'index.html' : p.href);
    const isActive = activePage === p.href || activePage === p.href.replace('pages/','');
    return `<a href="${href}" class="${isActive ? 'active' : ''}">${p.label}</a>`;
  }).join('');

  document.getElementById('header').innerHTML = `
    <header class="site-header">
      <div class="header-inner">
        <a href="${depth}index.html" class="site-logo">
          salary<span>-hack</span>.com
          <span class="header-tagline">REAL REVIEWS FOR WORKING ADULTS</span>
        </a>
        <nav class="global-nav" aria-label="グローバルナビゲーション">
          ${navHtml}
        </nav>
      </div>
    </header>
  `;
}

function renderBreadcrumb(items) {
  const depth = getDepth();
  const html = items.map((item, i) => {
    if (i === items.length - 1) return `<span>${item.label}</span>`;
    return `<a href="${item.href}">${item.label}</a><span class="breadcrumb-sep">›</span>`;
  }).join('');

  document.getElementById('breadcrumb').innerHTML = `
    <nav class="breadcrumb" aria-label="パンくずリスト">
      <div class="container">
        <a href="${depth}index.html">HOME</a>
        <span class="breadcrumb-sep">›</span>
        ${html}
      </div>
    </nav>
  `;
}

function renderFooter() {
  const depth = getDepth();
  document.getElementById('footer').innerHTML = `
    <footer class="site-footer">
      <div class="footer-widgets">
        <div>
          <div class="footer-logo">salary<span>-hack</span>.com</div>
          <p class="footer-desc">忙しい会社員のお金と時間をスマートにする実践メディア。副業・投資・仕事効率化を、実際に試した視点で紹介します。</p>
          <p class="footer-affiliate-note">当サイトはA8.netを利用したアフィリエイト広告を含みます。報酬の有無にかかわらず、実体験と読者の判断材料を重視して掲載しています。</p>
        </div>
        <div class="footer-col">
          <h4>PROFILE</h4>
          <ul>
            <li><a href="${depth}pages/about.html">運営者情報</a></li>
            <li><a href="${depth}pages/about.html#policy">掲載方針</a></li>
            <li><a href="${depth}pages/privacy.html">プライバシーポリシー</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>CATEGORY</h4>
          <ul>
            <li><a href="${depth}pages/invest.html">副業・投資</a></li>
            <li><a href="${depth}pages/tools.html">仕事効率化</a></li>
            <li><a href="${depth}pages/money.html">節約・お金</a></li>
            <li><a href="${depth}index.html#latest">新着記事</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>CONTACT</h4>
          <ul>
            <li><a href="${depth}pages/about.html">お問い合わせ</a></li>
            <li><a href="${depth}pages/finorie.html">Finorieレビュー</a></li>
            <li><a href="${depth}pages/notta.html">Nottaレビュー</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2024 salary-hack.com All rights reserved.</span>
        <span>実体験レビュー</span>
      </div>
    </footer>
  `;
}

function renderSidebar(options = {}) {
  const { showFinorie = false, showNotta = false } = options;
  const depth = getDepth();

  const ctaWidget = showFinorie ? `
    <div class="widget cta-widget">
      <div class="widget-title">おすすめサービス</div>
      <div class="cta-widget-body">
        <div class="service-name">Finorie</div>
        <p>投資・副業知識をゲーム感覚で学べる。完全無料で始められる学習サービス。</p>
        <a href="https://px.a8.net/svt/ejp?a8mat=YOUR_FINORIE_CODE" rel="nofollow sponsored" target="_blank" class="btn-cta">無料で始める</a>
        <p class="affiliate-note" style="font-size:10px;color:#9ca3af;margin-top:8px;text-align:center">アフィリエイトリンクを含みます</p>
      </div>
    </div>
  ` : showNotta ? `
    <div class="widget cta-widget">
      <div class="widget-title">おすすめサービス</div>
      <div class="cta-widget-body">
        <div class="service-name">Notta</div>
        <p>会議録音を自動でテキスト化。議事録作成の時間を短縮したい人向け。</p>
        <a href="https://px.a8.net/svt/ejp?a8mat=YOUR_NOTTA_CODE" rel="nofollow sponsored" target="_blank" class="btn-cta">無料で試す</a>
        <p class="affiliate-note" style="font-size:10px;color:#9ca3af;margin-top:8px;text-align:center">アフィリエイトリンクを含みます</p>
      </div>
    </div>
  ` : `
    <div class="widget cta-widget">
      <div class="widget-title">注目サービス</div>
      <div class="cta-widget-body">
        <div class="service-name">Finorie</div>
        <p>投資・副業を無料で学ぶ</p>
        <a href="${depth}pages/finorie.html" class="btn-cta">レビューを読む</a>
        <div class="service-name" style="margin-top:18px">Notta</div>
        <p>議事録作成を自動化する</p>
        <a href="${depth}pages/notta.html" class="btn-cta-sub">レビューを読む</a>
      </div>
    </div>
  `;

  document.getElementById('sidebar').innerHTML = `
    <aside class="sidebar" aria-label="サイドバー">
      <div class="widget">
        <div class="widget-title">プロフィール</div>
        <div class="widget-body profile-widget">
          <div class="profile-avatar" aria-hidden="true">SH</div>
          <div class="profile-name">Salary Hack編集部</div>
          <p class="profile-desc">30代会社員。副業5年、投資8年。実際に試したサービスやノウハウのみ紹介しています。</p>
          <div class="profile-mini-stats"><span>実体験重視</span><span>正直レビュー</span></div>
        </div>
      </div>

      ${ctaWidget}

      <div class="widget">
        <div class="widget-title">人気記事</div>
        <div class="widget-body">
          <ol class="ranking-list">
            <li class="ranking-item"><span class="ranking-num">1</span><a href="${depth}pages/finorie.html">NISA・副業の始め方をゲームで学べる「Finorie」を使ってみた</a></li>
            <li class="ranking-item"><span class="ranking-num">2</span><a href="${depth}pages/notta.html">週1時間の議事録が3分に。Nottaを3ヶ月使った正直な感想</a></li>
            <li class="ranking-item"><span class="ranking-num">3</span><a href="#">30代会社員が副業を始めるなら、最初にすべき3つのこと</a></li>
          </ol>
        </div>
      </div>

      <div class="widget">
        <div class="widget-title">カテゴリー</div>
        <div class="widget-body">
          <ul class="cat-list">
            <li><a href="${depth}pages/invest.html">副業・投資 <span class="cat-count-badge">4</span></a></li>
            <li><a href="${depth}pages/tools.html">仕事効率化 <span class="cat-count-badge">3</span></a></li>
            <li><a href="${depth}pages/money.html">節約・お金 <span class="cat-count-badge">2</span></a></li>
            <li><a href="${depth}index.html#latest">新着記事 <span class="cat-count-badge">9</span></a></li>
          </ul>
        </div>
      </div>

      <div class="widget">
        <div class="widget-title">最新記事</div>
        <div class="widget-body">
          <ul class="latest-list">
            <li><a href="${depth}pages/finorie.html">Finorieレビューを公開しました</a></li>
            <li><a href="${depth}pages/notta.html">Nottaの料金・使い方を更新しました</a></li>
            <li><a href="#">副業の始め方ガイドを追加しました</a></li>
          </ul>
        </div>
      </div>

      <div class="widget disclosure-widget">
        <div class="widget-title">広告ポリシー</div>
        <p class="disclosure-text">当サイトはアフィリエイト広告を利用しています。掲載可否や評価は、実際に使った体験・読者への有用性を基準にしています。</p>
      </div>
    </aside>
  `;
}
