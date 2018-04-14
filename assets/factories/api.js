angular.module('store').factory('api', [
    'request', 'dataService',
    function (request, dataService) {
        var services = {
            // getLocale: function (_locale) {
            //     var url = config.host + 'locales/vn.json'
            //     return request.get(url)
            // },
            getCategory: function (_locale) {
                var url  =  _locale ? config.host + 'api/tvc/v1/categories'+_locale :  config.host + 'api/tvc/v1/categories';
                return request.get(url)
            },
            getPosts : function (_locale) {
                var url  =  _locale ? config.host + 'api/tvc/v1/posts'+_locale :  config.host + 'api/tvc/v1/posts';
                return request.get(url)
            },

            
        }
        return services
    }
])