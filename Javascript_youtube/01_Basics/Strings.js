const name="Sajwa"
const repoCount=2

// console.log(name + repoCount + "Value"); // old way

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //String Interpolation

const anotherName= new String("Sajwa-Mohammed")
console.log(anotherName[0]); //S
console.log(anotherName.__proto__); //{}
console.log(anotherName.length); //14
console.log(anotherName.toUpperCase());
console.log(anotherName.charAt(3));//w
console.log(anotherName.indexOf('w')); //3

const newString = anotherName.substring(0,4)
console.log(newString); //sajw

const anotherString= anotherName.slice(-10,8)
console.log(anotherString); // a-Mo   14 - 10 = 4   slice(4, 8) ==> 8 not included 
//slice is used for negative also 

//If negative value is given in substring it will ignore and start from 0 

const newStringOne= "   Sajwa    "
console.log(newStringOne);
console.log(newStringOne.trim());// removes spaces

const url="https://sajwa.com/sajwa%20mohammed"
console.log(url.replace('%20','-'))  //https://sajwa.com/sajwa-mohammed

console.log(url.includes('hddgf')); //false

console.log(anotherName.split('-')); //[ 'Sajwa', 'Mohammed' ]













