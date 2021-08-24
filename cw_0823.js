var peakHeight = function(mountain) {
  let row = mountain.length
  let column = mountain[0].length
  // console.log("column", column)
  // console.log("row", row)
  let count = 1
  let flat = mountain.join(",").split(",")
  // console.log(flat.includes("^"))
  // console.log(flat)
  while (flat.indexOf("^") !== -1) {
    for (let r = 1; r < row; r++) {
      for (let c = 1; c < column; c++) {
        if (mountain[r][c] === "^" && r > 0 && c > 0) {
          if (mountain[r-1][c-1] === " " ||
                      mountain[r-1][c+1] === " " ||
                      mountain[r+1][c-1] === " " ||
                      mountain[r + 1][c + 1] === " ") {
            mountain[r][c] = count
          } else if (mountain[r-1][c-1] === " " ||
                      mountain[r-1][c+1] === " " ||
                      mountain[r+1][c-1] === " " ||
                      mountain[r + 1][c + 1] === " ") {
            mountain[r][c] = count++
          }
        }
      }
    }
    flat = mountain.join(",").split(",")
    count++
    console.log(count)
  } 
  /*
  while (mountain.join(",").split("") {
    for (let r = 0; r < row; r++) {
      for (let c = 0; c < column; c++) {
        // let focus = mountain[r][c]
        // console.log("row " + r)
        // console.log("column "+ c)
        // console.log(mountain[r-1][c-1])
        if (r === 0 ||
            c === 0) {
          if (mountain[r][c] === "^") {
            mountain[r][c] = count
          }
        }
        else if (mountain[r][c] === "^" && ) {
          if (mountain[r-1][c-1] === " " ||
              mountain[r-1][c+1] === " " || 
              mountain[r+1][c-1] === " " ||
              mountain[j+1][c+1] === " " )
        }
      }
      count++
    }
  }
  // return mountain;
  */
}

var mountain = [
  "^^^^^^        ".split(''),
  " ^^^^^^^^     ".split(''),
  "  ^^^^^^^     ".split(''),
  "  ^^^^^       ".split(''),
  "  ^^^^^^^^^^^ ".split(''),
  "  ^^^^^^      ".split(''),
  "  ^^^^        ".split('')
];
// console.log(peakHeight(mountain))     //3

function plusMinus(arr) {
  let den = arr.length
  let pos = 0
  let neg = 0
  let zero = 0
  arr.forEach((val) => {
    if (val > 0) {
      pos++
    } else if (val < 0) {
      neg++
    } else {
      zero++
    }
  })
  return (`${(pos/den).toFixed(6)}\n${(neg/den).toFixed(6)}\n${(zero/den).toFixed(6)}`)
}

console.log(plusMinus([-4,3,-9,0,4,1]))