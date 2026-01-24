function getConcatenation(nums) {
  var ans = [...nums, ...nums];
  return ans;
}

// function getConcatenation2(nums) {
//   return nums.concat(nums);
// }

console.log(getConcatenation([1, 2, 1]));
// console.log(getConcatenation2([1, 2, 1]));

// Time Complexity - O(n)
// Space Complexity - O(n)