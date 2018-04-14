module.exports = (req, res, next) => {
    let token = req.headers.authorization
    if (token != null) {
        let accessToken = token.split(' ')
        Token.find({
            token: accessToken
        }).populate('user').then(token => {
            if (token.length > 0) {
                req.user = token[0].user
                next()
            } else {
                return res.json({
                    err: 404,
                    msg: req.__('unauthenticate')
                })
            }
        })
    }
}