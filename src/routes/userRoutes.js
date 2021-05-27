const express = require('express');
const router = express.Router();
const controller = require('../controller/userController');
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


router.get('/', controller.listado); // Muestra el listado de usuarios
router.get("/ingresar" , controller.login) // Muestra el formulario de login
//router.post('/login', validate.login, controller.authenticate); // Envía el login
//router.get('/logout', controller.logout); // 
router.get('/registro', controller.register); // Muestra formulario de creación
//router.get('/:id', controller.show); // Muestra detalle
//router.post('/', upload.single('image'), validate.register, controller.store); // Procesa el formulario de creación
//router.get('/:id/editar', controller.edit); //Muestra el formulario de edición
//router.put('/:id', upload.single('image'), validate.update, controller.update); //Procesa el formulario de EDICIÓN
//router.delete('/:id', controller.destroy); //Elimina usuario

module.exports = router;