import numpy as np
from utils import *
from activations import *


INPUTS: np.ndarray = create_random_arr(lenght = 10)
WEIGHTS: np.ndarray = create_random_arr(lenght = 10)


def main():
  dot_sum = weighted_sum(INPUTS, WEIGHTS)
  activated_value = apply_activation(sigmoid, dot_sum)
  classified = classify(activated_value, 0.5)

  print(f"Final output of the perceptron model: {classified}")
      

if __name__ == "__main__":
  main()