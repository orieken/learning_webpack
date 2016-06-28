module.exports = angular.module('app', [
    'lumx'
]);

function printMessage(status='working') {
  let message = 'ES6';

  console.log(`${message} is ${status}`);
}

console.log(printMessage());