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
  #secKey;
  constructor(n, a) {
    this.name = n.toUpperCase();
    this.add = a.toUpperCase();
    this.#secKey = "36737";
  }
  bio() {
    return `hey, this is ${this.name} and I live in ${
      this.add
    }. secret key used was ${this.#secretKeyGenerator()}`;
    // return `hey, this is ${this.name} and I live in ${
    //   this.add
    // }. secret key used was ${this.#secKey}`;
  }

  nameinLower() {
    return this.name.toLowerCase();
  }

  #secretKeyGenerator() {
    return "3456";
  }
}

const bikObj = new Person("Bikal", "Sydney");

bikObj.ph = 98756;
// console.log(bikObj.#secKey);
// console.log(bikObj.nameinLower());
console.log(bikObj.bio());

// const jphnObj = new Person("Johhn", "London");
// // console.log(jphnObj);
// console.log(jphnObj.bio());

// Encapsulation
// Abstraction
// Inheritance
// Polymorphism.
