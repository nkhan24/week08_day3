const Car = require('./Car.js');

const Dealership = function(name,maxCars,currentCars){
    this.name = name;
    this.maxCars = maxCars;
    this.currentCars = currentCars;
}


// counting number of cars in stock
Dealership.prototype.count = function(){
 return `We have ${this.currentCars.length()} available!`;
}

// adding a car to stock
Dealership.prototype.addStock =function(newCar){
this.currentCars.push(newCar);
return `We have added ${newCar} to our stock!`;

}

//Outputting an array containing each car's manufacturer
Dealership.prototype.manufacturerArray = function(){
const manufacturer = this.currentCars.map(e => e.manufacturer);
return manufacturer;

}

// finding all cars from given manufacturer
Dealership.prototype.findAllManufacturer = function(manufacturer){
const same = this.currentCars.filter(similar => similar.manufacturer === manufacturer);
return `Here are the cars from ${same} manufacturer`;
   
}

//Finding total value of all cars in stock
Dealership.prototype.totalValue = function(price){
const total = 0;
const cost = this.currentCars.map(p => p.price);
const totalCost = cost.reduce((previousValue, currentValue) => previousValue + currentValue,
total

);
return `The total cost of cars available is ${totalCost}`;
}

module.exports = { 
    Dealership
};

