angular
    .module('app')
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('blue', {
                'default': '500' // by default use shade 400 from the pink palette for primary intentions
            })
    });