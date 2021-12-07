let person = {
    firstName: "John",
    lastName: "Doe",
    address: {
        street: "Peachfield str",
        city: "Budapest",
        country: "Hungary"
    }
}

const person5 = person;
console.log(person5 === person);

let person2 = {
    ...person
}

// console.log(person2);

let person3 = Object.assign({}, person)
person3.firstName = "Jane";
person3.address.street = "Main str";

// console.log(person3);
// console.log(person);
// console.log(person3.firstName);


// Deep copy (metódust nem lehet deep copyval másolni)
let person4 = JSON.parse(JSON.stringify(person));
person4.firstName = "Jane";
person4.address.street = "Main str";

console.log(person4 === person);
console.log(person4 === person.address);

// console.log(person4);
// console.log(person);

//Spread
let nums = [2, 3];
let nums2 = [1, ...nums, 4];
console.log(nums2);