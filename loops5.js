
//forEach loop

const coding = ["js","ruby","java","python","cpp"]

//here it is callback function so these type of functions do not have names 
coding.forEach(  function (val){
    console.log(val);
     
})

coding.forEach( (item) => {
    console.log(item);
})

function printMe(item){
console.log(item);
}

coding.forEach(printMe)

coding.forEach( (item,index,arr) => {
    console.log(item,index,arr);
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"

    },
   
    {
        languageName: "python",
        languageFileName: "py"

    },
   
    {
        languageName: "cpp",
        languageFileName: "c++"

    },
   
]

myCoding.forEach ((item)=>{
    console.log(item.languageName);
})