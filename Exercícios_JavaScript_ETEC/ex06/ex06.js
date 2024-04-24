/* Escreva um programa que leia dois números e exiba mensagem informando o valor do maior número e o valor do menor número.
Se os dois números forem iguais, o programa deve exibir mensagem informando este fato 
*/

var n1 = parseInt(prompt("Coloque o primeiro número"));
var n2 = parseInt(prompt("Coloque o segundo número"));

if (n1 > n2) {
    alert(`O Primeiro número é maior. Primeiro número: ${n1} Segundo número: ${n2}`);
} else if (n1 == n2) {
    alert(`Os número são iguais. Primeiro número: ${n1} Segundo número: ${n2}`);
} else {
    alert(`O Segundo número é maior. Primeiro número: ${n1} Segundo número: ${n2}`);
}