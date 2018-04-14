angular.module('store').factory('utils', [
        '$q','$uibModal',
        function($q,$uibModal) {
            return {
                alert: function (result) {
                    $uibModal.open({
                        animation: true,
                        ariaLabelledBy: 'modal-title',
                        ariaDescribedBy: 'modal-body',
                        templateUrl: 'pages/modal/alert.html',
                        controller: 'alertCtrl',
                        controllerAs: 'vm',
                        size: 'sm',
                        windowClass : "alert_modal",
                        backdrop: false,
                              
                    })     
                },
                confirm: function(result) {
                    var defer = $q.defer()
                    $uibModal.open({
                        animation: true,
                        ariaLabelledBy: 'modal-title',
                        ariaDescribedBy: 'modal-body',
                        templateUrl: 'pages/modal/confirmBox.html',
                        controller: 'modalsCtrl',
                        controllerAs: 'vm',
                        size: 'sm',
                        backdrop: 'static',
                        resolve: {
                            result: function() { return result }
                        }
                    }).result.then(function(result) {
                        console.log('result', result)
                        defer.resolve()
                    }, function(dismiss) {
                        defer.reject()
                        console.log('dimiss')
                    })
                    return defer.promise
                },
                productBox: function(result) {
                    var defer = $q.defer()
                    $uibModal.open({
                        animation: true,
                        ariaLabelledBy: 'modal-title',
                        ariaDescribedBy: 'modal-body',
                        templateUrl: 'pages/modal/product.html',
                        controller: 'modalsCtrl',
                        controllerAs: 'vm',
                        size: 'lg',
                        backdrop: 'static',
                        resolve: {
                            result : function() { return result }
                        }
                    }).result.then(function(result) {
                        console.log('result', result)
                        defer.resolve(result)
                    }, function(dismiss) {
                        defer.reject()
                        // console.log('dimiss')
                    })
                    return defer.promise
                }
            }
        }
        ])
    angular.module('store').controller('modalsCtrl', [
        '$uibModalInstance', 'result','api',
        function($uibModalInstance,result,api) {
            var vm = this
            vm.product = result;
            // vm.ok = function() {
            //     $uibModalInstance.close(input)
            // }
            vm.cancel = function() {
                $uibModalInstance.dismiss()
            }
            return vm
        }
    ])