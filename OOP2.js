// function xx(arrnum){
//  write a js function that takes in an array of numbers and consoles
//  thr last four itewms multiplied by 12and thefirst two added by 
//  two.console the array with new values
const multiplyAdd = (arrayNum)=>{
    const lastfour = arrayNum.slice(-4).map((num)=>num*12)
    const firsttwo =arrayNum.slice(0,2).map((num)=>num+2)
    const modified = firsttwo.concat(lastfour)
    console.log(modified);
}
multiplyAdd([2,3,4,5,6,7,8]);

// write a js program to extract the characters 
// at odd indices from the string below
function extractOddIndices(str) {
    let result = "";
  
    for (let i = 1; i < str.length; i += 2) {
      result += str[i];
    }
  
    return result;
  }
console.log(extractOddIndices("mariagoretti"));
  
// Write a js function that given a string reverses 
// each word in the sentence without using in built function
const strreverse = (string)=>{

}


// write a javascript function to capitalize the 
// first letter of each word in a string

function capitalize(str){
const x = str.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
console.log(x)
}
let word = 'a busy office'
capitalize(word)


// write a javascript function that takes in the following array and use a
//  while loop to iterate  and break when the item is equal to the fourth index 
let arrNum = [1,2,3,4,5,6,7,8,9]