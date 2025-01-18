const name1= ["Nikk", "Chiki", "Nikhil"]
const name2= ["Yash", "Punit", "Abhi"]

// name1.push(name2)

// console.log(name1);

// const name3= name1.concat(name2)

// console.log(name3)

const name4= [...name1, ...name2]
console.log(name4)


console.log(Array.isArray("Nikhil"))
console.log(Array.from("Nikhil"))