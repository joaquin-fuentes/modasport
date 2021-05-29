
const fs = require('fs');
const path = require('path');
//const { validationResult } = require('express-validator');
const db = require ("../../database/models")

module.exports = {
    listado: (req, res) => {
        db.Producto.findAll()
            .then(products => {
                res.render('products/listado', { products: products })
            })
            .catch(err => console.log(err));
    },
    create: (req, res) => {
        res.render('products/create');
    },
    store: (req, res) => {
        // Valido los campos
       // let errors = validationResult(req);

        // Me fijo si no hay errores
        //if (errors.isEmpty()) {
            // Genero el nuevo usuario
            const { file } =  req
            const { prenda, marca, talle, color, sexo, precio, detalle} =  req.body
            db.Producto.create({
               prenda,
               marca,
               talle,
               color,
               sexo,
               precio,
               detalle,
               imagen: file.filename,
            })
                .then(products => {
                    let userId = products.id
                    res.redirect('/productos/' );
                })
        // Si hay errores
        //} else {
            // Renderizo el formulario nuevamente con los errors y los datos completados
          //  return res.render('users/create', { errors: errors.mapped(), old: req.body });
        //}
    },
    //show: (req, res) => {
     //   db.User.findByPk (req.params.id )
      //      .then( user  =>  res.render('users/detail', { user }) )

        
    //},
    edit: (req, res) => {
       db.Producto.findOne({
           where: {id: req.params.id}
       })
          .then(product =>{
           res.render('products/edit', { product })
 //    })
    })
      
    },
    update: (req, res) => {
        const { file } =  req
        const { prenda, marca, talle, color, sexo, precio, detalle} =  req.body
        db.Producto.findOne({ 
            where: { id: req.params.id },
        })
            .then((product) => {
                product.update({
                  prenda,
                  marca,
                  talle,
                  color,
                  sexo,
                  precio,
                  detalle,
                  imagen: file? file.filename : product.imagen
                })
                    .then((products) => {
                        let userId = users.id
                        res.redirect('/productos/' );
                    })
            })

       

    },
    destroy: (req, res) => {
        db.Producto.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(() => {
                res.redirect('/productos')
            })
        
    }
}