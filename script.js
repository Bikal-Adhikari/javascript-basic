// Single  comment
//console.log("shhshshsh");

/*Multiple line comment
alert("hehehe");*/

// Variable (only char, num, $ _)
// Var  name = “prem”
// Let name = “prem”
// Const  lastName = “acharya”

// var name = "Bikal Adhikari";
// let add = "sydney";
// const dob = "2020-20-2";

// console.log(name, add, dob);

// name = "sam";
// add = "new york";
// // dob = "1998-05-30";
// console.log(name, add);

// Arithmetic
// +	Addition
// -	Subtraction
// *	Multiplication
// **	Exponentiation (ES2016)
// /	Division
// %	Modulus (Division Remainder)
// ++	Increment
// --	Decrement

// console.log(5 + 3);
// let a = 5;
// const b = 3;

// // const ans = a + b;
// // const ans = a - b;
// // const ans = a * b;
// // const ans = a / b;
// // const ans = a ** b;
// // const ans = a % b;
// // a++;
// a--;
// // console.log(a++);
// console.log(--a);
// console.log(a);

// Comparisons
// ==
// ===
// >, >=
// <, <=

// let a = 5;
// const b = 5;

// const result = a == b;
// const result = a > b;
// const result = a >= b;
// const result = a <= b;
// console.log(result);

// Data types
// Primitives
// String  		// “prem acharya”
// Number 	//123
// Boolen		// true or false
// Undefined	// not defined in system memory
// Null  		// defined in system memory but no value assigned

// console.log(typeof `sfdf`);
// console.log(typeof sf);
// console.log(typeof true);
// console.log(typeof "true");

// console.log(typeof null);

// let name = "Bikal";
// const age = 25;
// const p2 = name;
// console.log(name, p2);

// name = "John";
// console.log(name, p2);

// Reference Types
// Object 		//{key:”value”}

// const person = {
//   name: "Bikal",
//   age: 20,
// };
// person2 = person;

// console.log(person2, person);
// person.name = "John";
// console.log(person2, person);

// Array		//[“data”, 1232, {}, []]

// const person = ["Bikal", 25, ["apple", "banana"]];
// console.log(person);
// Function 	// function()
// Es6 	// const sayHi ()=> “hi”

// const result = Math.PI;

// const result = Math.round(4.7);
// const result = Math.ceil(4.4);
// const result = Math.floor(4.7);
// const result = Math.pow(8, 2);
// const result = Math.sqrt(64);

// const result = Math.min(0, 150, 30, 20, -8, -200);
// const result = Math.max(0, 150, 30, 20, -8, -200);
// const result = Math.random() * 100; //0 - 9.999....

// console.log(result);

// Logical Operators
// &&
// ||
// !
// Ternary

// conditional Statements

// truthy: "absa", 10, true, {}, [], ()=>{}
// falsy:"", 0, false, undefined, null

// const age = 17;

// const g = "f";
// If
// if (age >= 18 && g === "f") {
// if (age >= 18 || g === "f") {
//   console.log("Welcome to party!!");
// }
// if (age) {
//   console.log("Welcome to party!!");
// }
// If else
// if (age >= 18) {
//   console.log("Welcome to party!!");
// } else {
//   console.log("sorry you are not allowed");
// }

// if (age >= 18) {
//   console.log("Welcome to party!!");
// } else {
//   console.log("sorry you are not allowed");
// }

//   condition ? "if true...." : "if false..."

// age >= 18
//   ? console.log("Welcome to party!!")
//   : console.log("sorry you are not allowed");

// Else if

// const pet = "cow";

// if (pet === "cat") {
//   console.log("Meow!");
// } else if (pet === "dog") {
//   console.log("Woof");
// } else if (pet === "cow") {
//   console.log("mowowowow");
// } else {
//   console.log("duyvsviuhak buidvbdsic");
// }
// Switch

// switch (pet) {
//   case "cat":
//     console.log("Meow!");
//     break;
//   case "dog":
//     console.log("Woof");
//     break;
//   case "cow":
//     console.log("Moooowwww" + "!");
//     break;

