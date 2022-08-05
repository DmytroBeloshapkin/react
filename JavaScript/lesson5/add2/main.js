// Всі функції повинні бути описані стрілочним типом!!!!
let num = [11, 22, 33]
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)


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
// let naturalN = (stop, start = 1) => {
//     let natural = start
//     console.log(natural)
//
//     if (natural === stop) {
//         console.log(`END`)
//         return
//     }
//     natural++;
//     naturalN(stop, natural)
// }
// naturalN(8);



let naturalN = (stop, start) => {
    let start = 1
    console.log(start)

    if (start === stop) {
        console.log(`END`)
        return
    }
    start++;
    naturalN(stop, start)
}
naturalN(8);



// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
//
//
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]