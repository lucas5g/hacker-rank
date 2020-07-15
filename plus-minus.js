// const arr = [ 1, 1, 0, -1, -1]
// const arr = [ 0, 0, -1, 1, 1]
const arr  = [ -4, 3, -9, 0, 4, 1]

const plusMinus = (arr) => {

  let positive = 0
  let negative = 0
  let zero = 0

  for(let i in arr){
    arr[i] > 0 && positive++
    arr[i] < 0 && negative++
    arr[i] === 0 && zero++

  }

  const elements  = arr.length
  const positiveByElements = (positive / elements).toFixed(6)
  const negativeByElements = (negative / elements).toFixed(6)
  const zeroByElements = (zero / elements).toFixed(6)

  console.log(`\n${positiveByElements} \n${negativeByElements} \n${zeroByElements}`)

  // return { positive, negative, zero}
}

console.log(plusMinus(arr))