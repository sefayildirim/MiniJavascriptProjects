$(document).ready(function(){

    $(document).keydown(function(event) {
        // Press A
        if (event.code === 'KeyA') {
            let audioClap = new Audio('sounds/clap.wav');
            audioClap.play();
            $('#aBorder').addClass('border-5');
        }
        // Press S
        if (event.code === 'KeyS') {
            let audioClap = new Audio('sounds/hihat.wav');
            audioClap.play();
            $('#sBorder').addClass('border-5');
        }
        // Press D
        if (event.code === 'KeyD') {
            let audioClap = new Audio('sounds/kick.wav');
            audioClap.play();
            $('#dBorder').addClass('border-5');
        }
        // Press F
        if (event.code === 'KeyF') {
            let audioClap = new Audio('sounds/openhat.wav');
            audioClap.play();
            $('#fBorder').addClass('border-5');
        }
    });

    $(document).keyup(function(event) {
        // Release A
        if (event.code === 'KeyA') {
            $('#aBorder').removeClass('border-5');
        }
        // Release S
        if (event.code === 'KeyS') {
            $('#sBorder').removeClass('border-5');
        }
        // Release D
        if (event.code === 'KeyD') {
            $('#dBorder').removeClass('border-5');
        }
        // Release F
        if (event.code === 'KeyF') {
            $('#fBorder').removeClass('border-5');
        }
    });

});