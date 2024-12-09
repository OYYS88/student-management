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
