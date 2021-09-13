var moveZeros = function (arr) {
  let answer = []
  let zero = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      answer.push(arr[i])
    } else {
      zero.push(arr[i])
    }
  }
  return [...answer,...zero]
}

// console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])) // returns[false,1,1,2,1,3,"a",0,0]

/*
alternate solutions
var moveZeros = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}

var moveZeros = function (arr) {
  var filtedList = arr.filter(function (num){return num !== 0;});
  var zeroList = arr.filter(function (num){return num === 0;});
  return filtedList.concat(zeroList);
}
*/

function humanReadable(seconds) {
  let hours = Math.floor(seconds / 3600)
  hours = (hours > 9 ? hours : '0' + hours.toString() )
  let minutes = Math.floor((seconds - hours * 3600) / 60)
  minutes = (minutes > 9 ? minutes : '0' + minutes.toString() )
  let sec = Math.round(seconds % 60)
  sec = (sec > 9 ? sec : '0' + sec.toString() )
  return (`${hours}:${minutes}:${sec}`)
  
}

console.log(humanReadable(0))           // '00:00:00'
console.log(humanReadable(5))           // '00:00:05'
console.log(humanReadable(60))          // '00:01:00'
console.log(humanReadable(86399))       // '23:59:59'
console.log(humanReadable(359999))      // '99:59:59'

/*
alternate solutions
function humanReadable(seconds) {
  var pad = function(x) { return (x < 10) ? "0"+x : x; }
  return pad(parseInt(seconds / (60*60))) + ":" +
         pad(parseInt(seconds / 60 % 60)) + ":" +
         pad(seconds % 60)
}
function humanReadable(seconds) {
var hours = parseInt( seconds / 3600 ) ;
var minutes = parseInt( seconds / 60 ) % 60;
var seconds = seconds % 60;

var pad = function(val){
  return val < 10 ?"0"+val:val;
}

return pad(hours) + ":" +pad(minutes) + ":" + pad(seconds);
}
*/