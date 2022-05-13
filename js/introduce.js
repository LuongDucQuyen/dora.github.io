import { introduceText, introduceTitle } from "./editing/variableIntroduce.js";
import { blueStart } from "./editing/content.js";
var title = document.querySelector('.introduce_Title')
var text = document.querySelector('.introduce_detail')
title.innerHTML = `${blueStart}${introduceTitle}`
text.innerHTML = introduceText