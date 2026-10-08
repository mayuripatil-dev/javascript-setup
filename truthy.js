const userEmail = "mayuri.ai"

if (userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}

//faalsy values = false,0,-0,bigInt 0n, "" , null ,undefined , NaN these are all falsy means false values

// truthy values = "0", 'false' these values are written is strings thats why they are truthy values , " ",[],{},function(){}  these are al true values

if (userEmail.length === 0){
    console.log("Array is empty");
}

// const emptyObj = {}
// if (Object,keys(emptyObj).length === 0) {
//     console.log ("Object is empty");
// }

false == 0   // value is true

false == '' //values is true

0 == ''  //value is true

//nullish coalescing operator (??) : null unefined

let val1;
// val1 = 5 ?? 10   // when value comes null or unefined at that th=ime these notations are usedd
val1 = null ?? 10
console.log(val1);

//Ternary operator

// condition ? true : false
 const iceTeaPrice = 100
 iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")


