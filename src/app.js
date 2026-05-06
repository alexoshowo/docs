import DOMPurify from 'dompurify';
import {Content} from "./content.js";
const clean = DOMPurify.sanitize(Content)

console.log(clean);
const hero = document.querySelector('#hero');
const renderer = document.querySelector('#app');
renderer.innerHTML = clean;
const sidebar = document.querySelector('#sidebar');
