
// write a function that receives 2 strings and returns true if they are anagrams of each other.


// function isAnagram(str1, str2) {
//   str1 = str1.replace(/\s/g, '').toLowerCase().sort();
//   str2 = str2.replace(/\s/g, '').toLowerCase().sort();
//   return str1 === str2;
  
    
 
// }

// console.log(isAnagram('listen', 'silent'));
// console.log(isAnagram('listen', 'silen'));
// console.log(isAnagram('listen', 'SILENT'));


// write a function that returns the nth number in the fibonacci sequence
//fibonacci is a number which is  sum  of the two preceding numbers in the sequence

// function fibonacci(n) {
//   if (n <= 0) {
//     return n;
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log(fibonacci(5));

function fibonacci(w,x,y)
{
  fib =0;
  // x = 0;
  // y = 1;

  for (let i = 1; i<5 ; i++)
  {
    fib = x + y;
    console.log(fib);
    console.log(".......");
    console.log(".......");
    console.log(".......");
    x = y;
    console.log(x);
    console.log(".......");  
    console.log(".......");
    y = fib;
    console.log(y);
    console.log(".......");
    console.log(".......");
  }
  return fib;

}

console.log(fibonacci(5));
