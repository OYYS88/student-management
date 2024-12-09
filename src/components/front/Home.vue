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
