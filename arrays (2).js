// arrays

const myArr = [0,1,2,3,4,5]
const myHeros = ["doremon","shinchan"]

const myArr2 = new Array(1,2,3,4,5)
console.log(myArr[1]);

// Array methods
 
myArr.push(6)   //push is used to add values even if it is not mentioned as u can see here
myArr.push(7)
myArr.pop()  //pop is used to remove last value

myArr.unshift(9)  // ubshift gives us place 1st for the value we have given to it
myArr.shift()  //and shift is used to remove that value 

console.log(myArr.includes(9));  //it will give unser in boolean i.e true or false..if it include 9 then it is true if not then false
console.log(myArr.indexOf(4)); //it will give us index value of the particular number we have inserted there


const newArr = myArr.join()
console.log(newArr);

console.log(myArr);

//slice,splice 
// difference between slice and splice is that the values which are printed in slice anr
//not printed in splice remainig values excluding slice values are printed in splice
console.log("A ",myArr);
const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3)
console.log("C ",myArr);
console.log(myn2);


