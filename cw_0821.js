function incrementString (strng) {
  let num = /\d/g
  let numString = strng.search(num)
  if (numString === -1) return strng + 1
  numString = strng.substring(numString)
  let numLength = numString.length
  let answer = Number(numString) + 1
  answer = answer.toString()
  while (answer.length < numLength) {
    answer = 0+answer
  }
  return strng.substring(0,strng.search(num))+answer
}

console.log(incrementString("foobar000"))           // "foobar001"
console.log(incrementString("foo"))                 // "foo1"
console.log(incrementString("foobar001"))           // "foobar002"
console.log(incrementString("foobar99"))            // "foobar100"
console.log(incrementString("foobar099"))           // "foobar100"
console.log(incrementString(""))                    // "1"

/*
alternate solutions

function incrementString(input) {
  if(isNaN(parseInt(input[input.length - 1]))) return input + '1';
  return input.replace(/(0*)([0-9]+$)/, function(match, p1, p2) {
    var up = parseInt(p2) + 1;
    return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
  });
}

function incrementString(input) {
  return input.replace(/([0-8]?)(9*)$/, function(s, d, ns) {
      return +d + 1 + ns.replace(/9/g, '0');
    });
}

let incrementString = str => str.replace(/([0-8]|\d?9+)?$/, (e) => e ? + e + 1 : 1)

*/