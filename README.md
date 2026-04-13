# 浙学润心・知途不惑

> 于渺探索，探求宇宙之理。循前人足迹，留一缕微光。

**浙学润心・知途不惑** 是一个 NSEP 项目——**资助对象信息壁垒突破与资源合聚的研究**，旨在为浙江大学环境与资源学院学生整理课程导航、学习资料与升学指南，打破信息壁垒，聚合优质资源。

## 项目简介

浙江大学环境与资源学院致力于培养具有国际视野和创新能力的环境与资源领域人才。本项目由学生自发创建，旨在帮助学院同学突破信息壁垒，方便快捷地获取培养方案、课程资料和升学指导。

## 目录结构

```
ZJUERG/
├── mkdocs.yml              # 网站配置文件
├── requirements.txt        # Python 依赖
├── README.md               # 项目说明
├── 使用说明.md             # 详细使用指南
├── 启动网站.bat            # 双击启动本地服务器
├── 构建网站.bat            # 双击构建静态网站
├── .gitignore             # Git 忽略文件配置
└── docs/                  # 网站内容目录
    ├── index.md           # 主页
    ├── college-guide.md   # 学院导览
    ├── course-navigation.md # 课程导航
    ├── course-navigation/
    │   ├── 2024/         # 2024级课程导航
    │   │   ├── index.md
    │   │   ├── huangong.md  # 环境工程
    │   │   └── huanke.md   # 环境科学
    │   └── 2025/         # 2025级课程导航
    │       ├── index.md
    │       ├── huangong.md  # 环境工程
    │       └── huanke.md   # 环境科学
    ├── general-education/  # 通识课程
    ├── professional-basic/ # 专业基础课
    ├── professional-required/ # 专业必修课
    ├── professional-elective/ # 专业选修课
    ├── practical-teaching/ # 实践教学
    ├── further-education/ # 升学之路
    │   └── pdfs/        # 飞跃手册PDF文件
    └── javascripts/       # 脚本文件
```

## 主要功能

### 课程导航

按年级和专业方向分类，提供详细的培养方案和课程信息：

- **2024级培养方案**：环境科学、环境工程专业课程一览
- **2025级培养方案**：环境科学、环境工程专业课程一览

每门课程包含课程号、课程名称、学分、建议修读学期等信息，方便同学规划学习进度。

### 学院导览

介绍学院概况、专业设置和师资力量，帮助新生快速了解学院。

### 课程分类

- **通识课程**：思政类、军体类、外语类、计算机类、自然科学通识类
- **专业基础课**：化学类、数学类、物理类等专业基础课程
- **专业必修课**：环境学、环境监测、环境微生物学等专业核心课程
- **专业选修课**：环境毒理学、环境经济学、环境法学等拓展课程
- **实践教学**：认识实习、教学实习、毕业实习等实践环节

### 升学之路

- **飞跃手册**：2024版与2025版环资学院飞跃手册PDF在线预览
- **推免指南**：保研相关政策和经验分享
- **留学指导**：出国出境升学相关信息
- **考研备战**：考研复习规划和资料

## 快速开始

### 方法一：双击启动（推荐）

直接双击项目根目录下的 **`启动网站.bat`** 文件即可启动本地服务器，然后在浏览器打开 http://127.0.0.1:8000/

### 方法二：命令行启动

```powershell
mkdocs serve
```

然后在浏览器打开：http://127.0.0.1:8000/

## 部署到 GitHub Pages

### 步骤一：创建 GitHub 仓库

1. 访问 https://github.com 创建新仓库，仓库名称填写 `nsep`
2. 选择 Public（Private 需要付费才能使用 GitHub Pages）
3. 不要勾选 "Initialize this repository"

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

1. 进入仓库 Settings → Pages
2. Source 选择 "Deploy from a branch"
3. Branch 选择 "gh-pages" 分支
4. 点击 Save

### 步骤四：部署网站

```powershell
pip install ghp-import
mkdocs gh-deploy
```

网站将部署至：https://你的用户名.github.io/nsep/

### 更新网站内容

```powershell
git add .
git commit -m "更新内容"
git push
mkdocs gh-deploy
```

## 常用命令

| 命令 | 说明 |
|------|------|
| `mkdocs serve` | 启动本地开发服务器 |
| `mkdocs build` | 构建静态网站（输出到 site/ 目录） |
| `mkdocs gh-deploy` | 部署到 GitHub Pages |

## 添加新内容

### 添加新页面

1. 在 `docs/` 对应目录下创建新的 `.md` 文件
2. 编辑 `mkdocs.yml` 中的 `nav` 部分，添加页面导航
3. 保存后本地服务器会自动刷新

### 添加 PDF 文件

将 PDF 文件放入 `docs/further-education/pdfs/` 目录，即可在升学之路页面中预览。

### 添加课程资料

在对应课程目录下创建资料页面，并在 `mkdocs.yml` 中添加导航链接。

## 技术栈

- **MkDocs**：静态网站生成器，基于 Python
- **Material for MkDocs**：现代化文档主题，提供清晰的导航和搜索功能
- **MathJax**：数学公式渲染，支持在页面中显示数学公式
- **Python 3**：运行环境

## 贡献指南

欢迎贡献内容和改进建议！请按照以下步骤参与贡献：

1. Fork 本仓库
2. 创建功能分支：`git checkout -b feature/你的功能名`
3. 提交更改：`git commit -m "添加你的描述"`
4. 推送分支：`git push origin feature/你的功能名`
5. 发起 Pull Request

## 许可证

本项目采用 MIT 许可证开源，欢迎自由使用和修改。

## 联系方式

如有问题或建议，请联系项目维护者，或在 GitHub 仓库中提交 Issue。

---

**浙学润心・知途不惑** —— 助你在学术道路上走得更远！
