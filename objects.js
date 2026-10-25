//singleton
// Object.create
//object literals
const mySym = Symbol("Key1") //syntax for keys and symbols

const jsUser ={
    name: "Mayuri",
    [mySym] : "mykey1",
    age : 19,
    location : "Shirpur",
    email :"mayuri@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","saturday"]
}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["name"])
console.log(jsUser[mySym])


jsUser.email = "mayuri@gpt.com"
// Object.freeze(jsUser)
jsUser.emial = "mayuri@google.com"
// console.log(jsUser);

//function in objects
jsUser.greeting = function(){
    console.log("Hello js User");
}

jsUser.greetingTwo = function(){
    console.log(`Hello js user , ${this.name}`);
}
 console.log(jsUser.greeting());
 console.log(jsUser.greetingTwo());