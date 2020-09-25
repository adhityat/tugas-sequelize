const express = require('express')
const router = express.Router();
const userController = require('../controller/User')


router.get('/register', userController.formTambah)
router.post('/register', userController.tambahUser)

router.get('/login', userController.formLogin)
router.post('/login', userController.login)

module.exports = router