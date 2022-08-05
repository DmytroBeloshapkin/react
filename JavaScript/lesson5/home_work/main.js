// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let rectangleArea = (a, b) => a * b
console.log(rectangleArea(5, 10));


function rectangleAreaPro(a, b) {
    result = a * b;
    document.write(`<h4>площа прямокутника зі сторонами ${a} і ${b} рівна ${result}</h4>`)
    return result
}

console.log(rectangleAreaPro(5, 10));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let circleArea = (r) => 3.14 * (r * r)
console.log(circleArea(5))


function circleAreaPro(r) {
    const PI = 3.14;
    result = PI * Math.pow(r, 2)
    document.write(`<h4>площа кола з радіусом ${r} рівна ${result}</h4>`)
    return result
}

console.log(circleAreaPro(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinderArea = (h, r) => 2 * 3.14 * r * (r + h)
console.log(cylinderArea(2, 5));


function cylinderAreaPro(h, r) {
    const PI = 3.14;
    result = 2 * PI * r * (r + h)
    document.write(`<h4>площа повної поверхні циліндра з радіусом ${r} і висотою ${h} рівна ${result}</h4>`)
    return result
}

console.log(cylinderAreaPro(2, 5));


/******************************************************/
let users = [
    {id: 1, name: 'Dima', age: 36, phohe: +380672757648, state: 'Lviv', status: true},
    {id: 2, name: 'Marianna', age: 37, phohe: +380976708331, state: 'Lviv', status: true},
    {id: 3, name: 'Vitaliy', age: 8, phohe: +380977168442, state: 'Lviv', status: false},
    {id: 4, name: 'Jura', age: 4, phohe: null, state: 'Lviv', status: false},
    {id: 5, name: 'Tetiana', age: 66, phohe: +380979240866, state: 'Lviv', status: false},
    {id: 6, name: 'Olya', age: 58, phohe: +436603142188, state: 'Vien', status: false},
    {id: 7, name: 'Vasul', age: 32, phohe: +380730232233, state: 'Lviv', status: true},
    {id: 8, name: 'Khristina', age: 35, phohe: +380673741373, state: 'Lviv', status: true},
    {id: 9, name: 'Oleksandr', age: 5, phohe: null, state: 'Lviv', status: false},
    {id: 10, name: 'Anna', age: 2, phohe: null, state: 'Lviv', status: false}];
let arreyRandom = [1, 2, 3, 4, `one`, `two`, true, false];
let numbers = [1, 2, 3, 4, 5, -11, 6, 5, 200, 120];

/******************************************************/

// - створити функцію яка приймає масив та виводить кожен його елемент
function arreyIterator(arrey) {
    for (const arreyElement of arrey) {
        console.log(arreyElement)
    }
}
arreyIterator(users)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function textMaker(text) {
    document.write(`<p>${text}</p>`)
}
textMaker(`тестовий текст`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function liMaker(text) {
    document.write(`<ul>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`</ul>`)
}
liMaker(`три тестові лішки`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function liMakerPro(text, length) {
    document.write(`<ul>`)
    for (let i = 0; i < length; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
liMakerPro(`5 крутих лішок`, 5)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function liMakerPro2(arrey) {
    document.write(`<ul>`)
    for (const arreyElement of arrey) {
        document.write(`<li>${arreyElement}</li>`)
    }
    document.write(`</ul>`)
}
liMakerPro2(arreyRandom)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
function arreyIteratorPro(arrey) {
    document.write(`<div>`)
    document.write(`<ul>`)
    for (const arreyElement of arrey) {
        document.write(`<li>${arreyElement.id}</li>`)
        document.write(`<li>${arreyElement.name}</li>`)
        document.write(`<li>${arreyElement.age}</li>`)
        document.write(`<hr>`)
    }
    document.write(`</ul>`)
    document.write(`</div>`)
}
arreyIteratorPro(users)

// - створити функцію яка повертає найменьше число з масиву
function minNum(arrey) {
    let min = arrey[0]
    for (const arreyElement of arrey) {
        if (arreyElement < min) {
            min = arreyElement
            console.log(arreyElement)
            document.write(`найменше число з масиву [${arrey}] це ${arreyElement}`)
        }
    }
}
minNum(numbers)

/******************************************************/
document.write(`<hr>`)
/******************************************************/

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function numAdd(arrey) {
    let start = 0
    for (const arreyElement of arrey) {
        start = arreyElement + start
    }
    document.write(`сума значень з масиву [${arrey}] це - ${start}`)
    return start
}
console.log(numAdd(numbers));