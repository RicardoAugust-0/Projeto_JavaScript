//"Pare a execução do programa quando o usuário requisitar" se aplica em Estruturas de Repetição.

try {
  var valor = prompt("coloque um número positivo ou negativo");

  if (valor < 0) {
    confirm(`O valor é Negativo! Valor: ${valor}`);
  } else if (valor > 0) {
    confirm(`O valor é Positivo! Valor: ${valor}`);
  }
} catch (error) {
  console.log("tá com erro");
}
