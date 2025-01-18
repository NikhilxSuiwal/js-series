// Object Literals

const mySym = Symbol("Key1")

const jsUser= {
    name: "Nikhil",
    "full name": "Nikhil",
    [mySym]: "key1",
    age: 21,
    location: "Jaipur",
    email: "nikk@google.com"
}
// console.log(jsUser.age)
// console.log(jsUser["name"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])

jsUser.email= "nikhil@chatgpt.com"
// Object.freeze(jsUser)
jsUser.name= "Nikkx"
// console.log(jsUser)


jsUser.greeting= function(){
    console.log("Hello Js User");
};

jsUser.greetingTwo= function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())


