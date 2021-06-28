class Cars {
    constructor(brand, model, color, engine, power){
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.engine = engine;
        this.power = power;
    }
    interior = [];
    equipment = [];
    fuel = [];
}
const cars = new Cars('lada', 'niva', 'white', 1.7, 137);
cars.interior.push('White');
cars.equipment.push('Full');
cars.fuel.push('50%');
console.log(cars);


const cars1 = new Cars('bmw','x6','black', 3.0, 350);
cars1.interior.push('Black');
cars1.equipment.push('Standart');
cars1.fuel.push('66%')
console.log(cars1);
