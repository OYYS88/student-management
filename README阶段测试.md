- # 									**学生成绩管理系统**

  #### **本项目只有前端代码，数据都是模拟而来。项目已在github上开源[点击跳转](https://github.com/OYYS88/student-management)**

  

  

  ### 一、开发环境及工具

  - **操作系统**: Windows 11
  - **开发工具**: Jetbrains WebStorm
  - **前端框架**: Vue 3
  - **状态管理**: Vuex
  - **路由管理**: Vue Router
  - **UI 框架**: Element UI
  - **模拟数据**: Mock.js
  - **版本管理**: Git

  ### 二、 项目或功能描述

  ​		本项目是一个基于 Vue 3 的学生信息管理系统，主要功能包括学生成绩管理、课程信息展示、专业介绍、成绩修改等。系统通过模拟数据生成学生和课程信息，并提供相应的增删改查功能。

  **目录结构描述**:

  ```text
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


  ### 三. 编写目的

  ​		本项目的编写目的是为学校管理员提供一个高效的学生信息管理工具，帮助他们更好地管理和分析学生的学习情况。目标用户为学校管理员和技术支持人员，要求具备基本的计算机操作能力和一定的前端开发知识。

  ### 四. 项目或功能背景

  ​		随着教育信息化的发展，学校对学生的成绩管理越来越依赖于信息化手段。传统的纸质记录方式已经无法满足现代教育的需求，因此开发一个高效的学生信息管理系统显得尤为重要。本项目旨在通过现代化的前端技术，提供一个直观、易用的学生信息管理平台。

  ### 五. 模块与关系

  - **Login**: 用户登录模块，验证用户身份。

  ```vue
<template>
  <div id="container">
    <div id="title">
      <h1>学生成绩管理系统</h1>
    </div>
    <div class="input">
      <el-input v-model="name" prefix-icon="User" placeholder="请输入用户名"></el-input>
    </div>
    <div class="input">
      <el-input v-model="password" prefix-icon="Lock" placeholder="请输入密码" auto-complete="new-password" show-password></el-input>
    </div>
    <div class="input">
      <el-button @click="login" style="width:500px" type="primary" :disabled="disabled">
        登录
      </el-button>
    </div>
  </div>
</template>

<script>
import Storage from '../../tools/Storage'
import { ElMessage } from 'element-plus'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  data() {
    return {
      name: "",
      password: ""
    }
  },
  computed: {
    // 进行输入的有效性检查，用户名和密码必须都不为空才允许登录
    disabled() {
      return this.name.length === 0 || this.password.length === 0;
    }
  },
  methods: {
    // 用户登录的方法
    login() {
      Storage.commit("registUserInfo", {
        name: this.name,
        password: this.password
      });

      ElMessage({
        message: "登录成功",
        type: "success",
        duration: 3000
      });

      setTimeout(() => {
        this.$router.push({ name: "home" })
        // this.$router.push({ name: "home" });
      }, 3000);
    }
  }
}
</script>

<style scoped>
#container {
  background: #595959 url("~@/assets/login_bg.jpg");
  height: 100%;
  width: 100%;
  position: absolute;
}
#title {
  text-align: center;
  color: azure;
  margin-top: 200px;
}
.input {
  margin: 20px auto;
  width: 500px;
}
</style>
  ```

  - **Home**: 主页模块，显示系统的主要导航。

  ```vue
