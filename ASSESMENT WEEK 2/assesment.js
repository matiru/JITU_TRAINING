// // Write a JavaScript function that receives five numbers as input and finds the largest of five numbers.
// // Print the results to the console. 

function findLargestNumber(a, b, c, d, e) {
    let largestNumber = a
    if (b > largestNumber) {
        largestNumber = b
    };
    if (c > largestNumber) {
        largestNumber = c
    };
    if (d > largestNumber) {
        largestNumber = d
    };
    if (e > largestNumber) {
        largestNumber = e
    };

    return largestNumber;

}
console.log("Question1")
console.log(findLargestNumber(1, 2, 3, 4, 5));

console.log("")
console.log("")
console.log("")


// Write a JavaScript function which iterates the integers from 1 to 100 and prints them out. 
// But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".
// For multiple numbers of three and five, print "FizzBuzz". 
console.log("Question2")
function fizzBuzz() {
    for (let i =1 ; i <= 100 ; i++){
        if(i %3 ===0 & i %5 ===0){
            console.log("FizzBuzz");
        }
        else if(i %3 ===0){
            console.log("Fizz");
        }
        else if(i %5 ===0){
            console.log("Buzz");
        }
         
        else{
            console.log(i);
        }
    }
}
fizzBuzz();
console.log("")
console.log("")
console.log("")

// 3 What will be the result of the following code, explain. 



let str = "1"; 

str = + !str; 

console.log(typeof str); 
console.log(str);