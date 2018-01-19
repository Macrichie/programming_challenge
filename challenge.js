/*Programming Challenge:
Given an array with integers (both positive and negative) in any random order. Write a function that returns a sub-array of a given size with the largest sum.
*/
/*
// First Solution

function maxSubArrays(arr, subArr) {
    let curr = 0;

    for(let i = 0; i < subArr; i++) {
        curr += arr[i];
    }
    console.log(curr);
    let maxSub = curr;
    console.log(maxSub);
    for(let j = subArr; j < arr.length; j++) {
        curr += arr[j] - arr[j - subArr];
        maxSub = Math.max(curr, maxSub);

        console.log(curr, maxSub, arr[j]);
    }
    console.log(curr, maxSub);
    console.log(`===================================`);
    return maxSub;
}

console.log(maxSubArrays([-2, 1, -3, 4, -1, 2, 1, -5, 4], 4)); // 6
*/


// Second Solution

let maxSubArrays = function(arr) {
    let curr = 0;
    let sum = 0;
    console.log(curr, sum);

    for(let i = 0; i < arr.length; i++) {
        curr = Math.max(0, curr + arr[i]);
        sum = Math.max(curr, sum);

        console.log(curr, sum, arr[i]);
    }
    console.log(curr, sum);
    console.log(`===================================`);
    return sum;
}

console.log(maxSubArrays([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6

