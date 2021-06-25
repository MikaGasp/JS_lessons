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
cars.equipment = ('Full');
cars.fuel.push = ('50%');
console.log(cars);
