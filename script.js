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

const pet = "cow";

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
const hi = " hi there ";
const hey = 'I\'m "bikal" from sydney ';
const str = hi + hey;
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
const value = str.toLowerCase();

console.log(str);
console.log(value);
// Array[]
// Length, push , pop, shift, unshift, toString, join,[], splice, slice, indexOf
// Short, reverse
// forEach, map
// Filter, reduce, every
// forOf
