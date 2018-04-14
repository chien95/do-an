/**
 * User
 *
 * @module      :: Model
 * @description :: This is the base user model
 * @docs        :: http://waterlock.ninja/documentation
 */
let moment = require('moment')
module.exports = {
  


    // getUserInfo: (userId) => {
    //     return new Promise((resolve, reject) => {
    //         User.find(userId).then(user => {
    //             if (user.length > 0) {
    //                 resolve(user[0])
    //             } else {
    //                 reject()
    //             }
    //         })
    //     })
    // },

    // signUp: (userName, password, name) => {
    //     return new Promise((resolve, reject) => {
    //         User.find({
    //             userName: userName
    //         }).then(exist => {
    //             if (exist.length == 0) {
    //                 utils.genHash(password).then(hash => {
    //                     User.create({
    //                         userName: userName,
    //                         password: hash,
    //                         name: name
    //                     }).then(result => {
    //                         resolve({
    //                             err: 0,
    //                             user: result
    //                         })
    //                     })
    //                 })

    //             } else {
    //                 reject({
    //                     err: 2,
    //                     msg: 'Tên đăng nhập đã tồn tại.'
    //                 })
    //             }
    //         })
    //     })
    // }
};
