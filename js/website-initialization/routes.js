var routes = {};

routes.init = function () {

  route('/', function () {
    //riot.mount('splash-screen');
    riot.mount('#wrapper', 'wrapper');
  });

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

}
