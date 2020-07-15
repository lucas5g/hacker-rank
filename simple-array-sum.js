const simpleArraySum = (array) =>{

  let sum = 0
  array.map( r =>  sum += r )
  return sum
}

const array = [1, 2, 3]

console.log(simpleArraySum(array))