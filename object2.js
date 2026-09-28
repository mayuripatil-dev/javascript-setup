 //const tinderUser = new Object()
 const tinderUser = {}

 tinderUser.id = "123abc"    //tinderUser= giving output specifically with key alues and there input elements
 tinderUser.name = "mayuri"
 tinderUser.isLoggedIn = false


 //console.log(tinderUser),

 const regularUser = {    //regularUser=it is given as it is output
    email: "some@gmail.com",
    fullname:{
        userfullname :{
            firstname :"Mayuri",
            lastname: "patil"

        }
    }
 }

 // console.log(regularUser.fullname.userfullname.firstname);


 const obj1 ={1:"a",2:"b"}
 const obj2 ={3:"a",4:"b"}

//  const obj3 = {obj1,obj2}  these method is used but it is incoorect at some point and gives error further so use below method
const obj3 = Object.assign({}, obj1 ,obj2)
console.log(obj3);

const obj4 = {...obj1,...obj2}    //smart way to write multiple objects these and above assign method both are usefful 
console.log(obj4);

const users = [
    {
        id:1,               //these is the comma seperated method u can see i have given commas after curly brackets
        email:"m@google"
    },
    {
        id:1,
        email:"m@google"

    },
    {

    id:1,
        email:"m@google"
    }
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));   //keys means main elements given above like id,email
console.log(Object.values(tinderUser));  //values means elements given to keys like id=1,email=m@google
console.log(Object.entries(tinderUser));  //entries means it gives us keys and values in array form making index of all elements

console.log(tinderUser.hasOwnProperty('IsLoggedIn')); //hasOwnProperty = it gives output in boolean in true or false if given elemnt is present or not according to that