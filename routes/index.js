const { Router } = require('express')
const router = Router()
const contenedor = require('../contenedor')

const productos = new contenedor.Contenedor()

// ruta que obtiene todos los productos
router.get("/", (req, res) => {
    res.json(productos.getAllProducts())
})
// ruta que obtiene producto por su id
router.get("/:id", (req, res) => {
    const id = Number(req.params.id);
    if(isNaN(id)){
        return res.json({error: "El parametro no es un numero"})
    }
    const productById = productos.getProductById(id);
    if(!productById.length){
        return res.status(404).json({error: "Producto no encontrado"})
    }
    res.json(productById)
})
// ruta que agrega un producto nuevo
router.post("/", (req, res) => {
    const {title, price, thumbnail} = req.body;
    const newProduct = productos.addProduct(title, price, thumbnail);
    res.json(productos.getAllProducts())
})
// ruta que actualiza un producto por su id 
router.put("/:id", (req, res) => {
    const {title, price, thumbnail} = req.body;
    const id = Number(req.params.id);
    if(isNaN(id)){
        return res.json({error: "El parametro no es un numero"})
    }
    const productById = productos.getProductById(id);
    if(!productById.length){
        return res.status(404).json({error: "Producto no encontrado"})
    }
    productos.updateProduct(id, title, price, thumbnail)
    const modifiedProduct = productos.getProductById(id);
    return res.json(modifiedProduct)
})
// ruta que elimina un producto por su id 
router.delete("/:id", (req, res) => {
    const id = Number(req.params.id);
    if(isNaN(id)){
        return res.json({error: "El parametro no es un numero"})
    }
    productos.deleteProductById(id)
    res.json(productos.getAllProducts())
})

module.exports = router