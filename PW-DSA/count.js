// function countDigits(n) {
//   return n.toString().length;
// }
// console.log(countDigits(12345)); 


//BEST-FOR-INTERVIEW--> APPROACH
// function countDigits(n) {
//   // If the number is 0, it has exactly 1 digit
//   if (n === 0) return 1;

//   // log10(n) gives the power of 10 of the number
//   // Adding 1 gives the total number of digits
//   return Math.floor(Math.log10(n)) + 1;  
// }
// console.log(countDigits(126));


// let num=13456;
// function countdigitsn(num){     
//     let count=0;                 //its 0

//     while(num>0){                 //loop runs till num>0
//         num=Math.floor(num/10);   //num is divided by 10 and floored value is assigned to num
//         count++;                  //count is incremented by 1
//     }
//     return count;            
// }
// console.log(countdigits(num));


function countDigits(n) {
    n = Math.abs(n);      // handle negative numbers

    if (n === 0) return 1;

    let count = 0;
    while (n > 0) {
        count++;
        n = Math.floor(n / 10);
    }
    return count;
}
console.log(countDigits(0));      
console.log(countDigits(12345));  
console.log(countDigits(-1001));  