//   default:
//     console.log("duyvsviuhak buidvbdsic");
// }

// Error Handling
// try {
//   //code block
//   const name = "Bikal";
//   console.log(name);
//   //   console.log(first);
//   throw new Error("token expired");
// } catch (error) {
//   //catch error and handle
//   console.log(error.message);

//   if (error.message.includes("token expired")) {
//     console.log("send text");
//   }
// } finally {
//   //run finally regardless
//   console.log(Date(), "function executed successfully");
// }

// Scheduling
// setTimeout
// console.log("before st");
// setTimeout(() => {
//   console.log("after st");
// }, 2000); //2s
// clearTimeout
// setInterval

// let counter = 0;
// let counterInterval = setInterval(() => {
//   console.log(counter++);
//   if (counter == 5) {
//     clearInterval(counterInterval);
//   }
// }, 1000);

// clearInterval

// JS - ES6
// Let, Const
// Arrow function

// function bio() {
//   console.log("hey this is Bikal from australia");
//   return "its done";
// }

// const bio = () => "Hey I'm bikal from Australia";
// const bio = () => {
//   return "Hey I'm bikal from Australia";
// };
// const result = bio();
// console.log(result);

// Template literals

// const bio = (name, place) => {
//   //   return "hey this is " + name + " from " + place;
//   return `hey this is ${name} from ${place}`;
// };
// const p1 = bio("Bikal", "Australia");
// console.log(p1);
// const p2 = bio("John", "UK");
// console.log(p2);

// Destructuring

// Default + Rest + Spread

// Loops
// for(i = 0; i < cars.length; i++)

// for (let i=0; ConditionRule; ++ --)
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// for (let i = 0; i < 10; i++) {
//   //   console.log(i);
//   //   if (i % 2 == 0) {
//   //     continue;
//   //   }
//   if (i == 6) {
//     break;
//   }
//   console.log(i);
// }

// for/in for (x in person) → for object
// for /of for (x of cars) → for array

// while (condition)
// let i = 0;
// while (i < 10) {
//   console.log(i++);
// }

// do/while | do{}while()
// let i = 0;
// do {
//   console.log(i++);
// } while (i < 10);
// Break out of loop
// Continue, in loop to exit 1 loop
// Break, break out the loop or switch

// Data Manipulation

// Number
// safe number  -2^53 -1 to 2^53 -1
// const num = 874_979_379_376_937;
// console.log(num);
// ParseInt, float

// NaN: Not a Number; isNaN()
// const num = "5.4w";
// const ans = +num;
// const ans = Number(num);
// const ans = isNaN(num);
// const ans = parseInt(num);
// const ans = parseFloat(num);
// console.log(ans);

// String
// const hi = " hi there ";
// const hey = 'I\'m "bikal" from sydney ';
// const str = hi + hey;
// console.log(str);

// Escape character
// Length

// console.log(str.length);

// indexOf, lastIndexOf, search
// const value = str.indexOf("e");
// const value = str.lastIndexOf("Sydney");
// const value = str.search("sydney");

// charAt, [], split

// const value = str[26];
// const value = str.charAt[20];

// const value = str.split("bikal");

// Slice, substring, substr

// const value = str.slice(3, 5);
// const value = str.slice(3);
// const value = str.substring(3, 5);
// const value = str.substr(3, 5);

// Replace, contact, trim
// const value = str.replace("bikal", "Adhikari");
// const value = str.replace("e", "u");
// const value = str.replaceAll("e", "u");
// const value = str.trim().length;

// toUpperCase, toLowerCase

// const value = str.toUpperCase();
// const value = str.toLowerCase();

// console.log(str);
// console.log(value);

// Array[]

// const arg = [
//   "sdfsfs",
//   888,
//   true,
//   null,
//   undefined,
//   [789, 67467],
//   {
//     name: "John",
//     skills: ["html", "css"],
//   },
// ];

// // console.log(arg, arg[5][0]);
// // console.log(arg, arg[6].skills[1]);
// // console.log(arg, arg[6]["skills"][1]);

