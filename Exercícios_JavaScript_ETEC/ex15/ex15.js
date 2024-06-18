/*Desenvolva um  programa  que,  com  base  na  altura  e  no  sexo  de  uma  pessoa,  calcule  seu  peso  ideal utilizando estruturas de seleção e as seguintes fórmulas: 
    -Para homens: (72.7 * altura) -58
    -Para mulheres: (62.1 * altura) -44.7 */
function verificarPeso() {
    var altura = document.getElementById('altura').value;
    var resultadoDiv = document.getElementById('resultado');
    var escolha = parseInt(prompt("Escolha uma opção:\n1 - Homem\n2 - Mulher"));

    switch (escolha) {
        case 1:
            resultadoDiv.innerText = `Seu peso é ${(72.7 * altura - 58).toFixed(2)}`
            resultadoDiv.style.display = "flex"
            break;
        case 2:
            resultadoDiv.innerText = `Seu peso é ${(62.1 * altura -44.7).toFixed(2)}`
            resultadoDiv.style.display = "flex"
            break;
        default:
            resultadoDiv.innerText = "Opção inválida.";
            resultadoDiv.style.display = "flex"
    }
}