let a = 'hello world';
let b = 'lorem ipsum';
let c = 'javascript is cool';
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(a.length);
console.log(b.length);
console.log(c.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(a.toUpperCase());
console.log(b.toUpperCase());
console.log(c.toUpperCase());


let aa = 'HELLO WORLD';
let bb = 'LOREM IPSUM';
let cc = 'JAVASCRIPT IS COOL';
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log(aa.toLowerCase());
console.log(bb.toLowerCase());
console.log(cc.toLowerCase());

// - Є "брудна" стрінга let str = '  dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   '
console.log(str.trim());
console.log(str.replaceAll(' ', ''));

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let string = 'Ревуть воли як ясла повні';
let strFn = (str) => console.log(str.split(' '))
strFn(string)

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]
let map = arr.map(num => num.toString())
console.log(map);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11, 21, 3];

let sortNums = (arr, direction) => {
    if (direction === a) {
        return arr.sort((a, b) => a - b)
    } else (direction === b)
    return arr.sort((a, b) => b - a)
}
console.log(sortNums(nums, a));
console.log(sortNums(nums, b));

//
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let coursesSort = coursesAndDurationArray.sort(function (a, b) {
    return a.monthDuration - b.monthDuration
})
console.log(coursesSort);

coursesSortPRO = coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration)
console.log(coursesSortPRO);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let coursesSortFive = coursesAndDurationArray.filter(value => value.monthDuration > 5)
console.log(coursesSortFive);


// описати колоду карт
let cards = [
    {cardSuit: 'clubs', value: 'Ace', color: 'black'}, // хреста
    {cardSuit: 'clubs', value: 2, color: 'black'},
    {cardSuit: 'clubs', value: 3, color: 'black'},
    {cardSuit: 'clubs', value: 4, color: 'black'},
    {cardSuit: 'clubs', value: 5, color: 'black'},
    {cardSuit: 'clubs', value: 6, color: 'black'},
    {cardSuit: 'clubs', value: 7, color: 'black'},
    {cardSuit: 'clubs', value: 8, color: 'black'},
    {cardSuit: 'clubs', value: 9, color: 'black'},
    {cardSuit: 'clubs', value: 10, color: 'black'},
    {cardSuit: 'clubs', value: 'Jack', color: 'black'},
    {cardSuit: 'clubs', value: 'Queen', color: 'black'},
    {cardSuit: 'clubs', value: 'King', color: 'black'},

    {cardSuit: 'diamonds', value: 'Ace', color: 'red'}, // бубна
    {cardSuit: 'diamonds', value: 2, color: 'red'},
    {cardSuit: 'diamonds', value: 3, color: 'red'},
    {cardSuit: 'diamonds', value: 4, color: 'red'},
    {cardSuit: 'diamonds', value: 5, color: 'red'},
    {cardSuit: 'diamonds', value: 6, color: 'red'},
    {cardSuit: 'diamonds', value: 7, color: 'red'},
    {cardSuit: 'diamonds', value: 8, color: 'red'},
    {cardSuit: 'diamonds', value: 9, color: 'red'},
    {cardSuit: 'diamonds', value: 10, color: 'red'},
    {cardSuit: 'diamonds', value: 'Jack', color: 'red'},
    {cardSuit: 'diamonds', value: 'Queen', color: 'red'},
    {cardSuit: 'diamonds', value: 'King', color: 'red'},

    {cardSuit: 'hearts', value: 'Ace', color: 'red'}, // черва
    {cardSuit: 'hearts', value: 2, color: 'red'},
    {cardSuit: 'hearts', value: 3, color: 'red'},
    {cardSuit: 'hearts', value: 4, color: 'red'},
    {cardSuit: 'hearts', value: 5, color: 'red'},
    {cardSuit: 'hearts', value: 6, color: 'red'},
    {cardSuit: 'hearts', value: 7, color: 'red'},
    {cardSuit: 'hearts', value: 8, color: 'red'},
    {cardSuit: 'hearts', value: 9, color: 'red'},
    {cardSuit: 'hearts', value: 10, color: 'red'},
    {cardSuit: 'hearts', value: 'Jack', color: 'red'},
    {cardSuit: 'hearts', value: 'Queen', color: 'red'},
    {cardSuit: 'hearts', value: 'King', color: 'red'},
    {value: 'Joker', color: 'red'},

    {cardSuit: 'spades', value: 'Ace', color: 'black'}, // піка
    {cardSuit: 'spades', value: 2, color: 'black'},
    {cardSuit: 'spades', value: 3, color: 'black'},
    {cardSuit: 'spades', value: 4, color: 'black'},
    {cardSuit: 'spades', value: 5, color: 'black'},
    {cardSuit: 'spades', value: 6, color: 'black'},
    {cardSuit: 'spades', value: 7, color: 'black'},
    {cardSuit: 'spades', value: 8, color: 'black'},
    {cardSuit: 'spades', value: 9, color: 'black'},
    {cardSuit: 'spades', value: 10, color: 'black'},
    {cardSuit: 'spades', value: 'Jack', color: 'black'},
    {cardSuit: 'spades', value: 'Queen', color: 'black'},
    {cardSuit: 'spades', value: 'King', color: 'black'},
    {value: 'Joker', color: 'black'},]
// - знайти піковий туз
let serch1 = cards.filter(value => value.cardSuit === 'spades')
console.log(serch1.filter(value => value.value === 'Ace'));

// - всі шістки
let serch2 = cards.filter(value => value.value === 6)
console.log(serch2);

// - всі червоні карти
let serch3 = cards.filter(value => value.color === 'red')
console.log(serch3);

// - всі буби
let serch4 = cards.filter(value => value.cardSuit === 'diamonds')
console.log(serch4);

// - всі трефи від 9 та більше
let serch5 = cards.filter(value => value.cardSuit === 'clubs')
for (const serch5Element of serch5) {
    if (serch5Element.value > '8' || serch5Element.value === typeof 'string') {
        console.log(serch5Element)
    }
}

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let reduce = cards.reduce(function (accumulator, card) {
        if (card.cardSuit === 'spades') {
            accumulator.spades.push(card)
        } else if (card.cardSuit === 'diamonds') {
            accumulator.diamonds.push(card)
        } else if (card.cardSuit === 'hearts') {
            accumulator.hearts.push(card)
        } else if (card.cardSuit === 'clubs') {
            accumulator.clubs.push(card)
        }
        return accumulator;
    },
    {spades: [], diamonds: [], hearts: [], clubs: []}
)
console.log(reduce);

