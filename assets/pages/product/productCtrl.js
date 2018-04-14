angular.module('store').controller('productCtrl', [
    'api', 'dataService', '$state', 'utils', '$stateParams',"$rootScope",
    function (api, dataService, $state, utils, $stateParams, $rootScope) {
        var vm = this
        console.log($stateParams)
        console.log($rootScope)
        var url = '?slug=' + $stateParams.item;
        api.getCategory(url).then(result => {
            console.log(result)
            result.data ? vm.title = result.data.name : null;
            // setTimeout(getPosts("?categories=" + result.data.id), 1000);

        })
        new Swiper('.productsBlock', {
            slidesPerView: 5,
            spaceBetween: 15,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        return vm
    }
])