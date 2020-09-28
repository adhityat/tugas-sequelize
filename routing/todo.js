const express = require('express')
const router = express.Router();
const todoController = require('../controller/todo')
const authentification = require('../middlewares/authentification')
const {authorization} = require('../middlewares/authorization')

router.get('/list', authentification, todoController.list)
router.post('/list', authentification, todoController.tambahTodo)

router.get('/insert', authentification, todoController.formTambah)
router.get('/edit/:id', authentification,authorization, todoController.formEdit)
router.post('/edit/:id', authentification, todoController.edit)
router.get('/delete/:id', authentification, authorization, todoController.delete)

module.exports = router