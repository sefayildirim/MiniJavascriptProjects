const soundMap = {
    'KeyA': 'sounds/clap.wav',
    'KeyS': 'sounds/hihat.wav',
    'KeyD': 'sounds/kick.wav',
    'KeyF': 'sounds/openhat.wav'
};

const borderMap = {
    'KeyA': '#aBorder',
    'KeyS': '#sBorder',
    'KeyD': '#dBorder',
    'KeyF': '#fBorder'
};

$(document).on('keydown', function(event) {
    const audio = new Audio(soundMap[event.code]);
    audio.play();
    const border = $(borderMap[event.code]);
    border.addClass('border-5');
});

$(document).on('keyup', function(event) {
    const border = $(borderMap[event.code]);
    border.removeClass('border-5');
});
