function twoSum(numbers, target) {
  let answer = []
  let solution = 0
  for (let i = 0; i < numbers.length; i++) {
    let delta = target - numbers[i]
    solution = numbers.indexOf(delta)
    if (solution !== -1) {
      answer.push(i)
      i === solution ? answer.push(solution + 1) : answer.push(solution)
      return answer
    }
  }
}

// twoSum([1,2,3], 4).sort(numericalCompare), [0,2]
// twoSum([1234,5678,9012], 14690).sort(numericalCompare), [1,2]
// twoSum([2,2,3], 4).sort(numericalCompare), [0,1]
console.log(twoSum([1,2,3], 4))
console.log(twoSum([1234, 5678, 9012], 14690))
console.log(twoSum([2, 2, 3], 4))

/*
alternate solution

function twoSum(numbers, target) {
  for (var i = 0; i < numbers.length-1; i++) {
      for (var j = i+1; j < numbers.length; j++) {
          if (numbers[i] + numbers[j] === target) return [i, j];
      }
  }
}

*/