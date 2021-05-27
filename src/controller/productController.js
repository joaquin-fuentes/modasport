
//const fs = require('fs');
//const path = require('path');
//const { validationResult } = require('express-validator');
//const bcrypt = require('bcryptjs');
//const db = require ("../../database/models")

module.exports = {
    listado: (req, res) => {
    //    db.User.findAll()
      //      .then(users => {
                res.render('products/listado')//, { users: users })
        //    })
          //  .catch(err => console.log(err));
    },
    create: (req, res) => {
        res.render('products/create');
    },
 //   store: (req, res) => {
 //       // Valido los campos
 //       let errors = validationResult(req);
//
 //       // Me fijo si no hay errores
 //       if (errors.isEmpty()) {
 //           // Genero el nuevo usuario
 //           const { file } =  req
 //           const { nombre, apellido,email,edad,cel,contraseña} =  req.body
 //           db.User.create({
 //               nombre,
 //               apellido, 
 //               email,
 //               edad,
 //               cel,
 //               contraseña: bcrypt.hashSync(contraseña),
 //               image: file.filename,
 //           })
 //               .then(users => {
 //                   let userId = users.id
 //                   res.redirect('/users/' + userId );
 //               })
 //       // Si hay errores
 //       } else {
 //           // Renderizo el formulario nuevamente con los errors y los datos completados
 //           return res.render('users/create', { errors: errors.mapped(), old: req.body });
 //       }
 //   },
 //   show: (req, res) => {
 //       db.User.findByPk (req.params.id )
 //           .then( user  =>  res.render('users/detail', { user }) )
//
 //       
 //   },
    edit: (req, res) => {
 //      db.User.findOne({
 //          where: {id: req.params.id}
 //      })
 //         .then(user =>{
           res.render('products/edit')//, { user };
 //    })
    }
 //     
 //   },
 //   update: (req, res) => {
 //       const { file } =  req
 //       const { nombre, apellido,email,edad,cel,contraseña} =  req.body
 //       db.User.findOne({ 
 //           where: { id: req.params.id },
 //       })
 //           .then((user) => {
 //               user.update({
 //                   nombre,
 //                   apellido,
 //                   email,
 //                   edad,
 //                   cel,
 //                   contraseña,
 //                   image: file? file.filename : user.image,
 //               })
 //                   .then((users) => {
 //                       let userId = users.id
 //                       res.redirect('/users/' + userId );
 //                   })
 //           })
//
 //      
//
 //   },
 //   destroy: (req, res) => {
 //       db.User.destroy({
 //           where: {
 //               id: req.params.id
 //           }
 //       })
 //           .then(() => {
 //               res.redirect('/users')
 //           })
 //       
 //   }
}