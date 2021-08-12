function streetFighterSelection(fighters, position, moves){
  let answer = []
  let arr = position[0]
  let len = position[1]
  position[0] = arr
  position[1] = len
  
  moves.forEach((move) => {
    if (move === "up") {
      arr = 0     
    } else if (move === "down") {
      arr = 1
    } else if (move === "left") {
      len--
      if (len === -1) {
        len = 5
      }
    } else if (move === "right") {
      len++
      if (len === 6) {
        len = 0
      }
    }
    answer.push(fighters[arr][len])
  })
  return answer

}

// methods to flatten an array
// console.log(fighters.toString().split(','))
// console.log(fighters.flat())


fighters = [
	["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
	["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];

/*
// moves = ['up', 'left', 'right', 'left', 'left'];
// console.log(streetFighterSelection(fighters, [0,0], moves))
//['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']

moves = [];
console.log(streetFighterSelection(fighters, [0,0], moves))
//[]

moves = ["left","left","left","left","left","left","left","left"];
console.log(streetFighterSelection(fighters, [0,0], moves))
//['Vega', 'Balrog', 'Guile', 'Blanka', 'E.Honda', 'Ryu', 'Vega', 'Balrog']

moves = ["right","right","right","right","right","right","right","right"];
console.log(streetFighterSelection(fighters, [0,0], moves))
//['E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega', 'Ryu', 'E.Honda', 'Blanka']

moves = ["up","left","down","right","up","left","down","right"];
console.log(streetFighterSelection(fighters, [0,0], moves))
//['Ryu', 'Vega', 'M.Bison', 'Ken', 'Ryu', 'Vega', 'M.Bison', 'Ken']

moves = ["down","down","down","down"];
console.log(streetFighterSelection(fighters, [0,0], moves))
// ['Ken', 'Ken', 'Ken', 'Ken']

moves = ["up","up","up","up"];
console.log(streetFighterSelection(fighters, [0,0], moves))
// ['Ryu', 'Ryu', 'Ryu', 'Ryu']
*/


/*
alternate solutions

function streetFighterSelection(fighters, position, moves){
  var result = [];
  
  moves.forEach(function(move) {
    if (move === "up") {
      position[0] = 0;
    }
    else if (move === "down") {
      position[0] = 1;
    }
    else if (move === "right") {
      position[1] = (position[1] === 5) ? 0 : position[1] + 1;
    }
    else if (move === "left") {
      position[1] = (position[1] === 0) ? 5 : position[1] - 1;
    }
    
    result.push(fighters[position[0]][position[1]]);
  });
  
  return result;
}

function streetFighterSelection(fighters, position, moves){

  const boundY = fighters.length - 1;
  const boundX = fighters[0].length - 1;

  let [y, x] = position;

  const controls = {
    right: () => x === boundX ? x = 0 : x++,
    left: () => x ? x-- : x = boundX,
    up: () => y ? y-- : y,
    down: () => y < boundY ? y++ : y
  };
  
  return moves.map(move => {
    controls[move]();
    return fighters[y][x];
  });
}

*/