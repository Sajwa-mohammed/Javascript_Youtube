// const tinderUser=new Object() //singleton object
const tinderUser={} // non singleton object

tinderUser.id="123rr"
tinderUser.name="Sajwa"
tinderUser.isLoggedIn=false



console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"sajwa",
            lastname:"mohammed"
        }
    }
}
console.log(regularUser.fullname?.userfullname.firstname);

const obj1={1: "a", 2:"b"}
const obj2={3:"c",4:"d"}
const obj3={obj1,obj2}
console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj4=Object.assign({},obj1,obj2)

console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj5={...obj1,...obj2}
console.log(obj5);

const users=[
    {
        id:1,
        email:"s@gmail.com"
    },
    {

    },
    {},
    {},
]

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course={
    coursename:"js",
    price:"999",
    courseInstructor:"hitesh"
}
const {courseInstructor:instructor}=course
// console.log(courseInstructor);
console.log(instructor);





