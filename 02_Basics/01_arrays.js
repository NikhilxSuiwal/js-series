// Arrays

const myArr = [0,1,2,3,4,5]
const myHeroes= ["IronMan", "BatMan", "Lucifer"]

const myArr2 = new Array(1,2,3,4,5)

// console.log(myArr[3])

// Array Methods

// myArr.push(8)
// myArr.pop()

myArr.unshift(8)
myArr.shift()
// console.log(myArr)

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(6));

const newArr = myArr.join()
// console.log(newArr)
// console.log(typeof newArr);
// console.log(typeof myArr);

// Slice, Splice

console.log("A = ", myArr);

const myA1 = myArr.slice(1,3)

console.log("B = ", myA1)
console.log("B = ", myArr)

const myA2 = myArr.splice(1,3)
console.log("C = ", myA2)
console.log("C = ", myArr)




