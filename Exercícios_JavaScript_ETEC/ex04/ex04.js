//Escreva um programa que leia dois números e apresente a diferença do maior para o menor.

var n1 = parseInt(prompt("Coloque um valor"));
var n2 = parseInt(prompt("Coloque outro valor"));

if (n1 >= n2) {
    console.log(`A diferença é de ${n1 - n2}`);
} else if (n2 >= n1) {
    console.log(`A diferença é de ${n2 - n1}`);
}