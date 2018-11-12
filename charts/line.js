Vue.component('line-chart', {
  extends: VueChartJs.Line,
  props: ['data', 'options'],
  mounted () {
    var data = this.data || {
      labels: ["AB","BC","MB","NB","NL","NS","NT","ON","PE","QC","SK","YT","NONE Specified"],
      datasets: [
        {
          label: 'Number of Victim',
          borderColor: '#9260c4',
          backgroundColor: 'transparent',
          data: [92,60,18,10,6,11,0,348,2,189,25,0,6],
          yAxisID: 'A'
        },
        {
          label: '$ loss',
          borderColor: 'red',
          backgroundColor: 'transparent',
          data: [123329.58,44331.04,16918.27,8765.05,1550,4120,0,223692.22,0,116520.37,17046.26,0,11181],
          yAxisID: 'B'
        }
      ]
    };

    var options = this.options || {
      legend: {
        display: false
      },
      scales: {
        yAxes: [
          {
            id: 'A'
          },
          {
            id: 'B'
          }
        ]
      }
    };

    this.renderChart(data, options);
  }
})
