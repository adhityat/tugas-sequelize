const ModelTodo = require('../model/modelTodo')
const ModelUser = require('../model/modelUser')

class Todo {
    static async list(req, res){

       let data = await ModelTodo.findAll({ 
        include : ModelUser
        })
        // res.render('todo/list', {data})
        res.send('todo controller')
    }

    static tambahTodo(req, res){
        ModelTodo.create(req.body).then(response => {
            res.json(response)
        }).catch(err => {
            console.log(err)
        })
    }

    static edit(req, res){
        ModelTodo.update(req.body, { where: { id: req.params.id } }).then((response)=>{
            res.json(response)
        }).catch(err=>{
            res.json(err);
        })
        
    }

    static async delete(req, res){
        let data = await ModelTodo.destroy({
             where :   {
                        id : req.params.id
                        }
            })
        res.redirect('/todo/list')
    }
}

module.exports = Todo