(function () {
    "use strict";

    angular.module('app')

        .factory('$rest', function ($http) {



            var HOST = 'localhost';
            var PORT = '8000';
            var BASE_URL = "http://" + HOST + ':' + PORT + '/';
            var REST_URL = BASE_URL + 'rest/';
            var GET_CSRF_TOKEN = BASE_URL + 'get-csrf-token/';



            return {
                get: _get,
                post: _post,
                delete: _delete,
                put: _put,
                patch: _patch,
                getCsrfToken: _getCsrfToken,
                HOST: HOST,
                PORT: PORT,
                BASE_URL: BASE_URL,
                REST_URL: REST_URL,
                GET_CSRF_TOKEN:GET_CSRF_TOKEN
            };



            function _get(url, config) {

                return $http.get(url, config)

            }

            function _post(url, data, config) {

                return _getCsrfToken().then(

                    function (url, data, config) {
                       return $http.post(url, data, config)
                    }

                )

            }

            function _delete(url, config) {

                return $http.post(url, config)

            }

            function _put(url, data, config) {

                return _getCsrfToken().then(

                    function () {
                        return $http.put(url, data, config)
                    },
                    function () {
                        debugger
                    }

                )

            }

            function _patch(url, data, config) {


                return _getCsrfToken().then(

                    function () {
                        return $http.patch(url, data, config)
                    },
                    function () {
                        debugger
                    }

                )

            }



            function _getCsrfToken() {

               return $http.get(GET_CSRF_TOKEN)

            }




        });


})();