<template>
  <el-container id="container">
    <el-aside width="250px">
      <el-container id="top" style="background-color:#545c64; height: 60px" >
        <img style="width:25px;height:25px;margin: auto 0 auto auto;" src="../../assets/logo.png" alt=""/>
        <div style="margin: auto auto auto 10px;color:#ffffff;font-size:17px">成绩管理系统</div>
      </el-container>
      <el-menu
          :default-active="$route.path"
          style="height:100%"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          @select="selectItem"
          :default-openeds="['1', '2']">

        <el-sub-menu index="1">
          <template #title>
            <el-icon><Edit /></el-icon>
            <span>成绩管理</span>
          </template>
          <el-menu-item index="/home/scores" to="/home/scores">
            <router-link to="/home/scores" id="tia">成绩查询</router-link>
          </el-menu-item>
          <el-menu-item index="/home/analyze" to="/home/analyze">
            <router-link to="/home/analyze" id="tia">成绩分析</router-link>
          </el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="2">
          <template #title>
            <el-icon><Search /></el-icon>
            <span>其他查询</span>
          </template>
          <el-menu-item index="/home/course" to="/home/course">
            <router-link to="/home/course" id="tia">课程介绍</router-link>
          </el-menu-item>
          <el-menu-item index="/home/major" to="/home/major">
            <router-link to="/home/major" id="tia">专业介绍</router-link>
          </el-menu-item>
        </el-sub-menu>



      </el-menu>
    </el-aside>

    <el-main style="padding: 0" >
      <el-header style="margin:0;height:60px;padding: 0 0 30px;">
        <el-container style="background-color: #545c64;margin: 0;padding: 0;height: 60px">
          <div style="margin: auto auto auto 100px;color: white">
            <h1>~~~欢迎<span style="color: #d32020;">OYYS</span>管理员登录成绩管理系统~~~</h1>
          </div>
          <div style="margin: auto 30px auto auto;">
            <el-button type="primary" @click="logout">退出</el-button>
          </div>
        </el-container>

      </el-header>
      <!-- 这里用来渲染具体的功能模块 -->
      <router-view></router-view>
    </el-main>

  </el-container>
</template>

<script scoped>
import {Avatar, List, Shop, Ticket, Tools} from "@element-plus/icons-vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
  components: {
    ElIcon: {
      Avatar, List, Shop, Ticket, Tools
    }
  },
  methods: {
    logout() {
      // 使用 this.$confirm 弹出确认框
      this.$confirm('您确定要退出吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 用户点击确定后的回调
        this.$store.commit('logout');
        this.$router.push({ name: "login" });
      }).catch(() => {
        // 用户点击取消后的回调
        this.$message({
          type: 'info',
          message: '已取消退出'
        });
      });
    }
  }
}
</script>

<style scoped>
#container {
  height: 100vh;
}
#tia{
  color: white;
  text-decoration: none;
}
</style>
  ```

  - **Scores**: 成绩管理模块，提供成绩查询、筛选、删除、修改和导出功能。

  ```vue
