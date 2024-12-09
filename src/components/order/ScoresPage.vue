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