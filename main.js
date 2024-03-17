const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')
const millisecondsEl = document.getElementById('milleseconds')
const btnStart = document.getElementById('startBtn')
const btnReset = document.getElementById('resetBtn')
const btnContinue = document.getElementById('continueBtn')
const btnPause = document.getElementById('pauseBtn')


let minutes = 0;
let seconds = 0;
let milleseconds = 0;
let paused = false

btnStart.addEventListener('click',startTime)

function startTime() {

}