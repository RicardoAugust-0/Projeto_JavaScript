/* Escrever um programa que leia um conjunto de números positivos, e exiba se o número lido é par ou ímpar.
Exiba ao final a soma total dos números pares lidos e também a soma dos números ímpares lidos.
Suporemos que o número de elementos deste conjunto não é conhecido, e que um número negativo será utilizado para sinalizar o fim dos dados.*/
var numero;
var somaPar = 0;
var somaImpar = 0;

while (true) {
    numero = parseInt(prompt("Digite um número positivo. (negativo se quiser parar o programa.)"));


    if (numero < 0) {
        break;
    }

    if (numero % 2 == 0) {
        somaPar += numero;
        alert(numero + " é par");
    } else {
        somaImpar += numero;
        alert(numero + " é impar");
    }
}
alert("A soma total dos números pares é: " + somaPar);
alert("A soma total dos números impares é: " + somaImpar);