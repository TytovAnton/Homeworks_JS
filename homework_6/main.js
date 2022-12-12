/*- Знайти та вивести довижину настипних стрінгових значень
'hello world', 'lorem ipsum',
/*let str = 'hello world'
console.log(str.length)*/
/*let str = 'lorem ipsum'
console.log(str.length)*/
/*
let str = 'javascript is cool'
console.log(str.length)
*/
/*- Перевести до великого регістру наступні стрінгові значення
'hello world', 'lorem ipsum', 'javascript is cool'
/*
let str = 'hello world'
console.log(str.toUpperCase());*/
/*let str = 'lorem ipsum'
console.log(str.toUpperCase());*/
/*
let str = 'javascript is cool'
console.log(str.toUpperCase());*/

/*
 /
- Перевести до нижнього регістру настипні стрінгові значення
'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
/*
let str = 'HELLO WORLD'
console.log(str.toLowerCase());*/

/*
let str = 'LOREM IPSUM'
console.log(str.toLowerCase());*/

/*
let str = 'JAVASCRIPT IS COOL'
console.log(str.toLowerCase());*/

/*- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.*/


/*let str = ' dirty string   '
console.log(str.trim());*/

/*- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str = 'Ревуть воли як ясла повні';
let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']*/
/*
let str = 'Ревуть воли як ясла повні';
function stringToarray(str) {
    return str.trim().split( ' ');
}

let arr = stringToarray(str); // ['Ревуть', 'воли', 'як', 'ясла', 'повні']
document.writeln(arr);
*/

/*- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.*//*
const arr = [10,8,-7,55,987,-1011,0,1050,0];
let strings = arr.map(value => value.toString());
let strings = arr.map(value => String(value));
let strings = arr.map(value => value + '');
console.log(strings);*/
/*
- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
    let nums = [11,21,3];
sortNums(nums,'ascending') // [3,11,21]
sortNums(nums,'descending') // [21,11,3]*/
/*
let nums = [11, 21, 3];
const sortNums = (direction, arr) => {
    if (direction === 'ascending') {
        //         arr.sort((a, b) => a - b);
} else if (direction === 'descending') {
         arr.sort((a, b) => b - a);
    }
     return arr;
 }
 console.log(sortNums('ascending', nums));
 console.log(sortNums('descending', nums));
}
*/
/*
- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
-- відсортувати його за спаданням за monthDuration
-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців*/

/*
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));
let filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(filter);


описати колоду карт
- знайти піковий туз
- всі шістки
- всі червоні карти
- всі буби
- всі трефи від 9 та більше.*
 */

/*
const suits = [
    {cardSuit: 'heart', color: 'red'},
    {cardSuit: 'diamond', color: 'red'},
    {cardSuit: 'spade', color: 'black'},
    {cardSuit: 'clubs', color: 'black'},
]
const cardNames = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const deck = [];

for (const suit of suits) {
    for (const cardName of cardNames) {
        const card = {
            cardSuit: suit.cardSuit,
            value: cardName,
            color: suit.color
        }
        deck.push(card);
    }
}
deck.push({cardSuit: 'joker', value: null, color: 'red'});
deck.push({cardSuit: 'joker', value: null, color: 'black'});
// console.log(deck);*/
// console.log(deck);

// - знайти піковий туз

// let filter = deck.filter(value => value.cardSuit === 'spade' && value.value === 'ace');
// console.log(filter);

// - всі шістки

// let filter = deck.filter(value =>value.value === 6);
// console.log(filter);

// - всі червоні карти

// let filter = deck.filter(value =>value.color === 'red');
// console.log(filter);

// - всі буби

// let filter = deck.filter(value =>value.cardSuit === 'diamond');
// console.log(filter);

// - всі трефи від 9 та більше

// let filter = deck.filter(value =>(value.cardSuit === 'clubs' && value.value >= 9) ||
//     (value.cardSuit === 'clubs' && typeof value.value === 'string'));
// console.log(filter);

// let filter = deck.filter(value =>value.cardSuit === 'clubs' && value.value >= '9' || value.value === '10');
// console.log(filter);


// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
/*

let reduce = deck.reduce((accum, value) => {
    if (value.cardSuit === 'spade') {
        accum.spades.push(value);
    } else if (value.cardSuit === 'clubs') {
        accum.clubs.push(value)
    } else if (value.cardSuit === 'diamond') {
        accum.diamonds.push(value)
    } else if (value.cardSuit === 'heart') {
        accum.hearts.push(value)
    }
    return accum;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});
console.log(reduce);*/
