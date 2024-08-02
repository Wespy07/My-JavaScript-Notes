// Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
// function divideTwoNums(a, b) {
//     try {
//         if (b === 0) {
//             throw new Error(`The denominator can't be zero.`)
//         } else {
//             return a / b
//         }
//     } catch (error) {
//         return error
//     }
// }
// console.log(divideTwoNums(1, 0));


// function divideTwoNums(a, b) {
//     try {
//         if (b === 0) {
//             return error
//         } else {
//             return a / b
//         }
//     } catch (error) {
//         return `Error: The denominator can't be zero.`
//     }
// }
// console.log(divideTwoNums(1, 0));



// let message;

// if () {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

// let message = (login == 'Employee') ? 'Hello' : (login == 'Director') ? 'Greetings' : (login == '') ? 'No login' : ''

// for (let i = 0; i < 5; i++) console.log(i)
// console.log('---------------------------');
// for (let i = 0; i < 5; ++i) console.log(i)
// console.log('---------------------------');
// for (let i = 0; i < 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }
// console.log('---------------------------');
// let i = 0
// while (i < 3) {
//     console.log(i);
//     i++
// }
// console.log('---------------------------');
// // prime numbers
// let n = 19;
// for (let i = 2; i <= n; i++) {
//   let isPrime = true;
//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//       isPrime = false;
//     }
//   }
//   if (isPrime) {
//     console.log(i);
//   }
// }

let salaries = {
    John: 50,
    Ann: 10,
    Pete: 10,
    random: 80
}
function sum(a) {
    let sum = 0
    for (const key in a) {
        sum += a[key]
    }
    return sum
}
// console.log(sum(salaries));

// **************************writeable: false in objects************************************************************
// let user = {
//     name: "John",
//     age: 38
// };
// // console.log(Object.getOwnPropertyDescriptors(user));
// console.log(user.name);
// Object.defineProperties(user, {
//     'name': {
//     writable: false
// }, 'age': {
//     writable: false
// }
// })
// user.name = 'alex' // name will not change 
// user.age = 49 // age will not change
// console.log(user.name);
// console.log(user.age);
// ---------------------------------- use for each to select all properties ---------------------------------------
// let userAlex = {
//     name: "John",
//     age: 38,
//     a:1,
//     b:2,
//     c:3,
//     d:4,
//     e:5,
//     f:6,
//     g:7,
//     h:8
// };
// console.log(userAlex);

  