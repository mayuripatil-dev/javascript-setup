  const name = "mayuri"
  const repocount = 50
//   console.log(name + repocount+"value");  -->old method of syntax

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);  //new method of syntax
 
const gamename = new String('mayurii')

console.log (gamename[0]);
console.log(gamename.__proto__);

console.log(gamename.length);
console.log(gamename.toUpperCase());

console.log(gamename.charAt(2));
console.log(gamename.indexOf('t'));

const newString = gamename.substring(0,4)
console.log(newString);

const anotherString = gamename.slice(-8,4)
console.log(anotherString);

const newStringOne = "     mayuri    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://mayuri.com/mayuri%20patil"

console.log(url.replace('%20','-')); //this means if we want to replace value of %20 to - in above url we can
//change it by add url.replace

console.log(url.includes('titan')); //these [url.include]will tell us that word we have mentioned titan is pesent there or not if yest then TRUE if no then FALSE

console.log(gamename.split('-'));

