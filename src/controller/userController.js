
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const db = require ("../../database/models")


module.exports = {
    login: (req,res) =>{
        res.render("user/login")
    },
    listado: (req, res) => {
       db.Usuario.findAll()
       .then(users => {
         res.render('user/listado', { users: users })
       })
       .catch(err => console.log(err));
    },
    register: (req, res) => {
        res.render('user/register');
    },
    store: (req, res) => {
     
            const {nombre, apellido,email,contraseña} =  req.body
            db.Usuario.create({
                nombre,
                apellido, 
                email,
                contraseña: bcrypt.hashSync(contraseña),
            })
                .then(users => {
                    let userId = users.id
                    res.redirect('/usuarios/' );
                })
       },
       
    destroy: (req, res) => {
      db.Usuario.destroy({
          where: {
              id: req.params.id
          }
      })
          .then(() => {
              res.redirect('/usuarios')
          })
      
  }
      
}