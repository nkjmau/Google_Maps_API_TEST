var level = 1;
var resistance = 2;
var hitPoint = 10000;

function levelUp(){
  level++;
  var out = document.getElementById("level");
  out.innerHTML = level;
  resistance += 2;
  out = document.getElementById("resistance");
  out.innerHTML = resistance;
}

function HPchange(num){
  if(num == 1)  hitPoint++;
  else if(num == 2)  hitPoint -= resistance;
  if(hitPoint > 10000)  hitPoint = 10000;
  var out = document.getElementById("HP");
  out.innerHTML = hitPoint;
}
