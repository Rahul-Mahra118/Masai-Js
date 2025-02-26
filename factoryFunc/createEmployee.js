function createEmployee(name, role,salary){
    let obj={}
    obj.name=name;
    obj.salary=salary;
    obj.role= role;
    obj.introduce=function(){
        console.log(`Hello , I am ${this.name} , working as as a ${role}`);
    }
    return obj;
}
const employee1 = createEmployee("Alice", "Developer", 60000);
employee1.introduce()