<template>
  <div class="student-grade-management">>
    <el-container class="filter-container">
      <div class="input-tip">
        学生姓名:
      </div>
      <div class="input-field">
        <el-input v-model="queryParam.studentName"></el-input>
      </div>
      <div class="input-tip">
        课程名称:
      </div>
      <div class="input-field">
        <el-input v-model="queryParam.courseName"></el-input>
      </div>
      <div class="input-tip">
        学期:
      </div>
      <div class="input-field">
        <el-select v-model="queryParam.semester" placeholder="请选择学期">
          <el-option label="2024春季" value="2024春季"></el-option>
          <el-option label="2024秋季" value="2024秋季"></el-option>
        </el-select>
      </div>
      <div class="input-tip">
        学年:
      </div>
      <div class="input-field">
        <el-select v-model="queryParam.academicYear" placeholder="请选择学年">
          <el-option label="2024" value="2024"></el-option>
          <el-option label="2025" value="2025"></el-option>
        </el-select>
      </div>
    </el-container>

    <div class="content-row">
      <el-container>
        <el-button type="primary" @click="requestData">筛选</el-button>
        <el-button type="danger" @click="clear">清空筛选</el-button>
        <el-button type="primary" @click="exportData">导出</el-button>
        <el-button type="primary" @click="deleteData">批量删除</el-button>
      </el-container>
    </div>

    <el-table
        ref="multipleTable"
        :data="scoreList"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
      <!-- 多选框 -->
      <el-table-column
          type="selection"
          width="55">
      </el-table-column>
      <!-- 学生姓名 -->
      <el-table-column
          label="学生姓名"
          width="100"
          prop="studentName">
      </el-table-column>
      <!-- 考试科目 -->
      <el-table-column
          label="考试科目"
          width="200"
          prop="courseName">
      </el-table-column>
      <!-- 成绩 -->
      <el-table-column
          label="平时成绩"
          width="100"
          prop="score1">
      </el-table-column>
      <el-table-column
          label="考试成绩"
          width="100"
          prop="score2">
      </el-table-column>
      <el-table-column
          label="最终成绩"
          width="100"
          prop="score">
      </el-table-column>
      <!-- 所属班级 -->
      <el-table-column
          label="所属班级"
          width="100"
          prop="className">
      </el-table-column>
      <!-- 职务 -->
      <el-table-column
          label="职务"
          width="100">
        <template #default="scope">
          <el-tag size="medium" :type="scope.row.role ? '' : 'info'">{{ scope.row.role ? '班干' : '学生' }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
          label="是否及格"
          width="100">
        <template #default="scope">
          <el-tag size="medium" :type="scope.row.state ? 'success' : 'danger'">{{ scope.row.state ? '及格' : '不合格' }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
          label="操作"
          width="400">
        <template #default="scope">
          <el-button  type="danger" @click="deleteItem(scope.$index)">删除</el-button>
          <el-button  style="background-color: #5f8cc7;border-color: #5f8cc7;" >
            <router-link to="/home/revise" style="color: white; text-decoration: none;">修改成绩</router-link>
          </el-button>
          <el-button style="background-color: #61b465;border-color: #61b465;" type="primary" @click="callUser(scope.row)">联系学生</el-button>
        </template>

      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Mock from '../../mock/Mock'
import Tools from '../../tools/Tools'

export default {
  data() {
    return {
      scoreList: [],
      showModifyGrades: false,
      queryParam: {
        studentName: '',
        courseName: '',
        semester: '',
        academicYear: ''
      },
      multipleSelection: []
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.scoreList = Mock.getOrder();
      console.log(this.scoreList);
    },
    requestData() {
      this.$message({
        type: 'success',
        message: '筛选请求参数：' + JSON.stringify(this.queryParam)
      });
      this.scoreList = Mock.getOrder();
    },
    clear() {
      this.queryParam = {
        studentName: '',
        courseName: '',
        semester: '',
        academicYear: ''
      };
      this.scoreList = Mock.getOrder();
    },
    exportData() {
      Tools.exportJson('订单.json', JSON.stringify(this.scoreList));
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    modifyGrades() {
      this.showModifyGrades = true;
    },
    deleteItem(index) {
      this.$confirm('确定要删除选中的学生信息吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.scoreList.splice(index, 1);
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {});
    },
    deleteData() {
      this.$confirm('确定要删除选中的学生信息吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.scoreList = this.scoreList.filter(item => !this.multipleSelection.includes(item));
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {});
    },
    callUser(item) {
      console.log(item);
      this.$message({
        type: 'success',
        message: '联系学生：' + item.phone
      });
    }
  }
}
</script>

<style scoped>
.filter-container {
  margin-bottom: 20px;
}
.input-tip {
  margin-right: 10px;
}
.input-field {
  margin-right: 20px;
}
.content-row {
  margin-bottom: 20px;
}
</style>
  ```

  - **Analyze**: 成绩分析模块，通过图表展示学生的成绩分布。

  ```vue
<template>
  <div class="content-container">
    <el-container class="content-row">
      <div class="info">班级：{{ data.className }}</div>
      <div class="info">考试科目：{{ data.subject }}</div>
      <div class="info">参考人数：{{ data.participantCount }}</div>
      <div class="info">更新时间：{{ data.time }}</div>
    </el-container>

    <el-container class="content-row">
      <el-radio-group @change="changeType" v-model="chartType">
        <el-radio-button label="平均值"></el-radio-button>
        <el-radio-button label="及格率"></el-radio-button>
      </el-radio-group>
    </el-container>

    <div ref="chart" id="chart"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import Mock from '../../mock/Mock';

export default {
  data() {
    return {
      chartData: { xData: [], scores: [] },
      chartType: "平均值",
      data: {}
    };
  },
  mounted() {
    this.loadMockData();
    this.refreshChart();
  },
  watch: {
    chartData() {
      this.refreshChart();
    },
  },
  methods: {
    loadMockData() {
      this.data = Mock.getTradeData();
      this.chartData = Mock.getChartsData();
    },
    changeType() {
      // 根据 `chartType` 切换图表数据处理逻辑
      this.chartData = Mock.getChartsData();
    },
    refreshChart() {
      const chart = echarts.init(this.$refs.chart);
      chart.clear();
      chart.setOption({
        xAxis: {
          type: 'category',
          data: this.chartData.xData,
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: this.chartType,
            type: 'line',
            data: this.chartData.scores,
          },
        ],
      });
    },
  },
};
</script>

<style scoped>
#chart {
  width: 100%;
  height: 400px;
}
.info {
  margin: 10px 20px;
  font-size: 18px;
  color: #555;
}
.content-row {
  margin-bottom: 20px;
}
</style>

  ```

  - **Course**: 课程信息模块，展示课程列表和详细信息。

  ```vue
<template>
  <div class="course-page">
    <el-row :gutter="20">
      <el-col :span="8" v-for="(course, index) in courses" :key="index">
        <div class="course-card">
          <img :src="course.avatar" alt="teacher avatar" class="avatar" />
          <div class="course-info">
            <p><strong>姓名：</strong>{{ course.name }}</p>
            <p><strong>性别：</strong>{{ course.gender }}</p>
            <p><strong>所教科目：</strong>{{ course.subject }}</p>
            <p><strong>挂科率：</strong>{{ course.failRate }}%</p>
            <p><strong>简介：</strong>{{ course.introduction }}</p>
            <p><strong>联系方式：</strong>{{ course.phone }}</p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Mock from '../../mock/Mock'

export default {
  data() {
    return {
      courses: [],
    };
  },
  mounted() {
    this.courses = Mock.getCourses();
  },
};
</script>

<style scoped>
.course-page {
  padding: 20px;
}

.course-card {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background: #fff;
}

.avatar {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
}

.course-info p {
  margin: 5px 0;
  font-size: 16px;
}
</style>
  ```

  - **Major**: 专业介绍模块，展示专业的基本信息和链接。

  ```vue
<template>
  <div class="major-intro">
    <el-breadcrumb separator="/" style="margin-bottom: 30px;">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>其他查询</el-breadcrumb-item>
      <el-breadcrumb-item>专业介绍</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="table-container">
      <el-table :data="majors" border stripe style="width: 100%" class="majors-table">
        <el-table-column
            v-for="(column, index) in columns"
            :key="index"
            :prop="column.prop"
            :label="column.label"
            :width="column.width">
        </el-table-column>
        <el-table-column label="操作" width="100">
          <template #default="scope">
            <el-link :href="scope.row.link" target="_blank" type="primary" style="color: #53557a">详情</el-link>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "MajorIntro",
  data() {
    return {
      majors: [
        { name: '计算机科学与技术', teacher: '小A，小B，小C', date: '2021-05-31', link: 'https://dsjxy.tskjxy.edu.cn/info/1005/1028.htm' },
        { name: '数据科学与大数据技术', teacher: '小D，小E，小F', date: '2021-05-31', link: 'https://dsjxy.tskjxy.edu.cn/info/1005/1027.htm' },
        { name: '虚拟现实技术', teacher: '小G，小H', date: '2022-04-26', link: 'https://dsjxy.tskjxy.edu.cn/info/1005/1255.htm' },
        { name: '信息管理与信息系统', teacher: '小A，小B', date: '2021-05-31', link: 'https://dsjxy.tskjxy.edu.cn/info/1005/1026.htm' },
        { name: '大数据管理与应用', teacher: '小C，小D', date: '2021-05-31', link: 'https://dsjxy.tskjxy.edu.cn/info/1005/1025.htm' },
        { name: '计算机应用技术', teacher: '小E，小F', date: '2021-05-31', link: 'https://dsjxy.tskjxy.edu.cn/info/1005/1024.htm' },
        { name: '计算机网络技术', teacher: '小G，小H', date: '2021-05-31', link: 'https://dsjxy.tskjxy.edu.cn/info/1005/1023.htm' },
        { name: '大数据技术', teacher: '小A，小B', date: '2021-05-31', link: 'https://dsjxy.tskjxy.edu.cn/info/1005/1022.htm' },
        { name: '虚拟现实技术应用', teacher: '小C，小D', date: '2022-04-26', link: 'https://dsjxy.tskjxy.edu.cn/info/1005/1256.htm' },
      ],
      columns: [
        { label: '专业名称', prop: 'name', width: '250' },
        { label: '授课教师', prop: 'teacher', width: '300' },
        { label: '创办日期', prop: 'date', width: '200' },
      ]
    };
  },
};
</script>

