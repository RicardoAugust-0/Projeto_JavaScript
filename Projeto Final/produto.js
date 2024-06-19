
        document.addEventListener("DOMContentLoaded", () => {
            const urlParams = new URLSearchParams(window.location.search);
            const productId = urlParams.get('id');

            const products = [
                { id: 1, name: "Cadeira Gamer", description: "CADEIRA GAMER TGT HERON TC, PRETO E CINZA, TGT-HRTC-BL02 ENCOSTO RECLINAVEL APOIOS DE BRAÇO FIXO.", price: "R$482,64", image: "imagens/sem-fundo-500/cadeira-gamer.png",desk:"A TGT Heron TC é um produto ideal se você está procurando uma cadeira gamer com ótima qualidade e custo benefício. Seu assento utiliza espuma moldada, e além disso, ela utiliza um pistão de alta durabilidade, tudo para que você se sinta confortável independente se vai passar horas jogando ou trabalhando. Não importa quão longa é a sua jornada ou quão difícil é seu caminho, a Heron TC vai te acompanhar." },
                { id: 2, name: "SSD", description: "SSD ADATA LEGEND 700, 512GB, M.2 2280, PCIE NVME, LEITURA 2000 MB/S, GRAVACAO 1600 MB/S, ALEG-700-512GCS", price: "R$229,00", image: "imagens/sem-fundo-500/ssd-adata.png", desk:"O SSD Adata Legend 700 Core é uma unidade de armazenamento de alto desempenho, projetada para oferecer velocidade e eficiência para gamers, criadores de conteúdo e profissionais de tecnologia. Com capacidade de 512GB, formato M.2 2280 e tecnologia PCIe NVMe, este SSD proporciona tempos de carregamento rápidos e alta eficiência em transferências de dados." },
                { id: 3, name: "Placa de Video", description: "PLACA DE VIDEO GIGABYTE RADEON RX 6600 EAGLE, 8GB, GDDR6, 128-BIT, SISTEMA DE REFRIGERAÇÃO WINDFORCE 3X.", price: "R$1.378,99", image: "imagens/sem-fundo-500/Placa-de-video.png",desk:"Powered by AMD RDNA ™ 2 Radeon ™ RX 6600              Integrado com interface de memória de 8GB GDDR6 de 128 bits Sistema de resfriamento WINDFORCE 3X com ventiladores giratórios alternativos Resfriamento da tela Nano lubrificante de grafeno Placa traseira de proteção" },
                { id: 4, name: "Fonte", description: "FONTE GALAX OMEGA GLX1200, 1200W, ATX 3.0, PCIE 5.0, FULL-MODULAR, 80 PLUS PLATINUM, PGO1BGPFNAFB0.", price: "R$1.399,99", image: "imagens/sem-fundo-500/Galax-Omega.png", desk:"A Fonte Galax Omega GLX1200 é uma fonte de alimentação de alta performance e projetada para atender as demandas dos sistemas mais exigentes." }

            ];

            const product = products.find(p => p.id == productId);

            if (product) {
                
                let banner = document.createElement('div'); 
                banner.innerHTML = `<img src="${product.image}" alt="${product.name}">`
                document.getElementById("product-details").appendChild(banner);

                let descricao = document.createElement('div'); 
                descricao.innerHTML = `
                <h2>${product.name}</h2>
                <p>${product.desk}</p>`
                document.getElementById("product-details").appendChild(descricao);
                descricao.className="descricao"
                
            } else {
                document.getElementById("product-details").innerHTML = `
                    <p>Produto não encontrado.</p>
                `;
            }
        });
 