const checkboxes = document.querySelectorAll('.botao_comprar input[type="checkbox"]');
const contadorCarrinho = document.getElementById('contador-carrinho');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        let contador = 0;
        checkboxes.forEach(cb => {
            if (cb.checked) {
                contador++;
            }
        });
        contadorCarrinho.textContent = contador;
    });
});
