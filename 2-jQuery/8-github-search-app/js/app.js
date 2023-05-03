const api = "https://api.github.com/search";

$('#searchButton').on('click', function (e){
    $.ajax({
        url: `${api}/users?q=${$('#username').val()}`,
        success: function(response) {
            const users = response.items;

            // Daha önce var olan sonuçları siler
            $('#resultsList').html('');

            // Her bir kullanıcı için bir li elementi oluşturur ve sonuç listesine ekler
            users.forEach(user => {
                let div = $('<div>', { class: 'list-group-item d-flex align-items-center' });
                let img = $('<img>', { class: 'border rounded-circle', width: '50', height: '50', src: user.avatar_url });
                let a = $('<a>', { href: user.html_url, target: '_blank' });
                let h5 = $('<h5>', { class: 'ms-3', text: user.login });

                const li = $('<li>', { text: user.login });
                $('#resultsList').append(div);
                div.append(img);
                div.append(a);
                a.append(h5);
            });
        }
    });
});
