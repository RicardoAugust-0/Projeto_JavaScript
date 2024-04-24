/* Implemente um programa de uma máquina de café que ofereça três opções de bebidas: café preto, café com leite e cappuccino. O usuário deve escolher uma opção e o programa deve exibir a bebida escolhida e seu valor.
 */
var opcao = prompt("Escolha uma opção de café! :" + "\n" + "1 - Café preto" + "\n" + "2 - Café com leite" + "\n" + "3 - Cappuccino");

switch (opcao) {
    case "1":
    case "café preto":
        alert("Sua bebida é \"Café preto\" no valor de R$5,00 a xícara.");
        break
    case "2":
    case "café com leite":
        alert("Sua bebida é \"Café com leite\" no valor de R$5,50 a xícara.");
        break
    case "3":
    case "cappuccino":
        alert("Sua bebida é \"Capuccinno\" no valor de R$6,50 a xícara.");
        break
    default:
        alert("Nenhuma opção válida!");
    }