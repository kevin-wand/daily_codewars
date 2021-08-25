function miniMaxSum(arr) {
  let maxVal = arr.splice(arr.indexOf(Math.max(...arr)),1)
  let minVal = arr.splice(arr.indexOf(Math.min(...arr)),1)
  console.log(parseInt(minVal) + parseInt(arr.reduce((a, b) => a + b)), parseInt(maxVal) + parseInt(arr.reduce((a, b) => a + b)))
}

// console.log(miniMaxSum([1, 2, 3, 4, 5]))

function timeConversion(s) {
  s = s.toString()
  let conversion = s.indexOf("M")
  conversion = s.substring(s.length-2,s.length)
  let hour = ((conversion === "PM") ? ((s.substring(0,2) === "12") ? "12" : 12+parseInt(s.substring(0,2))) : ((s.substring(0,2) === "12") ? "00": parseInt(s.substring(0,2))))
  hour = ((hour.toString().length === 1) ? "0" + hour.toString() : hour.toString())
  return (hour+s.substring(2,s.length-2))

}

// console.log(timeConversion("12:05:45AM"))


function lonelyinteger(a) {
  return a.filter(num => a.indexOf(num) === a.lastIndexOf(num))

}

// console.log(lonelyinteger([1, 2, 3, 4, 3, 2, 1]))


function diagonalDifference(arr) {
  let left = 0
  let right = 0
  for (i = 0; i < arr.length; i++) {
    left = arr[i][i] + left
  }
  for (j = (arr.length - 1); j >= 0; j--){
    right = arr[arr.length - j -1][j] + right
  }
  return Math.abs(left-right)
}

// console.log(diagonalDifference([[11,2,4],[4,5,6],[10,8,-12]]))

function countingSort(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push("0")
  }
  arr.forEach((val) => {
    newArr[val]++
  })
  return newArr.splice(0,100)
}


console.log(countingSort([63,25,73,1,98,73,56,84,86,57,16,83,8,25,81,56,9,53,98,67,99,12,83,89,80,91,39,86,76,85,74,39,25,90,59,10,94,32,44,3,89,30,27,79,46,96,27,32,18,21,92,69,81,40,40,34,68,78,24,87,42,69,23,41,78,22,6,90,99,89,50,30,20,1,43,3,70,95,33,46,44,9,69,48,33,60,65,16,82,67,61,32,21,79,75,75,13,87,70,33]))