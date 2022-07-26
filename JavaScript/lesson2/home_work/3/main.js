//     ______________________________________________________________________________________________________________________________________________________
// Додатково
// ______________________________________________________________________________________________________________________________________________________
let additionally = ['с', 'л', 'о', 'в', 'о'];
// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
for (let string of additionally) {
    for (let i = 0; i < string.length; i++) {
        const stringElement = string[i];
        document.write(string[i])
    }
}

// ******************************************************************
let hr0 = document.createElement('hr');
document.body.append(hr0)
// ******************************************************************


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
i = 0;
while (i < additionally.length) {
    document.write(additionally[i]);
    i++
}

// ******************************************************************
let hr1 = document.createElement('hr');
document.body.append(hr1)
// ******************************************************************

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
for (const string of additionally) {
    document.write(string)
}

// ******************************************************************
let hr2 = document.createElement('hr');
document.body.append(hr2)
// ******************************************************************

let users = [
    {id: 1, name: 'Dima', age: 36, phohe: +380672757648, state: 'Lviv', status: true},
    {id: 2, name: 'Marianna', age: 37, phohe: +380976708331, state: 'Lviv', status: true},
    {id: 3, name: 'Vitaliy', age: 8, phohe: +380977168442, state: 'Lviv', status: false},
    {id: 4, name: 'Jura', age: 4, phohe: null, state: 'Lviv', status: false},
    {id: 5, name: 'Tetiana', age: 66, phohe: +380979240866, state: 'Lviv', status: false},
    {id: 6, name: 'Olya', age: 58, phohe: +436603142188, state: 'Vien', status: false},
    {id: 7, name: 'Vasul', age: 32, phohe: +380730232233, state: 'Stavshany', status: true},
    {id: 8, name: 'Khristina', age: 35, phohe: +380673741373, state: 'Stavshany', status: true},
    {id: 9, name: 'Oleksandr', age: 5, phohe: null, state: 'Stavshany', status: false},
    {id: 10, name: 'Anna', age: 2, phohe: null, state: 'Stavshany', status: false}
];

for (const user of users) {
    document.write(`<ol>`);

    for (const userKey in user) {
        document.write(`<li>${userKey} - ${user[userKey]}</li>`);
    }
    console.log(user);
    document.write(`</ol><hr>`)
}