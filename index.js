const decreasebtn = document.getElementById("decbtn");
const reset = document.getElementById("re");
const increasebtn = document.getElementById("incbtn");

const countlabel = document.getElementById("countlabel");
let count= 0;

increasebtn.onclick = function(){
  count++;
  countlabel.textContent = count;
}

decreasebtn.onclick = function(){
  count--;
  countlabel.textContent = count;
}

reset.onclick = function(){
  count = 0;
  countlabel.textContent = count;
}
