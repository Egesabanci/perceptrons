import {
	matrixMultiplication,
	createRandomArray,
	classify}
from "./algorithm.js"

import {sigmoid} from "./activations.js"


const main = () => {
	const FIXED_LENGTH: number = 10
	const THRESHOLD: number = 0.5

	const arr1: number[] = createRandomArray(FIXED_LENGTH)
	const arr2: number[] = createRandomArray(FIXED_LENGTH)

	const mult: number = matrixMultiplication(arr1, arr2)
	const activated: number = sigmoid(mult)
	const output: number = classify(activated, THRESHOLD)

	console.log(`Output of the perceptron: ${output}`)
}

main()