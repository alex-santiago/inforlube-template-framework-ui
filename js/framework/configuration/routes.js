var routes = {};

routes.init = function () {

  route('/', function () {
    //riot.mount('splash-screen');
    riot.mount('#wrapper', 'wrapper');
  });

  route('/site-error', function () {
    riot.mount('#mainContentBody', 'site-error');
  }, 'Error Message');

  route('/sample', function () {
    riot.mount('#mainContentBody', 'sample');
  }, 'Sample');

  route('/report-exceptionslog', function () {
  	riot.mount('#mainContentBody', 'report-exceptionslog');
  }, 'Report ExceptionsLog');

  route('/report-exceptions-details', function () {
  	riot.mount('#mainContentBody', 'report-exceptions-details');
  }, 'Report ExceptionsLog Details');

  route('/report-protocols', function () {
    riot.mount('#mainContentBody', 'report-protocols');
  }, 'Report Protocols');

  route('/protocol-details', function () {
    riot.mount('#mainContentBody', 'protocol-details');
  }, 'Report Protocols - Protocol Details');

  route('/chart-protocols', function () {
    riot.mount('#mainContentBody', 'chart-protocols');
  }, 'Graph Protocols');

  route('/dashboard', function () {
    riot.mount('#mainContentBody', 'dashboard');
  }, 'Dashboard');
}
