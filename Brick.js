function largestSubsequenceDivisibleBy5(stoneValues) {
    const n = stoneValues.length;
    let prefixSum = 0;
    const modMap = { 0: -1 }; 
    let maxLength = 0;
    let start = -1, end = -1;

    for (let i = 0; i < n; i++) {
        prefixSum += stoneValues[i];
        const remainder = prefixSum % 5;

        if (modMap.hasOwnProperty(remainder)) {
            const length = i - modMap[remainder];
            if (length > maxLength) {
                maxLength = length;
                start = modMap[remainder] + 1;
                end = i;
            }
        } else {
            modMap[remainder] = i;
        }
    }
    if (maxLength > 0) {
        return stoneValues.slice(start, end + 1);
    }
    return [];
}
const stoneValues = [3, 1, 4, 2, 5, 7, 9];
const result = largestSubsequenceDivisibleBy5(stoneValues);
console.log("Largest subsequence divisible by 5:", result);