# 通识课程

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

.pb-category-icon.politics { background: rgba(180, 50, 50, 0.08); color: #b43232; }
.pb-category-icon.military { background: rgba(26, 71, 42, 0.1); color: #1a472a; }
.pb-category-icon.language { background: rgba(50, 100, 160, 0.08); color: #3264a0; }
.pb-category-icon.cs { background: rgba(196, 163, 90, 0.12); color: #9a7d3a; }
.pb-category-icon.science { background: rgba(45, 107, 66, 0.1); color: #2d6b42; }

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
  <h1>通识课程</h1>
  <p>博学之，审问之，慎思之，明辨之，笃行之</p>
</div>

<div class="pb-category">
  <div class="pb-category-header">
    <span class="pb-category-icon politics">政</span>
    <h2>思政类</h2>
  </div>
  <div class="pb-course-grid">
    <a href="形势与政策I/" class="pb-course-item">
      <div class="pb-course-name">形势与政策I</div>
      <div class="pb-course-meta">1.0 学分 · 必修</div>
    </a>
    <a href="形势与政策II/" class="pb-course-item">
      <div class="pb-course-name">形势与政策II</div>
      <div class="pb-course-meta">1.0 学分 · 必修</div>
    </a>
    <a href="思想道德与法治/" class="pb-course-item">
      <div class="pb-course-name">思想道德与法治</div>
      <div class="pb-course-meta">3.0 学分 · 必修</div>
    </a>
    <a href="中国近现代史纲要/" class="pb-course-item">
      <div class="pb-course-name">中国近现代史纲要</div>
      <div class="pb-course-meta">3.0 学分 · 必修</div>
    </a>
    <a href="马克思主义基本原理/" class="pb-course-item">
      <div class="pb-course-name">马克思主义基本原理</div>
      <div class="pb-course-meta">3.0 学分 · 必修</div>
    </a>
    <a href="毛泽东思想和中国特色社会主义理论体系概论/" class="pb-course-item">
      <div class="pb-course-name">毛泽东思想和中国特色社会主义理论体系概论</div>
      <div class="pb-course-meta">3.0 学分 · 必修</div>
    </a>
    <a href="习近平新时代中国特色社会主义思想概论/" class="pb-course-item">
      <div class="pb-course-name">习近平新时代中国特色社会主义思想概论</div>
      <div class="pb-course-meta">3.0 学分 · 必修</div>
    </a>
    <a href="中国改革开放史/" class="pb-course-item">
      <div class="pb-course-name">中国改革开放史</div>
      <div class="pb-course-meta">1.5 学分 · 选修</div>
    </a>
    <a href="新中国史/" class="pb-course-item">
      <div class="pb-course-name">新中国史</div>
      <div class="pb-course-meta">1.5 学分 · 选修</div>
    </a>
    <a href="中国共产党历史/" class="pb-course-item">
      <div class="pb-course-name">中国共产党历史</div>
      <div class="pb-course-meta">1.5 学分 · 选修</div>
    </a>
    <a href="社会主义发展史/" class="pb-course-item">
      <div class="pb-course-name">社会主义发展史</div>
      <div class="pb-course-meta">1.5 学分 · 选修</div>
    </a>
  </div>
</div>

<div class="pb-category">
  <div class="pb-category-header">
    <span class="pb-category-icon military">军</span>
    <h2>军体类</h2>
  </div>
  <div class="pb-course-grid">
    <a href="军训/" class="pb-course-item">
      <div class="pb-course-name">军训</div>
      <div class="pb-course-meta">2.0 学分 · 必修</div>
    </a>
    <a href="军事理论/" class="pb-course-item">
      <div class="pb-course-name">军事理论</div>
      <div class="pb-course-meta">2.0 学分 · 必修</div>
    </a>
    <a href="体测与锻炼I/" class="pb-course-item">
      <div class="pb-course-name">体测与锻炼I</div>
      <div class="pb-course-meta">0.5 学分 · 必修</div>
    </a>
  </div>
</div>

<div class="pb-category">
  <div class="pb-category-header">
    <span class="pb-category-icon language">语</span>
    <h2>外语类</h2>
  </div>
  <div class="pb-course-grid">
    <a href="英语水平测试/" class="pb-course-item">
      <div class="pb-course-name">英语水平测试</div>
      <div class="pb-course-meta">1.0 学分 · 必修</div>
    </a>
    <a href="大学英语III/" class="pb-course-item">
      <div class="pb-course-name">大学英语III</div>
      <div class="pb-course-meta">3.0 学分 · 选修</div>
    </a>
    <a href="大学英语IV/" class="pb-course-item">
      <div class="pb-course-name">大学英语IV</div>
      <div class="pb-course-meta">3.0 学分 · 选修</div>
    </a>
  </div>
</div>

<div class="pb-category">
  <div class="pb-category-header">
    <span class="pb-category-icon cs">码</span>
    <h2>计算机类</h2>
  </div>
  <div class="pb-course-grid">
    <a href="Python程序设计/" class="pb-course-item">
      <div class="pb-course-name">Python程序设计</div>
      <div class="pb-course-meta">3.0 学分 · 必修</div>
    </a>
    <a href="人工智能基础（A）/" class="pb-course-item">
      <div class="pb-course-name">人工智能基础（A）</div>
      <div class="pb-course-meta">2.0 学分 · 必修</div>
    </a>
  </div>
</div>

<div class="pb-category">
  <div class="pb-category-header">
    <span class="pb-category-icon science">理</span>
    <h2>自然科学通识类</h2>
  </div>
  <div class="pb-course-grid">
    <a href="普通化学（乙）/" class="pb-course-item">
      <div class="pb-course-name">普通化学（乙）</div>
      <div class="pb-course-meta">2.0 学分 · 必修</div>
    </a>
    <a href="普通化学实验（乙）/" class="pb-course-item">
      <div class="pb-course-name">普通化学实验（乙）</div>
      <div class="pb-course-meta">1.5 学分 · 必修</div>
    </a>
    <a href="微积分（乙）I/" class="pb-course-item">
      <div class="pb-course-name">微积分（乙）I</div>
      <div class="pb-course-meta">5.0 学分 · 必修</div>
    </a>
    <a href="微积分（乙）II/" class="pb-course-item">
      <div class="pb-course-name">微积分（乙）II</div>
      <div class="pb-course-meta">4.0 学分 · 必修</div>
    </a>
    <a href="线性代数（乙）/" class="pb-course-item">
      <div class="pb-course-name">线性代数（乙）</div>
      <div class="pb-course-meta">3.0 学分 · 必修</div>
    </a>
    <a href="大学物理（乙）I/" class="pb-course-item">
      <div class="pb-course-name">大学物理（乙）I</div>
      <div class="pb-course-meta">3.0 学分 · 必修</div>
    </a>
    <a href="大学物理（乙）II/" class="pb-course-item">
      <div class="pb-course-name">大学物理（乙）II</div>
      <div class="pb-course-meta">3.0 学分 · 必修</div>
    </a>
    <a href="大学物理实验/" class="pb-course-item">
      <div class="pb-course-name">大学物理实验</div>
      <div class="pb-course-meta">1.5 学分 · 必修</div>
    </a>
    <a href="生命科学导论/" class="pb-course-item">
      <div class="pb-course-name">生命科学导论</div>
      <div class="pb-course-meta">2.0 学分 · 必修</div>
    </a>
  </div>
</div>