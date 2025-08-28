const generatebtn = document.getElementById("genbtn");
const reset = document.getElementById("re");

const countlabel = document.getElementById("countlabel");
let count= 0;

generatebtn.onclick = function(){
  count = Math.floor(Math.random() * 100);
  countlabel.textContent = count;
}

reset.onclick = function(){
  count = 0;
  countlabel.textContent = count;
}
