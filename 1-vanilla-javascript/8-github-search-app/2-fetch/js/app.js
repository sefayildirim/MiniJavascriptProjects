const searchButton = document.querySelector('#searchButton');
const username = document.querySelector('#username');
const api = "https://api.github.com/search";
const resultsList = document.querySelector('#resultsList');

searchButton.addEventListener('click', () => {
    fetch(`${api}/users?q=${username.value}`)
        .then(response => response.json())
        .then(data => {
            const users = data.items;
            // Daha önce var olan sonuçları siler
            resultsList.innerHTML = '';
            // Her bir kullanıcı için bir li elementi oluşturur ve sonuç listesine ekler
            users.forEach(user => {

                let div = document.createElement('div');
                div.className = "list-group-item d-flex align-items-center";

                let img = document.createElement('img');
                img.className = "border rounded-circle";
                img.width = "50";
                img.height = "50";
                img.src = user.avatar_url;

                let a = document.createElement('a');
                a.href = user.html_url;
                a.target = "_blank";

                let h5 = document.createElement('h5');
                h5.className = "ms-3";
                h5.textContent = user.login;

                const li = document.createElement('li');
                li.textContent = user.login;
                resultsList.appendChild(div);
                div.appendChild(img);
                div.appendChild(a)
                a.appendChild(h5);
            });
        })
        .catch(error => console.error(error));
});
