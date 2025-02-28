//constructor function

function Person(name ,age){ 
  this.name=name;
  this.age=age;
}

Person.prototype.introduce=function(){
    console.log(`"Hi, my name is ${this.name} and I am ${this.age} years old."`)
}

//constructor function
function Employee(name,age,title){
  Person.call(this, name, age);

  this.jobTitle = title; 

}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.work=function(){
  console.log(`${this.name} is working as a ${this.jobTitle}`)
}

let person= new Person("Rahul",23);
let employ= new Employee("Shivam", 23, "Web Developer")
employ.work()