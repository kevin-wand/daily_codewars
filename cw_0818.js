function josephus(items, k) {
  if (items.length <= 1) { return items }

  let ans = []
  let len = items.length
  let pos = k - 1
  if (k < items.length) {
    ans.push(items[pos])
    items.splice(pos, 1)
    pos--
  }
for (let i = 1; i < len; i++) {
    for (let j = 0; j < k; j++) {
      pos++
      if (pos >= items.length) {
        pos = 0
      }
    }
    ans.push(items[pos])
    items.splice(pos, 1)
    pos--
  }
  if (items.length) { ans.push(items[0]) }
  return ans
}

// console.log(josephus([1,2,3,4,5,6,7,8,9,10],1))               //[1,2,3,4,5,6,7,8,9,10]
console.log(josephus([1,2,3,4,5,6,7,8,9,10],2))               //[2, 4, 6, 8, 10, 3, 7, 1, 9, 5]
// console.log(josephus(["C","o","d","e","W","a","r","s"],4))    //['e', 's', 'W', 'o', 'C', 'd', 'r', 'a']
// console.log(josephus([1,2,3,4,5,6,7],3))                      //[3, 6, 2, 7, 5, 1, 4]
// console.log(josephus([], 3))                                   //[]
// console.log(josephus([1, 2, 3, 4, 5], 7))                          //[ 2, 5, 1, 3, 4 ]

/*
alternate solutions

function josephus(items, k){
  var result = [], index = 0;
  while (items.length > 0){
    index = (index + k - 1) % items.length;
    result = result.concat(items.splice(index, 1));
  }
  return result;
}

function josephus(items,k){
  var dest = [],
      i = 0;
  
  while (items.length > 0) {
    dest.push(items.splice(i = (i + k - 1) % items.length, 1)[0]);
  }
  
  return dest;
}

*/