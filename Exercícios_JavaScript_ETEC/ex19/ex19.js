/* Escreva um programa que leia:
    - a quantidade de números que deverá processar;
    - os números que deverá processar, e calcule e exiba, para cada número a ser processado o seu fatorial.
    Lembrete: o fatorial de um número N é dado pela fórmula: N! = 1 * 2 * 3 * 4 * 5 * ... * N
*/

let num = parseInt(prompt("Coloque um valor a ser fatorado:")); // Substitua pelo número desejado
let fatorial = 1;

while (num > 1) {
    fatorial *= num;
    num--;
}

alert(`O fatorial de ${num} (usando um loop while) é ${fatorial}.`);