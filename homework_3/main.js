/*- Є змінна х, якій ви надаєте довільне числове значення.
    Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3*/
let x = 16
    if (x!==0){
        console.log('true');
    } else{
        console.log('false')
    }
let x2 = 1
if (x2!==0){
    console.log('true');
} else{
    console.log('false')
}
let x3 = 0
if (x3!==0){
    console.log('true');
} else{
    console.log('false')
}
let x4 = -3
if (x4!==0){
    console.log('true');
} else{
    console.log('false')
}
/*- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).
- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).*/
let time = 50
if (time>=0 && time<=15) {
    console.log('first')
}else if (time>=16 && time<=30) {
    console.log('second')
}else if (time>=31 && time<=45) {
    console.log('third')
}else if (time>=46 && time<=60) {
    console.log('fourth')
}else {
    console.log('error')
}

let date = 20
if (date>=0 && date<=10) {
    console.log('first')
}else if (date>=11 && date<=20) {
    console.log('second')
}else if (date>=21 && date<=30) {
    console.log('third')
}


/*- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей
день (можна замість плану на день, назву дня англійською).*/
let num = +prompt();
switch (num) {
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break
    case 7:
        day = 'Sunday';
        break
}
console.log(day)

  /*  - Користувач вводить або має два числа.
        Потрібно знайти та вивести максимальне число з тих двох .
        Також потрібно врахувати коли введені рівні числа.
        */
let a = 10;
let b = 25;
if (a>b) {
    console.log(a);
} else (b>a)
{
    console.log(b);

}

/* - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
*/

let g = +prompt() || 'default';
console.log(g);