<?php
  
  function loadArray() {
    $arr = array();
    for ($i = 0; $i < 10; $i++) {
      array_push($arr, random_int(0, 50));
    }

    return $arr;
  }

  function relu($input) {
    return max(array(0, $input));
  }

  function sigmoid($input) {
    return 1 / (1 + exp($input * -1));
  }
  
  $inputs = loadArray();
  $weights = loadArray();

  $mult = 0;
  for ($i = 0; $i < count($inputs); $i++) {
    $mult += $inputs[$i] * $weights[$i];
  }

  $sigmoidMult = sigmoid($mult);
  print("Perceptron output: " . $sigmoidMult . "\n");
?>