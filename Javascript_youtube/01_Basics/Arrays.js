const myArr=[1,2,4,3,5,6]
console.log(myArr[1]);

myArr.push(7)
console.log(myArr);
myArr.pop()
console.log(myArr);
myArr.unshift(9)
console.log(myArr);
myArr.shift(myArr)
console.log(myArr);


console.log(myArr.indexOf(9));
console.log(myArr.includes(9));
const newArr= myArr.join()

console.log((myArr));
console.log(newArr);

//SICE,SPLICE

console.log("A",myArr);
const my1= myArr.slice(1,3)
console.log(my1);
console.log("B",myArr);
const my2= myArr.splice(1,3)// splice modifies the array
console.log("C",myArr);
console.log(my2);








