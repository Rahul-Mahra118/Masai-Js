function Device(name,type,status){
    this.name=name;
    this.status=status
    this.type=type;
}
Device.prototype.checkStatus=function (){
    console.log(`${this.name} is currently ${this.status}.`);
    return this.status;
}

Device.prototype.on=function(){
    this.status = "on";
    console.log(`${this.name} is now ON.`);
}
Device.prototype.turnOff= function(){
    this.status = "off";
    console.log(`${this.name} is now OFF.`);
}

function SmartHome(owner){
  this.owner= owner;
  this.devices= []
}

SmartHome.prototype.addDevices= function (devices){
  if(devices)
}

