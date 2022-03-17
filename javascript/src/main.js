import chalk from "chalk"
import {classify} from "./algorithm.js"
import {relu, sigmoid} from "./activations.js"
import {createRandomArray, matrixMultiplication} from "./algorithm.js"

const main = () => {
  const inputs = createRandomArray(10)
  const weights = createRandomArray(10)
  const mult = matrixMultiplication(inputs, weights)

  const activated = sigmoid(mult)
  const output = classify(activated, 0.5) 
  console.log(chalk.magenta("Output of the perceptron:"), "-", chalk.cyanBright(output))
}

main()