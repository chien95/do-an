angular.module('store').directive('menu', [
    '$translate', '$state', 'modelChooser',
    function ($translate, $state, modelChooser) {
        return {
            restrict: 'E',
            scope: {
            },
            replace: true,
            templateUrl: '/directives/menu/view.html',
            link: function (scope, element, attrs) {
                $translate('login').then(function (trans) {
                    trans = $translate.getTranslationTable(config.lang)
                    scope.menus = [
                        {
                            title: trans.credit_file,
                            icon: 'ic_mn_1.png',
                            items: [
                                {
                                    title: trans.create_document,
                                    onClick: function () {
                                        $state.go('root.userTask', { data: 0 })
                                    }
                                },
                                {
                                    title: trans.documents_to_verify,
                                    onClick: function () {
                                        $state.go('root.listDocuments', { taskId: 'task_verifyDocument', name: trans.documents_to_verify })
                                    }
                                },
                                {
                                    title: trans.documents_to_add_info,
                                    onClick: function () {
                                        $state.go('root.listDocuments', { taskId: 'task_addDocumentInfo', name: trans.documents_to_add_info })
                                    }
                                },
                            ],

                        },
                        {
                            title: trans.collateral,
                            icon: 'ic_mn_2.png',
                            active: false,
                            items: [],
                            onClick: function () {
                                modelChooser.showChooser('customer')
                                console.log('on click')
                            }
                        },
                        {
                            title: trans.customer_info,
                            icon: 'ic_mn_3.png',
                            items: [],
                            onClick: function () {
                                $state.go('root.listCustomers')
                            }
                        },
                        {
                            title: trans.expertise_schedule,
                            icon: 'ic_mn_4.png',
                            active: false, items: []
                        },
                        {
                            title: trans.staff_manager,
                            icon: 'ic_mn_5.png',
                            active: false, items: []
                        },
                        {
                            title: trans.report,
                            icon: 'ic_mn_6.png',
                            active: false, items: []
                        }
                    ]
                    scope.onGroupClick = function (group) {
                        if (group.onClick) {
                            group.onClick()
                        }
                        if (group.items.length > 0) {
                            group.active = !group.active
                        }


                    }
                    scope.onItemClick = function (item) {
                        for (var i = 0; i < scope.menus.length; i++) {
                            for (var j = 0; j < scope.menus[i].items.length; j++) {
                                if (scope.menus[i].items[j] == item) {
                                    item.active = !item.active
                                } else {
                                    scope.menus[i].items[j].active = false
                                }
                            }
                        }
                        if (item.onClick) {
                            item.onClick()
                        }
                    }
                })
            }
        }
    }
])