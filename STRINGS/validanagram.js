var isAnagram = function(s, t) {
    // Step 1: If lengths are different → cannot be anagram
    if (s.length !== t.length) return false;

    // Step 2: Create a frequency map for characters of s
    let freq = {};//freq == map

    for (let ch of s) {
        freq[ch] = (freq[ch] || 0) + 1; //logical OR operator used in this
        // line to check if freq[ch] exists then add 1 and if not exists then set to 0 and
    }

    // Step 3: Reduce counts using t
    for (let ch of t) {
        // If char not in map or count already zero → not an anagram
        if (!freq[ch]) return false;
        freq[ch]--;
    }

    // Step 4: All counts matched → valid anagram
    return true;
};//ch means character
console.log(isAnagram(s="anagram", t="nagaram")); // true
