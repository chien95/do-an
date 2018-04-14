/**
 * CategoryController
 *
 * @description :: Server-side logic for managing categories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    listCategory: (req, res) => {
        let option = {};
        let slug = req.query.slug
        slug ? option['slug'] = slug : option;
        Category.find(option).then(result => {
            if(result.length == 1){
                result = result[0]
            }
            return res.json({
                err: 0,
                data: result
            })
           
        })
    },
};

