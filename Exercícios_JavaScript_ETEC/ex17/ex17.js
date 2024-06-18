/* Implemente um programa de uma máquina de café que ofereça três opções de bebidas: café preto, café com leite e cappuccino. O usuário deve escolher uma opção e o programa deve exibir a bebida escolhida e seu valor.
 */
function selecionarBebida(bebida) {
    let nomeBebida;
    let preco;
  
    switch (bebida) {
      case 'cafe-preto':
        nomeBebida = 'Café Preto';
        preco = 2.5;
        break;
      case 'cafe-leite':
        nomeBebida = 'Café com Leite';
        preco = 3.0;
        break;
      case 'cappuccino':
        nomeBebida = 'Cappuccino';
        preco = 3.5;
        break;
      default:
        nomeBebida = 'Bebida Desconhecida';
        preco = 0;
        break;
    }
    exibirResultado(nomeBebida, preco);
  }
  
  function exibirResultado(nomeBebida, preco) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<p>Você escolheu: ${nomeBebida}</p>
                              <p>Preço: R$ ${preco.toFixed(2)}</p>`;
  }