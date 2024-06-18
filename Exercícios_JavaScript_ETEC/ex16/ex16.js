/* Elabore um programa que solicite ao usuário o valor de um produto e sua categoria (A, B ou C). Com base na categoria informada, aplique descontos de 10%, 15% e 20%, respectivamente, sobre o valor do produto e exiba o valor final após o desconto.
 */

function verificarCategoria() {
    var valor = document.querySelector('#valor').value;
    var resultadoDiv = document.querySelector('#resultado');
    var comprar = prompt("Coloque a categoria! :" + "\n" + "A - 10%" + "\n" + "B - 15%" + "\n" + "C - 20%");
        
    switch (comprar) {
        case "A":
            resultadoDiv.innerHTML = `O desconto foi de R$${(valor * 0.10).toFixed(2)}<br>O valor com desconto foi R$${valor - (valor * 0.10).toFixed(2)}`;
            resultadoDiv.style.display = "flex";
            break
        case "B":
            resultadoDiv.innerHTML = `O desconto foi de R$${(valor * 0.15).toFixed(2)}<br>O valor com desconto foi R$${valor - (valor * 0.15).toFixed(2)}`;
            resultadoDiv.style.display = "flex";
            break
        case "C":
            resultadoDiv.innerHTML = `O desconto foi de R$${(valor * 0.20).toFixed(2)}<br>O valor com desconto foi R$${valor - (valor * 0.20).toFixed(2)}`;
            resultadoDiv.style.display = "flex";
            break
        default:
            resultadoDiv.innerHTML = "Valor inválido!";
            resultadoDiv.style.display = "flex";
}
}