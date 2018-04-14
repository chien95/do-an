let uuid = require('node-uuid')
bcrypt = require('bcrypt-nodejs')
let randomstring = require("randomstring")
var fs = require('fs')
module.exports = {
    createFolderIfNotExist: (dir) => {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
    },
    genHash: (password) => {
        return new Promise((resolve, reject) => {
            bcrypt.hash(password, null, null, (err, hash) => {
                if (err) {
                    return reject()
                }
                return resolve(hash)
            })
        })
    },

    compareHash: (password, hash) => {
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, hash, (err, valid) => {
                if (valid) {
                    return resolve()
                }
                return reject()
            })
        })
    },

    genToken: () => {
        return uuid.v4()
    },
    isEmpty: (object) => {
        if (object == undefined || object == null || object == '') {
            return true
        }
        return false
    }
}