const express = require('express');
const router = express.Router();
const controller = require('../controller/apiUserController');

router.get('/usuarios', controller.getUsers)  //muestra usuario

router.post('/usuarios', controller.createUser) // crea usuario

router.delete('/usuarios/:id', controller.destroyUser) // elimina usuario


module.exports = router;