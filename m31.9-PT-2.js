// practice task 2
//  consol.log korar por output asbe:  piterburg and herry.

let students = {
    2222: {
        name: "Jack",
        section: "C",
        class: "IX",
        address: {
            "Bilding no": 12,
            "street": "ST. Jonson",
            "city": "pitersburg",
            "Country": "UK"
        }
    },
    3333: {
        name: "Hery",
        section: "D",
        class: "X",
        address: {
            "Bilding no": 85,
            "street": "DC Road",
            "city": "Mulakhet",
            "Country": "Bangladesh"
        }
    },
}

//  Jaky result
let jacky = students['2222'].address.city;
console.log(jacky);

// hery resyult
let hearybedy = students['3333'].name
console.log(hearybedy);