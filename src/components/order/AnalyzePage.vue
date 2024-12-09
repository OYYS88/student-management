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
