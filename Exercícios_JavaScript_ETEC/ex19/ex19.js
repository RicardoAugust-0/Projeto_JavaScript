/* Escreva um programa que leia:
    - a quantidade de números que deverá processar;
    - os números que deverá processar, e calcule e exiba, para cada número a ser processado o seu fatorial.
    Lembrete: o fatorial de um número N é dado pela fórmula: N! = 1 * 2 * 3 * 4 * 5 * ... * N
*/
function calcularFatoriais() {
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = ''; // Limpa resultados anteriores
  
    if (quantidade <= 0) {
      resultadosDiv.innerHTML = '<p>Por favor, insira um número válido maior que zero.</p>';
      return;
    }
  
    for (let i = 1; i <= quantidade; i++) {
      const fatorial = calcularFatorial(i);
      const resultadoParaExibir = `<p>${i}! = ${fatorial}</p>`;
      resultadosDiv.innerHTML += resultadoParaExibir;
    }
  }
  
  function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      let resultado = 1;
      for (let i = 2; i <= numero; i++) {
        resultado *= i;
      }
      return resultado;
    }
  }
  