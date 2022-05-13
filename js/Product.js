import { productList } from "./editing/Productlist.js";
var productSHow = document.querySelector('.productList')
var newList = productList.map((items)=>{
    return `<div class="product"><img src="${items.img}"><a href="${items.link}"><p class="productTitle">${items.title}</p></a></div>`;
})
productSHow.innerHTML = newList.join().replace(/,/g, '');