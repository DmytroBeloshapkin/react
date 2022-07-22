// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
let aa = 'hello';
let bb = 'owu';
let cc = 'com'
let dd = 'ua'
let a = 1;
let b = 10;
let c = -999;
let d = 123;
const PI = 3.14;
let e = 2.7;
let f = 16;
let boolen1 = true;
let boolen2 = false;

//     Вивести кожну змінну за допомогою: console.log , alert, document.write
console.log(`${aa} ${bb}.${cc}.${dd}`);
document.write(`${aa} ${bb}.${cc}.${dd}`)
// ******************************************************************
let hr0 = document.createElement('hr');
document.body.append(hr0)
// ******************************************************************
// alert(`${a} ${b} ${c} ${d}`);

console.log(`${PI}, ${e}, ${f}, ${boolen1}, ${boolen2}`)
document.write(`${PI}, ${e}, ${f}, ${boolen1}, ${boolen2}`)
// ******************************************************************
let hr = document.createElement('hr');
document.body.append(hr)
// ******************************************************************

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName = 'Дмитро'
let middleName = 'Анатолійович'
let lastName = 'Бєлошапкін'
let result = `Привіт ментор, мене звати ${lastName} ${firstName} ${middleName} `
console.log(result);
document.write(result)

// ******************************************************************
let hr1 = document.createElement('hr');
document.body.append(hr1)
// ******************************************************************

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let aaa = 100;
let bbb = '100';
let ccc = true;
console.log(typeof aaa);
document.write(typeof aaa, ' ');

console.log(typeof bbb);
document.write(typeof bbb, ' ');

console.log(typeof ccc);
document.write(typeof ccc, ' ');

// ******************************************************************
let hr2 = document.createElement('hr');
document.body.append(hr2)
// ******************************************************************

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let promtFirstName = prompt(`Як тебе звати`);
let promtLastName = prompt(`Яке твоє прізвище`);
let promtAge = prompt(`Скільки тобі років`);
let img = `<hr><div><img src="img/img.png" alt="old" sizes="10px"><div>`



let promtResult = `Привіт тебе звати ${promtFirstName} ${promtLastName} і тобі вже ${promtAge} рочків, капець((`
console.log(promtResult);
document.write(promtResult, img);
