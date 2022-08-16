// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let users = [
    new User(1, 'Dima', 'Beloshapkin', 'dmytro.beloshapkin@gmail.com', 380672757600),
    new User(5, 'Marianna', 'Beloshapkina', 'dmytro.beloshapkin@gmail.com', 380672757641),
    new User(12, 'Vitaliy', 'Beloshapkin', 'dmytro.beloshapkin@gmail.com', 380672757642),
    new User(8, 'Jura', 'Beloshapkin', 'dmytro.beloshapkin@gmail.com', 380672757643),
    new User(11, 'Vasyl', 'Pekera', 'dmytro.beloshapkin@gmail.com', 380672757644),
    new User(99, 'Khrystina', 'Pekera', 'dmytro.beloshapkin@gmail.com', 380672757645),
    new User(7, 'Tanya', 'Beloshapkina', 'dmytro.beloshapkin@gmail.com', 380672757646),
    new User(80, 'Olya', 'Kinah', 'dmytro.beloshapkin@gmail.com', 380672757647),
    new User(9, 'Sasha', 'Pekera', 'dmytro.beloshapkin@gmail.com', 380672757648),
    new User(10, 'Anna', 'Pekera', 'dmytro.beloshapkin@gmail.com', 380672757649),
]
console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filterUsers = users.filter(user => !(user.id % 2))
console.log(filterUsers);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortUsers = users.sort((a, b) => a.id - b.id)
console.log(sortUsers);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
let clients = [
    new Client(1, 'Dima', 'Beloshapkin', 'dmytro.beloshapkin@gmail.com', 380672757, ['beer', 'coffee', 'tee', 'water']),
    new Client(5, 'Marianna', 'Beloshapkina', 'dmytro.beloshapkin@gmail.com', 380685215, ['tee', 'coffee', 'water']),
    new Client(12, 'Vitaliy', 'Beloshapkin', 'dmytro.beloshapkin@gmail.com', 38067234234, ['tee', 'juice']),
    new Client(8, 'Jura', 'Beloshapkin', 'dmytro.beloshapkin@gmail.com', 380672757, ['water', 'juice']),
    new Client(11, 'Vasyl', 'Pekera', 'dmytro.beloshapkin@gmail.com', 380672757644, ['beer', 'vodka']),
    new Client(99, 'Khrystina', 'Pekera', 'dmytro.beloshapkin@gmail.com', 38067275, ['beer', 'tee']),
    new Client(7, 'Tanya', 'Beloshapkina', 'dmytro.beloshapkin@gmail.com', 3806727, ['coffee']),
    new Client(80, 'Olya', 'Kinah', 'dmytro.beloshapkin@gmail.com', 380672757647, ['beer', 'coffee']),
    new Client(9, 'Sasha', 'Pekera', 'dmytro.beloshapkin@gmail.com', 380672757648, ['water', 'juice']),
    new Client(10, 'Anna', 'Pekera', 'dmytro.beloshapkin@gmail.com', 380672757649, ['water'])
]
console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortClients = clients.sort((a, b) => a.order.length - b.order.length)
console.log(sortClients);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

console.log('---------------------------------------------------')

function Car(model, manufacturer, year, maxSpeed, engine) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} km/h`);
    };

    this.info = function () {
        console.log(`info ${this.model}`);

        for (let key in this) {
            if (typeof this[key] !== 'function' && typeof this[key] !== 'object') {
                console.log(`${key} - ${this[key]}`);
            } else if (typeof this[key] === 'object') {
                for (let carElementKey in this[key]) {
                    console.log(`${carElementKey} - ${this[key][carElementKey]}`);
                }
            }
        }
        console.log();
    };

    // this.info = function () {
    //     console.log(`модель ${model}, виробництвло ${manufacturer}, рік випуску ${year}, об’єм двигуна ${engine}`);
    // }

    this.setSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    };

    this.changeYear = function (newValue) {
        this.year = newValue;
    }

    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

let car = new Car('E-220', 'Mercedes-Benz', 2012, 230, 2.2);

let driver = {
    driverName: 'Dmytro',
    surname: 'Beloshapkin',
    experience: 15
}

car.drive();
car.info();
console.log('---------------------------------------------------')

car.setSpeed(20);
car.changeYear(2013);
car.addDriver(driver);
car.info();
console.log('---------------------------------------------------')


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Cars {
    constructor(model, manufacturer, year, maxSpeed, engine) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} km/h`);
    }

    info() {
        console.log(`info  ${this.model}`);
        for (let machineKey in this) {
            console.log(`${machineKey} - ${this[machineKey]}`);
        }
    }

    // info() {
    //     console.log(`модель ${model}, виробництвло ${manufacturer}, рік випуску ${year}, об’єм двигуна ${engine}`);
    // }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

let car2 = new Cars('GLE-350', 'Mercedes-Benz', 2021, 225, 3);

let driver2 = {
    driverName: 'Dmytro',
    surname: 'Beloshapkin',
    experience: 15
}

car2.drive();
car2.info();
console.log('---------------------------------------------------')
car2.increaseMaxSpeed(40);
car2.changeYear(2022);
// car2.addDriver(driver.driverName, driver.surname, driver.experience);
car2.addDriver([driver2]);
car2.info();

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.


class Popelushka {
    constructor(name, age, foot) {
        this.name = name;
        this.age = age;
        this.foot = foot;
    }
}

let popelushki = [
    new Popelushka('Marianna', 37, 37),
    new Popelushka('Ira', 27, 35),
    new Popelushka('Kristina', 17, 36),
    new Popelushka('olya', 30, 39),
    new Popelushka('Sasha', 32, 38),
    new Popelushka('Karina', 15, 34),
    new Popelushka('Diana', 18, 32),
    new Popelushka('Olena', 41, 36),
    new Popelushka('Milana', 17, 35),
    new Popelushka('Tanya', 20, 36)
]
console.log(popelushki);


class Princ {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

let princ = new Princ('Dima', 36, 37);

let finder = (princ, popelushki) => {
    for (const popelushka of popelushki) {
        if (princ.size === popelushka.foot) {
            return console.log(`От і казочці кінець а ${princ.name} знайшов ${popelushka.name} і молодець`)
        }
    }
}
finder(princ, popelushki)

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let finderLow = popelushki.find(popelushki => popelushki.foot === princ.size)
console.log(finderLow);