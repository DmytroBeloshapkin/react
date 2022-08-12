/*try catch*/
// console.log('---start---')
//
// try {
//     console.log('try'); // помилка стаєтьтся
// } catch (error) {
//     console.log('error');
// } finally {
//     console.log('was is das'); // всеодно виконується
// }
//
// console.log('---end---');
//
//
// function divade (a,b) {
//     if (b===0){
//         throw new Error( 'b is zero fail')
//     }
//     return a/b
// }
//
//
// try {
// divade(10, 0)
// } catch (e) {
//     console.log(e);
//     console.log(divade(10, 1));
// }

/*OCO*/
// let user = {
//     name: 'dima',
//     status: true
// }
//
// console.log(user.name);
// console.log(user.age);
//
// // user.wife?.greeatin()
// console.log(user.wife?.name);

/*object ES6*/
// let name = 'dima'
// let age = 36
// let status = true
//
// let user = {
//     name,
//     age,
//     status,
//     greeting() {
//         console.log('hi')
//     }
// }
// console.log(user);
// user.greeting();

/*destructoring*/
// let user = {
//     name: 'dima',
//     age: 36,
//     status: true,
// }
//
// let name = user.name
// let age = user.age
// let status = user.status
//
// let {name, age, status} = user;
// console.log(name, age, status);
//
// function foo({name, age}) {
//
// }
//
// foo({name: 'dima', age: 36, status: true});
//
// let user = {
//     name: 'dima',
//     age: 36,
//     wife:{
//         name: 'Marianna',
//         age: 37,
//     }
//
// }
// //
// // let {wife} = user
// // console.log(wife);
//
//
// let {wife, wife: {name},name: userName} = user
// console.log(name);
// console.log(wife);
// console.log(userName);
//
//
// let nums = [11,22,33]
// let [a,b,c] = nums
// console.log(b);
//
// let users = [
//     {id: 1, name: 'Dima', age: 36, phohe: +380672757648, state: 'Lviv', status: true},
//     {id: 2, name: 'Marianna', age: 37, phohe: +380976708331, state: 'Lviv', status: true},
//     {id: 3, name: 'Vitaliy', age: 8, phohe: +380977168442, state: 'Lviv', status: false},
//     {id: 4, name: 'Jura', age: 4, phohe: null, state: 'Lviv', status: false},
//     {id: 5, name: 'Tetiana', age: 66, phohe: +380979240866, state: 'Lviv', status: false},
//     {id: 6, name: 'Olya', age: 58, phohe: +436603142188, state: 'Vien',  status: false},
//     {id: 7, name: 'Vasul', age: 32, phohe: +380730232233, state: 'Stavshany', status: true},
//     {id: 8, name: 'Khristina', age: 35, phohe: +380673741373, state: 'Stavshany', status: true},
//     {id: 9, name: 'Oleksandr', age: 5, phohe: null, state: 'Stavshany', status: false},
//     {id: 10, name: 'Anna', age: 2, phohe: null, state: 'Stavshany', status: false}
// ];
//
// // let [u1, u2] = users
// // console.log(u1);
// //
// // let{age} = u1
// // console.log(age);
//
// let [{age},u1] = users;

/*spred*/
// let user = {
//     name: 'dima',
//     age: 36,
//     status: true,
//     wife: {
//         name: 'Marianna',
//         age: 37,
//         status: true
//     }
// }
//
// let dimas = {
//     ...user,
//     name: 'ananasishe',
// }
// console.log(user);
// console.log(dimas);
// console.log(user === dimas);
// console.log(user.wife === dimas.wife);
// let user = {
//     name: 'dima',
//     age: 36,
//     status: true,
//     wife: {
//         name: 'Marianna',
//         age: 37,
//         status: true
//     },
//     greeting(){
//         console.log('hi')
//     }
// }
//
// let dimas = {
//     ...user,
//     name: 'ananasishe',
// }
//
// console.log(user.wife === dimas.wife);

/*JSON*/
// let userJSON = JSON.parse(JSON.stringify(user)) /*копіює обєкт без функцій*/
// console.log(userJSON);
//
// console.log(userJSON === user);
// console.log(userJSON.wife === user.wife);
//
// let assign = Object.assign({},user);   /* копіює функціонал*/
// console.log(assign);
// assign.greeting()
//
//
//
// let users = [
//     {id: 1, name: 'Dima', age: 36, phohe: +380672757648, state: 'Lviv', status: true},
//     {id: 2, name: 'Marianna', age: 37, phohe: +380976708331, state: 'Lviv', status: true},
//     {id: 3, name: 'Vitaliy', age: 8, phohe: +380977168442, state: 'Lviv', status: false},
//     {id: 4, name: 'Jura', age: 4, phohe: null, state: 'Lviv', status: false},
//     {id: 5, name: 'Tetiana', age: 66, phohe: +380979240866, state: 'Lviv', status: false},
//     {id: 6, name: 'Olya', age: 58, phohe: +436603142188, state: 'Vien',  status: false},
//     {id: 7, name: 'Vasul', age: 32, phohe: +380730232233, state: 'Stavshany', status: true},
//     {id: 8, name: 'Khristina', age: 35, phohe: +380673741373, state: 'Stavshany', status: true},
//     {id: 9, name: 'Oleksandr', age: 5, phohe: null, state: 'Stavshany', status: false},
//     {id: 10, name: 'Anna', age: 2, phohe: null, state: 'Stavshany', status: false}
// ];
//
// let users2 = [...users]
//
// console.log(users2);
//
// let users3 =JSON.parse(JSON.stringify(users))
// console.log(users3 === users);

/*clouseres*/
// let user = {
//     name: 'dima',
//     age: 36,
//     status: true,
//     foo(){
//         console.log('foobar');
//     }
// }
//
// user.foo()
// user.age = 91
// console.log(user.age);
// function userBilder(name, age) {
//     let user = {name, age}
//     return {
//         getName() {
//             return user.name
//         },
//         getAge() {
//             return user.age
//         },
//         setAge(age) {
//             if (age > 0) {
//                 user.age = age
//             }
//         },
//         info(){
//             return {...user}
//         }
//     }
// }
//
//
// let u = userBilder('dima', 36)
// console.log(u);
//
// console.log(u.getName());
// console.log(u.getAge());
// u.setAge(50)
// console.log(u.getAge());
// console.log(u.info());


/*class work complete*/