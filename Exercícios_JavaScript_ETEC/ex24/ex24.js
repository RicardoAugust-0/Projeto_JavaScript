/* Escreva um programa que calcule e exiba a soma dos quadrados dos 20 primeiros números inteiros positivos ímpares a partir do número informado pelo usuário menor que 10 e maior que zero.*/

let numero = parseInt(prompt("Digite um número maior que zero e menor que 10:"));
let somaQuadrados = 0;
let contador = 0;

// Verifica se o número está dentro do intervalo permitido
if (numero > 0 && numero < 10) {
  // Encontra os próximos 20 números ímpares a partir do número fornecido
  for (let i = numero; contador < 20; i++) {
    if (i % 2 !== 0) { // Verifica se o número é ímpar
      somaQuadrados += i * i;
      contador++;
    }
  }

  alert(`A soma dos quadrados dos 20 primeiros números ímpares a partir de ${numero} é: ${somaQuadrados}`);
} else {
  alert("O número fornecido não está dentro do intervalo permitido.");
}
