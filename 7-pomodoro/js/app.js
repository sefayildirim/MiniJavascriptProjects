let minutes = 25;
let seconds = 0;
let isTimerRunning = false;
let intervalId = null;

const timerElement = document.querySelector('#timer');
const startButton = document.querySelector('#startButton');
const stopButton = document.querySelector('#stopButton');

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
            timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            alert('Time is up! Take a break.');
            return;
        }
        timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
}

function stopTimer() {
    clearInterval(intervalId);
    isTimerRunning = false;
    minutes = 25;
    seconds = 0;
    timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

startButton.addEventListener('click', () => {
    if (!isTimerRunning) {
        startTimer();
    }
});

stopButton.addEventListener('click', () => {
    if (isTimerRunning) {
        stopTimer();
    }
});
