function calculateCartPrice(val1,val2,...num1){  //here ... dot dot dot means spreading operator
    return num1
}

console.log(calculateCartPrice(200,300,400,600))  //here val1 is 200 and val2 is 300 so it will print next two

const user = {
    username : "MAyuri",
    price:299
}

function handelObject(anyobject){
     console.log(`Username is ${anyobject.username}and price is $(anyobject.price)`);
}

handelObject({
    username: "may",
    price :299
})
const myNewArray = [200,300,400,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,300,500,1000]));
