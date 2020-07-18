const minuMaxSum = (arr) => {
 
  arr.sort()
  let min = arr[0]
  let max = arr[arr.length - 1]
  const sumTotal =  arr.reduce( (sum, n) => {
    return sum + n
  })

  const arrayMin = sumTotal - max
  const arrayMax = sumTotal - min

  console.log(arrayMin, arrayMax)


  // console.log(sumTotal)
  // console.log('min ', min)
  // console.log('max ', max)
}


const arr = [1, 2, 3, 4, 5]

minuMaxSum(arr)