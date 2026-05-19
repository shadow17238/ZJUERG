# 🌿 浙学润心・知途不惑

> *于渺探索，探求宇宙之理。循前人足迹，留一缕微光。*

**浙学润心・知途不惑** 是一个充满温度的 NSEP 项目——**资助对象信息壁垒突破与资源合聚的研究**。我们是一群热心的环资学子，致力于为浙江大学环境与资源学院的同学们打造最贴心的学习导航站，打破信息壁垒，让优质资源触手可及！

---

## ✨ 项目简介

还在为选课迷茫？为找资料头疼？为升学焦虑？

**我们来帮你！** 🎯

本项目由环资学院学生自发创建，是一个集课程导航、学习资料、升学指南于一体的宝藏网站。无论你是刚入学的新生，还是即将毕业的老司机，这里都有你需要的信息！

---

## 📁 项目结构一览

```
ZJUERG/
├── mkdocs.yml              📝 网站配置文件
├── requirements.txt        📦 Python 依赖清单
├── README.md               📖 项目说明（就是本文件！）
├── 使用说明.md             📚 详细使用指南
├── 启动网站.bat            🚀 双击即可启动本地服务器
├── 构建网站.bat            🔨 一键构建静态网站
├── .gitignore             🙈 Git 忽略文件配置
└── docs/                  🌐 网站内容目录
    ├── index.md           🏠 主页
    ├── college-guide.md   🏛️ 学院导览
    ├── course-navigation.md 🗺️ 课程导航
    ├── course-navigation/
    │   ├── 2024/         🎓 2024级培养方案
    │   │   ├── index.md
    │   │   ├── huangong.md  🔧 环境工程
    │   │   └── huanke.md   🧪 环境科学
    │   └── 2025/         🎓 2025级培养方案
    │       ├── index.md
    │       ├── huangong.md  🔧 环境工程
    │       └── huanke.md   🧪 环境科学
    ├── general-education/  📚 通识课程
    ├── professional-basic/ 🧮 专业基础课
    ├── professional-required/ 🎯 专业必修课
    ├── professional-elective/ 🔬 专业选修课
    ├── practical-teaching/ 🛠️ 实践教学
    ├── further-education/ 🎓 升学之路
    │   └── pdfs/        📄 飞跃手册PDF文件
    └── javascripts/       ⚙️ 脚本文件
```

---

## 🌟 我们能为你做什么

### 🗺️ 课程导航 —— 你的学业指南针

不再迷失在培养方案的海洋中！我们按年级和专业方向分类，提供详细的课程信息：

- **2024级培养方案**：环境科学、环境工程课程全收录
- **2025级培养方案**：最新培养方案一手掌握

每门课程都标注了课程号、学分、建议修读学期，帮你科学规划学业，告别选课焦虑！

### 🏛️ 学院导览 —— 快速融入环资大家庭

新生必看！介绍学院概况、专业设置、师资力量，让你快速了解环资学院，找到归属感。

### 📚 课程资料库 —— 学习路上的好帮手

- **通识课程**：思政、军体、外语、计算机、自然科学，一网打尽
- **专业基础课**：化学、数学、物理，打好基础是关键
- **专业必修课**：环境学、环境监测、环境微生物学，核心课程全解析
- **专业选修课**：环境毒理学、环境经济学、环境法学，拓展你的知识边界
- **实践教学**：认识实习、教学实习、毕业实习，实践出真知

### 🎓 升学之路 —— 你的未来规划师

- **飞跃手册**：2024版与2025版环资学院飞跃手册PDF在线预览，学长学姐的经验之谈
- **推免指南**：保研政策、经验分享，助你直通研究生
- **留学指导**：出国出境升学信息，走向世界舞台
- **考研备战**：复习规划、备考资料，考研路上不孤单

---

## 🚀 快速开始

### 方法一：双击启动（推荐 ⭐）

不用敲命令，不用配环境，**直接双击**项目根目录下的 **`启动网站.bat`** 文件，网站就启动啦！

然后在浏览器打开：http://127.0.0.1:8000/

### 方法二：命令行启动（极客专属 💻）

```powershell
mkdocs serve
```

然后在浏览器打开：http://127.0.0.1:8000/

---

## 🌐 部署到 GitHub Pages

想让更多人看到你的贡献？把网站部署到 GitHub Pages 吧！

### 步骤一：创建 GitHub 仓库

1. 访问 https://github.com 创建新仓库
2. 仓库名称填写 `nsep`
3. 选择 Public（Private 需要付费才能使用 GitHub Pages）
4. **不要**勾选 "Initialize this repository"
5. 点击 "Create repository"

### 步骤二：初始化 Git 仓库

```powershell
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/你的用户名/nsep.git
git branch -M main
git push -u origin main
```

### 步骤三：启用 GitHub Pages

1. 进入仓库 **Settings** → **Pages**
2. Source 选择 "Deploy from a branch"
3. Branch 选择 "gh-pages" 分支
4. 点击 **Save**

### 步骤四：部署网站

```powershell
pip install ghp-import
mkdocs gh-deploy
```

🎉 恭喜你！网站已部署至：https://你的用户名.github.io/nsep/

### 更新网站内容

```powershell
git add .
git commit -m "更新内容"
git push
mkdocs gh-deploy
```

---

## ⌨️ 常用命令速查表

| 命令 | 说明 |
|------|------|
| `mkdocs serve` | 启动本地开发服务器 🚀 |
| `mkdocs build` | 构建静态网站（输出到 site/ 目录）🔨 |
| `mkdocs gh-deploy` | 部署到 GitHub Pages 🌐 |

---

## 📝 如何贡献内容

我们欢迎每一位环资学子的贡献！无论是课程笔记、历年试卷、还是学习经验，都可以分享出来，帮助更多的同学。

### 添加新页面

1. 在 `docs/` 对应目录下创建新的 `.md` 文件
2. 编辑 `mkdocs.yml` 中的 `nav` 部分，添加新页面的导航
3. 保存后，本地服务器会自动刷新

### 添加 PDF 文件

将 PDF 文件放入 `docs/further-education/pdfs/` 目录，即可在升学之路页面中预览。

### 添加课程资料

在对应课程目录下创建资料页面，并在 `mkdocs.yml` 中添加导航链接。

### 参与贡献流程

1. **Fork** 本仓库
2. 创建功能分支：`git checkout -b feature/你的功能名`
3. 提交更改：`git commit -m "添加你的描述"`
4. 推送分支：`git push origin feature/你的功能名`
5. 发起 **Pull Request**

---

## 🛠️ 技术栈

- **MkDocs**：静态网站生成器，基于 Python
- **Material for MkDocs**：现代化文档主题，提供清晰的导航和搜索功能
- **MathJax**：数学公式渲染，支持在页面中显示数学公式
- **Python 3**：运行环境

---

## 📬 联系我们

有问题？有建议？想聊天？

- 在 GitHub 仓库中提交 **Issue**
- 联系项目维护者

我们期待听到你的声音！

---

## 📜 许可证

本项目采用 **MIT 许可证** 开源，欢迎自由使用和修改。

---

<div align="center">

**浙学润心・知途不惑** 

*助你在学术道路上走得更远！* 🌟

Made with ❤️ by ZJUERG

</div>
