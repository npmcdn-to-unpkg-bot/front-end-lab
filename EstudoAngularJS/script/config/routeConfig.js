angular.module('fileWatcher').config(function ($routeProvider, $locationProvider) {

    $routeProvider

    // para a rota '/', carregaremos o template login.html e o controller 'LoginCtrl'
    .when('/', {
        templateUrl : '/view/login.html',
        controller  : 'LoginCtrl'
    })

    // para a rota '/', carregaremos o template watcher.html e o controller 'WatcherCtrl'
    .when('/watcher', {
        templateUrl : '/view/watcher.html',
        controller  : 'WatcherCtrl'
    })

    // caso não seja nenhum desses, redirecione para a rota '/'
   .otherwise({ redirectTo: '/' });
});
