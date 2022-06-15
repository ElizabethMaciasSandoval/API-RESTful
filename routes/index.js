const { Router } = require('express')
const router = Router()
const contenedor = require('../contenedor')

const productos = new contenedor.Contenedor()

// ruta que obtiene todos los productos
router.get("/", (req, res) => {
    res.json(productos.getAllProducts)
})
// ruta que obtiene producto por su id
router.get("/:id", (req, res) => {

})
// ruta que agrega un producto nuevo
router.post("/", (req, res) => {

})
// ruta que actualiza un producto por su id 
router.put("/:id", (req, res) => {

})
// ruta que elimina un producto por su id 
router.delete("/:id", (req, res) => {
    
})

module.exports = router