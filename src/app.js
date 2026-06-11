import DOMPurify from 'dompurify';
import {examplePage, icon2, icon3, oldPage} from "./content.js";

console.log(oldPage);
console.log(examplePage);

const renderer = document.querySelector('#app');
renderer.innerHTML = DOMPurify.sanitize(oldPage);
const header = document.querySelector('header');
const title = document.querySelector('title');
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

function heading() {
  const heading = document.querySelector('h1');
  const headingInsideHeader = header.querySelector('h5');

  headingInsideHeader.innerHTML = heading.innerText;
  title.innerHTML = heading.innerText;

}
heading();
