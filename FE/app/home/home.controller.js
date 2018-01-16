angular
    .module("app")
    .controller("HomeController", function ($scope, $state, $http, $cookies, $scope,
                                            $localStorage,
                                            $sessionStorage) {


        var self = this;
        self.goToDetail = goToDetail;
        self.newPost = newPost;
        self.Next = Next;
        self.getFollowData = getFollowData;
        self.goToSearch = goToSearch;


        self.posts = [];
        self.offset = 0;
        self.limit = 5;


        init();

        function init() {


            self.user = $localStorage.user;
            self.nextPage = 'http://localhost:8000/rest/users/' + self.user.id + '/posts/?limit=' + self.limit +'&offset='+ self.offset;
            getFollowData();
            getPosts();

        }


        function goToDetail(user) {
            $state.go('user', {id: user.id})

        }

        function newPost() {

            if(_.isNil(self.post.title)){
            self.post.title = self.user.username;
            }
            var post = self.post;

            debugger

            $http({
                method: 'POST',
                data: post,
                url: 'http://localhost:8000/rest/posts/'
            }).then(function successCallback(response) {
                self.post = {};
                self.posts.unshift(response.data)

            }, function errorCallback(response) {
            });

        }


        function goToSearch() {

            $state.go('users')

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


        function Next() {
            getPosts()
        }


        function getFollowData() {

            $http({
                method: 'GET',
                url: 'http://localhost:8000/rest/users/'
            }).then(function successCallback(response) {

                self.tfollowers = response.data[0].followers.length;
                self.tfollowed = response.data[0].followed.length;

            }, function errorCallback(response) {
            });

        }



    });