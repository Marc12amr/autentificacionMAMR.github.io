"use strict";
var forma = document.getElementById("forma"),
resultado = document.getElementById("resultado");
forma.addEventListener("submit", procesa, false);
function procesa(){
var res="";
var base = parseInt(forma["base"].value);
for (var i = 1; i <=11; i++) {
res = res + "la potencia a la"+" "+ i +" "+ "es:" + Math.pow(base,i) + "\n";
}
forma["resultado"].value=res;
}
