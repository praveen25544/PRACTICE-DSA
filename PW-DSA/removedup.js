let removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let k = 1; // first element hamesha unique hota hai

    for (let i = 1; i < nums.length; i++) { // second element se start karte hain
        if (nums[i] !== nums[i - 1]) {     // agar current element previous element se different hai
            nums[k] = nums[i]; // to usse k position par place kar do
            k++; 
        }
    }
    return k;
};

console.log(removeDuplicates([1,5,5,7,7,8,8,10])); 