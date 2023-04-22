function ElectricalDevice(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}


ElectricalDevice.prototype.plugIn = function() {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
};


ElectricalDevice.prototype.unplug = function() {
    console.log(this.name + " is unplugged!");
    this.isPlugged = false;
};


function Lamp(name, brand, power) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.isPlugged = true;
}

Lamp.prototype = new ElectricalDevice();


function Computer(name, cpu, power, type) {
    this.name = name;
    this.cpu = cpu;
    this.power = power;
    this.type = type;
    this.isPlugged = false;
}

Computer.prototype = new ElectricalDevice();

const tableLamp = new Lamp("Table lamp", "National", 10);

const homePC = new Computer("PC", "Intel", 120, "stationary");

tableLamp.unplug();

homePC.plugIn();


console.log(homePC);
console.log(tableLamp);