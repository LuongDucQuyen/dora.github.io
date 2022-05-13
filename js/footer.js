import { footer } from "./editing/variableFooter.js";
var footerElement = document.querySelector('.footer')
var newFooter = footer.map((items)=>{
    let text=items.text.map((item)=>{
        return `<P><a class="footerLink" href="${items.link}">${item}</a></P>`;
    })
    return `<div class="footerItem"><h3 class="footerTitle">${items.title}</h3>${text}</div>`
})
footerElement.innerHTML= newFooter.join().replace(/,/g, '');