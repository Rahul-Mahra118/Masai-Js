function Animal(){
    this.type="Animal"
}
let animal1= new Animal();

console.log(animal1)
Animal.prototype.sound=function(){
    console.log(`Animal sound`)  
}


//constructor function
function Dog(){
 
}

//ensure Dog prototype inherit from Animal.prototype
Dog.prototype= Object.create(Animal.prototype);