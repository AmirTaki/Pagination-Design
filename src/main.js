const element = document.querySelector('.pagination ul')

let totalPages = 20;
let page = 10;

element.innerHTML = createPagination (totalPages, page);