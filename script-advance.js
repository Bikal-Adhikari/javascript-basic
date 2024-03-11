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
// class Person {
//   #secKey;
//   constructor(n, a) {
//     this.name = n.toUpperCase();
//     this.add = a.toUpperCase();
//     this.#secKey = "36737";
//   }
//   bio() {
//     return `hey, this is ${this.name} and I live in ${
//       this.add
//     }. secret key used was ${this.#secretKeyGenerator()}`;
//     // return `hey, this is ${this.name} and I live in ${
//     //   this.add
//     // }. secret key used was ${this.#secKey}`;
//   }

//   nameinLower() {
//     return this.name.toLowerCase();
//   }

//   #secretKeyGenerator() {
//     return "3456";
//   }
// }

// const bikObj = new Person("Bikal", "Sydney");

// bikObj.ph = 98756;
// // console.log(bikObj.#secKey);
// // console.log(bikObj.nameinLower());
// console.log(bikObj.bio());

// const jphnObj = new Person("Johhn", "London");
// // console.log(jphnObj);
// console.log(jphnObj.bio());

// Encapsulation
// Abstraction
// Inheritance
// Polymorphism.

// class Living {
//   constructor({ name, age, dob, add }) {
//     this.name = name;
//     this.age = age;
//     this.dob = dob;
//     this.add = add;
//   }
// }
// class Human extends Living {
//   constructor({ partner, ...rest }) {
//     super(rest);
//     this.partner = partner;
//   }

//   bio() {
//     return `Hey, this is ${this.name} from ${this.add} and I am ${this.age} living with my partner ${this.partner}`;
//   }
// }

// const samObj = {
//   name: "Sam",
//   age: 22,
//   dob: "2002",
//   add: "Sydney",
//   partner: "Emily",
// };

// const samInstance = new Human(samObj);

// console.log(samInstance);

// class Animal extends Living {
//   constructor({ owner, ...rest }) {
//     super(rest);
//     this.owner = owner;
//   }

//   bio() {
//     return `Hey, this is ${this.name} from ${this.add} and I am ${this.age} years old, living with its owner ${this.owner}`;
//   }
// }

// const catObj = {
//   name: "Polo",
//   age: 2,
//   dob: "2022",
//   add: "Sydney",
//   owner: "Merry",
// };

// const poloCat = new Animal(catObj);
// console.log(poloCat.bio());

// Functional Programming (FP)

// const samObj = {
//   name: "Sam",
//   age: 22,
//   dob: "2002",
//   add: "Sydney",
//   partner: "Emily",
// };

// const living = (name) => {
//   return `Living with my partner ${name}`;
// };
// const bio = ({ name, add, age, partner }) => {
//   return `Hey, this is ${name} from ${add} and I am ${age} years old, ${living(
//     partner
//   )}`;
// };

// const samBio = bio(samObj);
// console.log(samBio);

// Pure Function
// let counter = 0;
// const add = (x, y) => {
//   counter++;
//   return x + y;
// };

// add(2, 3);
// add(2, 3);
// const result = add(2, 3);
// console.log(`The sum of 2 + 3 = ${result}`, counter);

// Side effects

// // High order function
// [234, 456, 789].map((item, i) => {
//   console.log(item, i);
// });

// const add = (a, b) => {
//   return a + b;
// };

// const subs = (a, b) => {
//   return a - b;
// };

// const calc = (fn, a, b) => {
//   return fn(a, b);
// };

// // const result = calc(add, 5, 6);
// const result = calc(subs, 5, 6);
// console.log(result);

//add the values and return the multiply function
const addAndMultiply = (num1, num2) => {
  const sum = num1 + num2;
  const multiply = (multiplier) => {
    return sum * multiplier;
  };

  return multiply;
};

const value = addAndMultiply(3, 5)(3);
console.log(value);
// console.log(value(1));
// console.log(value(2));
// console.log(value(3));
// Recursion
