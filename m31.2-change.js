// data access

const data = [{id: 1, name: 'abul', address: 'kosu khet'}];

// console.log(data.address);
// console.log(data[0].address);

const products = {
    count: 5000,
    data: [
        { id: 1, name: 'lenovo laptop', price: 65000},
        { id: 2, name: 'macbook', price: 165000},
    ]
}

// second Product price

// console.log(products);
// console.log(products.data);
// console.log(products.data[1]);
// console.log(products.data[1].price);


const user = {
    id: 5001, 
    name: 'Shoriful Raj',
    address: {
        street: {
            first: 'nisorgo 41',
            second: 'hason nogor',
            third: 'sunamganj',

        },
        city: 'Sylhet'
    }
}


// console.log(user);
// console.log(user.address);
// console.log(user.address.street);
console.log(user.address.street.second);


//   Optional change formewt [?]
const user2 = {
    id: 54534,
    name: 'ami apri na ar pari na',
    address: {
        city: 'Sylhet',
        country: 'Bangladesh',
    }
}

// console.log(user2.address.street.second);
// console.log(user2.address.street.second);   
console.log(user2.address.street?.second); 
