function Product(name,price, quantity){
    this.name=name;
    this.price=this.price;
    this.quantity= this.quantity;

}

function Electronic(name,price,quantity){
    Product.call(this,name,price,quantity);
    this.brand=brand;
    this.model= model;
}
Electronic.prototype.powerOn=function(){
    console.log(`${this.name} is on`);
}
Electronic.prototype.powerOf= function(){
    console.log(`${this.name} is off`);
}

Electronic.prototype= Object.create(Product.prototype);
Electronic.prototype.constructor= Electronic;

function Clothing(name,price,quantity){
    Product.call(this,name,price,quantity);
    this.brand=brand;
    this.size= size;
}
Clothing.prototype= Object.create(Product.prototype);
Clothing.prototype.constructor= Clothing;

function Books(name,price,quantity){
    Product.call(this,name,price,quantity);
    this.category=category;
}

Books.prototype= Object.create(Product.prototype);
Books.prototype.constructor= Books;


