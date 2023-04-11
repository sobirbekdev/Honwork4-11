class Car {
    constructor(modeli, turi, narxi){
        this._modeli=modeli,
        this._turi=turi,
        this._narxi=narxi
    }

    sayName = function(){
        console.log("Car name: " + this._turi);
    }
}

let Nexa2 = new Car("Shevrolet", "Nexa2", "8000$");

Nexa2.rangi = function (){
    console.log(this._narxi);    
}
Nexa2.rangi()

let Gelic =new Car(" Mers","Gelic","335500$");


let ferrari = new Car("Ferrari", "Ferrari F70","1500000$");

let BMW = new Car("BMW,", "BMW i8"," 48500у.е");

Nexa2.sayName()



console.log(Nexa2);
console.log(Gelic);
console.log(ferrari);
console.log(BMW);