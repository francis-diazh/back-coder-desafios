class ProductManager {
  constructor() {
    this.products = [];
  }
  getProducts() {
    console.log(this.products);
    return this.products;
  }

  getProductById(product_id) {
    let one = this.products.find((e) => e.id === product_id);
    if (one) {
      console.log(one);
      return one;
    }
    console.log("not found");
    return null;
  }

  addProduct({ title, description, price, thumbnail, stock }) {
    let id = 0;
    if (this.products.length === 0) {
      id = 1;
    } else {
      let lastProducts = this.products[this.products.length - 1];
      id = lastProducts.id + 1;
    }
    let product = { title, description, price, thumbnail, stock, id };
    this.products.push(product);
  }

  updateProduct(id, data) {
    try {
      let search = this.getProductById(id);
      if (search === "Not found") {
        console.log("Not found");
      } else {
        for (let prop in data) {
          search[prop] = data[prop];
        }
        let data_json = JSON.stringify(this.products, null, 2);
        fs.promises.writeFile(this.path, data_json);
        console.log("updateProduct: done , " + id);
        return "updated product: " + id;
      }
    } catch (error) {
      console.log(error);
      return "updateProduct: error";
    }
  }
  deleteProduct(id) {
    try {
      let search = this.getProductById(id);
      if (search === "Not found") {
        return "Not found";
      } else {
        this.products = this.products.filter((each) => each.id !== id);
        console.log(this.products);
        let data_json = JSON.stringify(this.products, null, 2);
        fs.promises.writeFile(this.path, data_json);
        console.log("deleteProduct: " + id);
        return "deleteProduct: " + id;
      }
    } catch (error) {
      console.log(error);
      return "error: deleting product";
    }
  }
}
