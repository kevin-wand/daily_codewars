function highestRank(arr){
  let unique = []
  let freq = []
  arr = arr.sort((a, b) => b - a)
  for (let i = 1; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i])
    }
  }
  unique.forEach((num) => {
    let count = 0
    arr.forEach((val) => {
      (val === num && count ++)
    })
    freq.push(count)
  })
  let arrMax = Math.max(...freq)
  let index = freq.indexOf(arrMax)
  return unique[index]
}

// var arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
// var arr = [12, 10, 8, 12, 7, 6, 4, 10, 12]              // -->  12
// var arr = [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          // -->  12
// var arr = [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  // -->   3
// assert.strictEqual( highestRank(arr), 12);
// console.log(highestRank(arr))

/*
alternate solution

function highestRank(arr){
  return arr.sort((a,b)=>arr.filter(i=>i===b).length - arr.filter(i=>i===a).length)[0];
}

*/
