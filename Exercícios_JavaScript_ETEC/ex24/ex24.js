/* Escreva um programa que calcule e exiba a soma dos quadrados dos 20 primeiros números inteiros positivos ímpares a partir do número informado pelo usuário menor que 10 e maior que zero.*/

var numeroInput = document.querySelector("#numero");
let somaQuadrados = 0;
let contador = 0;
var resultado = document.querySelector("#resultado");

function intervalo() {
  // Obtém o valor do input e converte para número
  let valor = parseInt(numeroInput.value);

  // Verifica se o número está dentro do intervalo permitido (0 a 9)
  if (valor >= 0 && valor <= 9) {
    // Zera as variáveis para iniciar o cálculo novamente
    somaQuadrados = 0;
    contador = 0;

    // Encontra os próximos 20 números ímpares a partir do número fornecido
    for (let i = valor; contador < 20; i++) {
      if (i % 2 !== 0) {
        // Verifica se o número é ímpar
        somaQuadrados += i * i;
        contador++;
      }
    }
    // Atualiza o resultado depois que o loop termina
    resultado.innerHTML = `A soma dos quadrados dos 20 primeiros números ímpares a partir de ${valor} é: ${somaQuadrados}`;
  } else {
    alert("O número fornecido não está dentro do intervalo permitido (0 a 9).");
  }
}
