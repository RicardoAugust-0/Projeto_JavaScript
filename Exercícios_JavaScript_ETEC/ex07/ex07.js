/* Escreva um programa que leia um número inteiro.
Verificar por meio de condição se o valor fornecido está na faixa entre 0 (zero) e 9 (nove).
Caso o valor fornecido esteja dentro da faixa, apresentar a mensagem “valor válido”.
Caso contrário, apresentar a mensagem “valor inválido”.
 */

var num = parseInt(prompt("Coloque um número"))

if (num >= 0 && num <= 9) {
  alert("número válido")
} else {
  alert("número inválido")
}