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
    this.name = n;
    this.add = a;
  }
}

const bikObj = new Person("Bikal", "Sydney");
console.log(bikObj);

const jphnObj = new Person("Johhn", "London");
console.log(jphnObj);

// Encapsulation
// Abstraction
// Inheritance
// Polymorphism.
