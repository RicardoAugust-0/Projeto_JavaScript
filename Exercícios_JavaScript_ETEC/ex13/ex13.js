/* Escreva  um  programa  que exiba  as  seguintes  opções  e  realize  as  operações  solicitadas  em  cada  uma delas utilizando estruturas de seleção:
 -Adição
 -Subtração 
 -Multiplicação 
 -Divisão 
*/
var A = parseInt(prompt("coloque um valor"));
var B = parseInt(prompt("Coloque um segundo valor"));
var resultado = prompt("Coloque uma das operações" + "\n" + "-Adição" + "\n"+  "-Subtração" + "\n" + "-Multiplicação" + "\n" + "-Divisão");

switch (resultado) {
    case "Adição":
    case "1":
        alert(`A junção dos dois valores é ${A + B}`);
        break
    case "Subtração":
    case "2":
        alert(`A subtração dos dois valores é ${A - B}`);
        break
    case "Multiplicação":
    case "3":
        alert(`A multiplicação dos valores é ${A * B}`);
        break
    case "Divisão":
    case "4":
        alert(`A divisão dos valores é ${A / B}`);
        break
    default:
        alert("Operação invalída");
}