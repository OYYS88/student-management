# 									**学生成绩管理系统**

## 一、项目介绍

### 1、开发环境及工具

- **操作系统**: Windows 11
- **开发工具**: Jetbrains WebStorm
- **前端框架**: Vue 3
- **状态管理**: Vuex
- **路由管理**: Vue Router
- **UI 框架**: Element UI
- **模拟数据**: Mock.js

### 2、 项目或功能描述

​		本项目是一个基于 Vue 3 的学生信息管理系统，主要功能包括学生成绩管理、课程信息展示、专业介绍、成绩修改等。系统通过模拟数据生成学生和课程信息，并提供相应的增删改查功能。

**目录结构描述**:

```tex
student-management
│
├── node_modules
│
├── public                   # 存放静态资源文件
│
└── src                      # 源代码目录
    ├── assets               # 存放图片资源
    │   ├── login_bg.jpg
    │   └── logo.png
    │
    ├── components           # 存放Vue组件
    │   └── front            # 前端页面组件
    │       ├── Home.vue     # 首页组件
    │       └── Login.vue    # 登录页面组件
    │
    ├── order
    │   ├── AnalyzePage.vue  # 分析页面组件
    │   ├── CoursePage.vue   # 课程页面组件
    │   ├── MajorPage.vue    # 专业页面组件
    │   ├── RevisePage.vue   # 修改页面组件
    │   └── ScoresPage.vue   # 成绩页面组件
    │
    ├── mock                 # 存放模拟数据
    │   └── Mock.js          # 模拟数据文件
    │
    ├── tools                # 存放工具类文件
    │   ├── Router.js        # 路由工具
    │   ├── Storage.js       # 存储工具
    │   └── Tools.js         # 其他工具函数
    │
    ├── App.vue               # 主应用组件
    ├── main.js               # 入口文件
    ├── .gitignore
    ├── .npmrc
    ├── babel.config.js
    ├── jsconfig.json
    ├── package.json
    ├── package-lock.json
    ├── pnpm-lock.yaml
    ├── README.md
    └── vue.config.js
```


### 3. 编写目的

​		本项目的编写目的是为学校管理员提供一个高效的学生信息管理工具，帮助他们更好地管理和分析学生的学习情况。目标用户为学校管理员和技术支持人员，要求具备基本的计算机操作能力和一定的前端开发知识。

### 4. 项目或功能背景

​		随着教育信息化的发展，学校对学生的成绩管理越来越依赖于信息化手段。传统的纸质记录方式已经无法满足现代教育的需求，因此开发一个高效的学生信息管理系统显得尤为重要。本项目旨在通过现代化的前端技术，提供一个直观、易用的学生信息管理平台。

### 5. 模块与关系

- **Login**: 用户登录模块，验证用户身份。
- **Home**: 主页模块，显示系统的主要导航。
- **Scores**: 成绩管理模块，提供成绩查询、筛选、删除、修改和导出功能。
- **Analyze**: 成绩分析模块，通过图表展示学生的成绩分布。
- **Course**: 课程信息模块，展示课程列表和详细信息。
- **Major**: 专业介绍模块，展示专业的基本信息和链接。
- **Revise**: 成绩修改模块，允许管理员修改学生的成绩信息。

### 6. 类或术语说明

- **Vuex**（Storage）: 一个专为 Vue.js 应用程序开发的状态管理模式，可以配置和管理 Vue 应用程序的状态，使用 Vuex 来管理用户的登录状态。
- **Vue Router**: 一个官方的 Vue.js 路由器，作用是配置和管理 Vue 应用程序的路由。它定义了应用中的不同路由路径及其对应的组件，并实现了路由守卫以控制用户访问权限。
- 在**main.js**中初始化应用实例、注册全局组件、引入Element UI、配置路由和状态管理，并最终将应用挂载到指定的 DOM 元素上。
- **Mock.js**: 一款强大的数据模拟工具，可以方便地生成模拟数据。

