// Immediately Invoked Function Expressions (iife)

(function chai(){
    console.log(`DB CONNECTED`);
})();  //first code should end with paranthesis(;) in function only then next code will be executed
(function aurcode(){
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('mayuri')