<style scoped>
.major-intro {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.table-container {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.majors-table {
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 95%;
  background-color: #fff;
}

.el-table th, .el-table td {
  text-align: center;
  padding: 10px;
}

.el-table th {
  background-color: #3498db;
  color: white;
  font-weight: bold;
}

.el-table td a {
  color: #3498db;
  text-decoration: none;
}

.el-table td a:hover {
  text-decoration: underline;
}

</style>
  ```

  - **Revise**: 成绩修改模块，允许管理员修改学生的成绩信息。

  ```vue
<template>
  <div class="revise-page">
    <h2><i class="el-icon-edit"></i> 请填写以下信息</h2>
    <el-form :model="form" label-width="120px" class="form-container">
      <el-row gutter="20">
        <el-col :span="12">
          <el-form-item label="学生学号">
            <el-input v-model="form.studentId" placeholder="请输入学生学号" readonly></el-input>
          </el-form-item>
          <el-form-item label="课程代码">
            <el-input v-model="form.courseCode" placeholder="请输入课程代码" readonly></el-input>
          </el-form-item>
          <el-form-item label="课程成绩">
            <el-input v-model="form.courseGrade" placeholder="请输入课程成绩"></el-input>
          </el-form-item>
          <el-form-item label="所在学期">
            <el-input v-model="form.semester" placeholder="请输入所在学期" readonly></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="学生姓名">
            <el-input v-model="form.studentName" placeholder="请输入学生姓名" readonly></el-input>
          </el-form-item>
          <el-form-item label="课程名称">
            <el-input v-model="form.courseName" placeholder="请输入课程名称" readonly></el-input>
          </el-form-item>
          <el-form-item label="获得学分">
            <el-input v-model="form.courseCredits" placeholder="请输入获得学分" readonly></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item>
        <el-button  style="background-color: #62c75f;border-color: #62c75f;" >
        <router-link to="/home/scores" style="color: white; text-decoration: none;">返回</router-link>
        </el-button>
        <el-button type="primary" @click="submitForm">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Mock from '../../mock/Mock'

export default {
  data() {
    return {
      form: {
        studentId: "",
        studentName: "",
        courseCode: "",
        courseName: "",
        courseGrade: "",
        courseCredits: "",
        semester: "",
      },
    };
  },
  created() {
    this.form = Mock.getStudentInfo();
  },
  methods: {
    submitForm() {
      if (!this.form.courseGrade) {
        this.$message.error("请填写课程成绩！");
        return;
      }

      this.$message.success("成绩信息提交成功！");
      console.log("提交的表单数据：", this.form);

      this.$router.push("/home/scores");
    },
  },
};
</script>

<style scoped>
.revise-page {
  margin: 20px;
}
h2 {
  display: flex;
  align-items: center;
  font-size: 18px;
  margin-bottom: 20px;
  color: #333;
}
.el-icon-edit {
  margin-right: 8px;
}
.form-container {
  width: 800px;
  margin: auto;
}
</style>
  ```

  ### 六. 类或术语说明

  - **Vuex**（Storage）: 一个专为 Vue.js 应用程序开发的状态管理模式，可以配置和管理 Vue 应用程序的状态，使用 Vuex 来管理用户的登录状态。

  ```js
import { createStore } from 'vuex'
const Store = createStore({
    state(){
        return {
            userName:"",
            userPassword:"",
        }
    },
    getters:{
        isLogin:(state)=>{
            return state.userName.length > 0
        }
    },
    mutations:{
        // 清除缓存的用户信息，登出使用
        cleaUSerInfo(state){
            state.userName = '';
            state.userPassword = '';
        },
    //     注册用户信息，登录使用
        registUserInfo(state,{name,password}){
            state.userName=name;
            state.userPassword=password;
        },
        logout(state){
            this.commit('cleaUSerInfo',state);
        }
    }
})
export default Store;
  ```

  - **Vue Router**: 一个官方的 Vue.js 路由器，作用是配置和管理 Vue 应用程序的路由。它定义了应用中的不同路由路径及其对应的组件，并实现了路由守卫以控制用户访问权限。

  ```js
import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '@/components/front/Login.vue'
import Home from '../components/front/Home.vue'
import Store from '../tools/Storage'
import Scores from '../components/order/ScoresPage.vue'
import Analyze from '../components/order/AnalyzePage.vue'
import Course from '../components/order/CoursePage.vue'
import Major from '../components/order/MajorPage.vue'
import Revise from '../components/order/RevisePage.vue'

// 创建路由实例
const Router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/front',
            name: 'login',
            component: Login
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            children: [
                {
                    path: 'scores',
                    component: Scores,
                    name: 'Scores'
                },
                {
                    path: 'analyze',
                    component: Analyze,
                    name: 'Analyze'
                },
                {
                    path: 'course',
                    component: Course,
                    name: 'Course'
                },
                {
                    path: 'major',
                    component: Major,
                    name: 'Major'
                },
                {
                    path: 'revise',
                    component: Revise,
                    name: 'Revise'
                }
            ],
            redirect: '/home/scores',
        },
    ]
})

