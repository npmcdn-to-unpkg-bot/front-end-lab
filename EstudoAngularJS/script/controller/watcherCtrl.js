angular.module('fileWatcher').controller('WatcherCtrl', function($rootScope, $location) {
    $rootScope.activetab = $location.path();
});
