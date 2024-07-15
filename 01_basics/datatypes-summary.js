// Premitive Data types

// 7 types : String, Number, Boolean, null, undefined, Symbol,BigInt

const score = 100 
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // This will note as Undefined value

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3487458329485794n // bigInt



// Reference ( Non Primitive ) Data types

// Array, Objescts, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "ViKas",
    age: 21,
}

const myFuction = function(){
    console.log("Hello World");
}

// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);
// console.log(typeof scoreValue);
// console.log(typeof myFuction);
// console.log(typeof heros);

// Assignment

// You have to check typeof All the DataTypes given above 
// This various typeof questions aks in interview so be ready 




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubebname = "vikasmanhinde"

let anotherName = myYoutubebname
anotherName = "chaiaurcode"

console.log(anotherName);
console.log(myYoutubebname);

let userOne = {
    email: "vikas@mari.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "user@google.com"

console.log(userOne.email);
console.log(userTwo.email);