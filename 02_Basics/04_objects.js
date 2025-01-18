// const tinderUser= new Object() => Singleton Object

const tinderUser= {}
tinderUser.name= "Nikhil"
tinderUser.id= "nikk@gmail.com"
tinderUser.isLoggedIn= true
// console.log(tinderUser);

const obj1= {1:"a", 2: "b"}
const obj2 = {3:"a", 4: "b"}
const obj3= {4:"d", 5:"t"}
// const obj4= Object.assign({}, obj1, obj2, obj3)

const obj4= {...obj1, ...obj2, ...obj3} // Spread operator

// console.log(obj4)

// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))

// --------- Destructuring of Objects-------------

const course = {
    coursename : "JS in Hindi",
    price : 999,
    courseInstructor: "Hitesh"
}

// course.courseInstructor

const {coursename: name}= course // this is destructuring of object
console.log(name)

