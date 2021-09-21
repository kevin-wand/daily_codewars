function findOdd(A) {
  let unique = [...new Set(A)]
  let occurences = []
  for (let i = 0; i < unique.length; i++) {
    occurences.push(0)
  }
  for (let j = 0; j < A.length; j++) {
    if (unique.indexOf(A[j]) > -1) {
      occurences[(unique.indexOf(A[j]))]++
    }
  }
  for (let k = 0; k < occurences.length; k++) {
    if (occurences[k] % 2 != 0) {
      return unique[k]
    }
  }
}

// [  20, 1, -1, 2, -2, 3,  5, 4]
console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))