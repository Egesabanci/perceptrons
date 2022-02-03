import {relu, sigmoid} from "./activations.js"
import {createRandomArray, matrixMultiplication} from "./algorithm.js"

const main = () => {
  const inputs = createRandomArray(10)
  const weights = createRandomArray(10)
  const mult = matrixMultiplication(inputs, weights)

  const activated = sigmoid(mult)
  console.log(`Output of the perceptron: ${activated}`)
}

main()