var countDeafRats = function(town) {
  let array = []
  let deaf = 0
  let position = []
  let count = 0
  while (town.indexOf(" ") > -1) {
    town = town.replace(" ", "")
  }
  town = town.replace("P", "P ")
  let piper = Math.floor(town.indexOf("P ")/2)
  while (town.length) {
    position.push(count)
    array.push(town.slice(0, 2))
    town = town.substring(2)
    count++
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] === '~O' && position[i] > piper) {
      deaf++
    } else if (array[i] === 'O~' && position[i] < piper) {
      deaf++
    }
  }
  return deaf
}

// (countDeafRats("~O~O~O~O P"), 0);
// (countDeafRats("P O~ O~ ~O O~"), 1);
// (countDeafRats("~O~O~O~OP~O~OO~"), 2);
console.log(countDeafRats("~O~O~O~O P"));
console.log(countDeafRats("P O~ O~ ~O O~"));
console.log(countDeafRats("~O~O~O~OP~O~OO~"));

/*

alternate solutions

var countDeafRats = function(town) {
  // Your code here
  if(town != null){
    [left,right]=town.split('P');
        var a=left+right.split('').reverse().join('');
        var b=(a.match(/O~|~O/gi)||[]).filter(v=>v=='O~').length;
        return b;
  }
  return 0;
}

var countDeafRats = function(town) {
  return [...town.replace(/ +/g,'')].reduce((a,c,i) => a+(i%2==0 && c=='O'), 0);
}

*/