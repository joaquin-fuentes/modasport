const express = require('express');
const router = express.Router();
const controller = require('../controller/productController');
//const path = require('path');
//const validate = require('../validations/usersValidations') 
//
//const multer = require('multer');
//const storage = multer.diskStorage({
//    destination: (req, file, callback) => {
//        callback(null, path.join(__dirname, '../../public/img/users/'));
//    },
//    filename: (req, file, callback) => {
//        // Mejor usar algo como esto en lugar de Date.now()
//        // https://www.npmjs.com/package/uuidv4
//        callback(null, 'user-' + Date.now() + path.extname(file.originalname));
//    }
//});
//const upload = multer({ storage });


router.get('/', controller.listado); // Muestra el listado de PRODUCTOS
router.get('/crear', controller.create); // Muestra formulario de creación de PRODUCTO
//router.get('/:id', controller.show); // Muestra detalle de PRODUCTO
//router.post('/', upload.single('image'), validate.register, controller.store); // Procesa el formulario de creación
router.get('/:id/editar', controller.edit); //Muestra el formulario de edición
//router.put('/:id', upload.single('image'), validate.update, controller.update); //Procesa el formulario de EDICIÓN
//router.delete('/:id', controller.destroy); //Elimina PRODUCTO

module.exports = router;