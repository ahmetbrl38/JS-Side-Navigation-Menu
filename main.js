var menuDurum = 0;

function menuAcKapat(){

var menuObj = document.getElementById("menu");
var ustbarObj = document.getElementById("tasiyici");
var icerikObj = document.getElementById("tasiyici-icerik");

if(menuDurum == 0){

menuObj.style.left = "0px";
ustbarObj.style.left = "200px";
ustbarObj.style.opacity = "0.5";
icerikObj.style.left = "200px";
icerikObj.style.opacity = "0.5";
menuDurum = 1;

}

else{

menuObj.style.left = "-200px";
ustbarObj.style.left = "0px";
ustbarObj.style.opacity = "1";
icerikObj.style.left = "0px";
icerikObj.style.opacity = "1";
menuDurum = 0;

}

}