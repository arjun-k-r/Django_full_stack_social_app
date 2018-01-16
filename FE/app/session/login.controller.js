angular
    .module("app")
    .controller("LoginController", function ($scope, $state, $http, $cookies, $scope,
                                             $localStorage,
                                             $sessionStorage) {

        var self = this;
        var data = {};
        self.login = login;
        self.goToSignup = goToSignup;

        init();


        function init() {

            if ($localStorage.username && $localStorage.password) {
                self.username = $localStorage.username;
                self.password = $localStorage.password;
                login()
            }

        }

        function login() {

            var data = {username: self.username, password: self.password};
            $http({
                method: 'POST',
                data: data,
                url: 'http://localhost:8000/login/'
            }).then(function successCallback(response) {

                var user = response.data;
                var username = data.username;
                var password = data.password;

                $localStorage.user = user;
                $localStorage.username = username;
                $localStorage.password = password;
                $state.go('home')

            }, function errorCallback(response) {
            });
        }

        function goToSignup() {

            $state.go('signup')

        }

    });