/* Elabore um programa que solicite ao usuário o valor de um produto e sua categoria (A, B ou C). Com base na categoria informada, aplique descontos de 10%, 15% e 20%, respectivamente, sobre o valor do produto e exiba o valor final após o desconto.
 */
var valor = parseFloat(prompt("Coloque o valor do produto! :"));
var categoria = prompt ("Coloque a categoria! :" + "\n" + "A - 10%" + "\n" + "B - 15%" + "\n" + "C - 20%");

switch (categoria) {
    case "A":
    case "a":
        alert(`O desconto foi de ${valor * 0.10}` + "\n" + `O valor com desconto foi ${valor - (valor * 0.10)}`);
        break
    case "B":
    case "b":
        alert(`O desconto foi de ${valor * 0.15}` + "\n" + `O valor com desconto foi ${valor - (valor * 0.15)}`);
        break
    case "C":
    case "c":
        alert(`O desconto foi de ${valor * 0.20}` + "\n" + `O valor com desconto foi ${valor - (valor * 0.20)}`);
        break
    default:
        alert("Valor inválido!");
}