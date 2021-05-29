const db = require('../../database/models')

const STATUS_SUCCESS = 'success'
const STATUS_ERROR = 'error'
const STATUS_NOT_FOUND = 'not_found'

module.exports = {
    getUsers(req, res) {
        db.Usuario.findAll()
            .then(users => {
                res
                    .status(200)
                    .json({ 
                        meta: {
                            totalUsers: users.length
                        },
                        data: users,
                        status: STATUS_SUCCESS
                    })
            })
            .catch(error => {
                res
                    .status(500)
                    .json({
                        status: STATUS_ERROR,
                        error,
                    })
            })
        
    },
//    getProduct(req, res) {
//        const { id } = req.params
//
//        db.Product.findByPk(id, {
//            include: 'category'
//        })
//            .then(product => {
//                
//                if (!product) {
//                    return res.status(404)
//                    .json({
//                        status: STATUS_NOT_FOUND
//                    })
//                    
//                }
//
//                res.status(200)
//                    .json({
//                        data: product,
//                        status: STATUS_SUCCESS
//                    })
//            })
//            .catch(error => {
//                res
//                    .status(500)
//                    .json({
//                        status: STATUS_ERROR,
//                        error
//                    })
//            })
//    },
    createUser(req, res) {
        const body = req.body
        
        db.Usuario.create(body)
            .then(user => {
                res.status(201)
                    .json({
                        data: user,
                        status: STATUS_SUCCESS
                    })
            })
            .catch(error => {
                res
                    .status(500)
                    .json({
                        status: STATUS_ERROR,
                        error
                    })
            })
    },
//    updateProduct(req, res) {
//        const body = req.body
//
//        db.Product.update(body, {
//            where: {
//                id: req.params.id
//            }
//        })
//            .then(() => {
//
//                db.Product.findByPk(req.params.id)
//                    .then(product => {
//                        res.status(201)
//                            .json({
//                                data: product,
//                                status: STATUS_SUCCESS
//                            })
//                })
//
//            })  
//    },
    destroyUser(req, res) {
        db.Usuario.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(() => {
                res.status(200)
                    .json({
                        status: STATUS_SUCCESS
                    })
            })
            .catch(error => {
                res
                    .status(500)
                    .json({
                        status: STATUS_ERROR,
                        error
                    })
            })
    }
}