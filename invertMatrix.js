function invertMatrix(matrix) {
  const values = new Set()

  for (let row of matrix) {
    for (let val of row) {
      values.add(val)
    }
  }

  const [val1, val2] = [...values]

  return matrix.map(row =>
    row.map(val => (val === val1 ? val2 : val1))
  )
}

console.log(invertMatrix([["a", "b"], ["a", "a"]]))
