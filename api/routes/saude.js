const express = require('express')
const router = express.Router()
const controller = require('../controllers/saude')
const auth = require('../middlewares/authHandler')

router.get('/', controller.getAll)
router.get('/:id', controller.getOne)
router.post('/', auth, controller.save)
router.put('/:id', auth, controller.update)
router.delete('/:id', auth, controller.delete)

module.exports = router