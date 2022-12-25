let url = new URL(location.href);
let id = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(data => {

        let btn = document.createElement('button');
        btn.innerText = 'comments on the post'.toUpperCase();
        let btnDiv = document.createElement('div');
        btnDiv.classList.add('comment-button');
        btnDiv.append(btn);
        let main = document.createElement('div');
        main.classList.add('info');
        let mainCommentDiv = document.createElement('div');
        mainCommentDiv.classList.add('comment')

        for (const value in data) {

            let child = document.createElement('div');
            child.append(`${value} : ${data[value]}`);
            main.append(child);
        }

        btn.onclick = function (){
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
                .then(response => response.json())
                .then(data => {

                    for (const item of data) {
                        let mainCommentDivItem = document.createElement('div');
                        mainCommentDivItem.append(item.body);
                        mainCommentDiv.append(mainCommentDivItem);
                        btn.disabled =true
                    }

                });
        };

        document.body.append(main, btnDiv,mainCommentDiv);

    })
