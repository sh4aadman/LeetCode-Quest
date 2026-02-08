function smallerNumberThanCurrent(nums) {
  var sorted = [...nums].sort((a, b) => a - b);
  var map = new Map();

  for (var i = 0; i < sorted.length; i++) {
    if (!map.has(sorted[i])) map.set(sorted[i], i);
  }

  return nums.map((num) => map.get(num));
}

console.log(smallerNumberThanCurrent([8, 1, 2, 2, 3]));
console.log(smallerNumberThanCurrent([7, 7, 7, 7]));
console.log(smallerNumberThanCurrent([6, 5, 4, 8]));

// Time Complexity - O(nlogn)
// Space Complexity - O(n)
