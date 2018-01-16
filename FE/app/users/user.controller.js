angular
    .module("app")
    .controller("UserController", function ($scope, $state, $rest, lodash, $localStorage, $http, $stateParams) {

        var self = this;
        var id = $stateParams.id;
        self.user = $stateParams.user;
        self.posts = [];
        self.offset = 0;
        self.limit = 2;
        var myFollowing = $localStorage.user.followed;
        self.nextPage = 'http://localhost:8000/rest/users/' + id + '/posts/?limit=' + self.limit + '&offset=' + self.offset;


        self.getPosts = getPosts;
        self.goToHome = goToHome;
        self.Next = Next;
        self.follow = follow;
        self.unFollow = unFollow;

        init();

        function init() {


            getPosts();

            if (!self.user) {

                $http({
                    method: 'GET',
                    url: 'http://localhost:8000/rest/users/' + id
                }).then(function successCallback(response) {

                    debugger;
                    self.user = response.data;

                    if(self.user.followed){

                    }
                    if(self.user.followers){

                    }


                }, function errorCallback(response) {
                });
            }


            var index = lodash.indexOf(myFollowing, id);

            self.following = index !== -1;

        }


        function Next() {
            getPosts()
        }

        function goToHome() {

            $state.go("home")
        }


        function getPosts() {


            $http({
                method: 'GET',
                url: self.nextPage
            }).then(function successCallback(response) {

                self.posts = self.posts.concat(response.data.results);

                self.nextPage = response.data.next;
                self.previousPage = response.data.previous;

            }, function errorCallback(response) {
            });

        }


        function follow() {

            var user = angular.copy($localStorage.user);
            user.followed.push(id);


            $rest.put($rest.REST_URL + 'users/' + user.id + '/', user).then(
                function successCallback(response) {
                    self.following = true;

                }, function errorCallback(response) {
                });

        }


        function unFollow() {

            var user = angular.copy($localStorage.user);

            user.followed = lodash.remove(user.followed, id);


            $rest.put($rest.REST_URL + 'users/' + user.id + '/', user).then(
                function successCallback(response) {
                    self.following = false;

                }, function errorCallback(response) {
                });

        }

    });
