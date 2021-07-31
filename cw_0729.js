function disemvowel(str) {
  const vowels = ["a", "e", "i", "o", "u", "y","A","E","I","O","U"]
  str = str.split("").filter((letter) => vowels.indexOf(letter) === -1).join("")

  return str
}

/*
disemvowel("This website is for losers LOL!")

Ths wbst s fr lsrs LL!
*/

console.log(disemvowel("This website is for losers LOL!"))


// alternative solution
// disemvowel = str => str.replace(/[aeiou]/gi,'');