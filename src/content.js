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

export const heroPage = marked.parse(
  `# Kavuntech Docs
`);

function generateSidebar(){
  return `
  <div class="button-row">
        <button id='darkmode'>

        </button>
  </div>
    `
}
sidebar.innerHTML = generateSidebar();
