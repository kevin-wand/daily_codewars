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


console.log(caesarCipher("Hello_World!",4))