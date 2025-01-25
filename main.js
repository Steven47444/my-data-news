// import 语法 (如果你的项目用 ES Module 或打包器，可以这样写)
import Chart from 'chart.js/auto';

// 如果是普通浏览器环境而不打包，需要下面的写法（路径可能要改）
// <script src="./node_modules/chart.js/dist/chart.js"></script>

// 等 DOM 加载完成后再执行
window.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'bar',  // 柱状图
    data: {
      labels: ['2018','2019','2020','2021','2022'],
      datasets: [{
        label: '年轻人春晚关注度（%）',
        data: [55, 48, 40, 35, 28],
        backgroundColor: ['#f44336','#e91e63','#9c27b0','#673ab7','#3f51b5']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true },
        title: {
          display: true,
          text: '示例数据：年轻人春晚关注度'
        }
      }
    }
  });
});
