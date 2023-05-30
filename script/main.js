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
  document.getElementById('fetchButton').addEventListener('click', function() {
    fetch('/identificacao.json')
      .then(function(response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Erro na requisição');
        }
      })
      .then(function(data) {
        var formattedJson = JSON.stringify(data, null, 2);
        var resultado = document.getElementById('identification');
        resultado.textContent = formattedJson;
      })
      .catch(function(error) {
        document.getElementById('identification').textContent = error;
      });
  });