export const createRandomArray = (len) => {
  let arr = []
  for (let i = 0; i < len; i++) {arr.push(Math.random())}
  return arr
}

export const matrixMultiplication = (m1, m2) => {
  if (m1.length !== m2.length) {throw new Error("Array lengths are incompatible")}

  let mult = 0
  m1.map((item, index) => {mult += item * m2[index]})
  return mult
}