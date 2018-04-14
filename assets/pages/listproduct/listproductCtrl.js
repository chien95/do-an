angular.module('store').controller('listproductCtrl', [
    'api', 'dataService', '$state', 'utils', '$stateParams','$location',
    function (api, dataService, $state, utils, $stateParams,$location) {
        var vm = this
        getPosts = function (url) {
            api.getPosts(url).then(result => {
                console.log(result.data)
                vm.data = result.data;
                vm.total = result.data.length
            })
        }
        console.log($location.search());
        console.log($stateParams)
        vm.active = 'view_grid';
        vm.slug = $stateParams.code
        switch ($stateParams.code) {
            case 'danh-muc-san-pham':
                vm.title = 'Tất cả sản phẩm';
                setTimeout(getPosts(null), 1000);
                break;
            case 'khuyen-mai-hot':
                vm.title = 'Khuyến mãi';
                setTimeout(getPosts('?sort=desc&filter=sale'), 1000);
                break;
            case 'san-pham-moi':
                vm.title = 'Sản phẩm mới';
                setTimeout(getPosts('?sort=desc&filter=createdAt'), 1000);
                break;
            case 'gioi-thieu':
                $state.go('home.introduce');
                break;
            case 'lien-he':
                $state.go('home.support');
                break;
            default:
                var url = '?slug=' + $stateParams.code;
                api.getCategory(url).then(result => {
                    result.data ? vm.title = result.data.name : null;
                    setTimeout(getPosts("?categories=" + result.data.id), 1000);

                })
        }
        vm.viewAS = function (event) {
            vm.active = event;
            switch (event) {
                case 'view_grid':
                    $(".product-list").removeClass('view_list');
                    $(".product-list").addClass(event);
                    $(".elementFixHeight").css("height", "258px")
                    break;
                case 'view_list':
                    $(".product-list").removeClass('view_grid');
                    $(".product-list").addClass(event);
                    $(".elementFixHeight").css("height", "170px")
                    break;
            }
        }
        vm.product =  (item) =>{
            utils.productBox(item)
            console.log(item)
        }
        vm.details = function(item){
            console.log($state)
            // $state.href("home.support", { person: "bob" })
            // $state.href("home.support");
            $state.go("home.product",{ id : 100})
        }
        return vm
    }
])