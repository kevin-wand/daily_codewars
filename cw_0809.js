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

var maxSequence = function(arr){
  let current = 0
  let longest = []
  for (let i = 0; i < arr.length; i++){
    let newArr = newArr.push(arr[i])
    let compare = []
    compare = compare.reduce((a, b) => a + b, 0)
    while (compare >= arr[i]) {
      
    }

  }
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
// get an array length, compare against "current value"
// make this "newArr"
// if array reduced is less than array length, then add a new value to it
// -2 < 0, stop iteration, go to next value
// 1 > 0, add a value, -2 < 0, stop iteration
//  -3 < 0
//  4 > 0, add a value, 3 > 0, add a value 5 > 0, after each sequence push if the value was greater
// next reduces, so stop and then try again
// only push if value was greater
// return the highest array