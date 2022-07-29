// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = +prompt('Завдання №1 Веддіть число (1, 0, -3)')

if (x === 0) {
    console.log(x)
    console.log('Невірно')
    document.write(`<div class="red"><h4>Ви ввели ${x}</h4> <span class="text">Невірно</span></div>`)
} else if (x === 1 || x === -3) {
    console.log(x)
    console.log('Вірно')
    document.write(`<div class="green"><h4>Ви ввели ${x}</h4> <span class="text1">Вірно</span></div>`)
} else {
    console.log(x)
    console.log('помилка введення')
    document.write(`<div class="blue"><h4>Ви ввели ${x}</h4> <span class="text2">Помилка вводу</span></div>`)
}
//*******************

// let x = 0;
// if (x !== 0){
//     console.log('Вірно')
// } else {
//     console.log('Невірно')
// }

//*******************


// - Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = +prompt('Завдання №2 Веддіть число від 0 до 59 щоб визначити до якої чверті години воно входить')
// let time = Math.floor(Math.random() * 60);
if (time <= 15) {
    console.log(time);
    console.log('перша чверь');
    document.write(`<div class="red"><h4>Ви ввели ${time}</h4> <span class="text">перша чверь</span></div>`)
} else if (time >= 16 && time <= 30) {
    console.log(time);
    console.log('друга чверь');
    document.write(`<div class="green"><h4>Ви ввели ${time}</h4> <span class="text1">друга чверь</span></div>`)
} else if (time >= 31 && time <= 45) {
    console.log(time);
    console.log('третя чверь');
    document.write(`<div class="blue"><h4>Ви ввели ${time}</h4> <span class="text2">третя чверь</span></div>`)
} else if (time >= 46 && time <= 59) {
    console.log(time);
    console.log('четверта чверь');
    document.write(`<div class="orange"><h4>Ви ввели ${time}</h4> <span class="text2">четверта чверь</span></div>`)
} else {
    console.log(time);
    console.log('помилка введення');
}


// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = +prompt('Завдання №3 Введіть число від 1 до 31')
// let day = Math.floor(Math.random() * 31)

if (day >= 1 && day <= 10) {
    console.log(day);
    console.log('перша декада')
    document.write(`<div class="red"><h4>Ви ввели ${day}</h4> <span class="text">перша декада</span></div>`)
} else if (day >= 11 && day < 20) {
    console.log(day);
    console.log('друга декада');
    document.write(`<div class="green"><h4>Ви ввели ${day}</h4> <span class="text">друга декада</span></div>`)
} else if (day >= 20 && day <= 31) {
    console.log(day);
    console.log('тертя декада');
    document.write(`<div class="blue"><h4>Ви ввели ${day}</h4> <span class="text2">третя декада</span></div>`)
} else if (day > 31) {
    console.log(day);
    console.log('не буває такого числа');
    document.write(`<div class="orange"><h4>Ви ввели ${day}</h4> <span class="text">не буває такого числа</span></div>`)
} else {
    console.log(day);
    console.log('помилка введення');
    document.write(`<div class="orange"><span class="text">помилка ввооду</span></div>`)
}


// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).

let days = prompt('Завдання №4 Який день Вас цікавить (англійською мовою)');
// days = days.toLowerCase()

switch (days) {
    case 'monday':
        console.log(days);
        days = 'понеділок';
        console.log('додаткове заняття');
        document.write(`<div class="day">В ${days} ми маємо додаткове заняття</div>`);
        break;

    case 'tuesday':
        console.log(days);
        days = 'вівторок';
        console.log('лекція з JS');
        document.write(`<div class="day">В ${days} в нас лекція з JS</div>`);
        break;

    case 'wednesday':
        console.log(days);
        days = 'середу';
        console.log('вирішення домашнього завдання з JS');
        document.write(`<div class="day">В ${days} в нас вирішення домашнього завдання з JS</div>`);
        break;

    case 'thursday':
        console.log(days);
        days = 'четвер';
        console.log('лекція з JS');
        document.write(`<div class="day">В ${days} в нас лекція з JS</div>`);
        break;

    case 'friday':
        console.log(days);
        days = 'п’ятницю';
        console.log('додаткове заняття з JS');
        document.write(`<div class="day">В ${days} в нас додаткове заняття з JS</div>`);
        break;

    case 'saturday':
        console.log(days);
        days = 'суботу';
        console.log('заняття з англійської мови');
        document.write(`<div class="day">В ${days} в нас урок з Англійської мови</div>`);
        break;

    case 'sunday':
        console.log(days);
        days = 'неділю';
        console.log('вихідний день, п’ємо пиво');
        document.write(`<div class="day">В ${days} в нас вихідний день, відпочиваємо і п’ємо пиво</div>`);
        break;

    default:
        console.log(days);
        document.write(`<div class="day">Помилка введення, ви написали ${days} спробуйте написати день тиждня англійською мовою</div>`);
        console.log('помилка введення');
        break;
}


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let a = +prompt('Завдання №5  Введіть перше число');
// let a = Math.floor(Math.random() * 100)

let b = +prompt('Введіть друге число');
// let b = Math.floor(Math.random() * 100)


if (a > b) {
    console.log(a)
    console.log(b)
    console.log(`Найбільше число із введени ${a}`)
    document.write(`<div class="day">Найбільше число із введених ${a}</div>`)

} else if (a < b) {
    console.log(a)
    console.log(b)
    console.log(`Найбільше число із введени ${b}`)
    document.write(`<div class="day">Найбільше число із введених ${b}</div>`)

} else if (a === b) {
    console.log(a)
    console.log(b)
    console.log(`Числа рівні ${a} = ${b}`)
    document.write(`<div class="day">Числа рівні ${a} = ${b}</div>`)

} else {
    console.log(a)
    console.log(b)
    console.log(`Помилка введення ${a} і ${b}`)
    document.write(`<div class="day">Помилка введення ${a} і ${b}</div>`)
}

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"
//         якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
let xx = prompt(`Завдання №6 Введіть будь що`) || "default";
if (typeof xx !== false)
    console.log(xx)
document.write(`<div class="day">${xx}</div>`)


// let xxx = '';
// x === false || "default";
// console.log(xxx);
