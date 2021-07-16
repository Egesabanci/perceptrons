mod utils;
mod activations;

fn feed_forward(inputs: &Vec<f32>, weights: &Vec<f32>) -> f32 {
    let mut weighted_sum: f32 = 0f32;
    for i in 0..inputs.len() {
        weighted_sum += inputs[i] * weights[i];
    }

    return weighted_sum;
}

fn apply_activation(num: f32) -> f32 {
    return activations::sigmoid(num);
}

fn classify(output: f32, threshold: f32) -> i8 {
    if output < threshold {return 0} else {return 1};
}

fn main() {
    let inputs: Vec<f32> = utils::create_random_arr();
    let weights: Vec<f32> = utils::create_random_arr();

    let weighted_sum: f32 = feed_forward(&inputs, &weights);
    let activated_sum: f32 = apply_activation(weighted_sum);
    let classified_output: i8 = classify(activated_sum, 0.5);

    println!("Single layer perceptron output: {}", classified_output);
}
