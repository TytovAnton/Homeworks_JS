/*- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
створити пустий масив, наповнити його 10 об'єктами new User(....)*/ /*- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)*/

/*- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)*/
/*function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname =surname;
    this.email = email;
    this.phone = phone;
}
const user1 = new User(1,'Valera','ivanov','emqil@gmail.com','123456789');
 const user2 = new User(2,'Valera','Ivanov','emqil@gmail.com','123456789');
 const user3 = new User(3,'Valera','Ivanov','emqil@gmail.com','123456789');
 const user4 = new User(4,'Valera','Ivanov','emqil@gmail.com','123456789');

 const arrayUsers = [];

 arrayUsers.push(user1, user2, user3, user4);

 let filter = arrayUsers.filter(value => value.id % 2 ===0);
console.log(filter);
console.log(arrayUsers.sort((a, b) => b.id - a.id));*/


/*- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об'єктами Client
- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)*/
/*class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.orer = order;
    }
}
const user1 = new User(1,'Valera','ivanov','emqil@gmail.com','123456789',[1,2,3,4]);
const user2 = new User(2,'Valera','Ivanov','emqil@gmail.com','123456789'),[1,2,3];
const user3 = new User(3,'Valera','Ivanov','emqil@gmail.com','123456789'),[1,2];
const user4 = new User(4,'Valera','Ivanov','emqil@gmail.com','123456789'),[1];

const arrayUsers = [];
arrayUsers.push(user1, user2, user3, user4);
console.log(arrayUsers.sort((a, b) => a.order.length - b.order.length));*/

/*- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car*/

function car(model,producer,year,maxSpeed,engine) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;

    this.engine = function () {
         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
     }

     this.info = function () {
        for (const carKey in this) {
             if (typeof this[carKey] !== 'function'){
                 console.log(`${carKey} -- ${this[carKey]}`);
             }
         }
     }

     this.increaseMaxSpeed = function (newSpeed) {
         this.maxSpeed += newSpeed;
     }

    this.changeYear = function (newValue) {
         this.year = newValue;
     }

     this.addDriver = function (driver) {
         this.driver = driver;
     }
 }

 const car = new Car('Toyota','Japan','2000',200,2.5);
 console.log(car);
 car.engine();
 car.info();
 car.increaseMaxSpeed(50);
 car.changeYear(2020);
car.addDriver({name: 'Vasya'});
 console.log(car);
/*- (Те саме, тільки через клас)
Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car*/

this.engine = function () {
         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
     }

     this.info = function () {
         for (const carKey in this) {
             if (typeof this[carKey] !== 'function'){
                 console.log(`${carKey} -- ${this[carKey]}`);
             }
         }
    }

     this.increaseMaxSpeed = function (newSpeed) {
         this.maxSpeed += newSpeed;
     }

     this.changeYear = function (newValue) {
         this.year = newValue;
    }

     this.addDriver = function (driver) {
         this.driver = driver;
     }
 }

 const car = new Car('Toyota','Japan','2000',200,2.5);
console.log(car);
 car.engine();
 car.info();
 car.increaseMaxSpeed(50);
car.changeYear(2020);
car.addDriver({name: 'Vasya'});
console.log(car);

/*
-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
    За допомоги циклу знайти яка попелюшка повинна бути з принцом.
    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку*/
function Cinderella(name,age,footSize) {
 this.name = name;
     this.age = age;
     this.footSize = footSize;
 }
 const cinderella1 = new Cinderella('Tanya',23,35);
 const cinderella2 = new Cinderella('Anya',23,36);
 const cinderella3 = new Cinderella('Vanya',23,37);
 const cinderella4 = new Cinderella('Danya',23,38);

 const arrayOfCinderella = [];
 arrayOfCinderella.push(cinderella1,cinderella2,cinderella3,cinderella4);

 class Prince{

     constructor(name, age, findFootSize) {
         this.name = name;
         this.age = age;
         this.findFootSize = findFootSize;
     }
 }

 const prince = new Prince('Vasya',30,36);

 const findCinderellas = (arr,boy) => {
     for (const item of arr) {
         if (item.footSize === boy.findFootSize) {
             console.log(`My cinderella is ${item.name}`);
         }
     }
 }

 findCinderellas(arrayOfCinderella,prince);

 let find = arrayOfCinderella.find(value => value.footSize === prince.findFootSize);
 console.log(find);