package algorithm

import (
	"math/rand"
)

func GetRandomArray() []float64 {
	var arr []float64;
	for i := 0; i < 10; i++ {
		arr = append(arr, rand.Float64())
	}

	return arr
}

func MatrixMult(m1 []float64, m2 []float64) float64 {
	var mult float64
	for i := 0; i < len(m1); i++ {
		mult += m1[i] * m2[i]
	}

	return mult
}