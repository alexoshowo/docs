import DOMPurify from 'dompurify';
import {examplePage, icon3,icon2} from "./content.js";
const clean = DOMPurify.sanitize(examplePage);

console.log(clean);

const renderer = document.querySelector('#app');
renderer.innerHTML = clean;
const sidebar = document.querySelector('#sidebar');
const HTMLTag= document.documentElement;



const darkModeButton = document.querySelector('#darkmode');
let theme = HTMLTag.getAttribute("data-theme");
if (theme === "dark") {
  darkModeButton.innerHTML =icon2;
}
if(theme === "light") {
  darkModeButton.innerHTML =icon3;
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


