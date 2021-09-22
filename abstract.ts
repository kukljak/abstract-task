abstract class Auto {

    constructor(public brandName: string, public wheels: number) {}

    abstract move(): void;
}

class Audi extends Auto{
    
    constructor(){
        super("Audi", 4);
    }

    move():void {
        console.log(`${this.brandName} has ${this.wheels} wheels, and it can develop a speed of up to 240 km/hr`);
    }

    fly():void {
        console.log("Fly on the road like a rocket");
    }
}

class BMW extends Auto{
    
    constructor(){
        super("BMW", 4);
    }

    move():void {
        console.log(`${this.brandName} has ${this.wheels} wheels, and it can develop a speed of up to 200 km/hr`);
    }

    broken():void {
        console.log("I like to broke my engine");
    }
}

class Porshe extends Auto{
    
    constructor(){
        super("Porshe", 4);
    }

    move():void {
        console.log(`${this.brandName} has ${this.wheels} wheels, and it can develop a speed of up to 280 km/hr`);
    }

    refuel():void {
        console.log("I don't like to refuel my porshe");
    }
}

class Tesla extends Auto{
    
    constructor(){
        super("Tesla", 4);
    }

    move():void {
        console.log(`${this.brandName} has ${this.wheels} wheels, and it can develop a speed of up to 300 km/hr`);
    }

    charge():void {
        console.log("Charging Tesla like a Lightning McQueen.");
    }
}


class OwnCar {}
interface OwnCar extends Audi, BMW, Porshe, Tesla {}

function applyMixin(derivedCtor:any, baseCtors:any[]) {
    baseCtors.forEach(base => {
        Object.getOwnPropertyNames(base.prototype).forEach(name => {
            derivedCtor.prototype[name] = base.prototype[name];
        })
    })
}

applyMixin(OwnCar,[Audi, BMW, Porshe, Tesla]);

let ownAuto : OwnCar = new OwnCar();
ownAuto.move();
ownAuto.fly();
ownAuto.broken();
ownAuto.refuel();
ownAuto.charge();