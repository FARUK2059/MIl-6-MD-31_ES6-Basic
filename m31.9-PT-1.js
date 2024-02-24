//  practice task 1
/** console log the primary schoool location of Sopia **/ 

let data = {
    Shopia: {
        id: 33,
        study: [
            {
                primary: 
                    [
                        { school_name: "ABC primary school" },
                        { location: "peturse burg" }

                    ]
            },
            {
                secondary:
                    [
                        { school_name: "ABC secondary sechool" },
                        { location: "St nortdan" }
                    ]
            },
        ]
    }
}

// let locations = data.Shopia
// let locations = data.Shopia.study
// let locations = data.Shopia.study[1];
// let locations = data.Shopia.study[1].secondary
let locations = data.Shopia.study[1].secondary[1].location;

console.log(locations);