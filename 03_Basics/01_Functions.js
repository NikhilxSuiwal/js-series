function sayMyName(){
    console.log("N")
    console.log("I")
    console.log("K")
    console.log("H")
    console.log("I")
    console.log("L")
}
// sayMyName();

// function addTwoNumber(number1, number2){
//     console.log(number1+number2);
// }
// const result = addTwoNumber(2,4);
// console.log("Result: ",result); // this will give undefined

function addTwoNumber(number1, number2){
    let result=  number1 + number2
    return result
}

const result = addTwoNumber(4,3)
// console.log("Result: ",result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())



