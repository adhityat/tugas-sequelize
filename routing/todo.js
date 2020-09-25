const express = require('express')
const router = express.Router();
const todoController = require('../controller/todo')

router.get('/list', todoController.list)

router.get('/insert', todoController.formTambah)
router.post('/insert', todoController.tambahTodo)
router.get('/edit/:id', todoController.formEdit)
router.post('/edit/:id', todoController.edit)
router.get('/delete/:id', todoController.delete)

module.exports = router