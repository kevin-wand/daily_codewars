function tour(friends, fTowns, distTable) {
  let val = []
  let answer = 0
  for (let i = 1; i < distTable.length; i = i + 2) {
    fTowns = fTowns.toString().split(",")
    console.log("fTowns",fTowns.indexOf(distTable[i-1]))
    if (fTowns.indexOf(distTable[i - 1]) > -1) {
      let searchVal = fTowns.indexOf(distTable[i - 1])
      if (friends.indexOf(fTowns[searchVal - 1]) > -1) {
        val.push(distTable[i])
      }
    }
  }
  let first = val[0]
  let last = val[val.length-1]
  for (let j = 0; j < (val.length -1); j++) {
    answer = Math.sqrt((val[j+1]*val[j+1])-(val[j]*val[j])) + answer
  }
  answer = first + last + answer
  return Math.floor(answer)
}

// var friends1 = ["A1", "A2", "A3", "A4", "A5"];
// var fTowns1 = [["A1", "X1"], ["A2", "X2"], ["A3", "X3"], ["A4", "X4"]];
// var distTable1 = ["X1", 100.0, "X2", 200.0, "X3", 250.0, "X4", 300.0];

// var friends1 = [ 'A1', 'A2', 'A3', 'A4', 'A5' ]
// var fTowns1 = [ [ 'A1', 'X1' ], [ 'A2', 'X2' ], [ 'A3', 'X3' ], [ 'A4', 'X4' ] ]
// var distTable1 = ['X1', 100, 'X2', 200, 'X3', 250, 'X4', 300]
  
// var friends1 = [ 'A1', 'A2', 'A3', 'A4', 'A5' ]
// var fTowns1 = [  [ 'A1', 'X1' ],  [ 'A2', 'X2' ],  [ 'A3', 'X3' ],  [ 'A4', 'X4' ],  [ 'A5', 'X5' ]]
// var distTable1 = [  'X1', 100,  'X2',  200,  'X3', 250,  'X4', 300,  'X5',  320]

var friends1 = ['B1', 'B2']
var fTowns1 = [  [ 'B1', 'Y1' ],  [ 'B2', 'Y2' ],  [ 'B3', 'Y3' ],  [ 'B4', 'Y4' ],  [ 'B5', 'Y5' ]]
var distTable1 = [  'Y1', 50,   'Y2',  70,   'Y3', 90,  'Y4', 110,  'Y5',  150]

// var friends1 = [ 'A7', 'A4', 'A10', 'A14', 'A19' ]
// var fTowns1 = [  [ 'A7', 'Y13' ],  [ 'A4', 'Y14' ],  [ 'A10', 'Y6' ],  [ 'A14', 'Y19' ],  [ 'A19', 'Y4' ]]
// var distTable1 = [  'Y13', 35,   'Y14',  89,    'Y6', 148,  'Y19', 217,  'Y4',  259]

// var friends1 = [  'A13', 'A15',  'A14', 'A12',  'A16', 'A17',  'A1']
// var fTowns1 = [  [ 'A13', 'Y12' ],  [ 'A15', 'Y3' ],  [ 'A14', 'Y8' ],  [ 'A12', 'Y6' ],  [ 'A16', 'Y2' ],  [ 'A17', 'Y9' ],  [ 'A1', 'Y18' ]]
// var distTable1 = ['Y12', 21, 'Y3', 105, 'Y8', 135, 'Y6', 206, 'Y2', 301, 'Y9', 399, 'Y18', 415]

// var friends1 = [  'A5',  'A14',  'A8',  'A15',  'A20', 'A4',  'A1']
// var fTowns1 = [['A5', 'Y12'], ['A14', 'Y16'], ['A8', 'Y5'], ['A15', 'Y1'], ['A20', 'Y20'], ['A4', 'Y11'], ['A1', 'Y2']]
// var distTable1 = ['Y12', 27, 'Y16', 59, 'Y5', 95, 'Y1', 164, 'Y20', 225, 'Y11', 299, 'Y2', 310]

// var friends1 = ['A1', 'A12', 'A16', 'A14', 'A4', 'A2', 'A5', 'A15', 'A11']
// var fTowns1 = [['A1', 'Y16'],  [ 'A12', 'Y17' ],  [ 'A16', 'Y10' ],  [ 'A14', 'Y4' ],  [ 'A4', 'Y19' ],  [ 'A2', 'Y6' ],  [ 'A5', 'Y9' ],  [ 'A15', 'Y15' ],  [ 'A11', 'Y20' ]]
// var distTable1 = ['Y16', 100, 'Y17', 133, 'Y10', 224, 'Y4', 310, 'Y19', 334, 'Y6', 370, 'Y9', 470, 'Y15', 540, 'Y20', 554]
  
console.log(tour(friends1, fTowns1, distTable1));

/*
alternate solutions

function tour(friends, fTowns, distTable) {
    fTowns = [].concat.apply([], fTowns);
    return Math.floor(friends.map(v => {
      const ti = fTowns.indexOf(v), 
            di = distTable.indexOf(fTowns[ti + 1]);
      return ti === -1 || di === -1 ? -1 : distTable[di + 1];
    }).filter(d => d > 0).reduce((k, v, i, arr) => {
      let res = k, sq = 0;
      if (i === 0) res += v;
      else res += (Math.sqrt(Math.abs(Math.pow(v, 2) - Math.pow(arr[i - 1], 2))));
      return i === arr.length - 1 ? res + v + sq : res;
    }));
}

function tour(friends, fTowns, distTable) {
  var res=0, temp=0;
  
    friends.map(friend => {
      fTowns.map(town => {
        if( friend == town[0] ){
          res += Math.sqrt(Math.pow(distTable[distTable.indexOf(town[1])+1], 2)-temp*temp);
          temp=distTable[distTable.indexOf(town[1])+1];
        }
      })
    });
  
  return Math.floor(res)+temp;
}

*/