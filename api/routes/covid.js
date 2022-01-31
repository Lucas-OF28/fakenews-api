const express = require('express')
const router = express.Router()
const controller = require('../controllers/covid')

router.get('/mortes', controller.totalMortes)
router.get('/confirmados', controller.totalConfirmados)

module.exports = router