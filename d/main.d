import std.stdio : writeln;
import activations : relu, sigmoid;
import algorithm : createRandomArray, matrixMultiplication;

void main() {
	float[] inputs = createRandomArray(10, -10, 10);
	float[] weights = createRandomArray(10, -10, 10);

	float matmul = matrixMultiplication(inputs, weights);
	float activated = sigmoid(matmul);
	
	writeln("Output of the perceptron: ", activated);
}