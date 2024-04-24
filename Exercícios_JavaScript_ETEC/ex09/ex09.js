/* Escreva um programa que leia três valores para os lados de um triângulo (variáveis A, B e C).
Verificar se cada lado é menor que a soma dos outros dois lados.
Se sim, saber de A==B e se B==C, sendo verdade o triângulo é eqüilátero; Se não, verificar de A==B ou se A==C ou se B==C, sendo verdade o triângulo é isósceles; e caso contrário, o triângulo será escaleno.
Caso os lados fornecidos não caracterizarem um triângulo, avisar a ocorrência.
*/

var A = parseInt(prompt("Coloque valor inteiro:"));
var B = parseInt(prompt("Coloque o segundo valor inteiro:"));
var C = parseInt(prompt("Coloque o terceiro valor inteiro:"));

if (A < B + C) {
  if (A == B && B == C) {
    alert("O triângulo é Equilátero!");
  } else if (A == B || A == C || B == C) {
    alert("O triângulo é Isósceles!");
  } else {
    alert("O triângulo é escaleno!");
  }
} else {
  alert("Valores incorretos.");
}
