import { Marked } from 'https://cdn.jsdelivr.net/npm/marked@11/lib/marked.esm.js';
const marked = new Marked({
  gfm: true
});


export const Content = marked.parse(`
# Kavuntech Docs
## Kavuntech Docs
### Kavuntech Docs
#### Kavuntech Docs
##### Kavuntech Docs
<div class="downloads">
                <a class="download-link" href="https://github.com/alexoshowo/kavuntechdocs/releases/download/2.0.1/Kavuntech-2.0.1.mrpack">Завантажити .mrpack</a>
                <a class="download-link" href="https://github.com/alexoshowo/kavuntechdocs/releases/download/2.0.1/Kavuntech.2.0.1.zip">Завантажити .zip</a>
                <a class="download-link" href="https://github.com/alexoshowo/kavuntechdocs/releases/download/2.0.1/Kavuntech.2.0.1curseforge.zip">Завантажити для Curseforge</a>
            </div>

1.  <a href="http://github.com/alexoshowo">here</a>
`);
