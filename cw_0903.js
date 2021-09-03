var peakHeight = function(mountain) {
  let circumflex = /\^/g
  let count = 1

  while (mountain.join("").search(circumflex) > -1) {
    for (let i = 0; i < mountain.length; i++) {
      for (let j = 0; j < mountain[0].length; j++) {
        if (mountain[i][j].search(circumflex) === 0) {
          if (i === 0) {
            if (mountain[i+1][j] || mountain[i][j + 1]) {
                mountain[i][j] = mountain[i][j].replace(circumflex, count)
            }
          } else if (j === 0) {
            if (mountain[i+1][j] ||
              mountain[i][j-1] ||
              mountain[i][j + 1]) {
                mountain[i][j] = mountain[i][j].replace(circumflex, count)
            }
          } else {
            if (mountain[i - 1][j] ||
              mountain[i+1][j] ||
              mountain[i][j-1] ||
              mountain[i][j + 1]) {
                mountain[i][j] = mountain[i][j].replace(circumflex, count)
            }
          }
        }

      }
    }
    count++
  }
  console.table(mountain)
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
// var mountain = [
//   "              ".split(''),
//   "   ^          ".split(''),
//   "              ".split(''),
//   "              ".split(''),
//   "              ".split(''),
//   "              ".split(''),
//   "              ".split('')
// ];

console.log(peakHeight(mountain))     //3