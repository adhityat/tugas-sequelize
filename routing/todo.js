const express = require('express')
const router = express.Router();
const todoController = require('../controller/todo')

router.get('/list', todoController.list)
router.post('/inserttodo', todoController.tambahTodo)

module.exports = router