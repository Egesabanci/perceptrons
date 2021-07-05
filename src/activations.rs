pub mod functions {

  pub fn relu(num : f32) -> f32 {
    let calculated: f32 = if num > 0.0 { num } else { 0.0 };
    return calculated; 
  }
}