pub mod functions {

  #[allow(dead_code)]
  pub fn relu(num : f32) -> f32 {
    let calculated: f32 = if num > 0f32 { num } else { 0f32 };
    return calculated; 
  }

  pub fn sigmoid(num: f32) -> f32 {
    let calculated: f32 = 1f32 / (1f32 + f32::powf(f32::exp(1f32), -num));
    return calculated;
  }
}