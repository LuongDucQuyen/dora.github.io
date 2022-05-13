import { title , text } from "./editing/variableprocedure.js";
import { blueStart } from "./editing/content.js";
var procedureTitle = document.querySelector('.procedure_Title');
var procedureDetails = document.querySelector('.procedure_details')
procedureTitle.innerHTML =`${blueStart} ${title}`;
var details = text.map((detail)=>{
    let detaiImg =detail.img.map((img)=>{
        return `<img class="detailImg" src="./img/drawImg/${img}"/>`
    })
    return `<h3 class="detailTitle">${detail.workingPeriod}</h3><p class="detailText">${detail.details}</p>${detaiImg}`
})
procedureDetails.innerHTML = details.join().replace(/,/g, '');