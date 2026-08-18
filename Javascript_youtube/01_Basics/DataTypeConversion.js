let score ="33abc"

console.log(typeof score) //string
console.log(typeof(score)) //string

let valueInNumber=Number(score)
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //NaN

let a=null
console.log(typeof a) //object
console.log(typeof(a)) //object

let value=Number(a)
console.log(typeof value); //number
console.log(value); //0


let b=undefined
console.log(typeof b) //undefined
console.log(typeof(b)) //undefined

let values=Number(b)
console.log(typeof values); //number
console.log(values); //NaN

let c=true
console.log(typeof c) //boolean
console.log(typeof(c)) //boolean

let valuesss=Number(c)
console.log(typeof valuesss); //number
console.log(valuesss); //if true 1 and if  false 0

// "33"==> 33
//"33addd"==>NaN
// true =>1;
 
let isLoggedIn = "sajju"
let booleanIsLoggedIn=Boolean(isLoggedIn)

//1 => true; 0=> false
// "" => false
// "sajwa"=>true

let someNumber= 33
 let stringNumber = String(someNumber)
 console.log(stringNumber);
 console.log(typeof stringNumber);
 
 


