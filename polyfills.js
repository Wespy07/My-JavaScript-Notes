// https://medium.com/@tapanprakasht/polyfill-for-map-filter-and-reduce-in-javascript-4b30f7f7f718
// https://dev.to/abhishekraj272/js-polyfills-asked-in-interviews-19b3
// https://vivekmoradiya.medium.com/most-asked-polyfills-in-javascript-interviews-bad3ec868ead
// https://medium.com/@aniketbkangane9637/javascript-polyfills-for-map-filter-and-reduce-most-asked-interview-questions-edc20d9ae937
// https://dev.to/kirteshbansal/call-apply-and-bind-javascript-methods-their-polyfills-k4e#:~:text=In%20this%20article%2C%20I%27ll%20be%20explaining%20the%20call%2C,very%20commonly%20asked%20questions%20in%20a%20javascript%20interview.
// https://babajankhan.hashnode.dev/most-frequently-asked-polyfills-in-js-interviews 
// https://www.hackerrank.com/blog/javascript-interview-questions-developers-should-know/
// https://www.freecodecamp.org/news/javascript-interview-prep-cheatsheet/
// https://www.hackerrank.com/blog/coding-interview-questions-programmers-should-know/
// https://github.com/sudheerj/javascript-interview-questions
// https://www.interviewbit.com/
// https://javascript.plainenglish.io/javascript-polyfills-for-interviews-f48c947a326


// polyfill for map
// Array.prototype.customMap = function (callback) {
//     let res = []
//     for (let i = 0; i < this.length; i++) {
//         res.push(callback(this[i], i, this))
//     }
//     return res
// }
// const a = [1, 2, 3, 4, 5]
// const aTimesTwo = a.customMap((a, b, c) => a)
// console.log(aTimesTwo);


// // polyfill for filter
// Array.prototype.customFilter = function (callback) {
//     let res = []
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i], i, this)) {
//             res.push(this[i])
//         }
//     }
//     return res
// }
// const b = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const bOdd = b.customFilter((a) => a % 2 !== 0)
// console.log(bOdd);






// polyfill for map, filter, reduce

