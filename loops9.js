const myNums = [1,2,3]

//this is indept steps
// const myTotal = myNums.reduce(function (acc,currval){

//     console.log(`acc:${acc} and currval:${currval}`);
//     return acc+currval
// },0)


//this is direct answer step for same questin above
const myTotal = myNums.reduce((acc,curr) => acc+curr,0)

console.log(myTotal);


const shoppingCart =[
    {
        itemName: "js course",
        price:999
    },
    {
        itemName: "cpp course",
        price:899
    },
    {
        itemName: "py course",
        price:499
    },
]

const priceToPay = shoppingCart.reduce((acc,item)=> acc + item.price,0);
console.log(priceToPay);

