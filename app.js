// MODULOS
const express = require("express")
const app = express()

app.listen(process.env.PORT || 3000,()=>{
    console.log("servidor corriendo en puerto 3000")
})


// Rutas
const mainRoutes = require("./src/routes/mainRoutes")
const usersRoutes = require("./src/routes/userRoutes")
const productsRouter = require('./src/routes/productRoutes')


app.use("/",mainRoutes)
app.use("/usuarios",usersRoutes)
app.use('/productos', productsRouter);

// Configuración
app.use(express.static("public")) 
app.set("view engine", "ejs")
app.set("views", "src/views")



// Iniciamos el servidor
app.listen(process.env.PORT || 3003,()=>{
    console.log("servidor corriendo en puerto 3000")
})

// Error 404
app.use((req,res,next) => {
    res.status(404).render("Error404/not-found")
})

