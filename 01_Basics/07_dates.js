// ---------------- DATE & TIME ----------------
// Date is an object type

let myDates = new Date()
// console.log(myDates)

// console.log(myDates.toString())
// console.log(myDates.toDateString())
// console.log(myDates.toISOString());
// console.log(myDates.toJSON());
// console.log(myDates.toLocaleDateString());
// console.log(myDates.toLocaleString());
// console.log(myDates.toLocaleTimeString());

// console.log(typeof myDates)

let myCreatedDate = new Date(2023, 0 ,23)
// console.log(myCreatedDate.toDateString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))
