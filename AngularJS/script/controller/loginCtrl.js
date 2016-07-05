angular.module('fileWatcher').controller('LoginCtrl', function($rootScope, $location) {
    $rootScope.activetab = $location.path();
});
