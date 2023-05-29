var input = Calculator.text1;

//Funcionalidade da calculadora
function displaynum(n1) {
  input.value = input.value + n1;
}

//Função na tecla ENTER
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    calculate()
  } else {
    displaynum(event.key);
  }
});

function calculate() {
    input.value = eval(input.value);
  }

  //Identificação do usuário por requisição assíncrona
  var fetchButton = getElementById("fetchButton");
  var identificationElement = getElementById("identification");

  fetchButton.addEventListener("click", function() {
    fetch("/identificacao.json")
      .then(response => response.json())
      .then(data => {
        var identification = data.identification;
        identificationElement.textContent = "Sua identificação é: " + identification;
      })
      .catch(error => {
        console.log("Ocorreu um erro na requisição: ", error);
      });
  });