const express = require('express');
const router = express.Router();
const controller = require('../controller/productController');
const path = require('path');
//const validate = require('../validations/usersValidations') 
const uuid4 = require('uuid4')
const multer = require('multer');
const storage = multer.diskStorage(
    {
        destination: 'public/img/products',
        filename: function ( req, file, cb ) {
            const { mimetype } = file

            const EXTENSION = {
                'image/png': 'png',
                'image/jpg': 'jpg',
                'image/jpeg': 'jpeg',
                'image/gif': 'gif',
                'image/webp': 'webp',
            }

            cb( null, `${uuid4()}.${EXTENSION[mimetype] || ''}` );
        }
    }
);

const upload = multer({ storage });


router.get('/', controller.listado); // Muestra el listado de PRODUCTOS
router.get('/crear', controller.create); // Muestra formulario de creación de PRODUCTO
//router.get('/:id', controller.show); // Muestra detalle de PRODUCTO
router.post('/', upload.single('imagen'),controller.store); // Procesa el formulario de creación  validate.register, 
router.get('/:id/editar', controller.edit); //Muestra el formulario de edición
router.put('/:id', upload.single('imagen'), controller.update); //Procesa el formulario de EDICIÓN   validate.update,
router.delete('/:id', controller.destroy); //Elimina PRODUCTO

module.exports = router;