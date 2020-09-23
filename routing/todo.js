const express = require('express')
const router = express.Router();
const todoController = require('../controller/todo')

router.get('/list', todoController.list)
router.post('/inserttodo', todoController.tambahTodo)
router.post('/edit/:id', todoController.edit)
router.get('/delete/:id', todoController.delete)

module.exports = router