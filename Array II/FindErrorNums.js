// function findErrorNums(nums) {
//   var map = new Map();
//   var duplicate = 0;
//   var missing = 0;
//   for (var num of nums) {
//     if (!map.has(num)) {
//       map.set(num, 1);
//     } else {
//       map.set(num, map.get(num) + 1);
//     }
//   }
//   console.log(map);
//   for (var i = 1; i <= nums.length; i++) {
//     if (map.has(i)) {
//       if (map.get(i) > 1) {
//         duplicate = nums[i];
//       }
//     } else {
//       missing = i;
//     }
//   }

//   return [duplicate, missing];
// }

console.log(findErrorNums([2, 2]));

// Time Complexity - O(n)
// Space Complexity - O(n)
