let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let isRunning = false;

function updateDisplay() {
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
      updateDisplay();
    }, 1000);
    document.getElementById('start').disabled = true;
    document.getElementById('pause').disabled = false;
  }
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
  document.getElementById('start').disabled = false;
  document.getElementById('pause').disabled = true;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateDisplay();
  document.getElementById('start').disabled = false;
  document.getElementById('pause').disabled = true;
}
