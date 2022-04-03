export const createRandomArray = (len: number) => {
  let arr: number[] = []
  for (let i: number = 0; i < len; i++) {
    let num: number = Math.random()
    arr.push(num)
  }

  return arr
}


export const matrixMultiplication = (arr1: number[], arr2: number[]) => {
  let arrLength: number = arr1.length
  let mult: number = 0
  for (let i: number = 0; i < arrLength; i++) {
    mult += arr1[i] * arr2[i]    
  }

  return mult
}


export const classify = (output: number, threshold: number) => {
  return output < threshold ? 1 : 0
}