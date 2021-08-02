function highAndLow(numbers){
  numbers = numbers.split(" ").sort((a,b) => parseInt(a) - parseInt(b))
  
  return (`${numbers[numbers.length-1]} ${numbers[0]}`)
}

// highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214"); 
// console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"))

/*
Alternate solutions
function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}
function highAndLow(numbers) {
  var arr = numbers.split(" ");
  return Math.max.apply(null, arr) + ' ' + Math.min.apply(null, arr);
}
*/

function sumDigPow(a, b) {
  let eureka = []
  for (let i = a; i <= b; i++) {
    let sumVal = 0
    let values = []
    let arr = i.toString().split("")
    arr.forEach((num) => {
      values.push(parseInt(num))
    })
    for (let j = 0; j < values.length; j++){
      sumVal += (values[j] ** (j+1))
    }
    if (sumVal >= a && sumVal < b && sumVal === i) {
      eureka.push(sumVal)
    }
  }
  return eureka
}

// (sumDigPow(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9])
// (sumDigPow(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89])
// (sumDigPow(10, 100),  [89])
// (sumDigPow(90, 100), [])
// (sumDigPow(90, 150), [135])
// (sumDigPow(50, 150), [89, 135])
// (sumDigPow(10, 150), [89, 135])
console.log((sumDigPow(1, 10)))
console.log((sumDigPow(1, 100)))
console.log((sumDigPow(10, 100)))
console.log((sumDigPow(90, 100)))
console.log((sumDigPow(90, 150)))
console.log((sumDigPow(50, 150)))
console.log((sumDigPow(10, 150)))

/*
Alternate solution

function sumDigPow(a, b) {
  var arr = [];
  for (var i = a; i <= b; i++) {
    var sum = 0;
    for (var j = 0; j <= String(i).length; j++) {
      sum += Math.pow(parseInt(String(i)[j]), j+1);  
      if (sum == i) arr.push(i);
    }
  }
  return arr;
}
*/