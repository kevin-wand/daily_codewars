// https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript

function queueTime(customers, n) {
  if (!customers.length) {
    return 0
  } else {

    // let maxTime = customers
    // maxTime = maxTime.reduce((a, b) => {
    //   if (a >= b) {
    //     return a
    //   } else {
    //     return b
    //   }
    // })

    // let afterMax = customers.splice(0, customers.indexOf(maxTime))
    
    // return maxTime+Math.floor((afterMax.reduce((time, num) => time + num, 0)/n))

    let arr = []
    for (let i = 0; i < n; i++){
      arr[i] = [0]
    }

    for (let k = 0; k < customers.length; k++) {
      for (let j = 0; j < arr.length; j++) {
        arr[j] = [arr[j].reduce((a, b) => a + b)]
      }
      console.log(`1 - ${arr}`)

      let shortQ = arr
      console.log(shortQ)
      shortQ = shortQ.reduce((a, b) => {
        if (b >= a) {
          return a
        } else {
          return b
        }
      })
      console.log(`2 - ${shortQ}`)


      let position = arr.indexOf(shortQ)
      console.log(`3 - ${position}`)

      arr[position].push(customers[k])
      console.log(`4 - ${customers[k]}`)
      

    }

  }
}

// Test.assertEquals(queueTime([], 1), 0);
// Test.assertEquals(queueTime([1,2,3,4], 1), 10);
// Test.assertEquals(queueTime([2,2,3,3,4,4], 2), 9);
// Test.assertEquals(queueTime([1,2,3,4,5], 100), 5);
// console.log(queueTime([], 1));
// console.log(queueTime([1,2,3,4], 1));
// console.log(queueTime([2,2,3,3,4,4], 2));
// console.log(queueTime([1,2,3,4,5], 100));
// console.log(queueTime([5,3,4], 1));
// console.log(queueTime([10,2,3,3], 2));
// console.log(queueTime([2, 3, 10], 2));
// console.log(queueTime([40, 49, 41, 25, 28, 41, 5, 34, 15, 42, 32, 15, 17, 42, 38], 3))
// console.log(queueTime([140, 149, 141, 125, 128, 141, 15, 134, 115, 142, 132, 115, 117, 142, 138], 3))
// console.log(queueTime([
//   12, 18, 15, 8, 20,
//   14, 18, 9, 18, 4,
//   3, 2, 6, 20, 9, 18,
//   16, 2, 17, 11, 3, 
//   1, 2, 19, 17, 20, 
//   4, 17, 12, 2, 20, 
//   5, 10, 1, 10, 3, 
//   16, 17, 15, 18, 15, 
//   15, 13, 20, 14, 19,
//   3, 17, 18, 12, 4,
//   1, 5, 1, 17, 4,
//   6, 14, 18, 1, 13,
//   15, 2, 18, 5, 17], 5))

/*
40, 25, 5, 42, 17
40, 65, 70, 112, 129

49, 28, 34, 32, 42
49, 77, 111, 143, 165

41, 41, 15, 15, 38
41, 82, 97, 112, 150

answer = 156
12,14,6,2,17,5,1,3,16,15,3,18,1,13,17
12,26,32,34,51,56,57,60,76,91,94,112,113,126,143

18,18,20,10,15,14,12,4,18
18,36,56,66,81,95,107,111,129

15,9,3,16,2,20,18,19,1,5,6,15
15,24,27,43,45,65,83,102,103,108,114,129

8,18,9,12,5,10,17,13,17,14,18
8,26,35,47,52,62,79,92,109,123,141

20,4,2,18,20,15,20,4,1,17,2,5
20,24,26,44,64,79,99,103,104,121,123,128,

queue starts with longest delay and accumulates time before that
take longest time and accumulate prior
split into number of arrays by number of tills
*/

// solve at a later date

function wave(str){
  str = str.split("")
  result = []
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      let wave = str[i].toUpperCase()
      let beforeWave = str.slice(0, i)
      let afterWave = str.slice(i, str.length)
      let answer = beforeWave.concat(wave).concat(afterWave)
      answer.splice(i + 1, 1)
      result.push(answer.join(""))
    }
  }
  return result
}

// result = ["Hello", "hEllo", "heLlo", "helLo", "hellO"];
console.log(wave("hello"))

// result = ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"];
console.log(wave("codewars"))

// result = [];
console.log(wave(""))

// result = ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"];
console.log(wave("two words"))

// result = [" Gap ", " gAp ", " gaP "];
console.log(wave(" gap "))

/*
alternate solutions

function wave(str){
    let result = [];
    
    str.split("").forEach((char, index) => {
        if (/[a-z]/.test(char)) {
            result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
        }
    });
    
    return result;
}

var wave=w=>[...w].map((a,i)=>w.slice(0,i)+a.toUpperCase()+w.slice(i+1)).filter(a=>a!=w)

*/