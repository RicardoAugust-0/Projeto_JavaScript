// script.js
const products = [
    { id: 1, name: 'MORAEA TORTILIS' },
    { id: 2, name: 'SEDUM PACHYPHYLLUM' },
    { id: 3, name: 'SEDUM BURRITU' },
    { id: 4, name: 'ECHEVERIA SIMPLES' },
    { id: 5, name: 'ECHEVERIA BARON BOLD' },
    { id: 6, name: 'MAMMILLARIA BACKE' }
];

function search() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const searchResults = products.filter(product => {
        return product.name.toLowerCase().includes(searchTerm);
    });

    displayResults(searchResults);
}

function displayResults(results) {
    const searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = '';

    if (results.length === 0) {
        searchResultsContainer.innerHTML = '<p>Nenhum resultado encontrado.</p>';
    } else {
        results.forEach(result => {
            const resultElement = document.createElement('div');
            resultElement.innerHTML = `<h3>${result.name}</h3>`;
            searchResultsContainer.appendChild(resultElement);
        });
    }
}
