const ModelTodo = require('../model/modelTodo')
const ModelUser = require('../model/modelUser')

class Todo {
    static async list(req, res){

       let data = await ModelTodo.findAll({ 
        include : ModelUser
        })
        res.render('siswa/list', {data})
    }

}

module.exports = Todo