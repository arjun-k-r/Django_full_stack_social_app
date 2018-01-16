angular
    .module("app")
    .controller("UsersController", function ($scope, $state, $http) {

        var self = this;
        self.goToDetail = goToDetail;
        self.goToHome = goToHome;

        $http({
            method: 'GET',
            url: 'http://localhost:8000/rest/users/'
        }).then(function successCallback(response) {
            self.users = response.data;
        }, function errorCallback(response) {
        });

        function goToDetail(user) {
            $state.go('user', {id: user.id, user: user})

        }

        function goToHome() {
            $state.go('home')
        }

    });