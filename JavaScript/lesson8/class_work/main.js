/*constructor*/

// function User(name, age, status, wifeName, wifeAge) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     this.wife = {name: wifeName, age: wifeAge};
//     this.greeating = function () {
//         console.log('hi')
//     }
// }
//
// let newUser = new User('Dima', 36, true, 'Marianna', 37,)
// console.log(newUser);
//
// newUser.greeating();


/*prototype*/
function User(name, age) {
    this.name = name
    this.age = age
}
let user1 = new User('dima', 36);

/*********************************/



User.prototype.greeating = function () {
    return `hello my name is ${this.name}, my age if ${this.age}`
};


let user = new User('Dimaaa', 36)
user.greeating = function (msg) {
    return `${msg} my name is ${this.name}, my age if ${this.age}`
}

/*********************************/

let user2 = new User('Marianna', 37)
console.log(user.greeating.apply(user2,['Hello motherfucker']));
console.log(user.greeating.bind(user2, 'кукубля'));


/*Class*/

// class Users {
//     constructor(name,age) {
//         this.name = username;
//         this.age = userage;
//     }
//     static greeting (){
//         console.log(this)
//         console.log(this.age)
//         return `hello my name is ${this.username}`
//     }
// }




