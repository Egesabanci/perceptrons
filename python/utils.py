import numpy as np


def create_random_arr(lenght: int):
  arr = [np.random.uniform(-1, 1) for _ in range(lenght)]
  return np.array(arr)


def weighted_sum(inputs: np.ndarray, weights: np.ndarray):
  return np.dot(inputs, weights)


def apply_activation(func, num: float):
  return func(num)


def classify(num: float, threshold: float):
  classified = 1 if num > threshold else 0
  return classified