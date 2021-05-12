var SUELO = 0;
var VELOCIDAD = 2;

var pg = document.createElement('div');
pg.className = "pg";
pg.style.bottom = SUELO;
pg.style.left =  300 + "px";
document.getElementById("map").appendChild(pg);