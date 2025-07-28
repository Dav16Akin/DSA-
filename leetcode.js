function hasDuplicate(nums) {
  return new Set(nums).size < nums.length;
}

// console.log(hasDuplicate([1, 2, 3, 3]));

function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const arr1 = s.split("").sort().join();
  const arr2 = t.split("").sort().join();

  return arr1 == arr2;
}

console.log(isAnagram("jar", "jam"));
