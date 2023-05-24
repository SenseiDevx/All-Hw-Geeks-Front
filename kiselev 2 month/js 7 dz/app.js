let timer;
let minutes = 1;
let seconds = 0;
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let timerDisplay = document.getElementById('timer');
let hourglass = document.getElementById('hourglass');

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);

function startTimer() {
    timer = setInterval(decrementTime, 1000);
    startButton.disabled = true;
    stopButton.disabled = false;
    hourglass.style.animationPlayState = 'running';
}

function decrementTime() {
    if (seconds === 0) {
        if (minutes === 0) {
            clearInterval(timer);
            timerDisplay.innerHTML = '0:00';
            startButton.disabled = false;
            stopButton.disabled = true;
            hourglass.style.animationPlayState = 'paused';
            return;
        }
        minutes--;
        seconds = 59;
    } else {
        seconds--;
    }
    timerDisplay.innerHTML = minutes.toString().padStart(1, '0') + ':' + seconds.toString().padStart(2, '0');
}

function stopTimer() {
    clearInterval(timer);
    timerDisplay.innerHTML = '1:00';
    startButton.disabled = false;
    stopButton.disabled = true;
    hourglass.style.animationPlayState = 'paused';
}