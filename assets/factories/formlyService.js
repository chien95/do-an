angular.module('store').factory('formlyService', [
    '$translate', '$q',
    function ($translate, $q) {
        var typeMapping = {
            'string': 'input',
            'long': 'input',
            'boolean': 'checkbox',
            'selection': 'selection'
        }

        return {
            convertForm: function (_form) {
                var defer = $q.defer()
                $translate('login').then(function (trans) {
                    trans = $translate.getTranslationTable(config.lang)
                    var form = {}
                    var result = []
                    form.name = trans[_form.name]
                    form.taskId = _form.taskId
                    form.fields = []
                    for (var i = 0; i < _form.fields.length; i++) {
                        var field = _form.fields[i]
                        var t = {
                            templateOptions: {}
                        }
                        t.type = typeMapping[field.type]
                        console.log(t.type, field)
                        t.key = field.id
                        t.templateOptions.label = trans[field.label]
                        if (field.properties) {
                            for (var pIndex in field.properties.values) {
                                var val = field.properties.values[pIndex]
                                if (val.id == config.BPMNModel) {
                                    t.BPMNModel = val.value
                                    continue
                                }
                                if (val.value == 'true') {
                                    val.value = true
                                } else {
                                    val.value = false
                                }
                                t.templateOptions[val.id] = val.value
                            }
                        }

                        form.fields.push(t)
                    }
                    defer.resolve(form)
                })

                return defer.promise
            }
        }
    }
])