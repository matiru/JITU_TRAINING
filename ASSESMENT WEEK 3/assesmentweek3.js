// 1. Will the below two functions output the same results? Explain your answer.

function foo1() {

return {bar: "hello"};



}
console.log(foo1());


function foo2() {

return

{bar: "hello"};

}
console.log(foo2());


//2. Write a simple function that returns a Boolean indicating whether a string is a 
//palindrome (a word, phrase, number, or other sequence of symbols or elements, 
//whose meaning may be interpreted the same way in either forward or reverse direction). Hint: ignore spaces
// Example “alula” forwards and backwards is the same.
// “race car” forwards and backwards is the same.

function isPalindrome(string){
    let newString = string.replace(/\s/g, '').toLowerCase();
    let reverseString = newString.split("").reverse().join("");
    if (newString === reverseString){
        return true;
    }
    else{
        return false;
    }
}
 console.log(isPalindrome("alula"));
 console.log(isPalindrome("race car"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("Race car"));

// 3. Using a Prompt allow user to enter numbers separated by commas then print the sum of the numbers.

let numbers = prompt("Enter numbers separated by commas");
let sum = 0;
let array = numbers.split(",");
//using reduce method to sum the numbers
sum = array.reduce((a, b) => parseInt(a) + parseInt(b));
console.log(sum);
alert(sum);



// 4. Create a function that, given a DOM Element on the page, will visit the element itself 
// and all of its descendents (not just its immediate children). For each element visited,
//  the function should pass that element to a provided callback function.

// The arguments to the function should be:

// a DOM element

// a callback function (that takes a DOM element as its argument

let p_element =document.querySelector('#parent');
let p_callback = function(element){
    console.log(element);
}


function visitElement(element, callback){
    callback(element);
    let children = element.children;
    for (let i = 0; i < children.length; i++){
        visitElement(children[i], callback);
    }
}
