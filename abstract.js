var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Auto = /** @class */ (function () {
    function Auto(brandName, wheels) {
        this.brandName = brandName;
        this.wheels = wheels;
    }
    return Auto;
}());
var Audi = /** @class */ (function (_super) {
    __extends(Audi, _super);
    function Audi() {
        return _super.call(this, "Audi", 4) || this;
    }
    Audi.prototype.move = function () {
        console.log(this.brandName + " has " + this.wheels + " wheels, and it can develop a speed of up to 240 km/hr");
    };
    Audi.prototype.fly = function () {
        console.log("Fly on the road like a rocket");
    };
    return Audi;
}(Auto));
var BMW = /** @class */ (function (_super) {
    __extends(BMW, _super);
    function BMW() {
        return _super.call(this, "BMW", 4) || this;
    }
    BMW.prototype.move = function () {
        console.log(this.brandName + " has " + this.wheels + " wheels, and it can develop a speed of up to 200 km/hr");
    };
    BMW.prototype.broken = function () {
        console.log("I like to broke my engine");
    };
    return BMW;
}(Auto));
var Porshe = /** @class */ (function (_super) {
    __extends(Porshe, _super);
    function Porshe() {
        return _super.call(this, "Porshe", 4) || this;
    }
    Porshe.prototype.move = function () {
        console.log(this.brandName + " has " + this.wheels + " wheels, and it can develop a speed of up to 280 km/hr");
    };
    Porshe.prototype.refuel = function () {
        console.log("I don't like to refuel my porshe");
    };
    return Porshe;
}(Auto));
var Tesla = /** @class */ (function (_super) {
    __extends(Tesla, _super);
    function Tesla() {
        return _super.call(this, "Tesla", 4) || this;
    }
    Tesla.prototype.move = function () {
        console.log(this.brandName + " has " + this.wheels + " wheels, and it can develop a speed of up to 300 km/hr");
    };
    Tesla.prototype.charge = function () {
        console.log("Charging Tesla like a Lightning McQueen.");
    };
    return Tesla;
}(Auto));
var OwnCar = /** @class */ (function () {
    function OwnCar() {
    }
    return OwnCar;
}());
function applyMixin(derivedCtor, baseCtors) {
    baseCtors.forEach(function (base) {
        Object.getOwnPropertyNames(base.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = base.prototype[name];
        });
    });
}
applyMixin(OwnCar, [Audi, BMW, Porshe, Tesla]);
var ownAuto = new OwnCar();
ownAuto.move();
ownAuto.fly();
ownAuto.broken();
ownAuto.refuel();
ownAuto.charge();
