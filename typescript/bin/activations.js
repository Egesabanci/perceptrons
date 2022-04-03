export const relu = (x) => {
    return Math.max(x, 0.0);
};
export const sigmoid = (x) => {
    return 1 / (1 + Math.exp(x * -1));
};
//# sourceMappingURL=activations.js.map