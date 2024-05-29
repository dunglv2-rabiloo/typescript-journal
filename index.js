"use strict";
const dung = {
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
const dunglv = Object.assign(Object.assign({}, dung), { programmingLanguages: ["Java", "JavaScript", "Golang"] });
const casted = dunglv;
// console.log(casted.programmingLanguages); => error: Property 'programmingLanguages' does not exist on type 'Person'.
console.log(casted);
const simpleCarry = {
    get: () => "Just trivial",
    empty: () => {
        console.log("Backpack get empty");
    },
};
const show = function (obj) {
    console.log(obj.get());
};
show(simpleCarry);
show({
    get: () => "This still works",
    empty: () => { },
});
class Animal {
    constructor(name, age) {
        this._name = name;
        this.age = age;
    }
    run() {
        console.log(this._name, "is running...");
    }
    get name() {
        return this._name;
    }
}
Animal.type = "N/A";
(() => {
    Animal.type = "Unknown";
})();
class DisabledAnimal extends Animal {
    constructor(name, age, disabledParts) {
        super(name, age);
        this.disabledParts = disabledParts;
    }
    run() {
        if (this.disabledParts.includes("feet")) {
            console.error("No, I can't run");
        }
    }
}
class DisabledDog extends DisabledAnimal {
}
const dog = new Animal("Dog", 2);
// dog.name = 'Invalid operation | readonly property'
console.log(dog.name);
console.log(dog.age);
dog.run();
const anotherDog = new DisabledDog("Disabled", 1, ["feet"]);
anotherDog.run();
