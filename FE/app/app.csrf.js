// Possiamo creare un modulo angular apposta per questo CSRF handler
angular
    .module('app')
    .constant('CSRF_COOKIE_NAME', 'csrftoken')
    .constant('CSRF_HEADER_NAME', 'x-csrftoken')
    .config(function ($httpProvider) {

        $httpProvider.defaults.withCredentials = true;
        $httpProvider.interceptors.push('csrfHttpInterceptor');
    })
    .run(function ($http, $cookies, CSRF_COOKIE_NAME) {

        $http.get('http://localhost:8000/get-csrf-token/')

    })
    .factory('csrfHttpInterceptor', function ($cookies, CSRF_HEADER_NAME, CSRF_COOKIE_NAME) {

        return {
            request: requestInterceptor,
            response: responseInterceptor
        };

        function requestInterceptor(config) {



            if (config.method === 'GET') return config;
            config.headers[CSRF_HEADER_NAME] = $cookies.get(CSRF_COOKIE_NAME);
            return config;



        }
        function responseInterceptor(response) {

            if (response.config.url.indexOf('get-csrf-token') === -1) return response;
            $cookies.put(CSRF_COOKIE_NAME, response.data.token);
            return response;
        }
    });