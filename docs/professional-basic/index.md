# 专业基础课

<style>
.pb-hero {
  text-align: center;
  padding: 1.5rem 0 0.5rem;
}

.pb-hero h1 {
  border-bottom: none;
  margin-bottom: 0.3rem;
}

.pb-hero p {
  font-size: 0.95rem;
  color: var(--md-default-fg-color--light);
  font-style: italic;
  max-width: 460px;
  margin: 0 auto;
}

.pb-category {
  margin: 2.5rem 0;
}

.pb-category-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1rem;
}

.pb-category-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  flex-shrink: 0;
}

.pb-category-icon.chem { background: rgba(26, 71, 42, 0.1); color: #1a472a; }
.pb-category-icon.math { background: rgba(196, 163, 90, 0.12); color: #9a7d3a; }
.pb-category-icon.eng { background: rgba(45, 107, 66, 0.1); color: #2d6b42; }
.pb-category-icon.mgmt { background: rgba(124, 148, 115, 0.12); color: #5a6e52; }

.pb-category-header h2 {
  border-bottom: none;
  margin: 0;
  font-size: 1.15rem;
  color: #1a472a;
}

.pb-category-header h2::before {
  display: none;
}

.pb-course-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 0.8rem;
}

.pb-course-item {
  display: block;
  padding: 1rem 1.2rem;
  border-radius: 8px;
  border: 1px solid rgba(26, 71, 42, 0.08);
  background: #fff;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.pb-course-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: #c4a35a;
  transform: scaleY(0);
  transition: transform 0.3s ease;
}

.pb-course-item:hover::before {
  transform: scaleY(1);
}

.pb-course-item:hover {
  border-color: rgba(26, 71, 42, 0.15);
  box-shadow: 0 4px 16px rgba(26, 71, 42, 0.06);
  transform: translateX(3px);
}

.pb-course-name {
  font-size: 0.92rem;
  color: #1a472a;
  font-weight: 500;
  line-height: 1.4;
}

.pb-course-meta {
  font-size: 0.75rem;
  color: var(--md-default-fg-color--light);
  margin-top: 0.3rem;
}
</style>

<div class="pb-hero">
  <h1>专业基础课</h1>
  <p>万丈高楼平地起，这些课程是后续一切的根基</p>
</div>

<div class="pb-category">
  <div class="pb-category-header">
    <span class="pb-category-icon chem">化</span>
    <h2>化学类</h2>
  </div>
  <div class="pb-course-grid">
    <a href="有机化学/" class="pb-course-item">
      <div class="pb-course-name">有机化学</div>
      <div class="pb-course-meta">4.0 学分 · 二（秋冬）</div>
    </a>
    <a href="分析化学（乙）/" class="pb-course-item">
      <div class="pb-course-name">分析化学（乙）</div>
      <div class="pb-course-meta">2.0 学分 · 一（夏）</div>
    </a>
    <a href="物理化学/" class="pb-course-item">
      <div class="pb-course-name">物理化学</div>
      <div class="pb-course-meta">4.0 学分 · 二（春夏）</div>
    </a>
    <a href="大学化学实验（O）/" class="pb-course-item">
      <div class="pb-course-name">大学化学实验（O）</div>
      <div class="pb-course-meta">1.5 学分 · 二（秋冬）</div>
    </a>
    <a href="大学化学实验（P）/" class="pb-course-item">
      <div class="pb-course-name">大学化学实验（P）</div>
      <div class="pb-course-meta">1.5 学分 · 二（春夏）</div>
    </a>
  </div>
</div>

<div class="pb-category">
  <div class="pb-category-header">
    <span class="pb-category-icon math">数</span>
    <h2>数学类</h2>
  </div>
  <div class="pb-course-grid">
    <a href="概率论与数理统计/" class="pb-course-item">
      <div class="pb-course-name">概率论与数理统计</div>
      <div class="pb-course-meta">2.5 学分 · 二（春夏）</div>
    </a>
  </div>
</div>

<div class="pb-category">
  <div class="pb-category-header">
    <span class="pb-category-icon eng">工</span>
    <h2>工程类</h2>
  </div>
  <div class="pb-course-grid">
    <a href="化工原理（乙）/" class="pb-course-item">
      <div class="pb-course-name">化工原理（乙）</div>
      <div class="pb-course-meta">专业基础</div>
    </a>
  </div>
</div>

<div class="pb-category">
  <div class="pb-category-header">
    <span class="pb-category-icon mgmt">管</span>
    <h2>经济管理类</h2>
  </div>
  <div class="pb-course-grid">
    <a href="微观经济学（甲）/" class="pb-course-item">
      <div class="pb-course-name">微观经济学（甲）</div>
      <div class="pb-course-meta">3.0 学分 · 二（秋冬）</div>
    </a>
    <a href="管理学/" class="pb-course-item">
      <div class="pb-course-name">管理学</div>
      <div class="pb-course-meta">3.0 学分 · 二（秋冬）</div>
    </a>
    <a href="社会学/" class="pb-course-item">
      <div class="pb-course-name">社会学</div>
      <div class="pb-course-meta">2.0 学分 · 二（秋冬）</div>
    </a>
  </div>
</div>
