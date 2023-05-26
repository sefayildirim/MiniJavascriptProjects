let aBorder = document.querySelector("#aBorder");
let sBorder = document.querySelector("#sBorder");
let dBorder = document.querySelector("#dBorder");
let fBorder = document.querySelector("#fBorder");

document.addEventListener('keydown', function(event) {
    // Press A
    if (event.code === 'KeyA') {
        let audioClap = new Audio('sounds/tom.wav');
        audioClap.play();
        aBorder.classList.add('border-5')
    }
    // Press S
    if (event.code === 'KeyS') {
        let audioClap = new Audio('sounds/hihat.wav');
        audioClap.play();
        sBorder.classList.add('border-5')
    }
    // Press D
    if (event.code === 'KeyD') {
        let audioClap = new Audio('sounds/kick.wav');
        audioClap.play();
        dBorder.classList.add('border-5')
    }
    // Press F
    if (event.code === 'KeyF') {
        let audioClap = new Audio('sounds/openhat.wav');
        audioClap.play();
        fBorder.classList.add('border-5')
    }
});

document.addEventListener('keyup', function(event) {
    // Release A
    if (event.code === 'KeyA') {
        aBorder.classList.remove('border-5')
    }
    // Release S
    if (event.code === 'KeyS') {
        sBorder.classList.remove('border-5')
    }
    // Release D
    if (event.code === 'KeyD') {
        dBorder.classList.remove('border-5')
    }
    // Release F
    if (event.code === 'KeyF') {
        fBorder.classList.remove('border-5')
    }
});
