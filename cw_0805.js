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
// console.log(rot13("Codewars")) //Pbqrjnef
// console.log(rot13("abcdefghijklmnopqrstuvwxyz")) // nopqrstuvwxyzabcdefghijklm
// console.log(rot13("Test"))
// console.log(rot13("Test"))

/*
alternate solution

function rot13(message) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}

*/

function songDecoder(song){
  // const wub = song.replaceAll('WUB','')
  const wub = /WUB{1,}?/g
  const spaces = /  +/g
  song = song.replace(wub, " ")
  song = song.replace(spaces, " ")
  return song.trim()
}

// (songDecoder("AWUBBWUBC"), "A B C","WUB should be replaced by 1 space");
// (songDecoder("AWUBWUBWUBBWUBWUBWUBC"), "A B C","multiples WUB should be replaced by only 1 space");
// (songDecoder("WUBAWUBBWUBCWUB"), "A B C","heading or trailing spaces should be removed");
console.log(songDecoder("AWUBBWUBC"))
console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"))
console.log(songDecoder("WUBAWUBBWUBCWUB"))


/*
alternate solutions

function songDecoder(song){
  return song.replace(/(WUB)+/g," ").trim()
}

function songDecoder(song){
  return song.split('WUB').filter(Boolean).join(' ');
}

*/