/* Escrever um programa declarando três variáveis do tipo inteiro (a, b e c).
Ler um valor maior que zero para cada variável (se o valor digitado não é válido, mostrar mensagem e ler novamente).
Exibe o menor valor lido multiplicado pelo maior e o maior valor dividido pelo menor.
*/

var a = prompt("Coloque um valor inteiro");
var b = prompt("Coloque um segundo valor inteiro");
var c = prompt("Coloque um terceiro valor inteiro");

if (a < b || a < c && b < c) {
    alert(`Os valores são: ${a*c}` + " e " + `${c/a}`);
} else if (a < b || a < c && c < b) {
    alert(`Os valores são: ${a*b}` + " e " + `${b/a}`);
} else if (b < a || b < c && a < c) {
    alert(`Os valores são: ${b*c}` + " e " + `${c/b}`);
} else if (b < a || b < c && c < a) {
    alert(`Os valores são: ${b*a}` + " e " + `${a/b}`);
} else if (c < a || c < b && a < b) {
    alert(`Os valores são: ${c*b}` + " e " + `${b/c}`);
} else if (c < a || c < b && b < a) {
    alert(`Os valores são: ${b*c}` + " e " + `${c/b}`);
} else {
    alert("valores invalidos")
}