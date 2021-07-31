function boolToWord( bool ){
  return bool ? "Yes" : "No"
}

function filter_list(l) {
  return l.filter(el => typeof el !== "string")
}

// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
// console.log(filter_list([1,2,'a','b']))
// console.log(filter_list([1,'a','b',0,15]))
// console.log(filter_list([1, 2, 'aasf', '1', '123', 123]))

function countSmileys(arr) {
  count = 0

  arr.forEach((face) => {
    face = face.split("")
    if (face.length === 3) {
      if (face.includes(':') || face.includes(';')) {
        if (face.includes(')') || face.includes('D')) {
          if (face.includes('-') || face.includes('~')) {
            count++
          }
        }
      }
    } else if (face.length === 2) {
      if (face.includes(':') || face.includes(';')) {
        if (face.includes(')') || face.includes('D')) {
          count++
        }
      }
    } 

    return count
  })

  return count
}

// assertEquals(countSmileys([]), 0);
// assertEquals(countSmileys([':D',':~)',';~D',':)']), 4);
// assertEquals(countSmileys([':)',':(',':D',':O',':;']), 2);
// assertEquals(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);

console.log(countSmileys([':~)', ':~)', ':~D', ';~D', ';oD', ';~D', ';~>']))
console.log(countSmileys([';D', ';)', ';-)', ';o)', ';~)', ':>', ':~(']))

/*
alternative solutions
function countSmileys(arr) {
  return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}

const countSmileys = ss => ss.reduce((a, s) => a + /^[:;][-~]?[D)]$/.test(s), 0);
*/