// const fruits = ["banana", "apple", "orange", "pear"];
// // const fruits = ["banana", "34", "5", "apple", "orange", "pear"];
// const veg = ["potato", "tomato"];
// Length, push , pop, shift, unshift, toString, join,[], splice, slice, indexOf
// const value = fruits.length;
// fruits.push("grape");
// fruits.unshift("mango");

// const value = fruits.pop();
// const value = fruits.shift();
// const value = fruits.toString().split(",");
// const value = fruits.join("-").split("-");
// const value = fruits.slice(1, 3);
// const value = fruits.splice(1, 3);
// const value = fruits.splice(1, 0, "watermelon");
// const value = fruits.indexOf("apple");

// Sort, reverse

// fruits.sort((a, b) => b - a);
// fruits.reverse();

// For
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// forEach, map

// fruits.forEach((item, index) => {
//   console.log(item, index);
// });

// const newArg = fruits.map((item, i) => {
//   //   return item.toUpperCase();
//   return "ID-" + item.toUpperCase();
// });

// console.log(fruits, newArg);

// Filter, reduce, every
// const newArg = fruits.map((item, i) => {
//   if (item.includes("n")) {
//     return item;
//   }
// });

// const newArg = fruits.filter((item, i) => {
//   //   if (item.includes("n")) {
//   //     return item;
//   //   }
//   return item.includes("n");
// });

// const newArg = fruits.filter((item, i) => item.includes("n"));

// const money = [234, 456, 678, 910];
// const total = money.reduce((subTtl, item) => {
//   return subTtl + item;
// }, 0);

// console.log(total);

// const result = fruits.every((item) => item.includes("a"));
// console.log(result);

// forOf

// for (let value of fruits) {
//   console.log(value);
// }

// console.log(fruits);

// console.log(fruits, newArg);

// const dt = Array(100).fill("😊");
// console.log(dt);

// Challenge #1
//1. Create an array of 50 random numbers range between 1 and 100 programmatically
//2. Sort the array in the descending order
//3. Get the total value of array
// 4. Create odd numbers and even numbers array based on the original array
// 5. remove all the duplicate and create new array

// const arr = [];
// for (i = 0; i < 50; i++) {
//   arr[i] = Math.ceil(Math.random() * 100 + 1);
// }

// console.log(arr);

// const desd = arr.sort((a, b) => b - a);
// console.log(desd);

// const total = desd.reduce((subTtl, item) => {
//   return subTtl + item;
// }, 0);

// console.log(total);

// let oddarr = [];
// let evnarr = [];
// for (i = 0; i < 50; i++) {
//   if (arr[i] % 2 === 0) {
//     evnarr = [...evnarr, arr[i]];
//   } else {
//     oddarr = [...oddarr, arr[i]];
//   }
// }

// console.log(oddarr);
// console.log(evnarr);

// for (i = 0; i < 50; i++) {}

// Challenge #2
// Create an array of 50 unique random numbers range between 1 and 100 programitically

// Challenge #1
//1. Create an array of 50 random numbers range between 1 and 100 programmatically

// const numArg = [];
// for (let i = 0; i < 50; i++) {
//   const num = Math.floor(Math.random() * 100) + 1;
//   numArg.push(num);
// }
// console.log(numArg);

//2. Sort the array in the descending order

// numArg.sort((a, b) => a - b);
// console.log(numArg);

//3. Get the total value of array

// const total = numArg.reduce((subttl, num) => {
//   return subttl + num;
// }, 0);

// console.log(total);
// 4. Create odd numbers and even numbers array based on the original array

// const even = numArg.filter((num) => {
//   return num % 2 === 0;
// });

// const odd = numArg.filter((num) => {
//   return num % 2 !== 0;
// });

// console.log(even, odd);

// 5. remove all the duplicate and create new array

// const noDuplicateArg = [...new Set(numArg)];
// console.log(noDuplicateArg);

