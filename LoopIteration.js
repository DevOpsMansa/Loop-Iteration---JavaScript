// Part 1: Fizz Buzz
// To begin, solve the following classic “Fizz Buzz” problem. There are a few different ways to do this - experiment with what you think is the most efficient. Once you have solved the problem, ask yourself if there could be another way; and if so, would it be better.

// Accomplish the following:
// Loop through all numbers from 1 to 100.
// solution
// Loop through all numbers from 1 to 100.
for(let i = 1; i <= 100; i++){
// If a number is divisible by 3, log “Fizz.”
if(i % 3 === 0){
        console.log(i + " Fizz")
    }else if(i % 5 === 0) {  // If a number is divisible by 5, log “Buzz.”
        console.log(i + " Buzz")
    } else if(i % 3 === 0 && i % 5 === 0){// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
        console.log(i + " Fizz Buzz")
    }else if(i % 3 != 0 || i % 5 != 0){ // If a number is not divisible by either 3 or 5, log the number.
        console.log(i);
    }
}
// OR
for (let i = 1; i < 100; i++) {
    if(i%3==0)
    console.log(i+"fizz");
    if(i%5==0)
    console.log(i+"BUzz");
    if((i%3==0)&& (i%5==0))
    console.log(i+"Fuzz Buzz");
    if((i%3!=0)&& (i%5!=0))
    console.log(i+"Fuzz Buzz");
}

// // Part 2: Prime Time
// // Now we will move onto something slightly more complex.
// // Context: A prime number is any whole number greater than 1 that cannot be exactly divided by any whole number other than itself and 1. For example, the number 5 is prime because it cannot be divided by 4, 3, or 2; it can only be divided by itself (5) and 1. Similarly, the numbers 7 and 11 are prime. As numbers become larger, determining whether or not they are prime is increasingly difficult, but loops make this process relatively easy!
// // Write a script that accomplishes the following:
// // Declare an arbitrary number, n.
// // Create a loop that searches for the next prime number, starting at n and incrementing from there.
// // As soon as you find the prime number, log that number and exit the loop.
// // Continuing with the example above, if n is equal to 4, your loop should log 5. Similarly, if n is 5, it should log 7, and if n is 9, it should log 11. Test your loop with higher numbers and reference an online prime number table to determine the accuracy of your code.
// // Be careful! If you set n to a number too large, your loop could take a long time to process.

// // Solution:
// // Loop from 1 - 20 print out odd, even , prine
// // Declare an arbitrary number, n.

let prime = "";

for (let i = 1; i <= 11; i++) {
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
  if(i == 1) i++;
    if (i == 2 || i == 3 || i % 3 !== 0 && i % 2 !== 0) {
        console.log(i);
        prime += i;
        break;
    } 
  }  
// As soon as you find the prime number, log that number and exit the loop.
console.log(`${prime} is the prime number`);

// for (let n = 1; n <= ""; n++) {
//     if (n == 2 || n == 3 || n % 3 !== 0 && n % 2 !== 0) {
//         console.log('${n} is Prime')
//         break;
//     }
//     n++;              
// }


// // My Solution
// // Every prime number can be written in the form of 6n + 1 or 6n – 1 (except the multiples of prime numbers, i.e. 2, 3, 5, 7, 11), where n is a natural number.

// let n = "";
// let Prime = 6 * n + 1;





// // resouce to help

// // program to check if a number is prime or not

// // take input from the user
// const number = parseInt(prompt("Enter a positive number: "));
// let isPrime = true;

// // check if number is equal to 1
// if (number === 1) {
//     console.log("1 is neither prime nor composite number.");
// }

// // check if number is greater than 1
// else if (number > 1) {

//     // looping through 2 to number-1
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         console.log(`${number} is a prime number`);
//     } else {
//         console.log(`${number} is a not prime number`);
//     }
// }

// // check if number is less than 1
// else {
//     console.log("The number is not a prime number.");
// }




