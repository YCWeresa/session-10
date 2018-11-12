Vue.component('news', {
  extends: VueChartJs.Doughnut,
  props: ['data', 'options'],
  mounted () {
    var data = this.data || {
      labels: ["Ukraine conflict","Financial Crisis in Greece","Protests of Islam EGIDA movement ","Mediterranean Migrant Crisis "],
      datasets: [
        {
          label: 'Affaire de corruption en IDF par département',
          backgroundColor: ['#54abab', '#9bd1d1', '#9bd1d1', '#9bd1d1'],
          data: [3 , 3 , 4 , 2],
          datalabels: {
            align: 'center',
            anchor: 'center'
          }
        }
      ]
    };

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
					color: '#254444',
					font: {
						weight: 'bold'
					},
          formatter: function(v, ctx) {
            return [v, data.labels[ctx.dataIndex]]
          }
				}
			}
    };

    this.renderChart(data, options);
  }
})
