const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const millisecondsEl = document.getElementById("milliseconds");
const btnStart = document.getElementById("startBtn");
const btnReset = document.getElementById("resetBtn");
const btnContinue = document.getElementById("continueBtn");
const btnPause = document.getElementById("pauseBtn");
const musica = document.getElementById('musica')

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let paused = false;

btnStart.addEventListener("click", startTime);
btnPause.addEventListener('click',pause)
btnContinue.addEventListener('click',continuar)
btnReset.addEventListener('click',reset)

function startTime() {
  interval = setInterval(() => {
    if (!paused) {
      milliseconds += 10;
      if (milliseconds === 1000) {
        seconds++;
        milliseconds = 0;
      }
      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }

      minutesEl.textContent = formatTime(minutes);
      secondsEl.textContent = formatTime(seconds);
      millisecondsEl.textContent = formatMilliseconds(milliseconds);
      btnStart.style.display = 'none'
      btnPause.style.display = 'block'

    }
    
  }, 10);
}

function formatTime(time){
    return time < 10 ? `0${time}`: time
}
function formatMilliseconds(time){
    return time < 10 ? `00${time}` : `${time}`.padStart(3, '0');

}


function pause(){
   paused = true
   btnPause.style.display = 'none'
   btnContinue.style.display = 'block'
}


function continuar(){
    paused = false
    btnPause.style.display = 'block'
    btnContinue.style.display = 'none'
 }

 function reset(){
    
    clearInterval(interval)
    

    minutes = 0
    milliseconds = 0
    seconds = 0


    millisecondsEl.textContent = "000"
    minutesEl.textContent = "00"
    secondsEl.textContent = "00"

    btnStart.style.display = 'block'
    btnPause.style.display = 'none'
    btnReset.style.display = 'none'
    btnReset.style.display = 'block'

 }

 function loadAudio() {

    document.getElementById('musica').play();
  }

  document.body.addEventListener('click', function() {

    document.getElementById('musica').play();
  });