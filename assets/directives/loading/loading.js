angular.module('store').directive('loading', [
    function () {
        return {
            restrict: 'AE',
            scope: {
            },
            replace: false,
            templateUrl: '/directives/loading/view.html',
            link: function (scope, element, attrs) {
            }
        }
    }
])