function rot13(message){
  let abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n','o','p','q','r','s','t','u','v','w','x','y','z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  
  let answer = ''
  message = message.split("")
  message.forEach((letter) => {
    spot = abc.indexOf(letter)
    if (spot >= 0 && spot <= 12) {
      answer += (abc[spot + 13])
    } else if (spot >= 13 && spot <= 25) {
      answer += (abc[spot - 13])
    } else if (spot >= 26 && spot <= 38) {
      answer += (abc[spot + 13])
    } else if (spot >= 39 && spot <= 51) {
      answer += (abc[spot - 13])
    } else {
      answer += (letter)
    }
  })
  return answer
}

// ("grfg" == rot13("test")    
// ("Grfg" == rot13("Test")
// console.log(rot13("test"))
// console.log(rot13("Test"))
console.log(rot13("Codewars")) //Pbqrjnef
console.log(rot13("abcdefghijklmnopqrstuvwxyz")) // nopqrstuvwxyzabcdefghijklm
console.log(rot13("Test"))
console.log(rot13("Test"))

/*
alternate solution

function rot13(message) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}

*/