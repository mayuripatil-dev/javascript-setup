const myNums = [1,2,3,4,5,6,7,8,9,10]

//filter method(most ecommended)
// const newNums   =  myNums.filter((num) => {
//     num > 4 
//     return num>4
// })


//forEach method
const newNums = []
myNums.forEach( (num) => {
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums);

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// here we have written condition inside scope iceTeaPrice.e {} so we need to write return in it to perfm code


// const thatNums = myNumbers.map((num) => { return num+10})

const thatNums = myNumbers.map((num)=>num*10).map((num) => num+1).filter((num)=> num >=40 )

console.log(thatNums);




