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

class Living {
  constructor({ name, age, dob, add }) {
    this.name = name;
    this.age = age;
    this.dob = dob;
    this.add = add;
  }
}
class Human extends Living {
  constructor({ partner, ...rest }) {
    super(rest);
    this.partner = partner;
  }

  bio() {
    return `Hey, this is ${this.name} from ${this.add} and I am ${this.age} living with my partner ${this.partner}`;
  }
}

const samObj = {
  name: "Sam",
  age: 22,
  dob: "2002",
  add: "Sydney",
  partner: "Emily",
};

const samInstance = new Human(samObj);

console.log(samInstance);

class Animal extends Living {
  constructor({ owner, ...rest }) {
    super(rest);
    this.owner = owner;
  }

  bio() {
    return `Hey, this is ${this.name} from ${this.add} and I am ${this.age} years old, living with its owner ${this.owner}`;
  }
}

const catObj = {
  name: "Polo",
  age: 2,
  dob: "2022",
  add: "Sydney",
  owner: "Merry",
};

const poloCat = new Animal(catObj);
console.log(poloCat.bio());
