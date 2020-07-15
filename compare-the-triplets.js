const a = [ 5, 6, 7]
const b = [ 3, 6, 10]

const compareTriplets = (a, b) => {

  let pointsA = 0
  let pointsB = 0
  for(let i in a){

    a[i] > b[i] &&  pointsA++

    a[i] < b[i] &&  pointsB++
    
  }

  return [pointsA, pointsB]
}

console.log(compareTriplets(a, b))