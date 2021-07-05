pub mod functions {
  use rand::Rng;

  pub fn create_random_arr() -> Vec<f32> {
    let mut generated_array: Vec<f32> = vec![];
  
    for _ in 0..10 {
      let mut random_number: f32 = rand::thread_rng().gen_range(-2f32..2f32);
      generated_array.push(random_number);
    }
    
    return generated_array;
  }
}