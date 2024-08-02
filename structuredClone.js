const myObj = {
    name: 'tommy',
    age: 29,
    address: {
        city: 'Delhi',
        area: 'NCR',
        country: 'India',
        details: {
            planet: 'earth',
            galaxy: 'milky way',
            universe: 'universe'
        }
    }
}

let myObj2 = structuredClone(myObj)
myObj2.address.details.planet = 'mars'


console.log(myObj);
console.log(myObj2);
