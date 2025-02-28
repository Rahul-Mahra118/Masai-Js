function Car(make,model,year,isAvailable){
    this.make=make;
    this.model=model;
    this.year=year;
    this.isAvailable=isAvailable;
}

function Customer(name, rentedCar=[]){
    this.name=name;
    this.rentedCar=rentedCar;
}

Customer.prototype.rentCar=function(Car){
    

}