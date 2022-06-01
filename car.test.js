const Car = require("./car.js");

describe('Reading if car property is available', () => {
    test('Accessing properties of car', () =>{
        //arrange
        const carTest = new Car("BMW",45000,"V6");
        //act
        const actual = carTest.manufacturer;
        const expect = "BMW"; 
        //assert
        expect(actual).toBe(expect);
    });

    test('Accessing properties of car', () =>{
        //arrange
        const carTest =  car = new car("Opel",10000,"4 litre straight 6");
        //act
        const actual = carTest.price;
        const expect = 10000; 
        //assert
        expect(actual).toBe(expect);
});
test('Accessing properties of car', () =>{
    //arrange
    const carTest =  car = new car("Audi",50000,"Hybrid");
    //act
    const actual = carTest.engineType;
    const expect = "Hybrid"; 
    //assert
    expect(actual).toBe(expect);


});
});