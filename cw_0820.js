var numberToPrice = function(number) {
  if (typeof number !== "number") { return 'NaN' }
  number = number.toString()
  let decimal = number.substring(number.indexOf(".") + 1)
  let beforeZero = number.length
  
  // solves for after decimal issues
  if (number.includes(".")) {
    let afterZero = number.substring(number.indexOf(".") + 1).length
    console.log("afterZero",afterZero)
    beforeZero = number.length - (afterZero + 1)
    console.log("beforeZero",beforeZero)
    if (afterZero === 2) {
      decimal = decimal
    } else if (afterZero > 2) {
      decimal = decimal.substring(0,2) + "." + decimal.substring(2)
      decimal = Math.round(parseInt(decimal)).toString()
    } else {
      decimal = decimal + "0"
    }
    number = number.substring(0,beforeZero) + "." + decimal
  } else {
    number += ".00"
  }

  console.log(beforeZero)
  console.log(number)

  // solve for before decimal
  if (number.includes("-")) {
    number = number.substring(1)
    beforeZero = beforeZero - 1
    while (beforeZero > 3) {
      number = number.substring(0, beforeZero - 3) + "," + number.substring(beforeZero - 3)
      beforeZero = beforeZero - 3
    }
    number = "-"+number
  } else {
    while (beforeZero > 3) {
      number = number.substring(0, beforeZero - 3) + "," + number.substring(beforeZero - 3)
      beforeZero = beforeZero - 3
    }
  }

  return (number)
}

console.log(numberToPrice(245123215.00))        //'245,213,215.00'
console.log(numberToPrice(1500.129))            //'1,500.12'
console.log(numberToPrice(-5))                  //'-5.00'
console.log(numberToPrice(1000000.5))           //'1,000,000.50'
console.log(numberToPrice('@'))                 //'NaN'


/*
alternate solutions

var numberToPrice = function(n) {
   return typeof n != 'number' ? 'NaN' : n.toFixed(3).replace(/\d$/, '').replace(/(\d)(?=(?:\d{3})+\.)/g, '$1,')
}

function numberToPrice(number) {
  if (isNaN(number) || number === '') {
    return NaN.toString();
  }
  let sign = (number < 0 ? '-' : '');
  number = Math.abs(number).toFixed(3).slice(0, -1);
  let chars = number.toString().split('');
  for (let i = chars.length - 6; i > 0; i -= 3) {
    chars.splice(i, 0, ',');
  }
  return sign + chars.join('');
}

var numberToPrice = function(number) {
  return Number.isFinite(number) && `${number.toLocaleString().split('.')[0]}${number.toFixed(3).slice(-4, -1)}` || 'NaN'
}

*/