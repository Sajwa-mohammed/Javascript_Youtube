//singleton

//object.Create

//object literals

const mySym=Symbol("key1")


const Juser={
    name:"Sajwa",
    "fullname":"mohammedSajwa",
    [mySym]:"mykey1",
    age:"23",
    location:"Hyderabad",
    email:"sajwa@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Wednesday"]
}

console.log(Juser.email);
console.log(Juser.fullname);

console.log(Juser["email"]);
console.log(Juser.mySym);//undefined
console.log(Juser[mySym]); //myKey1

Juser.email="sajju@google.com"
console.log(Juser.email); //sajju@google.com

// Object.freeze(Juser)
Juser.email="sajju@microsoft.com"
console.log(Juser.email); //sajju@google.com becuase above we have freezed it , so it cannot be modified further
Juser.greeting=function(){
    console.log("Hello JS user");
    
}

Juser.greetingTwo=function(){
    console.log(`Hello JS user,${this.name}`)
}

console.log(Juser.greeting);  //[Function (anonymous)]
console.log(Juser.greetingTwo());









