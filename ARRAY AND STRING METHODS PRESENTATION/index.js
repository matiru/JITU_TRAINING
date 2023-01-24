///////////
//FILTER METHOD
  
// const users = [
//   { name: "John", age: 34 },
//   { name: "Amy", age: 20 },
//   { name: "camperCat", age: 10 },
// ];

// const usersUnder30 = users.filter((user) => user.age < 30);
// console.log(usersUnder30);
 
// const usersAmy = users.filter((user) => user.name === "Amy");
// console.log(usersAmy);



// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const filteredNumbers = numbers.filter((number) => {
//   return number > 10;
// }
//  );

// console.log(filteredNumbers);


// const ages = [32, 33, 16, 40];
// const legal = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }
// console.log(legal);





//////////
//SHIFT METHOD
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift();
// console.log(fruits);

//////////
//UNSHIFT METHOD
// The unshift() method adds new elements to the beginning of an array.
// The unshift() method overwrites the original array.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("Lemon","Pineapple");
// console.log(fruits);




//////map method
// map() creates a new array from calling a function for every array element.

// map() calls a function once for each element in an array.

// map() does not execute the function for empty elements.

// map() does not change the original array

// const numbers = [65, 44, 12, 4];
// const newArr = numbers.map(myFunction)

// function myFunction(num) {
//   return num * 10;
// }
// console.log(newArr);


///////////
//Sort method
// The sort() method sorts the items of an array.
// The sort() overwrites the original array.
// The sort() sorts the elements as strings in alphabetical and ascending order.    
// The sort() method does not work with numbers. It will produce incorrect result.
// The sort() method can take a compare function as a parameter.
// The compare function should return a negative, zero, or positive value, depending on the arguments.
// The compare function should return a negative value if the first argument is less than the second.
// The compare function should return a positive value if the first argument is greater than the second.
// The compare function should return 0 if the arguments are equal.


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// console.log(fruits);

// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return a - b});
// console.log(points);

// const points1 = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return b-a});
// console.log(points1);


  












//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///STRING METHODS

/////////
//CONCAT METHOD

// let text1 = "Hello";
// let text2 = "world!";
// let result = text1.concat(" ", text2);
// console.log(result);


///////////
// //  INCLUDES METHOD
// let text = "Hello world, welcome to the universe. world";
// let result1 = text.includes("world",7 );
// console.log(result1);


///////////
//TO STRING METHOD 
// let x = 123;
// x.toString();
// console.log(typeof(x));
// console.log( x.toString(2));

// let word = new String("Hello World!");
// console.log(typeof(word));
// let result2 = word.toString();
// console.log(typeof(result2));
