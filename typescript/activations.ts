export const relu = (x: number) => {
	return Math.max(x, 0.0)
}

export const sigmoid = (x: number) => {
	return 1 / (1 + Math.exp(x  * -1))
}