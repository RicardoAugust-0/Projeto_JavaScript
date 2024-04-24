//Escreva um programa que leia 3 números inteiros e imprima na tela os valores em ordem decrescente.

var num1 = parseInt(prompt("Coloque o Primeiro número:"))
var num2 = parseInt(prompt("Coloque o Segundo número:"))
var num3 = parseInt(prompt("Coloque o Terceiro número:"))

if (num1 > num2 && num2 > num3) {
    alert(`A ordem descrescente fica: ${num1}, ${num2}, ${num3}`);
} else if (num1 > num3 && num3 > num2) {
    alert(`A ordem descrescente fica: ${num1}, ${num3}, ${num2}`);
} else if (num2 > num1 && num1 > num3) {
    alert(`A ordem descrescente fica: ${num2}, ${num1}, ${num3}`);
} else if (num2 > num3 && num3 > num1) {
    alert(`A ordem descrescente fica: ${num2}, ${num3}, ${num1}`);
} else if (num3 > num1 && num1 > num2) {
    alert(`A ordem descrescente fica: ${num3}, ${num1}, ${num2}`);
} else {
    alert(`A ordem descrescente fica: ${num3}, ${num2}, ${num1}`);
}