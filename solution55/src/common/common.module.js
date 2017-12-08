(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://mighty-coast-95672.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
