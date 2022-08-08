// Всі функції повинні бути описані стрілочним типом!!!!
let num = [11, 22, 33]
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let minNum = (a, b, c) => {
    if (a < b && a < c) {
        console.log(a)
    } else if (b < a && b < c) {
        console.log(b);
    } else {
        console.log(c);
    }
}
minNum(1, 5, 10);
minNum(10, 1, 5);
minNum(10, 5, 1);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let maxNum = (a, b, c) => {
    if (a > b && a > c) {
        console.log(a)
    } else if (b > a && b > c) {
        console.log(b);
    } else {
        console.log(c);
    }
}
maxNum(1, 5, 10);
maxNum(1, 10, 5);
maxNum(10, 5, 1);

// - створити функцію яка повертає найбільше число з масиву
let max = (arr) => {
    let max = arr[0]
    for (const arrElement of arr) {
        if (arrElement > max) {
            max = arrElement
        }
    }
    console.log(max);
}
max(num)

// - створити функцію яка повертає найменьше число з масиву
let min = (arr) => {
    let min = arr[0]
    for (const arrElement of arr) {
        if (arrElement < min) {
            min = arrElement
        }
    }
    console.log(min);
}
min(num)

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let addElement = (arr) => {
    let sum = 0
    for (const arrElement of arr) {
        sum += arrElement
    }
    console.log(sum)
}
addElement(num)

// - Дано натуральное число n. Выведите все числа от 1 до n.
let naturalN = (stop, start = 1) => {
    let natural = start
    console.log(natural)

    if (natural === stop) {
        console.log(`----------END----------`)
        return
    }
    natural++;
    naturalN(stop, natural)
}
naturalN(5);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
let iterator = (a, b) => {
    if (a < b) {
        for (let i = a; i < b; i++) {
            console.log(i);
        }
    } else {
        for (let i = a; i >= b; i--) {
            console.log(i);
        }
    }
    console.log(`***END***`)
}
iterator(6, 10)
iterator(10, 6)

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
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


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень.
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
