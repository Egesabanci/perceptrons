#include <math.h>
#include "activations.h"

float relu(float num) {
  if (num < 0.0) {return 0.0;} else {return num;}
}

float sigmoid(float num) {
  return 1.0 / (1.0 + pow(exp(1.0), -num)); 
}