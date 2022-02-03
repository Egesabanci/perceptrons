export const relu = (input) => {
  return Math.max(0, input)
}

export const sigmoid = (input) => {
  return 1 / (1 + Math.exp(input * -1))
}