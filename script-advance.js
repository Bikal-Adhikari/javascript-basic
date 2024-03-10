// Object Oriented Programming (OOP)

// Object, property, and method

// const person = {
//   name: "John",
//   // bio(){}
//   bio: () => {
//     return `The name is ${person.name}`;
//   },
// };

// console.log(person.bio());

// const person = (name, add) => {
//   return {
//     personName: name,
//     address: add,
//     // bio: () => {
//     bio() {
//       return `The name is ${this.personName}`;
//     },
//   };
// };

// const bikObj = person("John", "New York");
// console.log(bikObj.bio());

// Class

//Syntax
// This keywords
// Constructor
class Person {
  constructor(n, a) {
    this.name = n.toUpperCase();
    this.add = a.toUpperCase();
  }
  bio() {
    return `hey, this is ${this.name} and I live in ${this.add}`;
  }
}

const bikObj = new Person("Bikal", "Sydney");

bikObj.ph = 98756;
console.log(bikObj);
console.log(bikObj.bio());

const jphnObj = new Person("Johhn", "London");
// console.log(jphnObj);
console.log(jphnObj.bio());

// Encapsulation
// Abstraction
// Inheritance
// Polymorphism.
