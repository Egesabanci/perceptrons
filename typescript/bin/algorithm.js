export const createRandomArray = (len) => {
    let arr = [];
    for (let i = 0; i < len; i++) {
        let num = Math.random();
        arr.push(num);
    }
    return arr;
};
export const matrixMultiplication = (arr1, arr2) => {
    let arrLength = arr1.length;
    let mult = 0;
    for (let i = 0; i < arrLength; i++) {
        mult += arr1[i] * arr2[i];
    }
    return mult;
};
export const classify = (output, threshold) => {
    return output < threshold ? 1 : 0;
};
//# sourceMappingURL=algorithm.js.map