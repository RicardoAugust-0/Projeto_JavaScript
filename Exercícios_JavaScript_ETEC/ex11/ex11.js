//"Pare a execução do programa quando o usuário requisitar" se aplica em Estruturas de Repetição.

var valor = prompt("coloque um número positivo ou negativo");

if (valor < 0) {
    confirm(`O valor é Negativo! Valor: ${valor}`)
} else {
    confirm(`O valor é Positivo! Valor: ${valor}`)
}