const rangeSpacing = document.querySelector('#rangeSpacing');
const rangeBlur = document.querySelector('#rangeBlur');
const color = document.querySelector('#color');
const borderImage = document.querySelector('#borderImage');

rangeSpacing.oninput = function (){
    borderImage.style.borderWidth = `${rangeSpacing.value}px`;
}

rangeBlur.oninput = function (){
    borderImage.style.filter = `blur(${rangeBlur.value}px)`
}

color.oninput = function (){
    borderImage.style.borderColor = color.value;
}
