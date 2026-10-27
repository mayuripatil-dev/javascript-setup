const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1)); //we can add decimal value that is after point in it

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3)); //precision value gives a number by doing round off of the valuebefore decimal

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

//++++++++++++++++++++++++++++......MATHS.......++++++++++++++++++++++++++//

//Add,Sub,Multiply,Div
console.log(Math);
console.log(Math.abs(-4)); // [-] becomes [+]
console.log(Math.abs(4)); // [+]stays [+]
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4,6,8,3));
console.log(Math.max(4,6,8,3));
console.log(Math.random());
console.log(Math.random()*10 +1);

const min = 10
const max = 40

console.log(Math.floor(Math.random()*(max-min+1))+min);


