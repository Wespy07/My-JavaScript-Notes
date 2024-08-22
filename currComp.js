// function currying

// const add = function (a) {
//     return function (b) {
//         return function (c) {
//             console.log(a + b + c);
//         }
//     }
// }


// // console.log(add(1)(2)(3))
// add(1)(2)(3)


// const adder = a => b => b ? adder(a + b) : a

// console.log(adder(2)(4)(6)(8)(9)());



// function composition 

function multiply(args) {
    return args[0] * args[1]
}

function square(val) {
    return val * val
}

function addFive(a) {
    return a + 5
}

function compose(fn1, fn2) {
    return function (a, b) {
        return fn2(fn1(a, b))
    }
}

let c2f = (fn1, fn2) => (a, b) => fn2(fn1(a, b))

let task = c2f(multiply, square);
// console.log(task(2, 3));


function compose2(...fns) {
    return function (...a) {
        return fns.reduceRight((a, b) => b(a), a)
    }
}


const task2 = compose2(multiply, square, (val) => {return val + 1})
console.log(task2(2, 3));