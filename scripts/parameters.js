var level = 1;
var resistance = 2;
var hitPoint = 1000;
var dist = 0;

window.onload = function () {
  var out = document.getElementById("lvl");
  out.innerHTML = level;
  out = document.getElementById("resistance");
  out.innerHTML = resistance;
  out = document.getElementById("HP");
  out.innerHTML = hitPoint;
  out = document.getElementById("dist");
  out.innerHTML = parseFloat(dist).toFixed(1) + "km";
}

function levelUp(){
  level++;
  var out = document.getElementById("lvl");
  out.innerHTML = level;
  resistance += 2;
  out = document.getElementById("resistance");
  out.innerHTML = resistance;
}

function HPchange(num){
  if(num == 1)  hitPoint++;
  else if(num == 2)  hitPoint -= resistance;
  if(hitPoint > 1000)  hitPoint = 1000;
  var out = document.getElementById("HP");
  out.innerHTML = hitPoint;
}
