Chart.defaults.global.plugins.datalabels.display = false

var vm = new Vue({
  el: '.app'
})

Vue.component('pie-chart', {
  extends: VueChartJs.Pie,
  props: ['data', 'options'],
  mounted () {
    var data = this.data || {
      labels: ['Olga', 'Elsa', 'Lina'],
      datasets: [
        {
          label: 'GitHub Commits',
          backgroundColor: ['#f779b8', '#f87979', '#f7b879'],
          data: [40, 20, 10]
        }
      ]
    };

    var total = data.datasets[0].data.reduce(function(pv, cv) { return pv + cv; }, 0);

    var options = this.options || {
      tooltips: {
        enabled: false
      },
      legend: {
        display: false
      },
			plugins: {
				datalabels: {
          display: true,
					color: '#fff',
					font: {
						weight: 'bold'
					},
          formatter: function(value , ctx) {
            var label = data.labels[ctx.dataIndex]
            return Math.round(value / total * 100) + '% for ' + label
          }
				}
			}
    };

    this.renderChart(data, options);
  }
})
