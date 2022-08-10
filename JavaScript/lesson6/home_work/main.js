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
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let card = {
    cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
    value: '', // '6'-'10', 'ace','jack','queen','king','joker'
    color: '', // 'red','black'
}


// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let carReduse =
    {
        spades: [],
        diamonds: [],
        hearts: [],
        clubs: []
    }