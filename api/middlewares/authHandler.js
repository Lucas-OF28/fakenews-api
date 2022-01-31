const jwt = require('jsonwebtoken')

module.exports = function(req, res, next){
    const header = req.headers.authorization

    if(!header){
        res.statusCode = 400
        throw new Error("Você precisa de um token")
    }

    const token = header.split('Bearer ')[1]
    console.log(token)
    if(!token){
        res.statusCode = 400
        throw new Error("O token não está no formato correto")
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET)
    req.user = payload.sub

    next()
}