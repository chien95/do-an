angular.module('store').controller('homeCtrl', [
    'api', 'dataService', '$state',
    function (api, dataService, $state) {
        var vm = this;
        getCategory = function () {
            api.getCategory().then(result => {
                vm.data = result.data;
                console.log( vm.data)
            })
        }
        getCategory();
        return vm
    }
])