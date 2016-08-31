var level = 1;
var resistance = 2;
var hitPoint = 1000;
var dist = 0;

window.addEventListener('load', function () {
  var out = document.getElementById("lvl");
  out.innerHTML = level;
  out = document.getElementById("dist");
  out.innerHTML = parseFloat(dist).toFixed(1) + "km";
});

function levelUp(){
  level++;
  var out = document.getElementById("lvl");
  out.innerHTML = level;
  resistance += 2;
}

function HPchange(num){
  if(num == 1)  hitPoint++;
  else if(num == 2)  hitPoint -= resistance;
  if(hitPoint > 1000)  hitPoint = 1000;
}
