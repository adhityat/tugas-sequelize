const { verifyToken } = require('../helper/jwt')
const  User  = require('../model/modelUser')


const authorization = (req, res, next) => {
    const userId = req.user.id
    const { id } = req.params
    User.findOne(id, 'id')
      .then( data => {
        //   console.log(data)
        if(data[0].id == userId){
          next()
        } else {
          next({status: 400, msg: ' ini Bukan Akun Anda'})
        }
      })
      .catch(err => {
        next(err)
      })
  }

module.exports = authorization