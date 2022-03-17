package perceptron;

public class Algorithm {
  public static double[] createRandomArray(int length) {
    double[] arr = new double[length];
    for (int i = 0; i < length; i++) {
      arr[i] = Math.random(); 
    }

    return arr;
  }

  public static double matrixMultiplication(double[] a, double[] b) {
    assert a.length == b.length : "Arrays are incompatible";
    
    double matmul = 0.0;
    for (int i = 0; i < a.length; i++) {
      matmul += a[i] * b[i];      
    }

    return matmul;
  }

  public static int classify(double num, double threshold) {
    return num > threshold ? 1 : 0;
  }
}
