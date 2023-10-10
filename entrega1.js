class ProductManager{
    constructor(){
        this.products = []
    }
getProducts(){
console.log(this.products)
return this.products
}

getProductById(product_id){
    let one = this.products.find(e => e.id === product_id);
    if(one){
        console.log(one)
        return one
    }
    console.log("not found")
    return null
}

addProduct({title,description,price,thumbnail,stock}){
    let id = 0
    if(this.products.length===0){
        id = 1 
    }else{
        let lastProducts = this.products[this.products.length-1]
        id=lastProducts.id + 1
    }
    let product={ title,description,price,thumbnail,stock,id }
    this.products.push(product)
}
    }

