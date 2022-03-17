package perceptron;

public class Activation {
  public static double relu(double num) {
    return Math.max(num, 0.0);
  }

  public static double sigmoid(double num) {
    return 1 / (1 + Math.exp(num * -1));
  }
}
