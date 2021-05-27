const express = require ("express")

const mainController = require ("../controller/mainController")

const router = express.Router()

router.get ("/", mainController.home);

router.get ("/contact", mainController.contact);


 module.exports = router