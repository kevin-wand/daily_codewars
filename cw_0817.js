/* 
a is an array
b is the length to jump ahead

a is items
b is k

push the values of items into another array (the answer)
filter those values out after



function recursion(a, b) {
  return (a.length < b ? {
    
  } : )
}

function josephus(items, k) {
  let len = items.length
  let rep = k
  let answer = []
  
  // set up temp variables for initial values
  
  if (items.length <= 1) { return items }




  while (answer.length < len) {
    // console.log(k)
    answer.push(items[k - 1])
    k = k + rep
    if (k >= len +1) {
      items = items.filter((val) => {
        return answer.indexOf(val) === -1
      })
      k = rep
      len = items.length
    }
  }
  // josephus(items, k)

  return answer
  
}

// console.log(josephus([1,2,3,4,5,6,7,8,9,10],1))               //[1,2,3,4,5,6,7,8,9,10]
console.log(josephus([1,2,3,4,5,6,7,8,9,10],2))               //[2, 4, 6, 8, 10, 3, 7, 1, 9, 5]
// console.log(josephus(["C","o","d","e","W","a","r","s"],4))    //['e', 's', 'W', 'o', 'C', 'd', 'r', 'a']
// console.log(josephus([1,2,3,4,5,6,7],3))                      //[3, 6, 2, 7, 5, 1, 4]
// console.log(josephus([], 3))                                   //[]

// let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let answer = [2, 4, 6, 8, 10]
// items = items.filter((val) => {
//   return answer.indexOf(val) === -1
// })
// console.log(items)

*/

let vowels = ['a', 'e', 'i', 'o', 'u']
let numbers = ['1','2','3','4','5']

function encode(string) {
  string = string.split("")
  for (let i = 0; i < string.length; i++) {
    if (vowels.indexOf(string[i]) > -1) {
      string[i] = numbers[vowels.indexOf(string[i])]
    }
  }
  return string.join("")
}

function decode(string) {
  string = string.split("")
  for (let i = 0; i < string.length; i++) {
    if (numbers.indexOf(string[i]) > -1) {
      string[i] = vowels[numbers.indexOf(string[i])]
    }
  }
  return string.join("")
}

console.log(encode('hello'))                          // 'h2ll4'
console.log(encode('How are you today?'))             // 'H4w 1r2 y45 t4d1y?'
console.log(encode('This is an encoding test.'))      // 'Th3s 3s 1n 2nc4d3ng t2st.'
console.log(decode('h2ll4'))                          // 'hello'

/*
alternate solutions

// turn vowels into numbers
function encode(string){
  return string.replace(/[aeiou]/g, function (x) { return '_aeiou'.indexOf(x) });
}

//turn numbers back into vowels
function decode(string){
  return string.replace(/[1-5]/g, function (x) { return '_aeiou'.charAt(x) });
}

function encode(string){
  var vowelMapping = {'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5};
  return codeStringGivenMapping(string, vowelMapping);
}

function decode(string){
  var vowelMapping = {'1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u'};
  return codeStringGivenMapping(string, vowelMapping); 
}

function codeStringGivenMapping(string, mapping){
  return string.split('').map(function(char){
    return mapping[char] || char;
  }).join(''); 
}

const table = ['a', 'e', 'i', 'o', 'u']
const encode = string => string.split('').map(x => table.indexOf(x) + 1 || x).join('')
const decode = string => string.split('').map(x => table[Number(x) - 1] || x).join('')

const obj = {a: 1, e: 2, i: 3, o: 4, u: 5};

const encode = string =>
  string.replace(/[aeiou]/g, val => obj[val]);

const decode = string =>
  string.replace(/[1-5]/g, val => Object.keys(obj)[--val]);

  */