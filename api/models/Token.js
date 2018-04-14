/**
 * Token.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
let moment = require('moment')
module.exports = {

    // attributes: {
    //     user: {
    //         model: 'user'
    //     },
    //     token: {
    //         type: 'string',
    //         size: 100
    //     },
    //     expiredAt: {
    //         type: 'datetime'
    //     }
    // },
    // createToken: (userId) => {
    //     return new Promise((resolve, reject) => {
    //         let expire = moment().add(sails.config.TOKEN_TIME, 'minutes').toDate()
    //         let token = utilService.genToken()
    //         Token.create({
    //             user: userId,
    //             token: token,
    //             expiredAt: expire
    //         }).then(result => {
    //             resolve(token)
    //         })
    //     })
    // },
};

