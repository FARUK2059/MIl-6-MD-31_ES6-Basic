// কোন array কে doubled করার function

//  system 1

const numbers = [4, 5, 2, 8, 10];

// const doubled = [];
// for (const num of numbers) {
//     const double = num * 2;
//     doubled.push(double)
// }

// console.log(doubled);

// system 2
// function doubleIt(num) {
//     console.log('now num', num);
//     return num * 2;
// }

// const result = numbers.map(doubleIt);
// console.log(result);

// shorcut way
// const double2 = n => n * 2;

// const result = numbers.map(double2);
const outpute2 = numbers.map(n => n*2);
// console.log(outpute2);


const friends = ['shamim', 'abul', 'juhan', 'faruk', 'habibur'];
const legths = friends.map(frind => frind.length);
// console.log(legths);
const fndFrist = friends.map(fri => fri[0]);
console.log(fndFrist);