// const noDuplicateArg = [];
// for (let i = 0; i < numArg.length; i++) {
//   const n = numArg[i];
//   if (!noDuplicateArg.includes(n)) {
//     noDuplicateArg.push(n);
//   }
// }

// console.log(noDuplicateArg);

// Challenge #2
// Create an array of 50 unique random numbers range between 1 and 100 programitically

// const uniqueArray = [];
// for (let x = 0; uniqueArray.length < 50; x++) {
//   const num = Math.floor(Math.random() * 100) + 1;
//   if (uniqueArray.indexOf(num) === -1) {
//     uniqueArray.push(num);
//   }
// }

// console.log(uniqueArray);

// const uniqueArray = [];
// let counter = 0;
// while (uniqueArray.length < 50) {
//   counter++;
//   const num = Math.floor(Math.random() * 100) + 1;
//   if (uniqueArray.indexOf(num) === -1) {
//     uniqueArray.push(num);
//   }
// }
// console.log(counter);
// console.log(uniqueArray);

// Challange #3

// debugger;

// console.log("1. first one");

// const hehe = () => {
//   console.log("2. hehe fuctioin");
// };

// setTimeout(() => {
//   console.log("3. set time out");
// }, 5000);

// const yoyo = () => {
//   console.log("4. hehe fuctioin");
// };
// console.log("5. after yoyo");
// yoyo();
// setTimeout(() => {
//   console.log("6. set time out");
// }, 0);
// hehe();
// console.log("7. last line");

// Objects{}

// const obj = {
//   name: "Bikal",
//   phon: 93887482,
// };

// console.log(obj.name);
// console.log(obj["phon"]);

const person = {
  name: "Bikal Adhikari",
  number: 73625727,
  add: "1 Georgr st, Sydney",
  married: false,
  skills: ["html", "css", "js"],
  parents: {
    father: "Harry",
    mother: "Merry",
  },
};

console.log(person);
person.age = 20;
// Property, assign, delete, copy, convert to array, loop

// person.name = "Sam Smith";
// person.skills.push("React");
// // delete person.married;
// console.log(person);
// console.log(person["name"]);

// const newPerson = Object.assign({}, person);

// Default + Rest + Spread

//Rest
// const { married, ...newPerson } = person;
// console.log(married, newPerson);

//Spread
// const newPerson = { ...person };
// newPerson.name = "Bikal";
// console.log(newPerson);

//loop

// for (let key in person) {
//   console.log(key, person[key]);
// }

// convert to array

// const keyArg = Object.keys(person);
// keyArg.map((item) => console.log(person[item]));
// console.log(keyArg);

// const keyArg = Object.values(person);
// keyArg.map((item) => console.log(item));
// console.log(keyArg);

// const argss = Object.entries(person);
// console.log(argss);
// Destructuring
// Date()
// Formate
// Get Methods
// Set Methods

// Default + Rest + Spread

// const bio = ({ a, n }) => {
//   //   const { a, n } = pObj;
//   //   return ` Hi there, this is ${name} from ${add}`;
//   return ` Hi there, this is ${n} from ${a}`;
// };

// const parents = ({ f, m }) => {
//   return `Their parents are ${f} and ${m}`;
// };
// const bio = ({ a = "n/a", n, ...rest }) =>
//   ` Hi there, this is ${n} from ${a} ` + parents(rest);

// const bikalObj = {
//   n: "Bikal",
//   a: "Sydney",
//   f: "Sam",
//   m: "Merry",
// };

// // const bikalBio = bio(bikalObj.n, bikalObj.a);
// const bikalBio = bio(bikalObj);
// console.log(bikalBio);

// const bikObj = {
//   n: "John",
//   f: "ram",
//   m: "sita",
// };

// const johnBio = bio(bikObj);
// console.log(johnBio);

const career = {
  position: "Developer",
  started: "22-02-2023",
};

// combine to new one object

const combo = { ...person, ...career };
console.log(combo);

const a1 = [245, 567, 789];
const a2 = [455, 234, 2134];

const na = [...a1, ...a2];
console.log(na);
