const express = require('express')
const router = express.Router();
const userController = require('../controller/User')

router.post('/insertuser', userController.tambahUser)


module.exports = router