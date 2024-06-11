/* Fundamentals */
type Position = "developer" | "tester" | "project manager";
interface Person {
  name: string;
  age: number;
  position: Position;
  status: "single" | "in relationship";
  languages: Array<{
    name: string;
    code: string;
  }>;
  hobbies?: Array<string>;
}
const dung: Person = {
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

/* Type assertion */
interface Developer extends Person {
  programmingLanguages: Array<string>;
}
const dunglv: Developer = {
  ...dung,
  programmingLanguages: ["Java", "JavaScript", "Golang"],
};
const casted = dunglv as Person;
// console.log(casted.programmingLanguages); => error: Property 'programmingLanguages' does not exist on type 'Person'.
console.log(casted);

/* Generic */
interface Backpack<T> {
  get: () => T;
  empty: () => void;
}
const simpleCarry: Backpack<string> = {
  get: () => "Just trivial",
  empty: () => {
    console.log("Backpack get empty");
  },
};
const show = function <T, O extends Backpack<T>>(obj: O) {
  console.log(obj.get());
};
show(simpleCarry);
show({
  get: () => "This still works",
  empty: () => {},
});

/* Object-oriented programming */
interface Runnable {
  run(): void;
}

class Animal implements Runnable {
  static type = "N/A";
  private _name: string;
  public age: number;

  static {
    Animal.type = "Unknown";
  }

  constructor(name: string, age: number) {
    this._name = name;
    this.age = age;
  }

  run(): void {
    console.log(this._name, "is running...");
  }

  get name(): string {
    return this._name;
  }
}

abstract class DisabledAnimal extends Animal {
  constructor(name: string, age: number, protected disabledParts: string[]) {
    super(name, age);
  }

  run(): void {
    if (this.disabledParts.indexOf("feet") != -1) {
      console.error("No, I can't run");
    }
  }
}

class DisabledDog extends DisabledAnimal {}

const dog = new Animal("Dog", 2);
// dog.name = 'Invalid operation | readonly property'
console.log(dog.name);
console.log(dog.age);
dog.run();

const anotherDog = new DisabledDog("Disabled", 1, ["feet"]);
anotherDog.run();

class Fish extends Animal {
  swim() {
    console.log("I'm swimming");
  }
}
class Bird extends Animal {
  fly() {
    console.log("I'm flying");
  }
}
function getPets(): Animal[] {
  return [new Fish("John Cena", 1), new Bird("Unnamed", 1)];
}

// type predicate
function isBird(pet: Animal): pet is Bird {
  return pet instanceof Bird;
}

getPets().forEach((animal) => {
  if (isBird(animal)) {
    animal.fly();
  } else if (animal instanceof Fish) {
    animal.swim();
  }
});

function overloading(x: string): string;
function overloading(a: string, b: string): string;
function overloading(first: string, second?: string): string {
  // two first signatures are called overload signatures
  return second !== undefined ? first + second : first;
}
console.log(overloading("3", "7"));

interface Cookies {
  readonly [key: string]: number | string;
}
const cookies: Cookies = {
  "Max-Age": 1000,
};
console.log(cookies["Max-Age"]);
// cookies["Max-Age"] = 0; // error: readonly attribute

/* == Mapped Types == */
type MyField = {
  name: string;
  default: string;
};
class Group<Field extends { [Key in keyof Field]: MyField }> {
  fields: Field;
  constructor(fields: Field) {
    this.fields = fields;
  }
}
const group = new Group({
  email: {
    name: "email",
    default: "user@example.com",
  },
});
console.log(group.fields.email.default);
