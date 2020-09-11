var _ = require('lodash');
var h3=document.querySelector("h3"); //querySelector returns only first found 
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var bodyColor=document.getElementById("bodyColor");
var btn1=document.getElementById("btn1");

const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
  const hex = x.toString(16)
  return hex.length === 1 ? '0' + hex : hex
}).join('')


bodyColor.onload=function () {
	 // alert(window.getComputedStyle(bodyColor).getPropertyValue("background-image"));
	 var linearGradient=window.getComputedStyle(bodyColor).getPropertyValue("background-image")+";";
	 h3.innerHTML=linearGradient;

	 var v1=linearGradient.indexOf("rgb(")+4;
	 var v2=linearGradient.indexOf(")", v1);
	 var v3=linearGradient.substring(v1, v2).split(",",3);//from "255,0,0" to ["255","0","0"]
	 
	 var v4=rgbToHex(Number(v3[0]),Number(v3[1]),Number(v3[2]));//rgb to hex for input type color

 	 var v1a=linearGradient.lastIndexOf("rgb(")+4;
	 var v2a=linearGradient.indexOf(")", v1a);
	 var v3a=linearGradient.substring(v1a, v2a).split(",",3);

	 var v4a=rgbToHex(Number(v3a[0]),Number(v3a[1]),Number(v3a[2]));

	  color1.value=v4;
	  color2.value=v4a;

}



function pickColor () {
	 bodyColor.style.background =  "linear-gradient(to right,"+color1.value+","+color2.value+")";
	 h3.innerHTML=bodyColor.style.background+";";
}

function randomHex () {
	return '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'); 
}

color1.addEventListener("input", pickColor);

color2.addEventListener("input",pickColor);

btn1.addEventListener("click",function () {
	var v1=randomHex();
	var v2=randomHex();

	color1.value=v1;
	color2.value=v2;

	pickColor();
})