### 7. 实现功能所采用的技术

- **Vue 3**: 前端框架，用于构建用户界面。
- **Vuex**: 状态管理库，用于管理应用的状态。
- **Vue Router**: 路由管理库，用于实现页面之间的导航。
- **Element UI**: 组件库，提供丰富的 UI 组件。
- **Mock.js**: 数据模拟工具，用于生成模拟数据。
- **ES6+**: 现代 JavaScript 语法，提高代码的可读性和可维护性。

  ### 8. 用户界面与交互

  - **登录页面**: 用户输入用户名和密码进行登录。
 ![image](https://github.com/OYYS88/student-management/blob/main/%E9%A1%B9%E7%9B%AE%E8%BF%90%E8%A1%8C/login.png)
  - **主页**: 显示系统的主要导航，包括成绩管理、成绩分析、课程信息、专业介绍和成绩修改。
 ![image](https://github.com/OYYS88/student-management/blob/main/%E9%A1%B9%E7%9B%AE%E8%BF%90%E8%A1%8C/home.png)
  - **成绩管理页面**: 管理员拥有成绩查询、筛选、删除、修改和导出功能，可以通过输入框和下拉菜单进行筛选，点击按钮执行相应操作。
  ![deleteAll2](https://github.com/OYYS88/student-management/blob/main/%E9%A1%B9%E7%9B%AE%E8%BF%90%E8%A1%8C/deleteAll.png)
  ![deleteAll](https://github.com/OYYS88/student-management/blob/main/%E9%A1%B9%E7%9B%AE%E8%BF%90%E8%A1%8C/deleteAll2.png)
  ![联系学生](https://github.com/OYYS88/student-management/blob/main/%E9%A1%B9%E7%9B%AE%E8%BF%90%E8%A1%8C/联系学生.png)
  ![修改成绩](https://github.com/OYYS88/student-management/blob/main/%E9%A1%B9%E7%9B%AE%E8%BF%90%E8%A1%8C/修改成绩.png)
  - **成绩分析页面**: 通过图表展示学生的成绩分布，帮助管理员直观地了解学生的整体表现。
  ![成绩分析页面](https://github.com/OYYS88/student-management/blob/main/%E9%A1%B9%E7%9B%AE%E8%BF%90%E8%A1%8C/成绩分析页面.png)
  ![成绩分析页面2](https://github.com/OYYS88/student-management/blob/main/%E9%A1%B9%E7%9B%AE%E8%BF%90%E8%A1%8C/成绩分析页面2.png)
  - **课程信息页面**: 展示课程列表和详细信息，包括课程名称、授课教师、所教科目等。
  ![课程介绍页面](https://github.com/OYYS88/student-management/blob/main/%E9%A1%B9%E7%9B%AE%E8%BF%90%E8%A1%8C/课程介绍页面.png)
  - **专业介绍页面**: 展示专业的基本信息和链接，用户可以点击链接查看详细的介绍。
  ![专业介绍](https://github.com/OYYS88/student-management/blob/main/%E9%A1%B9%E7%9B%AE%E8%BF%90%E8%A1%8C/专业介绍.png)
  - **成绩修改页面**: 允许管理员修改学生的成绩信息，包括学生学号、课程代码、课程成绩等。
  ![改成绩](https://github.com/OYYS88/student-management/blob/main/%E9%A1%B9%E7%9B%AE%E8%BF%90%E8%A1%8C/改成绩.png)
  ### 9. 性能分析与优化

  - **懒加载**: 使用 Vue Router 的懒加载功能，按需加载组件，减少初始加载时间。
  - **代码分割**: 通过 Webpack 的代码分割功能，将代码分成多个小块，按需加载。
  - **虚拟列表**: 在成绩管理页面使用虚拟列表技术，避免一次性渲染大量数据，提高页面性能。
  - **缓存优化**: 使用 Vuex 的持久化插件，缓存用户信息，减少重复请求。

 
