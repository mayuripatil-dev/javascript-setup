const marvel_heros = ["thor","spiderman","ironman"]
const dc_heros = [ "superman","flash","batman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros.heros);
// console.log(marvel_heros.heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

const all_new_heros = [...marvel_heros,...dc_heros]

console.log(all_new_heros)

//if condition of array given below comes :
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

//then handel it like solution given below:
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Mayuri")) // if name mayuri is givn in array form it will give true otherwise false output
console.log(Array.from("Mayuri"))   // here it makes the given name in array for each letter
console.log(Array.from({name:"Mayuri"}))  // here first we need to give which type of array we want to make if we haven't specified it then it will give us empty space


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));