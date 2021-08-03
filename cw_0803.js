function twoSum(numbers, target) {
  let answer = []
  let solution = 0
  for (let i = 0; i < numbers.length; i++) {
    let delta = target - numbers[i]
    solution = numbers.indexOf(delta)
    if (solution !== -1) {
      answer.push(i)
      i === solution ? answer.push(solution + 1) : answer.push(solution)
      return answer
    }
  }
}

// twoSum([1,2,3], 4).sort(numericalCompare), [0,2]
// twoSum([1234,5678,9012], 14690).sort(numericalCompare), [1,2]
// twoSum([2,2,3], 4).sort(numericalCompare), [0,1]
// console.log(twoSum([1,2,3], 4))
// console.log(twoSum([1234, 5678, 9012], 14690))
// console.log(twoSum([2, 2, 3], 4))

/*
alternate solution

function twoSum(numbers, target) {
  for (var i = 0; i < numbers.length-1; i++) {
      for (var j = i+1; j < numbers.length; j++) {
          if (numbers[i] + numbers[j] === target) return [i, j];
      }
  }
}

*/

function encrypt(text, n) {
  let sentence = ''
  
  if (text === "" || text === null || n === 0) { return text }
  
  else {
    
    for (let x = 0; x < n; x++) {
      text = text.split("")
      let partOne = ''
      let partTwo = ''

      for (let i = 1; i <= text.length / 2; i++) {
        let letter = ''
        letter = (text.slice((i * 2) - 1, (i * 2)))
        partOne += letter
      }

      for (let j = 0; j < text.length / 2; j++) {
        let letter = ''
        letter = (text.slice((j * 2), (j * 2) + 1))
        partTwo += letter
      }
      
      sentence = partOne + partTwo
      text = sentence
    }
    return text
  }
}

function decrypt(encryptedText, n) {
  
  if (encryptedText === "" || encryptedText === null || n === 0) { return encryptedText }
  
  else {
    
    for (let x = 0; x < n; x++) {
      encryptedText = encryptedText.split("")
      let lengthOne = encryptedText.length - (Math.ceil(encryptedText.length/2))
      let lengthTwo = encryptedText.length - lengthOne
      let partOne = encryptedText.slice(0,lengthOne)
      let partTwo = encryptedText.slice(lengthOne,encryptedText.length)

      let text = []

      for (let i = 0; i < lengthTwo; i++) {
        text.push(partTwo[i])
        if (partOne[i]) {
          text.push(partOne[i])
        }
      }
      encryptedText = text.join("")

    }
    return encryptedText
  }
}

// (encrypt("This is a test!", 0), "This is a test!"); hsi  et
// (encrypt("This is a test!", 1), "hsi  etTi sats!"); Ti sats!
// (encrypt("This is a test!", 2), "s eT ashi tist!");
// (encrypt("This is a test!", 3), " Tah itse sits!");
// (encrypt("This is a test!", 4), "This is a test!");
// (encrypt("This is a test!", -1), "This is a test!");
// (encrypt("This kata is very interesting!", 1), "hskt svr neetn!Ti aai eyitrsig");

// (decrypt("This is a test!", 0), "This is a test!");
// (decrypt("hsi  etTi sats!", 1), "This is a test!"); 
// (decrypt("s eT ashi tist!", 2), "This is a test!"); 
// (decrypt(" Tah itse sits!", 3), "This is a test!");
// (decrypt("This is a test!", 4), "This is a test!");
// (decrypt("This is a test!", -1), "This is a test!");
// (decrypt("hskt svr neetn!Ti aai eyitrsig", 1), "This kata is very interesting!");

// (encrypt("", 0), "");
// (decrypt("", 0), "");
// (encrypt(null, 0), null);
// (decrypt(null, 0), null);

// console.log(encrypt("This is a test!", 0))
// console.log(encrypt("This is a test!", 1))
// console.log(encrypt("This is a test!", 2))
// console.log(encrypt("This is a test!", 3))
// console.log(encrypt("This is a test!", 4))
// console.log(encrypt("This is a test!", -1))
// console.log(encrypt("This kata is very interesting!", 1))

// console.log(decrypt("This is a test!", 0))
// console.log(decrypt("hsi  etTi sats!", 1)) 
// console.log(decrypt("s eT ashi tist!", 2)) 
/*
hsi  et|Ti sats!
This is a test!
s eT as|hi tist!
hsi 


*/

console.log(decrypt(" Tah itse sits!", 3))
console.log(decrypt("This is a test!", 4))
// console.log(decrypt("This is a test!", -1))
console.log(decrypt("hskt svr neetn!Ti aai eyitrsig", 1))
// console.log(encrypt("", 0))
// console.log(decrypt("", 0))
// console.log(encrypt(null, 0))
// console.log(decrypt(null, 0))


/*
alternate solution
function encrypt(text, n) {
  for (let i = 0; i < n; i++) {
    text = text && text.replace(/.(.|$)/g, '$1') + text.replace(/(.)./g, '$1') 
  }
  return text
}

function decrypt(text, n) {
  let l = text && text.length / 2 | 0
  for (let i = 0; i < n; i++) {
    text = text.slice(l).replace(/./g, (_, i) => _ + (i < l ? text[i] : ''))
  }
  return text
}
*/