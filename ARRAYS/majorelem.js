var majorityElement = function(nums) {
    let count = 0;          // current candidate ka count
    let candidate = null;   // majority element ka possible candidate

    // array ke har element ke liye loop
    for (let num of nums) {
        // agar count 0 hai → naye candidate ko set karo
        if (count === 0) {
            candidate = num;
        }

        // agar current number candidate ke equal hai → count +1
        // agar current number candidate se different hai → count -1
        count += (num === candidate) ? 1 : -1;
    }

    // loop khatam hone ke baad candidate hi majority element hota hai
    return candidate;
};