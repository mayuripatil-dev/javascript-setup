

function sayMyName(){  //syntax of function

console.log("M");
 console.log("A");
 console.log("y");
 console.log("u");
 console.log("R");
 console.log("I");
}

// sayMyName()

function addTwoNumbers(number1,number2){
   console.log( number1+number2 );

   let result = number1+number2 
   console.log("Mayuri"); // here if we write htese function after return result it will print us undefined but if we write befre it will give us correct output ..bcz no function is giving output after return function
   return result
   

}

const result = addTwoNumbers(3,5) //here these will print output 8 
console.log("Result: ", result); //but as we know console.log is output printing statement it will print result as undefined because we havent written it with function  which i have wriiten on 19 numer abpve

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
return `${username } just logged in`
}

console.log(loginUserMessage("Mayuri"))
// console.log(loginUserMessage())  if like these empty string is given so it eill give us output as undefined

