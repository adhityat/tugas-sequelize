const ModelTodo = require('../model/modelTodo')
const ModelUser = require('../model/modelUser')
const { verifyToken } = require('../helper/jwt')

class Todo {
    static async list(req, res){

       let data = await ModelTodo.findAll({ 
        include : ModelUser
        })
        // console.log(data)
        res.render('todo/list', {data})
    }
    static formTambah(req, res){
        res.render('todo/insert');
    }

    static tambahTodo(req, res){
        const decode = verifyToken(req.session.token)
        req.body.UserId = decode.id
        ModelTodo.create(req.body).then(response => {
            res.redirect('/todo/list')
        }).catch(err => {
            console.log(err)
        })
    }

    static async formEdit(req, res){
        let data = await ModelTodo.findAll({
             where :   {
                        id : req.params.id
                        }
            })
            // console.log(data)
        res.render('todo/edit', {data});
    }

    static edit(req, res){
        ModelTodo.update(req.body, { where: { id: req.params.id } }).then((response)=>{
            res.redirect('/todo/list')
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