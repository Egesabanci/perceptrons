import std.random : uniform;

float[] createRandomArray(int lenght, float min, float max) {
	float[] arr = [];
	for (int i = 0; i < lenght; i++) {
		arr ~= uniform(min, max);
	}

	return arr;
}


float matrixMultiplication(float[] m1, float[] m2) {
	assert(m1.length == m2.length);
	float mult = 0.0;

	foreach(index, elem; m1) {
		mult += elem * m2[index];		
	}

	return mult;
}