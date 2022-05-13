import imgList from "./editing/dataArray.js"
var headerImg = document.querySelector('.slider-img')
var imgbg = headerImg.getElementsByTagName('img')
var itemList1 = document.querySelectorAll('.item_list1')
window.onload = function() {
    let i = imgList.length
    let j = 1
    setInterval(()=>{
        imgbg[0].style.transform = 'scalex(0)'
    },3000)
    setTimeout(()=>{
        setInterval(()=>{
            if(j === (i-1)){
                imgbg[0].src = imgList[j]
                imgbg[0].style.transform = 'scalex(1)'
                j = 0
            }
            if (j < i){
                imgbg[0].src = imgList[j]
                j++
                imgbg[0].style.transform = 'scalex(1)'
            }
        },3000)
    },1000)
}
for (let i = 0; i < itemList1.length; i++){
    if(i>0){
        itemList1[i].onmousemove = (e)=>{
            itemList1[i].querySelector('.menu_list3').style.display = 'block'
        }
        itemList1[i].onmouseout =(e)=>{
            itemList1[i].querySelector('.menu_list3').style.display = 'none'
        }
    }
}