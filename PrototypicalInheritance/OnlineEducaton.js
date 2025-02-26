class User{
    constructor(name,email){
        this.name=name,
        this.email=email
    }
    getDetails(){
        console.log(`Name: ${this.name} , Email: ${this.email}`)
    }
}

class Student extends User{
    constructor(name,email,studentId){
        super(name,email);
        this.studentId=studentId;
    }
    enroll(){
        console.log(`Student ${this.name} has enrolled`)
    }
}
class Instructor extends User{
    constructor(name,email,instructId){
        super(name,email);
        this.instructId=instructId;
    }
    assignGrade(){
        console.log(`Instructor ${this.name} assigned a grade`)
    }
}

let student= new Student("Rahul","rahul@gmail.com",1234);
student.enroll();
let instructor= new Instructor("Mansi", "mansi@gmail.com",456);
instructor.assignGrade()