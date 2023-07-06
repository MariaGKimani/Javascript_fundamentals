// Write a function that takes a number as input 
// and returns the factorial of that number 
// (i.e., the product of all integers from 1 to the input number)
// function num (number){
//     if(n === 0 || n ===1){
//         return 1;
//     }
//     else{
//         return 
//     }
// }

// Write a function that takes two numbers
//  as input and returns their sum.
function numbers(num1,num2){
    return num1 + num2
}
console.log(numbers(4,45));

// Write a function that takes an array of numbers 
// as input and returns the largest number in the array.
function arr_num(arr){
    return Math.max(...arr)
}
console.log(arr_num([2,4,8,22,33,11,6,]));


// Write a function that takes a string as 
// input and returns the reverse of the string.
function str_input(sttrr){
    reversed_str =""
    for (let i = sttrr.length-1;i >=0;i --){
        reversed_str += sttrr[i]
    }
    return reversed_str
}
console.log(str_input("Maria"));

// Write a function that takes an array of strings as input 
// and returns a new array that contains the same strings, 
// but with all vowels removed from each string.
function arr_str(arrstr){
    x = /[aeiou]/gi;
    y =[]
    for(let str of arrstr){
        const newStr = str.replace(x,"");
        y.push(newStr)
    }
    return y
}
console.log(arr_str(["maria","Goretti","Irene","Terry","Eleanor"]));

// Write a function that takes a number
//  as input and returns true if the 
// number is even and false if the number is odd
function ints(number){
    if(number% 2==0){
        return true
    }else{
        return false
    }
}
console.log(ints(22));
console.log(ints(11));

// Write a function that takes an array of numbers 
// as input and returns a new array that contains 
// only the even numbers from the input array.
function arr(numbers){
    x =[]
    for(let arr1 of numbers){
        if( arr1 %2===0){
        x.push(arr1)
        }
    }
    return x
}
console.log(arr([1,2,3,4,5,6,8,9,10,12,44]));

// Write a function that takes an array of strings as input 
// and returns a new array that contains the same strings,
// but with the first letter of each string capitalized.
function arr2(arr3){
    
}