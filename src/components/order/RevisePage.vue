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
