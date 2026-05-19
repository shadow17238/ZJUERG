# 课程导航

<style>
.cn-hero {
  text-align: center;
  padding: 1.5rem 0 1rem;
}

.cn-hero h1 {
  border-bottom: none;
  margin-bottom: 0.3rem;
}

.cn-hero p {
  font-size: 0.95rem;
  color: var(--md-default-fg-color--light);
  font-style: italic;
  max-width: 420px;
  margin: 0 auto;
}

.cn-year-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin: 2rem 0;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.cn-year-card {
  position: relative;
  padding: 2.5rem 2rem;
  border-radius: 10px;
  border: 1px solid rgba(26, 71, 42, 0.1);
  background: #fff;
  text-align: center;
  text-decoration: none;
  transition: all 0.35s ease;
  overflow: hidden;
}

.cn-year-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #1a472a, #c4a35a);
  transform: scaleX(0);
  transition: transform 0.35s ease;
}

.cn-year-card:hover::after {
  transform: scaleX(1);
}

.cn-year-card:hover {
  border-color: rgba(26, 71, 42, 0.18);
  box-shadow: 0 12px 36px rgba(26, 71, 42, 0.1);
  transform: translateY(-4px);
}

.cn-year-num {
  font-family: 'Cormorant Garamond', 'Noto Serif SC', serif;
  font-size: 3.5rem;
  font-weight: 700;
  color: rgba(26, 71, 42, 0.08);
  line-height: 1;
  margin-bottom: 0.3rem;
}

.cn-year-label {
  font-family: 'Cormorant Garamond', 'Noto Serif SC', serif;
  font-size: 1.3rem;
  font-weight: 600;
  color: #1a472a;
  margin-bottom: 0.5rem;
}

.cn-year-desc {
  font-size: 0.85rem;
  color: var(--md-default-fg-color--light);
  line-height: 1.6;
}

.cn-year-arrow {
  display: inline-block;
  margin-top: 1rem;
  font-size: 1.2rem;
  color: #c4a35a;
  transition: transform 0.3s ease;
}

.cn-year-card:hover .cn-year-arrow {
  transform: translateX(4px);
}

.cn-note {
  text-align: center;
  margin-top: 1.5rem;
  padding: 1.2rem;
  border-radius: 8px;
  background: rgba(196, 163, 90, 0.06);
  border: 1px solid rgba(196, 163, 90, 0.15);
  max-width: 520px;
  margin-left: auto;
  margin-right: auto;
}

.cn-note p {
  margin: 0;
  font-size: 0.85rem;
  color: var(--md-default-fg-color--light);
  line-height: 1.7;
}

.cn-note strong {
  color: #1a472a;
}

@media (max-width: 768px) {
  .cn-year-grid {
    grid-template-columns: 1fr;
    max-width: 360px;
  }
}
</style>

<div class="cn-hero">
  <h1>课程导航</h1>
  <p>选择你的年级，找到属于你的培养方案</p>
</div>

<div class="cn-year-grid">
  <a href="2025/" class="cn-year-card">
    <div class="cn-year-num">2025</div>
    <div class="cn-year-label">2025 级培养方案</div>
    <div class="cn-year-desc">紧跟最新教学改革，涵盖环境科学与环境工程两大方向</div>
    <span class="cn-year-arrow">&rarr;</span>
  </a>
  <a href="2024/" class="cn-year-card">
    <div class="cn-year-num">2024</div>
    <div class="cn-year-label">2024 级培养方案</div>
    <div class="cn-year-desc">完整课程体系，笔记与经验持续更新中</div>
    <span class="cn-year-arrow">&rarr;</span>
  </a>
</div>

<div class="cn-note">
  <p><strong>提示：</strong>每门课程都设有专属页面，包含笔记、历年卷与课程经验。点击培养方案中的课程名称即可跳转。</p>
</div>
