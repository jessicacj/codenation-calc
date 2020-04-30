// Math operations

// Addition
function add(num1, num2) {
    return num1 + num2;
  }

// Substraction
  function sub(num1, num2) {
    return num1 - num2;
  }
  
// Multiplication 
  function mult(num1, num2) {
    return num1 * num2;
  }

// Division
  function div(num1, num2) {
    if (num2 === 0) {
      return 0;
    }
  
    return num1 / num2;
  }
  
  module.exports = {
    add,
    sub,
    mult,
    div
  };