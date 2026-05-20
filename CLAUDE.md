# CLAUDE.md

## 项目概述

这是浙江大学环境与资源学院的学习资源导航网站（MkDocs），由环资学子自发创建和维护。

## 技术栈

- MkDocs + Material for MkDocs 主题
- MathJax 数学公式渲染
- GitHub Actions 自动部署

## 项目结构

```
docs/
├── index.md                    # 主页
├── college-guide.md            # 学院导览
├── course-navigation/          # 课程导航（培养方案）
├── general-education/          # 通识课程
├── professional-basic/         # 专业基础课
├── professional-required/      # 专业必修课
├── professional-elective/      # 专业选修课
├── practical-teaching/         # 实践教学
└── further-education/          # 升学之路
```

## 资料存放规范

每个课程的资料存放在对应文件夹的 `pdfs/` 子目录中：
- `docs/general-education/课程名/pdfs/`
- `docs/professional-basic/课程名/pdfs/`
- `docs/professional-required/课程名/pdfs/`

## 资料命名规范

- 回忆卷：`【回忆卷】课程名称 学年学期 cr(作者).pdf`
- 实验报告：`【实验报告】实验名称 cr(作者).pdf`
- 笔记/资料：`【资料】资料名称 cr(作者).pdf`
- 教材：`【教材】教材名称 cr(作者).pdf`

## 课程页面模板

每个课程页面包含三个section，顺序为：
1. 课程经验（cp-section-icon exp）
2. 笔记/课程资料（cp-section-icon notes）
3. 历年卷（cp-section-icon exams）

## 常用命令

```bash
# 安装依赖
pip install -r requirements.txt

# 启动本地服务器
mkdocs serve

# 构建静态网站
mkdocs build

# 部署到GitHub Pages
mkdocs gh-deploy
```

## 贡献流程

1. 将PDF/DOCX文件放入对应课程的 `pdfs/` 文件夹
2. 编辑该课程的 `index.md`，在对应section添加文件链接
3. 格式：`<li><a href="pdfs/文件名.pdf">资料名称</a> — @作者名</li>`

## 注意事项

- 大文件（>100MB）需要添加到 `.gitignore`
- 所有资料链接必须使用 `pdfs/` 前缀
- 培养方案文件中的站内状态：已更新课程标记为"Done"
