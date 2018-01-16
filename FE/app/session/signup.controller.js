angular
    .module("app")
    .controller("SignupController", function ($scope, moment, $state, $http, $cookies) {

        var self = this;
        self.signup = signup;

        function signup() {


            var user = {
                username: self.username,
                password: self.password,
                first_name: self.first_name,
                last_name: self.last_name,
                email: self.email,
                gender: self.gender,
                profession: self.profession,
                country: self.country,
                city: self.city,
                phone_number: self.phone_number,
                birth_date: moment(self.birth_date).format('YYYY-MM-DD')
            };


            $http({
                method: 'POST',
                data: {user:user},
                url: 'http://localhost:8000/signup/'
            }).then(function successCallback(response) {

                $state.go('login')

            }, function errorCallback(response) {
            });
        }

    });