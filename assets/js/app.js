angular.module('store', ['ui.bootstrap', 'ui.router', 'pascalprecht.translate', 'ngSanitize', 'formly', 'ngMessages'])
    .config(['$stateProvider', '$urlRouterProvider', '$translateProvider', '$locationProvider',
        function ($stateProvider, $urlRouterProvider, $translateProvider, $locationProvider) {
            $translateProvider.useUrlLoader(config.host + 'api/getLanguage?locale=' + config.lang);
            console.log(config.host + 'api/getLanguage?locale=' + config.lang)
            $translateProvider.useSanitizeValueStrategy('sanitize');
            $translateProvider.preferredLanguage('vi');
            // $locationProvider.html5Mode({
            //     enabled: true,
            //     requireBase: false,
            //   });
            $stateProvider.state('home', {
                url: '/',
                abstract: true,
                templateUrl: '/pages/home/view.html',
                controller: 'homeCtrl as vm'
            }).state('root', {
                url: '/root',
                // abstract: true,
                templateUrl: '/pages/root/view.html',
                controller: 'rootCtrl as root'
            }).state('home.dashboard', {
                url: 'home',
                templateUrl: '/pages/dashboard/view.html',
                controller: 'dashboardCtrl as vm'
            }).state('home.product', {
                url: ':item/:code',
                params : {
                    id :  null,
                },
                templateUrl: '/pages/product/view.html',
                controller: 'productCtrl as vm'
            }).state('home.listproduct', {
                url: ':code',
               
                templateUrl: '/pages/listproduct/view.html',
                controller: 'listproductCtrl as vm'
            }).state('home.introduce', {
                url: 'gioi-thieu',
                templateUrl: '/pages/introduce/view.html',
                controller: 'introduceCtrl as vm'
            }).state('home.support', {
                url: 'lien-he',
                templateUrl: '/pages/support/view.html',
                controller: 'supportCtrl as vm'
            }).state('home.cart', {
                url: 'cart',
                templateUrl: '/pages/cart/view.html',
                controller: 'cartCtrl as vm'
            }).state('checkout', {
                url: '/checkout/cart',
                templateUrl: '/pages/checkout/view.html',
                controller: 'checkoutCtrl as vm'
            })
            $urlRouterProvider.otherwise('/home')
        }]).run([
            'formlyValidationMessages', 'formlyConfig', '$translate',
            function (formlyValidationMessages, formlyConfig, $translate) {
                $translate('this_field_is_required').then(function (trans) {
                    console.log(trans)
                    formlyConfig.extras.errorExistsAndShouldBeVisibleExpression = 'fc.$touched || form.$submitted';
                    formlyValidationMessages.addStringMessage('required', 'required');
                })
            }
        ])
        