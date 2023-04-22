class ElectricalDevice {
    constructor(name, power){
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }
    
    plugIn() {
        console.log(this.name + " is plugged!");
        this.isPlugged = true;
    }

    unplug() {
        console.log(this.name + " is unplugged!");
        this.isPlugged = false;
    }
}

class Lamp extends ElectricalDevice {
    constructor (name, brand, power) {
        super(name, power);
        this.brand = brand;
        this.isPlugged = true;
    }
}

class Computer extends ElectricalDevice {
    constructor(name, cpu, power, type) {
        super(name, power); 
        this.cpu = cpu;
        this.type = type;
        this.isPlugged = false;
    }
}


const tableLamp = new Lamp("Table lamp", "National", 10);
  
const homePC = new Computer("PC", "Intel", 120, "stationary");
  
tableLamp.unplug();
  
homePC.plugIn();
  

console.log(homePC);
console.log(tableLamp);