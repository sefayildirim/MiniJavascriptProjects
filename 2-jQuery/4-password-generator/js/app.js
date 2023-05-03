$('#passwordGenerator').click(function(event) {
    event.preventDefault();
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}:<>?|-=[]\\;,./";
    let password = "";
    for (let i = 0; i < 10; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    $('#pass').val(password);
});

$('#copy').click(function(event) {
    event.preventDefault();
    $('#pass').select();
    document.execCommand('copy');
});
