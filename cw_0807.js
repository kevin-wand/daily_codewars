function convertFrac(lst) {
  let den = []
  let denTwo = []
  let denThree = []
  let occurrence = []
  let result = []

  lst.forEach((pair) => {
    den.push(pair[1])
  })

  let commonDenom = 1
  for (let d = 0; d < den.length; d++){
    commonDenom *= den[d]
  }

  den.forEach((num) => {
    while (commonDenom > 0) {
      if (commonDenom % num === 0) {
        denTwo.push(commonDenom)
      }
      commonDenom--
    }
  })
  denTwo.forEach((numTwo) => {
    den.forEach((num) => {
      if (numTwo % num === 0) {
        denThree.push(numTwo)
      }
    })
  })

  denTwo.forEach((num) => {
    let count = 0;
    denThree.forEach((val) => {
      (val === num && count++)
    });
    occurrence.push(count);
  })

  for (let i = 0; i < denTwo.length; i++) {
    if (occurrence[i] === den.length) {
      result.push(denTwo[i])
    }
  }
  
  let numerator = []
  lst.forEach((pair) => {
    numerator.push(pair[0])
  })

  let lcd = result[result.length - 1]
  let finalNumerator = []
  for (let j = 0; j < numerator.length; j++) {
    let x = 0
    while ((numerator[j] / den[j]) !== x / lcd) {
      x++
    }
    finalNumerator.push(x)

  }

  let finalAnswer = []
  
  for (let k = 0; k < den.length; k++) {
    finalAnswer.push(finalNumerator[k])
    finalAnswer = [...finalAnswer,lcd]
  }

  let finalFinal = []
  while (finalAnswer.length > 0) {
    finalFinal.push(finalAnswer.splice(0,2))
  }

  return (!lst.length ? `` : `(${finalFinal.join(")(")})`)
}

// var lst = [ [1, 2], [1, 3], [1, 4] ]
// Test.assertEquals(convertFrac(lst), "(6,12)(4,12)(3,12)")
// var lst = [ [1, 2], [1, 3], [1, 4] ]
var lst = []
var lst = [[69, 138], [80, 1310], [30, 40]]
console.log(convertFrac(lst))

/*

solve for answer:

const gcd = (a, b) => b ? gcd(b, a % b) : a;
const lcm = (a, b) => a * b / gcd(a, b);

function convertFrac(arr) {
  const cd = arr.reduce((a, [_, d]) => lcm(d, a), 1);
  return arr.map(([n, d]) => `(${n * cd/d},${cd})`).join('');
}

*/