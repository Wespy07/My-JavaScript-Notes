// ********************************************* JS Code Box *********************************************

// function http2htttps(str){
//     if(str.startsWith('http')){
//         return str.replace('http', 'https')
//     } else {
//         return str
//     }
// }

// console.log(http2htttps('http://www.google.com'));


// let arr = [1,2,3,4,5,6,7,8,9,10]

// function odd(array){
//     return array.filter((num => num%2!==0).length)
// }


// function easyLoop() {
//     let res =''
//     for (let i = 0; i <= 99; i++) {
//         if(i % 7 === 0){
//             res += i.toString()
//         }
//     }
//     return res
// }

// console.log(easyLoop());



// function strangeWord(word) {
//     let res = ''
//     for (let i = 0; i < word.length; i++) {
//         if (i === 0 || i % 2 === 0) {
//           res += word[i] 
//         } 
//     }
//     return res
// }



// console.log(strangeWord('Challenge'));
// for (let i = 0; i < 10; i++) {
//     if(i % 5 === 0){
//         console.log(i);
//     }
// }


// function more4than0(arr) {
//     const all4s = arr.filter(num => num === 4).length
//     const all0s = arr.filter(num => num === 0).length
//     return all4s > all0s
// }

// console.log(more4than0([1, 2, 3, 4, 4, 4, 4, 5, 6, 0, 0, 0]));


// function reverseString(str) {
//     return [...str].reverse()
// }
// console.log(reverseString('hello'));
// // ['o','l','l','e','h']



// function goldenMiddle (a,b){
//     let middleIndex = Math.floor(a.length / 2);
//     return [a[middleIndex], b[middleIndex]]
// }
// console.log(goldenMiddle([1,2,3], ['a', 'b','c']));


// function printHeadline(headline){
//     const makeHeadline = document.createElement('h1')
//     makeHeadline.innerText = `${headline}`
//     document.body.appendChild(makeHeadline)
// }

// printHeadline('headline')



// function firstJSON(key, value) {
//     return JSON.stringify({ key: value });
// }
// console.log(firstJSON('key', 'value'));


// const obj = {
//     name: "dirt",
//     category: "alpha"
// };
// function theGround(obj) {
//     const nameLength = obj.name.length
//       const catLength = obj.category.length

//       if (nameLength > catLength) {
//           return obj.name
//       } else if (nameLength === catLength) {
//           return obj.name
//       } else {
//           return obj.category
//       }
//   }
// console.log(theGround(obj));



// const add = new function (a, b) {
//     this.city = 'Delhi',
//     this.country = 'India'
// }
// console.log(add); // {city: 'Delhi', country: 'India'}

// function add2(a, b) {
//     return a + b
// }
// console.log(new add2(2, 2)); // add2 {}

// const add3 = new function (a, b) {
//     return a + b
// }
// // console.log(add3(2,2)); // TypeError: add3 not a function
// console.log(add3); // {}

// const add4 = new function (a, b) {
//     this.city = a,
//     this.country = b
// }
// // console.log(add4(2,2)); // TypeError: add4 not a function
// console.log(add4); // {city: undefined, country: undefined}



// Create an object with the following characteristics: 4 wheels (named wheels as integer), 100PS power (named power and integer), 3 doors (named doors as integer). Return the built car.
// function buildingACar(a, b, c) {
//     const car = {}
//     car.wheels = a,
//     car.power = b,
//     car.doors = c
//     return car
// }
// console.log(buildingACar(4, 100, 3));
// console.log(buildingACar(5, 10, 50));



// function buildingACar2() {
//     const car = {
//         wheels: 4,
//         power: 100,
//         doors: 3
//     };
//     return car;
// }
// console.log(buildingACar2());


// function hangman(str) {
//     return str.split('').map((elem, index) => index %2 ===0 ? '_' : elem).join('')
// }
// console.log(hangman('hangman'));

// function camelCase(str) {

//     const fudduFormat = str.split('').map((elem, index) => (elem === ' ') ? ' ' : (index % 2 !== 0) ? elem.toUpperCase() : elem.toLowerCase()).join('')

