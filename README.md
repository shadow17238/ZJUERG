# 浙学润心・知途不惑

> *于渺探索，探求宇宙之理。循前人足迹，留一缕微光。*

**浙学润心・知途不惑** 是浙江大学环境与资源学院的学习资源导航网站，由环资学子自发创建和维护。我们致力于打破信息壁垒，让优质学习资源触手可及。

---

## 项目简介

这是一个基于 MkDocs 的静态网站，汇集了环资学院各课程的学习资料、历年试卷、课程经验，以及升学指南等内容。无论你是刚入学的新生，还是即将毕业的同学，这里都能找到你需要的信息。

**网站地址**：https://shadow17238.github.io/ZJUERG/

---

## 内容概览

### 课程导航

按年级和专业方向分类，提供详细的培养方案信息：

- **2024级培养方案**：环境科学、环境工程
- **2025级培养方案**：环境科学、环境工程

### 课程资料

网站收录了大量课程资料，按类别组织：

| 类别 | 课程数量 | 资料内容 |
|------|----------|----------|
| 通识课程 | 30+ | 笔记、实验报告、历年卷、复习资料 |
| 专业基础课 | 10 | 笔记、历年卷、教材 |
| 专业必修课 | 20+ | 历年卷、复习资料、百度网盘链接 |
| 专业选修课 | 20+ | 课程信息 |
| 实践教学 | 8 | 课程信息 |

**资料格式**：PDF、DOCX、百度网盘链接

**资料来源**：CC98论坛同学分享，均已标注作者

### 升学之路

- 2024版与2025版环资学院飞跃手册（PDF在线预览）
- 推免、留学、考研相关信息

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
│   ├── professional-basic/    # 专业基础课
│   ├── professional-required/ # 专业必修课
│   ├── professional-elective/ # 专业选修课
│   ├── practical-teaching/    # 实践教学
│   └── further-education/     # 升学之路
└── site/                      # 构建输出（已 gitignore）
```

---

## 本地启动

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

输出到 `site/` 目录。

---

## 部署

网站通过 GitHub Actions 自动部署到 GitHub Pages。推送到 `main` 分支后会自动构建和部署。

**仓库地址**：https://github.com/shadow17238/ZJUERG

---

## 贡献指南

欢迎贡献课程资料！以下是贡献流程：

### 添加课程资料

1. 将 PDF/DOCX 文件放入对应课程的 `pdfs/` 文件夹
2. 编辑该课程的 `index.md`，在对应 section 添加文件链接
3. 格式示例：
   ```html
   <li><a href="pdfs/文件名.pdf">资料名称</a> — @作者名</li>
   ```

### 添加新课程

1. 在对应类别目录下创建课程文件夹
2. 创建 `index.md` 和 `pdfs/` 文件夹
3. 在 `mkdocs.yml` 的 `nav` 中添加导航

### 提交更改

```bash
git add .
git commit -m "描述你的更改"
git push
```

然后在 GitHub 上创建 Pull Request。

---

## 资料命名规范

- 回忆卷：`【回忆卷】课程名称 学年学期 cr(作者).pdf`
- 实验报告：`【实验报告】实验名称 cr(作者).pdf`
- 笔记/资料：`【资料】资料名称 cr(作者).pdf`
- 教材：`【教材】教材名称 cr(作者).pdf`

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

## 许可证

本项目采用 [MIT 许可证](LICENSE)。
