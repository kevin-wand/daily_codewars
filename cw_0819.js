/*
frequency count in an object
const getFrequency = (element) => {
  const map = {};
  element.forEach(item => {
    if(map[item]){
        map[item]++;
    } else {
        map[item] = 1;
    }
  });
  return map;
};
console.log(getFrequency(array));
*/

/*
IE6

const removeDuplicateIds = (obj) => {
  let originalKeys = Object.keys(obj)
  let originalValues = Object.values(obj)
  let array = originalValues.map((item) => {
    return ([...new Set(item)])
  })
  let flatArr = array.flat()
  while (flatArr.length > 0) {
    array.forEach((item) => {
      flatArr.splice(0, item.length)
      item.forEach((unit,index) => {
        if (flatArr.indexOf(unit) > -1) {
          item.splice(index, 1)
          item.splice(index,0,"")
        }
      })
    })
  }
  array = array.map((element) => {
    return element.filter(gap => gap !== '')
  })
  for (let i = 0; i < originalKeys.length; i++) {
    originalKeys[i] = [originalKeys[i],array[i]]
  }
  return Object.fromEntries(originalKeys)
};

*/

const removeDuplicateIds = (obj) => {
  let originalKeys = Object.keys(obj)
  let originalValues = Object.values(obj)
  let array = originalValues.map((item) => {
    return ([...new Set(item)])
  })
  let flatArr = array.join(',').split(',')
  while (flatArr.length > 0) {
    array.forEach((item) => {
      flatArr.splice(0, item.length)
      item.forEach((unit,index) => {
        if (flatArr.indexOf(unit) > -1) {
          item.splice(index, 1)
          item.splice(index,0,"")
        }
      })
    })
  }
  array = array.map((element) => {
    return element.filter(gap => gap !== '')
  })
  let answer = {}
  for (let i = 0; i < originalKeys.length; i++) {
    answer[originalKeys[i]] = array[i]
  }
  return answer
};

// const obj = {
//   "1": ["A", "B", "C"],
//   "2": ["A", "B", "D", "A"],
// };
// const result = removeDuplicateIds(obj);
// console.log(result)               // { "1": ["C"], "2": ["A", "B", "D"] });


// const obj1 = {
//   "1": ["C", "F", "G"],
//   "2": ["A", "B", "C"],
//   "3": ["A", "B", "D"],
// };
// const result1 = removeDuplicateIds(obj1);
// console.log(result1)              // { "1": ["F", "G"], "2": ["C"], "3": ["A", "B", "D"] });


// const obj2 = {
//   "1": ["A"],
//   "2": ["A"],
//   "3": ["A"],
// };
// const result2 = removeDuplicateIds(obj2);
// console.log(result2)              // { "1": [], "2": [], "3": ["A"] });


// const obj3 = {
//   "432": ["A", "A", "B", "D"],
//   "53": ["L", "G", "B", "C"],
//   "236": ["L", "A", "X", "G", "H", "X"],
//   "11": ["P", "R", "S", "D"],
// };
// const result3 = removeDuplicateIds(obj3);
// console.log(result3)              // {
                                  // "11": ["P", "R", "S"],
                                  // "53": ["C"],
                                  // "236": ["L", "X", "G", "H"],
                                  // "432": ["A", "B", "D"],
                                  // });


// function mergesorted(a, b) {
//   a = a + b
//   console.log(a)
//   if ((a.length + b.length) === 1) {
//     return (a)
//   }
//   // return a,b

// }

// mergesorted([1],[]) //should: [1,2,3,4]
// mergesorted([1],[]) //should: [1,2,3,4]
// mergesorted([1,2],[3]) //should: [1,2,3]
// mergesorted([1],[2, 3]) //should: [1,2,3]