//     const camelFormat = str.split(' ').map((elem, index) => index === 0 ? elem : elem[0].toUpperCase() + elem.slice(1).toLowerCase()).join('')

//     return `Fuddu Format: ${fudduFormat}, camel Format: ${camelFormat}`
// }
// console.log(camelCase('HanG MAN is DeaD'));


// function any() {
//     let a = 1
//     let b = 2
//     c = 99
//     console.log(c);
//     console.log(a);
//     console.log(b);

// }
// any()
// console.log(c);
// console.log(a);
// console.log(b);


// let string = 'pappu'
// let number = 44
// let boolean = true;
// let array = [1, 2, 3, 4]
// let object = { a: 1 }
// let anotherObject = { 
//     b: 2,
//     multiply2n3: function(){
//         console.log(2*3);
//     }
// }
// let add = function () { return 2 + 1 }

// Object.prototype.meraFunction = function () {
//     console.log('this is a custom function inside prototype');
// }

// object.meraFunction() // this is a custom function inside prototype
// array.meraFunction() // this is a custom function inside prototype
// string.meraFunction() // this is a custom function inside prototype
// number.meraFunction() // this is a custom function inside prototype
// boolean.meraFunction() // this is a custom function inside prototype
// add.meraFunction() // this is a custom function inside prototype
// 'hello'.meraFunction() // this is a custom function inside prototype




// let object = { a: 1 }
// let anotherObject = { 
//     b: 2,
//     multiply2n3: function(){
//         console.log(2*3);
//     }
// }

// Object.setPrototypeOf(object, anotherObject)

// anotherObject.multiply2n3() // 6
// object.multiply2n3() // error






// let user = {
//     name: "John",
//     age: 30
// };

// let clone = {}; 

// for (let key in user) {
//   clone[key] = user[key];
// }

// // clone.name = "Pete";     
// console.log(user);
// console.log(clone);


// let user = { name: "John" };

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };

// // copies all properties from permissions1 and permissions2 into user
// Object.assign(user, permissions1, permissions2);

// console.log(user);



// Q.) Print only the original elements of an array
// const arr = [1, 2, 3, 4, 5, 6]
// Array.prototype.customProto = 'This is a custom prototype' // made a prototype of array, this should be excluded

// for (let key in arr) {
//     if (arr.hasOwnProperty(key)) { // excludes the prototype inheritance and prints only the original array elements 
//         console.log(arr[key]);  // correct approach
//     }
// }
// ------------------------------------------------------------------------------------------------------

// const myArray = [1, 2, 3, 4, 5, 6]
// Array.prototype.customForLoop = function () {
//     for (let i = 0; i < this.length; i++) {
//         console.log(this[i]);
//     }
// }
// myArray.customForLoop(myArray)

// ------------------------------------------------------------------------------------------------------

// const repeat = (num, func) => {
//     let i = 0;
//     while (i < num) {
//         func();
//         i++;
//     }
// };

// const repeat = (num, func) => {
//     for(let i=0;i<num;i++){
//         func()
//     }
// }

// repeat(3, () => {
//     console.log(1,2,3);
// });
// ------------------------------------------------------------------------------------------------------

// const array = [1, 2, 3, 4, 5, 6];
// console.log(array);

// function reducer(accumulator, currentValue, index) {
//     const returns = accumulator + currentValue;
//     console.log(
//         `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
//     );
//     return returns;
// }

// array.reduce(reducer);

// ------------------------------------------------------------------------------------------------------

// const words = ['Hello', 'world', 'from', 'JavaScript'];

// const reversedSentence = words.reduceRight((accumulator, currentValue) => {
//     return accumulator + ' ' + currentValue;
// });

// console.log(words.join(' '));
// console.log(words.reduce((a, b) => `${b} ${a}`));
// console.log(reversedSentence); 

// ------------------------------------------------------------------------------------------------------

// const arrayNums = [1, 2, 3, 4];
// Array.prototype.customReduce = function (callback, initial) {
//     let a, b
//     if (a + b) {
//         callback((a, b) => a + b), initial = 0
//     }
// }

// console.log(arrayNums.customReduce((a, b) => a + b));

