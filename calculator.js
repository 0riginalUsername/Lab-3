

// add
function add(num1, num2){
  return (num1 + num2)
}
//subtract
function sub(num1, num2){
  return (num1 - num2)
}
//multiply 
function mult(num1, num2){
  return (num1 * num2)
}
//divide
function div(num1, num2){
  return (num1 / num2)
}
function power(num1, num2){
  return Math.pow(num1, num2)
}
function sqrt(num1){
  return Math.sqrt(num1)
}
function mod(num1, num2){
  return num1 % num2
}

function calculate(expression) {
  const tokens = expression.split(' ');
  
  let num1
  let operator
  let num2
  if(tokens.length === 3){
    num1 = Number(tokens[0])
    operator = tokens[1]
    num2 = Number(tokens[2])
    if (Number.isNaN(num1) || Number.isNaN(num2)) {
      alert("please enter valid number")
      return;}
    }
    else if(tokens.length > 3){
      alert("expression is too long!")
    }
    else if (tokens.length < 2){
      alert("expression is too short")
    }
  if (operator === '+') {
    return add(num1, num2);
  }
  if (operator === '-') {
    return sub(num1, num2);
  }
  if (operator === '*') {
    return mult(num1, num2);
  }
  if (operator === '/') {
    return div(num1, num2);
  }
  if (operator === '^') {
    return power(num1, num2);
  }
  if (operator === '%') {
    return mod(num1, num2);
  }
  if (operator === 'sqrt') {
    return sqrt(num1);
  }
}

/* **************** DO NOT EDIT THE CODE BELOW **************** */
/* ************************************************************ */
/* **************** DO NOT EDIT THE CODE BELOW **************** */

// When the Submit button is clicked, this code calls your `calculate` function
// and then inserts the result on the HTML page.
document.querySelector('#submitButton').addEventListener('click', () => {
  const result = calculate(document.querySelector('#expression').value);
  if (result !== undefined) {
    document.querySelector('#answer').innerText = result;
  }
});
