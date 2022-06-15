const express = require('express');
const app = express();
const puerto = 8080;
const rutas = require('./routes/index')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/public', express.static(`${__dirname}/public`))

app.use('/api/productos', rutas)

app.listen(puerto, (error)=>{
  if(error){
    console.log(`Se produjo un ${error}`)
  }else{
    console.log(`Servidor escuchando puerto: ${puerto}`);
  }
})