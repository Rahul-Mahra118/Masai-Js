//constructor function

function Person(name ,age){ 
  this.name=name;
  this.age=age;
}

Person.prototype.introduce=function(){
    console.log(`"Hi, my name is ${this.name} and I am ${this.age} years old."`)
}

//constructor function
function Employee(){
    
}