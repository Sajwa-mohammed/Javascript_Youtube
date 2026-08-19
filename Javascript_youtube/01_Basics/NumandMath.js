const score=400
console.log(score);//400

const balance=new Number(100)
console.log(balance);//[Number: 100]

console.log(balance.toString().length); //3
console.log(balance.toFixed(2));//100.00

const numbertwo=23.453
console.log(numbertwo.toPrecision(3));//23.5

const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN')); //10,00,000

//**************Maths ********************/

console.log(Math.abs(-4)); //4 change only -ve values to +ve

console.log(Math.round(4.6)); //5
console.log(Math.ceil(4.2)); //5
console.log(Math.floor(4.9));//4
console.log(Math.max(4,5,2,5,6)); //6
console.log(Math.random());
console.log((Math.random()*10) +1);

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1)))










