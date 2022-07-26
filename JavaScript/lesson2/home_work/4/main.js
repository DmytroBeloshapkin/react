// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [1, 2, 3, 4, 5, 'one', 'two', 'three', true, false];
console.log(arr)


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title1: 'JS',
    pageCount1: 200,
    genre1: 'educational literature',
}

let book2 = {
    title1: 'HTML & CSS',
    pageCount1: 180,
    genre1: 'educational literature',
}

let book3 = {
    title1: 'React',
    pageCount1: 500,
    genre1: 'educational literature',
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив.
// Кожен автор має поля name,age
let book4 = {
    title1: 'Linux для чайников',
    pageCount1: 155,
    genre1: 'educational literature',
    authors: [
        {name: 'Александр Петров'},
        {age: 18}
    ]
}

let book5 = {
    title1: 'HTML для тих хто задає багато дуринх запитань',
    pageCount1: 50,
    genre1: 'comedy literature',
    authors: [
        {name: 'Сергій Журавлєв'},
        {age: 20}
    ]
}

let book6 = {
    title1: 'Як керувати світом не привертаючи увагу санітарів',
    pageCount1: 300,
    genre1: 'psychology',
    authors: [
        {name: 'Артем Бестер'},
        {age: 75}
    ]
}

console.log(book1);
console.log(book2);
console.log(book3);
console.log(book4);
console.log(book5);
console.log(book6);


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача
let users = [
    {id: 1, name: 'Dima', password: 649801},
    {id: 2, name: 'Marianna', password: 339955},
    {id: 3, name: 'Vitaliy', password: 'qwerty'},
    {id: 4, name: 'Jura', password: 'пароль'},
    {id: 5, name: 'Tetiana', password: null},
    {id: 6, name: 'Olya', password: 'asdzxc'},
    {id: 7, name: 'Vasul', password: 'passwordисько'},
    {id: 8, name: 'Khristina', password: 'пароліще'},
    {id: 9, name: 'Oleksandr', password: 'реактБоль'},
    {id: 10, name: 'Anna', password: 'щотакеПароЛь'}
];

console.log(users[0].password);
console.log(users[9]['password']);
//////////////////////////////////////
for (const user of users) {
    console.log(user.password);
}