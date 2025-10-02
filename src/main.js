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

    if(page > 2) {
        liTag += `<li class = "first numb"
            onclick = "createPagination(totalPages,1 )">
            <span>1</span>
         </li>`
        
        if(page > 3){
            liTag += `<li class = "dots"><span>...</span></li>`
        }
    }

    if(page == totalPages){
        beforePage = beforePage - 2;
    }
    else if (page == totalPages - 1){
        beforePage = beforePage - 1
    } 
    

    if(page == 1){
        afterPag = afterPag + 2;
    }
    else if (page == 2){
        afterPag = afterPag + 1;
    }

    for (var plength = beforePage; plength <= afterPag ; plength ++){
        if (plength > totalPages){
            continue;
        }
        if(plength == 0){
            active = 'active'
        }
        else {
            active = ''
        }
        li +=  `<li class = 'numb ${active}'
            onclick = 'createPagination(totalPages, ${plength})'
        >
            <span>${plength}</span>
        </li>`
    }
    if(page < totalPages - 1){
        if(page < totalPages - 2){
            liTag += `<li class = 'dots'><span>...</span></li>`
        }
        liTag += `<li class = 'last numb' onclick = 'createPagination(totalPages, ${totalPages})'>
            <span>${totalPages} </span>
        </li>`
    }

    if (page < totalPages) {
        liTag += `<li class = 'btn next' onclick = 'createPagination(totalPages,${page + 1})'></li>`
    }

  
}

element.innerHTML = createPagination (totalPages, page);

 