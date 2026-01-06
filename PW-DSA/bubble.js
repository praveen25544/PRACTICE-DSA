// //SIMPLE--> APPROACH
// function bubbleSort(arr) {   //--function to perform bubble sort
//     let n = arr.length;      //--it helps to get the length of the array
//     for (let i = 0; i < n - 1; i++) {    
//         for (let j = 0; j < n - 1; j++) {    
//             if (arr[j] > arr[j + 1]) {   
//                 //--swap the elements
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];//--destructuring assignment to swap values
//             }
//         }
//     }
//     return arr;  //--return the sorted array
// }
// console.log(bubbleSort([65,1,4,8,3,7,9]));



//BEST--> APPROACH  
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let swapped = false; 
        for (let j = 0; j < n - i - 1; j++) { 
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return arr;
}
console.log(bubbleSort(["p","a","c","b","e" ]));
console.log(bubbleSort([5,3,8,6,2]));