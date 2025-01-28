let countdown;
let minutesDisplay = document.getElementById('minutes');
let secondsDisplay = document.getElementById('seconds');
let startButton = document.getElementById('startButton');
let resetButton = document.getElementById('resetButton');

let totalTime = 0; // общее время в секундах
let isRunning = false;

startButton.addEventListener('click', function() {
    if (isRunning) {
        clearInterval(countdown); // если таймер уже работает, остановим его
        isRunning = false;
        startButton.textContent = 'Старт';
    } else {
        totalTime = 10 * 60; // можно поставить любое значение (10 минут)
        startTimer();
        isRunning = true;
        startButton.textContent = 'Пауза';
    }
});

resetButton.addEventListener('click', function() {
    clearInterval(countdown);
    totalTime = 0;
    minutesDisplay.textContent = '00';
    secondsDisplay.textContent = '00';
    startButton.textContent = 'Старт';
    isRunning = false;
});

function startTimer() {
    countdown = setInterval(function() {
        if (totalTime <= 0) {
            clearInterval(countdown);
            alert('Время вышло!');
            isRunning = false;
            startButton.textContent = 'Старт';
        } else {
            totalTime--;
            updateDisplay();
        }
    }, 1000);
}

function updateDisplay() {
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    minutesDisplay.textContent = formatTime(minutes);
    secondsDisplay.textContent = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}
