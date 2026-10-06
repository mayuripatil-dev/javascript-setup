const user = {
    username : "mayuri",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
          console.log(this);

    }
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

// function chai(){
//     console.log(this);  //if this is printed inside function then it will give all info in detail and it it is preinted outside fn then it will give only value
// let username = "Mayuri"
// console.log(this.username);

// }
// chai()


const chai =()=>{       //arrow function
    let uername = "Mayuri"
    console.log(this.username);
}


// 
// const addTwo =(num1 , num2 ) => num1 + num2

const addTwo = (num1, num2) => (num1 + num2)
console.log (addTwo(3,4))
 const  myArray = [2,5,3,6,8]

 