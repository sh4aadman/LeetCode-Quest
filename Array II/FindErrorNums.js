function findErrorNums(nums) {
  var n = nums.length;
  var seen = new Set();

  for (var num of nums) {
    if (seen.has(num)) {
      duplicate = num;
    }
    seen.add(num);
  }

  console.log(seen);

  for (var i = 1; i <= n; i++) {
    if (!seen.has(i)) {
      var missing = i;
    }
  }

  return [duplicate, missing];
}

console.log(findErrorNums([1, 2, 2, 4]));
console.log(findErrorNums([1, 1]));

// Time Complexity - O(n)
// Space Complexity - O(n)
