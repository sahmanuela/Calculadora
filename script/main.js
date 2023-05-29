var input = document.Calculator.text1;

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    calculate()
  } else {
    displaynum(event.key);
  }
});

function displaynum(n1) {
    input.value = input.value + n1;
  }

function calculate() {
    input.value = eval(input.value);
  }