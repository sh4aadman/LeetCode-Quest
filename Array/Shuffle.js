function shuffle(nums, n) {
  var res = [];
  var arr1 = nums.slice(0, n);
  var arr2 = nums.slice(n);
  var i = 0;
  var j = 0;
  while (i < arr1.length && j < arr2.length) {
    res.push(arr1[i], arr2[j]);
    i++;
    j++;
  }
  return res;
}

// function shuffle2(nums, n) {
//   var res = [];
//   for (var i = 0; i < n; i++) {
//     res.push(nums[i], nums[i + n]);
//   }
//   return res;
// }

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
// console.log(shuffle2([2, 5, 1, 3, 4, 7], 3));

// Time Complexity - O(n)
// Space Complexity - O(n)
