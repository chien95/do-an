angular.module('store').factory('request',
    [
        '$http', '$q', '$timeout',
        function ($http, $q, $timeout) {
            var methods = {
                get: get,
                post: post
            };

            function post(url, data, header) {
                var _defer = $q.defer();
                console.log(url, data, header);
                var req = {
                    method: 'POST',
                    url: url,
                    headers: {
                        Authorization: header
                    },
                    data: data,
                    timeout: 30000
                };
                // if (header != null) {
                //     req.headers.Authorization = header;
                // }
                $http(req).then(function (data) {
                    console.log(data.data);
                    _defer.resolve(data.data);
                }, function (err) {
                    console.log(JSON.stringify(err));
                    _defer.resolve({
                        error: 1,
                        msg: "Lỗi kết nối"
                    });
                });
                return _defer.promise;
            }

            function get(url, header) {
                if (config.dev) {
                    console.log(url);
                }

                var defer = $q.defer();
                var res = {
                    url: url,
                    method: 'GET',
                    headers: {
                        Authorization: header
                    },
                    timeout: 20000
                }
                $http(res).then(function (data) {
                    defer.resolve(data.data);
                }, function (err) {
                    defer.resolve({
                        error: 404,
                        msg: "Vui lòng kiểm tra lại kết nối mạng"
                    });
                });
                return defer.promise;
            }
            return methods;
        }
    ]
);