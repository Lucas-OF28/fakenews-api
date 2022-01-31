const express = require('express')
const router = express.Router()
const routes = {
    "saude": require('./saude'),
    "covid": require('./covid'),
    "auth": require('./auth')
}

router.use('/saude', routes.saude)
router.use('/covid', routes.covid)
router.use('/auth', routes.auth)

module.exports = router