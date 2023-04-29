const increase = document.querySelector('#increase')
const decrease = document.querySelector('#decrease')
const counter = document.querySelector('#counter')

let count = 0;

increase.addEventListener('click',function (e){
    count++;
    counter.innerText = count;
})

decrease.addEventListener('click', function(e) {
    count--;
    counter.innerText = count;
});