// stack memory and heap memory
// for primitive --> stack memory
// for non-primitive -->heap memory

let myYoutubename = "codewithmayuri"
let anothername = "chaiorcode"

console.log("codewithmayuri");
console.log("anothername");

let userOne = {
    email:"user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "mayuri@google.com"

console.log("userOne.email");
console.log("userTwo.email");