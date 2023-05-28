//SELECTORS 

const day = document.querySelector('.days');
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const seconds = document.querySelector('.second');

// FUNCTIONS

const newYears = "1 Jan 2024";

function countdown() {
    const currentDate = new Date();
    const newYearsDate = new Date(newYears);

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds/ 3600 / 24);
    const houres = Math.floor(totalSeconds / 3600) % 24 ;
    const min = Math.floor(totalSeconds / 60) %60;
    const sec = Math.floor(totalSeconds) % 60;

    day.innerHTML = days;
    hour.innerHTML = formatTime(houres);
    minute.innerHTML = formatTime(min);
    seconds.innerHTML = formatTime(sec);
    
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}
countdown()

setInterval(countdown, 1000)