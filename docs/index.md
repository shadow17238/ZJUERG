# 浙学润心・知途不惑

<style>
/* --- Hero --- */
.hero {
  text-align: center;
  padding: 3rem 0 2rem;
  position: relative;
}

.hero-eyebrow {
  font-family: 'Cormorant Garamond', 'Noto Serif SC', serif;
  font-size: 0.85rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #7c9473;
  margin-bottom: 1rem;
}

.hero h1 {
  font-size: 3rem;
  border-bottom: none;
  margin-bottom: 0.2rem;
  background: linear-gradient(135deg, #0f2e1a 0%, #1a472a 40%, #2d6b42 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.3;
}

.hero-sub {
  font-family: 'Cormorant Garamond', 'Noto Serif SC', serif;
  font-size: 1.2rem;
  font-style: italic;
  color: #7c9473;
  margin-bottom: 1.8rem;
  letter-spacing: 0.05em;
}

.hero-divider {
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #c4a35a, transparent);
  margin: 0 auto 1.8rem;
}

.hero-poem {
  max-width: 560px;
  margin: 0 auto 0.5rem;
  font-size: 1rem;
  line-height: 2;
  color: var(--md-default-fg-color--light);
}

.hero-poem em {
  font-style: normal;
  color: #1a472a;
  font-weight: 600;
}

.hero-source {
  font-size: 0.8rem;
  color: rgba(0,0,0,0.3);
  margin-top: 0.5rem;
}

/* --- Divider --- */
.section-divider {
  width: 40px;
  height: 1px;
  background: linear-gradient(90deg, transparent, #c4a35a, transparent);
  margin: 3rem auto;
}

/* --- Feature Section --- */
.feature-section {
  margin: 0 0 1rem;
}

.feature-section-title {
  text-align: center;
  margin-bottom: 2rem;
}

.feature-section-title h2 {
  border-bottom: none;
  font-size: 1.5rem;
  color: #1a472a;
  margin-bottom: 0.3rem;
}

.feature-section-title h2::before {
  display: none;
}

.feature-section-title p {
  font-size: 0.9rem;
  color: var(--md-default-fg-color--light);
  font-style: italic;
  margin: 0;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2rem;
  margin: 0;
}

.feature-card {
  position: relative;
  padding: 2rem 1.8rem 1.8rem;
  border-radius: 8px;
  border: 1px solid rgba(26, 71, 42, 0.08);
  background: #fff;
  transition: all 0.35s ease;
  overflow: hidden;
}

.feature-card::before {
  content: attr(data-num);
  position: absolute;
  top: -12px;
  right: 12px;
  font-family: 'Cormorant Garamond', 'Noto Serif SC', serif;
  font-size: 5rem;
  font-weight: 700;
  color: rgba(26, 71, 42, 0.04);
  line-height: 1;
  pointer-events: none;
}

.feature-card:hover {
  border-color: rgba(26, 71, 42, 0.15);
  box-shadow: 0 8px 30px rgba(26, 71, 42, 0.08);
  transform: translateY(-3px);
}

.feature-card h3 {
  margin-top: 0 !important;
  padding-left: 0 !important;
  font-size: 1.2rem;
  color: #1a472a;
  margin-bottom: 0.6rem;
}

.feature-card h3::before {
  display: none;
}

.feature-card .card-accent {
  width: 24px;
  height: 2px;
  background: #c4a35a;
  margin-bottom: 0.8rem;
}

.feature-card p {
  margin-bottom: 0.6rem;
  font-size: 0.88rem;
  color: var(--md-default-fg-color--light);
  line-height: 1.75;
}

.feature-card .card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.feature-card .card-tags li {
  font-size: 0.75rem;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  background: rgba(26, 71, 42, 0.05);
  color: #2d6b42;
  border: 1px solid rgba(26, 71, 42, 0.08);
  line-height: 1.4;
}

/* --- Guide Section --- */
.guide-section {
  margin: 1rem 0;
}

.guide-header {
  text-align: center;
  margin-bottom: 2rem;
}

.guide-header h2 {
  border-bottom: none;
  font-size: 1.5rem;
  color: #1a472a;
  margin-bottom: 0.3rem;
}

.guide-header h2::before {
  display: none;
}

.guide-header p {
  font-size: 0.9rem;
  color: var(--md-default-fg-color--light);
  font-style: italic;
  margin: 0;
}

.guide-timeline {
  position: relative;
  max-width: 700px;
  margin: 0 auto;
  padding-left: 40px;
}

.guide-timeline::before {
  content: '';
  position: absolute;
  left: 14px;
  top: 8px;
  bottom: 8px;
  width: 1px;
  background: linear-gradient(180deg, #c4a35a, rgba(26, 71, 42, 0.15));
}

.guide-step {
  position: relative;
  margin-bottom: 2rem;
  padding-left: 1.5rem;
}

.guide-step:last-child {
  margin-bottom: 0;
}

.guide-step .step-dot {
  position: absolute;
  left: -33px;
  top: 3px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #c4a35a;
  border: 2px solid var(--md-default-bg-color);
  box-shadow: 0 0 0 2px rgba(196, 163, 90, 0.2);
}

.guide-step h4 {
  margin: 0 0 0.3rem;
  font-size: 1.05rem;
  color: #1a472a;
}

.guide-step p {
  margin: 0;
  font-size: 0.88rem;
  color: var(--md-default-fg-color--light);
  line-height: 1.7;
}

/* --- Contrib Section --- */
.contrib-section {
  text-align: center;
  margin: 2rem 0 1rem;
  padding: 2.5rem 2rem;
  border-radius: 8px;
  background: linear-gradient(135deg, rgba(26, 71, 42, 0.04) 0%, rgba(196, 163, 90, 0.05) 100%);
  border: 1px solid rgba(26, 71, 42, 0.08);
}

.contrib-section h2 {
  border-bottom: none;
  font-size: 1.5rem;
  color: #1a472a;
  margin-bottom: 0.5rem;
}

.contrib-section h2::before {
  display: none;
}

.contrib-poem {
  max-width: 480px;
  margin: 0 auto 1.2rem;
  font-size: 0.95rem;
  color: var(--md-default-fg-color--light);
  line-height: 1.9;
}

.contrib-items {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1.2rem;
  flex-wrap: wrap;
}

.contrib-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  color: #2d6b42;
  padding: 0.4rem 0.9rem;
  border-radius: 20px;
  background: rgba(26, 71, 42, 0.05);
  border: 1px solid rgba(26, 71, 42, 0.1);
  transition: all 0.25s ease;
}

.contrib-item:hover {
  background: rgba(26, 71, 42, 0.1);
  border-color: rgba(26, 71, 42, 0.2);
}

.contrib-item::before {
  content: '';
  display: inline-block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #c4a35a;
}

/* --- Footer --- */
.closing {
  text-align: center;
  margin-top: 2.5rem;
  padding: 2rem 0 1rem;
  border-top: 1px solid rgba(196, 163, 90, 0.2);
}

.closing-quote {
  font-family: 'Cormorant Garamond', 'Noto Serif SC', serif;
  font-size: 1.05rem;
  font-style: italic;
  color: #7c9473;
  margin-bottom: 1rem;
  line-height: 1.8;
}

.closing-name {
  font-family: 'Cormorant Garamond', 'Noto Serif SC', serif;
  font-weight: 600;
  font-size: 0.9rem;
  color: #1a472a;
  margin-bottom: 0.3rem;
}

.closing-credit {
  font-size: 0.78rem;
  color: rgba(0,0,0,0.25);
}

/* --- Responsive --- */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.2rem;
  }
  .feature-grid {
    grid-template-columns: 1fr;
  }
  .contrib-items {
    gap: 0.8rem;
  }
}
</style>

