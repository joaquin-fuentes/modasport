const express = require("express")
const app = express()

app.listen(process.env.PORT || 3000,()=>{
    console.log("servidor corriendo en puerto 3000")
})


app.use(express.static('public'))


// RUTAS MAIN
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/src/views/main/home.html')
});
// RUTAS PRODUCTOS
app.get('/productos', (req,res)=>{
    res.sendFile(__dirname + '/src/views/products/listado.html')
});
app.get('/productos/crear', (req,res)=>{
    res.sendFile(__dirname + '/src/views/products/create.html')
});
app.get('/productos/editar', (req,res)=>{
    res.sendFile(__dirname + '/src/views/products/edit.html')
});

// RUTAS USUARIOS
app.get('/usuarios/login', (req,res)=>{
    res.sendFile(__dirname + '/src/views/user/login.html')
});

app.get('/usuarios/registro', (req,res)=>{
    res.sendFile(__dirname + '/src/views/user/register.html')
});
