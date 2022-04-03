import { matrixMultiplication, createRandomArray, classify } from "./algorithm.js";
import { sigmoid } from "./activations.js";
const main = () => {
    const FIXED_LENGTH = 10;
    const THRESHOLD = 0.5;
    const arr1 = createRandomArray(FIXED_LENGTH);
    const arr2 = createRandomArray(FIXED_LENGTH);
    const mult = matrixMultiplication(arr1, arr2);
    const activated = sigmoid(mult);
    const output = classify(activated, THRESHOLD);
    console.log(`Output of the perceptron: ${output}`);
};
main();
//# sourceMappingURL=main.js.map