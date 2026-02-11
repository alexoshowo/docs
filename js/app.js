import { Marked } from 'https://cdn.jsdelivr.net/npm/marked@11/lib/marked.esm.js';
const marked = new Marked({
  gfm: true
});
const text = marked.parse(`
# Kavuntech Docs
Welcome
`);

console.log(text);

const renderer = document.getElementById('app');
renderer.innerHTML = text;

