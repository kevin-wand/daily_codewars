function pigIt(str){
  let answer = []
  let special = /[^\w\s]/g
  if (str.search(special) > 0) {
    let count = str.search(special)
    let replace = str.slice(str.search(special), str.search(special) + 1)
    str = str.split('')
    str.splice(count, 1)
    str = str.join('').split(' ')
    str.forEach((word) => {
      word = word.toString().split('')
      if (word.length) {
        let first = word.splice(0, 1)
        answer.push(word.join('').concat(first) + 'ay')
        count = count + 2
      }
    })
    answer.splice(count, 0, replace)
    answer = answer.join(" ")
    return answer
  } else {
    str = str.split(' ')
    str.forEach((word) => {
      word = word.toString().split('')
      let first = word.splice(0, 1)
      answer.push(word.join('').concat(first) + 'ay')
    })
    answer = answer.join(" ")
    return answer
  }
}

console.log(pigIt('Pig latin is cool')) //'igPay atinlay siay oolcay'
console.log(pigIt('This is my string')) //'hisTay siay ymay tringsay'
console.log(pigIt('O tempora o mores !')) //'Oay emporatay oay oresmay !'

/*
alternate solutions

function pigIt(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}

Uses a regex to create 3 groups: 1) first letter, 2) rest of the word, then 3) either space or end of the string.
The "g" in the end of it means that it has not to stop at the first match, but it has to find all the (non overlapping) occurrences of it.
the rest reutilizes the groups (using \$n, with n being the group number) to recompose the string

str.replace(/(\w)(\w+)\b/ig,"$2$1ay")
\b (zero-width word boundary)

function pigIt(str) {
  return str.replace(/\w+/g, (w) => {
    return w.slice(1) + w[0] + 'ay';
  });
}
*/