// let arr = [];
// arr.push(1);
// arr.push(4);
// arr[2] = 5;

// arr.pop();
// console.log(arr);


// let arr = new Array(6);
// for(let i=0;i<arr.length;i++){
//     arr[i] =Number(prompt("enter a value ->"));
// }

// console.log(arr);


// let arr =[10,20,40,50];
// let sum = 0;

// for(let i=0;i<arr.length;i++){
//     sum += arr[i]; // sum = sum + arr[i]; --same thing
// }
// console.log(sum);


//two sum problem
// let arr =[10,20,40,50];
// let target = 60;
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]+arr[j]===target){
//             console.log(` (${arr[i]}, ${arr[j]})`);
//         }
//     }
// }
// console.log("no more pairs");

//Three sum problem
let arr =[10,20,40,50,70,30];
let target = 100;    
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        for(let k=j+1;k<arr.length;k++){ 
            if(arr[i]+arr[j]+arr[k]===target){
                console.log(` (${arr[i]}, ${arr[j]}, ${arr[k]})`);
            }
        }
    }
}
console.log(arr);

