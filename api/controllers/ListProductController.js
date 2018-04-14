/**
 * ListProductController
 *
 * @description :: Server-side logic for managing listproducts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
let util = require('util')
let base = require('base62')
module.exports = {
    listProduct: (req, res) => {
        // base.setCharacterSet("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ");
        console.log(base.encode('12'));
        console.log(base.encode('2'));
        console.log(base.encode('3'));
        console.log(base.encode('4'));
        console.log(base.encode('999'));

        
        console.log(base.decode('2H'));
        if (req.query.sort == 'random' && !req.query.limit)
            return res.argumentError('params_err_limit');
        if (req.query.skip && !req.query.limit)
            return res.argumentError('params_err_limit');
        // if (req.query.filter)
        //     var filter = Object.keys(req.query.filter)[0];
        // if (filter == '0' && req.query.filter)
        //     return res.argumentError('params_err_filter');
        // if (req.query.sort != 'random' && !req.query.filter )
        //     return res.argumentError('params_err_filter');
        let category = new Object;
        if (req.query.categories) {
            category = {
                where: {
                    or:
                        [{
                            id: req.query.categories,
                        }, {
                            parent: req.query.categories,
                        }]
                }
            }
        } else {
            category['id'] = 0;
        }
        // console.log(req.query.sort)
        Category.find(category).then(result => {
            let option = {};
            let categoryID = result.map(item => item.id);
            if (result.length > 0)
                option['categoryID'] = categoryID
            ListProduct.count().then(total => {
                req.query.skip ? option["skip"] = req.query.skip : option["skip"] = 0;
                req.query.limit ? option["limit"] = req.query.limit : option["limit"] = 10;
                req.query.sort ? req.query.filter ? option['sort'] = req.query.filter + " " + req.query.sort : option = { limit: req.query.limit, skip: Math.floor((Math.random() * total)) } : option['sort'] = 'id desc';
                req.query.search ? option = { name: { like: util.format('%%%s%%', req.query.search) } } : null;
                if (!req.query.categories)
                    req.query.id ? option["id"] = req.query.id : null;
                try {
                    console.log(option)
                    ListProduct.find(option).then(result => {
                        return res.json({
                            err: 0,
                            data: result,
                            total: result.length,
                        })
                    }, err => {
                        res.paramsError()
                    })
                } catch (err) {
                    res.paramsError()
                }
            })
        });
    }
};

