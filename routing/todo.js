const express = require('express')
const router = express.Router();
const todoController = require('../controller/todo')
const authentification = require('../middlewares/authentification')

router.get('/list', authentification, todoController.list)

router.get('/insert', authentification, todoController.formTambah)
router.post('/insert', authentification, todoController.tambahTodo)
router.get('/edit/:id', authentification, todoController.formEdit)
router.post('/edit/:id', authentification, todoController.edit)
router.get('/delete/:id', authentification, todoController.delete)

module.exports = router