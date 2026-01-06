var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let res = [];

    for (let i = 0; i < nums.length - 2; i++) {         //-2 because we need at least 3 numbers to continue
        if (i > 0 && nums[i] === nums[i - 1]) continue; //for skipping duplicates

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {                         //while expresses that left pointer is less than right pointer
            let sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                res.push([nums[i], nums[left], nums[right]]); //found a triplet

                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            } 
            else if (sum < 0) {
                left++;
            } 
            else {
                right--;
            }
        }
    }
    return res;
};
console.log(JSON.stringify(threeSum([-1,0,1,2,-1,-4])));//to convert answer to string 