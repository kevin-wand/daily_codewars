function minimumBribes(q) {
  let count = 0

  for (let i = 0; i < q.length;i++) {
    if (q[i] - 3 > i) {
      console.log("Too chaotic")
      return
    } else {
      for (let j = Math.max(0, q[i] - 2); j < i; j++) {
        if (q[j] > q[i]) {
          count++
        }
      }
    }
  }

  return count

}

console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]))
