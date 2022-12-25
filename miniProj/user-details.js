let url = new URL(location.href);
let id = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(data => {

        let infDiv = document.createElement('div');
        infDiv.classList.add('userinf-block');
        let postDiv = document.createElement('div');
        postDiv.classList.add('post-block');
        let btn = document.createElement('button');
        let buttonDiv = document.createElement('div');
        buttonDiv.classList.add('user-button');
        btn.innerText = 'post of current user'.toUpperCase();
        buttonDiv.append(btn);


        function recursion(element) {
            for (const value in element) {
                if (typeof element[value] !== 'object'){
                    let p = document.createElement('p');
                    p.classList.add('user-item');
                    p.append(`${value} : ${element[value]}`);
                    infDiv.append(p);
                } else {
                    recursion(element[value]);
                }
            }
        }

        recursion(data);

        btn.onclick = function (){
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(response => response.json())
                .then(data => {

                    for (const item of data) {
                        let anchor = document.createElement('a');
                        anchor.innerText = 'Post details';
                        anchor.href = `post-details.html?id=${id}`;

                        let titleDivItem = document.createElement('div');
                        titleDivItem.append(item.title, anchor);
                        postDiv.append(titleDivItem);
                        btn.disabled =true
                    }

                });
        };

        document.body.append(infDiv, buttonDiv, postDiv);
    })