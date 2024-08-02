
// num = 5
// console.log(num);

// let age = prompt('How old are you?', 100);

// alert(`You are ${age} years old!`)

// let  num = 3
// num++ 
// console.log(num);

// num++
// console.log(num);

// console.log(null>0); // false
// console.log(null==0); // false
// console.log(null>=0); // true

// let userName = 'John';

// function showMessage() {
//   userName = "Bob"; // changed the outer variable
//   let message = 'Hello, ' + userName;
//   console.log((message));
// }

// console.log(( userName) ); // John before the function call

// showMessage();

// console.log(( userName) ); // Bob, the value was modified by the function

// prime numbers 
// function showPrimes(n) {
//     nextPrime: for (let i = 2; i < n; i++) {
//         for (let j = 2; j < i; j++) {
//             if (i % j == 0) continue nextPrime;
//         }
//         console.log((i)); // a prime
//     }
// }
// showPrimes(30)

'use strict'
// {
//     function sayHi(){
//         console.log('Hiiiii');
//     }
//     sayHi()
// }
// sayHi()

// SayCool()
// function SayCool() {
//     console.log('Cool');
// }


// let obj = {
//     name: 'Alex',
//     age: 21,
//     'likes birds': true,
// }
// obj.city = 'denver'
// // console.log(obj["likes birds"]);
// delete obj.age
// // console.log(obj);


// function makeUser(name, age) {
//     return {
//         'name': name,
//         'age': age,
//     };
// }
// // let user = makeUser("John", 30);

// let user = { name: "John", age: 30 };
// console.log(("age" in user)); // true, user.age exists
// console.log(("blabla" in user)); // false, user.blabla doesn't exist

// let obj2 = {
//     test: undefined
// };
// console.log((obj2.test)); // it's undefined, so - no such property?
// console.log(("test" in obj2)); // true, the property does exist!



// clone an object 
let user = {
    name: "John",
    age: 30
};
let clone = {}; // the new empty object
// let's copy all user properties into it
for (let key in user) {
    clone[key] = user[key];
}
// --------------------------------------------------------------------
function sayHi() {
    // console.log('Hellooooo!!!!!!');
}
user.sayHi = sayHi
user.sayHi()


// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
// }
// let user = new User("Jack");
// alert(user.name); // Jack
// alert(user.isAdmin); // false

// console.log(console.log(5) || null || console.log(10)); 

// for (let i = 0; i < 3; i++) {
//     console.log(i);
// }
// for (let i = 0; i < 3; ++i) {
//     console.log(i);
// }


// prime numbers 
function showPrimes(n) {
    prime: for (let i = 2; i < n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue prime;
        }
        console.log((i));
    }
}
showPrimes(15)

// pow(3,2) = 3 ** 2 = 3*3 = 9
// function pow(a, b) {
//     return a ** b
// }
// console.log(pow(3, 2));


// why can we use toUpperStr on strings which is primitive data type and primitives dont have methods associated to them? 
// In JavaScript, primitives like strings have methods because they are temporarily wrapped in their corresponding object type (e.g., `String` object) when a method is called. This process is called "boxing." Once the method call is completed, the object is discarded, and the primitive value remains.\

let stringf = `abcdef`
console.log(stringf.at(-1));
console.log(stringf.charAt(2));

let myhi = 'Hi'
myhi = 'h' + myhi[1]
// console.log(myhi); // hi

let firstName = 'Alice';
let lastName = 'Johnson';
// object shorthand
let person = { firstName, lastName };
console.log(person);


// str.substring(start [, end])
// Returns the part of the string between start and end (not including end).

// This is almost the same as slice, but it allows start to be greater than end (in this case it simply swaps start and end values).
// let str = "stringify";
// // these are same for substring
// alert( str.substring(2, 6) ); // "ring"
// alert( str.substring(6, 2) ); // "ring"
// // ...but not for slice:
// alert( str.slice(2, 6) ); // "ring" (the same)
// alert( str.slice(6, 2) ); // "" (an empty string)
// str.substr(start [, length])
// Returns the part of the string from start, with the given length.
// let str = "stringify";
// alert( str.substr(2, 4) ); // 'ring', from the 2nd position get 4 characters

// let arr = ["I", "study", "JavaScript", "right", "now"];
// arr.splice(0, 3, "Let's", "dance");
// console.log(arr);


// let arr = ["I", "study", "JavaScript"];
// from index 2
// delete 0
// then insert "complex" and "language"
// arr.splice(2, 0, "complex", "language");
// alert( arr ); // "I", "study", "complex", "language", "JavaScript"

// let arr = [1,2,3,4,5,6,11,23,15,24,18,26,13,29]
// arr.sort((a,b) => a-b)
// console.log(arr);

// let myObj = {
//     name: 'ash',
//     age: 29,
//     city: 'denver'
// }
// console.log(Object.keys(myObj));
// console.log(Object.values(myObj));
// console.log(Object.entries(myObj));

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
function sumSalaries(a) {
    return Object.values(a).reduce((a, b) => a + b)
}
console.log(sumSalaries(salaries)); // 650

function count(a) {
    return Object.keys(a).length
}
console.log(count(salaries)); // 3

// -------------------------------------------
let start = new Date();
for (let i = 0; i < 1; i++) {
    let doSomething = i * i * i;
    console.log(doSomething);
}
let end = new Date();
console.log((`The loop took ${end - start} ms`));

//new Date(year, month, date, hour, minute, second, millisecond)
let d1 = new Date(2012, 1, 20, 3, 12);
console.log(d1);
//new Date(datastring)
let d2 = new Date("2012-02-20T03:12");
console.log(d2);


let theArray = {
    name: 'kakashi',
    aka: 'copy ninja',
    age: 33,
    toString: function () {
        return `name: ${this.name} & also known as:${this.aka}`
    }
}
// console.log(theArray.toString());    
const json = JSON.stringify(theArray)
console.log(typeof json, ':', json);


// var a = 1
// var a = 3
// console.log(a);

// IIFE
// (function () {
//     var message = "Hello";
//     console.log(message);
// })();


