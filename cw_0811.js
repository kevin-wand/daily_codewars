function tickets(peopleInLine){
  let a = 0
  let b = 0
  for (let i = 0; i < peopleInLine.length; i++) {
    if (peopleInLine[i] === 25) {
      a++
    } else if (peopleInLine[i] === 50) {
      b++
      a--
      if (a < 0) { return 'NO' }
    } else if (peopleInLine[i] === 100) {
      b--
      if (b < 0) {
        b++
        a = a - 3
        if (a < 0) { return 'NO' }
      } else {
        a--
        if (a < 0) { return 'NO' }
      }
    }
  }
  return 'YES'
}

// (tickets([25, 25, 50, 50]), "YES");
// (tickets([25, 100]), "NO");
// console.log(tickets([25, 25, 50, 50]));
// console.log(tickets([25, 100]));
console.log(tickets([25, 25, 50, 50, 100]));

/*
alternate solutions

function tickets(peopleInLine) {
  var bills = [0, 0, 0]
  for (var i = 0; i < peopleInLine.length; i++) {
    switch (peopleInLine[i]) {
      case 25:
        bills[0]++
        break
        
      case 50:
        bills[0]--
        bills[1]++
        break
        
      case 100:
        bills[1] ? bills[1]-- : bills[0] -= 2
        bills[0]--
        break
    }
    
    if (bills[0] < 0) {
      return 'NO'
    }
  }
  
  return 'YES'
}

function tickets(peopleInLine){
  let [c25,c50,c100] = [0,0,0];
  for(let v of peopleInLine) {
    if(v===25) c25++;
    if(v===50) {c50++; c25--;}
    if(v===100) {c25--; c50>0?c50--:c25-=2;}
    if(c25<0||c50<0) return 'NO'
  }
  return 'YES'
}

*/
