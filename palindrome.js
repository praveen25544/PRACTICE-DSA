// //palindrome is written reversed same as number or string
// function isPalindrome(str) {
//   const reversedStr = str.split('').reverse().join('');
//   return str === reversedStr;
// }    
// console.log(isPalindrome("racecar")); // true


// //another approach
// function isPalindrome(str) {
//   const len = str.length;
//   for (let i = 0; i < len / 2; i++) {
//     if (str[i] !== str[len - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isPalindrome("11211")); 



//best approach
// function isPalindrome(str) {
//   let left = 0;
//   let right = str.length - 1;
//     while (left < right) {
//         if (str[left] !== str[right]) {
//             return false;
//         }   
//         left++;
//         right--;
//     }   
//     return true;
// }
// console.log(isPalindrome("1132311"));
// console.log(isPalindrome("hello")); 


//for DSA approach
function Palindrome(num) {
  let or = num;      // original number store
  let rev = 0;       // reversed number

  while (num > 0) {
    let rem = num % 10;        // last digit nikalte hain
    rev = rev * 10 + rem;      // reverse number banate hain
    num = Math.floor(num / 10);  // last digit remove karte hain
  }

  return or === rev; // compare original and reversed
}
console.log(Palindrome(121)); 