/* Implemente um programa que leia dois números inteiros e ofereça opções ao usuário para escolher qual operação deseja realizar, utilizando estruturas de seleção para cada caso:
    -Verificar se um dos números lidos é ou não múltiplo do outro
    -Verificar se os dois números lidos são pares
    -Verificar se a média dos dois números é maior ou igual a 7.
    -Sair 
*/

var A = parseInt(prompt("Coloque um valor:"));
var B = parseInt(prompt("Coloque outro valor:"));
var resultado = prompt(
  "Escolha uma das alternativas:" +
    "\n" +
    "1 - É multíplo ou não?" +
    "\n" +
    "2 - Números são pares?" +
    "\n" +
    "3 - Média é maior ou igual a 7?" +
    "\n" +
    "4 - Sair"
);

switch (resultado) {
  case "1":
    if (A % B == 0 || B % A == 0) {
      alert("O número é Multíplo");
    } else {
      alert("O número não é Multíplo");
    }
    break;
  case "2":
    if (A % 2 == 0) {
      alert("Os números são pares!");
    } else if (B % 2 == 0) {
      alert("Os números são pares!");
    } else {
      alert("Os números não são pares!");
    }
    break;
  case "3":
    if ((A + B) / 2 >= 7) {
      alert("A média é maior ou igual a 7!");
    } else {
      alert("A média não é maior que 7!");
    }
    break;
  case "4":
    alert("Você saiu");

  default:
    alert("Nenhum valor certo.");
}
