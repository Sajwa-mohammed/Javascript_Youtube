function sayMyname(){
    console.log("S");
    console.log("A");
    console.log("J");
    console.log("W");
    console.log("A");
  
}

sayMyname()

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
    
// }

function addTwoNumbers(num1,num2){
   let result=num1+num2
   return result
    
}
const result=addTwoNumbers(3,"5")
console.log("Result",result);


function loginUserMessage(username="sam"){
    if(username === undefined){
        console.log("please enter username");
        return
        
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Sajwa")) //Sajwa just logged in
console.log(loginUserMessage()) //undefined just logged in


function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(200,400,600,2000));

const user={
    username:"sajwa",
    price:200
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
handleObject(user)
handleObject({
    username:"sam",
    price:333
})


const myNewArray=[200,100,400,300]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));

console.log((returnSecondValue([400,400,300])));

