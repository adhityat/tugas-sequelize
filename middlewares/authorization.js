const { verifyToken } = require('../helper/jwt')
const  User  = require('../model/modelUser')
const todo = require('../model/modelTodo')


const authorization = (req, res, next) => {
  const decode = verifyToken(req.session.token);
  const { id } = req.params
  // console.log(id,'<<<paramsss')
  todo.findAll({
      where:{
          id:id,
          UserId : decode.id
      }
  })
    .then( data => {
        // console.log(data)
        if (data.length > 0) {
          next()
      } else {
          next("Maaf ini bukan id anda");
      }
    })
    .catch(err => {
      next(err)
    })
}

module.exports =  { authorization }