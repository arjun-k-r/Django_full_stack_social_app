angular
    .module("app")
    .config(function ($stateProvider) {


        var home = {
            url: '/home',
            templateUrl: '/app/home/home.html',
            controller: 'HomeController',
            controllerAs: 'ctrl'
        };


        $stateProvider

            .state ('home', home)
    });