// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [9, 8, 9],
// ]

const matrix = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
]

// const matrix = [
//   [10, 2],
//   [3, 4]
// ]

const diagonalDifference = (matrix) => {

  const diagonal = [0, 0]

  for (let i in matrix) {

    for (let j in matrix[i]) {

      diagonal[0] += matrix[j][j]
      diagonal[1] += matrix[j][matrix.length - 1 - j]

    }
    break
  }


  const difference = diagonal[0] - diagonal[1]

  return difference >= 0 ? difference : difference * -1
  // return difference
}

console.log(diagonalDifference(matrix))