function titleCase(title, minorWords) {
  let newTitle = []
  title = title.toLowerCase().split(" ")
  minorWords = minorWords ? minorWords.toLowerCase().split(" ") : []

  title.forEach((word) => {
    let firstLetter = ""
    let newWord = ""
    firstLetter = word.slice(0, 1).toUpperCase()
    newWord = word.slice(1, word.length)
    firstLetter = firstLetter + newWord
    if (minorWords.includes(word.toLowerCase())) {
      newTitle.push(firstLetter.toLowerCase())
    } else {
      newTitle.push(firstLetter)
    }
  });

  let firstLetter = ""
  let remainder = ""
  let firstWord = ""
  firstLetter = newTitle[0].slice(0, 1).toUpperCase()
  remainder = newTitle[0].substring(1)
  firstWord = firstLetter+remainder
  newTitle.splice(0,1)
  newTitle.unshift(firstWord)
  return newTitle.join(" ")
}

// assertEquals(titleCase(''), '')
// assertEquals(titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings')
// assertEquals(titleCase('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows')
// assertEquals(titleCase('the quick brown fox'), 'The Quick Brown Fox')
console.log(titleCase(''))
console.log(titleCase('a clash of KINGS', 'a an the of'))
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'))
console.log(titleCase('the quick brown fox'))

/*
alternate solution

function titleCase(title, minorWords) {
  var minorWords = typeof minorWords !== "undefined" ? minorWords.toLowerCase().split(' ') : [];
  return title.toLowerCase().split(' ').map(function(v, i) {
    if(v != "" && ( (minorWords.indexOf(v) === -1) || i == 0)) {
      v = v.split('');
      v[0] = v[0].toUpperCase();
      v = v.join('');
    }
    return v;
  }).join(' ');
}

*/