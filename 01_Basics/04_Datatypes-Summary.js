// Primitve Datatypes -> CallbyValue
// 7 Types :- String, Number, Boolean, Null, Undefined, Symbol, BigInt

// Javascript is a dynamically typed language, because datatypes are automatically assigned at the time of compilation or code execution.

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id==anotherId);

// bigInt :-
 const bigNumber = 3244219897289371087637379n
 console.log(typeof bigNumber);

// Reference [Non-Primitive] Datatypes -> CallbyReference
// Array, Objects, Functions

const heroes = ["tony stark", "spidey", "batman"]

let myObj = {
    name: "Nikhil",
    age : 21
}

let myFunction = function(){
    console.log("Hello World");
    
}
 

