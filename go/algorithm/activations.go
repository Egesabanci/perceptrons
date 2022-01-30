package algorithm

import (
	"math"
)

func Relu(input float64) float64 {
	return math.Max(0.0, input)
}

func Sigmoid(input float64) float64 {
	return 1 / (1 + math.Exp(input * -1.0))
}