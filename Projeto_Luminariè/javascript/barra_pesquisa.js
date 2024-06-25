const filterElement = document.querySelector('header input')
const perfumes = document.querySelectorAll('ul li')

filterElement.addEventListener('input', filterPerfumes)

function filterPerfumes() {
    if (filterElement.value != '') {
        for (let perfume of perfumes) {
            let title = perfume.querySelector('h4')
            title = title.textContent.toLocaleLowerCase()
            let filterText = filterElement.value.toLocaleLowerCase()
            if(!title.includes(filterText)) {
                perfume.style.display = "none"
            } else {
                perfume.style.display = "block"
            }
        }
    } else {
        for (let perfume of perfumes) {
            perfume.style.display = "block"
        }
    }
}