<div class="hero">
  <p class="hero-eyebrow">浙江大学环境与资源学院</p>
  <h1>浙学润心・知途不惑</h1>
  <p class="hero-sub">知行合一，学以致远</p>
  <div class="hero-divider"></div>
  <div class="hero-poem">
    学海无涯，有人曾在此搁浅，也有人曾在此远航。<br>
    我们将<em>前人的笔记</em>化作灯塔，<br>
    将<em>散落的经验</em>织成航图，<br>
    只为后来者少一分迷茫，多一分笃定。
  </div>
</div>

<div class="section-divider"></div>

<div class="feature-section">
  <div class="feature-section-title">
    <h2>此间所聚</h2>
    <p>前人走过的路，后人不必再摸黑</p>
  </div>

  <div class="feature-grid">
    <div class="feature-card" data-num="壹">
      <h3>课程导航</h3>
      <div class="card-accent"></div>
      <p>从通识课到专业课，完整培养方案尽收眼底。每一门课都是一扇门，推开它，便有笔记、历年卷与学长学姐的心声等你翻阅。</p>
      <ul class="card-tags">
        <li>2024 级方案</li>
        <li>2025 级方案</li>
        <li>环境科学</li>
        <li>环境工程</li>
      </ul>
    </div>

    <div class="feature-card" data-num="贰">
      <h3>学院导览</h3>
      <div class="card-accent"></div>
      <p>初入环资，一切都是新的。学院的历史、专业、师资，我们替你梳理好了——读完它，你便有了归属感。</p>
      <ul class="card-tags">
        <li>学院概况</li>
        <li>专业特色</li>
        <li>科研方向</li>
      </ul>
    </div>

    <div class="feature-card" data-num="叁">
      <h3>课程资料库</h3>
      <div class="card-accent"></div>
      <p>有机化学的反应机理、环境监测的实验报告、水污染控制的设计思路……那些曾经让你抓耳挠腮的知识点，也许前人早已总结好了。</p>
      <ul class="card-tags">
        <li>基础课</li>
        <li>必修课</li>
        <li>选修课</li>
        <li>实验课</li>
      </ul>
    </div>

    <div class="feature-card" data-num="肆">
      <h3>升学之路</h3>
      <div class="card-accent"></div>
      <p>保研、留学、考研——三条路，各有风景。飞跃手册里藏着过来人的真经，愿它成为你手中那份沉甸甸的底气。</p>
      <ul class="card-tags">
        <li>飞跃手册</li>
        <li>推免指南</li>
        <li>留学申请</li>
        <li>考研备战</li>
      </ul>
    </div>
  </div>
