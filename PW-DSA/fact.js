//BEST - FOR DSA--> APPROACH

// function factorial(n) {
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }

// console.log(factorial(6));

//RECURSIVE APPROACH
function factorialRecursive(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorialRecursive(n - 1); // recursive call
}
console.log(factorialRecursive(5)); 

//same steps as above using ternary operator
// function factorial(n){
//     if (n==0 )
//         return 1;
//     else
//         return n*factorial(n-1);
// }
// console.log(factorial(4));