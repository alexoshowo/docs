import {Marked} from "marked";
const marked = new Marked({
  gfm: true,
})

export const Content= marked.parse(`# Kavuntech Docs
## Kavuntech Docs
### Kavuntech Docs
#### Kavuntech Docs
##### Kavuntech Docs
<div class="downloads">
                <a class="download-link" href="https://github.com/alexoshowo/kavuntechdocs/releases/download/3.0.1/Kavuntech-2.0.1.mrpack">Завантажити .mrpack</a>
                <a class="download-link" href="https://github.com/alexoshowo/kavuntechdocs/releases/download/2.0.1/Kavuntech.2.0.1.zip">Завантажити .zip</a>
                <a class="download-link" href="https://github.com/alexoshowo/kavuntechdocs/releases/download/2.0.1/Kavuntech.2.0.1curseforge.zip">Завантажити для Curseforge</a>
            </div>

Ми познайомились з тобою у вагоні метро </br>
Людей напхалося конкретно, як сільодки у відро</br>
Мене до тебе притиснули, відвернутись я не міг</br>
І ми у позі еротичній були загнані в тупік</br>
Інтелігентний мужчина, український інженер</br>
Я від викиду гормонів три зупинки чуть не вмер</br>
Зашипіли двері, станція "Хрещатик"</br>
І народ почав з вагона, як картопля, випадати</br>

* Hello
* Hello
1.  github.com/alexoshowo </br> <a class="button" href="http://github.com/alexoshowo">here</a>

2. <h2>hello</h2>

3. hello

4. hello
`);

export const heroPage = marked.parse(
  `# Kavuntech Docs
`);
