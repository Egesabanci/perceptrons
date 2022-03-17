package perceptron;

public class Main {
  public static void main(String[] args) {
    double[] inputs = Algorithm.createRandomArray(10);
    double[] weights = Algorithm.createRandomArray(10);

    double matmul = Algorithm.matrixMultiplication(inputs, weights);
    double activated = Activation.sigmoid(matmul);
    double classified = Algorithm.classify(activated, 0.5);

    System.out.println("Output of the perceptron: " + classified);
  }
}