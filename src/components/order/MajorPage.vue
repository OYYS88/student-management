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