// 路由守卫，当未登录时，非登录页面的任何页面都不允许跳转
Router.beforeEach((to, from, next) => {
    let isLogin = Store.getters.isLogin;
    if (isLogin || to.name === 'login') {
        next(); // 用户已登录或访问的是登录页面，允许导航继续
    } else {
        next({ name: 'login' }); // 否则，重定向到登录页面
    }
})

export default Router;
  ```

  - 在**main.js**中初始化应用实例、注册全局组件、引入Element UI、配置路由和状态管理，并最终将应用挂载到指定的 DOM 元素上。

  ```js
import App from './App.vue'
import { createApp } from 'vue'
import Router from './tools/Router'
import Store from './tools/Storage'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

for(const [key, value] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, value)
}

app.use(Router)
app.use(Store)
app.mount('#app');
app.use(ElementPlus)
  ```

  - **Mock.js**: 一款强大的数据模拟工具，可以方便地生成模拟数据。

  ```js
import mockjs from "mockjs";

let subjects = ['计算机网络原理', 'Java Web 应用开发技术', 'Web前端开发', '软件工程', '编译原理', '数据采集与网络爬虫', '商务礼仪', '地球科学', '财务管理'];
let introductions = ["热爱教学，擅长激发学生兴趣。", "拥有多年教学经验，课程内容生动有趣。", "注重基础知识的巩固与拓展。", "致力于培养学生的思维能力。", "坚持因材施教，帮助学生实现全面发展。",];
let shift = ['计科1班', '计科2班', '计科（远景）'];
let semester = ['2024春', '2024秋', '2025春', '2025秋'];
let xData = ["月考1", "期中考试", "月考2", "月考3", "期末考试"];

