const Car = function(manufacturer, price, engineType){
        this.manufacturer = manufacturer;
        this.price = price;
        this.engineType = engineType;
    }
Car.prototype.install = function(sell){
    console.log(`${this.model} ready for viewing ${sell}`)
}


module.exports = Car;