</div>

<div class="section-divider"></div>

<div class="guide-section">
  <div class="guide-header">
    <h2>三步开启旅程</h2>
    <p>无论你是新生还是老生，这里都有你需要的</p>
  </div>

  <div class="guide-timeline">
    <div class="guide-step">
      <span class="step-dot"></span>
      <h4>初识・探路</h4>
      <p>翻开学院导览，看看环资学院的全貌；打开课程导航，找到属于你的培养方案。先认路，再出发。</p>
    </div>
    <div class="guide-step">
      <span class="step-dot"></span>
      <h4>深耕・积累</h4>
      <p>走进具体课程的页面，翻阅笔记与历年卷，读一读学长学姐走过的弯路——然后绕开它。</p>
    </div>
    <div class="guide-step">
      <span class="step-dot"></span>
      <h4>远行・传承</h4>
      <p>当你即将离开，别忘了回来看看。把你的经验留下，让下一个人，走得比你更从容。</p>
    </div>
  </div>
</div>

<div class="section-divider"></div>

<div class="contrib-section">
  <h2>薪火相传</h2>
  <div class="contrib-poem">
    一个人的笔记是笔记，一群人的笔记是地图。<br>
    你留下的每一个字，都可能成为某个人迷雾中的灯塔。
  </div>
  <div class="contrib-items">
    <span class="contrib-item">分享课程笔记</span>
    <span class="contrib-item">上传历年试卷</span>
    <span class="contrib-item">撰写课程经验</span>
    <span class="contrib-item">分享升学心得</span>
  </div>
</div>

<div class="closing">
  <p class="closing-quote">"独学而无友，则孤陋而寡闻。"<br>愿此间所聚，能润你心，照你路。</p>
  <p class="closing-name">浙学润心・知途不惑</p>
  <p class="closing-credit">Made with ❤️ by ZJUERG</p>
</div>
