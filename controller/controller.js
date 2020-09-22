const { response } = require('express')
const ModelTodo = require('../model/modelTodo')
const ModelUser = require('../model/modelUser')


class Controller {
    static tambahUser(req, res){
        ModelUser.create(req.body).then(response => {
            res.json(response)
        }).catch(err => {
            console.log(err)
        })
    }

    static tambahTodo(req, res){
        ModelTodo.create(req.body).then(response => {
            res.json(response)
        }).catch(err => {
            console.log(err)
        })
    }
}

module.exports = Controller