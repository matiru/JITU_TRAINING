
// write a function that receives 2 strings and returns true if they are anagrams of each other.


function isAnagram(str1, str2) {
  
    if(str1.length !== str2.length) {
      return false;
    }
    
    let str3 = str1.split('').sort().join('').toLowerCase();
    let str4 = str2.split('').sort().join('').toLowerCase();
  
    if (str3 === str4) {
      return true;
    } else {
        return false;
        
        }
       
}

console.log(isAnagram('listen', 'silent'));
console.log(isAnagram('listen', 'silen'));
console.log(isAnagram('listen', 'SILENT'));