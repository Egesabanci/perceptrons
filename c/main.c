#include <stdio.h>
#include "activations.h"

float INPUTS[5] = {1.2, 4.2, 5.8, 3.2, 8.6};
float WEIGHTS[5] = {4.1, 9.2, 2.54, 1.9, 2.6};

float weightedSum(float inputs[5], float weights[5]) {
  float sum = 0.0;

  for (int i = 0; i < 5; i++) {
    sum += inputs[i] * weights[i];
  }
  
  return sum;
}

int getOutput(float weighted_sum, float threshold) {
  if (threshold < weighted_sum) {return 1;}
  else {return 0;}
}

int main() {
  float weighted_sum = weightedSum(INPUTS, WEIGHTS);
  float activated_val = sigmoid(weighted_sum);
  int output = getOutput(activated_val, 0.5);

  printf("Final output value is: %d\n", output);
}