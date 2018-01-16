angular
    .module("app")
    .config(function ($stateProvider) {


        var users = {
            url: '/users',
            templateUrl: '/app/users/users.html',
            controller: 'UsersController',
            controllerAs: 'ctrl',

        }

        var user = {
            url: '/user/:id',
            templateUrl: '/app/users/user.html',
            controller: 'UserController',
            controllerAs: 'ctrl',
            params: {
                user: null
            }
        }

        $stateProvider

            .state('users', users)
            .state('user', user)

        //  $stateProvider.state(users);
        //  $stateProvider.state(user);
    });