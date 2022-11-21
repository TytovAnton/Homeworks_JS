// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

const square = (a, b) => a * b;
console.log(square(10, 10));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

let squareCircle = (r) => Math.PI * Math.pow(r, 2);
console.log(squareCircle(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

const cilindr = (r, h) => Math.PI * Math.pow(r, 2) * h;
console.log(cilindr(4, 2));

// - створити функцію яка приймає масив та виводить кожен його елемент

let arr = [1,2,3];
function foo(array) {
    for (const item of array) {
        console.log(item);
    }
}
foo(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function foo(text) {
    document.write(`<p>${text}</p>`);
}
foo('Hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function foo(text) {
    document.write(`<ul>
                       <li>${text}</li>
                       <li>${text}</li>
                       <li>${text}</li>
                    </ul>`)
}
foo('hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість
// li визначається другим аргументом, який є числовим (тут використовувати цикл)

function foo(text,num) {
    document.write(`<ul>`)
    for (let i = 0; i < num; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`)
}
foo('hello',5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arr = [12,23,true,false,'str'];
function foo(array) {
    document.write(`<ul>`)
    for (const item of array) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`)
}
foo(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для ' +
// 'кожного об'єкту окремий блок.

const arr = [
    {
        name: 'Vasya',
        age: 22
    },
    {
        name: 'Petya',
        age: 33
    }
]

let objArr = function (array) {
    for (const item of array) {
        document.write(`<div>${item.name} -- ${item.age}</div>`)
    }
}
objArr(arr);

// - створити функцію яка повертає найменьше число з масиву

const arr = [1,2,-4,0,100500];
const minItem = function (array) {
    let min = array[0];
    for (const item of array) {
        if (item < min) {
            min = item;
        }
    }
    return min;
}
let minItem1 = minItem(arr);
console.log(minItem1);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

const arr = [1,2,3];
const foo = (array) => {
    let sum = 0;
    for (const item of array) {
        sum += item;
    }
    return sum;
};
let number = foo(arr);
console.log(number);

let i = 0;
let n = 0;
while (i < 5) {
    i++;
    if (i === 3) {
        continue;
    }
    n += i; // 1 , 3, 7, 12
    console.log(n);
}