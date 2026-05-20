<div align="center">

# 浙学润心・知途不惑

**浙江大学环境与资源学院学习资源导航**

*知行合一，学以致远*

---

学海无涯，有人曾在此搁浅，也有人曾在此远航。
我们将前人的笔记化作灯塔，将散落的经验织成航图，
只为后来者少一分迷茫，多一分笃定。

</div>

---

## 此间所聚

> *前人走过的路，后人不必再摸黑*

<table>
  <tr>
    <td width="50%" valign="top">
      <h3>📚 课程导航</h3>
      <p>从通识课到专业课，完整培养方案尽收眼底。每一门课都是一扇门，推开它，便有笔记、历年卷与学长学姐的心声等你翻阅。</p>
      <p><code>2024级方案</code> <code>2025级方案</code> <code>环境科学</code> <code>环境工程</code></p>
    </td>
    <td width="50%" valign="top">
      <h3>🏛️ 学院导览</h3>
      <p>初入环资，一切都是新的。学院的历史、专业、师资，我们替你梳理好了——读完它，你便有了归属感。</p>
      <p><code>学院概况</code> <code>专业特色</code> <code>科研方向</code></p>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h3>📝 课程资料库</h3>
      <p>有机化学的反应机理、环境监测的实验报告、水污染控制的设计思路……那些曾经让你抓耳挠腮的知识点，也许前人早已总结好了。</p>
      <p><code>基础课</code> <code>必修课</code> <code>选修课</code> <code>实验课</code></p>
    </td>
    <td width="50%" valign="top">
      <h3>🎓 升学之路</h3>
      <p>保研、留学、考研——三条路，各有风景。飞跃手册里藏着过来人的真经，愿它成为你手中那份沉甸甸的底气。</p>
      <p><code>飞跃手册</code> <code>推免指南</code> <code>留学申请</code> <code>考研备战</code></p>
    </td>
  </tr>
</table>

---

## 内容概览

| 类别 | 课程数量 | 资料内容 |
|:---:|:---:|:---|
| 通识课程 | 30+ | 笔记、实验报告、历年卷、复习资料 |
| 专业基础课 | 10 | 笔记、历年卷、教材 |
| 专业必修课 | 20+ | 历年卷、复习资料、百度网盘链接 |
| 专业选修课 | 20+ | 课程信息 |
| 实践教学 | 8 | 课程信息 |

**资料来源**：CC98论坛同学分享，均已标注作者

**网站地址**：https://shadow17238.github.io/ZJUERG/

---

## 三步开启旅程

> *无论你是新生还是老生，这里都有你需要的*

### ① 初识・探路

翻开学院导览，看看环资学院的全貌；打开课程导航，找到属于你的培养方案。先认路，再出发。

### ② 深耕・积累

走进具体课程的页面，翻阅笔记与历年卷，读一读学长学姐走过的弯路——然后绕开它。

### ③ 远行・传承

当你即将离开，别忘了回来看看。把你的经验留下，让下一个人，走得比你更从容。

---

## 快速开始

### 安装依赖

```bash
pip install -r requirements.txt
```

### 启动开发服务器

```bash
mkdocs serve
```

访问 http://127.0.0.1:8000/

### 构建静态网站

```bash
mkdocs build
```

---

## 贡献指南

> *一个人的笔记是笔记，一群人的笔记是地图。*
> *你留下的每一个字，都可能成为某个人迷雾中的灯塔。*

### 分享课程资料

1. 将 PDF/DOCX 文件放入对应课程的 `pdfs/` 文件夹
2. 编辑该课程的 `index.md`，在对应 section 添加文件链接
3. 格式示例：

```html
<li><a href="pdfs/文件名.pdf">资料名称</a> — @作者名</li>
```

### 资料命名规范

| 类型 | 格式 | 示例 |
|:---|:---|:---|
| 回忆卷 | `【回忆卷】课程名称 学年学期 cr(作者).pdf` | `【回忆卷】环境微生物学 23-24春夏 cr(山止川行).pdf` |
| 实验报告 | `【实验报告】实验名称 cr(作者).pdf` | `【实验报告】简单蒸馏 cr(君河).pdf` |
| 笔记/资料 | `【资料】资料名称 cr(作者).pdf` | `【资料】知识点整理 cr(Kita_kita).pdf` |
| 教材 | `【教材】教材名称 cr(作者).pdf` | `【教材】有机化学电子书 cr(H2668).pdf` |

### 提交更改

```bash
git add .
git commit -m "描述你的更改"
git push
```

然后在 GitHub 上创建 Pull Request。

---

## 项目结构

```
ZJUERG/
├── mkdocs.yml                 # 网站配置
├── requirements.txt           # Python 依赖
├── docs/
│   ├── index.md               # 主页
│   ├── college-guide.md       # 学院导览
│   ├── course-navigation/     # 课程导航（培养方案）
│   ├── general-education/     # 通识课程
│   │   ├── 大学物理实验/pdfs/
│   │   ├── 普通化学实验（乙）/pdfs/
│   │   └── ...
│   ├── professional-basic/    # 专业基础课
│   │   ├── 分析化学（乙）/pdfs/
│   │   ├── 有机化学/pdfs/
│   │   └── ...
│   ├── professional-required/ # 专业必修课
│   │   ├── 环境微生物学/pdfs/
│   │   ├── 水污染控制工程/pdfs/
│   │   └── ...
│   ├── professional-elective/ # 专业选修课
│   ├── practical-teaching/    # 实践教学
│   └── further-education/     # 升学之路
└── site/                      # 构建输出（已 gitignore）
```

---

## 技术栈

- [MkDocs](https://www.mkdocs.org/) - 静态网站生成器
- [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) - 文档主题
- [MathJax](https://www.mathjax.org/) - 数学公式渲染
- [GitHub Actions](https://docs.github.com/actions) - 自动部署

---

## 联系方式

- GitHub Issues：https://github.com/shadow17238/ZJUERG/issues
- GitLab Issues：https://git.zju.edu.cn/3240101876/zjuerg/-/issues

---

<div align="center">

*"独学而无友，则孤陋而寡闻。"*
*愿此间所聚，能润你心，照你路。*

**浙学润心・知途不惑**

Made with ❤️ by ZJUERG

</div>
