const decreasebtn = Document.getElementById("decbtn");
const reset = Document.getElementById("re");
const increasebtn = Document.getElementById("incbtn");

const countlabel = Document.getElementById("countlabel");
let count= 0;

increasebtn.onclick = function(){
  count++;
  countlabel.textContent = count;
}
