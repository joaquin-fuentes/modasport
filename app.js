const express = require("express")
const app = express()

app.listen(process.env.PORT || 3000,()=>{
    console.log("servidor corriendo en puerto 3000")
})


app.use(express.static('public'))



app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/src/views/main/home.html')
});

app.get('/productos', (req,res)=>{
    res.sendFile(__dirname + '/src/views/products/listado.html')
});

app.get('/usuarios/login', (req,res)=>{
    res.sendFile(__dirname + '/src/views/user/login.html')
});
