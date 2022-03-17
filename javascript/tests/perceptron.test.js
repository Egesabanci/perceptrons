import chalk from "chalk"
import {relu, sigmoid} from "../src/activations.js"

import {
	createRandomArray,
	matrixMultiplication,
	classify
} from "../src/algorithm.js"


const assert = (con, name) => {
	if (!con) {
		console.log(chalk.red("Error occured - test case failed!"))
		throw `Case failed: (${name})`
	} else {
		console.log(chalk.green("Passed"), "-", chalk.blue(name))
	}
}


const activationTests = () => {
	assert(relu(-1) === 0, "relu = -1")
	assert(relu(1) === 1, "relu = 1")
	assert(sigmoid(0) === 0.5, "sigmoid = 0")
}


const algorithmTests = () => {
	assert(createRandomArray(10).length === 10, "Random array 10 length")
	assert(classify(0.4, 0.5) === 0, "Classify 0.4 - threshold 0.5")
	assert(classify(0.6, 0.5) === 1, "Classify 0.6 - threshold 0.5")

	const a = [1, 2, 3]
	const b = [1, 2, 3]
	assert(matrixMultiplication(a, b) === 14, "Matmul - 5 length")
}


const main = () => {
	activationTests()
	algorithmTests()
}

main()