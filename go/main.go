package main

import (
	"fmt"
	"go/perceptron/algorithm"
)

func main() {
	var inputs []float64 = algorithm.GetRandomArray()
	var weights []float64 = algorithm.GetRandomArray()
	var mult float64 = algorithm.MatrixMult(inputs, weights)
	var activatedOutput float64 = algorithm.Sigmoid(mult)

	fmt.Println("Perceptron Output:", activatedOutput)
}