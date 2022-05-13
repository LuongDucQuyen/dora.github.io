import { title , text } from "./editing/variableCommit.js";
import { blueStart } from "./editing/content.js";
var commitTitle = document.querySelector('.commit_Title')
var commitText = document.querySelector('.commit_detail')
commitTitle.innerHTML = `${blueStart}${title}`
commitText.innerHTML = text