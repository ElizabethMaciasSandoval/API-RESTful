class Contenedor{
  constructor(){
    this.products=[];
  }
  getAllProducts(){
    return this.products;
  }
  getProductById(id){
    const productById = this.products.filter(product => product.id === id);
    return productById;
  }
  addProduct(title, price, thumbnail){
    if(this.products.length === 0){
      const newProduct = {
        title: title,
        price:price,
        thumbnail: thumbnail,
        id:1
      }
      this.products.push(product)
      return newProduct;
    }else{
      const lastIndex = this.products[this.products.length-1].id
      const index= lastIndex + 1
      const newProduct = {
        title: title,
        price:price,
        thumbnail: thumbnail,
        id:index
      }
      this.products.push(newProduct)
      return newProduct;
    }
  }
  updateProduct(id, title, price, thumbnail){
    const index = this.products.findIndex(product => product.id === id);
    this.products[index].title = title
    this.products[index].price = price
    this.products[index].thumbnail = thumbnail
  }
  deleteProductById(id){
    const arr = this.products.filter(product => product.id != id);
    this.products = arr
  }
}
module.exports={
    Contenedor
}