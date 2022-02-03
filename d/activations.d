import std.math : exp;
import std.math.operations : fmax;

float relu(float input) {
	return fmax(0.0, input);
}

float sigmoid(float input) {
	return 1 / (1 + exp(input * -1));
}