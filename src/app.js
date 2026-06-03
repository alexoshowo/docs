import DOMPurify from 'dompurify';
import {Content, icon2, icon3} from "./content.js";
const clean = DOMPurify.sanitize(Content)

console.log(clean);

const hero = document.querySelector('#hero');
const renderer = document.querySelector('#app');
renderer.innerHTML = clean;
const sidebar = document.querySelector('#sidebar');
const HTMLTag= document.documentElement;


const darkModeButton = document.querySelector('#darkmode');
darkModeButton.innerHTML = icon3;
let theme = HTMLTag.getAttribute("data-theme");
if (theme === "dark") {
  darkModeButton.innerHTML =icon2;
}
if(theme === "light") {
  darkModeButton.innerHTML = icon3;
}
darkModeButton.addEventListener('click',  () => {
  let theme = HTMLTag.getAttribute("data-theme");
  if (theme === "dark") {
    HTMLTag.setAttribute("data-theme", "light");
    darkModeButton.innerHTML =icon3;
  }
  if(theme === "light") {
    HTMLTag.setAttribute("data-theme", "dark");
    darkModeButton.innerHTML =icon2;
  }
})
