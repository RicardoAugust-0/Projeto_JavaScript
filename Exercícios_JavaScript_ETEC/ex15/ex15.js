/*Desenvolva um  programa  que,  com  base  na  altura  e  no  sexo  de  uma  pessoa,  calcule  seu  peso  ideal utilizando estruturas de seleção e as seguintes fórmulas: 
    -Para homens: (72.7 * altura) -58
    -Para mulheres: (62.1 * altura) -44.7 */
var altura = parseFloat(prompt("Coloque a Altura! :"));
var sexo = prompt("1 - Homem" + "\n" + "2 - Mulher");

switch (sexo) {
    case "1":
        alert("Homem" + "\n" + `Seu peso é ${(72.7 * altura) - 58}`);
        break
    case "2":
        alert("Mulher" + "\n" + `Seu peso é ${(62.1 * altura) - 44.7}`);
        break
    default:
        alert("Valor Invalído!")
}