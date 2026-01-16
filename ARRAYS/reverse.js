function reverseArray(arr) {
  let n = arr.length;
    for (let i = 0; i < n / 2; i++) {    //n/2 kyo ki swapping ke baad beech tak aajayega
        let temp = arr[i];              // swap logic
        arr[i] = arr[n - 1 - i];       // kyo n-1-i because last element se start karna hai
        arr[n - 1 - i] = temp;       // temp mein store karke swap kar rahe hain
    }
    return arr;
}   
console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//another approach
let arr = [10,20,30,40,50];
let temp = new Array(arr.length);

 let j = 0;
for(let i =arr.length-1; i>=0; i--){  // i =[4];
    temp[j] =arr[i]
    j++;
}
console.log(temp);
