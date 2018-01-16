(function () {


    componentOptions = {
        controller: Controller,
        controllerAs: 'ctrl',
        templateUrl: 'app/components/userListItem/userListItem.html',
        bindings: {
            user: "<"
        }
    };

    angular.module('app')
        .component('userListItem', componentOptions);


    function Controller() {

        var self = this;

        self.$onInit = onInit;
        self.$onDestroy = onDestroy;
        self.$onChanges = onChanges;


        function onInit() {
            console.log(self);
        }

        function onDestroy() {

        }

        function onChanges() {
        }
    }

})();