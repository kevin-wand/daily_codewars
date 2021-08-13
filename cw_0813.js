function gcd(a, b) {
  return b ? gcd(b,a%b) : a
}

function mixedFraction(s) {
  s = s.split("/")
  if (s[1] == 0) { return ZeroDivisionError }
  let num = s[0]
  let den = s[1]
  let whole = 0

  while (Math.abs(num) >= Math.abs(den)) {
    num = Math.abs(num) - Math.abs(den)
    whole++
  }

  let sign = ''
    if ((s[0] < 0 && s[1] > 0) || (s[0] > 0 && s[1] < 0)) {
      sign = '-'
    }

  let fracNum = (Math.abs(num)/gcd(Math.abs(num),Math.abs(den)))
  let fracDen = (Math.abs(den) / gcd(Math.abs(num), Math.abs(den)))
  
  let frac = ''
  if (fracNum / fracDen > 0) {
    frac = fracNum + '/' + fracDen
  }

  if (whole > 0 || whole < 0) {
    whole = whole + ' '
  } else if (whole === 0 && frac !== '') {
    whole = ''
  } else {
    whole = 0
  }

  let answer = `${sign}${whole}${frac}`
  return answer.trim()
}

// console.log(gcd(2,6))     // '1/3'
// console.log(gcd(4,60))    // '1/15'
// console.log(gcd(2,8))   // '1/4'
// console.log(mixedFraction('-2/-6'))     // '1/3'
// console.log(mixedFraction('-4/-60'))    // '1/15'
// console.log(mixedFraction('-2/-8'))     // '1/4'
// console.log(mixedFraction('39/17'))     // '5/17'
// console.log(mixedFraction('58/-34'))    // '12/17'
// console.log(mixedFraction('740/341'))   // '58/341'
// console.log(mixedFraction('42/9'))      // '4 2/3'
// console.log(mixedFraction('6/3'))       // '2'
// console.log(mixedFraction('1/1'))       // '1'
// console.log(mixedFraction('11/11'))     // '1'
// console.log(mixedFraction('4/6'))       // '2/3'
// console.log(mixedFraction('0/18891'))   // '0'
// console.log(mixedFraction('-10/7'))     // '-1 3/7'
// console.log(mixedFraction('-22/-7'))    // '3 1/7'
// console.log(mixedFraction("0/0"))       // zero division error


// function reduce(numer,denomin){
//   var gcd = function gcd(a,b){
//     return b ? gcd(b, a%b) : a;
//   };
//   gcd = gcd(numer,denomin);
//   return [numer/gcd, denomin/gcd];
// }

// console.log(gcd(24,34))

function list(names) {
  if (!names.length) { return '' }
  let list = names.map((simp) => {
    return simp.name
  })
  list = list.toString('').split(',').join(', ')
  if (list.split(',').length < 2) {
    return list
  } else {
    return list.substring(0, list.lastIndexOf(',')) + ' &' + list.slice(list.lastIndexOf(',') + 1)
  }
}

console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]))   // 'Bart, Lisa, Maggie, Homer & Marge'
console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]))                                   // 'Bart, Lisa & Maggie'
console.log(list([{name: 'Bart'},{name: 'Lisa'}]))                                                    // 'Bart & Lisa'
console.log(list([{name: 'Bart'}]))                                                                   // 'Bart', "Wrong output for a single name")
console.log(list([]))                                                                                 // '', "Must work with no names")

/*
alternate solutions

function list(names){
  return names.reduce(function(prev, current, index, array){
    if (index === 0){
      return current.name;
    }
    else if (index === array.length - 1){
      return prev + ' & ' + current.name;
    } 
    else {
      return prev + ', ' + current.name;
    }
  }, '');
}

function list(names) {
  var xs = names.map(p => p.name)
  var x = xs.pop()
  return xs.length ? xs.join(", ") + " & " + x : x || ""
}

*/