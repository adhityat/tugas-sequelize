const router = require('express').Router()
const controller = require('../controller/controller')

router.post('/insertuser', controller.tambahUser)
router.post('/inserttodo', controller.tambahTodo)

module.exports = router