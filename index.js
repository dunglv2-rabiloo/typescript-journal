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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var dung = {
    name: "Dung",
    age: 22,
    position: "developer",
    status: "single",
    languages: [
        {
            name: "English",
            code: "en",
        },
        {
            name: "Vietnamese",
            code: "vi",
        },
    ],
    hobbies: ["Listing to music", "Sleeping"],
};
console.log(dung);
if ("hobbies" in dung) {
    console.log("Yep: ", dung.hobbies);
}
var dunglv = __assign(__assign({}, dung), { programmingLanguages: ["Java", "JavaScript", "Golang"] });
var casted = dunglv;
// console.log(casted.programmingLanguages); => error: Property 'programmingLanguages' does not exist on type 'Person'.
console.log(casted);
var simpleCarry = {
    get: function () { return "Just trivial"; },
    empty: function () {
        console.log("Backpack get empty");
    },
};
var show = function (obj) {
    console.log(obj.get());
};
show(simpleCarry);
show({
    get: function () { return "This still works"; },
    empty: function () { },
});
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this._name = name;
        this.age = age;
    }
    Animal.prototype.run = function () {
        console.log(this._name, "is running...");
    };
    Object.defineProperty(Animal.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Animal.type = "N/A";
    (function () {
        Animal.type = "Unknown";
    })();
    return Animal;
}());
var DisabledAnimal = /** @class */ (function (_super) {
    __extends(DisabledAnimal, _super);
    function DisabledAnimal(name, age, disabledParts) {
        var _this = _super.call(this, name, age) || this;
        _this.disabledParts = disabledParts;
        return _this;
    }
    DisabledAnimal.prototype.run = function () {
        if (this.disabledParts.indexOf("feet") != -1) {
            console.error("No, I can't run");
        }
    };
    return DisabledAnimal;
}(Animal));
var DisabledDog = /** @class */ (function (_super) {
    __extends(DisabledDog, _super);
    function DisabledDog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DisabledDog;
}(DisabledAnimal));
var dog = new Animal("Dog", 2);
// dog.name = 'Invalid operation | readonly property'
console.log(dog.name);
console.log(dog.age);
dog.run();
var anotherDog = new DisabledDog("Disabled", 1, ["feet"]);
anotherDog.run();
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Fish.prototype.swim = function () {
        console.log("I'm swimming");
    };
    return Fish;
}(Animal));
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bird.prototype.fly = function () {
        console.log("I'm flying");
    };
    return Bird;
}(Animal));
function getPets() {
    return [new Fish("John Cena", 1), new Bird("Unnamed", 1)];
}
// type predicate
function isBird(pet) {
    return pet instanceof Bird;
}
getPets().forEach(function (animal) {
    if (isBird(animal)) {
        animal.fly();
    }
    else if (animal instanceof Fish) {
        animal.swim();
    }
});
function overloading(first, second) {
    // two first signatures are called overload signatures
    return second !== undefined ? first + second : first;
}
console.log(overloading("3", "7"));
