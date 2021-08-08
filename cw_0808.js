function stockList(listOfArt, listOfCat) {
  let answer = []
  let nonNum = /\D+/
  let sumCheck = 0

  listOfCat.forEach((val) => {
    let sum = []
    let sumVal = 0

    let reducedList = listOfArt.filter((cat) => {
      cat = cat.split("")
      return (val === cat[0])
    })

    reducedList.forEach((string) => {
      string = string.replace(nonNum, "") 
      sum.push(string)
    })

    sum.forEach((num) => {
      sumVal += (typeof Number(num) === "number" ? Number(num) : 0)
      sumCheck += sumVal
    })
    
    answer.push(` - (${val} : ${sumVal})`)
  })

  return (listOfCat !== '' && sumCheck > 0 ? answer.join("").substring(3) : '')
}

// b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"]
// c = ["A", "B"]
// res = "(A : 200) - (B : 1140)"
// Test.assertEquals(stockList(b, c), res)

// b = ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"]
// c = ["A", "B", "C", "W"]
// res = "(A : 0) - (B : 114) - (C : 70) - (W : 0)"
// Test.assertEquals(stockList(b, c), res)

// b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"]
// c = ["A", "B"]
// res = "(A : 200) - (B : 1140)"
// console.log(stockList(b, c))

b = ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"]
// b = ["CBART 0", "CDXEF 0", "BKWRK 0", "BTSQZ 0", "DRTYM 0"]
// c = ["A", "B", "C", "W"]
c = ['']
res = "(A : 0) - (B : 114) - (C : 70) - (W : 0)"
console.log(stockList(b, c))

/*
alternate solutions

function stockList(listOfArt, listOfCat) {
  var qs = {};
  if (!listOfArt.length) return '';

  listOfArt.forEach(function(art) {
    var cat = art[0];
    qs[cat] = (qs[cat] | 0) + +art.split(' ')[1];
  });

  return listOfCat.map(function(c) {
    return '(' + c + ' : ' + (qs[c] | 0) + ')';  
  }).join(' - ');  
}

function stockList(listOfArt, listOfCat) {
  return (! listOfArt.length || ! listOfCat.length) ? "" : listOfCat.map(cat => {
    let needs = listOfArt.filter(el => el.charAt(0) === cat);
    let count = needs.reduce((a, b) => {
      return Number(a) + Number(b.split(" ")[1]);
    }, 0);
    
    return "(" + cat + " : " + count + ")";
  }).join(" - ");
}

*/