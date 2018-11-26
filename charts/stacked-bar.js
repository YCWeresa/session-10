/*Vue.component('stacked-bar', {
  extends: VueChartJs.Multibar,
  props: ['data', 'options']
  }
var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	title:{
		text: "Mobile Payments by Value"
	},	
	axisY: {
		title: "Yearly Total in Billion USD",
		titleFontColor: "#4F81BC",
		lineColor: "#4F81BC",
		labelFontColor: "#4F81BC",
		tickColor: "#4F81BC"
	},
	axisY2: {
		title: "Millions of Barrels/day",
		titleFontColor: "#C0504E",
		lineColor: "#C0504E",
		labelFontColor: "#C0504E",
		tickColor: "#C0504E"
	},	
	toolTip: {
		shared: true
	},
	legend: {
		cursor:"pointer",
		itemclick: toggleDataSeries
	},
	data: [{
		type: "column",
		name: "Alipay",
		legendText: "Alipay",
		showInLegend: true, 
		dataPoints:[
			{ label: "2012", y: 80 },
			{ label: "2013", y: 170 },
			{ label: "2014", y: 830 },
			{ label: "2015", y: 1240 },
			{ label: "2016", y: 1680 },
		]
	},
	{
		type: "column",	
		name: "WeChat Pay",
		legendText: "WeChat Pay",
		axisYType: "secondary",
		showInLegend: true,
		dataPoints:[
			{ label: "2012", y: 20 },
			{ label: "2013", y: 30 },
			{ label: "2014", y: 100 },
			{ label: "2015", y: 400 },
			{ label: "2016", y: 1350 },
		]
	}]
});
chart.render();

function toggleDataSeries(e) {
	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	}
	else {
		e.dataSeries.visible = true;
	}
	chart.render();
}*/

Vue.component('stacked-bar-chart', {
  extends: VueChartJs.Bar,
  props: ['data', 'options'],
  mounted () {
    var data = this.data || {
      labels: ['2012','2013','2014','2015','2016','2017'],
      datasets: [
        {
          label: 'WeChat Pay',
          backgroundColor: '#00cc00',
          data: [11.6,40,50,400,1280,6006],
          datalabels: {
            align: 'end',
            anchor: 'end'
          }
        },
        {
          label: 'Alipay',
          backgroundColor: '#0099cc',
          data: [70,170,850,1300,1700,8316],
          datalabels: {
            align: 'end',
            anchor: 'end'
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
          display: false,
					color: '#c46060',
					font: {
						weight: 'bold'
					},
					formatter: Math.round
				}
			},
      scales: {
        yAxes:  [
          {
          	stacked: true,
            display: true,
            ticks: {
              beginAtZero: true
            }
          }
        ],
        xAxes: [
          {
          	stacked: true,
            categoryPercentage: 1,
            barPercentage: 2/3
          }
        ]
      }
    };

    this.renderChart(data, options);
  }
})
