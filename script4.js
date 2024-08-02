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







