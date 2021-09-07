function verticalHistogramOf(s){
  let not = /[a-z0-9\s\W_]/g
  s = s.split("")
  for (let i = 0; i < s.length; i++) {
    s[i] = s[i].replace(not, '')
  }
  let unique = [...new Set(s)]
  unique.sort()
  if (unique[0] === '') { unique.shift() }
  if (!unique.length) { return '' }
  let count = []
  for (let j = 0; j < unique.length; j++){
    count.push(0)
  }
  for (let k = 0; k < s.length; k++) {
    if (unique.indexOf(s[k]) > -1) {
      count[unique.indexOf(s[k])]++
    }
  }
  let display = []
  for (let m = 0; m < unique.length; m++) {
    display.push([])
    for (let n = s.length; n > 0; n--) {
      if (n <= count[m]) {
        display[m].unshift("*")
      } else {
        display[m].unshift(" ")
      }
    }
    display[m].reverse().push(unique[m])
  }
  let transpose = []
  for (let o = 0; o < display[0].length; o++) {
    let temp = []
    for (let q = 0; q < display.length; q++) {
      temp.push(display[q][o])
    }
    transpose.push(temp)
    transpose[o].join(' ')
  }
  for (let r = 0; r<transpose.length; r++) {
    transpose[r] = transpose[r].join(' ')
  }
  transpose = transpose.toString()
  let convert = new RegExp(/[\s]{0,},/)
  while (convert.test(transpose)) {
  transpose = transpose.replace(convert,'\n')
  }
  return (transpose.substring(1,transpose.length))
}

console.log(verticalHistogramOf("XXY YY ZZZ123ZZZ AAA BB C"))
// `          *
//           *
//           *
// *       * *
// * *   * * *
// * * * * * *
// A B C X Y Z`
// console.log(verticalHistogramOf("abc123"))
// ""
// console.log(verticalHistogramOf("AAABBC"))
// `*
// * *
// * * *
// A B C`

/*
'\n
          *\n
          *\n
          *\n
*       * *\n
* *   * * *\n
* * * * * *\n
A B C X Y Z'
'          *\n
          *\n
          *\n
*       * *\n
* *   * * *\n
* * * * * *\n
A B C X Y Z'*/
console.log(verticalHistogramOf("(FDCD)FCFFCCC, C"))
/*
*   *\n
* * *\n
* * *\n
C D F

*\n
*\n
*   *\n
*   *\n
* * *\n
* * *\n
C D F
*/

/*
alternate solution
function verticalHistogramOf(s){
  let cnt = [...s.replace(/[^A-Z]/g,'')].reduce((o,c)=>(o[c]=o[c]+1||1,o), {});
  let k   = Object.keys(cnt).sort();
  let n   = Math.max(...Object.values(cnt));
  const buildLine = i => (i==n ? k : k.map(x=>cnt[x]>=n-i?'*':' ') ).join(' ').replace(/ +$/,'');
  return Array.from( {length: n+1}, (_,i) => buildLine(i)).join('\n');
}
*/