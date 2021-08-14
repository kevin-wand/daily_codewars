/*
learn about Sets
(unique values)
let unique = [...new Set(word)]
*/


function duplicateEncode(word) {
  word = word.toLowerCase().split("")
  let unique = []
  let answer = []
  word.forEach((letter) => {
    if (word.indexOf(letter) === word.lastIndexOf(letter)) {
      unique.push(true)
    } else {
      unique.push(false)
    }
  })
  unique.forEach((val) => {
    if (val === true) {
      answer.push('(')
    } else {
      answer.push(')')
    }
  })
  return answer.join("")
}


// console.log(duplicateEncode("din"))     //"((("
// console.log(duplicateEncode("recede"))  //"()()()"
console.log(duplicateEncode("Success")) //")())())","should ignore case"
// console.log(duplicateEncode("(( @"))    //"))(("

/*
alternate solutions

function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}

*/