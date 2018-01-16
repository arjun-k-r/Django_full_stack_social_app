(function () {


    componentOptions = {
        controller: Controller,
        controllerAs: 'ctrl',
        templateUrl: 'app/components/post/post.html',
        bindings: {
            post: "<",
            user: "<"
        }
    };

    angular.module('app')
        .component('post', componentOptions);


    function Controller() {

        var self = this;

        self.$onInit = onInit;
        self.$onDestroy = onDestroy;
        self.$onChanges = onChanges;


        function onInit() {
        }

        function onDestroy() {

        }

        function onChanges() {
        }
    }

})();