const element = document.querySelector('.pagination ul')

let totalPages = 20;
let page = 10;


const  createPagination = (totalPages, page) => {
    let liTag = '';
    let active;
    let beforePage = page - 1;
    let afterPag = page + 1;
    
}

element.innerHTML = createPagination (totalPages, page);

 