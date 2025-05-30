function Transport(fname, capacity,distancePerliter) {
  this.name = fname;
  this.capacity = capacity;
  this.fuel = fuel;
  this.tripHistory = [];
  this.currentLoad = 0;
  this.distancePerliter=distancePerliter
}

Transport.prototype.pickUpPassenger = function (passenger) {
  if (this.currentLoad + passenger <= this.capacity)
    this.currentLoad += this.passenger;
  else throw new Error("capacity is full");
};
Transport.prototype.dropOffPassenger = function (passenger) {
  if (this.currentLoad - passenger >= 0) this.currentLoad -= this.passenger;
};
Transport.prototype.canStartTrip = function (distance,distancePerliter) {
    if(this.distancePerliter*this.fuel<distance) return false;
    return true;
};

Transport.prototype.logTrip = function (tripDetails) {
  this.tripHistory.push(tripDetails);
};

function Bus(fname, capacity, fuel) {
  Transport.call(this, fname, capacity, fuel);
}

Bus.prototype = Object.create(Transport.prototype);
Bus.prototype.constructor = Bus;

//1 km 10 rupees.
Bus.prototype.calcFare = function (distance, passenger) {
  return (fareCharge = distance * 10 * passenger);
};
Bus.prototype.loadPct= function(){
    return Math.floor(this.passenger / this.capacity);

}
let bus1 = new Bus("Volvo", 15, 10);

bus1.pickUpPassenger(2);
bus1.dropOffPassenger(1);
bus1.canStartTrip(12);
bus1.fuelConsumed(distance);

bus1.logTrip({
  id: Date.now(),
  distance: 12,
  passenger: 30,
  timestamp: Date.now(),
  fare: bus1.calcFare(),
  loadPct:bus1.loadPct ,
});


function Train(){
  Transport.call(this, fname, capacity, fuel);
}

Train.prototype = Object.create(Transport.prototype);
Bus.prototype.constructor = Bus;

//1 km 10 rupees.
Train.prototype.calcFare = function (distance, passenger) {
  return (fareCharge = distance * 10 * passenger);
};
Train.prototype.loadPct= function(){
    return Math.floor(this.passenger / this.capacity);

}
let train = new Train("Rajdhani express", 15, 10);

train.pickUpPassenger(2);
train.canStartTrip(12);
train.dropOffPassenger(1);
train.fuelConsumed(distance);

train.logTrip({
  id: Date.now(),
  distance: 12,
  passenger: 30,
  timestamp: new Date(Date.now()),
  fare: train.calcFare(),
  loadPct:train.loadPct ,
});

//----------------------------------------

function Taxi(){
  Transport.call(this, fname, capacity, fuel);
}

Taxi.prototype = Object.create(Transport.prototype);
Bus.prototype.constructor = Bus;

//1 km 10 rupees.
Taxi.prototype.calcFare = function (distance, passenger) {
  return (fareCharge = distance * 10 * passenger);
};
Taxi.prototype.loadPct= function(){
    return Math.floor(this.passenger / this.capacity);

}
let taxi = new Taxi("Rajdhani express", 15, 10);

taxi.pickUpPassenger(2);
taxi.canStartTrip(12);
taxi.dropOffPassenger(1);
taxi.fuelConsumed(distance);

taxi.logTrip({
  id: Date.now(),
  distance: 12,
  passenger: 30,
  timestamp: new Date(Date.now()),
  fare: taxi.calcFare(),
  loadPct:taxi.loadPct ,
});

//.........................................

const HIGH_THRESHOLD   = 0.80   // ≥ 80 % of capacity
const MEDIUM_THRESHOLD = 0.40   // 40–79 %
// const LOW  = below  40 %



function buildAnalytics(arr){
 
let obj={}

    const totalTrips=arr.length;
    const totalRevenue= arr.reduce((acc,curr)=>{
     acc=acc+ curr.fare;
    return acc;
    },0);
    const totalDistance= arr.reduce((acc,curr)=>{
        acc=acc+curr.distance;
        return acc;
    },0)

    const averageFarePerKm=parseFloat(totalRevenue/totalDistance).toFixed(2);

  obj.totalTrips=totalTrips;
  obj.totalRevenue=totalRevenue;
  obj.totalDistance=totalDistance;
  obj.averageFarePerKm=averageFarePerKm
  return obj;

}


