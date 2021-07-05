pub mod functions {
  
  pub fn mse(input_arr: [f32; 10], target_arr: [f32; 10]) -> f32 {
   let mut loss: f32 = 0.0;
   for i in 0..input_arr.len() {
     loss = loss + (input_arr[i] - target_arr[i]);
   }

   return loss;
  }
}