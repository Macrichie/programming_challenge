## The idea behind -
- A) Kadane's Algo - Basically I have to look for all contiguous sub-arrays of any size, in this example I used 4, and  also keep track of the maximum sum contiguous sub-array until the end. Whenever I find a new contiguous sub-array, I    check if the current sum is greater than the maxSub so far and updates it accordingly.

- B) In the first loop, I am just generating the sum of the sub-array of the first 4 elements.
- C) In the second loop, I am traversing a sliding window - at each iteration, I am deducting the first element from left and adding next element to the right. And after doing this, updaing the max_so_far to its highest value, by comparing it to its previous hightest value.
