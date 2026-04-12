# ZJUERG - 浙学润心・知途不惑

## 项目简介

ZJUERG 是浙江大学能源与环境学院的课程导航与学习资源网站，旨在为学生提供全面的课程信息、学习指南和升学路径规划。

- **网站名称**：浙学润心・知途不惑
- **技术栈**：MkDocs + Material 主题
- **主要功能**：课程导航、学院导览、升学指南、学习资源整合

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
├── docs/                  # 网站内容目录
│   ├── index.md           # 主页
│   ├── college-guide.md   # 学院导览
│   ├── course-navigation.md # 课程导航
│   ├── general-education/  # 通识课程
│   ├── professional-basic/ # 专业基础课
│   ├── professional-required/ # 专业必修课
│   ├── professional-elective/ # 专业选修课
│   ├── practical-teaching/ # 实践教学
│   ├── further-education/ # 升学之路
│   └── javascripts/       # 脚本文件
└── hikari-of-me-master/    # 相关资源
    └── docs/              # 详细课程资料
```

## 主要功能

1. **课程导航**：按年份和课程类型分类，提供详细的课程信息和学习指南
2. **学院导览**：介绍学院概况、专业设置和师资力量
3. **通识课程**：提供通识教育课程的相关信息
4. **专业课程**：包括专业基础课、必修课和选修课的详细内容
5. **实践教学**：实践课程和实验指导
6. **升学之路**：升学规划和指导资源

## 快速开始

### 方法 1：双击启动（推荐）

直接双击项目根目录下的 **`启动网站.bat`** 文件即可启动本地服务器。

### 方法 2：命令行启动

在项目目录下打开终端，运行：

```powershell
mkdocs serve
```

然后在浏览器打开：http://127.0.0.1:8000/

## 部署到 GitHub Pages

1. **创建 GitHub 仓库**：创建一个名为 `nsep` 的仓库
2. **初始化 Git 仓库**：
   ```powershell
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/你的用户名/nsep.git
   git branch -M main
   git push -u origin main
   ```
3. **启用 GitHub Pages**：在仓库设置中启用 Pages 功能
4. **部署网站**：
   ```powershell
   pip install ghp-import
   mkdocs gh-deploy
   ```

完成后，网站将可以通过 `https://你的用户名.github.io/nsep/` 访问。

## 常用命令

| 命令 | 说明 |
|------|------|
| `mkdocs serve` | 启动本地开发服务器 |
| `mkdocs build` | 构建静态网站（输出到 site/ 目录） |
| `mkdocs gh-deploy` | 部署到 GitHub Pages |

## 添加新内容

1. 在 `docs/` 对应的目录下创建新的 `.md` 文件
2. 编辑 `mkdocs.yml` 中的 `nav` 部分，添加新页面的导航
3. 保存后，本地服务器会自动刷新

## 技术栈

- **MkDocs**：静态网站生成器
- **Material for MkDocs**：现代化的主题
- **MathJax**：数学公式渲染
- **Python**：运行环境

## 贡献指南

欢迎贡献内容和改进建议！请按照以下步骤：

1. Fork 本仓库
2. 创建功能分支
3. 提交更改
4. 发起 Pull Request

## 许可证

本项目采用 MIT 许可证。

## 联系方式

如有问题或建议，请联系项目维护者。

---

**浙学润心・知途不惑** - 助你在学术道路上走得更远！