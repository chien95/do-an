angular.module('store').factory('modelChooser', [
    '$uibModal', '$q', '$translate',
    function ($uibModal, $q, $translate) {
        return {
            showChooser: function (model) {
                var defer = $q.defer()
                if (!model) {
                    console.error('please pass model name')
                    defer.reject()
                    return defer.promise
                }

                $translate('customer').then(function (name) {
                    trans = $translate.getTranslationTable(config.lang)
                    let modelInfo = {
                        'customer': {
                            name: trans[model],
                            model: 'customer',
                            fields: [
                                {
                                    key: 'fullName',
                                    label: trans.full_name,
                                    isSearch: true
                                }
                            ]
                        }
                    }

                    $uibModal.open({
                        animation: false,
                        ariaLabelledBy: 'modal-title',
                        ariaDescribedBy: 'modal-body',
                        templateUrl: '/pages/modelChooser/customerChooserView.html',
                        controller: model + 'ChooserCtrl',
                        controllerAs: 'vm',
                        size: 'lg',
                        backdrop: 'static',
                        resolve: {
                            info: function () {
                                return modelInfo[model]
                            }
                        }
                    }).result.then(function (r) {
                        defer.resolve(r)
                    })
                });

                return defer.promise
            }
        }

    }
])