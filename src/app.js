import DOMPurify from 'dompurify';
import {Content} from "./content.js";
const clean = DOMPurify.sanitize(Content)

console.log(clean);

const hero = document.querySelector('#hero');
const renderer = document.querySelector('#app');
renderer.innerHTML = clean;
const sidebar = document.querySelector('#sidebar');
const HTMLTag= document.documentElement;

const icon2 =`<svg xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" color="#000000"><path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 12L23 12" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 2V1" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 23V22" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 20L19 19" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 4L19 5" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 20L5 19" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 4L5 5" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M1 12L2 12" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const icon3 = `<?xml version="1.0" encoding="UTF-8"?><svg width="48px" height="48px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M3 11.5066C3 16.7497 7.25034 21 12.4934 21C16.2209 21 19.4466 18.8518 21 15.7259C12.4934 15.7259 8.27411 11.5066 8.27411 3C5.14821 4.55344 3 7.77915 3 11.5066Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`

const darkModeButton = document.querySelector('#darkmode');
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

