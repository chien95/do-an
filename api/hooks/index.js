module.exports = (sails) => {
    return {
        initialize: (cb) => {
            utilService.createFolderIfNotExist(sails.config.DOCUMENT_FOLDER)
            sails.on('hook:orm:loaded', function () {
                if (sails.config.INITIALIZE) {
                    utilService.genHash('1').then(hash => {
                        Auth.create({
                            password: hash
                        }).then(auth => {
                            User.create({
                                userName: 'admin',
                                auth: auth.id,
                                name: 'tung'
                            }).then(result => {
                                console.log('init ok')
                            })
                        })
                    })

                }
                

            });

            cb()
        },
        routes: {
            before: {
                '*': (req, res, next) => {
                    if (req.session.languagePreference) {
                        req.setLocale(req.session.languagePreference);
                    } else {
                        req.setLocale('vi')
                    }
                    //force language
                    res.paramsUrl = () =>{
                        res.json({
                            err: 1,
                            msg: req.__('paramsUrl')
                        })
                    }  
                    res.argumentError = (msg) => {
                        res.json({
                            err: 2,
                            msg: req.__(msg)
                        })
                    }      
                    res.paramsError = () => {
                        res.json({
                            err: 1,
                            msg: req.__('paramsError')
                        })
                    }
                    res.unauthenticate = () => {
                        res.json({
                            err: 404,
                            msg: req.__('unauthenticate')
                        })
                    }
                    return next()
                }
            }
        }
    }
}