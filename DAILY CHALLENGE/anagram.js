
// write a function that receives 2 strings and returns true if they are anagrams of each other.


function isAnagram(str1, str2) {
  str1 = str1.replace(/\s/g, '').toLowerCase().sort();
  str2 = str2.replace(/\s/g, '').toLowerCase().sort();
  return str1 === str2;
  
    
 
}

console.log(isAnagram('listen', 'silent'));
console.log(isAnagram('listen', 'silen'));
console.log(isAnagram('listen', 'SILENT'));