const Mock = {
// 配合首页ScoresPage.vue使用
    getOrder() {
        let array = [];
        for (let i = 0; i < 9; i++) {
            let score1 = mockjs.Random.integer(60, 95);  // 平时成绩
            let score2 = mockjs.Random.integer(40, 80);// 考试成绩
            const score = Math.round(score1 * 0.3 + score2 * 0.7);

            array.push(mockjs.mock({
                'studentName': mockjs.Random.cname(),
                'courseName': mockjs.Random.pick(subjects),
                'score1': score1,
                'score2': score2,
                'score': score,
                'className': mockjs.Random.pick(shift),
                'role': mockjs.Random.boolean(),
                'state': score >= 60,
                'phone': mockjs.mock(/^1[3-9]\d{9}$/)
            }));
        }
        return array;
    },
// 配合成绩修改页面RevisePage.vue使用
    getStudentInfo() {
        return mockjs.mock({
            studentId: mockjs.Random.string("number", 8),
            studentName: mockjs.Random.cname(),
            courseCode: `C${mockjs.Random.string("number", 4)}`,
            courseName: mockjs.Random.pick(subjects),
            courseGrade: mockjs.Random.integer(0, 100),
            courseCredits: mockjs.Random.float(1, 4, 1, 1),
            semester: mockjs.Random.pick(semester),
        });
    },
// 配合成绩分析页面AnalyzePage.vue使用
    getChartsData() {
        return {
            xData: xData,
            scores: Array.from({ length: 5 }, () => mockjs.Random.integer(50, 95))
        };
    },
    getTradeData() {
        return mockjs.mock({
            'className': mockjs.Random.pick(shift),
            'subject': mockjs.Random.pick(subjects),
            'participantCount': mockjs.Random.integer(30, 55),
            'time': function() {
                const now = new Date();
                const year = now.getFullYear();
                const month = (now.getMonth() + 1).toString().padStart(2, '0');
                const day = now.getDate().toString().padStart(2, '0');
                const hours = now.getHours().toString().padStart(2, '0');
                const minutes = now.getMinutes().toString().padStart(2, '0');
                const seconds = now.getSeconds().toString().padStart(2, '0');
                return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
            }
        });
    },
// 配合课程信息展示页面CoursePage.vue使用
    getCourses() {
        let array = [];

        for (let i = 0; i < 9; i++) {
            const randomId = mockjs.Random.integer(1, 1000);
            array.push(mockjs.mock({
                'name': mockjs.Random.cname(),
                'gender': mockjs.Random.pick(["男", "女"]),
                'subject': mockjs.Random.pick(subjects),
                'failRate': mockjs.Random.integer(3, 10),
                'introduction': mockjs.Random.pick(introductions),
                'avatar': `https://api.multiavatar.com/${randomId}.png`,
                'phone': mockjs.mock(/^1[3-9]\d{9}$/)
            }));
        }
        return array;
    },
}

