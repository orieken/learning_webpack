module.exports = function () {
  /* CSS */
  require('../index.scss');
  require('../../bower_components/mdi/css/materialdesignicons.min.css');
  /* JS */
  global.$ = global.jQuery = require('jquery');
  require('velocity-animate');
  require('angular');
  global.moment = require('moment');
  require('../../bower_components/lumx/dist/lumx');
};