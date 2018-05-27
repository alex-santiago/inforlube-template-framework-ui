const areaChart = riot.observable();

function updateChart (data) {
  areaChart.trigger('updateChart', data);
}
