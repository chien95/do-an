/**
 * ApiController
 *
 * @description :: Server-side logic for managing apis
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
let util = require('util')
let path = require('path')



let moment = require('moment')
let uuid = require('node-uuid')
let fs = require('fs')
module.exports = {
    getLanguage: (req, res) => {
        let locale = req.query.locale
        if (!locale) {
            return res.paramsError()
        }
        let fileName = path.join(sails.config.LOCALES_FOLDER, locale + '.json')
        fs.readFile(fileName, 'utf8', (err, raw) => {
            if (err)
                return res.json({
                    err: 500,
                    msg: req.__('cannot_find_file', locale + '.json')
                })
            try {
                let data = JSON.parse(raw)
                return res.json(data)
            } catch (err) {
                return res.json({
                    err: 3,
                    msg: req.__('err_parse_json'),
                    err: err
                })
            }
        })
    },
    
};

