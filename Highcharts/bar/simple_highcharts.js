Highcharts.chart('container', {
  chart: {
    type: 'bar'
  },
  title: {
    text: 'UCSD Applications between Men and Women (2005-2018)'
  },
  xAxis: {
    categories: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018],
    title: {
      text: "Year"
    }
  },
  yAxis: {
    min: 15000,
    title: {
      text: 'Applications',
      align: 'high'
    },
    labels: {
      overflow: 'justify'
    }
  },
  tooltip: {
    valueSuffix: ' millions'
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true
      }
    }
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'top',
    x: -40,
    y: 80,
    floating: true,
    borderWidth: 1,
    backgroundColor:
      Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
    shadow: true
  },
  credits: {
    enabled: false
  },
  series: [{
       name: 'Men',
       data: [18147,19838,20566,21590,21725,22332,25097,28758,31992,34618,37009,39779,41583,45636]
    }, 
    {
       name: 'Women',
       data: [22371,23748,24507,25775,25321,25761,28351,32049,35408,38822,41047,44430,46845,52265]
    }]
});