const array = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

const aVeryBigSum = (array) => {

  let sum = 0
  array.map( n => sum += n)

  return sum
}

console.log(aVeryBigSum(array))