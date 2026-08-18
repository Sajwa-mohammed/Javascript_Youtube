//primitive -7
/*
1.String
2.Number
3.Boolean
4.null
5.undefined
6.Symbol
7.BigInt

*/



const id = Symbol('123')
const anotherId= Symbol('123')

console.log(id === anotherId);  // false

const bigNumber=2345678987654322345678n



// Reference(Non Primitive)

/*
Array
Objects 
Functions

*/

const fruits=["apple","banana","orange"]
let myObj={
    name:"Sajwa",
    age:23
}

const myFunction=function(){
    console.log("Hello World");
    
}


// +++++++++++++++++++++++++++++++++++++++

//stack(primitive), Heap(Non-primitive)

let myname="sajwa"

let anothername= myname

anothername="Choti"

console.log(myname);//sajwa
console.log(anothername);//choti

let userone={
    email:"user@google.com",
    upi:"user@ybl"
}

let usertwo=userone

usertwo.email="usertwo@gmail.com"

console.log(userone.email);//usertwo@gmail.com
console.log(usertwo.email);//usertwo@gmail.com



