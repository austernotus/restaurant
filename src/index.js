import home from "./content";
import {menu} from "./menu";
import {about} from "./about";
import "./styles.css";

const contentDiv = document.querySelector("#content")
contentDiv.innerHTML = home;
console.log("alert")

const homeButton = document.querySelector("#home-button");
const menuButton = document.querySelector("#menu-button");
const aboutButton = document.querySelector("#about-button");


function homeScreen(){
    contentDiv.innerHTML = home;
}
function menuScreen(){
    contentDiv.innerHTML = menu;
}
function aboutScreen(){
    contentDiv.innerHTML = about;
}

homeButton.addEventListener("click", homeScreen)
menuButton.addEventListener("click", menuScreen)
aboutButton.addEventListener("click", aboutScreen)

