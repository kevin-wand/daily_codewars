function arrayDiff(a, b) {
  return a.filter(num => b.indexOf(num) === -1)
}

// (arrayDiff([], [4,5]), [], "a was [], b was [4,5]");
// (arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]");
// (arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []");
// (arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")

arrayDiff([], [4, 5])
arrayDiff([3,4], [3])
arrayDiff([1,8,2], [])
arrayDiff([1,2,3], [1,2])

