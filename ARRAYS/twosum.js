//  let twosum = function(nums, target) {
//     let n = nums.length;

//     for (let i = 0; i < n; i++) {
//         for (let j = i + 1; j < n; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [nums[i], nums[j]]; // or return [i, j]
//             }
//         }
//     }
//     return false;
// };

// console.log(twosum([1, 2,3, 7,4, 5, 9], 10));

//BEST - APPROACH
let twosum = function(nums, target) {
    let map = new Map(); // numbers we have seen

    for (let i = 0; i < nums.length; i++) {
        let required = target - nums[i]; // number we need to complete target

        if (map.has(required)) {
            return [required, nums[i]]; // pair found
        }

        map.set(nums[i], i); // store current number
    }

    return false; // no pair found
};

console.log(twosum([1, 2, 4, 7, 5, 9], 9));