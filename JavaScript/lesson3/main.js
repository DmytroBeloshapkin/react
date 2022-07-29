// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x = +prompt('Веддіть число (1, 0, -3)')
//
// if (x === 0) {
//     console.log(x)
//     console.log('Невірно')
//     document.write(`<div class="red"><h4>Ви ввели ${x}</h4> <span class="text">Невірно</span></div>`)
// } else if (x === 1 || x === -3) {
//     console.log(x)
//     console.log('Вірно')
//     document.write(`<div class="green"><h4>Ви ввели ${x}</h4> <span class="text1">Вірно</span></div>`)
// } else {
//     console.log(x)
//     console.log('Помилка вводу')
//     document.write(`<div class="blue"><h4>Ви ввели ${x}</h4> <span class="text2">Помилка вводу</span></div>`)
// }

// - Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = +prompt('Веддіть число від 0 до 59 щоб визначити до якої чверті години воно входить')
// if (time <= 15) {
//     console.log(time);
//     console.log('перша чверь');
//     document.write(`<div class="red"><h4>Ви ввели ${time}</h4> <span class="text">перша чверь</span></div>`)
// } else if (time >= 16 && time <= 30) {
//     console.log(time);
//     console.log('друга чверь');
//     document.write(`<div class="green"><h4>Ви ввели ${time}</h4> <span class="text1">друга чверь</span></div>`)
// } else if (time >= 31 && time <= 45) {
//     console.log(time);
//     console.log('третя чверь');
//     document.write(`<div class="blue"><h4>Ви ввели ${time}</h4> <span class="text2">третя чверь</span></div>`)
// } else if (time >= 46 && time <= 59) {
//     console.log(time);
//     console.log('четверта чверь');
//     document.write(`<div class="orange"><h4>Ви ввели ${time}</h4> <span class="text2">четверта чверь</span></div>`)
// } else {
//     console.log(time);
//     console.log('помилка вводу');
// }


// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = +prompt('введіть число від 1 до 31')
//
// if (day <=10){
//     console.log(day);
//     console.log('перша декада')
//     document.write(`<div class="red"><h4>Ви ввели ${day}</h4> <span class="text">перша декада</span></div>`)
// } else if (day >=11 && day <20){
//     console.log(day);
//     console.log('друга декада');
//     document.write(`<div class="green"><h4>Ви ввели ${day}</h4> <span class="text">друга декада</span></div>`)
// } else if (day >=20 && day <=31){
//     console.log(day);
//     console.log('тертя декада');
//     document.write(`<div class="blue"><h4>Ви ввели ${day}</h4> <span class="text2">третя декада</span></div>`)
// } else if (day >31){
//     console.log(day);
//     console.log('не буває такого числа');
//     document.write(`<div class="orange"><h4>Ви ввели ${day}</h4> <span class="text">не буває такого числа</span></div>`)
// } else {
//     console.log(day);
//     console.log('помилка вооду');
//     document.write(`<div class="orange"><span class="text">помилка ввооду</span></div>`)
// }


// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).

// let day = prompt('який день Вас цікавить (англійською мовою)');
// day = day.toLowerCase()
//
// switch (day) {
//     case 'monday':
//         console.log(day);
//         day = 'понеділок';
//         console.log('додаткове заняття');
//         document.write(`<div class="day">В ${day} ми маємо додаткове заняття</div>`);
//         break;
//
//     case 'tuesday':
//         console.log(day);
//         day = 'вівторок';
//         console.log('лекція з JS');
//         document.write(`<div class="day">В ${day} в нас лекція з JS</div>`);
//         break;
//
//     case 'wednesday':
//         console.log(day);
//         day = 'середу';
//         console.log('вирішення домашнього завдання з JS');
//         document.write(`<div class="day">В ${day} в нас вирішення домашнього завдання з JS</div>`);
//         break;
//
//     case 'thursday':
//         console.log(day);
//         day = 'четвер';
//         console.log('лекція з JS');
//         document.write(`<div class="day">В ${day} в нас лекція з JS</div>`);
//         break;
//
//     case 'friday':
//         console.log(day);
//         day = 'п’ятницю';
//         console.log('додаткове заняття з JS');
//         document.write(`<div class="day">В ${day} в нас додаткове заняття з JS</div>`);
//         break;
//
//     case 'saturday':
//         console.log(day);
//         day = 'суботу';
//         console.log('заняття з англійської мови');
//         document.write(`<div class="day">В ${day} в нас урок з Англійської мови</div>`);
//         break;
//
//     case 'sunday':
//         console.log(day);
//         day = 'неділю';
//         console.log('вихідний день, п’ємо пиво');
//         document.write(`<div class="day">В ${day} в нас вихідний день, відпочиваємо і п’ємо пиво</div>`);
//         break;
//
//     default:
//         console.log(day);
//         document.write(`<div class="day">Помилка введення, ви написали <h2>${day}</h2> спробуйте написати день тиждня англійською мовою</div>`);
//         console.log('помилка введення');
//         break;
// }


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// let a = +prompt('введіть перше число');
// let b = +prompt('введіть друге число');
//
// if (a > b){
//     console.log(a)
//     console.log(b)
//     console.log(`Найбільше число із введени ${a}`)
//     document.write(`<div class="day">Найбільше число із введени ${a}</div>`)
//
// } else if (a < b){
//     console.log(a)
//     console.log(b)
//     console.log(`Найбільше число із введени ${b}`)
//     document.write(`<div class="day">Найбільше число із введени ${b}</div>`)
//
// } else if (a === b){
//     console.log(a)
//     console.log(b)
//     console.log(`Числа рівні ${a} = ${b}`)
//     document.write(`<div class="day">Числа рівні ${a} = ${b}</div>`)
//
// } else {
//     console.log(a)
//     console.log(b)
//     console.log(`Помилка введення ${a} і ${b}`)
//     document.write(`<div class="day">Помилка введення ${a} і ${b}</div>`)
// }

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"
//         якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
let x = prompt(`введіть будь що`);


