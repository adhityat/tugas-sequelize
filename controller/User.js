const ModelUser = require('../model/modelUser')


class User {
    static tambahUser(req, res){
        ModelUser.create(req.body).then(response => {
            res.json(response)
        }).catch(err => {
            console.log(err)
        })
    }
}

module.exports = User