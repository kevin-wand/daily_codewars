function towerBreakers(n, m) {
  if (n % 2 === 0 || m === 1) {
    return 2
  } else {
    return 1
  }
}

// console.log(towerBreakers(2,2))
// console.log(towerBreakers(1, 4))

function caesarCipher(s, k) {
  let lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  let upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  s = s.split("")
  let answer = []
  s.forEach((letter) => {
    if (lower.indexOf(letter) > -1 && upper.indexOf(letter) === -1) {
      let position = lower.indexOf(letter) + k
      if (position >= 26) {
        position = (position % 26)
      }
      answer.push(lower[position])
    } else if (upper.indexOf(letter) > -1 && lower.indexOf(letter) === -1) {
      let position = upper.indexOf(letter) + k
      if (position >= 26) {
        position = (position % 26)
      }
      answer.push(upper[position])
    } else {
      answer.push(letter)
    }
  })
  return answer.join("")
}


// console.log(caesarCipher("Hello_World!",4))

function palindromeIndex(s) {
  let halfLength = (s.length -1) / 2
  let backHalf = s.split("").reverse().join("")
  if (s.substring(0, halfLength) === backHalf.substring(0, halfLength)) {
    return -1
  } else {
    s = s.split("")
    for (let i = 0; i < s.length; i++) {
      let answer = s.slice(0, i).concat(s.slice(i+1,s.length)).join("")
      backHalf = s.slice(0, i).concat(s.slice(i+1,s.length)).join("").split("").reverse().join("")
      
      if (answer.substring(0, halfLength) === backHalf.substring(0, halfLength)) {
        return i
      }
    }

    }

}

// console.log(palindromeIndex("aaab"))


function gridChallenge(grid) {
  let lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  for (let m = 0; m < grid.length; m++) {
    grid[m] = grid[m].split("")
    let abc = grid[m]
    abc.sort((a, b) => {
      return lower.indexOf(a) - lower.indexOf(b)
    })
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 1; j < grid[i].length; j++) {
      if (lower.indexOf(grid[i][j-1]) > lower.indexOf(grid[i][j])) {
        return "NO"
      }
      if (lower.indexOf(grid[j-1][i]) > lower.indexOf(grid[j][i])) {
        return "NO"
      }
    }
  }
  return "YES"
}

// console.log(gridChallenge(['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']))
// console.log(gridChallenge(['ppp', 'ypp', 'wyw']))

function superDigit(n, k) {
  let numSplit = n.toString().split("")
  // let adder = n.toString().split("")
  // let repeat = k * numSplit.length
  // while (numSplit.length < repeat ) {
  //   numSplit = numSplit.concat(adder)
  // }
  let val = numSplit.reduce((a, b) => parseInt(a) + parseInt(b))
  val = val * k
  return (val.toString().length === 1 ? val : superDigit(val, 1))

}

console.log(superDigit(861568688536788,100000))


