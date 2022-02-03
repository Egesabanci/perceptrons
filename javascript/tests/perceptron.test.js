import {relu, sigmoid} from "../src/activations.js"

describe('tests', () => {
  test('activations', () => {
    expect(relu(10)).toBe(10)
    expect(relu(-1)).toBe(0)
    expect(sigmoid(0)).toBe(0.5)
  });
})