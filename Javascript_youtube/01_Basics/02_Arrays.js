const marvel_heros=["thor","Ironman", "spiderman"]
const dc_heros=["superman", "flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros); //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]); // flash
const allheros=marvel_heros.concat(dc_heros)
console.log(allheros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_new_heros=[...marvel_heros,...dc_heros]
console.log("all",all_new_heros); //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_Array=[1,2,3,[4,5,6],7,[8,9],10]

const real_Another_Array=another_Array.flat(Infinity)
console.log(real_Another_Array)
console.log(Array.isArray("Sajwa")); //false
console.log(Array.from("Sajwa")); //[ 'S', 'a', 'j', 'w', 'a' ]
console.log(Array.from({name : "sajwa"})); //intresting investigate further

let score1=100
let score2=200
let score3= 300

console.log(Array.of(score1,score2,score3));  //[ 100, 200, 300 ]





