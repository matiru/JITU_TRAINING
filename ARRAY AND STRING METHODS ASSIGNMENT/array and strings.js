1// Write a JavaScript program to remove duplicate items from an array ignoring case sensitivity

let fruits = ["apple", "banana", "orange", "apple", "pineapple","Orange"];

function removeDuplicates(arr) {

    let  fruits2 = arr.map(function(item) {
        return item.toLowerCase();
    });

    let uniqueFruits = [...new Set(fruits2)];
    return uniqueFruits;
}
console.log(removeDuplicates(fruits));


2.// Write a JavaScript function to find an array contains a specific element.
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function contains(array, element) {
  return array.includes(element);
}
console.log(contains(array, 5));



// Compact. Write a method that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null
//  Example: [3, 8, 23, "hello", " ", false, "45"]result: [3, 8, 23, "hello", "45"
let arr = [3, 8, 23, "hello", " ", false, "45"];

function clearArray1(arr){
    return arr.filter(function(item){
        return item !== false && item !== undefined && item !== " " && item !== 0 && item !== null;  
        });
}
 console.log(clearArray1(arr));







//4.// Write a function to reverse the words a string.example: "Hello world"result: "world hello"

let str = "Hello world I am here";
let reverse = str.split(" ").reverse().join(" ");
console.log(reverse);



//////////////////////
// // RECURSION -SELF CALLING FUNCTIONS

// const company={
//     accounts:[{name:"John" ,salary: 1000, },
//     {name:"Mary" ,salary: 2000, }],
    
//     research:{
//         rd:[{name:"Tate" ,salary: 1000, }, {name:"Bundi" ,salary: 2000, }],
//         imp:[{name:"Smith" ,salary: 1000, }, {name:"Matiru" ,salary: 2000, }]
//     }

// }

// function calculateSalary(company){
//     if (Array.isArray(company)){
//         return company.reduce(total=0,person=> total+person.salary,0)
        
//     }else{
//         let total_salary=0;
//         for (const  dept of dept){
//             total_salary+=calculateSalary(dept)
//         }
//         return total_salary
//     }
            
        
    
// }
// console.log(calculateSalary(company));
//        console.log(total_salary);
