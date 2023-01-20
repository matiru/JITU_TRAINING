// 1.	Write a JavaScript function that receives a number as a parameter and logs whether it is even or odd.

function is_odeven(num)
{
    if (num % 2 === 0)
    {
        console.log(" Number " + num +" is even")
    }
    else{
        console.log( " Number " + num +" is odd")
    }

    return  num;
}

let num = 52;
is_odeven(num);

// 2.	Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// Example string: 'Web Development Tutorial'
// Expected Output: 'Development'
// 

function longest_word(string)
{
 let str = string.split(" ");
 let longest = 0;

 let word = null ;
 console.log(word);
 for (let i = 0; i < str.length; i++) {
     if (longest < str[i].length) {
         longest = str[i].length;
         word = str[i];
     }
 } 
    return word;
}
 let string = "Although programming can be tough it is very rewarding";
console.log(longest_word(string));








// 3.	Write a JavaScript function to get the last element of an array and the number of items in the array.



function last_element_item(array){

    let  last_element = array[array.length -1];
    let  items_number = array.length;

    return [last_element, items_number];


}
const array = ["chelsea" , "city" ,"brighton","liverpool"];
console.log(array.length)
 
console.log(last_element_item(array));




// 4.	Write a JavaScript function that will insert the property “published_on” in the below object. 
//The value of the property should be the current date generated using the Date object.
// {
//        author: 'Suzanne Collins',
//        title:  'Mockingjay: The Final Book of The Hunger Games', 
//        readingStatus: false
//    }

const book = {
    author: 'Suzanne Collins',
    title:  'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
};
console.log(book);
function add_property(book){
    book.published_on =  new Date();
    return book;
}
console.log(add_property(book));
console.log(book);