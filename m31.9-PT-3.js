//  use to ( for loop ) mathod:

let evenNumbers = [ 1, 3, 5, 7, 9 ];

// for (let i = 0; i < evenNumbers.length; i++) {
//     // console.log(evenNumbers);

//     if (evenNumbers[i] % 2 !== 0) { 
//         evenNumbers[i] += 1;
//     }
// }

// console.log(evenNumbers);

//  use of map() mathod:

// let oddNumbers = evenNumbers.map(num => num + 1);


// console.log(oddNumbers);


//  array.filter() mathod

let count = [ 33, 50, 79, 78, 90, 101, 30 ];

let result = count.filter(res => res % 10 === 0);
console.log(result);

