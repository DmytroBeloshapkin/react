let users = [
    {id: 1, name: 'Dima', age: 36, phohe: +380672757648, state: 'Lviv', status: true},
    {id: 2, name: 'Marianna', age: 37, phohe: +380976708331, state: 'Lviv', status: true},
    {id: 3, name: 'Vitaliy', age: 8, phohe: +380977168442, state: 'Lviv', status: false},
    {id: 4, name: 'Jura', age: 4, phohe: null, state: 'Lviv', status: false},
];

// - створити функцію яка виводить масив
function arreyIterator(arrey) {
    for (const arreyElement of arrey) {
        console.log(arreyElement);
    }
}
arreyIterator(users)

console.log(`-------------------------------------------------------------------`)

// - створити функцію яка заповнює масив рандомними числами та виводить його.
function addArrey(number) {
    let arr = []
    for (let i = 0; i < number; i++) {
        arr[i] = Math.floor(Math.random() * 100)
        arr.push()
    }
    return console.log(arr)
}
addArrey(10)

console.log(`-------------------------------------------------------------------`)

// - створити функцію яка приймає три числа та виводить та повертає найменьше.
let num3 = [55, 11, 22, 33, 2];
console.log(num3);
console.log(`-------------------------------------------------------------------`)


function minNum(arr) {
    let min = arr[0];
    for (const arrElement of arr) {
        if (arrElement < min) {
            min = arrElement
        }
    }
    console.log(min)
    document.write(`<h4>найменше число з масиву ${min}</h4>`)
    return min;
}

minNum(num3)

console.log(`-------------------------------------------------------------------`)

// - створити функцію яка приймає три числа та виводить та повертає найбільше.
function maxNum(arr) {
    let max = arr[0]
    for (const arrElement of arr) {
        if (arrElement > max) {
            max = arrElement
        }
    }
    console.log(max);
    document.write(`<h4>найбільше число з масиву ${max}</h4>`)
    return max;
}
maxNum(num3)

console.log(`-------------------------------------------------------------------`)

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
function numMinMax(arr) {
    let min = arr[0];
    let max = arr[0]

    for (const arrElement of arr) {
        if (arrElement < min) {
            min = arrElement
        } else if (arrElement > max) {
            max = arrElement
        }
    }
    document.write(`<h4>виводимо найбільше число з масиву ${max}</h4>`);
    console.log(`повертаємо найменше ${min}`)
    return min
}
numMinMax(num3)

console.log(`-------------------------------------------------------------------`)

// - створити функцію яка виводить масив
let iterator = (arr) => console.log(arr);
iterator(num3)

console.log(`-------------------------------------------------------------------`)

// - створити функцію яка повертає найбільше число з масиву
let max = (arr) => {
    let max = arr[0]
    for (const arrElement of arr) {
        if (arrElement > max) {
            max = arrElement
        }
    }
    console.log(max)
}
max(num3)

console.log(`-------------------------------------------------------------------`)

// - створити функцію яка повертає найменьше число з масиву
let min = (arr) => {
    let min = arr[0]
    for (const arrElement of arr) {
        if (arrElement < min) {
            min = arrElement
        }
    }
    console.log(min)
}
min(num3)

console.log(`-------------------------------------------------------------------`)

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
function arreyMaker(arr) {
    let start = 0;
    for (const arrElement of arr) {
        start = start + arrElement
    }
    return start
}

console.log(arreyMaker(num3));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function arithmeticMean(arr) {
    let start = 0;
    for (let i = 0; i < arr.length; i++) {
        const arrElement = arr[i];
        start = start + arrElement
    }
    return start / arr.length
}
console.log(arithmeticMean(num3));

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
let arrLenght = (arr) => console.log(arr.length);
arrLenght(num3)

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     Приклад
// a = [1,2,3,4]
// b = [2,3,4,5]
// результат
//     [3,5,7,9]
function arrAddition (a,b) {
let tempArr = []

    for (let i = 0; i < a.length; i++) {
        tempArr.push(a[i] + b[i]);
    }
    return tempArr;
}
let ret = arrAddition([1,2,3,4],[2,3,4,5]);
console.log(ret);





// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
let foo = (arr, i) => {
    if (i !== arr.length && i !== arr.length - 1) {
        let aa = arr[i];
        let bb = arr[i + 1];

        arr[i] = bb;
        arr[i + 1] = aa;
    }
    return arr;
}

//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

console.log(foo([9, 8, 0, 4], 0));
console.log(foo([9, 8, 0, 4], 1));
console.log(foo([9, 8, 0, 4], 2));


// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100

let zero = arr => {
    let counter = 0;
    let emptyArr = [];
    let i = 0;
    for (let arrElement of arr) {
        if (arrElement === 0) {
            counter++;
        } else {
            emptyArr[i] = arrElement;
            i++;
        }
    }
    for (let j = 0, k = emptyArr.length; j < counter; j++, k++) {
        emptyArr[k] = 0;
    }
    return arr = emptyArr;
}

// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

console.log(zero([1, 0, 6, 0, 3]));
console.log(zero([0, 1, 2, 3, 4]));
console.log(zero([0, 0, 1, 0]));


// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
let hello = () =>{
    let div = document.createElement(`div`)
        div.innerHTML = `Hello owu`
        document.body.append(div)
}
hello()

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
let arg = (agrument, text) =>{
    let arg = document.createElement(`${agrument}`)
    arg.innerHTML = `${text}`
    document.body.append(arg)
}
arg('div','тест')


