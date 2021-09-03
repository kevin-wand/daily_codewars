var maxSequence = function (arr) {
  if (!arr.length) {
    return 0
  } else if (arr.length === 1) {
    return arr[0]
  } else {
    let counter = arr.length
    let masterHolder = []
    for (let h = 0; h < counter; h++){
      let holder = []
      for (let i = 0; i < arr.length; i++) {
        let sequence = arr.slice(0, arr.length - i)
        holder.push(sequence.reduce((a, b) => a + b, 0))
      }
      let check = Math.max(0,...holder)
      masterHolder.push(check)
      arr.shift()
    }
    return Math.max(0,...masterHolder)
  }
}

// console.log(maxSequence([]))    //  0
// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))    //  6
// console.log(maxSequence([ 7, 4, 11, -11, 39, 36, 10, -6, 37, -10, -32, 44, -26, -34, 43, 43 ]))    //  the whole sequence sum is 155
// console.log(maxSequence([ [-13,-23,-43,-43,28,-44,-36,25,5,-21],[-27,31,-7,-46,-2,48,-19,40,-4,19,-7],[-41,-7,-26,16,-40,14,15,-25,-24,-38] ]))    //  
// console.log(maxSequence([ -13,-23,-43,-43,28,-44,-36,25,5,-21,-27,31,-7,-46,-2,48,-19,40,-4,19,-7,-41,-7,-26,16,-40,14,15,-25,-24,-38 ]))    //  
console.log(maxSequence([ -10,43,22,-3,-40,44,-50,-48,26,5,-45,41,-2,-10,24,48,8,25,32,-21,-16,-37,-10,-24,-32,8,-25,-49,7,15,31,7,-1,-25,-39,18,-14,-7,-49,-48,-3,8,-47,-47,19,-25,-25,41,35,39,-0,-10,49,-47,-7,39,36,41,-15,-42,15,-24,-4,-23 ]))    //  

/*
alternate solutions

var maxSequence = function(arr){
  var min = 0, ans = 0, i, sum = 0;
  for (i = 0; i < arr.length; ++i) {
    sum += arr[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
  }
  return ans;
}

var maxSequence = function(arr){
    var currentSum = 0;
    return arr.reduce(function(maxSum, number){
        currentSum = Math.max(currentSum+number, 0);
        return Math.max(currentSum, maxSum);
    }, 0);
}

*/