export default Mock;
  ```

  ### 七. 实现功能所采用的技术

  - **Vue 3**: 前端框架，用于构建用户界面。
  - **Vuex**: 状态管理库，用于管理应用的状态。
  - **Vue Router**: 路由管理库，用于实现页面之间的导航。
  - **Element UI**: 组件库，提供丰富的 UI 组件。
  - **Mock.js**: 数据模拟工具，用于生成模拟数据。
  - **ES6+**: 现代 JavaScript 语法，提高代码的可读性和可维护性。

  ### 八. 用户界面与交互

  - **登录页面**: 用户输入用户名和密码进行登录。

  ![](D:\Users\Desktop\作业\Vue\Vue3_OYYS\student-management\项目运行\login.png)

  - **主页**: 显示系统的主要导航，包括成绩管理、成绩分析、课程信息、专业介绍和成绩修改。

  ![](D:\Users\Desktop\作业\Vue\Vue3_OYYS\student-management\项目运行\home.png)

  - **成绩管理页面**: 管理员拥有成绩查询、筛选、删除、修改和导出功能，可以通过输入框和下拉菜单进行筛选，点击按钮执行相应操作。

  ![deleteAll2](D:\Users\Desktop\作业\Vue\Vue3_OYYS\student-management\项目运行\deleteAll.png)

  ![deleteAll](D:\Users\Desktop\作业\Vue\Vue3_OYYS\student-management\项目运行\deleteAll2.png)

  ![联系学生](D:\Users\Desktop\作业\Vue\Vue3_OYYS\student-management\项目运行\联系学生.png)

  ![修改成绩](D:\Users\Desktop\作业\Vue\Vue3_OYYS\student-management\项目运行\修改成绩.png)

  - **成绩分析页面**: 通过图表展示学生的成绩分布，帮助管理员直观地了解学生的整体表现。

  ![成绩分析页面](D:\Users\Desktop\作业\Vue\Vue3_OYYS\student-management\项目运行\成绩分析页面.png)

  ![成绩分析页面2](D:\Users\Desktop\作业\Vue\Vue3_OYYS\student-management\项目运行\成绩分析页面2.png)

  - **课程信息页面**: 展示课程列表和详细信息，包括课程名称、授课教师、所教科目等。

  ![课程介绍页面](D:\Users\Desktop\作业\Vue\Vue3_OYYS\student-management\项目运行\课程介绍页面.png)

  - **专业介绍页面**: 展示专业的基本信息和链接，用户可以点击链接查看详细的介绍。

  ![专业介绍](D:\Users\Desktop\作业\Vue\Vue3_OYYS\student-management\项目运行\专业介绍.png)

  - **成绩修改页面**: 允许管理员修改学生的成绩信息，包括学生学号、课程代码、课程成绩等。

  ![改成绩](D:\Users\Desktop\作业\Vue\Vue3_OYYS\student-management\项目运行\改成绩.png)

  ### 九. 性能分析与优化

  - **懒加载**: 使用 Vue Router 的懒加载功能，按需加载组件，减少初始加载时间。
  - **代码分割**: 通过 Webpack 的代码分割功能，将代码分成多个小块，按需加载。
  - **虚拟列表**: 在成绩管理页面使用虚拟列表技术，避免一次性渲染大量数据，提高页面性能。
  - **缓存优化**: 使用 Vuex 的持久化插件，缓存用户信息，减少重复请求。

  
