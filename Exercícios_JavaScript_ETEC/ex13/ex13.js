/* Escreva  um  programa  que exiba  as  seguintes  opções  e  realize  as  operações  solicitadas  em  cada  uma delas utilizando estruturas de seleção:
 -Adição
 -Subtração 
 -Multiplicação 
 -Divisão 
*/
var resultado = document.querySelector("#resultado");
function adicao() {
    var numero1 = Number(document.querySelector("#numero1").value);
    var numero2 = Number(document.querySelector("#numero2").value)
    resultado.innerHTML = numero1 + numero2;
}
function subtracao() {
    var numero1 = Number(document.querySelector("#numero1").value);
    var numero2 = Number(document.querySelector("#numero2").value)
    resultado.innerHTML = numero1 - numero2;
}
function divisao() {
    var numero1 = Number(document.querySelector("#numero1").value);
    var numero2 = Number(document.querySelector("#numero2").value)
    resultado.innerHTML = numero1 / numero2;
}
function multiplicacao() {
    var numero1 = Number(document.querySelector("#numero1").value);
    var numero2 = Number(document.querySelector("#numero2").value)
    resultado.innerHTML = numero1 * numero2;
}