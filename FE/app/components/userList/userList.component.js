(function () {


    componentOptions = {
        controller: Controller,
        controllerAs: 'ctrl',
        templateUrl: 'app/components/userList/userList.html',
        bindings: {
            users: "<",
            searchValue: "<",
            toDetail: "<"
        }
    };

    angular.module('app')
        .component('userList', componentOptions);


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
            console.log(self)
        }
    }

})();