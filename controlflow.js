//if

// if condition is true then code will run

// if(true){

// }

//if condition is false the code will go out and exit
// if (false){

// }

const isUserLoggedIn = true
const temperature = 41

if (temperature < 50){
    console.log("less than 50");
}
else{
    console.log("temperture is greter than 50");
}

if (  2 != "2"){
console.log("executed");
}

// <,>,<=,>=,==,!=,===

const score = 200
if (score>100){
    let power = "fly"
    console.log(`user power = ${power}`);
}


const balance = 1000

if (balance < 500){
   console.log("less than");
}
else if(balance<750){
    console.log("less than 750");
}
else if (balance<900){
    console.log("less than 750");
}
else{
    console.log("less than 1200")
}

const usserLoggeIn = true
 const debitCard =  true

 const LoggedInFromGoogle = false
 const LoggeInFromEmail = true

 if  (userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy the courses");
 }

 if (LoggedInFromGoogle || LoggeInFromEmail){
    console.log("user Logged In"); 
 }

//  const month = 3
const month = "march"
 switch (month){
    case 1:
        console.log("january");
        break;
    
    case feb:
        console.log("feb");
        break;
    
    case march:
        console.log("march");
        break;
    
    case 4:
        console.log("april");
        break;
    
    case 5:
        console.log("may");
        break;


    

 }