let minutes = 25;
let seconds = 0;
let isTimerRunning = false;
let intervalId = null;

function startTimer() {
    isTimerRunning = true;
    intervalId = setInterval(() => {
        seconds--;
        if (seconds < 0) {
            minutes--;
            seconds = 59;
        }
        if (minutes < 0) {
            clearInterval(intervalId);
            isTimerRunning = false;
            minutes = 25;
            seconds = 0;
            $('#timer').text(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
            alert('Time is up! Take a break.');
            return;
        }
        $('#timer').text(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
    }, 1000);
}

function stopTimer() {
    clearInterval(intervalId);
    isTimerRunning = false;
    minutes = 25;
    seconds = 0;
    $('#timer').text(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
}

$('#startButton').on('click', () => {
    if (!isTimerRunning) {
        startTimer();
    }
});

$('#stopButton').on('click', () => {
    if (isTimerRunning) {
        stopTimer();
    }
});
