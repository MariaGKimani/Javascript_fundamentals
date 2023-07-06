//Use for loop to iterate from 0 to 100
// and print only prime numbers

// is everyone here???????? 
// Marion is
//Marion we can start with you??
//take us through the question above

//
//its javascript okay
// Esther are you doing it or I do it ? everyone is doing it. Feel free to just type, we'll follow
// Okay
//input - range 0-100? like in the for loop yes i =0 i <= 100
//output - prime numbers
//process- create fun, use for loop, 
//how do we check if a n.o is a prime numvber in js
//in python, we create a range from 2 to num, then loop thru it checking if num modulus i is 0.
// Not sure how that translates to js for python way i  dont think it will work in js

// I think ...
for(let i = 0; i < 100 ; i++){
    for(let y = 1; y< i; y++){
        // At this stage I started cooking lol
        if (i % i == 0 && i % 1==0){
            // console.log() //we're supposed to print the prime numbers. not the others
            // yes,that's why i did not console here
            //  if the number is divisible by evrything from 0 to it, then it's not a prime
            //  problem is, here we have not catered for 1 it it not a prime number anyway, 
        }
        else{
            console.log(i)
        }
    }
    // Maria, I think you're the one who can run it  // yes
    // its not printing anything // let's try another way YOU HAVE AN IDEA? No I was still going to cook aand roast us all
}




//from programiz:

// program to check if a number is prime or not

// take input from the user
const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {   //anyone // I think here we are starting to loop from 2  like the number 2, ama index 2 I think number 2. because
        // 1 is already catered for. I thought for loops only use index? Assessment !!!!!!!!!!
        // Bye
    
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}



////sielewi kitu 
// Esther did you understand what you gave us ? not all parts