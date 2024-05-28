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
