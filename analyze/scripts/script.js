/*
    Student Name:lizeth hernandez
    File Name: script.js
    Date:
*/

/*Function to display the first picture*/
// var figElement = document.getElementByid("placeholder");
// var imgSource= document.getElementByid("image");
// var figCap= document.querySelector("figcaption");

function pic1() {
  var figElement = document.getElementById("placeholder");
  var imgSource= document.getElementById("image");
  var figCap= document.querySelector("figcaption");
    imgSource.src = "images/trunk-bay.jpg";
    imgSource.alt = "Elevated view of Trunk Bay beach on St. John";
    figElement.style.display = "block";
    figCap.textContent = "Trunk Bay in St. John";
}

/*Function to display the secound picture*/
function pic2() {
  var figElement = document.getElementById("placeholder");
  var imgSource= document.getElementById("image");
  var figCap= document.querySelector("figcaption");
    imgSource.src = "images/sanjuan.jpg";
    imgSource.alt = "elevanted view of san juan coast";
    figElement.style.display = "block";
    figCap.textContent = "coast of san juan";
}
/*Function to display the third picture*/
function pic3() {
  var figElement = document.getElementById("placeholder");
  var imgSource= document.getElementById("image");
  var figCap= document.querySelector("figcaption");
    imgSource.src = "images/curacao.jpg";
    imgSource.alt = "the blue waters of curacao";
    figElement.style.display = "block";
    figCap.textContent = "curacao";
}
