
//for in loop


const myObject = {
    js:'javascript',
    cpp :'C++',
    rb : "ruby",
    swift:"swift by apple"
}

for (const key in myObject){
    console.log(`${key} shortcut is of ${myObject[key]}`);
 
}

const programming = ["js","cpp","python"]

for (const  key in programming){
    console.log(programming[key]);
}