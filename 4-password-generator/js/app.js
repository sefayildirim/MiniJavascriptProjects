const passwordGenerator = document.querySelector('#passwordGenerator');
const pass = document.querySelector('#pass');
const copy = document.querySelector('#copy');

passwordGenerator.addEventListener('click',function (e) {
    e.preventDefault()
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}:<>?|-=[]\;,./";
    let password = "";
    for (let i = 0; i < 10; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    pass.value = password;
});

copy.addEventListener('click',function (e){
    e.preventDefault()
    pass.select();
    document.execCommand('copy');
})