angular
    .module("app")
    .config(function ($stateProvider) {


        var login = {
            url: '/login',
            templateUrl: '/app/session/login.html',
            controller: 'LoginController',
            controllerAs: 'ctrl'
        };

        var signup = {
            url: '/signup',
            templateUrl: '/app/session/signup.html',
            controller: 'SignupController',
            controllerAs: 'ctrl'
        };


        $stateProvider

            .state('login', login)
            .state('signup', signup)


        // $stateProvider.state(login);
        // $stateProvider.state(signup);
    });