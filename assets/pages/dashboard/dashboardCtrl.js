angular.module('store').controller('dashboardCtrl', [
    'api', 'dataService', '$state', 'utils','$location',
    function (api, dataService, $state, utils, $location) {
        var vm = this
        console.log($location.search());
        var slide = new Swiper('.bannerSlider', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        console.log(slide.width)
        new Swiper('.topProducts', {
            slidesPerView: 6,
            spaceBetween: 15,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        new Swiper('.productsBlock', {
            slidesPerView: 4,
            spaceBetween: 15,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        new Swiper('.owl-stage-outer', {
            slidesPerView: 3,
            spaceBetween: 15,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        vm.product = function () {
            utils.productBox()
            console.log(1)
        }
        getCategory = function () {
            api.getCategory().then(result => {
                vm.data = result.data;
                console.log(result)
            })
        }
        getCategory();
        return vm;
    }
])