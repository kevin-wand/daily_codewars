// function smartSum(arr,vari) {
//   console.log(arr)
//   console.log(vari)

//   // return Number(num.toString().split('').filter(el => el !== ",").reduce((a,b) => Number(a) + Number(b)))
//   // return num
// }


// console.log(smartSum(1,2))      //3
// console.log(smartSum([1,2],3))  //6

function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) { return -1 }
  let count = 0
  while (h > window) {
    count++
    h = h * bounce
    if (h > window) { count++ }
  }
  return count
}

console.log(bouncingBall(3.0, 0.66, 1.5))   //3
console.log(bouncingBall(30.0, 0.66, 1.5))  //15

