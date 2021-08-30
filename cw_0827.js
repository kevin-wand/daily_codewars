function truckTour(petrolpumps) {
  let test = []
  for (let j = 0; j < petrolpumps.length; j++) {
    let gas = []
    let tank = []
    let toNextPump = []
    let distance = []

    gas.push(petrolpumps[j][0])
    toNextPump.push(petrolpumps[j][1])

    let tankStart = []
    let tankTail = []
    let distanceStart = []
    let distanceTail = []

    if (j === 0) {
      tankStart = gas
      distanceStart = toNextPump
    } else {
      tankStart = gas.slice(j,gas.length)
      tankTail = gas.slice(0, j)
      distanceStart = toNextPump.slice(j,toNextPump.length)
      distanceTail = toNextPump.slice(0, j)
    }
    tank = tankStart.concat(tankTail)
    distance = distanceStart.concat(distanceTail)
    
    let testTank = 0
    let testDistance = 0
    test.push("works")
    for (let k = 0; k < gas.length; k++){
      testTank += tank[k]
      testDistance += distance[k]
      
      if ((testTank - testDistance) < 0) {
        test[j] = "no"
      }

    }
  }
  return (test.indexOf("works"))
  //   petrolpumps.forEach(petrol => {
  //     gas.push(petrol[0])
  //     toNextPump.push(petrol[1])
  //   })

  //   let tankStart = []
  //   let tankTail = []
  //   let distanceStart = []
  //   let distanceTail = []

  //   if (j === 0) {
  //     tankStart = gas
  //     distanceStart = toNextPump
  //   } else {
  //     tankStart = gas.slice(j,gas.length)
  //     tankTail = gas.slice(0, j)
  //     distanceStart = toNextPump.slice(j,toNextPump.length)
  //     distanceTail = toNextPump.slice(0, j)
  //   }
  //   tank = tankStart.concat(tankTail)
  //   distance = distanceStart.concat(distanceTail)
    
  //   let testTank = 0
  //   let testDistance = 0
  //   test.push("works")
  //   for (let k = 0; k < gas.length; k++){
  //     testTank += tank[k]
  //     testDistance += distance[k]
      
  //     if ((testTank - testDistance) < 0) {
  //       test[j] = "no"
  //     }

  //   }
  // }
  // return (test.indexOf("works"))

}

console.log(truckTour([[1,5],[10,3],[3,4]]))