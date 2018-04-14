angular.module('store').factory('dataService', [
    '$q',
    function ($q) {
        var data = null
        var dataDefer = null
        return {
            get: function (key) {
                loadData()
                return data[key]

            },
            set: function (key, val) {
                loadData()
                data[key] = val
                saveData()
            },
            getToken: function () {
                loadData()
                if (data.token == null) {
                    return ''
                }
                console.log('data', data)
                return 'Bearer ' + data['token']
            },
            isAuthenticated: function () {
                loadData()
                if (data.token != null) {
                    return true
                }
                return false
            }
        }
        function loadData() {
            if (data != null) {
                return
            }
            var raw = localStorage.getItem('data')
            if (raw != null) {
                data = JSON.parse(raw)
            } else {
                data = {}
            }
        }
        function saveData() {
            localStorage.setItem('data', JSON.stringify(data))
        }
    }
])