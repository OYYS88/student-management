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
