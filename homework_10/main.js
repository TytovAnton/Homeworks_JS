/*зробити файл users.html
з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
    вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)*/

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users => {
        for (const user of users) {
            let div = document.createElement('div');
            div.innerText = `${user.id} ${user.name}`;
            document.body.appendChild(div);
            let a = document.createElement('a');
            a.href = `details.html?id=${user.id}`;
            a.innerText = ' Click';
            div.appendChild(a);
            document.body.appendChild(div);
        }
    });