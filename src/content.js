import {Marked} from "marked";

const marked = new Marked({
  gfm: true,
})

export const Content = marked.parse(`

<img class="banner" src="/img/banner.jpg" alt="">

# Zenless Zone Zero 2.8 New Eridan Sunset
## Новий Контент
### Персонажі:
* **Промея** Лід/Аномалія
* **Зірковий Біллі** Фізичний/Розривання
#### Костюми
* **Dignified Blossom** (Хошімі Міябі)
### Банґбу
* **Бултергейст** А
### Новий сюжетний квест
* New: Eridan Sunset (B)
## Банери пошуку сигналу
### Перша Половина
* **Промея** Новий Лід/Аномалія
* **Люсія** Реран Етер/Підтримка

### W-Engine
- Frostfall Sickle
- Dreamlit Hearth

### Друга Половина
* **Зірковий Біллі** Новий Фізичний/Розривання
* **Орфея та Магус** Реран Вогонь/Атака
## Івенти
- All-New Program (10 Івентових Круток)
- "En-Nah" Into Your Lap (10 Банґбу Купонів)
- Operation: Save Bootopia
- "Spirit" Artist's Notebook
- Ultimate Verdict Trial
- A Look Into Ridu's Legends
- Shiyu Defense/Critical Node
- Deadly Assault
- Data Bounty: Combat Simulation
- Advanced Bounty: Area Patrol
- The Final Callback, first half
- The Final Callback, second half
## Інші Події
*  Вінілові платівки саундтреку гри
* Вихід сторінки гри у Steam
## Технічні Зміни
* Посібник з поліхромів
* Функція керування ресурсами гри
* Оптимізація бою в сюжетних завданнях

1. hello <img src="/img/background.png" alt="">
2. hello
3. HELLO
4. Ay, ay, ay i'm your little butterfly let us fly aiaiai ladidadidadi da to the golden sky its the paradise of smile


<h4 class="ip">sbcu.kavuncat.com</h4>
<button class="copy"><?xml version="1.0" encoding="UTF-8"?><svg width="20px" height="20px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ddf0ff"><path d="M19.4 20H9.6C9.26863 20 9 19.7314 9 19.4V9.6C9 9.26863 9.26863 9 9.6 9H19.4C19.7314 9 20 9.26863 20 9.6V19.4C20 19.7314 19.7314 20 19.4 20Z" stroke="#ddf0ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 9V4.6C15 4.26863 14.7314 4 14.4 4H4.6C4.26863 4 4 4.26863 4 4.6V14.4C4 14.7314 4.26863 15 4.6 15H9" stroke="#ddf0ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>

<figure>
<figcaption>GABEN</figcaption>
<img src="/img/banner.jpg" alt="">
<figcaption>my password is gabe.newell@valvesoftware.com</figcaption>
</figure>


<div class="downloads">
<a href="#">Завантажити .mrpack</a>
<a href="#">Завантажити .mrpack</a>
<a href="#">Завантажити .mrpack</a>
</div>
`);

export const icon2 =`<svg xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" color="#FFFFFF"><path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 12L23 12" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 2V1" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 23V22" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 20L19 19" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 4L19 5" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 20L5 19" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 4L5 5" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M1 12L2 12" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

export const icon3 = `<?xml version="1.0" encoding="UTF-8"?><svg width="48px" height="48px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF"><path d="M3 11.5066C3 16.7497 7.25034 21 12.4934 21C16.2209 21 19.4466 18.8518 21 15.7259C12.4934 15.7259 8.27411 11.5066 8.27411 3C5.14821 4.55344 3 7.77915 3 11.5066Z" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`

export const heroPage = marked.parse(
  `# Kavuntech Docs
`);

function generateSidebar(){
  return `
  <div class="button-row">
        <button id='darkmode'></button>
  </div>
    `
}
sidebar.innerHTML = generateSidebar();
