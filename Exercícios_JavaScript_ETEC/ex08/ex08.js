/* Escreva um programa que leia um número inteiro (variável CODIGO).
Verificar se o código é igual a 1, igual a 2 ou igual a 3.
Caso não seja, apresentar a mensagem “Código inválido”.
Ao ser verificado o código e constatado que é um valor válido, o programa deve verificar cada código em separado para determinar seu valor por extenso, ou seja, apresentar a mensagem “um”, ”dois” ou “três”. (Utilizar o comando Switch).
*/
var CODIGO = parseInt(prompt("Coloque um número inteiro:"));

switch (CODIGO) {
    case 1:
        alert("um");
        break
    case 2:
        alert("dois");
        break
    case 3:
        alert("três");
        break
    default:
        alert("Código inválido");
}