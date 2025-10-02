const element = document.querySelector('.pagination ul')

let totalPages = 20;
let page = 10;


const  createPagination = (totalPages, page) => {
    let liTag = '';
    let active;
    let beforePage = page - 1;
    let afterPag = page + 1;
    if (page > 1){
        liTag += `<li class = 'btn prev' onclick = "createPagination(totalPages, ${page - 1})">
        <span><i class = 'fas fa-angle-left'></i>prev</span> </li>` 
    }
}

element.innerHTML = createPagination (totalPages, page);

 