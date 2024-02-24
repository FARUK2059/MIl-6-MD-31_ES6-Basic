// reduce mathod

const numbers = [4, 7, 12, 3, 9, 15];
const total = numbers.reduce((previous, current) => previous + current, 0);
// console.log(total);

const products = [
    { id: 1, name: 'lenovo', price: '65000'},
    { id: 2, name: 'HP', price: '6500'},
    { id: 3, name: 'Symphoni', price: '6000'},
    { id: 4, name: 'Oppo', price: '5000'},
    { id: 5, name: 'Iphone', price: '165000'},
];

// const names = products.map(product => product.name);
const names = products.map(product => product.price);
console.log(names);
 