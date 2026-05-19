# 实践教学

<style>
.pt-hero {
  text-align: center;
  padding: 1.5rem 0 0.5rem;
}

.pt-hero h1 {
  border-bottom: none;
  margin-bottom: 0.3rem;
}

.pt-hero p {
  font-size: 0.95rem;
  color: var(--md-default-fg-color--light);
  font-style: italic;
  max-width: 440px;
  margin: 0 auto;
}

.pt-major {
  margin: 2.5rem 0;
}

.pt-major-header {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
}

.pt-major-label {
  padding: 0.3rem 0.8rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  flex-shrink: 0;
}

.pt-major-label.sci {
  background: rgba(26, 71, 42, 0.1);
  color: #1a472a;
}

.pt-major-label.eng {
  background: rgba(196, 163, 90, 0.12);
  color: #9a7d3a;
}

.pt-major-header h2 {
  border-bottom: none;
  margin: 0;
  font-size: 1.2rem;
  color: #1a472a;
}

.pt-major-header h2::before {
  display: none;
}

.pt-flow {
  position: relative;
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
}

.pt-flow::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, rgba(26, 71, 42, 0.1), rgba(196, 163, 90, 0.3), rgba(26, 71, 42, 0.1));
  z-index: 0;
}

.pt-step {
  position: relative;
  z-index: 1;
  min-width: 170px;
  flex: 1;
  padding: 1.5rem 1.2rem;
  border-radius: 10px;
  background: #fff;
  border: 1px solid rgba(26, 71, 42, 0.08);
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease;
}

.pt-step:hover {
  border-color: rgba(26, 71, 42, 0.18);
  box-shadow: 0 6px 20px rgba(26, 71, 42, 0.08);
  transform: translateY(-3px);
}

.pt-step-num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1a472a, #2d6b42);
  color: #fff;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 0.6rem;
}

.pt-step-name {
  font-size: 0.9rem;
  color: #1a472a;
  font-weight: 600;
  margin-bottom: 0.3rem;
  line-height: 1.3;
}

.pt-step-time {
  font-size: 0.72rem;
  color: #c4a35a;
  font-weight: 500;
}

.pt-note {
  text-align: center;
  margin-top: 2rem;
  padding: 1rem;
  border-radius: 8px;
  background: rgba(196, 163, 90, 0.05);
  border: 1px solid rgba(196, 163, 90, 0.12);
}

.pt-note p {
  margin: 0;
  font-size: 0.85rem;
  color: var(--md-default-fg-color--light);
  font-style: italic;
}

@media (max-width: 768px) {
  .pt-flow {
    flex-direction: column;
  }
  .pt-flow::before {
    display: none;
  }
}
</style>

<div class="pt-hero">
  <h1>实践教学</h1>
  <p>纸上得来终觉浅，绝知此事要躬行</p>
</div>

<div class="pt-major">
  <div class="pt-major-header">
    <span class="pt-major-label sci">环科</span>
    <h2>环境科学专业</h2>
  </div>
  <div class="pt-flow">
    <a href="环境科学认识实习/" class="pt-step">
      <span class="pt-step-num">1</span>
      <div class="pt-step-name">环境科学认识实习</div>
      <div class="pt-step-time">一（短学期）</div>
    </a>
    <a href="教学实习/" class="pt-step">
      <span class="pt-step-num">2</span>
      <div class="pt-step-name">教学实习</div>
      <div class="pt-step-time">二（短学期）</div>
    </a>
    <a href="环境科学综合实验/" class="pt-step">
      <span class="pt-step-num">3</span>
      <div class="pt-step-name">环境科学综合实验</div>
      <div class="pt-step-time">三（短学期）</div>
    </a>
    <a href="毕业实习及劳育/" class="pt-step">
      <span class="pt-step-num">4</span>
      <div class="pt-step-name">毕业实习及劳育</div>
      <div class="pt-step-time">三（短学期）</div>
    </a>
  </div>
</div>

<div class="pt-major">
  <div class="pt-major-header">
    <span class="pt-major-label eng">环工</span>
    <h2>环境工程专业</h2>
  </div>
  <div class="pt-flow">
    <a href="认识实习/" class="pt-step">
      <span class="pt-step-num">1</span>
      <div class="pt-step-name">认识实习</div>
      <div class="pt-step-time">一（短学期）</div>
    </a>
    <a href="未来技术创新实践/" class="pt-step">
      <span class="pt-step-num">2</span>
      <div class="pt-step-name">未来技术创新实践</div>
      <div class="pt-step-time">二（短学期）</div>
    </a>
    <a href="生产实习与劳动教育/" class="pt-step">
      <span class="pt-step-num">3</span>
      <div class="pt-step-name">生产实习与劳动教育</div>
      <div class="pt-step-time">三（短学期）</div>
    </a>
    <a href="环境工程工艺设计/" class="pt-step">
      <span class="pt-step-num">4</span>
      <div class="pt-step-name">环境工程工艺设计</div>
      <div class="pt-step-time">四（短学期）</div>
    </a>
  </div>
</div>

<div class="pt-note">
  <p>实践教学环节共计 8 学分，贯穿四个短学期，从认知到实操逐步深入。</p>
</div>
