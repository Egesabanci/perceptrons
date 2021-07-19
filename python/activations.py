import numpy as np


def relu(num: float):
  return np.max(0, num)


def sigmoid(num: float):
  return 1 / (1 + np.power(np.exp(1), -num))