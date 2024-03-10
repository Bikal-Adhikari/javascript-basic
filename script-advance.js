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

const person = (name, add) => {
  return {
    personName: name,
    address: add,
    // bio: () => {
    bio() {
      return `The name is ${this.personName}`;
    },
  };
};

const bikObj = person("John", "New York");
console.log(bikObj.bio());

// Class
// This keywords
// Constructor
// Encapsulation
// Abstraction
// Inheritance
// Polymorphism.
