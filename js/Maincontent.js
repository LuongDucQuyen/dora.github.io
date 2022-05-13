import imgList from "./editing/dataArray.js"
import { title , content1 , content2 , content3 , saleText , blueStart} from "./editing/content.js"
var contenthtml1 = document.querySelector('.contenttext1')
var contenthtml2 = document.querySelector('.contenttext2')
var contentImg = document.querySelector('.content_img')
var contentTitles = document.querySelector('.content_Title')
var contenthtml3 = document.querySelector('.contenttext3')
var saleTitle = document.querySelector('.sale_text')
contenthtml1.innerHTML = content1
contentTitles.innerHTML = title;
contenthtml2.innerHTML = content2;
contentImg.src = imgList[(imgList.length-1)]
saleTitle.innerHTML = saleText

var newarr = content3.map(function(content) {
    return  `<p class="itemsSale">${blueStart} <span>${content}</span></p> <br/>`
  });
contenthtml3.innerHTML= newarr.join().replace(/,/g, '');