// console.log(arrayNums.reduce((a, b) => a + b, 0));
// // console.log(arrayNums.reduce(callback, initial));

/////////////////////////////////////////

// ***************************************** custom reduce method *****************************************

// Array.prototype.customReduce = function (callback, initialValue) {

//     let accumulator = (initialValue !== undefined) ? initialValue : this[0];
//     let startIndex = (initialValue !== undefined) ? 0 : 1;

//     for (let i = startIndex; i < this.length; i++) {
//         accumulator = callback(accumulator, this[i]);
//     }

//     return accumulator;
// }

// const numbers = [1, 2, 3, 4];
// console.log(numbers.customReduce((a, b) => a + b));

// ------------------------------------------------------------------------------------------------------

// a = 5 // a gets attached to the global space
// console.log(a); // no error 
// // ---------------------------
// 'use strict'
// a = 5 // a will not be attached to the global space because of 'use strict'
// console.log(a); // error

// ------------------------------------------------------------------------------------------------------

// 1st approach - making it an IIFE
// for (var i = 1; i <= 3; i++) {
//     (function (x) {
//         setTimeout(() => {
//             // console.log(x);
//         }, 1000);
//     })(i)
// }
// -------------------------------------------
// // 2nd approach - wihtout making it an IIFE
// for (var i = 1; i <= 3; i++) {
//     function a(x) {
//         setTimeout(() => {
//             console.log(x);
//         }, 1000);
//     }
//     a(i)
// }

// ------------------------------------------------------------------------------------------------------
// // approach 1 - using only fetch 
// fetch('https://api.openweathermap.org/data/2.5/weather?q=london&appid=10605351d9de0e34158b432ad1be208f&units=metric')
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log('error idhar: ' + err))


// // approach 2 - using promises 
// function fetchWeather() {
//     return new Promise((resolve, reject) => {
//         fetch('https://api.openweathermap.org/data/2.5/weather?q=london&appid=10605351d9de0e34158b432ad1be208f&units=metric')
//             .then((res) => res.json())
//             .then((data) => resolve(data))
//             .catch((err) => reject(err));
//     });
// }
// fetchWeather()
//     .then((data) => console.log(data))
//     .catch((err) => console.log('error idhar: ' + err));


// // approach 3 - using async/await 
// async function fetchWeather() {
//     try {
//         const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=london&appid=10605351d9de0e34158b432ad1be208f&units=metric');
//         const data = await response.json();
//         return data;
//     } catch (err) {
//         throw new Error('error idhar: ' + err);
//     }
// }
// fetchWeather()
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err.message)); 

// LETS RACE ALL THESE APPROACHES AND SEE WHICH IS THE FASTEST ****************************************************
const fetchDirect = fetch('https://api.openweathermap.org/data/2.5/weather?q=london&appid=10605351d9de0e34158b432ad1be208f&units=metric')
    .then((res) => res.json())
    .then((data) => ({ method: 'fetchDirect', data }))
    .catch((err) => ({ method: 'fetchDirect', error: 'error idhar: ' + err }));

function fetchWeatherPromise() {
    return new Promise((resolve, reject) => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=london&appid=10605351d9de0e34158b432ad1be208f&units=metric')
            .then((res) => res.json())
            .then((data) => resolve({ method: 'fetchWeatherPromise', data }))
            .catch((err) => reject({ method: 'fetchWeatherPromise', error: 'error idhar: ' + err }));
    });
}

const fetchPromise = fetchWeatherPromise();

async function fetchWeatherAsync() {
    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=london&appid=10605351d9de0e34158b432ad1be208f&units=metric');
        const data = await response.json();
        return { method: 'fetchWeatherAsync', data };
    } catch (err) {
        throw { method: 'fetchWeatherAsync', error: 'error idhar: ' + err };
    }
}

const fetchAsync = fetchWeatherAsync();


Promise.race([fetchDirect, fetchPromise, fetchAsync])
    .then((result) => console.log(result))
    .catch((err) => console.log('An unexpected error occurred:', err));
// 'fetchDirect' IS THE FASTEST OF THESE THREE  