(function () {


    componentOptions = {
        controller: Controller,
        controllerAs: 'ctrl',
        templateUrl: 'app/components/postList/postList.html',
        bindings: {
            posts: "<",
            user: "<",
            loadMore: "<",
            nextPage: "<",
        }
    };

    angular.module('app')
        .component('postList', componentOptions);


    function Controller() {

        var self = this;

        self.$onInit = onInit;
        self.$onDestroy = onDestroy;
        self.$onChanges = onChanges;


        function onInit() {
            console.log(self)
        }

        function onDestroy() {

        }

        function onChanges() {
        }
    }

})();