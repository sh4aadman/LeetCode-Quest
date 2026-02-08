function findDisappearedNumbers(nums) {
  for (var num of nums) {
    var i = Math.abs(num) - 1;
    nums[i] = -1 * Math.abs(nums[i]);
  }

  var result = [];

  for (var j = 0; j < nums.length; j++) {
    if (nums[j] > 0) result.push(j + 1);
  }

  return result;
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDisappearedNumbers([1, 1]));

// Time Complexity - O(n)
// Space Complexity - O(1)
