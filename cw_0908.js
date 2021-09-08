function doneOrNot(board){
  let transpose = []
  let unique = [1,2,3,4,5,6,7,8,9]
  for (let i = 0; i < board[0].length; i++) {
    let temp = []
    for (let j = 0; j < board.length; j++) {
      temp.push(board[j][i])
    }
    transpose.push(temp)
  }
  for (let k = 0; k < board.length; k++) {
    let test = []
    test = [...board[k]]
    test.sort()
    if (test.toString() !== unique.toString()) {
      return "Try again!"
    }
  }
  for (let l = 0; l < transpose.length; l++) {
    let test = []
    test = [...transpose[l]]
    test.sort()
    if (test.toString() !== unique.toString()) {
      return "Try again!"
    }
  }
  let sqone = []
  let sqtwo = []
  let sqthr = []
  let sqfou = []
  let sqfiv = []
  let sqsix = []
  let sqsev = []
  let sqeig = []
  let sqnin = []

  for (let oneA = 0; oneA < 3; oneA++) {
    for (let oneB = 0; oneB < 3; oneB++){
      sqone.push(board[oneA][oneB])
    }
  }
  for (let one = 0; one < sqone.length; one++) {
    let test = []
    test = [...sqone]
    test.sort()
    if (test.toString() !== unique.toString()) {
      return "Try again!"
    }
  }
  
  for (let twoA = 0; twoA < 3; twoA++) {
    for (let twoB = 0; twoB < 3; twoB++){
      sqtwo.push(board[twoA][twoB])
    }
  }
  for (let two = 0; two < sqtwo.length; two++) {
    let test = []
    test = [...sqtwo]
    test.sort()
    if (test.toString() !== unique.toString()) {
      return "Try again!"
    }
  }

  for (let thrA = 0; thrA < 3; thrA++) {
    for (let thrB = 0; thrB < 3; thrB++){
      sqthr.push(board[thrA][thrB])
    }
  }
  for (let thr = 0; thr < sqthr.length; thr++) {
    let test = []
    test = [...sqthr]
    test.sort()
    if (test.toString() !== unique.toString()) {
      return "Try again!"
    }
  }

  for (let fouA = 0; fouA < 3; fouA++) {
    for (let fouB = 0; fouB < 3; fouB++){
      sqfou.push(board[fouA][fouB])
    }
  }
  for (let fou = 0; fou < sqfou.length; fou++) {
    let test = []
    test = [...sqfou]
    test.sort()
    if (test.toString() !== unique.toString()) {
      return "Try again!"
    }
  }

  for (let fivA = 0; fivA < 3; fivA++) {
    for (let fivB = 0; fivB < 3; fivB++){
      sqfiv.push(board[fivA][fivB])
    }
  }
  for (let fiv = 0; fiv < sqfiv.length; fiv++) {
    let test = []
    test = [...sqfiv]
    test.sort()
    if (test.toString() !== unique.toString()) {
      return "Try again!"
    }
  }

  for (let sixA = 0; sixA < 3; sixA++) {
    for (let sixB = 0; sixB < 3; sixB++){
      sqsix.push(board[sixA][sixB])
    }
  }
  for (let six = 0; six < sqsix.length; six++) {
    let test = []
    test = [...sqsix]
    test.sort()
    if (test.toString() !== unique.toString()) {
      return "Try again!"
    }
  }

  for (let sevA = 0; sevA < 3; sevA++) {
    for (let sevB = 0; sevB < 3; sevB++){
      sqsev.push(board[sevA][sevB])
    }
  }
  for (let sev = 0; sev < sqsev.length; sev++) {
    let test = []
    test = [...sqsev]
    test.sort()
    if (test.toString() !== unique.toString()) {
      return "Try again!"
    }
  }

  for (let eigA = 0; eigA < 3; eigA++) {
    for (let eigB = 0; eigB < 3; eigB++){
      sqeig.push(board[eigA][eigB])
    }
  }
  for (let eig = 0; eig < sqeig.length; eig++) {
    let test = []
    test = [...sqeig]
    test.sort()
    if (test.toString() !== unique.toString()) {
      return "Try again!"
    }
  }

  for (let ninA = 0; ninA < 3; ninA++) {
    for (let ninB = 0; ninB < 3; ninB++){
      sqnin.push(board[ninA][ninB])
    }
  }
  for (let nin = 0; nin < sqnin.length; nin++) {
    let test = []
    test = [...sqnin]
    test.sort()
    if (test.toString() !== unique.toString()) {
      return "Try again!"
    }
  }

  return "Finished!"
}

console.log(doneOrNot([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]])) // "Finished!"
         
// console.log(doneOrNot([
//   [5, 3, 4, 6, 7, 8, 9, 1, 2],
//   [6, 7, 2, 1, 9, 0, 3, 4, 9],
//   [1, 0, 0, 3, 4, 2, 5, 6, 0],
//   [8, 5, 9, 7, 6, 1, 0, 2, 0],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 0, 1, 5, 3, 7, 2, 1, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 0, 0, 4, 8, 1, 1, 7, 9]])) // "Try again!"

/*
alternate solutions
function doneOrNot(rows){

  var columns = []
  ,    blocks = [];
  
  for (var i = 0; i < 9; i++) {
    columns[i] = [];
    
    for (var j = 0; j < 9; j++) {
      var k = Math.floor(i / 3) + Math.floor(j / 3) * 3;
      blocks[k] = blocks[k] || [];
      
      blocks[k].push(rows[i][j]);
      columns[i].push(rows[j][i]);
    }
  }
  
  var is_valid_row = (row) => row.slice(0).sort((a, b) => a - b).join('') == '123456789';
  
  var is_valid = rows.every(is_valid_row) 
    && columns.every(is_valid_row) 
    && blocks.every(is_valid_row);
  
  return is_valid ? 'Finished!' : 'Try again!';
}

function doneOrNot(board){
  var set1Array = new Set(),
      set2Array = new Set(),
      set3Array = new Set();
  
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++){
      set1Array.add(board[i][j]);
      set2Array.add(board[j][i]);
      set3Array.add(board[(i%3)*3+j%3][Math.floor(i/3)*3+Math.floor(j/3)]);
    }
    if (set1Array.size != 9 || set2Array.size != 9 || set3Array.size != 9 )
      return "Try again!";
    set1Array.clear();
    set2Array.clear();
    set3Array.clear();
  }
  return "Finished!";
}
*/
