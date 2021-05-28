const express = require('express');
const router = express.Router();
const controller = require('../controller/userController');



router.get('/', controller.listado); // Muestra el listado de usuarios
router.get("/ingresar" , controller.login) // Muestra el formulario de login

router.get('/registro', controller.register); // Muestra formulario de creación
router.post('/',controller.store); // Procesa el formulario de creación

router.delete('/:id', controller.destroy); //elimina usuario


module.exports = router;