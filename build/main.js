"use strict";
const greeting = (name) => {
    console.log(`Hello ${name}!`);
};
greeting('Frank');
const showAge = (age) => {
    console.log(age);
};
const alice = { name: "Alice" };
const bob = { name: "Bob", age: 25 };
const persons = [alice, bob];
persons.forEach(person => {
    if (person.age) {
        showAge(person.age);
    }
});
