// MODULOS
const express = require("express")
const app = express()
const methodOverride = require('method-override');
const session = require('express-session');
//const auth = require('./src/middlewares/auth');
const cors = require ("cors")


// Rutas
const mainRoutes = require("./src/routes/mainRoutes")
const usersRoutes = require("./src/routes/userRoutes")
const productsRouter = require('./src/routes/productRoutes')


// Configuración
app.use(express.static("public")) 

app.set("view engine", "ejs")
app.set("views", "src/views")

//middlewares
app.use(cors())

// Sessiones y cookies
app.use(session({
    secret: 'Mi sitio',
    resave: false, // no vuelve a guardar si no hay cambios
    saveUninitialized: true, // guarda sessiones aunque todavía no haya datos
}));
//app.use(auth);

// Formularios
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));





// RUTAS

app.use("/",mainRoutes)
app.use("/usuarios",usersRoutes)
app.use('/productos', productsRouter);

// Iniciamos el servidor
app.listen(process.env.PORT || 3000,()=>{
    console.log("servidor corriendo en puerto 3000")
})

// Error 404
app.use((req,res,next) => {
    res.status(404).render("Error404/not-found")
})

