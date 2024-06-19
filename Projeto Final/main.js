document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 1, name: "Cadeira Gamer", description: "CADEIRA GAMER TGT HERON TC, PRETO E CINZA, TGT-HRTC-BL02 ENCOSTO RECLINAVEL APOIOS DE BRAÇO FIXO.", price: "R$482,64", image: "imagens/sem fundo/cadeira-gamer-1.png" },
        { id: 2, name: "SSD", description: "SSD ADATA LEGEND 700, 512GB, M.2 2280, PCIE NVME, LEITURA 2000 MB/S, GRAVACAO 1600 MB/S, ALEG-700-512GCS", price: "R$229,00", image: "imagens/sem fundo/SSD-Adata-512GB-1.png" },
        { id: 3, name: "Placa de Video", description: "PLACA DE VIDEO GIGABYTE RADEON RX 6600 EAGLE, 8GB, GDDR6, 128-BIT, SISTEMA DE REFRIGERAÇÃO WINDFORCE 3X.", price: "R$1.378,99", image: "imagens/sem fundo/placa-video-1.png" },
        { id: 4, name: "Fonte", description: "FONTE GALAX OMEGA GLX1200, 1200W, ATX 3.0, PCIE 5.0, FULL-MODULAR, 80 PLUS PLATINUM, PGO1BGPFNAFB0.", price: "R$1.399,99", image: "imagens/sem fundo/fonte-galax-1.png" }
    ];

    const productContainer = document.getElementById("product-list");
    const searchInput = document.getElementById("barra-pesquisa");
    const noResults = document.getElementById("no-results");
    const cartCount = document.getElementById("cart-count");
    let selectedCount = 0;

    function renderProducts(filter = "") {
        productContainer.innerHTML = "";
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(filter.toLowerCase())
        );

        if (filteredProducts.length === 0) {
            noResults.style.display = "block";
        } else {
            noResults.style.display = "none";
            filteredProducts.map(product => {
                const productItem = document.createElement("div");
                productItem.className = "product-item";
                productItem.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" class="imagens1">
                    <h2 class="titulo-produto">${product.name}</h2>
                    <p class="descricao-produto">${product.description}</p>
                    <div class="preco-produto">
                        <p class="preco">${product.price}</p>
                        <input type="checkbox" data-id="${product.id}">
                    </div>
                `;
                productItem.querySelector("input").addEventListener("change", (event) => {
                    if (event.target.checked) {
                        selectedCount++;
                    } else {
                        selectedCount--;
                    }
                    cartCount.textContent = selectedCount;
                });
                productItem.addEventListener("click", (event) => {
                    if (event.target.tagName !== "INPUT") {
                        window.location.href = `produto.html?id=${product.id}`;
                    }
                });
                productContainer.appendChild(productItem);
            });
        }
    }

    searchInput.addEventListener("input", () => {
        renderProducts(searchInput.value);
    });

    renderProducts();
});