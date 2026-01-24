function findMaxConsecutiveOnes(nums) {
  var count = 0;
  var max = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      max = Math.max(max, count);
      count = 0;
    }
  }
  return Math.max(max, count);
}

// function findMaxConsecutiveOnes2(nums) {
//   var max = 0;
//   var count = 0;
//   for (var i = 0; i < nums.length; i++) {
//     if (nums[i] === 1) {
//       count++;
//       if (count > max) {
//         max = count;
//       }
//     } else {
//       count = 0;
//       continue;
//     }
//   }

//   return max;
// }

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));

// Time Complexity - O(n)
// Space Complexity - O(n)
