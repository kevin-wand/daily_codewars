function XO(str) {
  str = str.toLowerCase().split("")
  countX = 0
  countO = 0
  str.forEach(letter => {
    if (letter === 'x') {
      countX++
    } else if (letter === 'o') {
      countO++
    }
    
  })
  return (countX === countO ? true : false)
}


// (XO('xo'), true);
// (XO("xxOo"),true);
// (XO("xxxm"),false);
// (XO("Oo"),false);
// (XO("ooom"),false);
// console.log(XO('xo'));
// console.log(XO("xxOo"));
// console.log(XO("xxxm"));
// console.log(XO("Oo"));
// console.log(XO("ooom"));

/*
alternate solutions
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  console.log(x)
  console.log(o)
  
  return (x && x.length) === (o && o.length);
}
*/

function validate(password) {
  return /[A-Z]/.test(password)
  && /[a-z]/.test(password)
  && /[0-9]/.test(password)
  && password.length >= 6
}

/*
At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a number
Test.expect(validate('djI38D55'), 'djI38D55 - Expected true');
Test.expect(!validate('a2.d412'), 'a2.d412 - Expected false');
Test.expect(!validate('JHD5FJ53'), 'JHD5FJ53 - Expected false');
Test.expect(!validate('!fdjn345'), '!fdjn345 - Expected false');
Test.expect(!validate('jfkdfj3j'), 'jfkdfj3j - Expected false');
Test.expect(!validate('123'), '123 - Expected false');
Test.expect(!validate('abc'), 'abc - Expected false');
Test.expect(validate('Password123'), 'Password123 - Expected true');
*/
// console.log(validate('djI38D55')); //true
// console.log(validate('a2.d412')); //false
// console.log(validate('JHD5FJ53')); //false
// console.log(validate('!fdjn345')); //false
// console.log(validate('jfkdfj3j')); //false
// console.log(validate('123')); //false
// console.log(validate('abc')); //false
// console.log(validate('Password123')); //true

/*
alternate solutions

function validate(password) {
  return  /^[A-Za-z0-9]{6,}$/.test(password) &&
          /[A-Z]+/           .test(password) &&
          /[a-z]+/           .test(password) &&
          /[0-9]+/           .test(password) ;
}

function validate(password) {

  * positive lookahead is used here to ensure that at least one of each character set is available
  * you need to allow every character (.*) before your lookahead character set, 
  * except you want to ensure the expression starts with i.e. a lowercase character.
  * Each lookahead basically says "Is there <anything> and 1 or more of <character set> in the following expression?"
  * The speciality here is that lookaheads wont touch the matching group so that you can check for 6 or more
  * characters afterwards. The 6 or more characters will simply not match if they don't fulfill every lookahead.

  return /^(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*[0-9]+)[A-Za-z0-9]{6,}$/.test(password);
}

*/


function presses(phrase) {
  let valueOne = ["A","D","G","J","M","P","T","W"," ","1"]
  let valueTwo = ["B","E","H","K","N","Q","U","X","0"]
  let valueThree = ["C","F","I","L","O","R","V","Y"]
  let valueFour = ["S","Z","2","3","4","5","6","8"]
  let valueFive = ["7","9"]
  
  phrase = phrase.toUpperCase().split("")

  return ((phrase.filter(letter => valueOne.indexOf(letter) !== -1)).length
  + (phrase.filter(letter => valueTwo.indexOf(letter) !== -1 )).length *2
  + (phrase.filter(letter => valueThree.indexOf(letter) !== -1 )).length *3
  + (phrase.filter(letter => valueFour.indexOf(letter) !== -1)).length * 4
  + (phrase.filter(letter => valueFive.indexOf(letter) !== -1)).length * 5)
}

// Test.assertEquals(presses("LOL"), 9, "should work for simple examples")
// Test.assertEquals(presses("HOW R U"), 13, "should work for phrases with spaces")
console.log(presses("WHERE DO U WANT 2 MEET L8R"))
// console.log(presses("HOW R U"))

/*
alternate solutions

function presses(phrase) {
  var chunks = ['1', 'ABC2', 'DEF3', 'GHI4', 'JKL5', 'MNO6', 'PQRS7', 'TUV8', 'WXYZ9', ' 0'],
      phrase = phrase.toUpperCase().split(''),
      total = 0;
  
  phrase.forEach(function(l) {
    var key = chunks.filter(function(c) {
      return c.indexOf(l) > -1;
    })[0];
    total += key.indexOf(l) + 1;
  });
  
  return total;
      
}


*/