// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________

// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
let arrey = ['a', 'b', 'c'];
for (let i = 1; i <= 3; i++) {
    arrey.push(i)
}
console.log(arrey);

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
let arrey1 = [1, 2, 3];
console.log(arrey1.reverse());

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
let arrey2 = [1, 2, 3];
for (let i = 4; i < 7; i++) {
    arrey2.push(i)
}
console.log(arrey2)

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
let arrey3 = [1, 2, 3];
for (let i = 6; i >= 4; i--) {
    arrey3.unshift(i)
}
console.log(arrey3);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
let study = ['js', 'css', 'jq'];
console.log(study.shift(1, 2));

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
num = [1, 2, 3, 4, 5]
console.log(study.pop(0, 1));

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
num = [1, 2, 3, 4, 5]
console.log(num.slice(3));

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
num = [1, 2, 3, 4, 5]
console.log(num.slice(0, 2));

// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
//     Підказка. Необхідно стерти елементи, зберегти їх кудись. Дописати букви і після букв повернути стерті цифри
num.splice(3, 0, "a", "b", "c");
console.log(num);

// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
//     Підказка. Працюйте по принципу задачі вище.
num = [1, 2, 3, 4, 5]
num.splice(1, 0, 'a', 'b');
num.splice(6, 0, 'c');
num.splice(8, 0, 'e');
console.log(num);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let emptyArrey8 = [1, 2, 3, 4, 55, 444, 333, 32432, 12, 1, 20, 2000, 13, -8];

for (let i = 0; i < emptyArrey8.length; i++) {
    if (emptyArrey8[i] % 2 === 0) {
        console.log(emptyArrey8[i]);
    }
}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
let emptyArrey9 = []
for (let i = 0; i < emptyArrey8.length; i++) {
    if (emptyArrey8[i] % 2 === 0) {
        emptyArrey9.push(emptyArrey8[i])
    }
}
console.log(emptyArrey9);

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let emptyArrey10 = []
for (let i = 0; i < emptyArrey8.length; i++) {
    emptyArrey10[i] = emptyArrey8[i];
}
console.log(emptyArrey10);

// ============

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
//     1. перебрати його циклом while
i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++
}

//     2. перебрати його циклом for
for (const number of arr) {
    console.log(number)
}

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
i = 0;
while (i < arr.length) {
    if (i % 2 === 0) {
        console.log(arr[i]);
    }
    i++
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let j = 0; j < arr.length; j++) {
    if (j % 2 === 0) {
        console.log(arr[j])
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення
i = 0;
while (i < arr.length) {
    if (i % 2 !== 0) {
        console.log(arr[i]);
    }
    i++
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let j = 0; j < arr.length; j++) {
    if (j % 2 !== 0) {
        console.log(arr[j])
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"
arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
for (let j = 0; j < arr.length; j++) {
    if (arr[j] % 3 === 0) {
        arr[j] = 'okten'
    }
}
console.log(arr)


// 8. вивести масив в зворотньому порядку.
console.log(arr.reverse());


// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
for (i = arr.length - 1; i >= 0; i--) {
console.log(arr[i])
}

// 10
// створити пустий масив та :
let emptyArr = [];
//     - заповнити його 50 парними числами за допомоги циклу.
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        emptyArr.push(i)
    }
}
console.log(emptyArr);


// - заповнити його 50 непарними числами за допомоги циклу.
let emptyArr1 = []
for (let i = 0; i < 50; i++) {
    if (i % 1 === 0) {
        emptyArr1.push(i)
    }
}
console.log(emptyArr1);

// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
let emptyArrey = []
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        emptyArrey.push(i)
    }
}
console.log(emptyArrey);

//     b. заповнити його 50 непарними числами за допомоги циклу.
let emptyArrey1 = []
for (let i = 0; i < 100; i++) {
    if (i % 2 === 1) {
        emptyArrey1.push(i)
    }
}
console.log(emptyArrey1);

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
let emptyArrey2 = []
for (let i = 0; i < 20; i++) {
    emptyArrey2[i] = Math.floor(Math.random(0, 20) * 100)
}
console.log(emptyArrey2);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
let emptyArrey3 = []
for (let i = 0; i < 20; i++) {
    emptyArrey3[i] = Math.floor(Math.random() * (732 - 8)) + 8
}
console.log(emptyArrey3);

// 2. Вивести за допомогою console.log кожен третій елемен
for (let i = 2; i < emptyArrey3.length; i += 3) {
    console.log(emptyArrey3[i])
}

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

for (let i = 2; i < emptyArrey3.length; i += 3) {
    const emptyArrey3Element = emptyArrey3[i];
    if (emptyArrey3Element % 2 === 0)
        console.log(emptyArrey3[i])
}

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let emptyArrey4 = []
for (let i = 2; i < emptyArrey3.length; i += 3) {
    const emptyArrey3Element = emptyArrey3[i];
    if (emptyArrey3Element % 2 === 0) {
        emptyArrey4.push(emptyArrey3[i])
    }
}
console.log(emptyArrey4);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
let arrey4 = [1, 2, 3, 5, 7, 9, 56, 8, 67];
let emptyArrey7 = [];
for (let i = 0; i < arrey4.length; i++) {
    if (arrey4[i] % 2 === 0) {
        emptyArrey7.push(arrey4[i - 1])
    }
}
console.log(emptyArrey7)

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let arreey5 = [100, 250, 50, 168, 120, 345, 188];
let arreySum = 0
for (let i = 0; i < arreey5.length; i++) {
    const arreey5Element = arreey5[i];
    arreySum = arreySum + arreey5Element
}
arreySum = Math.floor(arreySum / arreey5.length)
console.log(arreySum)


// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let emptyArrey5 = []
let emptyArrey6 = []

for (let i = 0; i < 10; i++) {
    emptyArrey5[i] = Math.floor(Math.random(0, 10) * (20))
}

console.log(emptyArrey5)
for (let i = 0; i < 10; i++) {
    emptyArrey6.push(emptyArrey5[i] * 5)
}
console.log(emptyArrey6);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому,
// і якщо елемент є числом - додати його в інший масив.
let numStr = ['a', 'b', 'c', 'd', 1, 2, 3, 4, true, false];
let numStrNew = []
for (let i = 0; i < numStr.length; i++) {
    const numStrElement = numStr[i];
    if (typeof numStrElement === `number`) {
        numStrNew.push(numStrElement)
    }
}
console.log(numStr)
console.log(numStrNew)




