// drop paralax
// var oilDrop = document.getElementsByClassName("oilDrop")[0];
// function mobVidCall(){
// 	if (parseInt(window.getComputedStyle(oilDrop).bottom) > -(window.innerWidth/100 *36) ) {
//     oilDrop.style.bottom = parseInt(window.getComputedStyle(oilDrop).bottom) - window.scrollY/130 + 'px';
//   }
// }
//


// baner bottles animation
// baner bottles animation
// baner bottles animation
var oilBottles = document.getElementsByClassName("oilBottles")[0];
var bottleShadow = document.getElementsByClassName("bottleShadow")[0];
function oilBotFun(){
  oilBottles.style.left = '8.2vw'
  bottleShadow.style.left = '8.2vw'
  oilBottles.style.opacity = '0.5';
  bottleShadow.style.opacity = '0.5';
  setTimeout(function () {
    oilBottles.style.opacity = '1';
    bottleShadow.style.opacity = '1';
  }, 1500);
}

window.onload = function(){
  oilBotFun();
}
// window.onscroll = function(){
//   mobVidCall();
// }
