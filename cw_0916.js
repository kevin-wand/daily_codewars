/*
// var isPalindrome = function(x) {
//   const arr = x.toString().split("").reverse().join("")
//   const test = x.toString().split("").join("")
//   if (arr === test) {
//       return true
//   } else {
//       return false
//   }
// };

//  do 234 later

var lengthOfLongestSubstring = function(s) {
  // create a variable and make it equal to a string, that we keep adjusting and comparing against as we lengthen the string
  // make it a regex value and try to find the variable somewhere else in the string
  let compare = new Set([...s.split('')])
  console.log(compare)
  // let test = s.split("")
  // for (let i = 0; i < test.length; i++) {
  //   for (let j = 0; j < test.length; j++) {
  //     compare = s.slice(j, i)
  //     console.log(compare)
  //     if (s.indexOf(compare) == -1 && compare.split('').length == 1) {
  //       compare += 
  //     }
      
  //   }
  // }
};


lengthOfLongestSubstring('abcabcbb')
// lengthOfLongestSubstring('bbbbb')
// lengthOfLongestSubstring('pwwkew')
*/

let arr = []

const generateRandomNumber = callback => {
  setTimeout(() => {
    const number = Math.round(Math.random() * 64);
    callback(number);
  }, 10);
}

function createArr(value) {
  if (arr.length >= 64) {
    console.log(arr)
    return
  }
  if (arr.includes(value)) {
    generateRandomNumber(createArr)
  } else {
    arr.push(value)
    generateRandomNumber(createArr)
  }
}

generateRandomNumber(createArr)
// console.log(arr)
