// Задание - 1
const box = document.querySelector('.box')
let positionX = 0
let positionY = 0
const move = () => {
    if (positionX <= 446 && positionY <= 0) {
        positionX++
        box.style.left = `${positionX}px`
        setTimeout(move, 1)
    } else if (positionX >= 446 && positionY <= 446) {
        positionY++
        box.style.top = `${positionY}px`
        setTimeout(move, 1)
    } else if (positionX >= 0 && positionY >= 446) {
        positionX--
        box.style.left = `${positionX}px`
        setTimeout(move, 1)
    } else if (positionX <= 0 && positionY >= 0) {
        positionY--
        box.style.top = `${positionY}px`
        setTimeout(move, 1)
    }
}
move()

// Задание - 2
let counterElement = document.getElementById("counter");
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resumeButton = document.getElementById("resume");
let clearButton = document.getElementById("clear");
let counter = 0;
let intervalId;

function incrementCounter() {
    counter++;
    counterElement.textContent = counter;
}

startButton.addEventListener("click", function() {
    intervalId = setInterval(incrementCounter, 1000);
});

stopButton.addEventListener("click", function() {
    clearInterval(intervalId);
});

resumeButton.addEventListener("click", function() {
    intervalId = setInterval(incrementCounter, 1000);
});

clearButton.addEventListener("click", function() {
    clearInterval(intervalId);
    counter = 0;
    counterElement.textContent = counter;
});