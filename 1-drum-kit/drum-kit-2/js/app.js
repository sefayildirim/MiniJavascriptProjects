const soundMap = {
    'KeyA': 'sounds/clap.wav',
    'KeyS': 'sounds/hihat.wav',
    'KeyD': 'sounds/kick.wav',
    'KeyF': 'sounds/kick.wav'
};

const borderMap = {
    'KeyA': '#aBorder',
    'KeyS': '#sBorder',
    'KeyD': '#dBorder',
    'KeyF': '#fBorder'
};

document.addEventListener('keydown', function(event) {
    const audio = new Audio(soundMap[event.code]);
    audio.play();
    const border = document.querySelector(borderMap[event.code]);
    border.classList.add('border-5');
});

document.addEventListener('keyup', function(event) {
    const border = document.querySelector(borderMap[event.code]);
    border.classList.remove('border-5');
});
